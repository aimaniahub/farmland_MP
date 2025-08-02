import React from 'react';
import { Farm } from '../App';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Shield, Leaf, TrendingUp, Award, Users, CheckCircle, Phone, ArrowRight, MapPin, Calendar } from 'lucide-react';
import BlogFeatured from '../components/BlogFeatured';
import { Link } from 'react-router-dom';
import home from '../content/home.json';
import farmsData from '../content/farms.json';
import testimonialsData from '../content/testimonials.json';
import mediaLogosData from '../content/media-logos.json';
import blogPostsData from '../content/blog-posts.json';

interface HomePageProps {
  onEnquiry: (farm?: Farm) => void;
}

const iconMap = {
  Shield: Shield,
  Leaf: Leaf,
  TrendingUp: TrendingUp,
  Award: Award,
  Users: Users,
  CheckCircle: CheckCircle,
  MapPin: MapPin,
  Calendar: Calendar,
};

const HomePage: React.FC<HomePageProps> = ({ onEnquiry }) => {
  const featuredFarms: Farm[] = farmsData?.farms?.slice(0, 3) || []; // Take first 3 farms as featured
  const testimonials = testimonialsData?.testimonials || [];
  const mediaLogos = mediaLogosData?.logos || [];
  const blogPosts = blogPostsData?.posts || [];

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${home.hero.background_image})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white p-4 sm:max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4 leading-tight">
              {home.hero.title}
              <span className="block text-primary-400">{home.hero.subtitle}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/farms"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {home.hero.primary_cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => onEnquiry()}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {home.hero.secondary_cta}
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
              <span className="text-primary-700 text-sm font-semibold">{home.introduction.subtitle}</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mt-2 mb-6">
                {home.introduction.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {home.introduction.description}
              </p>
              <Link to={home.introduction.link.url} className="text-primary-600 font-semibold hover:underline">
                {home.introduction.link.text}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {home?.introduction?.features?.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Icon className="h-8 w-8 text-primary-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                )
              }) || []}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farms */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">{home.featured_farms.title}</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {home.featured_farms.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${farm.status === 'ongoing' ? 'bg-green-500/80 text-white' : 'bg-blue-500/80 text-white'}`}>
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
              {home.featured_farms.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">{home.why_choose_us.title}</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {home.why_choose_us.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {home?.why_choose_us?.stats?.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users;
              return (
                <div key={index} className="text-center p-4">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{stat.number}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              )
            }) || []}
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      {/* As Seen In */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 font-semibold text-sm mb-6">{home.media_logos.title}</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 opacity-60">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-lg font-medium text-gray-500">
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogFeatured 
          posts={blogPosts}
          title={home.blog.title}
          subtitle={home.blog.subtitle}
        />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary-700 rounded-xl shadow-md p-6 mb-8 mx-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {home.cta.title}
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            {home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base"
            >
              <Phone className="mr-2 h-5 w-5" />
              {home.cta.primary_cta}
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-700 transition-colors font-semibold text-base"
            >
              {home.cta.secondary_cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;