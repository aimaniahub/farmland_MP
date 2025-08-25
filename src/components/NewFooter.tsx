import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import siteSettings from '../content/site-settings.json';
import Weather from './Weather';

interface FooterProps {
  className?: string;
}

const NewFooter: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // In a real app, this would call an API
  };

  return (
    <footer className={`bg-earthy-brown text-white ${className}`}>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 lg:py-12">
        {/* Mobile 3x3 Grid Layout */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
          {/* Company Info - Spans 3 columns on mobile */}
          <div className="col-span-3 text-center mb-4">
            <h3 className="text-lg font-bold mb-2 text-white">Bharatvan</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Pioneering managed farmlands for sustainable agriculture.
            </p>
            <div className="flex justify-center space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors touch-target">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors touch-target">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors touch-target">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors touch-target">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - Mobile Grid Item 1 */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-xs transition-colors">About</Link></li>
              <li><Link to="/farms" className="text-gray-300 hover:text-white text-xs transition-colors">Farms</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-xs transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Resources - Mobile Grid Item 2 */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-2 text-white">Resources</h4>
            <ul className="space-y-1">
              <li><Link to="/blog" className="text-gray-300 hover:text-white text-xs transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-xs transition-colors">FAQ</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-xs transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact - Mobile Grid Item 3 */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-2 text-white">Contact</h4>
            <ul className="space-y-1">
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-xs transition-colors">Get in Touch</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white text-xs transition-colors">Careers</Link></li>
              <li><a href={`tel:+91${siteSettings.contactPhone}`} className="text-gray-300 hover:text-white text-xs transition-colors">Call Us</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Bharatvan</h3>
            <p className="text-white-300 mb-4 text-sm">
              Pioneering managed farmlands for sustainable agriculture and profitable investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Farms Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Farms</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/farms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  All Farm Projects
                </Link>
              </li>
              <li>
                <Link to="/farms/bangalore-rural" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Bangalore Rural
                </Link>
              </li>
              <li>
                <Link to="/farms/mysore" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Mysore District
                </Link>
              </li>
              <li>
                <Link to="/farms/coorg" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Coorg Region
                </Link>
              </li>
              <li>
                <Link to="/farms/tumkur" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tumkur Area
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Media
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-300 mt-1 mr-3" />
                <p className="text-gray-300 text-sm">
                  {siteSettings.address}
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-300 mr-3" />
                <a href={`tel:+91${siteSettings.contactPhone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 {siteSettings.contactPhone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-300 mr-3" />
                <a href={`mailto:${siteSettings.contactEmail}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {siteSettings.contactEmail}
                </a>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="font-semibold text-sm text-white">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-green hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Get updates on farm projects and investment opportunities
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bharatvan. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Weather />
    </footer>
  );
};

export default NewFooter;