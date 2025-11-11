import React from 'react';

const specs = [
  { title: 'Sapling Source', desc: 'Certified nurseries with traceable lineage.' },
  { title: 'Spacing Guideline', desc: 'Scientific spacing with host plants for optimal growth.' },
  { title: 'Maintenance Cycle', desc: 'Regular weeding, pruning, and soil health checks.' },
  { title: 'Inspection Frequency', desc: 'Monthly checks with quarterly audits.' },
  { title: 'Documentation Kit', desc: 'Geo-tags, photos, and care logs for transparency.' },
  { title: 'Compliance Note', desc: 'Adheres to regional forestry norms and guidelines.' },
];

const faqs = [
  { q: 'Is sandalwood cultivation legal?', a: 'Yes, within respective state guidelines. We follow all compliance requirements.' },
  { q: 'When can harvesting happen?', a: 'Typically in 12–15 years, depending on heartwood development and regulations.' },
  { q: 'How is transparency maintained?', a: 'Geo-tagging, periodic updates, and documented inspections ensure accountability.' },
];

const SandalwoodSpecs: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-serif text-[#0C3B2E] mb-6">Specs & Compliance</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((s) => (
            <li key={s.title} className="flex items-start gap-3 p-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#0C3B2E]"></span>
              <div>
                <div className="font-semibold text-[#0C3B2E]">{s.title}</div>
                <div className="text-[#222] opacity-80">{s.desc}</div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-[#EAE6DF] bg-white divide-y">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                <span className="font-semibold text-[#0C3B2E]">{f.q}</span>
                <span className="ml-4 text-[#0C3B2E]">+</span>
              </summary>
              <div className="p-5 text-[#222] opacity-80">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SandalwoodSpecs;
