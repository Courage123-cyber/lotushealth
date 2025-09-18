 
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, type Product } from './data/products';
 
import prm from './assets/images/prm.png';
import prom from './assets/images/prom.png';
import promo from './assets/images/promo.png';
import girl from './assets/images/girl.png';
import lh from './assets/images/lh.png';

 
import useHeroSlideshow from './hooks/useHeroSlideshow';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import OurPartners from './components/OurPartners';
import FAQ from './components/FAQ';
import TrustIndicators from './components/TrustIndicators';

const App = () => {
  

  const heroSlides: { image: string; title1: string; title2: string; description: string }[] = [
    {
      image: prm,
      title1: 'Premium Care',
      title2: 'for Every Stage',
      description:
        "Discover our premium collection of sanitary products and baby wear, designed with love and crafted for comfort, safety, and peace of mind.",
    },
    {
      image: prom,
      title1: 'Gentle Hygiene',
      title2: 'you can Trust',
      description:
        'From sanitary essentials to everyday comfort, we deliver quality and reliability for your family.',
    },
    {
      image: promo,
      title1: 'Eco‑Friendly',
      title2: 'Reusable Options',
      description:
        'Sustainable, skin‑friendly and cost‑effective choices for conscious families.',
    },
    {
      image: girl,
      title1: 'Adorable Baby Wear',
      title2: 'Crafted with Care',
      description:
        'Soft, breathable fabrics designed for comfort through every moment.',
    },
    {
      image: lh,
      title1: 'Protection & Comfort',
      title2: 'Day and Night',
      description:
        'Modern designs that blend performance with everyday ease.',
    },
  ];

  const { slide: currentSlide } = useHeroSlideshow(heroSlides, 4000);


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {currentSlide.title1}
                </span>
                <br />
                <span className="text-gray-800">{currentSlide.title2}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {currentSlide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Shop Now
                </button>
                <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={currentSlide.image} 
                  alt="Featured" 
                  className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                
              </div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured/Showcase Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">What We Offer</h2>
            <p className="text-gray-600">A glimpse of our bestsellers and essentials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((item: Product) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-56 object-contain bg-white" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-colors">Browse Full Catalog</Link>
          </div>
        </div>
      </section>

      <TrustIndicators />

      <AboutSection />

      <FAQ />

      <OurPartners />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-pink-100">We'd love to hear from you</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-pink-100">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-pink-100">info@lotushealth365.com</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-pink-100">51 Central Avenue, Harare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default App;