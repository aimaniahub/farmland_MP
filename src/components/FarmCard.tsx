import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronLeft, ChevronRight, Leaf, Maximize, TrendingUp } from 'lucide-react';
import { Farm } from '../App';

interface FarmCardProps {
  farm: Farm;
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % farm.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + farm.images.length) % farm.images.length);
  };

  return (
    <div className="bg-white-background rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform flex flex-col h-full">
      <div className="relative h-48 sm:h-64">
        <img
          src={farm.images[currentImage]}
          alt={`${farm.name} - image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {farm.images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-dark-text hover:bg-white transition">
              <ChevronLeft size={16} className="sm:h-5 sm:w-5" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-dark-text hover:bg-white transition">
              <ChevronRight size={16} className="sm:h-5 sm:w-5" />
            </button>
          </>
        )}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <span className="bg-accent text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md">
            {farm.status}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark-text mb-2">
          {farm.name}
        </h3>
        
        <div className="flex items-center text-subtle-text mb-3 sm:mb-4">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-primary" />
          <span className="text-sm sm:text-base">{farm.proximity}</span>
        </div>

        <div className="space-y-2 sm:space-y-3 text-subtle-text flex-grow">
          <div className="flex items-center">
            <Leaf size={16} className="mr-2 sm:mr-3 text-primary sm:h-[18px] sm:w-[18px]"/>
            <span className="text-sm sm:text-base truncate">Crops: {farm.cropTypes.join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Maximize size={16} className="mr-2 sm:mr-3 text-primary sm:h-[18px] sm:w-[18px]"/>
            <span className="text-sm sm:text-base">Area: {farm.area}</span>
          </div>
          <div className="flex items-center">
            <TrendingUp size={16} className="mr-2 sm:mr-3 text-primary sm:h-[18px] sm:w-[18px]"/>
            <span className="text-sm sm:text-base">{farm.availableUnits} of {farm.totalUnits} units available</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs sm:text-sm text-subtle-text">Starting from</p>
            <p className="text-xl sm:text-2xl font-heading font-bold text-primary">
              ₹{(farm.startingPrice / 100000).toFixed(1)}L
            </p>
          </div>
          <Link
            to={`/farms/${farm.id}`}
            className="bg-primary text-white font-bold text-sm sm:text-base py-2 px-4 sm:px-5 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;