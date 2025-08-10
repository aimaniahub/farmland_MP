import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface LiveGoogleReviewsProps {
  className?: string;
}

const LiveGoogleReviews: React.FC<LiveGoogleReviewsProps> = ({ className = '' }) => {
  const [visibleReviews, setVisibleReviews] = useState<number>(0);
  
  // Mock data for Google reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      comment: "Excellent investment opportunity! The team at Bharatvan is professional and transparent. My farmland is well-maintained and I receive regular updates.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mysore",
      rating: 5,
      comment: "I've been investing with Bharatvan for over a year now. The returns are consistent and the land quality is exceptional. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Coorg",
      rating: 5,
      comment: "Best decision I've made for my financial future. The farmland is beautiful and the management team takes great care of everything.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    // Show reviews one by one with delay
    let count = 0;
    const interval = setInterval(() => {
      if (count <= reviews.length) {
        setVisibleReviews(count);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12" animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Google Reviews about Bharatvan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our co-farmers are saying about their experience with us
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <AnimatedSection 
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6"
              animation="slide-up"
              delay={index * 150}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 italic">"{review.comment}"</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveGoogleReviews;
