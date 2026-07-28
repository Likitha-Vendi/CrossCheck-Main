package com.crosscheck.service;
import com.crosscheck.model.Candidate;import com.crosscheck.model.DocumentRecord;import com.crosscheck.repository.DocumentRepository;import org.springframework.stereotype.Service;import java.util.*;
@Service public class RiskEngineService{
 private final DocumentRepository docs; public RiskEngineService(DocumentRepository docs){this.docs=docs;}
 public void calculate(Candidate c){
  int gap=0;if(c.getRelievingDate()!=null&&c.getJoiningDate()!=null&&c.getJoiningDate().isAfter(c.getRelievingDate()))gap=(int)java.time.temporal.ChronoUnit.MONTHS.between(c.getRelievingDate(),c.getJoiningDate());c.setEmploymentGapMonths(Math.max(0,gap));
  List<DocumentRecord> all=c.getId()==null?List.of():docs.findByCandidateIdOrderByUploadedAtDesc(c.getId());
  Set<String> verified=new HashSet<>();for(DocumentRecord d:all)if("VERIFIED".equalsIgnoreCase(d.getStatus()))verified.add(n(d.getType()).toUpperCase(Locale.ROOT));
  boolean identityProof=(has(c.getAadhaarDocumentData())||verified.contains("AADHAAR"))&&(has(c.getPanDocumentData())||verified.contains("PAN"));
  if(has(c.getPassportNumber()))identityProof=identityProof&&(has(c.getPassportDocumentData())||verified.contains("PASSPORT"));
  boolean offerProof=has(c.getOfferLetterData())||verified.contains("OFFER_LETTER");
  int trust=0;
  if("VERIFIED".equalsIgnoreCase(c.getEmploymentStatus()))trust+=20;
  if("VERIFIED".equalsIgnoreCase(c.getEducationStatus()))trust+=15;
  if("VERIFIED".equalsIgnoreCase(c.getIdentityStatus())&&identityProof)trust+=20;
  if("VERIFIED".equalsIgnoreCase(c.getOfferLetterStatus())&&offerProof)trust+=15;
  List<String> required=new ArrayList<>(List.of("RESUME","AADHAAR","PAN","OFFER_LETTER"));if(c.getExperienceYears()>0){required.add("EXPERIENCE_LETTER");required.add("SALARY_SLIP");}if(has(c.getPassportNumber()))required.add("PASSPORT");
  long verifiedRequired=required.stream().filter(verified::contains).count();trust+=(int)Math.round(20.0*verifiedRequired/required.size());
  if(!c.isDuplicateEmail()&&!c.isDuplicateMobile()&&!c.isDuplicateResume())trust+=4;if(c.getActiveOffers()==0)trust+=2;if(gap<=3)trust+=2;if(c.getNoticePeriodDays()<=60)trust+=2;
  trust=Math.max(0,Math.min(100,trust));c.setTrustScore(trust);
  int risk=100-trust;if(c.isDuplicateEmail())risk+=15;if(c.isDuplicateMobile())risk+=12;if(c.isDuplicateResume())risk+=15;risk+=Math.min(c.getActiveOffers()*10,20);if(gap>3)risk+=10;if(c.getNoticePeriodDays()>60)risk+=8;if("FAILED".equalsIgnoreCase(c.getOfferLetterStatus())||"MISMATCH".equalsIgnoreCase(c.getOfferLetterStatus()))risk+=20;if("FAILED".equalsIgnoreCase(c.getIdentityStatus()))risk+=15;risk=Math.max(0,Math.min(100,risk));c.setRiskScore(risk);c.setRiskLevel(risk<=40?"LOW":risk<=70?"MEDIUM":"HIGH");
  int salaryFit=c.getCurrentSalary()>0?(int)Math.max(0,100-Math.abs(c.getExpectedSalary()-c.getCurrentSalary())/c.getCurrentSalary()*100):70;int join=(c.getCandidateInterest()+c.getInterviewFeedback()+c.getPreviousAcceptanceRate()+salaryFit+(100-Math.min(c.getNoticePeriodDays(),100)))/5-c.getActiveOffers()*8;c.setJoiningProbability(Math.max(5,Math.min(99,join)));
  boolean fullyVerified=trust>=85&&"VERIFIED".equalsIgnoreCase(c.getEmploymentStatus())&&"VERIFIED".equalsIgnoreCase(c.getEducationStatus())&&"VERIFIED".equalsIgnoreCase(c.getIdentityStatus())&&"VERIFIED".equalsIgnoreCase(c.getOfferLetterStatus())&&verifiedRequired==required.size();c.setVerificationStatus(fullyVerified?"VERIFIED":"PENDING");
  if(fullyVerified&&risk<=40&&c.getJoiningProbability()>=70){c.setAiRecommendation("RECOMMENDED TO HIRE");c.setAiReason("Required documents and verification checks are complete, with low risk and strong joining intent.");}else if(risk>=71){c.setAiRecommendation("HOLD / FURTHER REVIEW");c.setAiReason("High-risk or unverified document indicators require additional review before hiring.");}else{c.setAiRecommendation("PROCEED WITH CAUTION");c.setAiReason("Trust points are awarded only after documents and verification checks are approved. Complete all pending reviews.");}
 }
 private boolean has(String v){return v!=null&&!v.isBlank();} private String n(String v){return v==null?"":v;}
}
