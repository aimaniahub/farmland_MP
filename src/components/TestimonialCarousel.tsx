import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number; // in milliseconds
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoplay = true,
  interval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, isTransitioning]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center">
        <button 
          onClick={goToPrev}
          className="absolute left-2 z-10 p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4 md:px-12"
              >
                <div className="bg-white rounded-xl shadow-md p-8 mx-auto max-w-2xl">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-secondary-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.text}"</p>
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
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 z-10 p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setActiveIndex(index);
              setTimeout(() => setIsTransitioning(false), 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;