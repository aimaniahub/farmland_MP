import React from 'react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepByStepProcessProps {
  steps: Step[];
}

const StepByStepProcess: React.FC<StepByStepProcessProps> = ({ steps }) => {
  return (
    <section className="py-24 bg-white-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-dark-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-subtle-text max-w-3xl mx-auto">
            A simple, transparent process to guide you from exploration to ownership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center animate-fade-in-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary bg-opacity-10 text-primary mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-dark-text mb-3">{step.title}</h3>
              <p className="text-subtle-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStepProcess;