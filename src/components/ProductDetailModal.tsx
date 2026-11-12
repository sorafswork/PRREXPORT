import React from 'react';
import { X, Check, Package, Layers, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello P R GNANARAJA EXPORT, I am interested in inquiring about ${product.name} (${product.businessType}). Please provide export pricing and technical details.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-4xl bg-[#EDE1D2] border border-[#CBB89D] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-[#412F26] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#573B2E] hover:bg-[#E4DAC2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-3 text-xs mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-[#68734B]">
              {product.categoryName}
            </span>
            <span className="text-[#806044]">·</span>
            <span
              className={`font-medium px-2 py-0.5 rounded text-[11px] ${
                product.businessType === 'Manufacturing'
                  ? 'bg-[#68734B]/15 text-[#68734B] border border-[#68734B]/30'
                  : 'bg-[#573B2E]/10 text-[#573B2E] border border-[#573B2E]/20'
              }`}
            >
              {product.businessType === 'Manufacturing'
                ? 'Own Farm & Small-Scale Manufacturing'
                : 'Merchant Export Sourcing'}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E]">
            {product.name}
          </h2>
          <p className="text-sm font-medium text-[#806044] mt-1">
            {product.tagline}
          </p>
        </div>

        {/* Content Split: Image & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Product Image */}
          <div className="space-y-3">
            <div className="relative rounded-lg overflow-hidden border border-[#CBB89D] bg-white aspect-[4/3] shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-[#573B2E]/80 backdrop-blur-sm text-[#EDE1D2] text-[10px] uppercase font-bold tracking-wider rounded">
                Export Grade Quality
              </div>
            </div>

            {/* Quick Summary Pill Box Alternative: Clean Unboxed Spec Strip */}
            <div className="p-3 bg-[#E4DAC2] rounded border border-[#CBB89D]/60 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#806044]">Raw Material:</span>
                <span className="font-semibold text-[#412F26]">{product.rawMaterial}</span>
              </div>
              {product.extractionOrProcess && (
                <div className="flex justify-between">
                  <span className="text-[#806044]">Extraction / Process:</span>
                  <span className="font-semibold text-[#412F26]">{product.extractionOrProcess}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-[#806044]">Primary Packaging:</span>
                <span className="font-semibold text-[#412F26]">{product.packaging}</span>
              </div>
            </div>
          </div>

          {/* Description & Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#573B2E] mb-2">
                Product Overview
              </h3>
              <p className="text-sm text-[#412F26] leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#573B2E] mb-2.5">
                Key Features & Quality Highlights
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#412F26]">
                    <div className="w-4 h-4 rounded-full bg-[#68734B]/20 text-[#68734B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#573B2E] mb-2">
                Commercial & Industrial Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-white border border-[#CBB89D] text-[#573B2E] rounded"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#573B2E]">
              Technical Specifications & Commercial Standards
            </h3>
            <span className="text-[11px] text-[#806044]">
              Verified parameters from production batch
            </span>
          </div>
          <div className="overflow-hidden border border-[#CBB89D] rounded-lg bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#E4DAC2] text-[#573B2E] border-b border-[#CBB89D] uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-4 py-2.5 w-1/3">Parameter</th>
                  <th className="px-4 py-2.5">Standard Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBB89D]/40 text-[#412F26]">
                {product.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#EDE1D2]/30'}>
                    <td className="px-4 py-2.5 font-medium text-[#573B2E]">{spec.label}</td>
                    <td className="px-4 py-2.5 font-mono text-[#412F26]">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sizes & Packaging Options */}
        <div className="mb-8 p-4 bg-[#E4DAC2]/60 rounded-lg border border-[#CBB89D]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#573B2E] mb-2">
            Available Export Sizes & Packaging
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {product.sizes.map((s, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-[#CBB89D] rounded font-medium text-[#573B2E]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#CBB89D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#806044]">
            <span>Minimum Order Quantity & Freight quotes tailored per port destination.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#412F26] bg-white border border-[#CBB89D] hover:bg-[#E4DAC2] rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Enquiry
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] active:bg-[#412F26] rounded-md shadow-sm transition-colors whitespace-nowrap"
            >
              Request a Quote
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
