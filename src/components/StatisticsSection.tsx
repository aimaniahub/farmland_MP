import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';
import { Users, Leaf, Award, TrendingUp } from 'lucide-react';

interface Statistic {
  id: number;
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface StatisticsSectionProps {
  className?: string;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [animatedStats, setAnimatedStats] = useState<boolean[]>([]);

  const statistics: Statistic[] = [
    {
      id: 1,
      number: "1500+",
      label: "Co-Farmers",
      icon: Users
    },
    {
      id: 2,
      number: "5000+",
      label: "Acres Managed",
      icon: Leaf
    },
    {
      id: 3,
      number: "98%",
      label: "Customer Satisfaction",
      icon: Award
    },
    {
      id: 4,
      number: "25%",
      label: "Annual ROI",
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    if (inView) {
      // Animate stats one by one
      const delays = [0, 200, 400, 600];
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = true;
            return newStats;
          });
        }, delay);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className={`py-8 sm:py-12 md:py-16 bg-light-green bg-organic-light section-mobile-compact ${className}`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 compact-text">Pioneering Managed Farmlands</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto content-dense">
            Join thousands of satisfied co-farmers who trust us with their agricultural investments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            const isAnimated = animatedStats[index] || false;

            return (
              <div
                key={stat.id}
                className={`text-center p-3 sm:p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-700 compact-card ${
                  isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-primary-green/10 flex items-center justify-center transition-all duration-500 ${
                    isAnimated ? 'scale-110' : 'scale-90'
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-green" />
                  </div>
                </div>

                <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 transition-all duration-1000 compact-text ${
                  isAnimated ? 'opacity-100' : 'opacity-0'
                }`}>
                  {stat.number}
                </h3>

                <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base content-dense">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
