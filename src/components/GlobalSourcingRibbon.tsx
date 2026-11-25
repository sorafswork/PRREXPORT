import React from 'react';
import { Award } from 'lucide-react';

interface CredentialItem {
  name: string;
  image: string;
}

const CREDENTIALS: CredentialItem[] = [
  {
    name: 'COIR BOARD',
    image: './assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.35_ab1b4fc9.jpeg',
  },
  {
    name: 'COCONUT DEVELOPMENT BOARD',
    image: './assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.34_fa9aa80b.jpeg',
  },
  {
    name: 'FSSAI',
    image: './assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.35__1__c3475255.jpeg',
  },
];

export const GlobalSourcingRibbon: React.FC = () => {
  // Duplicated for seamless infinite continuous marquee loop
  const marqueeCredentials = [
    ...CREDENTIALS,
    ...CREDENTIALS,
    ...CREDENTIALS,
    ...CREDENTIALS,
  ];

  return (
    <section className="py-14 bg-[#68734B] text-[#EDE1D2] border-y border-[#573B2E]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E4DAC2]/90">
          <Award className="w-3.5 h-3.5" />
          <span>Accreditations &amp; Registrations</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDE1D2] tracking-wide">
          OUR CREDENTIALS
        </h2>

        {/* Our Brand - DHAYALI */}
        <div className="pt-1 flex justify-center">
          <div className="inline-flex items-center gap-4 px-5 py-3 bg-[#573B2E]/90 border border-[#EDE1D2]/25 rounded-xl shadow-md">
            <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src="./assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.36__2__f621d827.jpeg"
                alt="Our Brand – DHAYALI"
                className="w-full h-full object-contain scale-[1.4]"
              />
            </div>
            <span className="font-serif text-base sm:text-lg font-bold text-[#EDE1D2] tracking-wide whitespace-nowrap">
              Our Brand – DHAYALI
            </span>
          </div>
        </div>
      </div>

      {/* Moving Horizontal Ribbon Container with Pause on Hover */}
      <div className="relative w-full overflow-hidden group">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#68734B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#68734B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {marqueeCredentials.map((cred, idx) => (
            <div
              key={`${cred.name}-${idx}`}
              className="inline-flex items-center gap-4 px-6 py-3.5 bg-[#573B2E]/90 border border-[#EDE1D2]/20 rounded-xl shadow-md shrink-0 text-left"
            >
              <div className="w-16 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={cred.image}
                  alt={cred.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-bold text-sm text-[#EDE1D2] whitespace-nowrap">
                {cred.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
