import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface VideoHeroProps {
  onEnquiry: () => void;
}

const VideoHero: React.FC<VideoHeroProps> = ({ onEnquiry }) => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/farm-aerial.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg" 
            alt="Aerial view of lush green farm" 
            className="object-cover w-full h-full" 
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto animate-slide-down">
          Own a Premium Managed Farmland for Sustainable Returns
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto animate-slide-up delay-100">
          Invest in nature, harvest prosperity. Professional management with 15-20% annual returns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
          <button
            onClick={onEnquiry}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all transform hover:scale-105 font-medium text-lg flex items-center justify-center"
          >
            Book a Free Site Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <Link
            to="/farms"
            className="px-8 py-4 bg-white text-primary-700 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium text-lg flex items-center justify-center"
          >
            Explore Our Farms
          </Link>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce bg-white bg-opacity-20 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;