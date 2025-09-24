import { useState } from 'react';
import { products, type Product } from '../data/products';
import { Heart, Star, GitCompare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductFilters from '../components/ProductFilters';
import ProductComparison from '../components/ProductComparison';
import ProductReviews from '../components/ProductReviews';
import { useWishlist } from '../hooks/useWishlist';

const ProductCard = ({
  product,
  onAddToComparison,
  onRemoveFromComparison,
  isInComparison,
  onAddToWishlist,
  onRemoveFromWishlist,
  isInWishlist,
  onViewReviews
}: {
  product: Product;
  onAddToComparison: (product: Product) => void;
  onRemoveFromComparison: (productId: number) => void;
  isInComparison: (productId: number) => boolean;
  onAddToWishlist: (product: Product) => void;
  onRemoveFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  onViewReviews: (product: Product) => void;
}) => (
  <article className="group relative bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2" role="article" aria-labelledby={`product-${product.id}-title`}>
    <div className="relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex gap-2">
        {product.ecoFriendly && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            Eco-Friendly
          </span>
        )}
        {!product.inStock && (
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
            Out of Stock
          </span>
        )}
      </div>

      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={() => isInWishlist(product.id) ? onRemoveFromWishlist(product.id) : onAddToWishlist(product)}
          className={`p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-pink-100 ${
            isInWishlist(product.id) ? 'text-red-500' : 'text-pink-500'
          }`}
          aria-label={isInWishlist(product.id) ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} aria-hidden="true" />
        </button>
        <button
          onClick={() => isInComparison(product.id) ? onRemoveFromComparison(product.id) : onAddToComparison(product)}
          className={`p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-100 ${
            isInComparison(product.id) ? 'text-blue-500' : 'text-gray-500'
          }`}
          aria-label={isInComparison(product.id) ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
        >
          <GitCompare className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        {product.brand && (
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.brand}
          </span>
        )}
      </div>

      <h3 id={`product-${product.id}-title`} className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      {/* Additional Info */}
      <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
        {product.material && <span>{product.material}</span>}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-3">
        {product.tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* View Reviews Button */}
      <button
        onClick={() => onViewReviews(product)}
        className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
      >
        View Reviews ({product.reviews})
      </button>
    </div>
  </article>
);

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedProductForReviews, setSelectedProductForReviews] = useState<Product | null>(null);
  const [showReviews, setShowReviews] = useState(false);

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist();

  const addToComparison = (product: Product) => {
    if (comparisonProducts.length < 4 && !comparisonProducts.find(p => p.id === product.id)) {
      setComparisonProducts([...comparisonProducts, product]);
    }
  };

  const removeFromComparison = (productId: number) => {
    setComparisonProducts(comparisonProducts.filter(p => p.id !== productId));
  };

  const isInComparison = (productId: number) => {
    return comparisonProducts.some(p => p.id === productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">

      <Navbar />
      <div className="py-20 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Products</h1>
            <p className="text-gray-600">Browse our categories</p>
          </div>

          {/* Advanced Filters */}
          <ProductFilters
            products={products}
            onFilteredProducts={setFilteredProducts}
            onSearchQuery={() => {}}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToComparison={addToComparison}
                onRemoveFromComparison={removeFromComparison}
                isInComparison={isInComparison}
                onAddToWishlist={addToWishlist}
                onRemoveFromWishlist={removeFromWishlist}
                isInWishlist={isInWishlist}
                onViewReviews={(product) => {
                  setSelectedProductForReviews(product);
                  setShowReviews(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Button */}
      {comparisonProducts.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowComparison(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 focus:ring-4 focus:ring-pink-300 focus:outline-none"
          >
            <GitCompare className="w-5 h-5" />
            Compare ({comparisonProducts.length})
          </button>
        </div>
      )}

      <Footer />

      {/* Comparison Modal */}
      <ProductComparison
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        selectedProducts={comparisonProducts}
        onRemoveProduct={removeFromComparison}
      />

      {/* Reviews Modal */}
      {selectedProductForReviews && (
        <ProductReviews
          product={selectedProductForReviews}
          isOpen={showReviews}
          onClose={() => {
            setShowReviews(false);
            setSelectedProductForReviews(null);
          }}
        />
      )}
    </div>
  );
};

export default ProductsPage;



