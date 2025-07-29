import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Leaf, 
  TrendingUp,
  Shield,
  Award,
  MapPin,
  Calendar,
  Phone
} from 'lucide-react';
import { Farm } from '../App';
import BlogFeatured from '../components/BlogFeatured';

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
      images: ['https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg'],
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
      images: ['https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'],
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
      images: ['https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'],
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
      location: 'Bangalore',
      rating: 5,
      text: 'Investing in GreenFarmlands was the best decision I made. The returns are excellent and the management is hassle-free.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Priya Sharma',
      location: 'Chennai',
      rating: 5,
      text: 'I love visiting my farm on weekends. The organic produce is amazing and the investment value keeps growing.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Amit Patel',
      location: 'Hyderabad',
      rating: 5,
      text: 'Professional management, transparent processes, and great returns. Highly recommend GreenFarmlands.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    }
  ];

  const mediaLogos = [
    'The Hindu', 'Economic Times', 'Business Standard', 'Deccan Herald', 'Times of India'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Own Your
            <span className="block text-green-400">Dream Farm</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Invest in managed farmlands with guaranteed returns, sustainable practices, 
            and hassle-free ownership. Your gateway to agricultural prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/farms"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Explore Farms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Site Tour
            </button>
          </div>
        </div>
      </section>

      {/* Introduction to Managed Farmlands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What are Managed Farmlands?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Managed farmlands offer you the opportunity to own agricultural land without the hassle of farming. 
              We handle everything from cultivation to harvest while you enjoy the returns and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hassle-Free Ownership</h3>
              <p className="text-gray-600">
                Own farmland without worrying about daily operations. We manage everything for you.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                Organic farming methods that protect the environment and ensure healthy produce.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Investment Potential</h3>
              <p className="text-gray-600">
                Enjoy steady returns from agricultural produce and land appreciation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Farms</h2>
            <p className="text-xl text-gray-600">
              Discover our premium managed farmland projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="h-full bg-black bg-opacity-20 flex items-end p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      farm.status === 'ongoing' ? 'bg-green-500 text-white' :
                      farm.status === 'upcoming' ? 'bg-blue-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {farm.status === 'ongoing' ? 'Available Now' :
                       farm.status === 'upcoming' ? 'Coming Soon' : 'Sold Out'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{farm.name}</h3>
                  <p className="text-gray-600 flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farm.proximity}
                  </p>
                  <p className="text-gray-600 mb-4">{farm.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{(farm.startingPrice / 100000).toFixed(1)}L
                      </p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-orange-600 font-medium">
                        Only {farm.availableUnits} units left!
                      </p>
                      <p className="text-xs text-gray-500">
                        of {farm.totalUnits} total units
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => onEnquiry(farm)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
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
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose GreenFarmlands?</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in agricultural investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">10+ Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in managed farmland development</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">500+ Happy Investors</h3>
              <p className="text-gray-600">Growing community of satisfied farmland owners</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">100% Legal Compliance</h3>
              <p className="text-gray-600">All properties with clear titles and documentation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">15-20% Annual Returns</h3>
              <p className="text-gray-600">Consistent returns from agricultural produce</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to own your managed farmland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Choose Your Farm</h3>
              <p className="text-gray-600">Browse our available farmland projects and select the one that suits your needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit & Verify</h3>
              <p className="text-gray-600">Schedule a free site visit to see the farmland and verify all documentation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete Purchase</h3>
              <p className="text-gray-600">Finalize the purchase with flexible payment options and legal documentation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Enjoy Returns</h3>
              <p className="text-gray-600">Sit back and enjoy regular returns while we manage your farmland professionally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Investors Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from our satisfied farmland owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">As Seen In</h2>
            <p className="text-gray-600">Trusted by leading media outlets</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-xl font-bold text-gray-600">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-white">
        <BlogFeatured 
          posts={[
            {
              id: '1',
              title: 'Top 10 Crops for Profitable Farming in 2023',
              excerpt: 'Discover the most profitable crops to grow this year based on market trends and climate conditions.',
              author: 'Rajesh Kumar',
              date: 'June 15, 2023',
              category: 'farming-tips',
              tags: ['crops', 'profitability', 'market-trends'],
              image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
              readTime: '5 min read',
            },
            {
              id: '2',
              title: 'How Farm Plot Investment Changed My Retirement Plans',
              excerpt: 'A personal story of how investing in farmland provided financial security and peace of mind.',
              author: 'Priya Sharma',
              date: 'May 22, 2023',
              category: 'success-stories',
              tags: ['investment', 'retirement', 'personal-story'],
              image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
              readTime: '7 min read',
            },
            {
              id: '3',
              title: 'Sustainable Farming Practices for Small Plot Owners',
              excerpt: 'Learn how to implement eco-friendly farming techniques that improve soil health and crop yield.',
              author: 'Arun Patel',
              date: 'April 10, 2023',
              category: 'sustainability',
              tags: ['sustainable', 'eco-friendly', 'soil-health'],
              image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
              readTime: '6 min read',
            },
          ]}
          title="From Our Blog"
          subtitle="Latest insights, tips, and success stories from our farming community"
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Farming Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of investors who have already secured their agricultural future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold text-lg"
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