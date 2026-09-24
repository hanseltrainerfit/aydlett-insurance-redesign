import React, { useState } from 'react';
import { 
  MapPin, Phone, Printer, Mail, Clock, Navigation, 
  Send, CheckCircle2, ShieldCheck, ExternalLink 
} from 'lucide-react';
import { agencyData, getOfficeLiveStatus } from '../data/agencyData';

interface OfficeLocationProps {
  onOpenQuote: () => void;
}

export const OfficeLocation: React.FC<OfficeLocationProps> = ({ onOpenQuote }) => {
  const officeStatus = getOfficeLiveStatus();
  const [formSent, setFormSent] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [comments, setComments] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setFormSent(true);
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('208 W. Walker St, Kill Devil Hills, NC 27948')}`;

  return (
    <section className="section" id="location">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>Kill Devil Hills, NC Office</span>
          </div>
          <h2 className="section-title">Visit Our Office or Connect with an Agent</h2>
          <p className="section-subtitle">
            We are conveniently located on West Walker Street in the heart of Kill Devil Hills. 
            Drop in during business hours or reach out directly by phone, email, or message.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Office Details & Hours Card */}
          <div className="office-card">
            <div className="office-card-header">
              <div className="office-title-box">
                <span className="office-badge">Primary Outer Banks Location</span>
                <h3 className="office-name">{agencyData.name}</h3>
                <p className="office-address">
                  {agencyData.street}<br />
                  {agencyData.city}, {agencyData.state} {agencyData.zip}
                </p>
              </div>

              <div className={`live-hours-status-box ${officeStatus.isOpen ? 'is-open' : 'is-closed'}`}>
                <div className="status-indicator-header">
                  <span className={`status-dot ${officeStatus.isOpen ? 'is-open' : 'is-closed'}`} />
                  <strong>{officeStatus.isOpen ? 'Open Now' : 'Currently Closed'}</strong>
                </div>
                <span className="status-subtext">{officeStatus.statusMessage}</span>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="office-contact-buttons">
              <a href={`tel:${agencyData.phoneRaw}`} className="btn btn-navy office-btn">
                <Phone size={16} />
                <span>Call {agencyData.phone}</span>
              </a>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary office-btn"
              >
                <Navigation size={16} className="text-teal" />
                <span>Get Directions</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Details List */}
            <div className="office-details-list">
              <div className="detail-row">
                <div className="detail-icon"><Phone size={16} /></div>
                <div className="detail-info">
                  <span className="detail-label">Direct Telephone</span>
                  <a href={`tel:${agencyData.phoneRaw}`} className="detail-val font-bold">
                    {agencyData.phone}
                  </a>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-icon"><Printer size={16} /></div>
                <div className="detail-info">
                  <span className="detail-label">Fax Number</span>
                  <span className="detail-val">{agencyData.fax}</span>
                </div>
              </div>

              <div className="detail-row">
                <div className="detail-icon"><Mail size={16} /></div>
                <div className="detail-info">
                  <span className="detail-label">General Email</span>
                  <a href={`mailto:${agencyData.email}`} className="detail-val text-teal font-bold">
                    {agencyData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Weekly Operating Hours Table */}
            <div className="office-hours-block">
              <div className="hours-block-title">
                <Clock size={16} className="text-teal" />
                <strong>Weekly Operating Hours</strong>
              </div>
              <div className="hours-table">
                {agencyData.hours.map((item, idx) => (
                  <div key={idx} className="hours-row">
                    <span className="hours-day">{item.day}</span>
                    <span className={`hours-time ${item.hours === 'Closed' ? 'text-closed' : ''}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hours-note">
                * Wednesday afternoon appointments available by request. 24/7 quote requests accepted online.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form & Interactive Map */}
          <div className="location-right-col">
            {/* Quick Contact Form */}
            <div className="card direct-message-card">
              <div className="message-header">
                <h4>Send a Direct Message to Our Team</h4>
                <p>Have a question regarding coverage, an existing policy, or scheduling a visit?</p>
              </div>

              {formSent ? (
                <div className="message-sent-confirmation fade-in">
                  <CheckCircle2 size={36} className="text-teal" />
                  <h5>Message Received</h5>
                  <p>
                    Thank you, <strong>{contactName}</strong>. Your inquiry has been dispatched to our staff at 208 W. Walker St. We will follow up shortly during office hours.
                  </p>
                  <button 
                    onClick={() => { setFormSent(false); setComments(''); }} 
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="direct-form">
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Your Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="John Doe"
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        className="form-input"
                        placeholder="(252) 441-9393"
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@email.com"
                        value={contactEmail}
                        onChange={e => setContactEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inquiry-type">Inquiry Topic</label>
                      <select
                        id="inquiry-type"
                        className="form-select"
                        value={inquiryType}
                        onChange={e => setInquiryType(e.target.value)}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Policy Question">Policy Review / Questions</option>
                        <option value="Flood Zone Question">Outer Banks Flood Zone Check</option>
                        <option value="Commercial Business">Business / Commercial Policy</option>
                        <option value="Claim Assistance">Claim Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-comments">How can we assist you?</label>
                    <textarea
                      id="contact-comments"
                      rows={3}
                      className="form-textarea"
                      placeholder="Share any specifics about your property, vehicles, or insurance questions..."
                      value={comments}
                      onChange={e => setComments(e.target.value)}
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      <Send size={15} />
                      <span>Send Message</span>
                    </button>
                    <button 
                      type="button" 
                      onClick={onOpenQuote} 
                      className="btn btn-secondary"
                    >
                      <ShieldCheck size={16} />
                      <span>Request Full Quote Instead</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Stylized Map View Card */}
            <div className="map-preview-card">
              <div className="map-visual">
                <iframe
                  title="Aydlett Insurance Agency Location Map"
                  src="https://maps.google.com/maps?q=208+W+Walker+St,+Kill+Devil+Hills,+NC+27948&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <div className="map-footer-bar">
                <div className="map-geo-info">
                  <MapPin size={15} className="text-teal" />
                  <span>Dare County · Milepost 8.5 · Near US-158 / Croatan Hwy</span>
                </div>
                <a 
                  href={mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-open-link"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
