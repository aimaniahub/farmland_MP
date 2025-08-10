import React from 'react';
import { 
  Waves, 
  Home, 
  Trophy, 
  Building2, 
  Calendar, 
  Dumbbell, 
  Heart,
  Sparkles
} from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const amenities = [
  { 
    icon: Waves, 
    title: 'Serene Swimming Pool',
    description: 'Crystal clear waters in a tranquil setting'
  },
  { 
    icon: Home, 
    title: 'Luxury Cottages & Stays',
    description: 'Premium accommodations for extended visits'
  },
  { 
    icon: Trophy, 
    title: 'Outdoor Sports Arena',
    description: 'Multiple courts for various recreational activities'
  },
  { 
    icon: Building2, 
    title: 'Clubhouse & Resort',
    description: 'Elegant gathering spaces with modern amenities'
  },
  { 
    icon: Calendar, 
    title: 'Multifunctional Event Hall',
    description: 'Perfect venue for celebrations and gatherings'
  },
  { 
    icon: Dumbbell, 
    title: 'Wellness Gym & Spa',
    description: 'Complete fitness and rejuvenation facilities'
  },
  { 
    icon: Heart, 
    title: 'Meditation & Yoga Hall',
    description: 'Peaceful spaces for mindfulness and wellness'
  },
  { 
    icon: Sparkles, 
    title: 'Organic Farm-to-Table',
    description: 'Fresh produce from your own farmland'
  }
];

const AmenitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-green-900 mb-4">
              An Oasis of Modern Comforts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Your investment includes exclusive access to our premium, resort-style amenities designed for relaxation and recreation.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-500">
                    <amenity.icon className="h-8 w-8 text-green-700 group-hover:text-yellow-600 transition-all duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Animation ring */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-yellow-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-lg font-semibold text-green-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={800}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-4">Resort-Style Living Experience</h3>
              <p className="text-green-100 leading-relaxed">
                Every amenity has been thoughtfully designed to provide a complete luxury experience. 
                From wellness facilities to entertainment spaces, your farmland investment comes with 
                a lifestyle upgrade that you and your family can enjoy for years to come.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AmenitiesSection;
