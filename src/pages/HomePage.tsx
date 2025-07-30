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
      description: 'Premium managed farmland with organic farming practices.',
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
      description: 'Sustainable farmland with permaculture design principles.',
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
      description: 'Upcoming premium project with modern amenities.',
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
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/farm hero.jpg")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white p-4 sm:max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4 leading-tight">
              Invest in Your Future
              <span className="block text-primary-400">Own a Piece of Nature</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover the benefits of managed farmlands, where sustainable agriculture meets profitable investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/farms"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Farms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => onEnquiry()}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to Managed Farmlands */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="text-primary-700 text-sm font-semibold">WHAT ARE MANAGED FARMLANDS?</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mt-2 mb-6">
                A Smarter Way to Own Agricultural Land
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Managed farmlands offer you the opportunity to own agricultural land without the hassle of farming. 
                We handle everything from <span className="text-primary-600 font-semibold">cultivation to harvest</span> while you enjoy the returns and benefits.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:underline">
                Learn more about our process &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Shield className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Hassle-Free Ownership</h3>
                <p className="text-sm text-gray-600">
                  Own farmland without worrying about daily operations.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Leaf className="h-8 w-8 text-sage-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sustainable Practices</h3>
                <p className="text-sm text-gray-600">
                  Organic farming methods for a healthier planet.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow col-span-1 sm:col-span-2">
                <TrendingUp className="h-8 w-8 text-secondary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Investment Potential</h3>
                <p className="text-sm text-gray-600">
                  Enjoy steady returns from agricultural produce and land appreciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">Featured Farms</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium managed farmland projects near Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      farm.status === 'ongoing' ? 'bg-green-500/80 text-white' : 'bg-blue-500/80 text-white'
                    }`}>
                      {farm.status === 'ongoing' ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">{farm.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {farm.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-5">{farm.description}</p>
                  
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">
                        ₹{(farm.startingPrice / 100000).toFixed(1)}L
                      </p>
                      <p className="text-xs text-gray-500">Starting Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-secondary-600 font-semibold">
                          {farm.availableUnits} units left
                        </p>
                        <p className="text-xs text-gray-500">
                          of {farm.totalUnits} total
                        </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-all text-center font-semibold text-sm"
                    >
                      View Details
                    </Link>
                    <button
                        onClick={() => onEnquiry(farm)}
                        className="flex-1 bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 transition-all font-semibold text-sm"
                      >
                        Enquire Now
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/farms"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Farms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">Why Partner With Us?</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Your trusted partner in agricultural investment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">10+ Years</h3>
              <p className="text-sm text-gray-600">of Experience</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">500+</h3>
              <p className="text-sm text-gray-600">Happy Investors</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">100% Verified</h3>
              <p className="text-sm text-gray-600">Legal Compliance</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">15-20%</h3>
              <p className="text-sm text-gray-600">Annual Returns</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      {/* As Seen In */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 font-semibold text-sm mb-6">AS SEEN IN</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-lg font-medium text-gray-500">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogFeatured 
          posts={[
            {
              id: '1',
              title: 'Sustainable Farming for Modern Investors',
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
              title: 'Success Story: How Our Investors Tripled Returns',
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary-700 rounded-xl shadow-md p-6 mb-8 mx-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Ready to Start Your Farming Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Join hundreds of investors who have already secured their agricultural future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request a Callback
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-700 transition-colors font-semibold text-base"
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