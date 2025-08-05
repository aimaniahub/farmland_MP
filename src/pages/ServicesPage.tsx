import React from 'react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface Service {
  name: string;
  description: string;
  features: ServiceFeature[];
}

interface Package {
  name: string;
  price: string;
  features: string[];
}

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

interface ServicesData {
  title: string;
  description: string;
  services: Service[];
  packages: Package[];
  testimonials: Testimonial[];
}

import servicesData from "../content/services.json";
const services = servicesData as ServicesData;
import {
  ArrowRight,
  Leaf,
  Shield,
  Users,
  Tractor,
  Sun,
  Star,
  CheckCircle
} from 'lucide-react';


const ServicesPage: React.FC = () => {
  // Define icons for each service
  const serviceIcons = [Tractor, Leaf, Sun, Shield];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-700 to-green-900 text-white rounded-b-3xl">
        <div className="absolute inset-0 bg-black/20 rounded-b-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 sm:mb-6">
            <span className="text-green-200 text-xs sm:text-sm font-medium">🌱 OUR SERVICES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">{services.title}</h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-green-100 max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12">
            {services.description}
          </p>
          <button className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">Comprehensive Farm Services</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto">
              From planning to harvest, we provide end-to-end solutions for your farmland
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.services.map((service, index) => {
              const Icon = serviceIcons[index] || Tractor;
              return (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-green-100 p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  <div className="space-y-3 sm:space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-2xl p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Farm Management Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right package for your farmland needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                    index === 1 ? 'ring-2 ring-green-500 bg-white shadow-xl transform scale-105' : 'bg-white shadow-lg'
                  }`}
                >
                  {index === 1 && (
                    <div className="bg-green-500 text-white text-center py-3 font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-gray-500 ml-2">per acre/year</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    </ul>
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        index === 1
                          ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Select Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from farm owners who trust our management services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full mr-4 flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 text-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Farm?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact our farm management experts today for a free consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl">
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-green-600 transition-colors font-semibold">
                Call Us: +91 98765 43210
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;