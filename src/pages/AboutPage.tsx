import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Product } from '../types';
import { AboutProductShowcase } from '../components/AboutProductShowcase';
import { Sprout, Factory, Globe2, MapPin, ArrowUpRight } from 'lucide-react';
import {
  heroCoconutGroveImg,
  coconutOilBottlesImg,
  cocopeatBlocksImg,
  coirEcoProductsImg,
} from '../assets/images';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'product' | 'contact') => void;
  onRequestQuote: (product?: Product) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-[#EDE1D2] text-[#412F26]">
      {/* 1. HERO SECTION (Olive Green Accent Background) */}
      <section className="bg-[#68734B] text-[#EDE1D2] py-12 sm:py-16 md:py-20 border-b border-[#573B2E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]">
              About P R GNANARAJA EXPORT
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#EDE1D2] leading-tight">
              Our Farming Heritage &amp; Export Commitment
            </h1>
            <p className="text-sm sm:text-base text-[#EDE1D2]/90 leading-relaxed max-w-2xl">
              Based in Thanjavur, Tamil Nadu, we combine coconut farming traditions with small-scale oil manufacturing and dependable merchant export of coir and cocopeat products.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISUAL SPLIT INTRODUCTION (Coconut Cream Background) */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#EDE1D2] border-b border-[#CBB89D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Farm Imagery */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#CBB89D] shadow-lg bg-white aspect-[4/3] group">
                <img
                  src={heroCoconutGroveImg}
                  alt="Thanjavur coconut groves"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#412F26]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-[#EDE1D2]">
                  <p className="font-serif text-lg font-bold">Vadugankuthagai, Thanjavur</p>
                  <p className="text-xs text-[#CBB89D]">Tamil Nadu, India · Kaveri Delta</p>
                </div>
              </div>
            </div>

            {/* Short Introduction Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#68734B]">
                Origin &amp; Focus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#573B2E] leading-snug">
                Connecting Thanjavur's Farms with International Buyers
              </h2>
              <p className="text-sm sm:text-base text-[#412F26] leading-relaxed">
                P R GNANARAJA EXPORT is situated in Pattukkottai Taluk, Thanjavur District. Our business is anchored on direct agrarian roots: cultivating coconut palms, managing copra drying, and extracting pure unrefined oils on a controlled small scale.
              </p>
              <p className="text-sm text-[#573B2E] leading-relaxed">
                Through our merchant export division, we source tested, low-EC cocopeat substrates and molded coir products for international horticulture, greenhouses, and commercial distributors.
              </p>

              {/* Three Business Activities Visual Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                <div className="p-2.5 sm:p-3 bg-[#E4DAC2] border border-[#CBB89D] rounded-lg text-center">
                  <Sprout className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#68734B] mb-1" />
                  <p className="font-serif font-bold text-[11px] sm:text-xs text-[#573B2E]">Farming</p>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#E4DAC2] border border-[#CBB89D] rounded-lg text-center">
                  <Factory className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#68734B] mb-1" />
                  <p className="font-serif font-bold text-[11px] sm:text-xs text-[#573B2E]">Manufacturing</p>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#E4DAC2] border border-[#CBB89D] rounded-lg text-center">
                  <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-[#68734B] mb-1" />
                  <p className="font-serif font-bold text-[11px] sm:text-xs text-[#573B2E] leading-tight">Merchant Export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE ANIMATION (HIGH PRIORITY ANIMATED SECTION) */}
      <AboutProductShowcase onOrderNow={(product) => onRequestQuote(product)} />

      {/* 4. VISUAL STORY GALLERY (Soft Ivory Background) */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#E4DAC2] border-b border-[#CBB89D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#68734B]">
              Visual Gallery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E]">
              Farms, Extraction &amp; Export Supplies
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-[#EDE1D2] rounded-xl overflow-hidden border border-[#CBB89D] shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroCoconutGroveImg}
                  alt="Coconut Palm Plantation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 text-center">
                <h4 className="font-serif text-xs font-bold text-[#573B2E]">Coconut Groves</h4>
                <p className="text-[11px] text-[#806044]">Thanjavur, Tamil Nadu</p>
              </div>
            </div>

            <div className="bg-[#EDE1D2] rounded-xl overflow-hidden border border-[#CBB89D] shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={coconutOilBottlesImg}
                  alt="Coconut Oil Extraction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 text-center">
                <h4 className="font-serif text-xs font-bold text-[#573B2E]">Pure Coconut Oils</h4>
                <p className="text-[11px] text-[#806044]">Rotary &amp; Fermentation</p>
              </div>
            </div>

            <div className="bg-[#EDE1D2] rounded-xl overflow-hidden border border-[#CBB89D] shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cocopeatBlocksImg}
                  alt="Cocopeat 5kg Blocks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 text-center">
                <h4 className="font-serif text-xs font-bold text-[#573B2E]">Cocopeat Blocks</h4>
                <p className="text-[11px] text-[#806044]">Low EC &lt; 0.5 Substrate</p>
              </div>
            </div>

            <div className="bg-[#EDE1D2] rounded-xl overflow-hidden border border-[#CBB89D] shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={coirEcoProductsImg}
                  alt="Coir Biodegradable Pots"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 text-center">
                <h4 className="font-serif text-xs font-bold text-[#573B2E]">Eco Coir Products</h4>
                <p className="text-[11px] text-[#806044]">100% Biodegradable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACTION CALLOUT (Chocolate Brown Background) */}
      <section className="py-16 bg-[#573B2E] text-[#EDE1D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE1D2]">
            Discuss Bulk Enquiries with P R GNANARAJA EXPORT
          </h2>
          <p className="text-xs sm:text-sm text-[#CBB89D] max-w-xl mx-auto">
            Direct pricing, custom packing specifications, and prompt shipment support from Tamil Nadu, India.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onRequestQuote()}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#6A6F4C] rounded-md shadow-md transition-all"
            >
              Request an Export Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#412F26] bg-[#EDE1D2] hover:bg-white rounded-md shadow-md transition-all"
            >
              Contact Our Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
