import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sprout
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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

  const navClass = isScrolled || isMenuOpen
    ? 'scrolled'
    : '';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className={`h-8 w-8 ${isScrolled ? 'text-[color:var(--primary-green)]' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-[color:var(--dark-text)]' : 'text-white'}`}>Farmland</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition-colors ${isScrolled ? 'text-[color:var(--dark-text)] hover:text-[color:var(--primary-green)]' : 'text-white hover:text-gray-200'} ${
                  location.pathname === to ? 'text-[color:var(--primary-green)] border-b-2 border-[color:var(--primary-green)]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[color:var(--primary-green)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-[color:var(--dark-text)]' : 'text-white'}
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
                className={`block px-3 py-2 text-[color:var(--dark-text)] hover:text-[color:var(--primary-green)] font-medium ${
                  location.pathname === to ? 'text-[color:var(--primary-green)] bg-gray-100' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="w-full text-center block mt-2 px-3 py-3 bg-[color:var(--primary-green)] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;