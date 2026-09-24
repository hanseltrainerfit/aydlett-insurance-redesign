import React from 'react';
import { ShieldCheck, Phone, CheckCircle2, Waves, Home, Car, Anchor, Building2, ArrowRight } from 'lucide-react';
import { agencyData } from '../data/agencyData';

interface HeroProps {
  onOpenQuote: (defaultProduct?: string) => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProducts }) => {
  const quickPills = [
    { label: 'Home Insurance', id: 'homeowners', icon: Home },
    { label: 'Flood Coverage', id: 'flood', icon: Waves },
    { label: 'Auto Insurance', id: 'auto', icon: Car },
    { label: 'Boat & Marine', id: 'boat', icon: Anchor },
    { label: 'Commercial BOP', id: 'bop', icon: Building2 },
  ];

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay" />
      
      <div className="container hero-container">
        <div className="hero-content">
          {/* Eyebrow Pill */}
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">Kill Devil Hills · Outer Banks, NC</span>
            <span className="eyebrow-text">Independent Insurance Since 1994</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="hero-title">
            Insurance Coverage Built Around <span className="highlight-text">Coastal Living</span>.
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            For over 30 years, Aydlett Insurance has protected Outer Banks families, homes, 
            boats, and businesses. As an independent agency, we don’t work for one insurance 
            company—we work for you, shopping top national and regional carriers for the best rates and coverage.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button 
              onClick={() => onOpenQuote()} 
              className="btn btn-primary btn-lg hero-btn-primary"
              id="hero-start-quote-btn"
            >
              <ShieldCheck size={20} />
              <span>Start Your Free Quote</span>
            </button>

            <a 
              href={`tel:${agencyData.phoneRaw}`} 
              className="btn btn-secondary btn-lg hero-btn-call"
              id="hero-call-btn"
            >
              <Phone size={19} className="text-teal" />
              <span>Call (252) 441-9393</span>
            </a>
          </div>

          {/* Interactive Fast-Launch Quote Bar */}
          <div className="hero-quick-quote-card">
            <div className="quick-quote-label">
              <span>What would you like to protect today?</span>
              <button onClick={onExploreProducts} className="quick-quote-view-all">
                View all 13 coverages <ArrowRight size={13} />
              </button>
            </div>
            <div className="quick-quote-pills">
              {quickPills.map((pill) => {
                const IconComponent = pill.icon;
                return (
                  <button
                    key={pill.id}
                    onClick={() => onOpenQuote(pill.id)}
                    className="quick-pill-btn"
                    title={`Get a quote for ${pill.label}`}
                  >
                    <IconComponent size={16} />
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-check" />
              <span>Family-Owned & Local</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-check" />
              <span>Dozens of Premier Carriers</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-check" />
              <span>Outer Banks Storm & Flood Experts</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-check" />
              <span>No Obligation Quotes</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="hero-visual">
          <div className="visual-frame">
            <img 
              src="/images/hero_coastal_home.jpg" 
              alt="Coastal Outer Banks soundfront home protected by Aydlett Insurance" 
              className="hero-image"
              loading="eager"
            />
            <div className="visual-badge">
              <div className="visual-badge-number">30+</div>
              <div className="visual-badge-text">
                <strong>Years of Service</strong>
                <span>Outer Banks · NC & VA</span>
              </div>
            </div>
            <div className="visual-tag-location">
              <span>📍 Kill Devil Hills, North Carolina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
