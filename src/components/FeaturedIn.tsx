import React from 'react';
import { useMediaLogos } from '../hooks/useMediaLogos';

interface FeaturedInProps {
  className?: string;
}

const FeaturedIn: React.FC<FeaturedInProps> = ({ className = '' }) => {
  const { mediaLogos, loading } = useMediaLogos();

  if (loading) {
    return (
      <section className={`py-16 bg-creamy-white ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loading...</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="h-12 md:h-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-creamy-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured In</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bharatvan has been recognized and featured by leading media outlets
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {mediaLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={logo.image.src}
                alt={logo.image.alt}
                className="h-12 md:h-16 object-contain filter brightness-0 invert hover:filter-none hover:invert-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
