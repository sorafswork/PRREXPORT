import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { heroCoconutGroveImg } from '../assets/images';

interface HeroVideoProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onExploreProducts,
  onContactUs,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Portable local video depicting the complete coconut oil journey (trees -> harvest -> extraction -> pure oil -> PRR & Dhayali logos)
  const videoSource = './videos/coconut-journey.mp4';

  const handleScrollDown = () => {
    const el = document.getElementById('company-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#412F26]">
      {/* 1. AI-Generated Coconut Oil Journey Video */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroCoconutGroveImg}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
      )}

      {/* 2. Mobile & High-Resolution Fallback Image with Smooth Ken Burns Animatic Effect */}
      <img
        src={heroCoconutGroveImg}
        alt="Lush coconut plantation in Thanjavur, Tamil Nadu"
        className={`absolute inset-0 w-full h-full object-cover animate-ken-burns transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 3. Animatic Natural Sunbeam & Caustic Light Filter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-radial from-[#CBB89D]/20 via-[#68734B]/10 to-transparent blur-3xl animate-sunbeam" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-[#EDE1D2]/5 to-[#CBB89D]/15 mix-blend-soft-light pointer-events-none" />
      </div>

      {/* 4. Dark Olive and Brown Overlay for Cinematic Warmth & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#412F26]/65 via-[#573B2E]/45 to-[#68734B]/65 backdrop-brightness-[0.95]" />
      <div className="absolute inset-0 bg-[#68734B]/20 mix-blend-multiply pointer-events-none" />

      {/* 5. Hero Content - Minimal, Elegant & Concise */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-[#EDE1D2]">
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#68734B]/50 border border-[#EDE1D2]/25 text-xs sm:text-sm font-semibold text-[#EDE1D2] mb-6 tracking-widest uppercase shadow-sm">
          <span>P R GNANARAJA EXPORT</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDE1D2] leading-[1.15] text-balance mb-5 drop-shadow">
          From Our Farms to Global Markets.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-[#EDE1D2] max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-sans font-normal drop-shadow">
          Experience the Purity of coconut oil, Virgin coconut oil from DHAYALI.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#573B2E] border border-[#68734B] rounded-md shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Products
          </button>
          <button
            onClick={onContactUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#412F26] bg-[#EDE1D2] hover:bg-white rounded-md shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4 text-[#68734B]" />
          </button>
        </div>
      </div>

      {/* 6. Minimal Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#EDE1D2]/80 hover:text-white transition-colors focus-visible:outline-none"
        aria-label="Scroll to company introduction"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
