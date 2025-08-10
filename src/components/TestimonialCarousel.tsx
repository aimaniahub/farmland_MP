import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-section-background section-mobile-compact">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark-text mb-2 sm:mb-4 compact-text">
            Voices of Our Investors
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-subtle-text max-w-3xl mx-auto content-dense">
            Hear directly from those who have embarked on their journey with us.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white-background rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center compact-card">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading text-dark-text mb-4 sm:mb-6 italic content-dense">"{testimonial.text}"</p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mr-3 sm:mr-4"
                      />
                      <div className="text-left">
                        <div className="font-bold text-sm sm:text-base md:text-lg text-dark-text">{testimonial.name}</div>
                        <div className="text-subtle-text text-xs sm:text-sm">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;