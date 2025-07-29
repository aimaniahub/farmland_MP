import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  onSearch: (query: string) => void;
  className?: string;
  placeholder?: string;
}

const BlogSearch: React.FC<BlogSearchProps> = ({
  onSearch,
  className = '',
  placeholder = 'Search articles...',
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full hover:bg-green-700 transition-colors">
            Search
          </span>
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;