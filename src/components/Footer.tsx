import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Send
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">Stay Updated with Our Latest Projects</h3>
            <p className="text-primary-100 mb-6">Get exclusive updates on new farm launches, investment opportunities, and farming insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 border-0"
                required
              />
              <button
                type="submit"
                className="bg-primary-800 hover:bg-primary-900 px-6 py-3 rounded-r-lg transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Sprout className="h-8 w-8 text-primary-500" />
                <span className="text-2xl font-heading font-bold text-white">Earth Foundation</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Transforming agriculture through managed farmland investments. 
                Own your dream farm with hassle-free management and sustainable practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
                <li><Link to="/farms" className="text-gray-400 hover:text-primary-500 transition-colors">Our Farms</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">Services</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-primary-500 transition-colors">Gallery</Link></li>
                <li><Link to="/media" className="text-gray-400 hover:text-primary-500 transition-colors">Media</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-primary-500 transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-400 hover:text-primary-500 transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">123 Green Valley Road</p>
                    <p className="text-gray-400">Bangalore, Karnataka 560001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-500" />
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-500" />
                  <p className="text-gray-400">info@earthfoundation.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Earth Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;