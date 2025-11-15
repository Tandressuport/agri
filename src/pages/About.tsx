import { Target, Leaf, TrendingUp, Award, MapPin, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'We carefully time seed purchases and planting to align with optimal growing conditions for each crop variety.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our practices include cover cropping, crop rotation, and soil health management to ensure long-term land productivity.'
    },
    {
      icon: TrendingUp,
      title: 'Maximized Yields',
      description: 'Through precision agriculture and data-driven decisions, we achieve industry-leading yields across all crop categories.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every harvest meets stringent quality standards required by our commercial and industrial buyers.'
    }
  ];

  const certifications = [
    'USDA Good Agricultural Practices (GAP) Certified',
    'Oklahoma Department of Agriculture Licensed',
    'Sustainable Agriculture Practices',
    'Food Safety Modernization Act (FSMA) Compliant'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About Our Operation</h1>
            <p className="text-xl max-w-2xl mx-auto">
              15 years of excellence in commercial crop production
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Oklahoma Plains Agriculture is a commercial agribusiness company headquartered in
                Oklahoma, USA. We specialize in the strategic production of commodity and specialty
                crops for industrial, retail, and agricultural markets.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our business model is simple yet effective: we purchase premium seed varieties at
                the right time, plant them during optimal growing windows, and manage every stage
                of growth to harvest. This ensures our buyers receive consistent, high-quality crops
                throughout the year.
              </p>
              <p className="text-lg text-gray-700">
                With over 650 acres under active cultivation and multiple crop rotations annually,
                we've become a trusted supplier to grain mills, feed manufacturers, processors,
                distributors, and local markets across the region.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Farm operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Oklahoma, USA</h3>
                  <p className="text-gray-700">
                    Strategically located in the heart of America's agricultural corridor, our
                    Oklahoma farmland benefits from fertile soil, favorable climate conditions,
                    and excellent access to major transportation routes for efficient distribution.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">By The Numbers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between border-b border-green-200 pb-2">
                    <span className="font-semibold">Total Acreage:</span>
                    <span>650+ acres</span>
                  </li>
                  <li className="flex justify-between border-b border-green-200 pb-2">
                    <span className="font-semibold">Active Crop Varieties:</span>
                    <span>12+ types</span>
                  </li>
                  <li className="flex justify-between border-b border-green-200 pb-2">
                    <span className="font-semibold">Annual Rotations:</span>
                    <span>3-4 cycles</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Commercial Buyers:</span>
                    <span>40+ partners</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Standards</h2>
              <p className="text-gray-700 mb-6">
                We maintain the highest standards in agricultural production, holding certifications
                that demonstrate our commitment to quality, safety, and sustainability.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <img
                  src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Quality harvest"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Farming Philosophy</h2>
          <p className="text-xl leading-relaxed">
            "We believe in working with nature, not against it. By planting the right crop at the
            right time, maintaining soil health, and using proven agricultural practices, we create
            a sustainable operation that delivers consistent results for our buyers while preserving
            the land for future generations."
          </p>
        </div>
      </section>
    </div>
  );
}
