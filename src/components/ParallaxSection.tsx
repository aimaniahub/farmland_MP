import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  speed?: number; // Speed factor (1 = normal, 0.5 = half speed, 2 = double speed)
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  speed = 0.5,
  children,
  className = '',
  minHeight = '400px',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only update when section is in view
      if (top < windowHeight && top + sectionRef.current.offsetHeight > 0) {
        // Calculate parallax offset
        const newOffset = (scrollPosition - (scrollPosition + top - windowHeight)) * speed;
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset}px)`,
          height: `calc(100% + ${Math.abs(speed) * 100}px)`,
          top: speed < 0 ? 0 : `${-Math.abs(speed) * 50}px`,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;