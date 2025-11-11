import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';

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
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="font-semibold text-[#0C3B2E]">Maturation</CardHeader>
            <CardContent>Steady biological growth with high-value heartwood formation.</CardContent>
          </Card>
          <Card>
            <CardHeader className="font-semibold text-[#0C3B2E]">Soil & Climate</CardHeader>
            <CardContent>Thrives in tropical climate with good drainage and sunlight.</CardContent>
          </Card>
          <Card>
            <CardHeader className="font-semibold text-[#0C3B2E]">Use Cases</CardHeader>
            <CardContent>High demand in fragrance industry, sacred wood, and Ayurveda.</CardContent>
          </Card>
          <Card>
            <CardHeader className="font-semibold text-[#0C3B2E]">Care Program</CardHeader>
            <CardContent>Expert agronomy, spacing, host plants, and inspections.</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SandalwoodEducation;
