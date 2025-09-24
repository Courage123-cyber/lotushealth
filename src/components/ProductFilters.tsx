import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductFiltersProps {
  products: Product[];
  onFilteredProducts: (filtered: Product[]) => void;
  onSearchQuery: (query: string) => void;
}

const ProductFilters = ({ products, onFilteredProducts, onSearchQuery }: ProductFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [ecoFriendly, setEcoFriendly] = useState<boolean | null>(null);
  const [inStock, setInStock] = useState<boolean | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(product => {
      const price = product.price ? parseFloat(product.price.replace('$', '')) : 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter(product => product.rating >= selectedRating);
    }

    // Eco-friendly filter
    if (ecoFriendly !== null) {
      filtered = filtered.filter(product => product.ecoFriendly === ecoFriendly);
    }

    // Stock filter
    if (inStock !== null) {
      filtered = filtered.filter(product => product.inStock === inStock);
    }

    onFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, priceRange, selectedRating, ecoFriendly, inStock, onFilteredProducts]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 50]);
    setSelectedRating(0);
    setEcoFriendly(null);
    setInStock(null);
    onSearchQuery('');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <X className="w-4 h-4" />
          Clear All
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-200">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value={0}>All Ratings</option>
              <option value={4}>4+ Stars</option>
              <option value={4.5}>4.5+ Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          {/* Additional Filters */}
          <div className="space-y-3">
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={ecoFriendly === true}
                  onChange={(e) => setEcoFriendly(e.target.checked ? true : null)}
                  className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">Eco-Friendly</span>
              </label>
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={inStock === true}
                  onChange={(e) => setInStock(e.target.checked ? true : null)}
                  className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">In Stock</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;