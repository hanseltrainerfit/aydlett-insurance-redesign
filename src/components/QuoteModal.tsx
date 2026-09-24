import React, { useState, useEffect } from 'react';
import { 
  X, Check, ShieldCheck, ArrowRight, ArrowLeft, Phone, 
  Mail, Home, Waves, Car, Anchor, Key, Compass, Truck, 
  Building2, HeartHandshake, HelpCircle, CheckCircle2, Clock 
} from 'lucide-react';
import { agencyData } from '../data/agencyData';
import type { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProductId }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const coverageOptions = [
    { id: 'homeowners', label: 'Home Insurance', icon: Home, category: 'Residential' },
    { id: 'flood', label: 'Coastal Flood', icon: Waves, category: 'Rising Water' },
    { id: 'auto', label: 'Auto Insurance', icon: Car, category: 'Vehicles' },
    { id: 'boat', label: 'Boat & Marine', icon: Anchor, category: 'Watercraft' },
    { id: 'renters', label: 'Renters Policy', icon: Key, category: 'Residential' },
    { id: 'motorcycle', label: 'Motorcycle & ATV', icon: Compass, category: 'Recreation' },
    { id: 'rv', label: 'RV & Trailer', icon: Truck, category: 'Recreation' },
    { id: 'bop', label: 'Business / BOP', icon: Building2, category: 'Commercial' },
    { id: 'life-health', label: 'Life & Health', icon: HeartHandshake, category: 'Personal' },
    { id: 'other', label: 'Other / Specialty', icon: HelpCircle, category: 'Custom' },
  ];

  const [formData, setFormData] = useState<QuoteFormData>({
    coverageType: initialProductId || 'homeowners',
    specificInterests: initialProductId ? [initialProductId] : ['homeowners'],
    timeline: 'Within 30 Days',
    currentInsurance: 'Currently Insured with another company',
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'phone',
    notes: '',
    addressOrZip: '27948'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialProductId) {
      setFormData(prev => ({
        ...prev,
        coverageType: initialProductId,
        specificInterests: [initialProductId]
      }));
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [initialProductId, isOpen]);

  if (!isOpen) return null;

  const toggleInterest = (id: string) => {
    setFormData(prev => {
      const exists = prev.specificInterests.includes(id);
      const updated = exists 
        ? prev.specificInterests.filter(i => i !== id)
        : [...prev.specificInterests, id];
      
      // Ensure at least one is kept
      if (updated.length === 0) return prev;
      return {
        ...prev,
        specificInterests: updated,
        coverageType: updated[0]
      };
    });
  };

  const validateStep2 = () => {
    return true;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch to agency CRM/email endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="modal-card quote-modal-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="quote-modal-header">
          <div className="quote-header-title-box">
            <div className="quote-badge">
              <ShieldCheck size={14} />
              <span>Independent Quote Request</span>
            </div>
            <h2 id="quote-modal-title" className="quote-modal-title">
              {isSubmitted ? 'Quote Request Received' : 'Personalized Insurance Quote'}
            </h2>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar (when not submitted) */}
        {!isSubmitted && (
          <div className="quote-progress-bar">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Coverage</div>
            <div className="step-line" />
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Details</div>
            <div className="step-line" />
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. Contact</div>
          </div>
        )}

        {/* Modal Body */}
        <div className="quote-modal-body">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="quote-success-view fade-in">
              <div className="success-icon-circle">
                <CheckCircle2 size={44} className="text-teal" />
              </div>
              <h3>Thank You, {formData.fullName}!</h3>
              <p className="success-message">
                Your quote request for <strong>{formData.specificInterests.join(', ').toUpperCase()}</strong> has been routed to an agent at our Kill Devil Hills office.
              </p>

              <div className="success-next-steps">
                <div className="step-item">
                  <Clock size={18} className="text-teal" />
                  <div>
                    <strong>Estimated Response:</strong>
                    <span>We typically review and follow up within 2 to 4 business hours.</span>
                  </div>
                </div>
                <div className="step-item">
                  <Phone size={18} className="text-teal" />
                  <div>
                    <strong>Need Immediate Assistance?</strong>
                    <span>Call us directly at <a href={`tel:${agencyData.phoneRaw}`} className="text-teal underline"><strong>{agencyData.phone}</strong></a></span>
                  </div>
                </div>
              </div>

              <div className="compliance-disclaimer">
                <strong>Important Legal Notice:</strong> Insurance coverage cannot be bound, altered, or guaranteed through this website request. Coverage only takes effect after formal confirmation from a licensed agent at Aydlett Insurance Agency.
              </div>

              <button onClick={handleReset} className="btn btn-navy success-done-btn">
                Close & Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Select Coverage Type */}
              {step === 1 && (
                <div className="quote-step-content fade-in">
                  <p className="step-instruction">
                    Select the insurance coverages you would like quoted. You can select multiple for bundling discounts:
                  </p>
                  <div className="coverage-select-grid">
                    {coverageOptions.map(option => {
                      const Icon = option.icon;
                      const isSelected = formData.specificInterests.includes(option.id);
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => toggleInterest(option.id)}
                          className={`coverage-select-card ${isSelected ? 'is-selected' : ''}`}
                        >
                          <div className="card-check-indicator">
                            {isSelected ? <Check size={14} /> : null}
                          </div>
                          <div className="card-icon">
                            <Icon size={20} />
                          </div>
                          <div className="card-info">
                            <span className="card-label">{option.label}</span>
                            <span className="card-sub">{option.category}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Coverage Timing & Property Details */}
              {step === 2 && (
                <div className="quote-step-content fade-in">
                  <p className="step-instruction">
                    Tell us a little more about your timeline and location:
                  </p>

                  <div className="form-group">
                    <label className="form-label">When do you need this policy to start?</label>
                    <select
                      className="form-select"
                      value={formData.timeline}
                      onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    >
                      <option value="Immediately / Closing Soon">Immediately / Purchasing New Property</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="At Upcoming Renewal">At My Next Policy Renewal</option>
                      <option value="Exploring & Comparing Rates">Just Exploring / Comparing Rates</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Current Insurance Status</label>
                    <select
                      className="form-select"
                      value={formData.currentInsurance}
                      onChange={e => setFormData({ ...formData, currentInsurance: e.target.value })}
                    >
                      <option value="Currently Insured with another company">Currently insured with another company</option>
                      <option value="First-time buyer / New purchase">First-time buyer / New purchase</option>
                      <option value="Currently uninsured or coverage lapsed">Coverage currently lapsed or none</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Property ZIP Code or Town</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. 27948, Kill Devil Hills, Nags Head, etc."
                      value={formData.addressOrZip}
                      onChange={e => setFormData({ ...formData, addressOrZip: e.target.value })}
                    />
                    <span className="form-hint">Used to identify correct Dare/Currituck county flood and windstorm territories.</span>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Information */}
              {step === 3 && (
                <div className="quote-step-content fade-in">
                  <p className="step-instruction">
                    Where should our local agents send your comparison and quote details?
                  </p>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-name">Full Name *</label>
                    <input
                      id="quote-name"
                      type="text"
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      placeholder="Jane or John Doe"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-phone">Phone Number *</label>
                      <input
                        id="quote-phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'has-error' : ''}`}
                        placeholder="(252) 000-0000"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-email">Email Address *</label>
                      <input
                        id="quote-email"
                        type="email"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preferred Response Method</label>
                    <div className="radio-group">
                      <label className="radio-pill">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                        />
                        <Phone size={14} />
                        <span>Phone Call</span>
                      </label>
                      <label className="radio-pill">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                        />
                        <Mail size={14} />
                        <span>Email Proposal</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-notes">Additional Notes or Policy Details (Optional)</label>
                    <textarea
                      id="quote-notes"
                      className="form-textarea"
                      rows={2}
                      placeholder="e.g. 2 vehicles, 1998 home near sound, existing deductible preferences..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div className="privacy-reassurance">
                    🔒 <strong>Privacy Assurance:</strong> Your contact information is kept strictly confidential and only used by licensed Aydlett Insurance agents to prepare your quote. We never sell your data to spam robocallers.
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="quote-modal-footer">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn btn-secondary btn-back"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-primary btn-next"
                  >
                    <span>Continue</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-submit-quote"
                  >
                    <ShieldCheck size={18} />
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
