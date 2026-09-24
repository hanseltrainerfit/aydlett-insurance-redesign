import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { agencyData } from '../data/agencyData';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-visual">
            <div className="about-image-card">
              <img 
                src="/images/agent_consultation.jpg" 
                alt="Aydlett Insurance agent reviewing policy options with clients in Kill Devil Hills, NC" 
                className="about-image"
              />
              <div className="about-floating-experience">
                <span className="exp-number">30+</span>
                <div className="exp-details">
                  <strong>Years in Kill Devil Hills</strong>
                  <span>Serving OBX, NC & VA</span>
                </div>
              </div>
            </div>

            <div className="about-contact-strip">
              <div className="contact-strip-item">
                <MapPin size={16} className="text-teal" />
                <span>208 W. Walker St, Kill Devil Hills, NC</span>
              </div>
              <div className="contact-strip-item">
                <Phone size={16} className="text-teal" />
                <a href={`tel:${agencyData.phoneRaw}`} className="underline font-bold">
                  {agencyData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="about-narrative">
            <div className="section-badge">
              <HeartHandshake size={14} />
              <span>Our Roots & Story</span>
            </div>

            <h2 className="about-title">
              A Family-Owned Agency Rooted in the Outer Banks Since 1994.
            </h2>

            <p className="about-lead">
              Insurance isn’t just about contracts and premiums—it’s about protecting the home you cherish, 
              the boat you take out on the sound, and the livelihood you’ve built on our barrier islands.
            </p>

            <p className="about-text">
              For over three decades, Aydlett Insurance Agency has proudly operated from our office at 
              208 West Walker Street in Kill Devil Hills. As an independent, family-owned agency, we have 
              navigated Atlantic hurricanes, coastal building changes, and major insurance market cycles 
              alongside our neighbors.
            </p>

            <p className="about-text">
              Unlike national direct insurers that treat you like a policy number in a database, we build 
              enduring relationships. We take the time to evaluate your unique exposures, review your flood 
              risk, compare rates across dozens of carriers, and advocate on your behalf whenever you file a claim.
            </p>

            <div className="about-values-list">
              <div className="val-item">
                <CheckCircle2 size={18} className="text-teal" />
                <div>
                  <strong>Independent Carrier Representation</strong>
                  <span>We work for you, shopping dozens of vetted carriers to match your budget and risk.</span>
                </div>
              </div>
              <div className="val-item">
                <CheckCircle2 size={18} className="text-teal" />
                <div>
                  <strong>Deep Coastal Knowledge</strong>
                  <span>Decades of experience with Dare County windstorm deductibles, flood maps, and soundside risks.</span>
                </div>
              </div>
              <div className="val-item">
                <CheckCircle2 size={18} className="text-teal" />
                <div>
                  <strong>Accessible, Human Service</strong>
                  <span>Reach real licensed agents right here in town whenever you call or walk through our doors.</span>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <button onClick={onOpenQuote} className="btn btn-primary">
                <ShieldCheck size={18} />
                <span>Talk with an Agent</span>
              </button>
              <a href={`mailto:${agencyData.email}`} className="btn btn-secondary">
                <Mail size={16} />
                <span>Email {agencyData.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
