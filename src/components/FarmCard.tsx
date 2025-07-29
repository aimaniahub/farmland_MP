import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Farm } from '../App';

interface FarmCardProps {
  farm: Farm;
  onEnquiry: (farm: Farm) => void;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, onEnquiry }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-primary-500 text-white';
      case 'upcoming': return 'bg-blue-500 text-white';
      case 'sold-out': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Available Now';
      case 'upcoming': return 'Coming Soon';
      case 'sold-out': return 'Sold Out';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-56">
        <img
          src={farm.images[0]}
          alt={farm.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(farm.status)}`}>
            {getStatusText(farm.status)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {farm.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1 text-primary-500" />
          <span>{farm.proximity}</span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Starting from</p>
          <p className="text-2xl font-bold text-primary-600">
            ₹{(farm.startingPrice / 100000).toFixed(1)}L
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {farm.cropTypes.slice(0, 3).map((crop, index) => (
            <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
              {crop}
            </span>
          ))}
          {farm.cropTypes.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{farm.cropTypes.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          <Link
            to={`/farms/${farm.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium group-hover:bg-primary-50 flex items-center justify-center"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <button
            onClick={() => onEnquiry(farm)}
            className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;