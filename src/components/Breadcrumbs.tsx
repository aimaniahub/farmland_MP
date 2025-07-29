import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  showHomeIcon = true,
}) => {
  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-primary-600 transition-colors flex items-center"
            aria-label="Home"
          >
            {showHomeIcon ? (
              <Home className="h-4 w-4" />
            ) : (
              'Home'
            )}
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
              
              {isLast || !item.path ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;