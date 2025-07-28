import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  MapPin, 
  Calendar, 
  Package, 
  Cloud, 
  ShoppingBag, 
  User, 
  Settings,
  LogIn,
  LogOut,
  Sprout
} from 'lucide-react';
import { User as UserType } from '../App';

interface NavbarProps {
  user: UserType | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogin, onLogout }) => {
  const location = useLocation();

  const publicLinks = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: ShoppingBag, label: 'Products' },
    { to: '/weather', icon: Cloud, label: 'Weather' },
  ];

  const farmerLinks = [
    { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { to: '/fields', icon: MapPin, label: 'Fields' },
    { to: '/tasks', icon: Calendar, label: 'Tasks' },
    { to: '/inventory', icon: Package, label: 'Inventory' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin', icon: Settings, label: 'Admin Panel' },
  ];

  const getNavLinks = () => {
    if (!user) return publicLinks;
    
    const links = [...publicLinks];
    
    if (user.role === 'farmer') {
      links.splice(1, 0, ...farmerLinks);
    }
    
    if (user.role === 'admin') {
      links.push(...adminLinks);
    }
    
    return links;
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">FarmFlow</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {getNavLinks().map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === to
                    ? 'bg-green-100 text-green-700 shadow-sm'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-800">{user.name}</p>
                  <p className="text-gray-500 capitalize">{user.role}</p>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center space-x-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 py-3 space-y-1 bg-gray-50">
          {getNavLinks().map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                location.pathname === to
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;