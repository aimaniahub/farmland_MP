import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  description?: string;
}

interface ComparisonOption {
  name: string;
  features: Record<string, boolean | string>;
  price?: string;
  recommended?: boolean;
  ctaLabel?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  features: ComparisonFeature[];
  options: ComparisonOption[];
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  subtitle,
  features,
  options,
  className = '',
}) => {
  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 border-b border-gray-200"></th>
              {options.map((option, index) => (
                <th 
                  key={index} 
                  className={`p-4 text-center border-b border-gray-200 min-w-[200px] ${option.recommended ? 'bg-primary-50' : 'bg-gray-50'}`}
                >
                  {option.recommended && (
                    <div className="text-xs font-medium text-primary-600 uppercase tracking-wide mb-2">
                      Recommended
                    </div>
                  )}
                  <div className="text-xl font-bold">{option.name}</div>
                  {option.price && (
                    <div className="mt-2 text-lg">
                      {option.price}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr 
                key={featureIndex}
                className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="font-medium">{feature.name}</span>
                    {feature.description && (
                      <div className="relative group ml-2">
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-64 bg-white p-2 rounded shadow-lg text-xs text-gray-600 invisible group-hover:visible z-10">
                          {feature.description}
                        </div>
                      </div>
                    )}
                  </div>
                </td>
                {options.map((option, optionIndex) => {
                  const value = option.features[feature.name];
                  return (
                    <td 
                      key={optionIndex} 
                      className={`p-4 text-center border-b border-gray-200 ${option.recommended ? 'bg-primary-50' : ''}`}
                    >
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr>
              <td className="p-4"></td>
              {options.map((option, index) => (
                <td key={index} className="p-4 text-center">
                  <button
                    onClick={option.onCtaClick}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${option.recommended ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    {option.ctaLabel || 'Select'}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;