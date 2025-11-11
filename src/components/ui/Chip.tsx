import React from 'react';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Chip: React.FC<ChipProps> = ({ active = false, className = '', children, ...props }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm transition-all ${
        active ? 'bg-[#0C3B2E] text-white border-[#0C3B2E]' : 'bg-white text-[#0C3B2E] border-[#EAE6DF] hover:bg-[#FAFAF7]'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Chip;
