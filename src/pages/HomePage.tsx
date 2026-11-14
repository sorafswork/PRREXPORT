import React from 'react';
import { HeroVideo } from '../components/HeroVideo';
import { ArrowRight, Sprout } from 'lucide-react';
import { heroCoconutGroveImg } from '../assets/images';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'product' | 'contact') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC HERO SECTION */}
      <HeroVideo
        onExploreProducts={() => {
          onNavigate('product');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onContactUs={() => {
          onNavigate('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. SHORT COMPANY INTRODUCTION SECTION (PREMIUM SPLIT LAYOUT) */}
      <section id="company-intro" className="py-24 sm:py-32 bg-[#EDE1D2] border-b border-[#CBB89D]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Authentic Coconut Farming / Coconut Oil Photography */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#CBB89D] shadow-xl bg-white aspect-[4/3] group">
                <img
                  src={heroCoconutGroveImg}
                  alt="Authentic coconut groves and plantation in Thanjavur, Tamil Nadu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#412F26]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#EDE1D2] text-xs font-medium">
                  <span className="px-3 py-1 bg-[#68734B]/90 backdrop-blur-sm rounded-md font-semibold text-[11px] uppercase tracking-wider">
                    Thanjavur Delta Farms
                  </span>
                  <span className="text-[11px] text-[#EDE1D2]/90">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>

            {/* Short Company Introduction Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#68734B]">
                <Sprout className="w-3.5 h-3.5" />
                <span>Our Heritage &amp; Identity</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#573B2E] tracking-tight leading-[1.2]">
                Rooted in Coconut. Driven by Quality.
              </h2>

              <p className="text-base sm:text-lg text-[#412F26] leading-relaxed font-sans">
                P R GNANARAJA EXPORT is a coconut farming and small-scale manufacturing business, producing coconut oil products and supplying coir and cocopeat products through merchant exporting.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#EDE1D2] bg-[#68734B] hover:bg-[#573B2E] rounded-md shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Discover Our Company
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
