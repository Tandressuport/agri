import { Target, Leaf, Award, ShieldCheck, Eye, ThumbsUp, MapPin, CheckCircle, Compass, GitCommit } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Stewardship',
      description: 'We care for the land as if we own it, ensuring its long-term health and productivity.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication with landowners and partners is fundamental to our operations.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'We use data-driven, season-optimized farming practices to maximize yield and quality.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Our focus is on delivering high-yield, market-ready crop outputs every season.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Soil, water, and land health come first in all of our planning and operations.'
    },
    {
      icon: ThumbsUp,
      title: 'Reliability',
      description: 'On-time planting, management, and harvesting are commitments we keep every season.'
    }
  ];

  const certifications = [
    'USDA Good Agricultural Practices (GAP) Certified',
    'California Department of Agriculture Licensed',
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
            <p className="text-xl max-w-3xl mx-auto">
              Independent Agricultural Production & Land Stewardship
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
                We are an independent agricultural production company specializing in large-scale crop farming, land-stewardship partnerships, and long-term agricultural management. Our work combines modern production practices with responsible land care to deliver reliable, high-yield crops across multiple seasons.
              </p>
              <p className="text-lg text-gray-700">
                Our current operations include a long-term farming collaboration on agricultural acreage at 4589 Abernathy Road, Fairfield, California, where we manage approved crop production on land owned by E. & J. Gallo Winery.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-green-700" />
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4589 Abernathy Rd, Fairfield CA 94543</h3>
                  <p className="text-gray-700">
                    Our operations are based at a key agricultural site in California's agricultural corridor, where we have a long-term farming collaboration.
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">By The Numbers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between border-b border-green-200 pb-2">
                    <span className="font-semibold">Total Acreage:</span>
                    <span>1,000+ acres</span>
                  </li>
                  <li className="flex justify-between border-b border-green-200 pb-2">
                    <span className="font-semibold">Active Crop Varieties:</span>
                    <span>12+ types</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-semibold">Annual Rotations:</span>
                    <span>3-4 cycles</span>
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Compass className="h-10 w-10 mb-4 inline-block" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed">
              To deliver high-quality crops and efficient agricultural management while protecting the long-term health, productivity, and value of the land entrusted to us.
            </p>
          </div>
          <div className="text-center md:text-left">
            <GitCommit className="h-10 w-10 mb-4 inline-block" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl leading-relaxed">
              To become a trusted leader in sustainable large-scale farming partnerships, known for reliability, transparency, and consistent production across diverse farming regions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
