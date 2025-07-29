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

  const faqCategories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General Information' },
    { id: 'investment', name: 'Investment & Pricing' },
    { id: 'ownership', name: 'Ownership & Legal' },
    { id: 'management', name: 'Farm Management' },
    { id: 'returns', name: 'Returns & Profits' }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What is managed farmland investment?',
      answer: 'Managed farmland investment is a form of real estate investment where you purchase agricultural land that is professionally managed by our team. You own the land, while we handle all aspects of farm operations, crop selection, maintenance, and sales. This allows you to earn returns from both land appreciation and crop production without the need for farming expertise or active involvement.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How much do I need to invest to get started?',
      answer: 'Our farmland investment opportunities start from ₹10 lakhs for a small plot. We offer various plot sizes and payment plans to accommodate different investment budgets. Premium farms in prime locations may have higher starting prices. We recommend scheduling a consultation with our investment advisors to find the best option for your budget and goals.',
      category: 'investment'
    },
    {
      id: 3,
      question: 'Do I actually own the land?',
      answer: 'Yes, you receive full ownership of the land with a registered sale deed in your name. The land is your asset, and we provide management services through a separate agreement. Your ownership is legally documented and transferable to heirs or can be sold to other buyers in the future.',
      category: 'ownership'
    },
    {
      id: 4,
      question: 'What crops are grown on the farms?',
      answer: 'We primarily focus on high-value perennial crops such as mango, coconut, teak, and other fruit-bearing trees that provide sustainable long-term returns. The specific crop selection depends on the farm location, soil conditions, and market demand. Our agricultural experts determine the optimal crop mix for each farm to maximize returns while ensuring sustainable farming practices.',
      category: 'management'
    },
    {
      id: 5,
      question: 'What kind of returns can I expect?',
      answer: 'Investors typically see returns from two sources: land appreciation (5-8% annually) and crop production (8-12% annually once trees reach maturity). Combined returns generally range from 13-20% annually over a 10-year period. However, agricultural returns can vary based on market conditions, crop performance, and weather patterns. We provide detailed projections for each specific farm project.',
      category: 'returns'
    },
    {
      id: 6,
      question: 'How long is the investment period?',
      answer: 'Farmland investment is typically a medium to long-term investment. While you can sell your land at any time, we recommend a minimum holding period of 5-7 years to realize the full benefits of both land appreciation and crop production. Perennial crops like fruit trees take 3-5 years to reach full production capacity, after which returns tend to increase significantly.',
      category: 'investment'
    },
    {
      id: 7,
      question: 'What are the risks involved?',
      answer: 'Like any investment, farmland carries certain risks including weather events, crop diseases, market price fluctuations, and regulatory changes. We mitigate these risks through crop diversification, insurance coverage, professional management, and sustainable farming practices. Additionally, land as an asset has historically shown resilience during economic downturns compared to more volatile investments.',
      category: 'investment'
    },
    {
      id: 8,
      question: 'Who manages the day-to-day farm operations?',
      answer: 'Our professional farm management team handles all aspects of farm operations. This includes land preparation, planting, irrigation, fertilization, pest control, harvesting, and marketing of produce. The team consists of agricultural experts, horticulturists, and farm technicians with extensive experience in managing commercial farms. We provide regular updates and reports on farm activities to all investors.',
      category: 'management'
    },
    {
      id: 9,
      question: 'Can I visit my farm?',
      answer: 'Absolutely! We encourage investors to visit their farms. We organize regular farm visits and events where you can see your investment firsthand. Additionally, you can schedule private visits by contacting our customer service team. Many investors find these visits enjoyable and educational, especially for families with children who want to connect with nature and understand farming.',
      category: 'general'
    },
    {
      id: 10,
      question: 'What happens if I want to sell my land?',
      answer: 'You have complete freedom to sell your land at any time. We offer three options: 1) We can help market your land to our network of investors, 2) You can find a buyer independently, or 3) In some cases, we may offer a buyback option based on current market valuation. The sale process follows standard real estate procedures with transfer of title deed to the new owner.',
      category: 'ownership'
    },
    {
      id: 11,
      question: 'Are there any ongoing fees or maintenance costs?',
      answer: 'Yes, there is a farm management fee that covers all operational expenses including labor, inputs, irrigation, maintenance, and marketing of produce. This fee is typically structured as a percentage of gross revenue (around 20-30%) or as a fixed annual fee per acre. The specific fee structure is clearly outlined in the farm management agreement before investment.',
      category: 'management'
    },
    {
      id: 12,
      question: 'How are profits from crop sales distributed?',
      answer: 'After deducting the management fee and operational expenses, the profits from crop sales are distributed to landowners proportional to their land ownership. Distributions typically occur on a quarterly or semi-annual basis, depending on harvest cycles. Detailed financial statements are provided with each distribution, showing revenue, expenses, and net returns.',
      category: 'returns'
    },
    {
      id: 13,
      question: 'What documents will I receive as proof of ownership?',
      answer: 'You will receive a registered sale deed, land survey documents, land records extract (7/12 extract or equivalent), mutation entry in revenue records, and a comprehensive ownership certificate. All these documents legally establish your ownership of the specific land parcel. We assist with all documentation and registration processes to ensure proper legal transfer.',
      category: 'ownership'
    },
    {
      id: 14,
      question: 'Is farmland investment tax-efficient?',
      answer: 'Farmland investment offers several tax advantages in India. Agricultural income is generally exempt from income tax. Additionally, long-term capital gains from land appreciation benefit from indexation, reducing the effective tax rate. However, tax laws can change, and individual tax situations vary, so we recommend consulting with a tax advisor for personalized guidance.',
      category: 'investment'
    },
    {
      id: 15,
      question: 'What payment plans are available?',
      answer: 'We offer flexible payment options including lump-sum payment, 3-month installment plans, and extended payment plans up to 24 months for larger investments. Some premium projects may offer construction-linked payment plans. Each payment plan is structured to provide convenience while ensuring timely development of the farm project.',
      category: 'investment'
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-green-100">
              Find answers to common questions about farmland investment and management
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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