import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { prrIconImg } from '../assets/images';

interface HeaderProps {
  currentPage: 'home' | 'about' | 'product' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'product' | 'contact') => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'product' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navItems: { id: 'home' | 'about' | 'product' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'product', label: 'Product' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#EDE1D2]/95 backdrop-blur-md border-b border-[#CBB89D]/40 transition-colors">
      {/* 1. Mobile View Top Contact Bar (Visible on mobile screens < md) */}
      <div className="md:hidden bg-[#68734B] text-[#EDE1D2] px-4 py-1.5 text-[11px] flex items-center justify-between border-b border-[#573B2E]/20">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center gap-1.5 font-mono font-medium hover:text-white transition-colors"
          aria-label="Call P R GNANARAJA EXPORT"
        >
          <Phone className="w-3 h-3 text-[#EDE1D2] shrink-0" />
          <span>{COMPANY_INFO.phoneDisplay}</span>
        </a>
        <span className="text-[10px] text-[#EDE1D2]/90 uppercase tracking-wider font-semibold">
          Export Desk
        </span>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-3 md:gap-8">
        {/* Zone 1: Official Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left min-w-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
          aria-label="P R GNANARAJA EXPORT Homepage"
        >
          {/* Official Brand Logo Icon */}
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden bg-white border border-[#CBB89D]/60 flex items-center justify-center p-0.5 shadow-sm shrink-0">
            <img
              src={prrIconImg}
              alt="P R GNANARAJA Emblem"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-[15px] sm:text-xl font-bold tracking-tight text-[#412F26] truncate group-hover:text-[#68734B] transition-colors leading-tight">
              P R GNANARAJA EXPORT
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#68734B] font-semibold truncate">
              Producer | Manufacturer | Exporter
            </span>
          </div>
        </button>

        {/* Zone 2: Exactly 4 Main Navigation Items */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#573B2E]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#412F26] font-semibold'
                    : 'text-[#624735] hover:text-[#68734B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#68734B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#EDE1D2] bg-[#68734B] hover:bg-[#573B2E] active:bg-[#412F26] rounded-md shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
          >
            Request a Quote
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#573B2E] hover:bg-[#E4DAC2] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#CBB89D]/40 bg-[#EDE1D2] px-6 py-5 shadow-lg space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#68734B] text-[#EDE1D2] font-semibold'
                      : 'text-[#573B2E] hover:bg-[#E4DAC2]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#CBB89D]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#573B2E] rounded-md shadow transition-colors"
            >
              Request a Quote
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

