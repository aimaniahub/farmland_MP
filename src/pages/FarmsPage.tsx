import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Filter, 
  Search,
  ArrowRight,
  Calendar,
  Leaf,
  TrendingUp
} from 'lucide-react';
import { Farm } from '../App';

interface FarmsPageProps {
  onEnquiry: (farm?: Farm) => void;
}

const FarmsPage: React.FC<FarmsPageProps> = ({ onEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const farms: Farm[] = [
    {
      id: '1',
      name: 'Maamara Farms',
      location: 'Doddaballapur, Bangalore',
      proximity: '45 km from Bangalore',
      startingPrice: 1250000,
      plotSizes: ['1 Acre', '2 Acres', '5 Acres'],
      availableUnits: 63,
      totalUnits: 100,
      status: 'ongoing',
      description: 'Premium managed farmland with organic farming practices and modern amenities',
      images: ['https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg'],
      features: ['Organic Certification', 'Drip Irrigation', '24/7 Security', 'Farm-to-Table'],
      amenities: ['Clubhouse', 'Guest House', 'Farm Store', 'Conference Hall'],
      cropTypes: ['Mango', 'Coconut', 'Vegetables', 'Spices'],
      area: '100 Acres',
      paymentPlans: ['Full Payment', '12 Month EMI', '24 Month EMI']
    },
    {
      id: '2',
      name: 'Eco Habitat Farms',
      location: 'Kanakapura, Bangalore',
      proximity: '60 km from Bangalore',
      startingPrice: 950000,
      plotSizes: ['1 Acre', '3 Acres'],
      availableUnits: 28,
      totalUnits: 80,
      status: 'ongoing',
      description: 'Sustainable farmland with permaculture design and natural water bodies',
      images: ['https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'],
      features: ['Permaculture Design', 'Natural Water Bodies', 'Biodiversity', 'Solar Power'],
      amenities: ['Eco Lodge', 'Organic Store', 'Workshop Area', 'Meditation Garden'],
      cropTypes: ['Mixed Fruits', 'Spices', 'Medicinal Plants', 'Timber'],
      area: '80 Acres',
      paymentPlans: ['Full Payment', '18 Month EMI']
    },
    {
      id: '3',
      name: 'Green Valley Estates',
      location: 'Chikkaballapur, Karnataka',
      proximity: '70 km from Bangalore',
      startingPrice: 800000,
      plotSizes: ['2 Acres', '4 Acres'],
      availableUnits: 15,
      totalUnits: 50,
      status: 'upcoming',
      description: 'Upcoming premium farmland project with modern amenities and smart farming',
      images: ['https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'],
      features: ['Modern Infrastructure', 'Smart Irrigation', 'Solar Power', 'IoT Monitoring'],
      amenities: ['Resort Style Clubhouse', 'Swimming Pool', 'Spa', 'Restaurant'],
      cropTypes: ['Grapes', 'Pomegranate', 'Citrus', 'Avocado'],
      area: '120 Acres',
      paymentPlans: ['Pre-launch Offer', '36 Month EMI']
    },
    {
      id: '4',
      name: 'Sunrise Organic Farms',
      location: 'Tumkur, Karnataka',
      proximity: '80 km from Bangalore',
      startingPrice: 750000,
      plotSizes: ['1 Acre', '2 Acres', '3 Acres'],
      availableUnits: 45,
      totalUnits: 75,
      status: 'ongoing',
      description: 'Certified organic farmland with focus on sustainable agriculture',
      images: ['https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'],
      features: ['Organic Certification', 'Rainwater Harvesting', 'Composting Unit', 'Bee Keeping'],
      amenities: ['Farm Stay', 'Organic Kitchen', 'Library', 'Yoga Deck'],
      cropTypes: ['Organic Vegetables', 'Herbs', 'Flowers', 'Grains'],
      area: '75 Acres',
      paymentPlans: ['Full Payment', '15 Month EMI', '30 Month EMI']
    },
    {
      id: '5',
      name: 'Heritage Farms',
      location: 'Mysore, Karnataka',
      proximity: '150 km from Bangalore',
      startingPrice: 650000,
      plotSizes: ['2 Acres', '5 Acres'],
      availableUnits: 0,
      totalUnits: 60,
      status: 'sold-out',
      description: 'Traditional farming methods combined with modern technology',
      images: ['https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg'],
      features: ['Heritage Varieties', 'Traditional Methods', 'Modern Tech', 'Water Conservation'],
      amenities: ['Heritage Museum', 'Traditional Kitchen', 'Bullock Cart Rides', 'Folk Performances'],
      cropTypes: ['Traditional Rice', 'Millets', 'Pulses', 'Oilseeds'],
      area: '150 Acres',
      paymentPlans: ['Sold Out']
    },
    {
      id: '6',
      name: 'Blueberry Hills',
      location: 'Coorg, Karnataka',
      proximity: '250 km from Bangalore',
      startingPrice: 1500000,
      plotSizes: ['1 Acre', '2 Acres'],
      availableUnits: 20,
      totalUnits: 40,
      status: 'ongoing',
      description: 'Premium hill station farmland specializing in exotic fruits and coffee',
      images: ['https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'],
      features: ['Hill Station Climate', 'Exotic Fruits', 'Coffee Plantation', 'Scenic Views'],
      amenities: ['Mountain Resort', 'Coffee Tasting Room', 'Trekking Trails', 'Bird Watching'],
      cropTypes: ['Coffee', 'Blueberries', 'Strawberries', 'Pepper'],
      area: '40 Acres',
      paymentPlans: ['Full Payment', '24 Month EMI']
    }
  ];

  const filteredFarms = farms.filter(farm => {
    const matchesSearch = farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         farm.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || farm.status === selectedStatus;
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'under-10' && farm.startingPrice < 1000000) ||
                        (selectedPriceRange === '10-15' && farm.startingPrice >= 1000000 && farm.startingPrice < 1500000) ||
                        (selectedPriceRange === 'above-15' && farm.startingPrice >= 1500000);
    const matchesLocation = selectedLocation === 'all' || farm.location.includes(selectedLocation);
    
    return matchesSearch && matchesStatus && matchesPrice && matchesLocation;
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-primary-200 text-sm font-medium">🌱 OUR FARMS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Premium Farm Projects</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
            Discover our curated collection of premium managed farmlands across Karnataka, 
            each offering unique investment opportunities with sustainable practices.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search farms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="ongoing">Available Now</option>
              <option value="upcoming">Coming Soon</option>
              <option value="sold-out">Sold Out</option>
            </select>
            
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under-10">Under ₹10L</option>
              <option value="10-15">₹10L - ₹15L</option>
              <option value="above-15">Above ₹15L</option>
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              <option value="Bangalore">Near Bangalore</option>
              <option value="Mysore">Mysore</option>
              <option value="Coorg">Coorg</option>
              <option value="Tumkur">Tumkur</option>
            </select>
            
            <button className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Farm Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-100 rounded-xl p-6 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Projects</h3>
              <p className="text-gray-600 mb-4">Ready for immediate investment with active farming operations</p>
              <div className="text-2xl font-bold text-green-600">
                {farms.filter(f => f.status === 'ongoing').length} Projects
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-xl p-6 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Upcoming Projects</h3>
              <p className="text-gray-600 mb-4">Pre-launch opportunities with special pricing</p>
              <div className="text-2xl font-bold text-blue-600">
                {farms.filter(f => f.status === 'upcoming').length} Projects
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-6 text-center">
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
          <div className="mb-8 bg-white rounded-xl shadow-md p-6 mb-8 mx-4">
            <p className="text-gray-600">
              Showing {filteredFarms.length} of {farms.length} farm projects
            </p>
          </div>

          {/* Farm Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFarms.map((farm) => (
              <div key={farm.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${farm.images[0]})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(farm.status)}`}>
                      {getStatusText(farm.status)}
                    </span>
                  </div>
                  {farm.availableUnits > 0 && farm.availableUnits < 20 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Limited Units!
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{farm.name}</h3>
                  <p className="text-gray-600 flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farm.proximity}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">{farm.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        ₹{(farm.startingPrice / 100000).toFixed(1)}L
                      </p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                    {farm.status !== 'sold-out' && (
                      <div className="text-right">
                        <p className="text-sm text-orange-600 font-medium">
                          {farm.availableUnits} units left
                        </p>
                        <p className="text-xs text-gray-500">
                          of {farm.totalUnits} total
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {farm.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/farms/${farm.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                    >
                      View Details
                    </Link>
                    {farm.status !== 'sold-out' && (
                      <button
                        onClick={() => onEnquiry(farm)}
                        className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Enquire Now
                      </button>
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
