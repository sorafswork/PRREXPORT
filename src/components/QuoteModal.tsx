import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { Product } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || PRODUCTS[0].id
  );
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [quantity, setQuantity] = useState('');
  const [packagingPref, setPackagingPref] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const currentProduct =
    selectedProductId === 'others'
      ? { name: 'Others', sizes: ['Custom Sizes / Specifications'] }
      : PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const ref = `PRG-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(ref);

    // Save inquiry to localStorage for lead management
    try {
      const existingInquiries = JSON.parse(
        localStorage.getItem('pr_gnanaraja_inquiries') || '[]'
      );
      existingInquiries.push({
        ref,
        date: new Date().toISOString(),
        fullName,
        companyName,
        email,
        phone,
        country,
        product: currentProduct.name,
        quantity,
        packagingPref,
        message,
      });
      localStorage.setItem(
        'pr_gnanaraja_inquiries',
        JSON.stringify(existingInquiries)
      );
    } catch {
      // storage quota fallback
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello P R GNANARAJA EXPORT, I would like to request a quote for:\n` +
      `Product: ${currentProduct.name}\n` +
      `Quantity: ${quantity || 'Bulk / Container'}\n` +
      `Company: ${companyName || 'Not specified'}\n` +
      `Country: ${country || 'International'}\n` +
      `Name: ${fullName || 'Buyer'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#EDE1D2] border border-[#CBB89D] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-[#412F26]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#573B2E] hover:bg-[#E4DAC2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#68734B]/20 text-[#68734B] flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-[#573B2E]">
                Quote Request Received
              </h3>
              <p className="text-sm text-[#573B2E] max-w-md mx-auto">
                Thank you, <span className="font-semibold">{fullName}</span>. Your enquiry for{' '}
                <span className="font-semibold">{currentProduct.name}</span> has been logged under reference{' '}
                <span className="font-mono font-bold text-[#573B2E]">{referenceCode}</span>.
              </p>
              <p className="text-xs text-[#806044]">
                Our export sales manager will review your specifications and respond to{' '}
                <span className="font-mono">{email}</span> within 24 business hours.
              </p>
            </div>

            <div className="p-4 bg-[#E4DAC2] rounded-lg border border-[#CBB89D] max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#806044]">Product:</span>
                <span className="font-semibold text-[#412F26]">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#806044]">Required Quantity:</span>
                <span className="font-semibold text-[#412F26]">{quantity || 'Specified in notes'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#806044]">Country:</span>
                <span className="font-semibold text-[#412F26]">{country || 'Global'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#806044]">Direct Export Desk:</span>
                <span className="font-semibold text-[#68734B]">+91 9788600936</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Follow up via WhatsApp
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] rounded-md transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#68734B]">
                B2B Export Enquiry
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E]">
                Request an Export Quote
              </h2>
              <p className="text-xs sm:text-sm text-[#806044]">
                Direct pricing for international importers, wholesalers, distributors, and container buyers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                  Product Interested In *
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  required
                >
                  <optgroup label="Coconut Oil Products (Manufacturer)">
                    {PRODUCTS.filter((p) => p.category === 'coconut-oil').map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.businessType})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Cocopeat Products (Exporter)">
                    {PRODUCTS.filter((p) => p.category === 'cocopeat').map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.businessType})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Coir Products (Exporter)">
                    {PRODUCTS.filter((p) => p.category === 'coir').map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.businessType})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Coconut Shell Products (Exporter)">
                    {PRODUCTS.filter((p) => p.category === 'coconut-shell').map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.businessType})
                      </option>
                    ))}
                  </optgroup>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe / Procurement Manager"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Company / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Pacific Agro Imports LLC"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@company.com"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555-0199 / +91 ..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
              </div>

              {/* Country and Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Destination Country / Port *
                  </label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. USA, UAE, Netherlands, Australia"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                    Required Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 1 x 40ft Container, 5,000 Litres, 20 MT"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                  />
                </div>
              </div>

              {/* Packaging Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                  Preferred Packaging / Size Specification
                </label>
                <input
                  type="text"
                  value={packagingPref}
                  onChange={(e) => setPackagingPref(e.target.value)}
                  placeholder={`Available: ${currentProduct.sizes.join(', ')}`}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                  Specifications & Additional Inquiries
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify custom specifications, target FOB/CIF price range, delivery schedule, or certification questions..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#412F26] bg-[#E4DAC2] hover:bg-[#CBB89D] border border-[#CBB89D] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Direct WhatsApp Enquiry
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] active:bg-[#412F26] rounded-md shadow transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Quote Request'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
