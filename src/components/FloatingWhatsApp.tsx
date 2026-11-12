import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello P R GNANARAJA EXPORT, I would like to enquire about your coconut products, coconut oil, cocopeat or coir products.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-[#573B2E] text-[#EDE1D2] text-xs rounded-lg shadow-xl border border-[#806044]/60 animate-fade-in max-w-xs">
          <span>Chat directly with Export Sales Desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#CBB89D] hover:text-white p-0.5"
            aria-label="Dismiss WhatsApp hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Contact P R GNANARAJA EXPORT on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
