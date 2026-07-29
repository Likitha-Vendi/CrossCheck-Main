import { useState } from 'react';
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
  Menu,
  X,
} from 'lucide-react';
import Logo from '../components/Logo';

const COMPANY_ADDRESS = 'GoSpaze - Building No- 1314, 1st, 3rd & 4th Floor, Paramahansa Yogananda Rd, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560008';
const ENQUIRY_EMAIL = 'HR@cross-check.in';
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_ADDRESS)}`;

const features = [
  [Users, 'Offer Intelligence', 'Detect Multiple Active Offers And Track Offer History.'],
  [ShieldCheck, 'Employment Verification', 'Verify Current And Previous Employment Records.'],
  [BrainCircuit, 'AI Hiring Risk', 'Calculate A Transparent 0–100 Hiring Risk Score.'],
  [SearchCheck, 'Duplicate Detection', 'Identify Matching Email, Mobile And Resume Records.'],
  [FileCheck2, 'Document Verification', 'Manage Identity, Education And Employment Documents.'],
  [ChartNoAxesCombined, 'Reports & Analytics', 'Generate Decision-Ready Candidate Verification Reports.'],
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="landing">
      <header className={`landing-nav ${menuOpen ? 'menu-open' : ''}`}>
        <Logo />
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav aria-label="Primary Navigation" className={menuOpen ? 'open' : ''}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how" onClick={closeMenu}>How It Works</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <Link className="mobile-login-link" to="/login" onClick={closeMenu}>Login</Link>
          <a className="mobile-demo-link" href="#contact" onClick={closeMenu}>Request Demo</a>
        </nav>
        <div className="desktop-nav-actions">
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
              <p><strong>Company Address</strong><a className="address-link" href={MAP_URL} target="_blank" rel="noreferrer">{COMPANY_ADDRESS}</a></p>
            </div>
            <div>
              <span className="contact-icon"><Mail size={20} /></span>
              <p><strong>For Enquiry</strong><a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a></p>
            </div>
          </div>
        </div>
        <form className="demo-request-form" onSubmit={(event) => { event.preventDefault(); alert('Demo request captured successfully.'); }}>
          <input required className="demo-input" placeholder="Your Name" />
          <input required className="demo-input" type="email" placeholder="Work Email" />
          <input required className="demo-input" placeholder="Company" />
          <button className="btn demo-submit">Submit Request</button>
        </form>
      </section>

      <footer>
        <Logo light />
        <div className="footer-company-details">
          <a className="footer-address-link" href={MAP_URL} target="_blank" rel="noreferrer">{COMPANY_ADDRESS}</a>
          <a href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
        </div>
        <span>© 2026 CrossCheck. Secure • Reliable • Professional</span>
      </footer>
    </div>
  );
}
