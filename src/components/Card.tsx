import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg';
  compact?: boolean;
  mobileOptimized?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  compact = false,
  mobileOptimized = true
}) => {
  const paddingClasses = {
    xs: 'p-2 sm:p-3',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  };

  const compactClasses = compact ? 'compact-card' : '';
  const mobileClasses = mobileOptimized ? 'card-mobile-compact md:p-6' : '';

  const cardClasses = `card ${paddingClasses[padding]} ${compactClasses} ${mobileClasses} ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''} ${className}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
