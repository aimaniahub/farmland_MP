import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X,
} from 'lucide-react';
import Logo from '/logo.svg';
import Weather from './Weather';

interface NavbarProps {
  onEnquiry?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnquiry }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sandalwood', label: 'Sandalwood' },
    { to: '/about', label: 'About Us' },
    { to: '/farms', label: 'Our Farms' },
    { to: '/why-managed-farmland', label: 'Why Managed Farmland' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-1 sm:py-2 rounded-b-xl sm:rounded-b-2xl' : 'bg-transparent py-0'}`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center min-h-[56px] sm:min-h-[64px]">
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-2 px-2 sm:py-3 sm:px-4 group touch-target">
              <div className="relative overflow-hidden rounded-full p-1 bg-white/60 transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-md">
                <img src={Logo} alt="Bharatvan Logo" className="h-10 sm:h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
              <span className={`text-lg sm:text-xl md:text-2xl font-heading font-bold transition-colors duration-300 ml-2 sm:ml-4 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Bharatvan</span>
            </Link>
            <div className={`md:hidden ml-4 text-xs ${isScrolled ? 'text-green-800' : 'text-white'}`}>
              <Weather />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-grow justify-center">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-tab ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-white'
                } ${
                  location.pathname === to 
                    ? isScrolled ? 'nav-tab-active' : 'text-white bg-white/10'
                    : ''
                }`}
              >
                <span className="relative z-10">{label}</span>
                <span className={`absolute inset-0 bg-primary-500/10 rounded-lg scale-0 transition-transform duration-300 ease-out ${
                  location.pathname === to ? 'scale-100' : 'group-hover:scale-100'
                }`}></span>
              </Link>
            ))}
            <button
              onClick={onEnquiry}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden ${
                isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-white text-primary-600 hover:bg-gray-100'
              }`}
            >
              <span className="relative z-10">Enquire Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <div className={`ml-4 text-xs ${isScrolled ? 'text-green-800' : 'text-white'}`}>
              <Weather />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-all duration-300 p-2 sm:p-3 rounded-lg touch-target min-h-[44px] min-w-[44px] flex items-center justify-center ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-gradient-to-b from-green-50 to-green-100 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-green-200">
          <h2 className="text-lg font-bold text-green-800">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-green-200"
          >
            <X className="h-6 w-6 text-green-800" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          {navLinks.map(({ to, label }, index) => (
            <Link
              key={to}
              to={to}
              className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === to
                  ? 'text-white bg-green-600 shadow-md'
                  : 'text-green-800 hover:bg-green-200'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                onEnquiry?.();
                setIsMenuOpen(false);
              }}
              className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
