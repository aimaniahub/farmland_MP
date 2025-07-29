import React, { useState } from 'react';
import { Filter, SortAsc, SortDesc, X, ChevronDown } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

interface SortOption {
  value: string;
  label: string;
  direction?: 'asc' | 'desc';
}

interface FilterSortControlsProps {
  filterOptions: FilterOption[];
  sortOptions: SortOption[];
  onFilterChange: (filterId: string, values: string[]) => void;
  onSortChange: (sortValue: string, direction: 'asc' | 'desc') => void;
  className?: string;
  initialFilters?: Record<string, string[]>;
  initialSort?: { value: string; direction: 'asc' | 'desc' };
}

const FilterSortControls: React.FC<FilterSortControlsProps> = ({
  filterOptions,
  sortOptions,
  onFilterChange,
  onSortChange,
  className = '',
  initialFilters = {},
  initialSort = { value: '', direction: 'asc' },
}) => {
  const [filters, setFilters] = useState<Record<string, string[]>>(initialFilters);
  const [sort, setSort] = useState<{ value: string; direction: 'asc' | 'desc' }>(initialSort);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const toggleFilter = (filterId: string, value: string) => {
    const currentValues = filters[filterId] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    const newFilters = { ...filters, [filterId]: newValues };
    setFilters(newFilters);
    onFilterChange(filterId, newValues);
  };

  const clearFilter = (filterId: string) => {
    const newFilters = { ...filters };
    delete newFilters[filterId];
    setFilters(newFilters);
    onFilterChange(filterId, []);
  };

  const clearAllFilters = () => {
    setFilters({});
    filterOptions.forEach(filter => {
      onFilterChange(filter.id, []);
    });
  };

  const handleSortChange = (value: string) => {
    // If selecting the same sort option, toggle direction
    const direction = sort.value === value && sort.direction === 'asc' ? 'desc' : 'asc';
    setSort({ value, direction });
    onSortChange(value, direction);
  };

  const getActiveFilterCount = () => {
    return Object.values(filters).reduce((count, values) => count + values.length, 0);
  };

  return (
    <div className={`${className}`}>
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {filterOptions.map((filterOption) => (
            <div key={filterOption.id} className="relative">
              <button
                onClick={() => toggleDropdown(filterOption.id)}
                className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                <span>{filterOption.label}</span>
                {filters[filterOption.id]?.length > 0 && (
                  <span className="ml-1 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {filters[filterOption.id].length}
                  </span>
                )}
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              
              {activeDropdown === filterOption.id && (
                <div className="absolute z-10 mt-1 w-56 bg-white rounded-md shadow-lg">
                  <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                    <span className="font-medium">{filterOption.label}</span>
                    {filters[filterOption.id]?.length > 0 && (
                      <button
                        onClick={() => clearFilter(filterOption.id)}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="max-h-60 overflow-y-auto p-2">
                    {filterOption.options.map((option) => (
                      <div key={option.value} className="flex items-center py-1">
                        <input
                          type="checkbox"
                          id={`${filterOption.id}-${option.value}`}
                          checked={filters[filterOption.id]?.includes(option.value) || false}
                          onChange={() => toggleFilter(filterOption.id, option.value)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`${filterOption.id}-${option.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="relative">
          <button
            onClick={() => toggleDropdown('sort')}
            className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <span>Sort by</span>
            {sort.value && (
              <span className="ml-1 text-primary-600">
                {sortOptions.find(option => option.value === sort.value)?.label}
              </span>
            )}
            {sort.direction === 'asc' ? (
              <SortAsc className="ml-2 h-4 w-4" />
            ) : (
              <SortDesc className="ml-2 h-4 w-4" />
            )}
          </button>
          
          {activeDropdown === 'sort' && (
            <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg">
              <div className="p-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleSortChange(option.value);
                      setActiveDropdown(null);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-left text-sm rounded-md ${sort.value === option.value ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  >
                    <span>{option.label}</span>
                    {sort.value === option.value && (
                      sort.direction === 'asc' ? (
                        <SortAsc className="h-4 w-4" />
                      ) : (
                        <SortDesc className="h-4 w-4" />
                      )
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <Filter className="h-4 w-4 mr-1" />
            <span>Filters</span>
            {getActiveFilterCount() > 0 && (
              <span className="ml-1 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {getActiveFilterCount()}
              </span>
            )}
          </button>
          
          <button
            onClick={() => toggleDropdown('mobile-sort')}
            className="flex items-center px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <span>Sort</span>
            {sort.direction === 'asc' ? (
              <SortAsc className="ml-1 h-4 w-4" />
            ) : (
              <SortDesc className="ml-1 h-4 w-4" />
            )}
          </button>
          
          {activeDropdown === 'mobile-sort' && (
            <div className="absolute right-4 z-10 mt-1 w-48 bg-white rounded-md shadow-lg top-16">
              <div className="p-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleSortChange(option.value);
                      setActiveDropdown(null);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-left text-sm rounded-md ${sort.value === option.value ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  >
                    <span>{option.label}</span>
                    {sort.value === option.value && (
                      sort.direction === 'asc' ? (
                        <SortAsc className="h-4 w-4" />
                      ) : (
                        <SortDesc className="h-4 w-4" />
                      )
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {isMobileFiltersOpen && (
          <div className="mt-4 border border-gray-200 rounded-md bg-white p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Filters</h3>
              {getActiveFilterCount() > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear all
                </button>
              )}
            </div>
            
            <div className="space-y-4">
              {filterOptions.map((filterOption) => (
                <div key={filterOption.id}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">{filterOption.label}</h4>
                    {filters[filterOption.id]?.length > 0 && (
                      <button
                        onClick={() => clearFilter(filterOption.id)}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="space-y-2">
                    {filterOption.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`mobile-${filterOption.id}-${option.value}`}
                          checked={filters[filterOption.id]?.includes(option.value) || false}
                          onChange={() => toggleFilter(filterOption.id, option.value)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`mobile-${filterOption.id}-${option.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="mt-4 w-full py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Active Filters Display */}
      {getActiveFilterCount() > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {Object.entries(filters).map(([filterId, values]) => {
            if (values.length === 0) return null;
            
            const filterOption = filterOptions.find(f => f.id === filterId);
            if (!filterOption) return null;
            
            return values.map(value => {
              const option = filterOption.options.find(o => o.value === value);
              if (!option) return null;
              
              return (
                <div 
                  key={`${filterId}-${value}`} 
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                >
                  <span>{filterOption.label}: {option.label}</span>
                  <button 
                    onClick={() => toggleFilter(filterId, value)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            });
          })}
        </div>
      )}
    </div>
  );
};

export default FilterSortControls;