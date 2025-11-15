export interface Crop {
  id: string;
  name: string;
  category: string;
  plantingMonths: number[];
  harvestMonths: number[];
  description: string;
  buyers: string[];
  imageUrl: string;
}

export interface Buyer {
  id: string;
  category: string;
  description: string;
  examples: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  inquiryType: string;
}
