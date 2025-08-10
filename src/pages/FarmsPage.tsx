import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Search,
  ArrowRight,
  Calendar,
  Leaf,
  TrendingUp,
  Tractor
} from 'lucide-react';
import { Farm } from '../App';
import farmsData from '../content/farms.json';

interface FarmsPageProps {
  onEnquiry: (farm?: Farm) => void;
}

const FarmsPage: React.FC<FarmsPageProps> = ({ onEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const farms: Farm[] = farmsData.farms;

  const filteredFarms = farms.filter(farm => {
    const matchesSearch = farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         farm.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || farm.status === selectedStatus;
    const priceValue = parseInt(farm.startingPrice);
    const isNumber = !isNaN(priceValue);
    const matchesPrice = selectedPriceRange === 'all' ||
      (isNumber && (
        (selectedPriceRange === 'under-10' && priceValue < 1000000) ||
        (selectedPriceRange === '10-15' && priceValue >= 1000000 && priceValue < 1500000) ||
        (selectedPriceRange === 'above-15' && priceValue >= 1500000)
      ));
    const matchesLocation = selectedLocation === 'all' || farm.location.includes(selectedLocation);

    return matchesSearch && matchesStatus && matchesPrice && matchesLocation;
  });



  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Available Now';
      case 'upcoming': return 'Coming Soon';
      case 'sold-out': return 'Sold Out';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-primary-200 text-sm font-medium">🌱 OUR FARMS</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-white font-heading font-bold mb-6">Premium Farm Projects</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Discover our curated collection of premium managed farmlands across Karnataka, 
            each offering unique investment opportunities with sustainable practices.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search farms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Status Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'All', value: 'all' },
                    { label: 'Available', value: 'ongoing' },
                    { label: 'Upcoming', value: 'upcoming' },
                    { label: 'Sold Out', value: 'sold-out' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelectedStatus(opt.value)}
                      className={`px-3 py-2 rounded-full border transition text-sm ${selectedStatus === opt.value ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Under ₹10L', value: 'under-10' },
                    { label: '₹10L-₹15L', value: '10-15' },
                    { label: 'Above ₹15L', value: 'above-15' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelectedPriceRange(opt.value)}
                      className={`px-3 py-2 rounded-full border transition text-sm ${selectedPriceRange === opt.value ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Location</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'Bangalore', 'Mysore', 'Coorg', 'Tumkur'].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-3 py-2 rounded-full border transition text-sm ${selectedLocation === loc ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {loc === 'all' ? 'All Locations' : loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Categories */}
      <section className="py-12 bg-farm-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-100 rounded-xl p-6 text-center shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Projects</h3>
              <p className="text-gray-600 mb-4">Ready for immediate investment with active farming operations</p>
              <div className="text-2xl font-bold text-green-600">
                {farms.filter(f => f.status === 'ongoing').length} Projects
              </div>
            </div>

            <div className="bg-blue-100 rounded-xl p-6 text-center shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Upcoming Projects</h3>
              <p className="text-gray-600 mb-4">Pre-launch opportunities with special pricing</p>
              <div className="text-2xl font-bold text-blue-600">
                {farms.filter(f => f.status === 'upcoming').length} Projects
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sold Out Projects</h3>
              <p className="text-gray-600 mb-4">Successfully completed projects with satisfied investors</p>
              <div className="text-2xl font-bold text-gray-600">
                {farms.filter(f => f.status === 'sold-out').length} Projects
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 mx-4">
            <p className="text-gray-600">
              Showing {filteredFarms.length} of {farms.length} farm projects
            </p>
          </div>

          {/* Available Projects */}
          <h2 className="text-2xl font-heading font-bold mb-4">Available Projects</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {filteredFarms.filter(f => f.status === 'ongoing').map((farm) => (
              <div key={farm.id} className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105">
                <div className="relative h-32 xs:h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img src={farm.images[0]} alt={farm.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">{getStatusText(farm.status)}</span>
                  {farm.coordinates && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${farm.coordinates.lng}!3d${farm.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${farm.coordinates.lat.toFixed(6)}%2C${farm.coordinates.lng.toFixed(6)}!5e1!3m2!1sen!2sin!4v1234567890`}
                        width="120"
                        height="80"
                        style={{ border: 0, borderRadius: '6px' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${farm.name} Location`}
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-1 line-clamp-1">{farm.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center mb-2 sm:mb-3 line-clamp-1"><MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />{farm.proximity}</p>
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <div>
                      <p className="text-sm sm:text-lg md:text-2xl font-bold text-green-600">
                        {farm.startingPrice && !isNaN(parseInt(farm.startingPrice))
                          ? `₹${(parseInt(farm.startingPrice) / 100000).toFixed(1)}L`
                          : 'Updating soon'}
                      </p>
                      <p className="text-xs text-gray-500">Starting from</p>
                    </div>
                    <div className="flex gap-1 sm:gap-2 text-gray-500">
                      <Leaf className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <Tractor className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4 overflow-hidden">
                    {farm.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="px-1 sm:px-2 py-0.5 sm:py-1 bg-green-50 text-green-700 text-2xs sm:text-xs rounded-full line-clamp-1 flex-shrink-0">{feature}</span>
                    ))}
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <Link to={`/farms/${farm.id}`} className="flex-1 bg-gray-100 text-gray-700 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm text-center">View</Link>
                    <button onClick={() => onEnquiry(farm)} className="flex-1 bg-green-600 text-white py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl hover:bg-green-700 transition text-xs sm:text-sm">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Opportunities */}
          <h2 className="text-2xl font-heading font-bold mb-4">Upcoming Opportunities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {filteredFarms.filter(f => f.status !== 'ongoing').map((farm) => (
              <div key={farm.id} className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105">
                <div className="relative h-32 xs:h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img src={farm.images[0]} alt={farm.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${farm.status === 'sold-out' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}>{getStatusText(farm.status)}</span>
                  {farm.coordinates && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${farm.coordinates.lng}!3d${farm.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${farm.coordinates.lat.toFixed(6)}%2C${farm.coordinates.lng.toFixed(6)}!5e1!3m2!1sen!2sin!4v1234567890`}
                        width="120"
                        height="80"
                        style={{ border: 0, borderRadius: '6px' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${farm.name} Location`}
                      ></iframe>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 mb-1 line-clamp-1">{farm.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center mb-2 sm:mb-3 line-clamp-1"><MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />{farm.proximity}</p>
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <div>
                      <p className="text-sm sm:text-lg md:text-2xl font-bold text-green-600">
                        {farm.startingPrice && !isNaN(Number(farm.startingPrice))
                          ? `₹${(Number(farm.startingPrice) / 100000).toFixed(1)}L`
                          : 'Updating soon'}
                      </p>
                      <p className="text-xs text-gray-500">Starting from</p>
                    </div>
                    <div className="flex gap-1 sm:gap-2 text-gray-500">
                      <Leaf className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <Tractor className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4 overflow-hidden">
                    {farm.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="px-1 sm:px-2 py-0.5 sm:py-1 bg-green-50 text-green-700 text-2xs sm:text-xs rounded-full line-clamp-1 flex-shrink-0">{feature}</span>
                    ))}
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <Link to={`/farms/${farm.id}`} className="flex-1 bg-gray-100 text-gray-700 py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl hover:bg-gray-200 transition text-xs sm:text-sm text-center">View</Link>
                    {farm.status !== 'sold-out' && (
                      <button onClick={() => onEnquiry(farm)} className="flex-1 bg-green-600 text-white py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg sm:rounded-xl hover:bg-green-700 transition text-xs sm:text-sm">Enquire</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFarms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No farms found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedStatus('all');
                  setSelectedPriceRange('all');
                  setSelectedLocation('all');
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let us help you find the perfect farmland investment opportunity
          </p>
          <button
            onClick={() => onEnquiry(undefined)}
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FarmsPage;