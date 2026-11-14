import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { COMPANY_INFO } from '../data/company';
import { GlobalSourcingRibbon } from '../components/GlobalSourcingRibbon';
import {
  Package,
  Layers,
  ArrowUpRight,
  MessageCircle,
  Check,
  Container,
  FileSpreadsheet,
  Download,
  Info
} from 'lucide-react';

interface ProductPageProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (product?: Product) => void;
  onOpenCatalogue: (tab?: 'catalogue' | 'specs') => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  onSelectProduct,
  onRequestQuote,
  onOpenCatalogue,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const [containerProduct, setContainerProduct] = useState<'cocopeat-5kg' | 'vco-500ml' | 'coir-pots'>('cocopeat-5kg');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleWhatsApp = (product: Product) => {
    const text = encodeURIComponent(
      `Hello, I am interested in ordering ${product.name}. Please share the product details and pricing.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#EDE1D2] text-[#412F26]">
      {/* 1. Header Banner (Olive Green) */}
      <section className="bg-[#68734B] text-[#EDE1D2] py-12 sm:py-16 md:py-20 border-b border-[#573B2E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]">
              B2B Product Catalogue
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#EDE1D2] leading-tight">
              Export-Grade Coconut Oils, Cocopeat &amp; Coir Products
            </h1>
            <p className="text-sm sm:text-base text-[#EDE1D2]/90 leading-relaxed">
              Explore our confirmed product specifications, standard packaging, and container capacities. Direct manufacturing of pure oils and merchant export supply of premium horticultural coir solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter & Action Bar */}
      <section className="md:sticky md:top-20 z-30 bg-[#EDE1D2]/95 backdrop-blur-md border-b border-[#CBB89D]/60 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Products (8)' },
              { id: 'coconut-oil', label: 'Coconut Oil (Mfg)' },
              { id: 'cocopeat', label: 'Cocopeat (Export)' },
              { id: 'coir', label: 'Coir (Export)' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-2 sm:py-1.5 rounded-md text-xs font-semibold transition-colors text-center ${
                    isActive
                      ? 'bg-[#68734B] text-[#EDE1D2] shadow-sm'
                      : 'bg-[#E4DAC2] text-[#573B2E] hover:bg-[#CBB89D]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Catalogue Action */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 md:pt-0">
            <button
              onClick={() => onOpenCatalogue('specs')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#573B2E] hover:text-[#68734B] transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#68734B]" />
              Specification Sheet
            </button>
            <button
              onClick={() => onRequestQuote()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] rounded-md transition-colors shadow-sm"
            >
              Bulk RFQ
            </button>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-16 bg-[#EDE1D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#CBB89D] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#68734B] transition-all"
              >
                <div>
                  {/* Top Split: Image + Essential Meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 border-b border-[#CBB89D]/40">
                    <div className="sm:col-span-5 relative bg-[#E4DAC2] aspect-[4/3] sm:aspect-auto overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#68734B] text-[#EDE1D2]">
                        {product.businessType}
                      </div>
                    </div>

                    <div className="sm:col-span-7 p-6 space-y-2 flex flex-col justify-center">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#68734B]">
                        {product.categoryName}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#573B2E]">
                        {product.name}
                      </h2>
                      <p className="text-xs text-[#806044] font-medium">
                        {product.tagline}
                      </p>
                      <div className="pt-2 text-xs text-[#412F26] space-y-1">
                        <p><span className="text-[#806044] font-medium">Raw Material:</span> {product.rawMaterial}</p>
                        {product.extractionOrProcess && (
                          <p><span className="text-[#806044] font-medium">Process:</span> {product.extractionOrProcess}</p>
                        )}
                        <p><span className="text-[#806044] font-medium">Packaging:</span> {product.packaging}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Description & Features */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-[#412F26] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#573B2E]">
                        Key Highlights:
                      </p>
                      <ul className="space-y-1 text-xs text-[#412F26]">
                        {product.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#68734B] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specification Table Snippet */}
                    <div className="p-3 bg-[#EDE1D2]/50 border border-[#CBB89D]/50 rounded-lg text-xs space-y-1.5">
                      <p className="font-bold text-[#573B2E] text-[11px] uppercase tracking-wider">
                        Technical Specifications:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        {product.specs.slice(0, 4).map((spec, i) => (
                          <div key={i}>
                            <span className="text-[#806044]">{spec.label}: </span>
                            <span className="font-medium text-[#412F26]">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Available Sizes */}
                    <div className="text-xs">
                      <span className="text-[#806044] font-medium">Available Sizes: </span>
                      <span className="font-medium text-[#573B2E]">{product.sizes.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 border-t border-[#CBB89D]/40 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full sm:w-auto text-xs font-semibold text-[#68734B] hover:text-[#573B2E] transition-colors"
                  >
                    Full Technical Details &rarr;
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleWhatsApp(product)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#412F26] bg-[#EDE1D2] hover:bg-[#E4DAC2] border border-[#CBB89D] rounded transition-colors"
                      title="WhatsApp enquiry for this product"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => onRequestQuote(product)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#EDE1D2] bg-[#68734B] hover:bg-[#573B2E] rounded shadow-sm transition-colors"
                    >
                      Order / Quote
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Sourcing Channels (Continuous Moving Ribbon) */}
      <GlobalSourcingRibbon />

      {/* 5. Export Container Loadability Guide (Soft Ivory Background) */}
      <section className="py-12 sm:py-16 bg-[#E4DAC2] border-t border-[#CBB89D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EDE1D2] border border-[#CBB89D] rounded-xl p-5 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#68734B] uppercase tracking-wider">
                  <Container className="w-4 h-4 shrink-0" />
                  International Logistics Reference
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#573B2E]">
                  Export Container Loadability &amp; Packing Guide
                </h3>
                <p className="text-xs text-[#806044]">
                  Standard maritime export capacity estimates from Tamil Nadu ports (Tuticorin / Chennai).
                </p>
              </div>

              {/* Selector */}
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => setContainerProduct('cocopeat-5kg')}
                  className={`px-3 py-1.5 rounded transition-colors font-medium ${
                    containerProduct === 'cocopeat-5kg'
                      ? 'bg-[#68734B] text-[#EDE1D2]'
                      : 'bg-white text-[#573B2E] hover:bg-[#EDE1D2]'
                  }`}
                >
                  5 kg Cocopeat Blocks
                </button>
                <button
                  onClick={() => setContainerProduct('vco-500ml')}
                  className={`px-3 py-1.5 rounded transition-colors font-medium ${
                    containerProduct === 'vco-500ml'
                      ? 'bg-[#68734B] text-[#EDE1D2]'
                      : 'bg-white text-[#573B2E] hover:bg-[#EDE1D2]'
                  }`}
                >
                  Bottled Coconut Oil
                </button>
                <button
                  onClick={() => setContainerProduct('coir-pots')}
                  className={`px-3 py-1.5 rounded transition-colors font-medium ${
                    containerProduct === 'coir-pots'
                      ? 'bg-[#68734B] text-[#EDE1D2]'
                      : 'bg-white text-[#573B2E] hover:bg-[#EDE1D2]'
                  }`}
                >
                  Coir Pots &amp; Mats
                </button>
              </div>
            </div>

            {/* Calculations Table */}
            <div className="bg-white rounded-lg border border-[#CBB89D] overflow-hidden text-xs">
              {containerProduct === 'cocopeat-5kg' && (
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">20ft Dry Container</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">Approx. 12 – 14 MT</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Approx. 2,400 to 2,800 blocks (palletized or floor loaded)</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">40ft High Cube (HC)</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">Approx. 24 – 26 MT</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Approx. 4,800 to 5,200 blocks (20 pallets)</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Expansion Volume</span>
                      <p className="font-mono text-base font-bold text-[#68734B] mt-1">17 – 19 Litres / kg</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Approx. 85L reconstituted volume per block</p>
                    </div>
                  </div>
                </div>
              )}

              {containerProduct === 'vco-500ml' && (
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Master Carton Packing</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">12 or 24 Bottles / Box</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Heavy-duty 5-ply corrugated cartons with inner dividers</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">20ft Container (PET / Glass)</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">Approx. 12,000 to 18,000 L</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Subject to gross cargo road weight limits</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Bulk Packing Option</span>
                      <p className="font-mono text-base font-bold text-[#68734B] mt-1">200 L Barrels / IBC Tanks</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Food-grade drums for repacking or industrial cosmetics</p>
                    </div>
                  </div>
                </div>
              )}

              {containerProduct === 'coir-pots' && (
                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Coir Pots Nested Packing</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">100 – 500 pcs / Carton</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Depending on diameter (3", 4", 6", 10")</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Coir PVC Backed Mats</span>
                      <p className="font-mono text-base font-bold text-[#573B2E] mt-1">Carton / Pallet Packing</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Packed flat in corrugated export cartons</p>
                    </div>
                    <div className="p-3 bg-[#EDE1D2]/40 rounded border border-[#CBB89D]/50">
                      <span className="text-[#806044] block">Coir Scrubbers</span>
                      <p className="font-mono text-base font-bold text-[#68734B] mt-1">Bulk Retail Bundles</p>
                      <p className="text-[11px] text-[#412F26] mt-0.5">Custom cardboard sleeves with buyer barcode</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quote Callout (Chocolate Brown) */}
      <section className="py-16 bg-[#573B2E] text-[#EDE1D2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE1D2]">
            Need a Customized Export Quotation?
          </h2>
          <p className="text-xs sm:text-sm text-[#CBB89D] max-w-xl mx-auto">
            Provide your target port, preferred delivery incoterms (FOB / CIF / CFR), and quantity requirements for a detailed price calculation.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onRequestQuote()}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#412F26] bg-[#EDE1D2] hover:bg-white rounded-md shadow transition-colors"
            >
              Request Bulk Quotation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
