import React, { useState, useEffect } from 'react';
import { TrendingUp, Calculator, DollarSign, Calendar } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const ROISection: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const targetValue = 225000;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setAnimatedValue(targetValue);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const roiData = [
    {
      metric: 'Asset',
      current: '1 Sandalwood Sapling',
      projected: '1 Mature Tree',
    },
    {
      metric: 'Avg. Heartwood Yield',
      current: '-',
      projected: '~15 kg',
    },
    {
      metric: 'Market Value (Per kg)',
      current: '-',
      projected: '₹12,000 - ₹15,000',
    },
    {
      metric: 'Estimated Gross Value',
      current: 'Initial Investment Cost',
      projected: `₹1,80,000 to ₹${animatedValue.toLocaleString()}`,
    },
    {
      metric: 'Calculation',
      current: '-',
      projected: '(15 kg/plant) × (₹12,000/kg)',
    },
  ];

  const chartData = [
    { year: 1, value: 4000 },
    { year: 3, value: 6000 },
    { year: 5, value: 8000 },
    { year: 7, value: 9500 },
    { year: 10, value: 11000 },
    { year: 12, value: 12500 },
    { year: 15, value: 15000 },
  ];

  return (
    <section id="roi-section" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-4">
              Sandalwood: The Golden Harvest of Your Future
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Understand the powerful, long-term growth potential of your investment. 
              The table below provides a conservative estimate based on current market trends.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        {/* ROI Table */}
        <ScrollAnimation delay={200}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h3 className="text-2xl font-bold text-white text-center">
                  Sandalwood Investment Projection (Per Plant)
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-green-900">Metric</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-green-900">Current Status / Initial Phase</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-green-900">Projected Value (After 15 Years)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {roiData.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.metric}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.current}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-700">{row.projected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-yellow-50 px-6 py-4 border-t">
                <p className="text-sm text-gray-600 italic">
                  *Note: All figures are estimations based on current market analysis and agricultural projections. 
                  Market values are subject to change. Yields are approximate.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Growth Chart */}
        <ScrollAnimation delay={400}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-green-900 mb-8">
                Projected Growth of Sandalwood Market Value
              </h3>
              
              <div className="relative h-80">
                {/* Chart Background */}
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {chartData.map((point, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      {/* Bar */}
                      <div 
                        className="w-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 ease-out"
                        style={{ 
                          height: `${(point.value / 15000) * 250}px`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                      {/* Year Label */}
                      <div className="mt-2 text-sm font-medium text-gray-600">
                        Year {point.year}
                      </div>
                      {/* Value Label */}
                      <div className="text-xs text-green-700 font-semibold">
                        ₹{point.value.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Projected market value per kg showing steady appreciation over 15 years
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Gallery Section */}
        <ScrollAnimation delay={500}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Gallery</h3>
              <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Farmland view 1' },
                { src: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Farmland view 2' },
                { src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Farmland view 3' },
                { src: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Farmland view 4' },
              ].map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-32 sm:h-40 md:h-44 lg:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollAnimation delay={600}>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">High Returns</h4>
              <p className="text-sm text-gray-600">15x+ potential returns over 15 years</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={700}>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Transparent Projections</h4>
              <p className="text-sm text-gray-600">Clear, research-based estimates</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Tax Benefits</h4>
              <p className="text-sm text-gray-600">Favorable agricultural tax treatment</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={900}>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Long-term Asset</h4>
              <p className="text-sm text-gray-600">Generational wealth building</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
