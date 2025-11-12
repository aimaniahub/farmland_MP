import React from 'react';

const SandalwoodEducation: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-serif text-[#0C3B2E]">Why Sandalwood?</h2>
          <p className="mt-2 text-sm text-[#222] opacity-80">Scientific name: <span className="italic">Santalum album</span></p>
          <ul className="mt-4 space-y-3 text-[#222]">
            <li>• Maturation timeline: 12–15 years for heartwood development</li>
            <li>• Climate/soil: Well-drained red/loamy soil; 600–1600mm rainfall</li>
            <li>• Uses: Fragrance, timber, medicinal oil</li>
          </ul>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#0C3B2E]"></span>
            <div>
              <div className="font-semibold text-[#0C3B2E]">Maturation</div>
              <div className="text-[#222] opacity-80">Steady biological growth with high-value heartwood formation.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#0C3B2E]"></span>
            <div>
              <div className="font-semibold text-[#0C3B2E]">Soil & Climate</div>
              <div className="text-[#222] opacity-80">Thrives in tropical climate with good drainage and sunlight.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#0C3B2E]"></span>
            <div>
              <div className="font-semibold text-[#0C3B2E]">Use Cases</div>
              <div className="text-[#222] opacity-80">High demand in fragrance industry, sacred wood, and Ayurveda.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#0C3B2E]"></span>
            <div>
              <div className="font-semibold text-[#0C3B2E]">Care Program</div>
              <div className="text-[#222] opacity-80">Expert agronomy, spacing, host plants, and inspections.</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SandalwoodEducation;
