import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Pagination from '../components/Pagination';
import AnimatedSection from '../components/AnimatedSection';
import SocialShare from '../components/SocialShare';
import BlogCard from '../components/BlogCard';
import BlogTabs from '../components/BlogTabs';
import BlogSearch from '../components/BlogSearch';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

const BLOG_CATEGORIES = [
  { id: 'all', name: 'All Posts' },
  { id: 'farming-tips', name: 'Farming Tips' },
  { id: 'investment', name: 'Investment' },
  { id: 'sustainability', name: 'Sustainability' },
  { id: 'success-stories', name: 'Success Stories' },
];

const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Crops for Profitable Farming in 2023',
    excerpt: 'Discover the most profitable crops to grow this year based on market trends and climate conditions.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Rajesh Kumar',
    date: 'June 15, 2023',
    category: 'farming-tips',
    tags: ['crops', 'profitability', 'market-trends'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'How Farm Plot Investment Changed My Retirement Plans',
    excerpt: 'A personal story of how investing in farmland provided financial security and peace of mind.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Priya Sharma',
    date: 'May 22, 2023',
    category: 'success-stories',
    tags: ['investment', 'retirement', 'personal-story'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Sustainable Farming Practices for Small Plot Owners',
    excerpt: 'Learn how to implement eco-friendly farming techniques that improve soil health and crop yield.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Arun Patel',
    date: 'April 10, 2023',
    category: 'sustainability',
    tags: ['sustainable', 'eco-friendly', 'soil-health'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'The Tax Benefits of Agricultural Land Investment',
    excerpt: 'A comprehensive guide to understanding the tax advantages of investing in farmland.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Vikram Malhotra',
    date: 'March 5, 2023',
    category: 'investment',
    tags: ['tax', 'investment', 'finance'],
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'Seasonal Guide to Farm Maintenance',
    excerpt: 'Month-by-month tasks to keep your farm plot in optimal condition throughout the year.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Neha Gupta',
    date: 'February 18, 2023',
    category: 'farming-tips',
    tags: ['maintenance', 'seasonal', 'farm-care'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '5 min read',
  },
  {
    id: '6',
    title: 'From Corporate Job to Farm Owner: My Journey',
    excerpt: 'The inspiring story of transitioning from a desk job to becoming a successful farm plot owner.',
    content: 'Lorem ipsum dolor sit amet...',
    author: 'Sanjay Mehta',
    date: 'January 30, 2023',
    category: 'success-stories',
    tags: ['career-change', 'personal-story', 'success'],
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80',
    readTime: '9 min read',
  },
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const location = useLocation();
  const postsPerPage = 4;

  // Parse URL query parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const query = searchParams.get('query');
    
    if (category) {
      setActiveCategory(category);
    }
    
    if (query) {
      setSearchQuery(query);
    }
  }, [location]);

  // Filter posts by active category and search query
  const filteredPosts = SAMPLE_BLOG_POSTS
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-64 md:h-80 bg-green-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80)',
            opacity: 0.3
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-70"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Farm Blog</h1>
          <p className="text-xl text-white max-w-2xl">Insights, tips, and stories from our farming community</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Blog', path: '/blog' }]} showHomeIcon />

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Blog Articles</h2>
          
          {/* Search Bar */}
          <BlogSearch 
            onSearch={(query) => {
              setSearchQuery(query);
              setCurrentPage(1); // Reset to first page when searching
            }}
            className="mb-6"
          />
          
          {/* Category Tabs */}
          <BlogTabs 
            categories={BLOG_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={(categoryId) => {
              setActiveCategory(categoryId);
              setCurrentPage(1); // Reset to first page when changing category
            }}
            className="mt-4"
          />
        </div>

        {/* Blog Posts Grid */}
        <AnimatedSection animation="fade-in" className="mt-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {currentPosts.map(post => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  categoryName={BLOG_CATEGORIES.find(cat => cat.id === post.category)?.name}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No articles found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `No articles matching "${searchQuery}" in ${activeCategory === 'all' ? 'all categories' : BLOG_CATEGORIES.find(cat => cat.id === activeCategory)?.name}` 
                  : `No articles found in ${BLOG_CATEGORIES.find(cat => cat.id === activeCategory)?.name}`}
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </AnimatedSection>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        )}

        {/* Newsletter Section */}
        <AnimatedSection animation="slide-up" className="mt-16 bg-green-50 rounded-xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">Get the latest farming tips, investment advice, and success stories delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Sharing */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Share this page:</p>
          <SocialShare 
            url={window.location.href} 
            title="Farm Blog - Earth Foundation" 
            description="Insights, tips, and stories from our farming community" 
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;