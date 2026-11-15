import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import {
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [product, setProduct] = useState(PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const buildWhatsAppMessage = (ref?: string) => {
    const lines = [
      `*New Business Enquiry - ${COMPANY_INFO.name}*`,
      ref ? `Enquiry ID: ${ref}` : null,
      `Full Name: ${fullName || 'Buyer'}`,
      `Company Name: ${companyName || 'Not specified'}`,
      `Email Address: ${email || 'Not specified'}`,
      `Phone / WhatsApp: ${phone || 'Not specified'}`,
      `Buyer Country / Port: ${country || 'International'}`,
      `Product Interested In: ${product}`,
      `Required Quantity: ${quantity || 'Not specified'}`,
      `Message & Requirements: ${message || 'Not specified'}`,
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName || !companyName || !email || !phone || !country || !quantity || !message) {
      setErrorMessage('Please fill in all mandatory fields before submitting.');
      return;
    }

    setSubmitting(true);
    const ref = `EXP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(ref);

    // Save inquiry to localStorage
    try {
      const records = JSON.parse(localStorage.getItem('pr_gnanaraja_contact_leads') || '[]');
      records.push({
        ref,
        date: new Date().toISOString(),
        fullName,
        companyName,
        email,
        phone,
        country,
        product,
        quantity,
        message,
      });
      localStorage.setItem('pr_gnanaraja_contact_leads', JSON.stringify(records));
    } catch {
      // quota fallback
    }

    // Open WhatsApp directly with all filled enquiry details
    const encoded = buildWhatsAppMessage(ref);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setQuantity('');
    setMessage('');
    setSubmitted(false);
  };

  const handleDirectWhatsApp = () => {
    const encoded = buildWhatsAppMessage(refNumber || undefined);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#EDE1D2] text-[#412F26]">
      {/* 1. Header Banner (Olive Green) */}
      <section className="bg-[#68734B] text-[#EDE1D2] py-12 sm:py-16 md:py-20 border-b border-[#573B2E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]">
              Direct B2B Communication
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#EDE1D2] leading-tight">
              Connect With Our Export Desk
            </h1>
            <p className="text-sm sm:text-base text-[#EDE1D2]/90 leading-relaxed">
              We welcome enquiries from international importers, bulk distributors, commercial nurseries, and procurement agents worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-[#CBB89D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Official Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#68734B]">
                  Official Contact Details
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E]">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#412F26] leading-relaxed">
                  Direct connection with management for price inquiries, technical sheets, shipping schedules, and sample requests.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <div className="p-4 bg-white border border-[#CBB89D] rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#573B2E]/15 text-[#573B2E] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#573B2E] text-xs uppercase tracking-wider mb-0.5">
                        Direct Phone
                      </h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="font-mono text-[#412F26] hover:text-[#68734B] font-semibold text-sm transition-colors break-all"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-3 py-1.5 bg-[#EDE1D2] hover:bg-[#E4DAC2] text-[#573B2E] text-xs font-semibold rounded border border-[#CBB89D] transition-colors shrink-0"
                  >
                    Call Now
                  </a>
                </div>

                {/* Email */}
                <div className="p-4 bg-white border border-[#CBB89D] rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#806044]/15 text-[#806044] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#573B2E] text-xs uppercase tracking-wider mb-0.5">
                        Official Email
                      </h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-mono text-[#412F26] hover:text-[#68734B] font-semibold text-sm transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="px-3 py-1.5 bg-[#EDE1D2] hover:bg-[#E4DAC2] text-[#573B2E] text-xs font-semibold rounded border border-[#CBB89D] transition-colors shrink-0"
                  >
                    Send Email
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#412F26] text-xs uppercase tracking-wider mb-0.5">
                        WhatsApp Export Liaison
                      </h3>
                      <span className="font-mono text-[#412F26] font-semibold text-sm">
                        +91 9788600936
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded shadow-sm transition-colors shrink-0"
                  >
                    Chat
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-5 bg-[#E4DAC2] border border-[#CBB89D] rounded-xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#573B2E]">
                  Verified Social Channels
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#CBB89D] rounded hover:border-[#68734B] text-[#573B2E] transition-colors font-medium"
                  >
                    Instagram
                    <ExternalLink className="w-3 h-3 text-[#806044]" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#CBB89D] rounded hover:border-[#68734B] text-[#573B2E] transition-colors font-medium"
                  >
                    Facebook
                    <ExternalLink className="w-3 h-3 text-[#806044]" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#CBB89D] rounded hover:border-[#68734B] text-[#573B2E] transition-colors font-medium"
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3 text-[#806044]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: B2B Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#CBB89D] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#68734B]">
                    Enquiry Form
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#573B2E] mt-1">
                    Send a Direct Business Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#806044] mt-1">
                    Fill out your import requirements for expedited quotation by our export sales desk.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-md text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#68734B]/20 text-[#68734B] flex items-center justify-center">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl font-bold text-[#573B2E]">
                        Message Successfully Sent
                      </h4>
                      <p className="text-xs sm:text-sm text-[#412F26] max-w-md mx-auto">
                        Thank you, <span className="font-semibold">{fullName}</span> ({companyName}). Your message has been logged under enquiry ID <span className="font-mono font-bold text-[#573B2E]">{refNumber}</span>.
                      </p>
                      <p className="text-xs text-[#806044]">
                        We will follow up with your provided email ({email}) and phone ({phone}) shortly.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <button
                        onClick={handleDirectWhatsApp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-md transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Quick Chat on WhatsApp
                      </button>
                      <button
                        onClick={handleResetForm}
                        className="px-5 py-2.5 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] rounded-md transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name & Company */}
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
                          placeholder="e.g. David Miller"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Miller Horticultural B.V."
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="procurement@domain.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+31 6 12345678"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        />
                      </div>
                    </div>

                    {/* Country & Product */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                          Buyer Country / Destination Port *
                        </label>
                        <input
                          type="text"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. Netherlands / Rotterdam Port"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                          Product Interested In *
                        </label>
                        <select
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                        >
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name} ({p.businessType})
                            </option>
                          ))}
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>

                    {/* Required Quantity */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                        Required Quantity *
                      </label>
                      <input
                        type="text"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 1 x 40ft High Cube Container (~26 MT), 10,000 Pieces, 20 Barrels"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#573B2E] mb-1">
                        Message &amp; Commercial Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please include details such as delivery timeframe, preferred incoterms (FOB / CIF), packaging specifications, or quality testing requirements..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#EDE1D2]/30 border border-[#CBB89D] rounded-md focus:border-[#68734B] focus:ring-1 focus:ring-[#68734B] outline-none text-[#412F26]"
                      />
                    </div>

                    {/* Submit Row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-[#806044]">
                        * We respect business privacy. Information is strictly used for order quoting.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold text-[#EDE1D2] bg-[#573B2E] hover:bg-[#624735] active:bg-[#412F26] rounded-md shadow transition-colors disabled:opacity-50"
                      >
                        {submitting ? 'Sending Enquiry...' : 'Submit Business Enquiry'}
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
