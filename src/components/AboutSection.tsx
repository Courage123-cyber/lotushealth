import { CheckCircle } from 'lucide-react';
import promo from '../assets/images/promo.png';
import girl from '../assets/images/girl.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-700 mb-4">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Lotus Health365</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We craft premium sanitary products and baby essentials focused on comfort, safety, and everyday reliability. Our promise is thoughtful design, gentle materials, and quality you can trust.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-800">Dermatologist‑Reviewed</div>
                  <div className="text-gray-600 text-sm">Skin‑friendly, breathable and gentle for sensitive users.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-800">Sustainable Choices</div>
                  <div className="text-gray-600 text-sm">Reusable, eco‑minded options without compromising comfort.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-800">Trusted Quality</div>
                  <div className="text-gray-600 text-sm">Consistent standards, responsible sourcing and testing.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-800">Care & Support</div>
                  <div className="text-gray-600 text-sm">We’re here with guidance through every stage.</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center bg-white rounded-2xl shadow p-5">
                <div className="text-3xl font-bold text-pink-600">10K+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow p-5">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600 text-sm">Premium Products</div>
              </div>
              <div className="text-center bg-white rounded-2xl shadow p-5">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600 text-sm">Customer Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative grid grid-cols-2 gap-6">
              <img src={promo} alt="Quality products" className="rounded-3xl shadow-2xl" />
              <img src={girl} alt="Comfortable baby wear" className="rounded-3xl shadow-2xl mt-8" />
            </div>
            <div className="absolute -z-10 -top-6 -left-6 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl"></div>
            <div className="absolute inset-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


