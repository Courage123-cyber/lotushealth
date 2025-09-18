import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Are your products safe for babies?",
      answer: "Yes, all our baby products are made with safe, non-toxic materials and undergo rigorous testing to ensure they meet the highest safety standards. We use hypoallergenic materials and avoid harmful chemicals."
    },
    {
      question: "How do I care for reusable products?",
      answer: "Our reusable products are designed to be easy to care for. Most can be washed in a washing machine on a gentle cycle. We recommend air drying to maintain the product's integrity and using mild detergent without bleach."
    },
    {
      question: "Do you offer eco-friendly options?",
      answer: "Absolutely! We have a wide range of eco-friendly products including bamboo-based items, reusable cloth products, and biodegradable materials. Look for the green leaf icon on our product listings."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy on all products. Items must be unused and in their original packaging. For hygiene products, we recommend trying a sample first if available."
    },
    {
      question: "How long do your products last?",
      answer: "Reusable products typically last 6-12 months with proper care, while disposable products are designed for single use. We provide care instructions with each product to maximize longevity."
    },
    {
      question: "Are your sanitary products comfortable?",
      answer: "Yes, comfort is our top priority. We use soft, breathable materials and ergonomic designs. Many customers report that our products are more comfortable than traditional options."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within Zimbabwe and select neighboring countries. We're working on expanding our shipping options. Contact us for specific shipping inquiries."
    },
    {
      question: "How do I know which size to choose?",
      answer: "We provide detailed size guides for each product category. For baby products, we recommend sizing up if your baby is between sizes. Our customer service team is also available to help with sizing questions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;