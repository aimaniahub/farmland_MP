import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Info, X } from 'lucide-react';

interface Plot {
  id: string;
  coordinates: string; // SVG polygon points
  status: 'available' | 'sold' | 'reserved';
  plotNumber: string;
  size: string; // in acres or square meters
  price: number;
}

interface FarmLayoutPlanProps {
  layoutImage: string; // Background image of the layout
  plots: Plot[];
  onPlotClick?: (plot: Plot) => void;
}

const FarmLayoutPlan: React.FC<FarmLayoutPlanProps> = ({
  layoutImage,
  plots,
  onPlotClick,
}) => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const getStatusColor = (status: Plot['status']) => {
    switch (status) {
      case 'available':
        return 'fill-primary-500 fill-opacity-40 hover:fill-opacity-60';
      case 'sold':
        return 'fill-red-500 fill-opacity-40';
      case 'reserved':
        return 'fill-amber-500 fill-opacity-40';
      default:
        return 'fill-gray-500 fill-opacity-40';
    }
  };

  const handlePlotClick = (plot: Plot) => {
    setSelectedPlot(plot);
    if (onPlotClick) {
      onPlotClick(plot);
    }
  };

  const zoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(prev => prev + 0.2);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(prev => prev - 0.2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <button 
          onClick={zoomIn}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-5 w-5 text-gray-700" />
        </button>
        <button 
          onClick={zoomOut}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md">
        <div className="text-sm font-medium mb-2">Plot Status</div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-500 bg-opacity-40 mr-2"></div>
            <span className="text-xs">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 bg-opacity-40 mr-2"></div>
            <span className="text-xs">Sold</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-amber-500 bg-opacity-40 mr-2"></div>
            <span className="text-xs">Reserved</span>
          </div>
        </div>
      </div>

      {/* SVG Map */}
      <div 
        className="relative overflow-hidden cursor-move"
        style={{ height: '500px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            transformOrigin: '0 0',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          <img 
            src={layoutImage} 
            alt="Farm Layout" 
            className="max-w-none"
          />
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 1000" // Adjust based on your layout image
            preserveAspectRatio="none"
          >
            {plots.map((plot) => (
              <g key={plot.id} className="pointer-events-auto">
                <polygon 
                  points={plot.coordinates}
                  className={`stroke-gray-800 stroke-1 ${getStatusColor(plot.status)} transition-colors duration-200 cursor-pointer`}
                  onClick={() => handlePlotClick(plot)}
                />
                <text 
                  x={plot.coordinates.split(' ')[0].split(',')[0]} 
                  y={plot.coordinates.split(' ')[0].split(',')[1]}
                  className="text-xs font-medium fill-gray-800 pointer-events-none"
                  textAnchor="middle"
                  dy="0.3em"
                >
                  {plot.plotNumber}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Selected Plot Info */}
      {selectedPlot && (
        <div className="absolute bottom-4 right-4 z-10 bg-white p-4 rounded-lg shadow-md max-w-xs">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Plot {selectedPlot.plotNumber}</h4>
            <button 
              onClick={() => setSelectedPlot(null)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close plot info"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 space-y-1 text-sm">
            <p><span className="font-medium">Size:</span> {selectedPlot.size}</p>
            <p><span className="font-medium">Price:</span> ${selectedPlot.price.toLocaleString()}</p>
            <p>
              <span className="font-medium">Status:</span> 
              <span className={`ml-1 ${selectedPlot.status === 'available' ? 'text-primary-600' : selectedPlot.status === 'sold' ? 'text-red-600' : 'text-amber-600'}`}>
                {selectedPlot.status.charAt(0).toUpperCase() + selectedPlot.status.slice(1)}
              </span>
            </p>
          </div>
          {selectedPlot.status === 'available' && (
            <button 
              className="mt-3 w-full py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
              onClick={() => onPlotClick && onPlotClick(selectedPlot)}
            >
              Enquire About This Plot
            </button>
          )}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-md flex items-center">
        <Info className="h-4 w-4 text-gray-600 mr-1" />
        <span className="text-xs text-gray-600">Click on a plot for details</span>
      </div>
    </div>
  );
};

export default FarmLayoutPlan;