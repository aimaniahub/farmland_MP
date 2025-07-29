import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import BlogCard from './BlogCard';

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

interface BlogFeaturedProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  viewAllLink?: string;
  className?: string;
}

const BlogFeatured: React.FC<BlogFeaturedProps> = ({
  posts,
  title = 'Featured Articles',
  subtitle = 'Latest insights and stories from our farming community',
  viewAllLink = '/blog',
  className = '',
}) => {
  // Get category names mapping
  const categoryNames: Record<string, string> = {
    'farming-tips': 'Farming Tips',
    'investment': 'Investment',
    'sustainability': 'Sustainability',
    'success-stories': 'Success Stories',
  };

  return (
    <div className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                categoryName={categoryNames[post.category]}
              />
            ))}
          </div>
        </AnimatedSection>

        {viewAllLink && (
          <div className="mt-12 text-center">
            <Link
              to={viewAllLink}
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
            >
              View All Articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogFeatured;