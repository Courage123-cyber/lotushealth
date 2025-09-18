import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Lotus Health365
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Premium care products for every stage of life, crafted with love and designed for comfort.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-pink-400 transition-colors">Home</a></li>
              <li><Link to="/products" className="hover:text-pink-400 transition-colors">Products</Link></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products?category=baby" className="hover:text-pink-400 transition-colors">Baby Care</Link></li>
              <li><Link to="/products?category=sanitary" className="hover:text-pink-400 transition-colors">Sanitary Products</Link></li>
              <li><Link to="/products?category=all" className="hover:text-pink-400 transition-colors">All Products</Link></li>
              <li><Link to="/products" className="hover:text-pink-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Lotus Health365. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;