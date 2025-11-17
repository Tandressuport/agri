import { Building2, ShoppingCart, Tractor, CheckCircle } from 'lucide-react';
import { buyers } from '../data/buyers';

interface BuyersProps {
  onNavigate: (page: string) => void;
}

export default function Buyers({ onNavigate }: BuyersProps) {
  const buyerIcons = {
    'industrial': Building2,
    'retail-wholesale': ShoppingCart,
    'agricultural': Tractor
  };

  const benefits = [
    'Consistent supply throughout the year',
    'Quality-controlled crops meeting industry standards',
    'Flexible order quantities for various buyer sizes',
    'Direct producer relationship with transparent pricing',
    'Timely delivery coordinated with harvest schedules',
    'Documentation and certification support'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Buyers & Clients</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Supplying quality crops to diverse commercial and industrial markets
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with a diverse range of buyers across multiple industries, providing
              reliable crop supply for manufacturing, retail, and agricultural needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {buyers.map((buyer) => {
              const Icon = buyerIcons[buyer.id as keyof typeof buyerIcons];
              return (
                <div key={buyer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 text-white">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-white bg-opacity-20 rounded-lg mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold">{buyer.category}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{buyer.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Examples Include:</h4>
                      <ul className="space-y-2">
                        {buyer.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a dedicated commercial crop producer, we offer advantages that set us apart
                from traditional distributors and brokers.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Farmer with tablet in a field of crops"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-700 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">Our Crop Offerings</h2>
                <p className="text-xl text-green-50 mb-6">
                  From commodity grains to specialty produce, we supply diverse crops
                  to meet your specific requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h3 className="font-bold mb-2">Grains</h3>
                    <p className="text-green-100">Wheat, Corn, Soybeans</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h3 className="font-bold mb-2">Cover Crops</h3>
                    <p className="text-green-100">Seed varieties for farmers</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h3 className="font-bold mb-2">Vegetables</h3>
                    <p className="text-green-100">Fresh seasonal produce</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h3 className="font-bold mb-2">Specialty</h3>
                    <p className="text-green-100">Sunflower, Hemp, Sorghum</p>
                  </div>
                </div>
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-green-100 mb-6">
                  Contact us to discuss your procurement needs and explore how we can support
                  your supply chain.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Contact Us for Inquiries
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Procurement Process</h2>
          <p className="text-lg text-gray-700 mb-8">
            We make it easy to source quality crops directly from the producer
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Initial Contact</h3>
              <p className="text-sm text-gray-600">Reach out via phone, email, or contact form</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Discuss Needs</h3>
              <p className="text-sm text-gray-600">Share your requirements and quantities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Receive Quote</h3>
              <p className="text-sm text-gray-600">Get transparent pricing and availability</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Delivery Setup</h3>
              <p className="text-sm text-gray-600">Coordinate logistics and fulfillment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
