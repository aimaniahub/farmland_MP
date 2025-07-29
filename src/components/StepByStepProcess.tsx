import React from 'react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepByStepProcessProps {
  steps: Step[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const StepByStepProcess: React.FC<StepByStepProcessProps> = ({
  steps,
  className = '',
  title,
  subtitle,
}) => {
  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Mobile View - Vertical Layout */}
              <div className="flex flex-col items-center md:hidden mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {/* Desktop View - Horizontal Layout with Alternating Sides */}
              <div className="hidden md:block md:w-1/2 md:px-12 md:py-8">
                <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex md:w-0 md:flex-grow items-center justify-center relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 border-4 border-white shadow-md">
                  {step.icon}
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                  <div className={`h-1 bg-primary-200 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`} />
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepByStepProcess;