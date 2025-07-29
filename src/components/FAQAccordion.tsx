import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <button
            className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <span className="ml-4 flex-shrink-0 text-primary-600">
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </span>
          </button>
          <div 
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div className="p-5 border-t border-gray-200 bg-gray-50">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;