import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sprout,
  Phone,
  Mail
} from 'lucide-react';

interface NavbarProps {
  onEnquiry?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnquiry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/farms', label: 'Our Farms' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@farmland.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={`text-2xl font-heading font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Earth Foundation</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`font-medium transition-colors relative ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-gray-200'
                  } ${
                    location.pathname === to 
                      ? 'text-primary-600' 
                      : ''
                  }`}
                >
                  {label}
                  {location.pathname === to && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"></div>
                  )}
                </Link>
              ))}
              <button
                onClick={onEnquiry}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg' 
                    : 'bg-white text-primary-600 hover:bg-gray-100'
                }`}
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isScrolled ? 'text-gray-700' : 'text-white'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block py-2 px-3 rounded-lg font-medium transition-colors ${
                    location.pathname === to 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onEnquiry?.();
                  setIsMenuOpen(false);
                }}
                className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
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
