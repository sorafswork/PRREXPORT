/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CatalogueModal } from './components/CatalogueModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'product' | 'contact'>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);
  const [catalogueDefaultTab, setCatalogueDefaultTab] = useState<'catalogue' | 'specs' | 'profile'>('catalogue');

  // Smooth scroll handler with header offset
  const handleScrollToSection = (sectionId: 'home' | 'about' | 'product' | 'contact') => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = window.innerWidth < 768 ? 98 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll-spy observer to highlight active header nav item as the user scrolls
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections: ('home' | 'about' | 'product' | 'contact')[] = ['contact', 'product', 'about', 'home'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleOpenQuoteModal = (product?: Product) => {
    if (product) {
      setSelectedProductForQuote(product);
    } else {
      setSelectedProductForQuote(null);
    }
    setIsQuoteModalOpen(true);
  };

  const handleOpenDetailModal = (product: Product) => {
    setSelectedProductForDetail(product);
  };

  const handleOpenCatalogueModal = (tab: 'catalogue' | 'specs' | 'profile' = 'catalogue') => {
    setCatalogueDefaultTab(tab);
    setIsCatalogueModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDE1D2] text-[#412F26] relative overflow-x-clip selection:bg-[#68734B]/30 selection:text-[#573B2E]">
      {/* Sticky Header with Active Section Spy */}
      <Header
        currentPage={activeSection}
        onNavigate={handleScrollToSection}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Unified Single-Page Continuous Scrolling Layout */}
      <main className="flex-1">
        {/* Section 1: Home (Cinematic Video Hero) */}
        <section id="home" className="scroll-mt-[98px] md:scroll-mt-20">
          <HomePage onNavigate={handleScrollToSection} />
        </section>

        {/* Section 2: About (Farming Heritage, Storytelling & Animated Product Showcase) */}
        <section id="about" className="scroll-mt-[98px] md:scroll-mt-20">
          <AboutPage
            onNavigate={handleScrollToSection}
            onRequestQuote={(product) => handleOpenQuoteModal(product)}
          />
        </section>

        {/* Section 3: Products (Full B2B Catalogue, Moving Ribbon & Container Calculator) */}
        <section id="product" className="scroll-mt-[98px] md:scroll-mt-20">
          <ProductPage
            onSelectProduct={handleOpenDetailModal}
            onRequestQuote={handleOpenQuoteModal}
            onOpenCatalogue={handleOpenCatalogueModal}
          />
        </section>

        {/* Section 4: Contact (Export Desk, Direct Calls, WhatsApp & B2B Enquiry Form) */}
        <section id="contact" className="scroll-mt-[98px] md:scroll-mt-20">
          <ContactPage />
        </section>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleScrollToSection}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp />

      {/* B2B Export Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />

      {/* Product Detail Specifications Modal */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onRequestQuote={(product) => handleOpenQuoteModal(product)}
      />

      {/* Official Catalogue & Specifications Modal */}
      <CatalogueModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
        onRequestQuote={() => {
          setIsCatalogueModalOpen(false);
          handleOpenQuoteModal();
        }}
        defaultTab={catalogueDefaultTab}
      />
    </div>
  );
}
