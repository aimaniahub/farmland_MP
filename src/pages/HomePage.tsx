import React from 'react';
import { Farm } from '../App';
import VideoHero from '../components/VideoHero';
import FarmCard from '../components/FarmCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import StepByStepProcess from '../components/StepByStepProcess';
import { Search, Handshake, Tractor, Shield, Leaf, TrendingUp, Award, Users, CheckCircle, Phone, ArrowRight } from 'lucide-react';
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
      status: 'Ongoing',
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
      status: 'Ongoing',
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
      status: 'Upcoming',
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
    // ... (testimonial data remains the same)
  ];

  const steps = [
    {
      icon: <Search size={40} />,
      title: 'Explore',
      description: 'Browse our curated selection of high-yield managed farmlands.',
    },
    {
      icon: <Handshake size={40} />,
      title: 'Visit',
      description: 'Schedule a free site tour to experience the beauty and potential of your future farm.',
    },
    {
      icon: <Tractor size={40} />,
      title: 'Own',
      description: 'Complete the seamless ownership process and start your journey towards sustainable wealth.',
    },
  ];

  const mediaLogos = [
    'The Hindu', 'Economic Times', 'Business Standard', 'Deccan Herald', 'Times of India'
  ];

  return (
    <div className="bg-white-background">
      <VideoHero onEnquiry={onEnquiry} />

      <section className="py-24 bg-section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-dark-text mb-4 animate-fade-in-slide-up">
              Featured Farm Projects
            </h2>
            <p className="text-xl text-subtle-text max-w-3xl mx-auto animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
              Explore our handpicked selection of premium managed farmlands, each offering a unique opportunity for sustainable investment and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredFarms.map((farm, index) => (
              <div key={farm.id} className="animate-fade-in-slide-up" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <FarmCard farm={farm} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 animate-fade-in-slide-up">
              What are Managed Farmlands?
            </h2>
            <p className="text-xl text-subtle-text max-w-3xl mx-auto animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
              Managed farmlands offer you the opportunity to own agricultural land without the hassle of farming. 
              We handle everything from cultivation to harvest while you enjoy the returns and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">Hassle-Free Ownership</h3>
              <p className="text-subtle-text">
                Own farmland without worrying about daily operations. We manage everything for you.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">Sustainable Practices</h3>
              <p className="text-subtle-text">
                Organic farming methods that protect the environment and ensure healthy produce.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-3">Investment Potential</h3>
              <p className="text-subtle-text">
                Enjoy steady returns from agricultural produce and land appreciation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StepByStepProcess steps={steps} />

      <section className="py-20 bg-section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-text mb-6 animate-fade-in-slide-up">Why Choose Us?</h2>
            <p className="text-xl text-subtle-text animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>
              Your trusted partner in agricultural investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">10+ Years Experience</h3>
              <p className="text-subtle-text">Decade of expertise in managed farmland development</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">500+ Happy Investors</h3>
              <p className="text-subtle-text">Growing community of satisfied farmland owners</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">100% Legal Compliance</h3>
              <p className="text-subtle-text">All properties with clear titles and documentation</p>
            </div>
            
            <div className="text-center animate-fade-in-slide-up" style={{ animationDelay: '1.0s' }}>
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mb-2">15-20% Annual Returns</h3>
              <p className="text-subtle-text">Consistent returns from agricultural produce</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-text mb-4 animate-fade-in-slide-up">As Seen In</h2>
            <p className="text-subtle-text animate-fade-in-slide-up" style={{ animationDelay: '0.2s' }}>Trusted by leading media outlets</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-xl font-bold text-subtle-text animate-fade-in-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-background">
        <BlogFeatured 
          posts={[
            // ... (blog post data remains the same)
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