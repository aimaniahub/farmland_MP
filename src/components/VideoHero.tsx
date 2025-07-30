import React from 'react';
import TypewriterEffect from './TypewriterEffect';

const VideoHero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-105"
          poster="/images/farm-placeholder.jpg"
        >
          <source src="/videos/farm-drone-shot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <TypewriterEffect text="Invest in a Greener Future." delay={100} />
            <br />
            <TypewriterEffect text="Own Your Farmland." delay={100} />
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            Experience the benefits of managed farmland, from sustainable returns to a legacy of land ownership.
          </p>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <a
              href="#our-farms"
              className="bg-[color:var(--accent-orange)] text-white font-bold py-4 px-9 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:shadow-lifted shadow-lg"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
