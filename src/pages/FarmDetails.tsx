import React, { useEffect, useMemo, useState } from 'react';
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
  Phone,
  Droplet,
  Sun,
  Factory,
  FileText
} from 'lucide-react';
import { Farm } from '../App';
import farmsData from '../content/farms.json';
import farmDetailsData from '../content/farm-details.json';
type Details = typeof farmDetailsData extends { farmDetails: infer T } ? T : Record<string, unknown>;
const DETAILS: Record<string, any> = (farmDetailsData as any).farmDetails || {};

const infraIconMap: Record<string, React.FC<any>> = {
  Leaf,
  Home,
  Droplet,
  Sun,
  Factory,
  FileText,
  Check,
};


interface FarmDetailsProps {
  onEnquiry: (farm: Farm) => void;
}

const FarmDetails: React.FC<FarmDetailsProps> = ({ onEnquiry }) => {
  const { id } = useParams<{ id: string }>();
  const [farm, setFarm] = useState<Farm | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery' | 'infrastructure' | 'legal' | 'location'>('overview');
  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const details = useMemo(() => (id ? DETAILS[id] : null), [id]);
  const galleryItems = useMemo(() => {
    const items = (details?.gallery || farm?.images || []) as any[];
    return items.map((it: any, i: number) =>
      typeof it === 'string' ? { src: it, caption: `${farm?.name || 'Image'} ${i + 1}` } : it
    );
  }, [details, farm]);

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

        <div className="relative h-full flex flex-col justify-end p-3 sm:p-6 md:p-12">
          {/* Back button positioned at bottom left to avoid navbar collision */}
          <div className="absolute top-20 sm:top-24 left-3 sm:left-6 md:left-12 z-30">
            <Link
              to="/farms"
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-lg hover:bg-white transition-all duration-300 font-medium text-sm sm:text-base shadow-lg border border-white/30"
            >
              <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
              <span className="hidden xs:inline">Back to Farms</span>
              <span className="xs:hidden">Back</span>
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
      <section className="bg-white shadow-md sticky top-0 z-10 tab-container">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'features' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
            >
              Features & Amenities
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'gallery' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'infrastructure' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'legal' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
            >
              Legal & Documentation
            </button>

            <button
              onClick={() => setActiveTab('location')}
              className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${activeTab === 'location' ? 'text-green-600 border-b-2 border-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`}
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
                <div className="space-y-8">
                  {/* About Section */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About {farm.name}</h2>
                    <p className="text-gray-600 mb-6">{DETAILS[id!]?.detailedDescription || farm.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Farm Details</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Total Area:</span>
                            <span className="font-medium">{DETAILS[id!]?.overview?.totalAcres || farm.area}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Plot Size:</span>
                            <span className="font-medium">{DETAILS[id!]?.overview?.plotSize || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Soil Type:</span>
                            <span className="font-medium">{DETAILS[id!]?.overview?.soilType || DETAILS[id!]?.soilAnalysis?.type || 'N/A'}</span>
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
                  </div>

                  {/* Crop Calculation Section */}
                  {DETAILS[id!]?.overview?.cropCalculation && (
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Per Plot Crop Analysis</h3>
                      <p className="text-gray-600 mb-6">Per plot of {DETAILS[id!]?.overview?.plotSize} consists of:</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {DETAILS[id!]?.overview?.cropCalculation?.map((crop: any, index: number) => (
                          <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                            <div className="flex items-center mb-4">
                              <img
                                src={crop.image}
                                alt={crop.crop}
                                className="w-16 h-16 rounded-lg object-cover mr-4"
                              />
                              <div>
                                <h4 className="text-lg font-bold text-gray-800">{crop.crop}</h4>
                                <p className="text-sm text-gray-600">Calculation: {crop.calculation}</p>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="text-2xl font-bold text-green-600">
                                ₹{crop.total.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-500">
                                {crop.quantity} × {crop.pricePerUnit} × {crop.multiplier}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Total Calculation */}
                      <div className="mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg">
                        <h4 className="text-xl font-bold mb-2">Total Estimated Value</h4>
                        <div className="text-3xl font-bold">
                          ₹{DETAILS[id!]?.overview?.cropCalculation?.reduce((total: number, crop: any) => total + crop.total, 0).toLocaleString()}
                        </div>
                        <p className="text-green-100 mt-2">Combined value from all crops per plot</p>
                      </div>
                    </div>
                  )}

                  {/* Plot Layout */}
                  {DETAILS[id!]?.overview?.locationImage && (
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Plot Layout</h3>
                      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
                        <img
                          src={DETAILS[id!]?.overview?.locationImage}
                          alt="Plot Layout"
                          className="plot-image w-full h-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Payment Plans */}
                  <div className="bg-white rounded-xl shadow-md p-6">
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

              {activeTab === 'infrastructure' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Infrastructure</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(DETAILS[id!]?.infrastructure || []).map((item: any, i: number) => {
                      const Icon = infraIconMap[item.icon] || Check;
                      return (
                        <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Icon className="h-5 w-5 text-green-600 mr-3" />
                          <span>{item.label || item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'legal' && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal & Documentation</h2>
                  <ul className="space-y-2">
                    {(DETAILS[id!]?.legal || ['Clear Title', '100% Vastu Compliant', 'Hassle-free Registration']).map((item: string, i: number) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
                    {galleryItems.map((item, index) => (
                      <button key={index} onClick={() => setLightboxIndex(index)} className="group text-left rounded-lg overflow-hidden">
                        <img
                          src={item.src}
                          alt={`${farm.name} - Image ${index + 1}`}
                          className="w-full h-64 object-cover group-hover:opacity-90 transition"
                        />
                        {item.caption && <div className="p-2 text-sm text-gray-600 bg-gray-50">{item.caption}</div>}
                      </button>
                    ))}
                    {galleryItems.length === 0 && (
                      <div className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center h-64">
                        <div className="text-center">
                          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-500">More images coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {lightboxIndex !== null && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
                      <img src={galleryItems[lightboxIndex].src} alt={galleryItems[lightboxIndex].caption} className="max-h-[85vh] max-w-full" />
                    </div>
                  )}
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

                  {/* Map */}
                  <div className="rounded-lg overflow-hidden h-80 mb-6">
                    <iframe
                      title="Farm Location"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(details?.location?.lat || 12.97)},${encodeURIComponent(details?.location?.lng || 77.59)}&z=12&output=embed`}
                    />
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
              <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 sticky top-20 sm:top-24 compact-card">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 compact-text">Interested in this farm?</h3>

                <div className="mb-4 sm:mb-6">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                    {farm.startingPrice && !isNaN(Number(farm.startingPrice))
                      ? `₹${(Number(farm.startingPrice) / 100000).toFixed(1)}L`
                      : 'Updating soon'}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">Starting Price</p>
                </div>

                {farm.status !== 'sold-out' && (
                  <div className="mb-4 sm:mb-6">
                    <p className="text-orange-600 font-medium text-sm sm:text-base">
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
