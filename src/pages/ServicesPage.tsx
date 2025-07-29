import React from 'react';
import { 
  ArrowRight, 
  Leaf, 
  TrendingUp,
  Shield,
  Users,
  BarChart,
  Sprout,
  Tractor,
  Droplets,
  Sun,
  FileText,
  Briefcase,
  Star
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Farm Management',
      description: 'Complete management of your farmland including cultivation, maintenance, and harvesting.',
      icon: <Tractor className="h-10 w-10 text-green-600" />,
      features: [
        'Crop planning and rotation',
        'Regular maintenance and monitoring',
        'Pest and disease management',
        'Harvesting and post-harvest handling'
      ]
    },
    {
      title: 'Organic Farming',
      description: 'Sustainable and organic farming practices that ensure healthy produce and soil conservation.',
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      features: [
        'Organic certification assistance',
        'Natural pest control methods',
        'Organic fertilizer application',
        'Soil health management'
      ]
    },
    {
      title: 'Irrigation Solutions',
      description: 'Modern irrigation systems designed for water conservation and optimal crop growth.',
      icon: <Droplets className="h-10 w-10 text-green-600" />,
      features: [
        'Drip irrigation installation',
        'Sprinkler system setup',
        'Rainwater harvesting',
        'Water conservation techniques'
      ]
    },
    {
      title: 'Solar Integration',
      description: 'Renewable energy solutions for farm operations, reducing costs and environmental impact.',
      icon: <Sun className="h-10 w-10 text-green-600" />,
      features: [
        'Solar pump installation',
        'Solar fencing',
        'Energy efficient farm equipment',
        'Reduced operational costs'
      ]
    },
    {
      title: 'Yield Optimization',
      description: 'Scientific approaches to maximize crop yield and quality through advanced techniques.',
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      features: [
        'Soil testing and analysis',
        'Precision farming techniques',
        'Crop-specific optimization',
        'Yield forecasting'
      ]
    },
    {
      title: 'Farm Security',
      description: 'Comprehensive security solutions to protect your farmland investment.',
      icon: <Shield className="h-10 w-10 text-green-600" />,
      features: [
        '24/7 security personnel',
        'CCTV surveillance',
        'Perimeter fencing',
        'Regular security patrols'
      ]
    },
    {
      title: 'Seedling Nursery',
      description: 'Quality seedling production for various crops, ensuring better germination and growth.',
      icon: <Sprout className="h-10 w-10 text-green-600" />,
      features: [
        'High-quality seed selection',
        'Controlled nursery environment',
        'Disease-free seedlings',
        'Variety of crop options'
      ]
    },
    {
      title: 'Market Linkage',
      description: 'Connect with buyers and markets to ensure profitable sales of your farm produce.',
      icon: <BarChart className="h-10 w-10 text-green-600" />,
      features: [
        'Direct market access',
        'Export opportunities',
        'Price negotiation',
        'Logistics support'
      ]
    },
    {
      title: 'Farm Consultation',
      description: 'Expert advice on farm planning, crop selection, and agricultural best practices.',
      icon: <Briefcase className="h-10 w-10 text-green-600" />,
      features: [
        'Farm viability assessment',
        'Crop recommendation',
        'ROI calculation',
        'Long-term planning'
      ]
    },
    {
      title: 'Documentation',
      description: 'Assistance with legal documentation, permits, and compliance requirements for your farmland.',
      icon: <FileText className="h-10 w-10 text-green-600" />,
      features: [
        'Land documentation',
        'Organic certification paperwork',
        'Compliance assistance',
        'Record keeping'
      ]
    }
  ];

  const packages = [
    {
      name: 'Basic',
      price: '₹25,000',
      period: 'per acre / year',
      description: 'Essential farm management services',
      features: [
        'Regular farm maintenance',
        'Basic irrigation management',
        'Quarterly farm visits',
        'Annual soil testing',
        'Basic security measures'
      ],
      highlighted: false
    },
    {
      name: 'Premium',
      price: '₹45,000',
      period: 'per acre / year',
      description: 'Comprehensive farm management with advanced features',
      features: [
        'Complete farm maintenance',
        'Advanced irrigation systems',
        'Monthly farm visits',
        'Bi-annual soil testing',
        '24/7 security personnel',
        'Organic farming practices',
        'Yield optimization',
        'Harvest management'
      ],
      highlighted: true
    },
    {
      name: 'Elite',
      price: '₹75,000',
      period: 'per acre / year',
      description: 'Premium farm management with all services included',
      features: [
        'All Premium features',
        'Weekly farm visits',
        'Quarterly detailed reporting',
        'Market linkage assistance',
        'Solar integration',
        'Complete documentation support',
        'Dedicated farm manager',
        'Export quality production'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Farm Management Services</h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Professional farm management solutions to maximize your agricultural investment
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Farm Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to harvest, we provide end-to-end solutions for your farmland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Farm Management Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right package for your farmland needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden ${pkg.highlighted ? 'ring-2 ring-green-500 bg-white shadow-xl' : 'bg-white shadow-md'}`}
              >
                {pkg.highlighted && (
                  <div className="bg-green-500 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-gray-500"> {pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-lg font-medium ${pkg.highlighted ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from farm owners who trust our management services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The farm management services have transformed my agricultural investment. The team is professional and the results are outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Rajesh Kumar</h4>
                  <p className="text-gray-500 text-sm">Farm Owner, Bangalore</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I've been using their Elite package for two years now. The dedicated farm manager and weekly reports give me complete peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Priya Sharma</h4>
                  <p className="text-gray-500 text-sm">Investor, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The organic farming practices they implemented have not only increased my yield but also the quality of produce. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Amit Patel</h4>
                  <p className="text-gray-500 text-sm">Farm Owner, Mysore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact our farm management experts today for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              <Users className="mr-2 h-5 w-5" />
              Schedule Consultation
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: +91 98765 43210
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);