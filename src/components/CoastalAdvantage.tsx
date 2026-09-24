import React from 'react';
import { Waves, Wind, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface CoastalAdvantageProps {
  onOpenQuote: (defaultProduct?: string) => void;
}

export const CoastalAdvantage: React.FC<CoastalAdvantageProps> = ({ onOpenQuote }) => {
  const coastalPillars = [
    {
      icon: Waves,
      title: 'Flood Insurance & Elevation Certificates',
      desc: 'National carriers often overlook that homeowners policies exclude rising water entirely. We assess your Dare County flood zone (X, AE, or VE) and elevation certificate to maximize protection without overpaying on federal or private flood premiums.',
      targetProduct: 'flood'
    },
    {
      icon: Wind,
      title: 'Named Storm & Hurricane Deductibles',
      desc: 'Coastal North Carolina policies feature distinct 1% to 5% percentage deductibles for named storms. We calculate your exact financial exposure ahead of time so you are never caught unprepared after a tropical storm.',
      targetProduct: 'homeowners'
    },
    {
      icon: AlertTriangle,
      title: 'Pre-Storm Binding Moratorium Guidance',
      desc: 'When tropical storms or hurricanes enter specific coordinates in the Atlantic, insurance carriers halt the binding of new coverage. Our local team sends advance reminders to ensure policies are secured before moratoriums take effect.',
      targetProduct: 'homeowners'
    },
    {
      icon: ShieldCheck,
      title: 'Outer Banks Marine & Boating Realities',
      desc: 'From shallow sound navigation to offshore Gulf Stream fishing, our boat and yacht policies properly account for trailer transport, coastal salvage, and hurricane haul-out requirements.',
      targetProduct: 'boat'
    }
  ];

  return (
    <section className="section section-navy" id="coastal-advantage">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Waves size={14} />
            <span>Outer Banks Expertise</span>
          </div>
          <h2 className="section-title">Why Coastal North Carolina Requires a Local Agent</h2>
          <p className="section-subtitle">
            Barrier island living is extraordinary, but it presents unique insurance challenges. 
            Automated national algorithms and 1-800 phone centers don’t know Dare County weather, 
            local flood maps, or coastal building requirements. We do.
          </p>
        </div>

        <div className="coastal-grid">
          {/* Left Column: Pillars */}
          <div className="coastal-pillars">
            {coastalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="coastal-pillar-card">
                  <div className="pillar-icon-box">
                    <Icon size={22} />
                  </div>
                  <div className="pillar-content">
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>
                    <button 
                      onClick={() => onOpenQuote(pillar.targetProduct)} 
                      className="pillar-action-link"
                    >
                      <span>Explore {pillar.targetProduct} options</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Case Card */}
          <div className="coastal-visual-panel">
            <div className="coastal-image-container">
              <img 
                src="/images/coastal_boat.jpg" 
                alt="Family on boat at Beaufort / Outer Banks North Carolina marina" 
                className="coastal-img"
              />
              <div className="coastal-image-overlay">
                <div className="overlay-badge">
                  <span>⚓ Local Water & Storm Protection</span>
                </div>
                <h4>30+ Years Protecting Dare & Currituck Counties</h4>
                <p>
                  From Corolla and Duck down to Hatteras Island, we help you navigate coastal insurance 
                  with confidence and clarity.
                </p>
                <div className="coastal-checklist">
                  <div className="check-row">
                    <CheckCircle2 size={16} className="text-teal" />
                    <span>NFIP and Private Flood Market Access</span>
                  </div>
                  <div className="check-row">
                    <CheckCircle2 size={16} className="text-teal" />
                    <span>Detailed Windstorm & Hail Deductible Reviews</span>
                  </div>
                  <div className="check-row">
                    <CheckCircle2 size={16} className="text-teal" />
                    <span>In-person Support at 208 W Walker St</span>
                  </div>
                </div>
                <button 
                  onClick={() => onOpenQuote('flood')} 
                  className="btn btn-primary coastal-cta-btn"
                >
                  Request a Coastal Property Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
