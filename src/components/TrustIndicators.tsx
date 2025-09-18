import { Shield, Award, Heart, Leaf, Star, Users } from 'lucide-react';

const TrustIndicators = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Safety Certified",
      description: "All products undergo rigorous safety testing and meet international standards for baby care and sanitary wear.",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium materials and expert craftsmanship ensure the highest quality for your family.",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Trusted by Families",
      description: "Over 50,000 families and individuals worldwide trust us for their baby care and personal hygiene needs.",
      color: "text-pink-600"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable practices and biodegradable materials for a better tomorrow.",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Average 4.8-star rating from thousands of verified customer reviews.",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team of baby care and hygiene specialists is here to help you every step of the way.",
      color: "text-indigo-600"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Families" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Safe & Natural" },
    { number: "#1", label: "in Africa" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Why Choose <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Lotus Health365</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Africa's #1 choice for premium baby care and sanitary products, trusted by families worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 ${point.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Thousands of Happy Families</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the difference that quality, safety, and care make in your family's daily life.
              Your comfort, health, and well-being are our top priorities.
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Shopping Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;