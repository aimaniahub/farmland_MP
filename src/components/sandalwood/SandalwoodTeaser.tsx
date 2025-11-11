import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';

const priceHistory = [
  { year: 2010, pricePerKg: 4800 },
  { year: 2012, pricePerKg: 5200 },
  { year: 2014, pricePerKg: 6000 },
  { year: 2016, pricePerKg: 7200 },
  { year: 2018, pricePerKg: 8800 },
  { year: 2020, pricePerKg: 11000 },
  { year: 2022, pricePerKg: 13500 },
  { year: 2023, pricePerKg: 15000 },
  { year: 2024, pricePerKg: 16200 },
  { year: 2025, pricePerKg: 17500 },
];

function calcCAGR(start: number, end: number, years: number) {
  return Math.pow(end / start, 1 / years) - 1;
}

const CAGR = calcCAGR(priceHistory[0].pricePerKg, priceHistory[priceHistory.length - 1].pricePerKg, 15);

const Sparkline: React.FC = () => {
  const w = 160;
  const h = 48;
  const pad = 6;
  const xs = priceHistory.map((_, i) => pad + (i * (w - pad * 2)) / (priceHistory.length - 1));
  const ys = (() => {
    const min = Math.min(...priceHistory.map(d => d.pricePerKg));
    const max = Math.max(...priceHistory.map(d => d.pricePerKg));
    return priceHistory.map(d => h - pad - ((d.pricePerKg - min) / (max - min)) * (h - pad * 2));
  })();
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${ys[i].toFixed(1)}`).join(' ');
  return (
    <svg width={w} height={h} aria-label="Sandalwood price trend sparkline">
      <polyline fill="none" stroke="#0C3B2E" strokeWidth="2" points={xs.map((x,i)=>`${x},${ys[i]}`).join(' ')} />
      <path d={`${d} L ${w-pad} ${h-pad} L ${pad} ${h-pad} Z`} fill="#0C3B2E10" />
    </svg>
  );
};

const SandalwoodTeaser: React.FC = () => {
  return (
    <section className="relative py-12 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-3"><Badge variant="accent">Introducing</Badge></div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0C3B2E] leading-tight">Sandalwood Marketplace</h2>
          <p className="mt-3 text-[#222] max-w-prose">Own premium sandalwood participation with certified saplings, scientific care, and transparent monitoring.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">Certified nurseries</Badge>
            <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">Geo-tag monitoring</Badge>
            <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">Expert agronomy</Badge>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="rounded-2xl border border-[#EAE6DF] bg-white p-3">
              <Sparkline />
            </div>
            <div className="text-sm">
              <div className="text-[#0C3B2E] font-semibold">CAGR (2010–2025)</div>
              <div className="inline-flex mt-1 items-center rounded-full bg-[#0C3B2E] text-white px-2.5 py-1 text-xs">{(CAGR*100).toFixed(1)}%</div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link to="/sandalwood" className="inline-flex items-center rounded-2xl bg-[#0C3B2E] text-white px-5 py-3 font-semibold transition-transform hover:scale-[1.02]">Explore Sandalwood</Link>
            <Link to="/sandalwood#price-history" className="inline-flex items-center rounded-2xl border border-[#EAE6DF] text-[#0C3B2E] px-5 py-3 font-semibold bg-white hover:bg-[#FAFAF7]">View Price History</Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl shadow-md overflow-hidden border border-[#EAE6DF] bg-white">
            <img src="/homepage.jpg" alt="Sandalwood" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -z-10 inset-0 translate-x-6 translate-y-6 rounded-2xl bg-[#D8C3A5] opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default SandalwoodTeaser;
