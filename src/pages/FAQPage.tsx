import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail
} from 'lucide-react';
import faq from "../content/faq.json";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const faqCategories = faq.faqCategories;

  const faqs: FAQ[] = faq.faqs;

  const toggleFAQ = (id: number) => {
    setOpenFAQs(prev => 
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{faq.title}</h1>
            <p className="text-xl text-green-100">
              {faq.description}
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search for questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium ${activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    {openFAQs.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-green-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-600" />
                    )}
                  </button>
                  {openFAQs.includes(faq.id) && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <HelpCircle className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No matching questions found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or browse all categories</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  View All FAQs
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-green-100 mb-8">
            Our team is here to help you with any questions about farmland investment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-colors">
              <div className="text-white mb-4">
                <MessageSquare className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Chat With Us</h3>
              <p className="text-green-100 text-sm mb-4">Start a live chat with our support team</p>
              <button className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-colors">
              <div className="text-white mb-4">
                <Phone className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-green-100 text-sm mb-4">Speak directly with our investment advisors</p>
              <button className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                +91 80 1234 5678
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-colors">
              <div className="text-white mb-4">
                <Mail className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-green-100 text-sm mb-4">Send us your questions and we'll respond quickly</p>
              <button className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md p-6 mb-8 mx-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Helpful Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore these resources to learn more about farmland investment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Farmland Investment Guide</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide to understanding farmland as an investment asset class.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">Download PDF →</a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Farm Management Process</h3>
                <p className="text-gray-600 mb-4">Learn about our professional farm management approach and how we maximize returns.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">Read More →</a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Investor Success Stories</h3>
                <p className="text-gray-600 mb-4">Real stories from our investors about their experience and returns from farmland investment.</p>
                <a href="#" className="text-green-600 font-medium hover:text-green-700 transition-colors">View Stories →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
