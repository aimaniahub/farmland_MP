import React from 'react';
import Badge from '../ui/Badge';

const SandalwoodHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-3"><Badge variant="accent">Bharatvan</Badge></div>
          <h1 className="text-4xl md:text-6xl font-serif text-[#0C3B2E] leading-tight">Sandalwood Marketplace</h1>
          <p className="mt-4 text-[#222] max-w-prose">Premium managed participation in Santalum album with transparent monitoring, scientific maintenance, and long-term value.</p>
          <div className="mt-6 flex gap-3">
            <a href="#book" className="inline-flex items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform">Book Now</a>
            <a href="#price-history" className="inline-flex items-center rounded-2xl border border-[#EAE6DF] text-[#0C3B2E] bg-white px-6 py-3 font-semibold hover:bg-[#FAFAF7]">See Price Trend</a>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] w-full bg-white rounded-3xl border border-[#EAE6DF] shadow-sm overflow-hidden">
            <img src="/sanplot.png" alt="Sandalwood plantation" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandalwoodHero;
