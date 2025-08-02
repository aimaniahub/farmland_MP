
import React, { useState } from 'react';
import { 
  Filter, 
  Image as ImageIcon,
  Video,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  src: string;
  type: 'image' | 'video';
  category: 'farms' | 'events' | 'produce';
}

interface GalleryData {
  title: string;
  description: string;
  galleryItems: GalleryItem[];
}

import galleryData from '../content/gallery.json';

const gallery = galleryData as GalleryData;

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'farms' | 'events' | 'produce'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = gallery.galleryItems;

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{gallery.title}</h1>
            <p className="text-xl text-green-100">
              {gallery.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('farms')}
              className={`px-6 py-2 rounded-full font-medium ${filter === 'farms' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Farms
            </button>
            <button
              onClick={() => setFilter('produce')}
              className={`px-6 py-2 rounded-full font-medium ${filter === 'produce' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Produce
            </button>
            <button
              onClick={() => setFilter('events')}
              className={`px-6 py-2 rounded-full font-medium ${filter === 'events' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => item.type === 'image' ? openLightbox(item.src) : null}
              >
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <Video className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.category === 'farms' ? 'bg-green-500 text-white' : item.category === 'produce' ? 'bg-orange-500 text-white' : 'bg-blue-500 text-white'}`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500 mb-4">Try selecting a different category</p>
              <button
                onClick={() => setFilter('all')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Show All Items
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-center">
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors mr-4">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[80vh] max-w-full"
              />
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors ml-4">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Photos CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-green-600 rounded-xl shadow-md p-6 mb-8 mx-4">
          <h2 className="text-3xl font-bold mb-4">Share Your Farm Experience</h2>
          <p className="text-xl text-green-100 mb-8">
            Are you a farm owner or visitor? Submit your photos to be featured in our gallery
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            <ImageIcon className="mr-2 h-5 w-5" />
            Submit Your Photos
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
