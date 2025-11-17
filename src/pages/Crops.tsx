import { useState } from 'react';
import { Calendar, Users, Sprout } from 'lucide-react';
import { crops } from '../data/crops';

export default function Crops() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getMonthActivity = (cropId: string, monthIndex: number) => {
    const crop = crops.find(c => c.id === cropId);
    if (!crop) return null;

    if (crop.plantingMonths.includes(monthIndex + 1)) return 'planting';
    if (crop.harvestMonths.includes(monthIndex + 1)) return 'harvest';
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Our Crop Portfolio</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Strategic planting schedules ensure year-round production and optimal yields
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Seasonal Crop Guide</h2>
            <p className="mt-4 text-lg text-gray-600">
              A visual guide to our planting and harvesting seasons.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop) => (
              <div key={crop.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <img className="h-16 w-16 rounded-full object-cover" src={crop.imageUrl} alt={crop.name} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{crop.name}</h3>
                      <p className="text-sm text-gray-500">{crop.category}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Annual Cycle</h4>
                    <div className="grid grid-cols-6 gap-1">
                      {months.map((month, monthIndex) => {
                        const activity = getMonthActivity(crop.id, monthIndex);
                        let bgColor = 'bg-gray-200';
                        let textColor = 'text-gray-600';
                        if (activity === 'planting') {
                          bgColor = 'bg-blue-500';
                          textColor = 'text-white';
                        } else if (activity === 'harvest') {
                          bgColor = 'bg-amber-500';
                          textColor = 'text-white';
                        }
                        return (
                          <div key={monthIndex} className={`text-center py-1 rounded ${bgColor} ${textColor}`}>
                            <span className="text-xs font-medium">{month}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-end space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-gray-600">Planting</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-xs text-gray-600">Harvest</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Crop Details</h2>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className={`text-left p-4 rounded-lg border-2 transition-all ${
                  selectedCrop.id === crop.id
                    ? 'border-green-600 bg-green-50 shadow-lg'
                    : 'border-gray-200 hover:border-green-300 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Sprout className={`h-5 w-5 ${selectedCrop.id === crop.id ? 'text-green-700' : 'text-gray-500'}`} />
                  <h3 className="font-bold text-gray-900">{crop.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{crop.category}</p>
              </button>
            ))}
          </div>

          {selectedCrop && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-80 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedCrop.imageUrl})` }}
                />
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      {selectedCrop.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedCrop.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedCrop.description}</p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Planting Months</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCrop.plantingMonths.map((month) => (
                          <span key={month} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200">
                            {months[month - 1]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
                        <h4 className="font-semibold text-gray-900">Harvest Months</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCrop.harvestMonths.map((month) => (
                          <span key={month} className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-200">
                            {months[month - 1]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-gray-900">Primary Buyers</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCrop.buyers.map((buyer, index) => (
                          <span key={index} className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full border border-green-200">
                            {buyer}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
