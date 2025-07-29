import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: 'farm' | 'landmark' | 'office';
  description?: string;
}

interface MapWithMarkersProps {
  locations: Location[];
  centerLatitude: number;
  centerLongitude: number;
  zoom?: number;
  className?: string;
  height?: string;
  onMarkerClick?: (location: Location) => void;
}

const MapWithMarkers: React.FC<MapWithMarkersProps> = ({
  locations,
  // centerLatitude, centerLongitude, and zoom are defined in props but not used yet
  // They will be used when implementing actual map functionality
  className = '',
  height = '400px',
  onMarkerClick,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // This component is a placeholder for an actual map implementation
  // In a real application, you would integrate with Google Maps, Mapbox, Leaflet, etc.
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    if (onMarkerClick) {
      onMarkerClick(location);
    }
  };

  const getMarkerColor = (type: Location['type']) => {
    switch (type) {
      case 'farm':
        return 'bg-primary-500';
      case 'landmark':
        return 'bg-secondary-500';
      case 'office':
        return 'bg-earth-700';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`relative rounded-lg overflow-hidden border border-gray-200 ${className}`} style={{ height }}>
      {/* Map Placeholder */}
      <div 
        ref={mapRef}
        className="w-full h-full bg-gray-100 flex items-center justify-center"
      >
        {!mapLoaded ? (
          <div className="text-gray-500 flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-primary-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Loading map...</span>
          </div>
        ) : (
          <div className="w-full h-full relative bg-gray-200">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-earth-50 opacity-50">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bdbdbd' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px',
              }}></div>
            </div>

            {/* Map Grid Lines */}
            <div className="absolute inset-0">
              <div className="h-full w-full" style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}></div>
            </div>

            {/* Location Markers */}
            {locations.map((location) => (
              <div 
                key={location.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                style={{
                  // In a real implementation, these would be calculated based on map bounds
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                onClick={() => handleMarkerClick(location)}
              >
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${getMarkerColor(location.type)} shadow-md group-hover:scale-125 transition-transform duration-200`}></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="h-6 w-0.5 bg-gray-400 opacity-50"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="mt-6 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${getMarkerColor(selectedLocation.type)} mr-3 flex-shrink-0`}>
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedLocation.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedLocation.description || `Located at coordinates: ${selectedLocation.latitude.toFixed(4)}, ${selectedLocation.longitude.toFixed(4)}`}
                    </p>
                    <div className="mt-2">
                      <button 
                        className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                        onClick={() => window.open(`https://maps.google.com/?q=${selectedLocation.latitude},${selectedLocation.longitude}`, '_blank')}
                      >
                        View on Google Maps
                      </button>
                    </div>
                  </div>
                  <button 
                    className="ml-auto text-gray-400 hover:text-gray-600"
                    onClick={() => setSelectedLocation(null)}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              <button 
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => console.log('Zoom in')}
              >
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button 
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                onClick={() => console.log('Zoom out')}
              >
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Map Type Legend */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary-500 mr-1"></div>
            <span>Farms</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-secondary-500 mr-1"></div>
            <span>Landmarks</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-earth-700 mr-1"></div>
            <span>Offices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapWithMarkers;