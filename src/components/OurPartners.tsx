import OIP from '../assets/images/OIP.webp';
import OIP2 from '../assets/images/OIP_2.webp';
import OIP3 from '../assets/images/OIP_3.webp';
import OIP4 from '../assets/images/OIP_4.gif';

const OurPartners = () => {
  const partners = [OIP, OIP2, OIP3, OIP4];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">Our Partners</h2>
          <p className="text-gray-600">Trusted partners in health and wellness</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate the images for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;