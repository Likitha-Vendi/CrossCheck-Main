import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  BrainCircuit,
  FileCheck2,
  ChartNoAxesCombined,
  SearchCheck,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
} from 'lucide-react';
import Logo from '../components/Logo';

const COMPANY_ADDRESS = 'GoSpaze - Building No- 1314, 1st, 3rd & 4th Floor, Paramahansa Yogananda Rd, above Imperial Restaurant, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560008';
const ENQUIRY_EMAIL = 'HR@cross-check.in';

const features = [
  [Users, 'Offer Intelligence', 'Detect multiple active offers and track offer history.'],
  [ShieldCheck, 'Employment Verification', 'Verify current and previous employment records.'],
  [BrainCircuit, 'AI Hiring Risk', 'Calculate a transparent 0–100 hiring risk score.'],
  [SearchCheck, 'Duplicate Detection', 'Identify matching email, mobile and resume records.'],
  [FileCheck2, 'Document Verification', 'Manage identity, education and employment documents.'],
  [ChartNoAxesCombined, 'Reports & Analytics', 'Generate decision-ready candidate verification reports.'],
];

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <Logo />
        <nav aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          <Link className="btn secondary" to="/login">Login</Link>
          <a className="btn" href="#contact">Request Demo</a>
        </div>
      </header>

      <section className="hero">
        <div>
          <span className="eyebrow">HIRING INTELLIGENCE PLATFORM</span>
          <h1><em>Before You Hire.</em><br />Know The Complete Hiring Risk Before Releasing An Offer Letter.</h1>
          <p>CrossCheck Helps Employers Verify Candidate Information, Detect Duplicate Profiles And Active Offers, Assess Hiring Risk, And Predict Joining Probability.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn">Request Demo <ArrowRight size={17} /></a>
            <a href="#features" className="btn secondary">Explore Features</a>
          </div>
          <div className="trusted">
            <small>Built For Modern Hiring Teams</small>
            <b>IT Companies</b><b>Recruitment Agencies</b><b>Enterprises</b>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit o1" />
          <div className="orbit o2" />
          <div className="shield-core"><ShieldCheck /></div>
          <div className="float-card fc1"><Users /> Multiple Offers Detected</div>
          <div className="float-card fc2"><CheckCircle2 /> Employment Verified</div>
          <div className="float-card fc3"><ChartNoAxesCombined /> Risk Score 92/100</div>
          <div className="float-card fc4"><BrainCircuit /> Joining Probability 94%</div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-head"><span>KEY FEATURES</span><h2>Everything Needed For Reliable Hiring Decisions</h2></div>
        <div className="feature-grid">
          {features.map(([Icon, title, description]) => (
            <article key={title}><span><Icon /></span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section id="how" className="split-section">
        <div className="vision-art"><ShieldCheck /></div>
        <div>
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>Building Trust In Every Hire</h2>
          <p>Capture Candidate Details, Verify Employment, Education And Identity, Calculate Risk And Joining Probability, And Generate A Complete Report.</p>
          <div className="steps">
            <div><b>01</b><span>Add Candidate</span></div>
            <div><b>02</b><span>Verify Information</span></div>
            <div><b>03</b><span>Assess Risk</span></div>
            <div><b>04</b><span>Make Decision</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="cta">
        <div><span>READY TO HIRE WITH CONFIDENCE?</span><h2>Let’s Make Every Hire A Confident Hire.</h2><p>Give Your Team One Clean Platform For Verification, Intelligence And Reporting.</p></div>
        <a className="btn" href="#contact">Contact Sales</a>
      </section>

      <section id="contact" className="contact">
        <div className="contact-intro">
          <h2>Request A Product Demo</h2>
          <p>Share Your Requirement And Our Team Will Contact You.</p>
          <div className="company-contact-details">
            <div>
              <span className="contact-icon"><MapPin size={20} /></span>
              <p><strong>Company Address</strong>{COMPANY_ADDRESS}</p>
            </div>
            <div>
              <span className="contact-icon"><Mail size={20} /></span>
              <p><strong>For Enquiry</strong><a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a></p>
            </div>
          </div>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); alert('Demo request captured successfully.'); }}>
          <input required placeholder="Your Name" />
          <input required type="email" placeholder="Work Email" />
          <input required placeholder="Company" />
          <button className="btn">Submit Request</button>
        </form>
      </section>

      <footer>
        <Logo light />
        <div className="footer-company-details">
          <span>{COMPANY_ADDRESS}</span>
          <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
        </div>
        <span>© 2026 CrossCheck. Secure • Reliable • Professional</span>
      </footer>
    </div>
  );
}
