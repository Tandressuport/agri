import { Buyer } from '../types';

export const buyers: Buyer[] = [
  {
    id: 'industrial',
    category: 'Industrial Buyers',
    description: 'Large-scale processors who use our crops for manufacturing feed, fuel, and food products.',
    examples: ['Grain Mills', 'Feed Manufacturers', 'Ethanol Producers', 'Oil Processing Plants']
  },
  {
    id: 'retail-wholesale',
    category: 'Retail & Wholesale',
    description: 'Distributors and buyers who supply fresh produce to end consumers through various channels.',
    examples: ['Grocery Store Chains', 'Restaurants', 'Farmers Markets', 'Wholesale Distributors']
  },
  {
    id: 'agricultural',
    category: 'Agricultural Suppliers',
    description: 'Farmers and agricultural businesses who purchase our cover crop seeds and specialty products.',
    examples: ['Commercial Farmers', 'Seed Companies', 'Agricultural Co-ops', 'Land Management Firms']
  }
];
