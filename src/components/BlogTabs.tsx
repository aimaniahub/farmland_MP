import React from 'react';

interface Category {
  id: string;
  name: string;
}

interface BlogTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  className?: string;
  title?: string;
}

const BlogTabs: React.FC<BlogTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className = '',
  title,
}) => {
  return (
    <div className={`${className}`}>
      {title && <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>}
      
      {/* Tabs inspired by the farm plots design in the images */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full transition-all ${activeCategory === category.id
              ? 'bg-green-600 text-white font-medium shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogTabs;