import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import type { InsuranceProduct } from '../types';
import { agencyData } from '../data/agencyData';

interface ProductDetailModalProps {
  product: InsuranceProduct | null;
  onClose: () => void;
  onGetQuote: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onGetQuote }) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="prod-detail-title">
      <div className="modal-card product-modal-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="product-modal-header">
          <div className="product-modal-badge">
            <span>Insurance Coverage Guide</span>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="product-modal-content">
          <h2 id="prod-detail-title" className="prod-title">{product.name}</h2>
          <p className="prod-tagline">{product.tagline}</p>

          <div className="prod-section">
            <h4 className="prod-section-heading">Overview & Protection</h4>
            <p className="prod-description">{product.longDescription}</p>
          </div>

          <div className="prod-section">
            <h4 className="prod-section-heading">Key Protections Included</h4>
            <div className="features-checklist">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feat-check-row">
                  <CheckCircle2 size={16} className="text-teal feat-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {product.coastalConsiderations && (
            <div className="coastal-insight-box">
              <div className="insight-header">
                <AlertCircle size={16} className="text-amber" />
                <strong>Outer Banks & Coastal Consideration:</strong>
              </div>
              <p>{product.coastalConsiderations}</p>
            </div>
          )}

          <div className="advisor-note-card">
            <div className="note-text">
              <strong>Need help assessing your exact limits?</strong>
              <p>Our licensed agents in Kill Devil Hills will review your property, vehicles, or business requirements at no charge.</p>
            </div>
            <a href={`tel:${agencyData.phoneRaw}`} className="advisor-phone-btn">
              <Phone size={14} />
              <span>Call (252) 441-9393</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="product-modal-footer">
          <button onClick={onClose} className="btn btn-secondary">
            Back to All Coverages
          </button>
          <button 
            onClick={() => {
              onClose();
              onGetQuote(product.id);
            }} 
            className="btn btn-primary"
          >
            <ShieldCheck size={17} />
            <span>Get Quote for {product.name}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
