import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  MapPin, 
  Calendar, 
  Package, 
  Cloud, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Farm Analytics',
      description: 'Track productivity, yield trends, and make data-driven decisions'
    },
    {
      icon: MapPin,
      title: 'Field Management',
      description: 'Manage multiple fields, crops, and monitor their health status'
    },
    {
      icon: Calendar,
      title: 'Task Scheduling',
      description: 'Plan and track daily activities, assign tasks to workers'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Track supplies, seeds, equipment, and get reorder alerts'
    },
    {
      icon: Cloud,
      title: 'Weather Integration',
      description: 'Get weather forecasts and farming recommendations'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Coordinate with workers and track their activities'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      farm: 'Sunrise Organic Farm',
      rating: 5,
      text: 'FarmFlow has revolutionized how we manage our 200-acre organic farm. The weather integration alone has saved us thousands in crop losses.'
    },
    {
      name: 'Mike Rodriguez',
      farm: 'Valley Vegetable Co.',
      rating: 5,
      text: 'The task management system keeps our 15-person team perfectly coordinated. We have increased productivity by 30% since using FarmFlow.'
    },
    {
      name: 'Emma Chen',
      farm: 'Golden Grain Farm',
      rating: 5,
      text: 'Being able to showcase our products directly to consumers through the platform has opened up new revenue streams for our family farm.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Modern Farm Management
              <span className="block text-yellow-300">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Streamline your farming operations with our comprehensive platform. 
              Manage fields, track activities, monitor weather, and showcase your products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-lg"
              >
                Start Managing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-700 transition-colors font-semibold text-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Manage Your Farm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools modern farmers need to optimize their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose FarmFlow?
              </h2>
              <div className="space-y-4">
                {[
                  'Increase productivity by up to 30%',
                  'Reduce crop losses with weather insights',
                  'Streamline team coordination',
                  'Direct-to-consumer sales platform',
                  'Mobile-friendly for field use',
                  'Data-driven decision making'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
                alt="Modern farming"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Happy Farmers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Farmers Say About Us
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of farmers who trust FarmFlow with their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.farm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers who are already using FarmFlow to optimize their operations.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;