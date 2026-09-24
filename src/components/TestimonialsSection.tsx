import React from 'react';
import { Star, MessageSquareQuote, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section section-sand" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Client Perspectives</span>
          </div>
          <h2 className="section-title">Trusted by Coastal Families & Outer Banks Businesses</h2>
          <p className="section-subtitle">
            Read how our independent guidance and local service make a meaningful difference 
            for homeowners, boat owners, and local entrepreneurs in our community.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="card testimonial-card">
              <div className="testimonial-card-top">
                <div className="stars-row" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                {item.badge && (
                  <span className="tag tag-coastal">{item.badge}</span>
                )}
              </div>

              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div className="testimonial-author-box">
                <div className="author-avatar-initial">
                  {item.author.charAt(0)}
                </div>
                <div className="author-info">
                  <cite className="author-name">{item.author}</cite>
                  <div className="author-locality">
                    <MapPin size={12} className="text-teal" />
                    <span>{item.location}</span>
                  </div>
                  <div className="author-policy">{item.policyType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carriers-trust-banner">
          <div className="carriers-trust-label">
            Independent Agent Partnering with Premier Regional & National Carriers:
          </div>
          <div className="carriers-pills-row">
            <span className="carrier-pill">Progressive Authorized Agent</span>
            <span className="carrier-pill">National Flood Insurance Program (NFIP)</span>
            <span className="carrier-pill">North Carolina Coastal Underwriting Markets</span>
            <span className="carrier-pill">Top Regional Mutual & Specialty Carriers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
