import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, ShieldCheck } from 'lucide-react';
import { faqData } from '../data/faqData';
import { agencyData } from '../data/agencyData';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section section-sand" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Clear Answers</span>
          </div>
          <h2 className="section-title">Frequently Asked Insurance Questions</h2>
          <p className="section-subtitle">
            Insurance on the North Carolina coast comes with unique considerations. 
            Here are the most common questions our Kill Devil Hills team answers daily.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-category-tag">{item.category}</span>
                  <span className="faq-question-text">{item.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`} 
                    role="region" 
                    aria-labelledby={`faq-btn-${idx}`} 
                    className="faq-answer-panel fade-in"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Strip */}
        <div className="faq-help-strip">
          <div className="help-strip-text">
            <strong>Have a question about your specific property or vehicle?</strong>
            <span>Our Kill Devil Hills agents are here to assist without any sales pressure.</span>
          </div>
          <div className="help-strip-actions">
            <a href={`tel:${agencyData.phoneRaw}`} className="btn btn-navy btn-sm">
              <Phone size={14} />
              <span>Call (252) 441-9393</span>
            </a>
            <button onClick={onOpenQuote} className="btn btn-primary btn-sm">
              <ShieldCheck size={14} />
              <span>Get a Free Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
