import React from 'react';
import { ShieldCheck, Check, Users, RefreshCw, Compass, Award } from 'lucide-react';

interface WhyIndependentProps {
  onOpenQuote: () => void;
}

export const WhyIndependent: React.FC<WhyIndependentProps> = ({ onOpenQuote }) => {
  const comparisonData = [
    {
      feature: 'Carrier Choice & Flexibility',
      captive: 'Only 1 company’s products',
      direct: 'Single brand algorithm',
      aydlett: 'Dozens of premier regional & national carriers'
    },
    {
      feature: 'Advocacy During Rate Hikes',
      captive: 'Take the increase or leave',
      direct: 'Algorithmic rate adjustments',
      aydlett: 'We automatically shop the market for you'
    },
    {
      feature: 'Local Outer Banks Coastal Knowledge',
      captive: 'Often limited to standard models',
      direct: 'National call center (no local context)',
      aydlett: '30+ years specialized in Dare County & OBX'
    },
    {
      feature: 'Human Claim Support & Guidance',
      captive: 'Directs you to corporate 1-800 line',
      direct: 'Automated chatbot or phone queue',
      aydlett: 'Dedicated local agents at 208 W. Walker St'
    },
    {
      feature: 'Multi-Policy Bundling Flexibility',
      captive: 'Restricted to their proprietary lines',
      direct: 'Limited third-party partnerships',
      aydlett: 'Combine home, auto, boat, and flood seamlessly'
    }
  ];

  const valuePillars = [
    {
      icon: RefreshCw,
      title: 'We Shop the Market for You',
      desc: 'Insurance rates change constantly. Because we aren’t locked into one company, we review market options across top carriers to protect both your budget and your assets.'
    },
    {
      icon: Users,
      title: 'Dedicated Human Relationship',
      desc: 'When you call (252) 441-9393, you talk to professionals in Kill Devil Hills who know our community, not an anonymous corporate call center queue.'
    },
    {
      icon: Compass,
      title: 'Independent Advocacy at Claim Time',
      desc: 'If you experience an auto collision, storm loss, or property claim, our agency serves as your advocate to guide you through the process step-by-step.'
    },
    {
      icon: Award,
      title: 'Over 30 Years of Community Trust',
      desc: 'Established in 1994, our agency has weathered major hurricanes, coastal market shifts, and three decades of service with honesty and integrity.'
    }
  ];

  return (
    <section className="section" id="why-independent">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>The Independent Agency Advantage</span>
          </div>
          <h2 className="section-title">The Difference Between Being Sold a Policy and Being Protected</h2>
          <p className="section-subtitle">
            Most people don’t realize how different types of insurance providers operate. 
            Understanding the distinction between captive agents, online algorithms, and independent agencies 
            empowers you to make the right choice for your family.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid-4 value-pillars-grid">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="card pillar-item-card">
                <div className="pillar-icon">
                  <Icon size={24} />
                </div>
                <h3 className="pillar-item-title">{pillar.title}</h3>
                <p className="pillar-item-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="comparison-wrapper">
          <h3 className="comparison-headline">How Independent Agencies Compare</h3>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="th-feature">Coverage & Service Feature</th>
                  <th className="th-other">Captive Agent<br/><small>(State Farm, Allstate, etc.)</small></th>
                  <th className="th-other">Direct Online 1-800<br/><small>(Geico, Progressive Direct, etc.)</small></th>
                  <th className="th-aydlett">Aydlett Insurance<br/><small>(Independent Agency)</small></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="td-feature">
                      <strong>{row.feature}</strong>
                    </td>
                    <td className="td-other">
                      <span className="td-text">{row.captive}</span>
                    </td>
                    <td className="td-other">
                      <span className="td-text">{row.direct}</span>
                    </td>
                    <td className="td-aydlett">
                      <div className="aydlett-cell-content">
                        <Check size={16} className="text-teal" />
                        <span>{row.aydlett}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-footer">
            <div className="comp-footer-text">
              <strong>Experience the Independent Difference:</strong> Let us compare coverage options for your home, vehicles, or business.
            </div>
            <button onClick={onOpenQuote} className="btn btn-primary">
              Request Your Free Comparison
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
