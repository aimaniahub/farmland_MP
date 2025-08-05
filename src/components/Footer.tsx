import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/logo.svg';
import { 
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
      <div className="bg-primary-700 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-3 sm:mb-4 lg:mb-6">
            <span className="text-primary-200 text-xs sm:text-sm font-medium">📧 STAY UPDATED</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold mb-3 sm:mb-4 lg:mb-6">Get Exclusive Farm Updates</h3>
          <p className="text-primary-100 mb-4 sm:mb-6 lg:mb-8 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            Subscribe to our newsletter for the latest farmland projects, investment opportunities, and sustainable farming insights delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-sm sm:max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 border-0 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 px-4 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-4 rounded-r-lg transition-all duration-300 font-medium shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-0.5"
              aria-label="Subscribe to newsletter"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-6 sm:py-8 lg:py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Mobile 3x3 Grid Layout */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
            {/* Company Info - Spans 3 columns on mobile */}
            <div className="col-span-3 text-center mb-4">
              <Link to="/" className="flex items-center justify-center space-x-2 mb-3">
                <img src={Logo} alt="Earth Foundation Logo" className="h-8 w-auto" />
                <span className="text-lg font-heading font-bold text-white">Earth Foundation</span>
              </Link>
              <p className="text-gray-400 text-sm mb-3 max-w-sm mx-auto">
                Transforming agriculture through managed farmland investments.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-2 text-white">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">About</Link></li>
                <li><Link to="/farms" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Farms</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Services</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-2 text-white">Support</h4>
              <ul className="space-y-1">
                <li><Link to="/faq" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Privacy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-2 text-white">Contact</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <Phone className="h-3 w-3 text-primary-500" />
                  <p className="text-gray-400 text-xs">+91 98765 43210</p>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Mail className="h-3 w-3 text-primary-500" />
                  <p className="text-gray-400 text-xs">info@earth.com</p>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-2 text-white">More</h4>
              <ul className="space-y-1">
                <li><Link to="/gallery" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Gallery</Link></li>
                <li><Link to="/media" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Media</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Careers</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center">
              <h4 className="text-sm font-semibold mb-2 text-white">Legal</h4>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Refund</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-xs">Cookie</a></li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src={Logo} alt="Earth Foundation Logo" className="h-10 lg:h-12 w-auto" />
                <span className="text-xl lg:text-2xl font-heading font-bold text-white">Earth Foundation</span>
              </Link>
              <p className="text-gray-400 mb-6 text-sm lg:text-base">
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
      <div className="border-t border-gray-800 py-3 sm:py-4 lg:py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Earth Foundation. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-6 mt-2 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-500 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-xs sm:text-sm transition-colors">
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
