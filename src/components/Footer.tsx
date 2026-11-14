import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { prrIconImg } from '../assets/images';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'product' | 'contact') => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#573B2E] text-[#E4DAC2] border-t border-[#412F26]">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-[#68734B] w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-[#CBB89D]/40 p-0.5 flex items-center justify-center shrink-0">
                <img
                  src={prrIconImg}
                  alt="P R GNANARAJA Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#EDE1D2] tracking-wide">
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className="text-sm text-[#CBB89D] leading-relaxed">
              Rooted in coconut farming in Thanjavur, Tamil Nadu. Small-scale manufacturing of pure Natural & Virgin Coconut Oil and merchant export solutions for high-grade cocopeat and coir products worldwide.
            </p>
            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#6A6F4C] rounded transition-colors"
              >
                Request an Export Quote
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links & Product Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBB89D]">
              Navigation & Products
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#EDE1D2] uppercase tracking-wider">Pages</p>
                <ul className="space-y-2 text-[#CBB89D]">
                  <li>
                    <button
                      onClick={() => onNavigate('home')}
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('about')}
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('product')}
                      className="hover:text-white transition-colors"
                    >
                      Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-[#EDE1D2] uppercase tracking-wider">Categories</p>
                <ul className="space-y-2 text-[#CBB89D]">
                  <li>
                    <button
                      onClick={() => onNavigate('product')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Coconut Oil
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('product')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Cocopeat
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('product')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Coir Products
                    </button>
                  </li>
                  <li className="text-xs text-[#CBB89D]/70 italic">
                    Sesame & Groundnut (Upcoming)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Details & Address */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBB89D]">
              Contact & Address
            </h4>
            <div className="space-y-3 text-sm text-[#CBB89D]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CBB89D] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CBB89D] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CBB89D] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#CBB89D] shrink-0" />
                <a
                  href={COMPANY_INFO.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-white transition-colors font-mono"
                >
                  prgnanaraja.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#CBB89D] shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20P%20R%20GNANARAJA%20EXPORT,%20I%20would%20like%20to%20enquire%20about%20your%20products.`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#E4DAC2] hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  WhatsApp: +91 9788600936
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: B2B Platforms & Social Media */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBB89D]">
              Find Us On B2B Platforms
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {COMPANY_INFO.b2bPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 bg-[#412F26]/60 border border-[#806044]/40 rounded hover:bg-[#412F26] hover:border-[#CBB89D] transition-colors flex flex-col justify-between group"
                >
                  <span className="font-semibold text-[#EDE1D2] flex items-center justify-between">
                    {platform.name}
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                  </span>
                  <span className="text-[10px] text-[#CBB89D] mt-1 line-clamp-1">Official Site</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs text-[#CBB89D] mb-2 font-medium">Follow & Connect</p>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 bg-[#412F26] hover:bg-[#68734B] text-[#EDE1D2] text-xs rounded transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 bg-[#412F26] hover:bg-[#68734B] text-[#EDE1D2] text-xs rounded transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-3 py-1.5 bg-[#412F26] hover:bg-[#68734B] text-[#EDE1D2] text-xs rounded transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Trust Note */}
        <div className="pt-8 border-t border-[#412F26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBB89D]">
          <p>
            &copy; {currentYear} <span className="text-[#EDE1D2] font-semibold">{COMPANY_INFO.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#CBB89D]/80">
            <span>Thanjavur, Tamil Nadu, India</span>
            <span>·</span>
            <span>Agricultural Merchant Exporter</span>
            <span>·</span>
            <span>Small-Scale Coconut Oil Manufacturer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
