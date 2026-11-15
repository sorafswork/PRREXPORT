import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, Printer, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS, UPCOMING_PRODUCTS } from '../data/products';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
  defaultTab?: 'catalogue' | 'specs' | 'profile';
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
  defaultTab = 'catalogue',
}) => {
  const [activeTab, setActiveTab] = useState<'catalogue' | 'specs' | 'profile'>(defaultTab);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate structured text document representing the export catalogue
    let content = `========================================================================\n`;
    content += `P R GNANARAJA EXPORT\n`;
    content += `From Our Source to Global Markets\n`;
    content += `Phone: ${COMPANY_INFO.phoneDisplay} | Email: ${COMPANY_INFO.email}\n`;
    content += `Website: ${COMPANY_INFO.website}\n`;
    content += `========================================================================\n\n`;

    if (activeTab === 'catalogue' || activeTab === 'specs') {
      content += `EXPORT PRODUCT CATALOGUE & TECHNICAL SPECIFICATIONS\n\n`;
      PRODUCTS.forEach((p, idx) => {
        content += `[${idx + 1}] ${p.name.toUpperCase()} (${p.businessType.toUpperCase()})\n`;
        content += `Category: ${p.categoryName}\n`;
        content += `Tagline: ${p.tagline}\n`;
        content += `Raw Material: ${p.rawMaterial}\n`;
        if (p.extractionOrProcess) content += `Extraction/Process: ${p.extractionOrProcess}\n`;
        content += `Sizes: ${p.sizes.join(', ')}\n`;
        content += `Packaging: ${p.packaging}\n`;
        content += `Applications: ${p.applications.join(', ')}\n`;
        content += `Specifications:\n`;
        p.specs.forEach((s) => {
          content += `  - ${s.label}: ${s.value}\n`;
        });
        content += `\n------------------------------------------------------------------------\n\n`;
      });
      content += `UPCOMING MANUFACTURING EXPANSIONS:\n`;
      UPCOMING_PRODUCTS.forEach((up) => {
        content += `* ${up.name} (${up.status}) - ${up.timeline}\n  Description: ${up.description}\n`;
      });
    } else {
      content += `COMPANY PROFILE & EXPORT CREDENTIALS\n\n`;
      content += `Entity: P R GNANARAJA EXPORT\n\n`;
      content += `Core Activities:\n`;
      content += `1. Coconut Producer: Cultivation and sourcing of quality mature coconuts.\n`;
      content += `2. Coconut Oil Manufacturing: Production of 100% pure Natural Coconut Oil (rotary extracted) and Virgin Coconut Oil (fermentation extracted).\n`;
      content += `3. Global Exporting: Supply of premium cocopeat (5kg blocks, 650g bricks, jiffy discs), coir products (biodegradable pots, mulch mats, scrubber pads, PVC backed mats), and coconut shell dessert cups.\n\n`;
      content += `Future Expansion: Sesame Oil & Groundnut Oil manufacturing planned for next year.\n`;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `PR_GNANARAJA_EXPORT_${activeTab.toUpperCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-3xl bg-[#EDE1D2] border border-[#CBB89D] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-[#412F26] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#573B2E] hover:bg-[#E4DAC2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68734B]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#68734B]">
            Buyer Documentation & Resources
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E]">
            Official Export Resources
          </h2>
          <p className="text-xs sm:text-sm text-[#806044]">
            Instant access to verified product data, technical specifications, and company background for procurement teams.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex border-b border-[#CBB89D] mb-6 gap-2">
          <button
            onClick={() => setActiveTab('catalogue')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'catalogue'
                ? 'border-[#573B2E] text-[#573B2E] font-semibold'
                : 'border-transparent text-[#806044] hover:text-[#573B2E]'
            }`}
          >
            Product Catalogue
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'specs'
                ? 'border-[#573B2E] text-[#573B2E] font-semibold'
                : 'border-transparent text-[#806044] hover:text-[#573B2E]'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-[#573B2E] text-[#573B2E] font-semibold'
                : 'border-transparent text-[#806044] hover:text-[#573B2E]'
            }`}
          >
            Company Profile
          </button>
        </div>

        {/* Document Content View */}
        <div className="bg-white border border-[#CBB89D] rounded-lg p-5 sm:p-6 mb-6 text-xs sm:text-sm space-y-4 shadow-sm max-h-96 overflow-y-auto">
          {activeTab === 'catalogue' && (
            <div className="space-y-4">
              <div className="border-b border-[#CBB89D]/40 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68734B]">
                  P R GNANARAJA EXPORT · 2026 Export Catalogue
                </span>
                <h3 className="font-serif text-lg font-bold text-[#573B2E] mt-0.5">
                  Natural Coconut, Cocopeat & Coir Product Range
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-[#806044]">
                  We present our confirmed product portfolio across two distinct operating verticals: Coconut Oil Manufacturing and Global Exporting.
                </p>
                <div className="space-y-2">
                  <div className="p-2.5 bg-[#EDE1D2]/50 rounded border border-[#CBB89D]/50">
                    <p className="font-semibold text-[#573B2E] text-xs">A. Coconut Oil Products (Manufacturing)</p>
                    <p className="text-[11px] text-[#412F26]">
                      1. Natural Coconut Oil (Rotary extraction, copra, 250ml–1000ml & bulk)
                      <br />
                      2. Virgin Coconut Oil (Fermentation, coconut milk, 250ml–1000ml & bulk)
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#EDE1D2]/50 rounded border border-[#CBB89D]/50">
                    <p className="font-semibold text-[#573B2E] text-xs">B. Cocopeat Products (Export)</p>
                    <p className="text-[11px] text-[#412F26]">
                      1. Cocopeat Disc / Jiffy Plugs (25–100mm, EC &lt; 0.5, pH 5.6–6.6)
                      <br />
                      2. Cocopeat 5 kg Blocks (17–19 L/kg expansion, EC &lt; 0.5, Low impurities)
                      <br />
                      3. Cocopeat 650 gram Bricks (8L expansion, 20x10x5cm, Ready to Use)
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#EDE1D2]/50 rounded border border-[#CBB89D]/50">
                    <p className="font-semibold text-[#573B2E] text-xs">C. Coir &amp; Coconut Shell Products (Export)</p>
                    <p className="text-[11px] text-[#412F26]">
                      1. Coir Pots (Circular, 3, 4, 6 and 10 inches, 100% biodegradable)
                      <br />
                      2. Coir Mulch Mats (Circular, 10–12 mm, 1200 GSM, 4" to 48" inches)
                      <br />
                      3. Coir Scrubber Pads (4x3 in & 6x4 in, 6mm, stitched & unstitched)
                      <br />
                      4. Coir PVC Backed Mats (40x60, 45x75, 60x90 cm, rubber backing)
                      <br />
                      5. Coconut Shell Dessert Cups (200 ml, Polished, Biodegradable)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="border-b border-[#CBB89D]/40 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68734B]">
                  Engineering & Technical Standards
                </span>
                <h3 className="font-serif text-lg font-bold text-[#573B2E] mt-0.5">
                  Verified Batch Parameters & Testing Standards
                </h3>
              </div>
              <p className="text-xs text-[#806044]">
                All export shipments are accompanied by technical quality verification, moisture analysis, and strict physical dimension inspection.
              </p>
              <div className="divide-y divide-[#CBB89D]/40 text-xs">
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-[#573B2E]">Cocopeat EC Level:</span>
                  <span className="font-mono text-[#412F26]">Strictly below 0.5 mS/cm (Low EC)</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-[#573B2E]">Cocopeat pH Balance:</span>
                  <span className="font-mono text-[#412F26]">5.6 to 6.6</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-[#573B2E]">Cocopeat Moisture:</span>
                  <span className="font-mono text-[#412F26]">15% maximum standard</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-[#573B2E]">Natural Coconut Oil Purity:</span>
                  <span className="font-mono text-[#412F26]">100% unrefined, unsulphured</span>
                </div>
                <div className="py-2 flex justify-between">
                  <span className="font-medium text-[#573B2E]">Virgin Coconut Oil Process:</span>
                  <span className="font-mono text-[#412F26]">Natural fermentation from milk</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="border-b border-[#CBB89D]/40 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#68734B]">
                  Company Overview & Credentials
                </span>
                <h3 className="font-serif text-lg font-bold text-[#573B2E] mt-0.5">
                  P R GNANARAJA EXPORT · Corporate Summary
                </h3>
              </div>
              <p className="text-xs text-[#412F26] leading-relaxed">
                P R GNANARAJA EXPORT is an integrated coconut producer, pure oil manufacturer, and international supplier of natural coconut-based products.
              </p>
              <p className="text-xs text-[#412F26] leading-relaxed">
                The company combines direct coconut producer heritage with pure coconut oil manufacturing and reliable export capabilities for coir, cocopeat, and coconut shell products.
              </p>
              <div className="p-3 bg-[#E4DAC2]/50 rounded text-xs text-[#573B2E] space-y-1">
                <p className="font-semibold">Official Contact Details:</p>
                <p>Phone: {COMPANY_INFO.phoneDisplay} | Email: {COMPANY_INFO.email}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#412F26] bg-white border border-[#CBB89D] hover:bg-[#E4DAC2] rounded-md transition-colors"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-[#68734B]" />
                Document Downloaded
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download Resource File (.txt)
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] rounded-md shadow-sm transition-colors"
          >
            Send Bulk Enquiry
            <Mail className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
