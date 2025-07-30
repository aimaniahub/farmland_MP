import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface MasonryGalleryProps {
  images: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  columns?: number;
  gap?: number;
  className?: string;
  lightboxEnabled?: boolean;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  columns = 3,
  gap = 16,
  className = '',
  lightboxEnabled = true,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [columnCount, setColumnCount] = useState(columns);

  // Responsive column count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 768) {
        setColumnCount(2);
      } else {
        setColumnCount(columns);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  // Distribute images into columns
  const getColumns = () => {
    const cols: typeof images[] = Array.from({ length: columnCount }, () => []);
    
    images.forEach((image, i) => {
      cols[i % columnCount].push(image);
    });
    
    return cols;
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToNext, goToPrevious]);

  return (
    <>
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(columnCount, 4)} ${className}`}
        style={{ gap: `${gap}px` }}
      >
        {getColumns().map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-4">
            {column.map((image, imgIndex) => {
              const index = colIndex + imgIndex * columnCount;
              return (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg group"
                  style={{ marginBottom: `${gap}px` }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt || `Gallery image ${index + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {lightboxEnabled && (
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ZoomIn className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxEnabled && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute left-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt || `Gallery image ${currentImageIndex + 1}`} 
              className="max-w-full max-h-[90vh] mx-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white py-2 bg-black bg-opacity-50">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          
          <button 
            className="absolute right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </>
  );
};

export default MasonryGallery;