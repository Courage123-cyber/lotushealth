import { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Product[];
  onRemoveProduct: (productId: number) => void;
}

const ProductComparison = ({ isOpen, onClose, selectedProducts, onRemoveProduct }: ProductComparisonProps) => {
  if (!isOpen) return null;

  const comparisonFields = [
    { key: 'name', label: 'Product Name', type: 'text' },
    { key: 'price', label: 'Price', type: 'price' },
    { key: 'rating', label: 'Rating', type: 'rating' },
    { key: 'brand', label: 'Brand', type: 'text' },
    { key: 'material', label: 'Material', type: 'text' },
    { key: 'ageRange', label: 'Age Range', type: 'text' },
    { key: 'ecoFriendly', label: 'Eco-Friendly', type: 'boolean' },
    { key: 'inStock', label: 'In Stock', type: 'boolean' },
    { key: 'reviews', label: 'Reviews', type: 'number' },
  ];

  const renderValue = (product: Product, field: typeof comparisonFields[0]) => {
    const value = product[field.key as keyof Product];

    switch (field.type) {
      case 'price':
        return value ? <span className="font-bold text-pink-600">{value as string}</span> : '-';
      case 'rating':
        return (
          <div className="flex items-center gap-1">
            <span className="font-medium">{value as number}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(value as number) ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
        );
      case 'boolean':
        return value ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
      case 'number':
        return <span className="font-medium">{value as number}</span>;
      default:
        return <span>{value as string || '-'}</span>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Product Comparison</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-medium text-gray-700 w-48">Features</th>
                {selectedProducts.map((product, index) => (
                  <th key={product.id} className="p-4 text-center min-w-64">
                    <div className="relative">
                      <button
                        onClick={() => onRemoveProduct(product.id)}
                        className="absolute -top-2 -right-2 p-1 bg-red-100 hover:bg-red-200 rounded-full transition-colors"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-contain mx-auto mb-2"
                      />
                      <h3 className="font-medium text-sm text-gray-800">{product.name}</h3>
                    </div>
                  </th>
                ))}
                {/* Empty slots */}
                {[...Array(4 - selectedProducts.length)].map((_, index) => (
                  <th key={`empty-${index}`} className="p-4 text-center min-w-64">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                      <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Add Product</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFields.map((field, fieldIndex) => (
                <tr key={field.key} className={fieldIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 font-medium text-gray-700 border-r border-gray-200">
                    {field.label}
                  </td>
                  {selectedProducts.map((product) => (
                    <td key={`${product.id}-${field.key}`} className="p-4 text-center border-r border-gray-200">
                      {renderValue(product, field)}
                    </td>
                  ))}
                  {/* Empty cells for missing products */}
                  {[...Array(4 - selectedProducts.length)].map((_, index) => (
                    <td key={`empty-${field.key}-${index}`} className="p-4 text-center border-r border-gray-200 text-gray-400">
                      -
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            Comparing {selectedProducts.length} of 4 products
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;