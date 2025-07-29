import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  categoryName?: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, categoryName, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 ${className}`}>
      <div className="relative h-60 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        {categoryName && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {categoryName}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">By {post.author}</span>
          <Link 
            to={`/blog/${post.id}`}
            className="text-green-600 hover:text-green-700 font-medium flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;