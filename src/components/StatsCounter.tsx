import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number; // Animation duration in milliseconds
}

interface StatsCounterProps {
  stats: StatItemProps[];
  className?: string;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(value); // Ensure we end at the exact value
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, value, duration]);

  return (
    <div ref={counterRef} className="flex flex-col items-center text-center p-4">
      <div className="text-primary-600 mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsCounter: React.FC<StatsCounterProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCounter;