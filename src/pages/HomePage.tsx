import React from 'react';
import { Farm } from '../App';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Shield, Leaf, TrendingUp, Award, Users, CheckCircle, Phone, ArrowRight, MapPin, Calendar } from 'lucide-react';
import BlogFeatured from '../components/BlogFeatured';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onEnquiry: (farm?: Farm) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnquiry }) => {
  const featuredFarms: Farm[] = [
    {
      id: '1',
      name: 'Maamara Farms',
      location: 'Doddaballapur, Bangalore',
      proximity: '45 km from Bangalore',
      startingPrice: 1250000,
      plotSizes: ['1 Acre', '2 Acres', '5 Acres'],
      availableUnits: 63,
      totalUnits: 100,
      status: 'ongoing',
      description: 'Premium managed farmland with organic farming practices',
      images: [
        'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg',
        'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg',
        'https://images.pexels.com/photos/266946/pexels-photo-266946.jpeg'
      ],
      features: ['Organic Certification', 'Drip Irrigation', '24/7 Security'],
      amenities: ['Clubhouse', 'Guest House', 'Farm Store'],
      cropTypes: ['Mango', 'Coconut', 'Vegetables'],
      area: '100 Acres',
      paymentPlans: ['Full Payment', '12 Month EMI', '24 Month EMI']
    },
    {
      id: '2',
      name: 'Eco Habitat Farms',
      location: 'Kanakapura, Bangalore',
      proximity: '60 km from Bangalore',
      startingPrice: 950000,
      plotSizes: ['1 Acre', '3 Acres'],
      availableUnits: 28,
      totalUnits: 80,
      status: 'ongoing',
      description: 'Sustainable farmland with permaculture design',
      images: [
        'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
        'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg',
        'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg'
      ],
      features: ['Permaculture Design', 'Natural Water Bodies', 'Biodiversity'],
      amenities: ['Eco Lodge', 'Organic Store', 'Workshop Area'],
      cropTypes: ['Mixed Fruits', 'Spices', 'Medicinal Plants'],
      area: '80 Acres',
      paymentPlans: ['Full Payment', '18 Month EMI']
    },
    {
      id: '3',
      name: 'Green Valley Estates',
      location: 'Chikkaballapur, Karnataka',
      proximity: '70 km from Bangalore',
      startingPrice: 800000,
      plotSizes: ['2 Acres', '4 Acres'],
      availableUnits: 15,
      totalUnits: 50,
      status: 'upcoming',
      description: 'Upcoming premium farmland project with modern amenities',
      images: [
        'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
        'https://images.pexels.com/photos/1884303/pexels-photo-1884303.jpeg',
        'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg'
      ],
      features: ['Modern Infrastructure', 'Smart Irrigation', 'Solar Power'],
      amenities: ['Resort Style Clubhouse', 'Swimming Pool', 'Spa'],
      cropTypes: ['Grapes', 'Pomegranate', 'Citrus'],
      area: '120 Acres',
      paymentPlans: ['Pre-launch Offer', '36 Month EMI']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore, Investor',
      text: 'Excellent returns and hassle-free management. The team is professional and transparent.',
      image: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg'
    },
    {
      name: 'Priya Sharma',
      location: 'Mysore, Investor',
      text: 'Beautiful location and sustainable practices. Very happy with my investment decision.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
    },
    {
      name: 'Amit Patel',
      location: 'Chennai, Investor',
      text: 'Great potential for future growth. The development plans are impressive.',
      image: 'https://images.pexels.com/photos/762029/pexels-photo-762029.jpeg'
    }
  ];

  const mediaLogos = [
    'The Hindu', 'Economic Times', 'Business Standard', 'Deccan Herald', 'Times of India'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Invest in Your Future
              <span className="block text-primary-400">Own a Piece of Nature</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover the benefits of managed farmlands, where sustainable agriculture meets profitable investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/farms"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Farms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => onEnquiry()}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center items-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-1 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction to Managed Farmlands */}
      <section className="py-24 bg-gradient-to-b from-white to-cream-50 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-farm-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="text-primary-700 text-sm font-semibold">WHAT ARE MANAGED FARMLANDS?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-8 leading-tight">
              What are Managed Farmlands?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Managed farmlands offer you the opportunity to own agricultural land without the hassle of farming. 
              We handle everything from <span className="text-primary-600 font-semibold">cultivation to harvest</span> while you enjoy the returns and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 group hover:transform hover:-translate-y-2 transition-all duration-300 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-primary-200/50 transition-all duration-300">
                <Shield className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Hassle-Free Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                Own farmland without worrying about daily operations. We manage everything for you.
              </p>
            </div>
            
            <div className="text-center p-8 group hover:transform hover:-translate-y-2 transition-all duration-300 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-sage-100 to-sage-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-sage-200/50 transition-all duration-300">
                <Leaf className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Sustainable Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                Organic farming methods that protect the environment and ensure healthy produce.
              </p>
            </div>
            
            <div className="text-center p-8 group hover:transform hover:-translate-y-2 transition-all duration-300 bg-white/50 backdrop-blur-lg rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl group-hover:shadow-secondary-200/50 transition-all duration-300">
                <TrendingUp className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">Investment Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy steady returns from agricultural produce and land appreciation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-farm-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="text-primary-700 text-sm font-semibold">OUR PREMIUM PROJECTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-8">Featured Farms</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium managed farmland projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative h-64 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      farm.status === 'ongoing' ? 'bg-green-500 text-white' :
                      farm.status === 'upcoming' ? 'bg-blue-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {farm.status === 'ongoing' ? 'Available Now' :
                       farm.status === 'upcoming' ? 'Coming Soon' : 'Sold Out'}
                    </span>
                  </div>
                  {farm.availableUnits > 0 && farm.availableUnits < 20 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                        Limited Units!
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">{farm.name}</h3>
                  <p className="text-gray-600 flex items-center mb-4">
                    <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                    {farm.proximity}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{farm.description}</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-3xl font-bold text-primary-600">
                        ₹{(farm.startingPrice / 100000).toFixed(1)}L
                      </p>
                      <p className="text-sm text-gray-500 font-medium">Starting from</p>
                    </div>
                    {farm.status !== 'sold-out' && (
                      <div className="text-right">
                        <p className="text-sm text-secondary-600 font-semibold">
                          {farm.availableUnits} units left
                        </p>
                        <p className="text-xs text-gray-500">
                          of {farm.totalUnits} total
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {farm.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 text-center font-semibold group-hover:bg-primary-50 group-hover:text-primary-700"
                    >
                      View Details
                    </Link>
                    {farm.status !== 'sold-out' && (
                      <button
                        onClick={() => onEnquiry(farm)}
                        className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        Enquire Now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/farms"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              View All Farms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Farmland?</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in agricultural investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in managed farmland development</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">500+ Happy Investors</h3>
              <p className="text-gray-600">Growing community of satisfied farmland owners</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Legal Compliance</h3>
              <p className="text-gray-600">All properties with clear titles and documentation</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '1.0s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">15-20% Annual Returns</h3>
              <p className="text-gray-600">Consistent returns from agricultural produce</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-in-slide-up">As Seen In</h2>
            <p className="text-gray-600 animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>Trusted by leading media outlets</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 animate-fade-in-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <BlogFeatured 
          posts={[
            {
              id: '1',
              title: 'Sustainable Farming Practices for Modern Investors',
              excerpt: 'Learn how organic farming methods can maximize your returns while protecting the environment.',
              image: 'https://images.pexels.com/photos/3757118/pexels-photo-3757118.jpeg',
              date: 'May 15, 2024',
              author: 'Agricultural Expert',
              category: 'sustainability',
              tags: ['organic farming', 'sustainable practices', 'environment'],
              readTime: '5 min read'
            },
            {
              id: '2',
              title: 'Why Farmland is a Smart Investment in 2024',
              excerpt: 'Discover the growing trend of agricultural investment and its benefits for portfolio diversification.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
              date: 'April 28, 2024',
              author: 'Financial Analyst',
              category: 'investment',
              tags: ['investment', 'portfolio diversification', 'returns'],
              readTime: '7 min read'
            },
            {
              id: '3',
              title: 'Success Story: How Our Investors Tripled Their Returns',
              excerpt: 'Real examples of how managed farmlands have provided exceptional returns to our investors.',
              image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg',
              date: 'April 10, 2024',
              author: 'Investment Manager',
              category: 'success-stories',
              tags: ['success stories', 'returns', 'investment'],
              readTime: '6 min read'
            }
          ]}
          title="From Our Blog"
          subtitle="Latest insights, tips, and success stories from our farming community"
        />
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-slide-up">
            Ready to Start Your Farming Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200 animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
            Join hundreds of investors who have already secured their agricultural future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold text-lg"
            >
              Explore All Farms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
