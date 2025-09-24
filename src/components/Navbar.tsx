import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import lotusLogo from '../assets/images/Lotus.png';
import { useWishlist } from '../hooks/useWishlist';

const activeClasses = 'text-pink-600';
const baseLink = 'px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-pink-600';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getWishlistCount } = useWishlist();
  const wishlistCount = getWishlistCount();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <img src={lotusLogo} alt="Lotus Health365 Logo" className="h-8 w-8 object-contain" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Lotus Health365
                </h1>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4" role="menubar">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : ''}`}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </NavLink>
              <div className="relative group" role="menuitem" aria-haspopup="true">
                <NavLink
                  to="/products"
                  className={({ isActive }) => `${baseLink} inline-flex items-center ${isActive ? activeClasses : ''}`}
                  aria-current={location.pathname === '/products' ? 'page' : undefined}
                >
                  Products
                </NavLink>
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                  role="menu"
                  aria-label="Product categories"
                >
                  <div className="py-2">
                    <Link to="/products?category=all" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500" role="menuitem">All Products</Link>
                    <Link to="/products?category=baby" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500" role="menuitem">Baby Care</Link>
                    <Link to="/products?category=sanitary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500" role="menuitem">Sanitary</Link>
                  </div>
                </div>
              </div>
              <button onClick={() => handleSectionNavigation('about')} className={baseLink}>About</button>
              <button onClick={() => handleSectionNavigation('contact')} className={baseLink}>Contact</button>
              <div className="relative">
                <button
                  className={`${baseLink} relative`}
                  aria-label={`Wishlist with ${wishlistCount} items`}
                >
                  <Heart className="w-5 h-5" aria-hidden="true" />
                  {wishlistCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      aria-label={`${wishlistCount} items in wishlist`}
                    >
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 transition-colors p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" end className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-pink-600' : 'text-gray-700'} hover:text-pink-600 transition-colors`}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => `block px-3 py-2 ${isActive ? 'text-pink-600' : 'text-gray-700'} hover:text-pink-600 transition-colors`}>Products</NavLink>
            <div className="pl-4 space-y-1">
              <Link to="/products?category=all" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">All Products</Link>
              <Link to="/products?category=baby" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">Baby Care</Link>
              <Link to="/products?category=sanitary" className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors">Sanitary</Link>
            </div>
            <button onClick={() => handleSectionNavigation('about')} className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors text-left">About</button>
            <button onClick={() => handleSectionNavigation('contact')} className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


