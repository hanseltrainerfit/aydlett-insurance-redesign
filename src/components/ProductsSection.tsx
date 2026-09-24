import React, { useState } from 'react';
import { 
  Home, Waves, Car, Anchor, Key, Compass, Truck, 
  HeartHandshake, Building2, ShieldAlert, Landmark, Users, 
  ArrowRight, ShieldCheck, Info, Sparkles 
} from 'lucide-react';
import { insuranceProducts } from '../data/insuranceProducts';
import type { CoverageCategory, InsuranceProduct } from '../types';

interface ProductsSectionProps {
  onOpenQuote: (productId?: string) => void;
  onSelectProduct: (product: InsuranceProduct) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuote, onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<CoverageCategory>('all');

  const filteredProducts = activeTab === 'all' 
    ? insuranceProducts 
    : insuranceProducts.filter(p => p.category === activeTab);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home size={22} />;
      case 'Waves': return <Waves size={22} />;
      case 'Car': return <Car size={22} />;
      case 'Anchor': return <Anchor size={22} />;
      case 'Key': return <Key size={22} />;
      case 'Compass': return <Compass size={22} />;
      case 'Truck': return <Truck size={22} />;
      case 'HeartHandshake': return <HeartHandshake size={22} />;
      case 'Building2': return <Building2 size={22} />;
      case 'ShieldAlert': return <ShieldAlert size={22} />;
      case 'Landmark': return <Landmark size={22} />;
      case 'Users': return <Users size={22} />;
      default: return <ShieldCheck size={22} />;
    }
  };

  return (
    <section className="section section-sand" id="products">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Comprehensive Coverage Options</span>
          </div>
          <h2 className="section-title">Insurance Products for Every Stage of Life & Business</h2>
          <p className="section-subtitle">
            Because our agency is independent, we compare coverages across dozens of leading insurance companies 
            to structure personalized protection for your home, vehicles, boats, and commercial assets.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="products-tabs" role="tablist" aria-label="Insurance Categories">
          <button
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Coverages ({insuranceProducts.length})
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'coastal'}
            onClick={() => setActiveTab('coastal')}
            className={`tab-btn ${activeTab === 'coastal' ? 'active' : ''}`}
          >
            Coastal & Flood
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'personal'}
            onClick={() => setActiveTab('personal')}
            className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          >
            Auto & Personal
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'recreational'}
            onClick={() => setActiveTab('recreational')}
            className={`tab-btn ${activeTab === 'recreational' ? 'active' : ''}`}
          >
            Boat & Recreation
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'commercial'}
            onClick={() => setActiveTab('commercial')}
            className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
          >
            Commercial & Business
          </button>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card product-card">
              <div className="product-card-top">
                <div className="product-icon-wrapper">
                  {getProductIcon(product.iconName)}
                </div>
                <div className="product-badges">
                  {product.popular && (
                    <span className="tag tag-popular">Most Requested</span>
                  )}
                  {product.category === 'coastal' && (
                    <span className="tag tag-coastal">Coastal Specific</span>
                  )}
                </div>
              </div>

              <h3 className="product-name">{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              <p className="product-desc">{product.shortDescription}</p>

              {/* Key Features Bullet List */}
              <div className="product-features">
                <div className="features-label">Key Protections Include:</div>
                <ul className="features-list">
                  {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coastal Notice Callout if present */}
              {product.coastalConsiderations && (
                <div className="coastal-notice-pill">
                  <Info size={13} className="coastal-notice-icon" />
                  <span>{product.coastalConsiderations}</span>
                </div>
              )}

              {/* Card Footer CTAs */}
              <div className="product-card-actions">
                <button
                  onClick={() => onOpenQuote(product.id)}
                  className="btn btn-primary product-quote-btn"
                  title={`Request a Quote for ${product.name}`}
                >
                  <ShieldCheck size={16} />
                  <span>Get a Quote</span>
                </button>
                <button
                  onClick={() => onSelectProduct(product)}
                  className="btn btn-secondary product-details-btn"
                  title={`View Coverage Details for ${product.name}`}
                >
                  <span>Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="products-bottom-banner">
          <div className="banner-text">
            <h4>Need a specialized policy or multiple properties bundled?</h4>
            <p>Our Kill Devil Hills agents will walk you through your exact needs and compare options across carriers.</p>
          </div>
          <div className="banner-actions">
            <button onClick={() => onOpenQuote()} className="btn btn-navy">
              Request Full Review
            </button>
            <a href="tel:2524419393" className="btn btn-secondary">
              Call (252) 441-9393
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
