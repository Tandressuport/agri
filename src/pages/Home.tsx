import { Sprout, TrendingUp, Users, Award } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const stats = [
    { label: 'Acres Under Cultivation', value: '650+', icon: Sprout },
    { label: 'Annual Production Volume', value: '2M+ lbs', icon: TrendingUp },
    { label: 'Commercial Buyers', value: '40+', icon: Users },
    { label: 'Years in Operation', value: '15+', icon: Award }
  ];

  const crops = [
    { name: 'Winter Wheat', season: 'Fall-Spring' },
    { name: 'Field Corn', season: 'Spring-Fall' },
    { name: 'Soybeans', season: 'Late Spring-Fall' },
    { name: 'Cover Crops', season: 'Fall-Spring' },
    { name: 'Vegetables', season: 'Year-Round' },
    { name: 'Specialty Crops', season: 'Spring-Fall' }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cultivating Excellence in Every Season
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Maximizing land productivity by planting crops in their optimal season for quality harvests year-round
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('crops')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Crops
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-green-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a commercial agribusiness company specializing in strategic crop production.
              By purchasing premium seeds and planting them during optimal windows, we ensure maximum
              yield and quality for our industrial and commercial buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Crop Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {crops.map((crop, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{crop.name}</h3>
                <p className="text-gray-700">Growing Season: {crop.season}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('crops')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Complete Crop Calendar
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl mb-8">
            We supply high-quality crops to mills, feed manufacturers, processors, and distributors across the region.
            Get in touch to discuss your procurement needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for Inquiries
          </button>
        </div>
      </section>
    </div>
  );
}
