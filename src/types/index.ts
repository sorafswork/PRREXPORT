export type ProductCategory = 'coconut-oil' | 'cocopeat' | 'coir' | 'coconut-shell';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  businessType: 'Manufacturer' | 'Exporter';
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: ProductSpec[];
  sizes: string[];
  packaging: string;
  applications: string[];
  rawMaterial: string;
  extractionOrProcess?: string;
  isUpcoming?: boolean;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  website: string;
  whatsapp: string;
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  b2bPlatforms: {
    name: string;
    url: string;
    badge: string;
    description: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}
