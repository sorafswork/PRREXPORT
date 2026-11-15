import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const GlobalSourcingRibbon: React.FC = () => {
  // Platforms duplicated for seamless infinite continuous right-to-left marquee loop
  const platforms = [
    ...COMPANY_INFO.b2bPlatforms,
    ...COMPANY_INFO.b2bPlatforms,
    ...COMPANY_INFO.b2bPlatforms,
  ];

  return (
    <section className="py-14 bg-[#68734B] text-[#EDE1D2] border-y border-[#573B2E]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]/90">
          <Globe className="w-3.5 h-3.5" />
          <span>International Trade Platforms</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE1D2]">
          Global Sourcing Channels
        </h2>
        <p className="text-xs sm:text-sm text-[#E4DAC2]/80 max-w-xl mx-auto">
          Connecting businesses through leading digital platforms.
        </p>
      </div>

      {/* Moving Horizontal Ribbon Container with Pause on Hover */}
      <div className="relative w-full overflow-hidden group">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#68734B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#68734B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {platforms.map((platform, idx) => (
            <a
              key={`${platform.name}-${idx}`}
              href={platform.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-4 px-6 py-3.5 bg-[#573B2E]/90 hover:bg-[#573B2E] border border-[#EDE1D2]/20 rounded-xl transition-colors shadow-md shrink-0 text-left"
              title={`Visit ${platform.name} official site`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#EDE1D2] text-[#412F26] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                {platform.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-[#EDE1D2] flex items-center gap-1.5 whitespace-nowrap">
                  {platform.name}
                  <ExternalLink className="w-3 h-3 text-[#CBB89D]" />
                </span>
                <span className="text-[10px] text-[#CBB89D] uppercase tracking-wider whitespace-nowrap">
                  {platform.badge}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
