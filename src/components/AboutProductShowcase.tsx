import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface AboutProductShowcaseProps {
  onOrderNow: (product: Product) => void;
}

export const AboutProductShowcase: React.FC<AboutProductShowcaseProps> = ({ onOrderNow }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showcaseProducts = PRODUCTS.map((p) => ({
    id: p.id,
    name: p.id === 'cocopeat-disc-jiffy-plugs' ? 'Cocopeat Disc / Jiffy Plugs' : p.name,
    categoryLabel: p.businessType,
    shortDesc: p.description,
    image: p.image,
    productRef: p,
  }));

  const current = showcaseProducts[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseProducts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseProducts.length) % showcaseProducts.length);
  };

  const handleOrderWhatsApp = (productName: string, productRef: Product) => {
    const text = encodeURIComponent(
      `Hello, I am interested in ordering ${productName}. Please share the product details and pricing.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
    onOrderNow(productRef);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#68734B] text-[#EDE1D2] border-y border-[#573B2E]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]">
            Visual Product Storytelling
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#EDE1D2]">
            Our Natural Product Range
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE1D2]/80">
            From producer-extracted oils to global-standard cocopeat substrates. Seamlessly explore each product below.
          </p>
        </div>

        {/* Product Navigation Tabs (Wrapped cleanly on both mobile & desktop) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {showcaseProducts.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#573B2E] text-[#EDE1D2] shadow-md'
                    : 'bg-[#EDE1D2]/15 text-[#EDE1D2] hover:bg-[#EDE1D2]/30'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Animated Product Showcase Card */}
        <div className="bg-[#573B2E] border border-[#EDE1D2]/20 rounded-2xl p-4 sm:p-8 lg:p-10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center"
            >
              {/* Product Visual Container */}
              <div className="md:col-span-6">
                <div className="relative rounded-xl overflow-hidden bg-white/10 aspect-[4/3] border border-[#EDE1D2]/20 shadow-lg">
                  <motion.img
                    src={current.image}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#68734B]/90 backdrop-blur-sm text-[#EDE1D2] text-[10px] uppercase font-bold tracking-wider rounded">
                    {current.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Product Info & Order Action */}
              <div className="md:col-span-6 space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#CBB89D] font-semibold">
                    Product {activeIndex + 1} of {showcaseProducts.length}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#EDE1D2]">
                    {current.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#EDE1D2]/90 leading-relaxed font-sans">
                  {current.shortDesc}
                </p>

                {/* Technical highlights summary */}
                <div className="p-3.5 bg-[#412F26]/60 rounded-lg border border-[#EDE1D2]/10 text-xs space-y-1.5 text-[#CBB89D]">
                  <div className="flex flex-wrap justify-between gap-2">
                    <span>Raw Material:</span>
                    <span className="font-semibold text-[#EDE1D2] text-right">{current.productRef.rawMaterial}</span>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <span>Export Packaging:</span>
                    <span className="font-semibold text-[#EDE1D2] text-right">{current.productRef.packaging}</span>
                  </div>
                </div>

                {/* Animated Order Now Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => handleOrderWhatsApp(current.name, current.productRef)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#6A6F4C] active:bg-[#412F26] rounded-md shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EDE1D2]" />
                    Order Now
                  </button>

                  <button
                    onClick={() => onOrderNow(current.productRef)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#412F26] bg-[#EDE1D2] hover:bg-white rounded-md shadow transition-colors"
                  >
                    Request Quotation
                    <ArrowRight className="w-3.5 h-3.5 text-[#68734B]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Next / Prev Controls */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#EDE1D2]/15 flex items-center justify-between text-xs text-[#EDE1D2]/70">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#EDE1D2]/10 hover:text-white transition-colors"
              aria-label="Previous product"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous Product</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <span className="font-mono text-xs text-[#CBB89D]">
              {activeIndex + 1} / {showcaseProducts.length}
            </span>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#EDE1D2]/10 hover:text-white transition-colors"
              aria-label="Next product"
            >
              <span className="hidden sm:inline">Next Product</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
