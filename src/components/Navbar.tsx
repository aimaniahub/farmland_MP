import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  Sprout
} from 'lucide-react';

interface NavbarProps {
  onEnquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnquiry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/farms', label: 'Farms' },
    { to: '/services', label: 'Services' },
    { to: '/media', label: 'Media' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@greenfarmlands.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🌱 Invest in Your Future - Own a Managed Farmland Today!</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">GreenFarmlands</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${
                    location.pathname === to ? 'text-green-600 border-b-2 border-green-600' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={onEnquiry}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block px-3 py-2 text-gray-700 hover:text-green-600 font-medium ${
                    location.pathname === to ? 'text-green-600 bg-green-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onEnquiry();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;