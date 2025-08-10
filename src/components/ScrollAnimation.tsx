import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-6';
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClass} transition-all duration-700 ease-out`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
