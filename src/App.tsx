import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { CoastalAdvantage } from './components/CoastalAdvantage';
import { WhyIndependent } from './components/WhyIndependent';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfficeLocation } from './components/OfficeLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import type { InsuranceProduct } from './types';

// Stylesheets
import './styles/index.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/products.css';
import './styles/coastal.css';
import './styles/why-independent.css';
import './styles/about.css';
import './styles/testimonials.css';
import './styles/location.css';
import './styles/faq.css';
import './styles/footer.css';
import './styles/quote-modal.css';
import './styles/product-modal.css';
import './styles/mobile-bar.css';

export const App: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<InsuranceProduct | null>(null);

  const handleOpenQuote = (productId?: string) => {
    setQuoteProductId(productId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteProductId(undefined);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Primary Site Header */}
      <Header 
        onOpenQuote={handleOpenQuote}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero 
          onOpenQuote={handleOpenQuote}
          onExploreProducts={() => handleNavigate('products')}
        />

        <ProductsSection 
          onOpenQuote={handleOpenQuote}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        <CoastalAdvantage 
          onOpenQuote={handleOpenQuote}
        />

        <WhyIndependent 
          onOpenQuote={() => handleOpenQuote()}
        />

        <AboutSection 
          onOpenQuote={() => handleOpenQuote()}
        />

        <TestimonialsSection />

        <OfficeLocation 
          onOpenQuote={() => handleOpenQuote()}
        />

        <FaqSection 
          onOpenQuote={() => handleOpenQuote()}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive Multi-Step Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialProductId={quoteProductId}
      />

      {/* Coverage In-Depth Exploration Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onGetQuote={handleOpenQuote}
      />

      {/* Persistent Mobile Bottom Bar */}
      <MobileStickyBar 
        onOpenQuote={() => handleOpenQuote()}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
