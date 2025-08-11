import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Farm } from '../App';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Shield, Leaf, TrendingUp, Award, Users, CheckCircle, Phone, ArrowRight, MapPin, Calendar, Tractor } from 'lucide-react';
import BlogFeatured from '../components/BlogFeatured';
import LiveGoogleReviews from '../components/LiveGoogleReviews';
import StatisticsSection from '../components/StatisticsSection';
import ROISection from '../components/ROISection';
import PartnersSection from '../components/PartnersSection';
import AmenitiesSection from '../components/AmenitiesSection';
import { Link } from 'react-router-dom';
import home from '../content/home.json';
import farmsData from '../content/farms.json';
import testimonialsData from '../content/testimonials.json';
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
  Tractor: Tractor,
};

// Simple hook to detect when an element enters the viewport
const useInView = (options: IntersectionObserverInit = { threshold: 0.15 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // trigger once
        }
      });
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return { ref, inView } as const;
};

// Count up animation for stats e.g., "500+", "25%"
const CountUpText: React.FC<{ value: string; start: boolean; durationMs?: number }> = ({ value, start, durationMs = 1200 }) => {
  const [display, setDisplay] = useState<string>(value);
  const numericMatch = useMemo(() => value.match(/[0-9]+(\.[0-9]+)?/), [value]);
  const target = useMemo(() => (numericMatch ? parseFloat(numericMatch[0]) : null), [numericMatch]);
  const suffix = useMemo(() => (numericMatch ? value.replace(numericMatch[0], '') : ''), [numericMatch, value]);

  useEffect(() => {
    if (!start || target === null) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const startTime = performance.now();
    const animate = (t: number) => {
      const elapsed = t - startTime;
      const p = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(formatted + suffix);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [start, target, suffix, value, durationMs]);

  return <span>{display}</span>;
};

const HomePage: React.FC<HomePageProps> = ({ onEnquiry }) => {
  const featuredFarms: Farm[] = farmsData?.farms?.slice(0, 3) || []; // Take first 3 farms as featured
  const testimonials = testimonialsData?.testimonials || [];
  const blogPosts = blogPostsData?.posts || [];

  const { ref: whyRef, inView: whyInView } = useInView();
  const howRef = useRef(null);
  const [enquiryTriggered, setEnquiryTriggered] = useState(false);

  useEffect(() => {
    if (enquiryTriggered) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && scrollTop / scrollHeight >= 0.7) {
        setEnquiryTriggered(true);
        onEnquiry();
      }
    };
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setEnquiryTriggered(true);
        onEnquiry();
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [enquiryTriggered, onEnquiry]);

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src=""
          autoPlay
          loop
          muted
          playsInline
          poster={home.hero.background_image}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />


        <div className="relative z-10 text-center text-white px-3 py-8 sm:px-4 sm:py-12 sm:max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="animate-fadeInUp [animation-delay:0.1s] text-2xl sm:text-4xl lg:text-6xl font-serif font-bold leading-tight text-white">
              <span className="text-green-500">{home.hero.title}</span>
              <span className="block text-white opacity-75">{home.hero.subtitle}</span>
            </h1>
            <h2 className="animate-fadeInUp [animation-delay:0.25s] text-base sm:text-lg lg:text-xl text-white opacity-95">Hassle-free ownership, sustainable practices, and a legacy of growth.</h2>
            <p className="animate-fadeInUp [animation-delay:0.4s] text-sm sm:text-lg lg:text-xl text-white opacity-90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              {home.hero.description}
            </p>
            <div className="animate-fadeInUp [animation-delay:0.55s] flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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

      {/* Sandalwood Introduction */}
  <section ref={howRef as any} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-green-100 to-green-50 section-mobile-compact">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src="/logo.svg" alt="Darvi Group Logo" className="h-16 w-auto" />
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  Premium Investment Opportunity
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 lg:mb-6">
                Introduction Sandalwood cultivation for the first time in
                <span className="text-green-600"> Madhya Pradesh</span> on a large scale
              </h2>
              <div className="space-y-4 mb-6 lg:mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700">
                    The world's most costly wood
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700">
                    Mysore Sandal quality
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700">
                    Own a farm land with private resort
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/farms"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl hover:from-green-700 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Sandalwood Farms
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button
                  onClick={() => onEnquiry()}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-700 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/sand1.jpg"
                  alt="Sandalwood Plantation"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
                <img
                  src="/sand2.jpeg"
                  alt="Sandalwood Trees"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/sand3.jpg"
                  alt="Sandalwood Cultivation"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
                <img
                  src="/sand4.jpg"
                  alt="Premium Sandalwood"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to Managed Farmlands - Compact Mobile */}
      <section className="py-3 sm:py-6 md:py-8 lg:py-12 bg-cream-50 section-mobile-compact">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            <div className="text-left">
              <span className="text-primary-700 text-xs sm:text-sm font-semibold">{home.introduction.subtitle}</span>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mt-1 mb-2 sm:mb-3 lg:mb-4 compact-text">
                {home.introduction.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 content-dense">
                {home.introduction.description}
              </p>
              <Link to={home.introduction.link.url} className="text-primary-600 font-semibold hover:underline text-sm sm:text-base touch-target">
                {home.introduction.link.text}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {home?.introduction?.features?.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={index} className="p-2 sm:p-3 md:p-4 lg:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] sm:hover:scale-105 border border-gray-100 compact-card">
                    <div className="bg-primary-50 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-600" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 compact-text">{feature.title}</h3>
                    <p className="text-2xs xs:text-xs sm:text-sm text-gray-600 content-dense">
                      {feature.description}
                    </p>
                  </div>
                )
              }) || []}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farms - Compact */}
      <section className="py-3 sm:py-6 md:py-8 lg:py-12 bg-white section-mobile-compact">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-2 sm:mb-3 compact-text">{home.featured_farms.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto content-dense">
              {home.featured_farms.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-4 sm:mb-6 lg:mb-8">
            {featuredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105 group border border-gray-100">
                <div className="relative h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 bg-cover bg-center rounded-t-2xl sm:rounded-t-3xl" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl sm:rounded-t-3xl"></div>
                  <div className="absolute top-1 sm:top-2 md:top-3 lg:top-4 left-1 sm:left-2 md:left-3 lg:left-4">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-xl sm:rounded-2xl text-xs font-semibold backdrop-blur-md border ${farm.status === 'ongoing' ? 'bg-green-500/90 text-white border-green-400/50' : 'bg-blue-500/90 text-white border-blue-400/50'}`}>
                      {farm.status === 'ongoing' ? 'Available Now' : 'Coming Soon'}
                    </span>
                  </div>
                </div>

                <div className="p-2 sm:p-3 md:p-4 lg:p-6 compact-card">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1 compact-text">{farm.name}</h3>
                  <p className="text-gray-500 text-2xs sm:text-xs md:text-sm flex items-center mb-1 sm:mb-2 line-clamp-1 content-dense">
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{farm.location}</span>
                  </p>
                  <p className="text-gray-600 text-2xs sm:text-xs md:text-sm mb-2 sm:mb-3 line-clamp-2 hidden sm:block content-dense">{farm.description}</p>

                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <div>
                      <p className="text-sm sm:text-base md:text-lg font-bold text-primary-600">
                        {farm.startingPrice && !isNaN(parseInt(farm.startingPrice))
                          ? `₹${(parseInt(farm.startingPrice) / 100000).toFixed(1)}L`
                          : 'Updating soon'}
                      </p>
                      <p className="text-2xs sm:text-xs text-gray-500">Starting</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xs sm:text-xs text-secondary-600 font-semibold">
                          {farm.availableUnits} left
                        </p>
                        <p className="text-2xs text-gray-500 hidden sm:block">
                          of {farm.totalUnits}
                        </p>
                    </div>
                  </div>

                  <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-4 rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-gray-200 hover:shadow-md transition-all duration-300 text-center font-semibold text-2xs sm:text-xs md:text-sm transform hover:scale-105"
                    >
                      View
                    </Link>
                    <button
                        onClick={() => onEnquiry(farm)}
                        className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-4 rounded-lg sm:rounded-xl md:rounded-2xl hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-300 font-semibold text-2xs sm:text-xs md:text-sm transform hover:scale-105"
                      >
                        Enquire
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

      {/* Why Choose Us - Compact */}
      <section className="py-3 sm:py-6 md:py-8 lg:py-12 bg-cream-50 section-mobile-compact">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-2 sm:mb-3 compact-text">{home.why_choose_us.title}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 content-dense">
              {home.why_choose_us.description}
            </p>
          </div>

          <div ref={whyRef as any} className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {home?.why_choose_us?.stats?.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users;
              return (
                <div key={index} className="text-center p-2 sm:p-3 md:p-4 lg:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105 compact-card">
                  <div className={`bg-gradient-to-br from-primary-100 to-primary-200 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 lg:mb-4 shadow-md ${whyInView ? 'animate-zoomIn' : 'opacity-0 scale-95'}`} style={{ animationDelay: `${index * 120}ms` }}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-primary-600" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-0.5 sm:mb-1 compact-text">
                    <CountUpText value={stat.number} start={whyInView} />
                  </h3>
                  <p className="text-2xs xs:text-xs sm:text-sm text-gray-600 font-medium content-dense">{stat.label}</p>
                </div>
              )
            }) || []}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <ROISection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      <TestimonialCarousel testimonials={testimonials} />

      {/* Live Google Reviews Section */}
      <LiveGoogleReviews />

      {/* Statistics Section */}
      <StatisticsSection />

      <BlogFeatured
          posts={blogPosts}
          title={home.blog.title}
          subtitle={home.blog.subtitle}
        />

      {/* Location Map Section */}
      <section className="py-6 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Farm Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategically located across Karnataka for optimal growth and accessibility
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="h-96 lg:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456789!2d80.58369!3d23.83042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzQ5LjUiTiA4MMKwMzUnMDEuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farm Locations Map"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Prime Agricultural Zones</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bangalore Rural</h4>
                      <p className="text-gray-600 text-sm">60-90 minutes from Bangalore city</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Mysore District</h4>
                      <p className="text-gray-600 text-sm">Rich soil and favorable climate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Coorg Region</h4>
                      <p className="text-gray-600 text-sm">Premium coffee and spice cultivation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Tumkur Area</h4>
                      <p className="text-gray-600 text-sm">Excellent connectivity and infrastructure</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Why These Locations?</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Proximity to major cities</li>
                    <li>• Excellent water availability</li>
                    <li>• Proven agricultural productivity</li>
                    <li>• Strong infrastructure development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {home.cta.title}
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-primary-100">
            {home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onEnquiry()}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-2xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              {home.cta.primary_cta}
            </button>
            <Link
              to="/farms"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/60 text-white rounded-2xl hover:bg-white/10 hover:border-white hover:shadow-xl transition-all duration-300 font-semibold transform hover:-translate-y-1 hover:scale-105"
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
