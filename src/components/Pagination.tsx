import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showPageNumbers?: boolean;
  maxPageButtons?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  showPageNumbers = true,
  maxPageButtons = 5,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    if (totalPages <= maxPageButtons) {
      // If total pages is less than max buttons, show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Calculate range to show
    const halfMaxButtons = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(currentPage - halfMaxButtons, 1);
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }
    
    // Generate array with ellipsis indicators
    const pages = [];
    
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className={`flex items-center justify-center ${className}`} aria-label="Pagination">
      <ul className="flex items-center space-x-1">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </li>
        
        {/* Page Numbers */}
        {showPageNumbers && getPageNumbers().map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <li key={`ellipsis-${index}`}>
                <span className="flex items-center justify-center w-10 h-10 text-gray-500">
                  ...
                </span>
              </li>
            );
          }
          
          return (
            <li key={index}>
              <button
                onClick={() => onPageChange(page as number)}
                className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 ${currentPage === page ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}
        
        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-200 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </li>
      </ul>
      
      {/* Page info */}
      <div className="ml-4 text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

export default Pagination;