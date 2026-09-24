import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, ShieldCheck, Mail } from 'lucide-react';
import { agencyData, getOfficeLiveStatus } from '../data/agencyData';

interface HeaderProps {
  onOpenQuote: (defaultProduct?: string) => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [officeStatus, setOfficeStatus] = useState(getOfficeLiveStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Refresh office status periodically
    const timer = setInterval(() => {
      setOfficeStatus(getOfficeLiveStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="live-status-pill">
              <span className={`status-dot ${officeStatus.isOpen ? 'is-open' : 'is-closed'}`} />
              <span className="status-text">{officeStatus.statusMessage}</span>
            </span>
            <span className="divider-dot">•</span>
            <span className="location-pill">
              <MapPin size={13} className="text-teal" />
              <span>{agencyData.street}, {agencyData.city}, NC</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href={`mailto:${agencyData.email}`} className="top-link">
              <Mail size={13} />
              <span>{agencyData.email}</span>
            </a>
            <span className="divider-dot">•</span>
            <a href={`tel:${agencyData.phoneRaw}`} className="top-phone">
              <Phone size={13} />
              <strong>{agencyData.phone}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="container main-nav-inner">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="brand-logo"
            aria-label="Aydlett Insurance Agency Home"
          >
            <div className="brand-icon">
              <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
                <path d="M20 3L35 8V22C35 31.5 20 37 20 37C20 37 5 31.5 5 22V8L20 3Z" fill="#0A192F" stroke="#00A896" strokeWidth="2"/>
                <path d="M20 10L13 27H17L18.5 23H21.5L23 27H27L20 10Z M20 16.5L21.8 20.5H18.2L20 16.5Z" fill="#FFFFFF"/>
                <circle cx="20" cy="30" r="1.8" fill="#00A896"/>
              </svg>
            </div>
            <div className="brand-text">
              <div className="brand-title">AYDLETT</div>
              <div className="brand-subtitle">INSURANCE AGENCY</div>
              <div className="brand-locality">Kill Devil Hills · Outer Banks, NC</div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleNavClick('products')}
                aria-expanded={productsDropdownOpen}
              >
                <span>Insurance Coverage</span>
                <ChevronDown size={15} className={`chevron ${productsDropdownOpen ? 'rotated' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    <div className="dropdown-col">
                      <div className="dropdown-col-title">Personal & Coastal</div>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Homeowners Insurance</span>
                        <span className="item-desc">Outer Banks primary & coastal homes</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item highlight-coastal">
                        <span className="item-title">Coastal Flood Insurance</span>
                        <span className="item-desc">NFIP & private rising water protection</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Auto Insurance</span>
                        <span className="item-desc">Multi-carrier personal auto rates</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Boat & Watercraft</span>
                        <span className="item-desc">Sound, inlet & ocean marine coverage</span>
                      </button>
                    </div>

                    <div className="dropdown-col">
                      <div className="dropdown-col-title">Commercial & Specialty</div>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Business Owners (BOP)</span>
                        <span className="item-desc">Package protection for local shops</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">General Liability</span>
                        <span className="item-desc">Lawsuit defense & premises protection</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Commercial Auto & Fleet</span>
                        <span className="item-desc">Work trucks and business vehicles</span>
                      </button>
                      <button onClick={() => handleNavClick('products')} className="dropdown-item">
                        <span className="item-title">Workers’ Compensation</span>
                        <span className="item-desc">NC state-mandated employee coverage</span>
                      </button>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <span>Independent Agent Advantage: We shop 20+ carriers for you</span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => handleNavClick('coastal-advantage')} className="nav-link">
              The Coastal Advantage
            </button>
            <button onClick={() => handleNavClick('why-independent')} className="nav-link">
              Why Independent
            </button>
            <button onClick={() => handleNavClick('about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => handleNavClick('location')} className="nav-link">
              Office & Hours
            </button>
            <button onClick={() => handleNavClick('faq')} className="nav-link">
              FAQ
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="nav-actions">
            <a href={`tel:${agencyData.phoneRaw}`} className="btn-call-header" title="Call Aydlett Insurance">
              <div className="call-icon-circle">
                <Phone size={15} />
              </div>
              <div className="call-info">
                <span className="call-label">Speak with an Agent</span>
                <span className="call-number">{agencyData.phone}</span>
              </div>
            </a>

            <button 
              onClick={() => onOpenQuote()} 
              className="btn btn-primary btn-quote-header"
              id="header-quote-cta"
            >
              <ShieldCheck size={17} />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-status-strip">
              <span className={`status-dot ${officeStatus.isOpen ? 'is-open' : 'is-closed'}`} />
              <span>{officeStatus.statusMessage}</span>
            </div>

            <div className="mobile-nav-links">
              <button onClick={() => handleNavClick('products')} className="mobile-nav-link">
                Insurance Products (All 13 Lines)
              </button>
              <button onClick={() => handleNavClick('coastal-advantage')} className="mobile-nav-link">
                Coastal & Flood Protection
              </button>
              <button onClick={() => handleNavClick('why-independent')} className="mobile-nav-link">
                Why Choose An Independent Agency
              </button>
              <button onClick={() => handleNavClick('about')} className="mobile-nav-link">
                About Aydlett (30+ Years in OBX)
              </button>
              <button onClick={() => handleNavClick('location')} className="mobile-nav-link">
                Office Location & Map
              </button>
              <button onClick={() => handleNavClick('faq')} className="mobile-nav-link">
                Insurance FAQs
              </button>
            </div>

            <div className="mobile-contact-card">
              <div className="mobile-contact-title">Direct Office Contact</div>
              <a href={`tel:${agencyData.phoneRaw}`} className="btn btn-navy mobile-call-btn">
                <Phone size={18} />
                <span>Call {agencyData.phone}</span>
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} 
                className="btn btn-primary mobile-quote-btn"
              >
                <ShieldCheck size={18} />
                <span>Request Free Quote</span>
              </button>
              <div className="mobile-hours-summary">
                <Clock size={14} />
                <span>{agencyData.street}, {agencyData.city}, NC 27948</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
