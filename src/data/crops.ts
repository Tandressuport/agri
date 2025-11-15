import { Crop } from '../types';

export const crops: Crop[] = [
  {
    id: 'winter-wheat',
    name: 'Winter Wheat',
    category: 'Grains',
    plantingMonths: [9, 10, 11],
    harvestMonths: [5, 6],
    description: 'Premium hard red winter wheat, ideal for milling and livestock feed. Our wheat is grown using proven practices to ensure consistent quality and high protein content.',
    buyers: ['Grain Mills', 'Livestock Feed Manufacturers', 'Industrial Buyers'],
    imageUrl: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 'corn',
    name: 'Field Corn',
    category: 'Grains',
    plantingMonths: [4, 5, 6],
    harvestMonths: [9, 10],
    description: 'High-yielding yellow dent corn for feed, grain processing, and ethanol production. Planted during optimal spring conditions for maximum kernel development.',
    buyers: ['Feed Manufacturers', 'Grain Processors', 'Ethanol Producers'],
    imageUrl: 'img/field corn.jpeg'
  },
  {
    id: 'soybeans',
    name: 'Soybeans',
    category: 'Legumes',
    plantingMonths: [5, 6],
    harvestMonths: [9, 10],
    description: 'Non-GMO and conventional soybeans with excellent oil and protein content. Ideal for feed production and industrial applications.',
    buyers: ['Feed Manufacturers', 'Oil Processing Plants', 'Industrial Buyers'],
    imageUrl: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 'cover-crops',
    name: 'Cover Crops',
    category: 'Soil Health',
    plantingMonths: [8, 9, 10, 11],
    harvestMonths: [3, 4, 5],
    description: 'Diverse cover crop mixes including crimson clover, winter rye, and Austrian winter peas. Harvested as seed for farmers seeking to improve soil health and reduce erosion.',
    buyers: ['Farmers', 'Agricultural Suppliers', 'Seed Companies'],
    imageUrl: 'https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 'vegetables',
    name: 'Seasonal Vegetables',
    category: 'Produce',
    plantingMonths: [3, 4, 8, 9],
    harvestMonths: [6, 7, 10, 11],
    description: 'Fresh tomatoes, squash, peppers, and leafy greens grown in seasonal rotations. Supplied to restaurants, farmers markets, and wholesale distributors.',
    buyers: ['Restaurants', 'Farmers Markets', 'Wholesale Distributors'],
    imageUrl: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 'specialty-crops',
    name: 'Specialty Crops',
    category: 'Specialty',
    plantingMonths: [4, 5, 6],
    harvestMonths: [8, 9, 10],
    description: 'Small-scale production of sunflowers, hemp, and sorghum for specialized markets. These crops provide diversification and cater to niche industrial needs.',
    buyers: ['Specialty Processors', 'Industrial Buyers', 'Regional Markets'],
    imageUrl: 'img/Specialty Crop.jpeg'
  }
];
