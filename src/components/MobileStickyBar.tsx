import React from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { agencyData } from '../data/agencyData';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="mobile-sticky-bar" aria-label="Quick Mobile Actions">
      <a 
        href={`tel:${agencyData.phoneRaw}`} 
        className="mobile-sticky-btn mobile-call-action"
        id="mobile-sticky-call"
      >
        <Phone size={18} />
        <span>Call (252) 441-9393</span>
      </a>

      <button 
        onClick={onOpenQuote} 
        className="mobile-sticky-btn mobile-quote-action"
        id="mobile-sticky-quote"
      >
        <ShieldCheck size={18} />
        <span>Get a Quote</span>
      </button>

      <button 
        onClick={() => onNavigate('location')} 
        className="mobile-sticky-btn mobile-location-action"
        title="View Office Location"
      >
        <MapPin size={18} />
        <span>Office</span>
      </button>
    </div>
  );
};
