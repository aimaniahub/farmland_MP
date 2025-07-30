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
      description: 'Track productivity, yield trends, and make data-driven decisions.'
    },
    {
      icon: MapPin,
      title: 'Field Management',
      description: 'Manage multiple fields, crops, and monitor their health status.'
    },
    {
      icon: Calendar,
      title: 'Task Scheduling',
      description: 'Plan and track daily activities, assign tasks to workers.'
    },
    {
      icon: Package,
      title: 'Inventory Control',
      description: 'Track supplies, seeds, equipment, and get reorder alerts.'
    },
    {
      icon: Cloud,
      title: 'Weather Integration',
      description: 'Get real-time weather forecasts and farming recommendations.'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Coordinate with workers and track their activities efficiently.'
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
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/leafy-green.png")',
            backgroundSize: 'auto',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Modern Farm Management
              <span className="block text-yellow-300">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Streamline your farming operations. Manage fields, track activities, monitor weather, and boost your productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-base shadow-lg"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-700 transition-colors font-semibold text-base"
              >
                See Features
              </Link>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
              Everything You Need to Manage Your Farm
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the tools modern farmers need to optimize their daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (2-Column Layout) */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
                alt="Modern farming with technology"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
                Why Choose FarmFlow?
              </h2>
              <div className="space-y-4">
                {[
                  'Increase productivity by up to 30%',
                  'Reduce crop losses with weather insights',
                  'Streamline team coordination',
                  'Mobile-friendly for in-field use',
                  'Make data-driven decisions'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
              Trusted by Farmers Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Hear what our community has to say about FarmFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.farm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Join thousands of farmers using FarmFlow to optimize their operations.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-lg shadow-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-xl mb-4">FarmFlow</h3>
                    <p className="text-gray-400 max-w-md">
                        The all-in-one platform for modern farm management. Helping you grow smarter, not harder.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-semibold mb-3">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/features" className="hover:text-white">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link to="/integrations" className="hover:text-white">Integrations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} FarmFlow. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;