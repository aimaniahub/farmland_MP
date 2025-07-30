import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 100, infinite = false, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (infinite) {
      // Reset for infinite loop
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, 1000); // Delay before restarting
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, infinite, text]);

  return <span className={className}>{currentText}</span>;
};

export default TypewriterEffect;
