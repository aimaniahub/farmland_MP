import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  inStock: boolean;
  farmerId: string;
  farmerName: string;
}

const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      price: 3.99,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1546104710-d33130a98b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Fresh organic tomatoes grown without pesticides. Perfect for salads and cooking.',
      inStock: true,
      farmerId: 'f1',
      farmerName: 'Green Valley Farm',
    },
    {
      id: '2',
      name: 'Free-Range Eggs',
      category: 'Dairy & Eggs',
      price: 4.50,
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Farm fresh eggs from free-range chickens fed with organic feed.',
      inStock: true,
      farmerId: 'f2',
      farmerName: 'Sunny Meadow Farm',
    },
    {
      id: '3',
      name: 'Honey',
      category: 'Other',
      price: 8.99,
      unit: 'jar',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Raw, unfiltered honey harvested from local wildflower fields.',
      inStock: true,
      farmerId: 'f3',
      farmerName: 'Bee Haven Apiary',
    },
    {
      id: '4',
      name: 'Organic Apples',
      category: 'Fruits',
      price: 2.99,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Crisp and sweet organic apples. Perfect for snacking or baking.',
      inStock: true,
      farmerId: 'f1',
      farmerName: 'Green Valley Farm',
    },
    {
      id: '5',
      name: 'Fresh Milk',
      category: 'Dairy & Eggs',
      price: 3.50,
      unit: 'liter',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Fresh cow milk, pasteurized and bottled on the farm daily.',
      inStock: false,
      farmerId: 'f2',
      farmerName: 'Sunny Meadow Farm',
    },
    {
      id: '6',
      name: 'Organic Carrots',
      category: 'Vegetables',
      price: 2.49,
      unit: 'kg',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      description: 'Sweet and crunchy organic carrots, freshly harvested.',
      inStock: true,
      farmerId: 'f4',
      farmerName: 'Root & Leaf Farm',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Vegetables', 'Fruits', 'Dairy & Eggs', 'Other'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.farmerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Farm Products Marketplace</h1>
      
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
            <input
              type="text"
              id="search"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search by name, description, or farm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
            <select
              id="category"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <span className="text-lg font-bold text-green-700">${product.price.toFixed(2)}/{product.unit}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{product.farmerName}</p>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {product.category}
                  </span>
                  {!product.inStock && (
                    <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      Out of Stock
                    </span>
                  )}
                </div>
                <p className="mt-3 text-gray-600 text-sm">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button 
                    className={`px-4 py-2 rounded-md font-medium ${product.inStock 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Sold Out'}
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            <button 
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Featured Farms */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-green-800">Featured Farms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-green-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Green Valley Farm</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">Specializing in organic vegetables and fruits grown using sustainable farming practices.</p>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium">View Farm Profile →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-yellow-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Sunny Meadow Farm</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">Family-owned dairy farm producing high-quality milk, cheese, and free-range eggs.</p>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium">View Farm Profile →</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-amber-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Bee Haven Apiary</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">Dedicated to producing pure, raw honey and other bee products while supporting pollinator health.</p>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium">View Farm Profile →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;