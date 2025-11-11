import React, { useMemo, useState } from 'react';
import Badge from '../ui/Badge';

const base = [
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

function scaleData(indexed: boolean) {
  if (!indexed) return base;
  const start = base[0].pricePerKg;
  return base.map(d => ({ ...d, pricePerKg: (d.pricePerKg / start) * 100 }));
}

function calcCAGR(start: number, end: number, years: number) {
  return Math.pow(end / start, 1 / years) - 1;
}

const SandalwoodPriceChart: React.FC = () => {
  const [indexed, setIndexed] = useState(false);
  const data = useMemo(() => scaleData(indexed), [indexed]);
  const CAGR = calcCAGR(base[0].pricePerKg, base[base.length - 1].pricePerKg, 15);
  const nominalVals = base.map(d => d.pricePerKg);
  const avgNominal = useMemo(() => nominalVals.reduce((a,b)=>a+b,0) / nominalVals.length, [nominalVals]);
  const latestNominal = base[base.length - 1].pricePerKg;
  const avgValue = useMemo(() => {
    if (indexed) {
      const start = base[0].pricePerKg;
      return (avgNominal / start) * 100;
    }
    return avgNominal;
  }, [indexed, avgNominal]);

  const w = 800;
  const h = 260;
  const pad = 32;
  const xs = data.map((_, i) => pad + (i * (w - pad * 2)) / (data.length - 1));
  const ys = (() => {
    const vals = data.map(d => d.pricePerKg);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    return data.map(d => h - pad - ((d.pricePerKg - min) / (max - min)) * (h - pad * 2));
  })();
  const vals = data.map(d => d.pricePerKg);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const yFor = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);

  const gridY = 4;
  const yLines = Array.from({ length: gridY + 1 }, (_, i) => pad + (i * (h - pad * 2)) / gridY);
  const yTicks = [max, (max + min) / 2, min];
  const formatVal = (v: number) => indexed ? `${v.toFixed(0)}` : `₹${Math.round(v).toLocaleString()}`;

  return (
    <section id="price-history" className="py-12 bg-[#FAFAF7] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-3xl font-serif text-[#0C3B2E]">Price History</h2>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">CAGR (2010–2025): {(CAGR*100).toFixed(1)}%</Badge>
            {!indexed && (
              <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">Latest (2025): ₹{latestNominal.toLocaleString()}/kg</Badge>
            )}
            <Badge className="bg-white text-[#0C3B2E] border border-[#EAE6DF]">Avg: {formatVal(avgValue)}{indexed ? '' : '/kg'}</Badge>
            <button onClick={() => setIndexed(false)} className={`px-3 py-1 rounded-full text-sm border ${!indexed ? 'bg-[#0C3B2E] text-white border-[#0C3B2E]' : 'bg-white text-[#0C3B2E] border-[#EAE6DF]'}`}>Nominal</button>
            <button onClick={() => setIndexed(true)} className={`px-3 py-1 rounded-full text-sm border ${indexed ? 'bg-[#0C3B2E] text-white border-[#0C3B2E]' : 'bg-white text-[#0C3B2E] border-[#EAE6DF]'}`}>Indexed</button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-[#EAE6DF] p-4">
          <svg width={w} height={h} className="min-w-[720px]">
            {yLines.map((y, i) => (
              <line key={i} x1={pad} y1={y} x2={w - pad} y2={y} stroke="#EAE6DF" strokeDasharray="4 4" />
            ))}
            {/* Average reference line */}
            <line x1={pad} y1={yFor(avgValue)} x2={w - pad} y2={yFor(avgValue)} stroke="#D8C3A5" strokeDasharray="6 4" />
            <text x={w - pad} y={yFor(avgValue) - 6} fontSize={10} textAnchor="end" fill="#7a7a7a">Avg {formatVal(avgValue)}{indexed ? '' : '/kg'}</text>
            {/* Y-axis labels */}
            <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke="#EAE6DF" />
            {yTicks.map((tv, i) => (
              <g key={i}>
                <line x1={pad - 4} y1={yFor(tv)} x2={pad} y2={yFor(tv)} stroke="#A0A0A0" />
                <text x={pad - 8} y={yFor(tv) + 4} fontSize={10} textAnchor="end" fill="#222">{formatVal(tv)}</text>
              </g>
            ))}
            <polyline fill="none" stroke="#0C3B2E" strokeWidth="3" points={xs.map((x,i)=>`${x},${ys[i]}`).join(' ')} />
            <path d={`M ${xs[0]} ${ys[0]} ${xs.map((x,i)=>`L ${x} ${ys[i]}`).join(' ')} L ${w-pad} ${h-pad} L ${pad} ${h-pad} Z`} fill="#0C3B2E10" />
            {data.map((d, i) => (
              <g key={d.year}>
                <circle cx={xs[i]} cy={ys[i]} r={4} fill="#0C3B2E" />
                <title>{`${d.year}: ${indexed ? d.pricePerKg.toFixed(0)+' (index)' : '₹'+d.pricePerKg.toLocaleString()}`}</title>
              </g>
            ))}
            <line x1={pad} y1={h-pad} x2={w-pad} y2={h-pad} stroke="#EAE6DF" />
            {data.map((d,i)=> (
              <text key={i} x={xs[i]} y={h-pad+16} fontSize={10} textAnchor="middle" fill="#222">{d.year}</text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SandalwoodPriceChart;
