import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className = '', ...props }) => {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap leading-none font-sans';
  const variants = {
    default: 'bg-[#0C3B2E] text-white',
    outline: 'border border-[#EAE6DF] text-[#0C3B2E] bg-white',
    accent: 'bg-[#D8C3A5] text-[#0C3B2E]'
  } as const;

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
