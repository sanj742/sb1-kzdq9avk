import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Leaf, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isOrganic && (
          <div className="absolute top-2 left-2 bg-success-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Leaf className="w-3 h-3" />
            <span>Organic</span>
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-primary-600 hover:text-primary-700 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{product.name}</h3>
          <span className="text-sm text-gray-500 ml-2">{product.category}</span>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
          <MapPin className="w-3 h-3" />
          <span>{product.location}</span>
        </div>

        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
          <Calendar className="w-3 h-3" />
          <span>Harvested: {new Date(product.harvestDate).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
            <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">By {product.farmerName}</p>
            <p className="text-xs text-gray-500">{product.quantity} {product.unit} available</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;