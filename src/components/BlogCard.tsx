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

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post, categoryName, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-[1.02] sm:hover:scale-105 border border-gray-100 ${className}`}>
      <div className="relative h-32 xs:h-36 sm:h-40 lg:h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        {categoryName && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm">
            {categoryName}
          </div>
        )}
      </div>
      <div className="p-2 xs:p-3 sm:p-4 lg:p-6 content-compact">
        <div className="flex items-center text-2xs xs:text-xs sm:text-sm text-gray-500 mb-1 sm:mb-1.5 content-dense">
          <span>{post.date}</span>
          <span className="mx-1">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-1.5 hover:text-green-600 transition-colors line-clamp-2 compact-text">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-2 sm:mb-3 text-2xs xs:text-xs sm:text-sm lg:text-base line-clamp-2 content-dense">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xs xs:text-xs sm:text-sm font-medium text-gray-700 truncate mr-2">By {post.author}</span>
          <Link
            to={`/blog/${post.id}`}
            className="text-green-600 hover:text-green-700 font-medium flex items-center text-2xs xs:text-xs sm:text-sm touch-target flex-shrink-0"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default BlogCard;