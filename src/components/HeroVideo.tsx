import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroVideoProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
  onScrollDown?: () => void;
}

type HeroVideoMode = 'desktop' | 'tablet-land' | 'tablet-port' | 'mobile';

const getHeroVideoMode = (): HeroVideoMode => {
  if (typeof window === 'undefined') return 'desktop';
  const w = window.innerWidth;
  const h = window.innerHeight || 1;
  if (h > w) {
    return w >= 600 ? 'tablet-port' : 'mobile';
  }
  return w / h < 1.45 ? 'tablet-land' : 'desktop';
};

const VIDEO_SOURCES: Record<HeroVideoMode, string> = {
  desktop: './videos/coconut-journey.mp4',
  'tablet-land': './videos/coconut-journey-tablet-land.mp4',
  'tablet-port': './videos/coconut-journey-tablet.mp4',
  mobile: './videos/coconut-journey-mobile.mp4',
};

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onExploreProducts,
  onContactUs,
  onScrollDown,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoMode, setVideoMode] = useState<HeroVideoMode>(getHeroVideoMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const syncViewport = () => {
      const next = getHeroVideoMode();
      setVideoMode((prev) => {
        if (prev !== next) {
          setVideoReady(false);
          setVideoError(false);
        }
        return next;
      });
    };
    syncViewport();
    window.addEventListener('resize', syncViewport, { passive: true });
    window.addEventListener('orientationchange', syncViewport, { passive: true });
    return () => {
      window.removeEventListener('resize', syncViewport);
      window.removeEventListener('orientationchange', syncViewport);
    };
  }, []);

  const videoSource = VIDEO_SOURCES[videoMode];
  const fallbackPoster = './assets/aistudio/c7_001838b2.jpeg';

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoError) return;

    // Enforce muted & inline attributes directly on the DOM node for iOS Safari / Android WebView autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    if (video.readyState >= 2) {
      setVideoReady(true);
    }

    let interactionBound = false;
    const removeInteractionListeners = () => {
      if (!interactionBound) return;
      interactionBound = false;
      window.removeEventListener('touchstart', tryPlay);
      window.removeEventListener('pointerdown', tryPlay);
      window.removeEventListener('scroll', tryPlay);
    };

    const tryPlay = () => {
      const el = videoRef.current;
      if (!el) return;
      el.muted = true;
      el.defaultMuted = true;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoReady(true);
            removeInteractionListeners();
          })
          .catch(() => {
            if (!interactionBound) {
              interactionBound = true;
              window.addEventListener('touchstart', tryPlay, { passive: true });
              window.addEventListener('pointerdown', tryPlay, { passive: true });
              window.addEventListener('scroll', tryPlay, { passive: true });
            }
          });
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && videoRef.current?.paused) {
        tryPlay();
      }
    };

    tryPlay();

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      removeInteractionListeners();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [videoSource, videoError]);

  const handleScrollDown = () => {
    if (onScrollDown) {
      onScrollDown();
      return;
    }
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100svh-5.5rem)] sm:min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#412F26]">
      {/* 1. Fallback Image with Smooth Ken Burns Effect (visible underneath until video renders or on error) */}
      <img
        src={fallbackPoster}
        alt="Lush natural coconut plantation"
        className={`absolute inset-0 w-full h-full object-cover animate-ken-burns transition-opacity duration-700 ${
          videoReady && !videoError ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Continuous AI-Generated Coconut Journey Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          key={videoSource}
          src={videoSource}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={fallbackPoster}
          onLoadedMetadata={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => {
            setVideoReady(true);
            if (videoRef.current?.paused) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          }}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
      )}

      {/* 3. Animatic Natural Sunbeam & Caustic Light Filter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-radial from-[#CBB89D]/20 via-[#68734B]/10 to-transparent blur-3xl animate-sunbeam" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-[#EDE1D2]/5 to-[#CBB89D]/15 mix-blend-soft-light pointer-events-none" />
      </div>

      {/* 4. Dark Olive and Brown Overlay for Cinematic Warmth & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#412F26]/65 via-[#573B2E]/45 to-[#68734B]/65 backdrop-brightness-[0.95]" />
      <div className="absolute inset-0 bg-[#68734B]/20 mix-blend-multiply pointer-events-none" />

      {/* 5. Hero Content - Identical Copy & Refined Mobile/Desktop Layout */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-32 text-center text-[#EDE1D2]">
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#68734B]/50 border border-[#EDE1D2]/25 text-[11px] sm:text-sm font-semibold text-[#EDE1D2] mb-5 sm:mb-6 tracking-widest uppercase shadow-sm">
          <span>P R GNANARAJA EXPORT</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EDE1D2] leading-[1.15] text-balance mb-4 sm:mb-5 drop-shadow">
          Experience the Purity of coconut oil, Virgin coconut oil from DHAYALI.
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-xl text-[#EDE1D2] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 text-balance font-sans font-normal drop-shadow">
          From Our Source to Global Markets.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
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
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#EDE1D2]/80 hover:text-white transition-colors focus-visible:outline-none"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
