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
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${home.hero.background_image})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white px-3 py-8 sm:px-4 sm:py-12 sm:max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4 leading-tight">
              {home.hero.title}
              <span className="block text-primary-400">{home.hero.subtitle}</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-200 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/farms"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                {home.hero.primary_cta}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <button
                onClick={() => onEnquiry()}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-2xl hover:bg-white/30 hover:border-white/60 transition-all duration-300 font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {home.hero.secondary_cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to Managed Farmlands */}
      <section className="py-8 sm:py-12 lg:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <span className="text-primary-700 text-xs sm:text-sm font-semibold">{home.introduction.subtitle}</span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-gray-800 mt-1 sm:mt-2 mb-3 sm:mb-4 lg:mb-6">
                {home.introduction.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {home.introduction.description}
              </p>
              <Link to={home.introduction.link.url} className="text-primary-600 font-semibold hover:underline text-sm sm:text-base">
                {home.introduction.link.text}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {home?.introduction?.features?.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={index} className="p-4 sm:p-5 lg:p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100">
                    <div className="bg-primary-50 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">{home.featured_farms.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto">
              {home.featured_farms.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group border border-gray-100">
                <div className="relative h-40 sm:h-48 lg:h-56 bg-cover bg-center rounded-t-3xl" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-3xl"></div>
                  <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-xl sm:rounded-2xl text-xs font-semibold backdrop-blur-md border ${farm.status === 'ongoing' ? 'bg-green-500/90 text-white border-green-400/50' : 'bg-blue-500/90 text-white border-blue-400/50'}`}>
                      {farm.status === 'ongoing' ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-primary-600 transition-colors">{farm.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm flex items-center mb-2 sm:mb-3 lg:mb-4">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-gray-400" />
                    {farm.location}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 lg:mb-5 line-clamp-2">{farm.description}</p>

                  <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
                    <div>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600">
                        ₹{(farm.startingPrice / 100000).toFixed(1)}L
                      </p>
                      <p className="text-xs text-gray-500">Starting Price</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs sm:text-sm text-secondary-600 font-semibold">
                          {farm.availableUnits} units left
                        </p>
                        <p className="text-xs text-gray-500">
                          of {farm.totalUnits} total
                        </p>
                    </div>
                  </div>

                  <div className="flex space-x-2 sm:space-x-3">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 sm:py-2.5 lg:py-3 px-2 sm:px-3 lg:px-4 rounded-2xl hover:bg-gray-200 hover:shadow-md transition-all duration-300 text-center font-semibold text-xs sm:text-sm transform hover:scale-105"
                    >
                      View Details
                    </Link>
                    <button
                        onClick={() => onEnquiry(farm)}
                        className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 sm:py-2.5 lg:py-3 px-2 sm:px-3 lg:px-4 rounded-2xl hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-300 font-semibold text-xs sm:text-sm transform hover:scale-105"
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
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-3xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
            >
              {home.featured_farms.cta}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 lg:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">{home.why_choose_us.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">
              {home.why_choose_us.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {home?.why_choose_us?.stats?.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users;
              return (
                <div key={index} className="text-center p-3 sm:p-4 lg:p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-md">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">{stat.number}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center bg-gradient-to-r from-primary-700/90 to-primary-800/90 rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8 mx-3 sm:mx-4 backdrop-blur-sm border border-primary-500/20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold mb-2 sm:mb-3 lg:mb-4">
            {home.cta.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 text-gray-200">
            {home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary-600 rounded-2xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base transform hover:-translate-y-1 hover:scale-105"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {home.cta.primary_cta}
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white/60 text-white rounded-2xl hover:bg-white/10 hover:border-white hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            >
              {home.cta.secondary_cta}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;