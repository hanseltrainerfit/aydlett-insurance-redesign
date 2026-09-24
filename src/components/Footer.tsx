import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Printer, ArrowUp, Clock } from 'lucide-react';
import { agencyData } from '../data/agencyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: (productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Col 1: Brand & Contact */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <div className="brand-icon">
              <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                <path d="M20 3L35 8V22C35 31.5 20 37 20 37C20 37 5 31.5 5 22V8L20 3Z" fill="#0A192F" stroke="#00A896" strokeWidth="2"/>
                <path d="M20 10L13 27H17L18.5 23H21.5L23 27H27L20 10Z M20 16.5L21.8 20.5H18.2L20 16.5Z" fill="#FFFFFF"/>
                <circle cx="20" cy="30" r="1.8" fill="#00A896"/>
              </svg>
            </div>
            <div>
              <div className="footer-brand-name">AYDLETT</div>
              <div className="footer-brand-sub">INSURANCE AGENCY</div>
            </div>
          </div>

          <p className="footer-bio">
            Family-owned, independent insurance agency serving the Outer Banks, Northeast North Carolina, 
            and Virginia for over 30 years. We work for you—not the insurance company.
          </p>

          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <MapPin size={15} className="text-teal" />
              <span>{agencyData.street}, {agencyData.city}, {agencyData.state} {agencyData.zip}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} className="text-teal" />
              <a href={`tel:${agencyData.phoneRaw}`} className="font-bold underline">
                {agencyData.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <Printer size={15} className="text-teal" />
              <span>Fax: {agencyData.fax}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="text-teal" />
              <a href={`mailto:${agencyData.email}`} className="text-teal underline">
                {agencyData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Personal & Coastal Lines */}
        <div className="footer-col">
          <h4 className="footer-col-title">Personal & Coastal</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={() => onOpenQuote('homeowners')} className="footer-link">
                Homeowners Insurance
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('flood')} className="footer-link">
                Coastal Flood Insurance (NFIP)
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('auto')} className="footer-link">
                Auto & Vehicle Insurance
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('boat')} className="footer-link">
                Boat & Marine Watercraft
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('renters')} className="footer-link">
                Renters Insurance
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('motorcycle')} className="footer-link">
                Motorcycle & ATV
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('rv')} className="footer-link">
                RV & Travel Trailer
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('life-health')} className="footer-link">
                Life & Health Insurance
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Commercial & Business Lines */}
        <div className="footer-col">
          <h4 className="footer-col-title">Commercial Insurance</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={() => onOpenQuote('bop')} className="footer-link">
                Business Owners Policy (BOP)
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('general-liability')} className="footer-link">
                Commercial General Liability
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('commercial-property')} className="footer-link">
                Commercial Coastal Property
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('commercial-auto')} className="footer-link">
                Commercial Auto & Fleet
              </button>
            </li>
            <li>
              <button onClick={() => onOpenQuote('workers-comp')} className="footer-link">
                Workers’ Compensation
              </button>
            </li>
          </ul>

          <div className="footer-hours-preview">
            <div className="preview-label">
              <Clock size={13} className="text-teal" />
              <span>Office Hours</span>
            </div>
            <div className="preview-hours">
              Mon, Tue, Thu, Fri: 9am – 5pm<br />
              Wednesday: 9am – 12pm<br />
              Sat & Sun: Closed
            </div>
          </div>
        </div>

        {/* Col 4: Agency Navigation & Quote */}
        <div className="footer-col">
          <h4 className="footer-col-title">Agency & Service</h4>
          <ul className="footer-links-list">
            <li>
              <button onClick={() => onNavigate('about')} className="footer-link">
                About Us (30+ Years)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('why-independent')} className="footer-link">
                Why Independent
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('coastal-advantage')} className="footer-link">
                The Coastal Advantage
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('location')} className="footer-link">
                Office Location & Map
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('faq')} className="footer-link">
                Insurance FAQs
              </button>
            </li>
          </ul>

          <div className="footer-quote-box">
            <strong>Ready for a Comparison?</strong>
            <p>We’ll evaluate your current policies with zero obligation.</p>
            <button onClick={() => onOpenQuote()} className="btn btn-primary btn-sm footer-quote-btn">
              <ShieldCheck size={14} />
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimers & Regulatory Notices */}
      <div className="footer-disclaimers">
        <div className="container">
          <div className="disclaimer-text">
            <strong>Legal Notice & Binding Disclaimer:</strong> Insurance coverage cannot be bound, altered, or cancelled via website form submission or email. Coverage is only effective upon direct written confirmation from a licensed agent at Aydlett Insurance Agency. Statements on this site are for informational purposes only and do not modify the formal terms, conditions, or exclusions of any specific insurance policy contract.
          </div>
          <div className="disclaimer-text mt-2">
            Aydlett Insurance Agency is a licensed insurance agency serving clients across North Carolina and Virginia. We partner with multiple independent insurance carriers.
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back-to-Top Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <div className="copyright-text">
            © {new Date().getFullYear()} Aydlett Insurance Agency. All rights reserved. 208 W. Walker St, Kill Devil Hills, NC 27948.
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
