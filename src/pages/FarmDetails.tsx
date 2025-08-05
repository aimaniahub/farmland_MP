import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  ArrowLeft, 
  Calendar, 
  Leaf, 
  Home,
  Check,
  ChevronRight,
  Image as ImageIcon,
  Phone
} from 'lucide-react';
import { Farm } from '../App';
import farmsData from '../content/farms.json';

interface FarmDetailsProps {
  onEnquiry: (farm: Farm) => void;
}

const FarmDetails: React.FC<FarmDetailsProps> = ({ onEnquiry }) => {
  const { id } = useParams<{ id: string }>();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery' | 'location'>('overview');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const farms: Farm[] = farmsData.farms;
    const foundFarm = farms.find(f => f.id === id);
    setFarm(foundFarm || null);
    setLoading(false);
  }, [id]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-500 text-white';
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!farm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Farm Not Found</h2>
        <p className="text-gray-600 mb-6">The farm you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/farms"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Farms
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${farm.images[0]})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
          <div>
            <Link
              to="/farms"
              className="inline-flex items-center px-4 py-2 bg-white bg-opacity-90 text-gray-800 rounded-lg hover:bg-opacity-100 transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Farms
            </Link>
          </div>
          
          <div className="text-white">
            <div className="mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(farm.status)}`}>
                {getStatusText(farm.status)}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{farm.name}</h1>
            <p className="text-xl flex items-center text-gray-200">
              <MapPin className="h-5 w-5 mr-1" />
              {farm.proximity}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'features' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Features & Amenities
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'gallery' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'location' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}
            >
              Location
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About {farm.name}</h2>
                  <p className="text-gray-600 mb-6">{farm.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Farm Details</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Total Area:</span>
                          <span className="font-medium">{farm.area}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Available Units:</span>
                          <span className="font-medium">{farm.availableUnits} of {farm.totalUnits}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(farm.status)}`}>
                            {getStatusText(farm.status)}
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Plans</h3>
                    <ul className="space-y-2">
                      {farm.paymentPlans.map((plan, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Features & Amenities</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Farm Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {farm.features.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Leaf className="h-5 w-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {farm.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Home className="h-5 w-5 text-green-500 mr-3" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'gallery' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Farm Gallery</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {farm.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${farm.name} - Image ${index + 1}`} 
                          className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                        />
                      </div>
                    ))}
                    
                    {/* Placeholder for more images */}
                    <div className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center h-64">
                      <div className="text-center">
                        <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">More images coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'location' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Location</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Address</h3>
                    <p className="text-gray-600">{farm.location}</p>
                    <p className="text-gray-600">{farm.proximity}</p>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Map view coming soon</p>
                      <p className="text-sm text-gray-400">Exact location will be shared upon enquiry</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Nearby Landmarks</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                        <span>15 minutes from {farm.location.split(',')[0]} Town</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                        <span>45 minutes from nearest Airport</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                        <span>10 minutes from National Highway</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Sidebar */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interested in this farm?</h3>
                
                <div className="mb-6">
                  <p className="text-3xl font-bold text-green-600 mb-1">
                    ₹{(farm.startingPrice / 100000).toFixed(1)}L
                  </p>
                  <p className="text-gray-600">Starting Price</p>
                </div>
                
                {farm.status !== 'sold-out' && (
                  <div className="mb-6">
                    <p className="text-orange-600 font-medium">
                      Only {farm.availableUnits} units left out of {farm.totalUnits}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(farm.availableUnits / farm.totalUnits) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => onEnquiry(farm)}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                  >
                    Enquire Now
                  </button>
                  
                  <button
                    className="w-full bg-white border border-green-600 text-green-600 py-3 px-4 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Site Visit
                  </button>
                </div>
                
                <div className="text-center text-gray-600 text-sm">
                  <p>Need help? Contact our farm experts</p>
                  <p className="font-medium text-gray-800 mt-1 flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-1" />
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Farms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md p-6 mb-8 mx-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Farms You May Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would typically be filtered to show related farms */}
            {/* For now, just showing a placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Related farm image</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Similar Farm Project</h3>
                <p className="text-gray-600 text-sm mb-2">Near {farm.location}</p>
                <Link
                  to="/farms"
                  className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmDetails;
