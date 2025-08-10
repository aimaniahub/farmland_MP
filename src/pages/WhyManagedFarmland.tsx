import React from 'react';
import { Sprout, Cpu, Droplets, Bone as Drone, BarChart3, TrendingUp, Shield, Calendar, Star, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';

const WhyManagedFarmland: React.FC = () => {
  const technologies = [
    {
      icon: Droplets,
      title: 'Drip Irrigation Systems',
      description: 'Delivering water directly to the roots, saving up to 70% water.',
    },
    {
      icon: Cpu,
      title: 'IoT Soil Sensors',
      description: 'Providing real-time data on moisture and nutrient levels for precise care.',
    },
    {
      icon: Drone,
      title: 'Drone Monitoring',
      description: 'Offering an aerial view for crop health assessment and security surveillance.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Using data to predict yields, prevent diseases, and maximize your ROI.',
    },
  ];

  const crops = [
    {
      name: 'Sandalwood (Santalum album)',
      tag: 'Long-Term Legacy Investment',
      description: "Known as 'Liquid Gold,' Indian Sandalwood is a globally prized commodity with ever-increasing demand and limited supply. It's the ultimate long-term asset, promising exceptional, generational wealth upon its 12-15 year harvest cycle.",
      icon: Star,
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'Butter Fruit (Avocado)',
      tag: 'Short-Term Cash Flow',
      description: 'A popular superfood with high and consistent market demand. Butter fruit cultivation provides quicker revenue streams within 3-4 years, ensuring a balanced portfolio with regular cash flow while your legacy Sandalwood crop matures.',
      icon: Zap,
      gradient: 'from-green-400 to-green-600',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              The Smart Way to Invest in Agriculture
            </h1>
          </ScrollAnimation>
        </div>
      </section>

      {/* What is Managed Farmland */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <Sprout className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-4xl font-serif font-bold text-green-900 mb-8">
                  What is Managed Farmland?
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Managed farmland is a revolutionary investment model that offers you direct ownership of agricultural 
                  land without the complexities of farming it yourself. EarthFoundation acts as your expert steward. 
                  We handle everything from land acquisition and crop selection to cultivation, security, and harvesting. 
                  You own the asset and reap the financial rewards, making it a hassle-free, tangible investment.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-green-900 mb-4">
                Tech-Driven Precision Farming
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We don't just farm; we optimize. Our farmlands are smart ecosystems powered by:
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-500">
                      <tech.icon className="h-8 w-8 text-green-700 group-hover:text-yellow-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-3 text-center group-hover:text-yellow-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {tech.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Advantage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <TrendingUp className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
                <h2 className="text-4xl font-serif font-bold text-green-900 mb-8">
                  A Secure Asset with Passive, Tax-Efficient Income
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Investing in agricultural land with crops like Sandalwood offers a dual advantage. First, you benefit 
                  from the appreciating value of the land itself—a solid hedge against inflation. Second, the final harvest 
                  yields significant, long-term returns. Income from agricultural activities in India enjoys favorable tax treatment, 
                  making it a highly efficient way to build wealth. (We advise consulting with a financial advisor for personalized tax guidance).
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-lg">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-900 mb-2">Land Appreciation</h3>
                  <p className="text-sm text-gray-600">Solid hedge against inflation with tangible asset value</p>
                </div>
                <div className="text-center bg-gradient-to-b from-yellow-50 to-white rounded-2xl p-6 shadow-lg">
                  <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-900 mb-2">Harvest Returns</h3>
                  <p className="text-sm text-gray-600">Significant long-term yields from premium crops</p>
                </div>
                <div className="text-center bg-gradient-to-b from-green-50 to-white rounded-2xl p-6 shadow-lg">
                  <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-900 mb-2">Tax Benefits</h3>
                  <p className="text-sm text-gray-600">Favorable agricultural tax treatment in India</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Crop Strategy */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-green-900 mb-4">
                A Diversified Crop Strategy for Balanced Growth
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {crops.map((crop, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${crop.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <crop.icon className="h-8 w-8" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {crop.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{crop.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {crop.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Ready to Grow Your Wealth Sustainably?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Discover how managed farmland can transform your investment portfolio with tangible returns and positive impact.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
                >
                  Schedule a Site Visit
                </a>
                <a
                  href="/#roi-section"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 inline-block"
                >
                  View ROI Projections
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default WhyManagedFarmland;
