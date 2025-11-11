import React from 'react';
import Badge from '../ui/Badge';
import homepageImg from '../../../homepage.jpg';

const SandalwoodTeaser: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-1 md:order-none">
          <div className="mb-3"><Badge variant="accent">Bharatvan</Badge></div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0C3B2E] leading-tight">Sandalwood</h2>
          <p className="mt-4 text-[#222] max-w-prose">Premium managed participation in Santalum album with transparent monitoring, scientific maintenance, and long-term value. Explore a curated, hassle-free way to be part of sandalwood cultivation.</p>
          <div className="mt-6 flex gap-3">
            <a href="/sandalwood#book" className="inline-flex items-center rounded-2xl bg-[#0C3B2E] text-white px-6 py-3 font-semibold transition-transform hover:scale-[1.02]">Book Now</a>
            <a href="/sandalwood" className="inline-flex items-center rounded-2xl border border-[#EAE6DF] text-[#0C3B2E] bg-white px-6 py-3 font-semibold hover:bg-[#FAFAF7]">Explore</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl shadow-sm overflow-hidden border border-[#EAE6DF] bg-white">
            <img src={homepageImg} alt="Sandalwood" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -z-10 inset-0 translate-x-6 translate-y-6 rounded-3xl bg-[#D8C3A5] opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default SandalwoodTeaser;
