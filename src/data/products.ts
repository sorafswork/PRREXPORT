import { Product } from '../types';
import {
  productNaturalCoconutOilImg,
  productVirginCoconutOilImg,
  productCocopeatJiffyDiscsImg,
  productCocopeat650gBricksImg,
  productCoirPotsImg,
  productCoirPvcMatImg,
  productSesameOilImg,
  productGroundnutOilImg,
} from '../assets/images';

export const PRODUCTS: Product[] = [
  // COCONUT OIL PRODUCTS (Manufacturing)
  {
    id: 'natural-coconut-oil',
    name: 'Natural Coconut Oil',
    category: 'coconut-oil',
    categoryName: 'Coconut Oil Products',
    businessType: 'Manufacturer',
    tagline: '100% Natural, Unrefined & Unsulphured Rotary Pressed Oil',
    description: 'Pure, authentic edible grade coconut oil produced through traditional rotary extraction from premium sun-dried copra. Unrefined, free from chemical bleaching, artificial additives, and sulphuring agents.',
    image: productNaturalCoconutOilImg,
    rawMaterial: 'Coconut copra',
    extractionOrProcess: 'Rotary extraction',
    features: [
      '100% natural, unrefined and unsulphured',
      'Extracted from carefully selected mature coconut copra',
      'Rich natural coconut aroma and flavor profile',
      'Zero chemical processing or solvent extraction',
      'High smoke point ideal for daily culinary applications'
    ],
    specs: [
      { label: 'Grade', value: 'Edible grade' },
      { label: 'Raw Material', value: 'Coconut copra' },
      { label: 'Extraction Method', value: 'Rotary extraction' },
      { label: 'Purity', value: '100% Natural, Unrefined, Unsulphured' },
      { label: 'Available Sizes', value: '250 ml, 500 ml, 1000 ml and Bulk container' },
      { label: 'Packaging', value: 'Food-grade PET bottle / Bulk Drums' }
    ],
    sizes: ['250 ml', '500 ml', '1000 ml', 'Bulk (Barrels / Jerrycans)'],
    packaging: 'Food-grade PET bottle',
    applications: ['Cooking & Frying', 'Haircare & Scalp Nourishment', 'Skincare & Massage Therapy']
  },
  {
    id: 'virgin-coconut-oil',
    name: 'Virgin Coconut Oil',
    category: 'coconut-oil',
    categoryName: 'Coconut Oil Products',
    businessType: 'Manufacturer',
    tagline: 'Pure Cold-Processed Fermentation Extracted from Fresh Coconut Milk',
    description: 'Ultra-pure, crystal clear virgin coconut oil extracted directly from freshly pressed coconut milk via natural fermentation. Retains natural antioxidants, vitamins, and medium-chain fatty acids (Lauric Acid).',
    image: productVirginCoconutOilImg,
    rawMaterial: 'Fresh Coconut milk',
    extractionOrProcess: 'Fermentation extraction',
    features: [
      '100% natural without heat damage',
      'Extracted straight from wet fresh coconut milk',
      'Superior lauric acid and antioxidant retention',
      'Light, crystal-clear consistency with delicate aroma',
      'Packaged in protective glass containers'
    ],
    specs: [
      { label: 'Grade', value: 'Edible grade (Global Standard Quality)' },
      { label: 'Raw Material', value: 'Coconut milk' },
      { label: 'Extraction Method', value: 'Fermentation' },
      { label: 'Type', value: '100% Natural Virgin Coconut Oil' },
      { label: 'Available Sizes', value: '250 ml, 500 ml, 1000 ml and Bulk' },
      { label: 'Packaging', value: 'Glass bottle / Export Master Cartons' }
    ],
    sizes: ['250 ml', '500 ml', '1000 ml', 'Bulk'],
    packaging: 'Glass bottle',
    applications: ['Healthy Baking & Dietary Supplement', 'Oil Pulling & Oral Wellness', 'Hair Conditioning', 'Cosmetic & Skincare Formulations']
  },

  // COCOPEAT PRODUCTS (Export)
  {
    id: 'cocopeat-disc-jiffy-plugs',
    name: 'Cocopeat Disc / Jiffy Plugs',
    category: 'cocopeat',
    categoryName: 'Cocopeat Products',
    businessType: 'Exporter',
    tagline: 'Compressed Coir Discs for Seed Germination & Nursery Propagation',
    description: 'Precision-compressed circular cocopeat discs designed for effortless seed starting, cloning, and seedling plugs. Expands quickly upon watering to provide the optimal air-to-water ratio for root development.',
    image: productCocopeatJiffyDiscsImg,
    rawMaterial: 'Washed Cocopeat pith',
    extractionOrProcess: 'Screened & Compressed',
    features: [
      'Low Electrical Conductivity (EC Below 0.5)',
      'Balanced pH between 5.6 and 6.6',
      'Rapid uniform expansion upon hydration',
      'Lightweight and ready to use in commercial nurseries',
      'Custom wrapping, netting, and packaging options available'
    ],
    specs: [
      { label: 'Electrical Conductivity (EC)', value: 'Below 0.5 mS/cm' },
      { label: 'Raw Material', value: 'Cocopeat' },
      { label: 'Moisture Content', value: '15%' },
      { label: 'pH Range', value: '5.6 – 6.6' },
      { label: 'Sizes / Diameters', value: '25 mm, 30 mm, 35 mm, 40 mm, 45 mm, 50 mm, 60 mm, 70 mm, 80 mm, 90 mm, 100 mm' },
      { label: 'Type', value: 'Plain or netted' },
      { label: 'Shape', value: 'Circular' },
      { label: 'Packing', value: 'Custom wrapping & master carton packing' }
    ],
    sizes: ['25 mm', '30 mm', '35 mm', '40 mm', '45 mm', '50 mm', '60 mm', '70 mm', '80 mm', '90 mm', '100 mm'],
    packaging: 'Custom wrapped / Netted carton packing',
    applications: ['Hydroponic Seed Starters', 'Commercial Plant Nurseries', 'Greenhouse Propagation', 'Urban & Indoor Gardening']
  },
  {
    id: 'cocopeat-5kg-blocks',
    name: 'Cocopeat 5 kg Blocks',
    category: 'cocopeat',
    categoryName: 'Cocopeat Products',
    businessType: 'Exporter',
    tagline: 'High-Expansion Compressed 5 kg Blocks for Agriculture & Horticulture',
    description: 'Standard 5 kg compressed cocopeat blocks washed for low electrical conductivity. Exceptional moisture retention, optimal porosity, and proven root aeration for commercial greenhouses, potting soil blenders, and agricultural producers.',
    image: './assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.36__1__9aa5fae3.jpeg',
    rawMaterial: 'Aged Cocopeat pith',
    extractionOrProcess: 'Hydraulic high compression',
    features: [
      'Low EC below 0.5 for immediate planting safety',
      'High yield expansion volume: 17–19 litres per kg (approx. 75–85 L per block)',
      'Tight moisture control maintained at 15%',
      'Minimal impurities strictly below 2%',
      'Superior water retention and nutrient holding capacity'
    ],
    specs: [
      { label: 'Weight', value: '4.8 – 5.2 kg' },
      { label: 'Electrical Conductivity (EC)', value: 'Below 0.5 mS/cm' },
      { label: 'Moisture Content', value: '15%' },
      { label: 'pH Range', value: '5.6 – 6.6' },
      { label: 'Dimensions', value: '30 × 30 × 12 cm' },
      { label: 'Expansion Volume', value: '17 – 19 litres per kg' },
      { label: 'Shape', value: 'Square block' },
      { label: 'Impurities', value: 'Below 2%' },
      { label: 'Container Loadability', value: 'Approx. 24–26 MT per 40ft High Cube Container' }
    ],
    sizes: ['5 kg Block (30 × 30 × 12 cm)'],
    packaging: 'Palletized with stretch film or naked bulk loading in containers',
    applications: ['Commercial Greenhouses', 'Soil Conditioning & Potting Mixes', 'Open Field Cultivation', 'Berry & Vegetable Cultivation']
  },
  {
    id: 'cocopeat-650g-bricks',
    name: 'Cocopeat 650 gram Bricks',
    category: 'cocopeat',
    categoryName: 'Cocopeat Products',
    businessType: 'Exporter',
    tagline: 'Ready to Use Compressed Bricks for Home Gardens & Planters',
    description: 'Compact 650 gram cocopeat bricks engineered for ready-to-use garden centers, landscapers, and home horticulturists. Quick hydration yields approximately 8 litres of rich growing substrate.',
    image: productCocopeat650gBricksImg,
    rawMaterial: 'Cocopeat',
    extractionOrProcess: 'Hydraulic brick pressing',
    features: [
      'Low EC below 0.5 safe for delicate seedlings',
      'Consistent expansion yield of 8 litres per brick',
      'Compact dimension (20 × 10 × 5 cm) easy for ready-to-use handling',
      'Impurities below 2%',
      'High moisture holding capacity reducing watering frequency'
    ],
    specs: [
      { label: 'Weight', value: '650 grams' },
      { label: 'Electrical Conductivity (EC)', value: 'Below 0.5 mS/cm' },
      { label: 'Moisture Content', value: '15%' },
      { label: 'pH Range', value: '5.6 – 6.6' },
      { label: 'Dimensions', value: '20 × 10 × 5 cm' },
      { label: 'Expansion Volume', value: '8 litres per brick' },
      { label: 'Shape', value: 'Rectangular brick' },
      { label: 'Impurities', value: 'Below 2%' }
    ],
    sizes: ['650 g Brick'],
    packaging: 'Individual shrink wrap with buyer label or bulk carton packing',
    applications: ['Home & Balcony Gardening', 'Floriculture & Houseplants', 'Ready-to-Use Garden Supplies', 'Terrarium & Reptile Bedding']
  },

  // COIR PRODUCTS (Export)
  {
    id: 'coir-pots',
    name: 'Coir Pots',
    category: 'coir',
    categoryName: 'Coir Products',
    businessType: 'Exporter',
    tagline: '100% Biodegradable Coir Fibre Pots for Direct Soil Transplantation',
    description: 'Natural molded coir fibre planting pots bound with natural latex. Enables root penetration through pot walls without root circling. Can be planted directly into the ground without root disturbance or transplant shock.',
    image: productCoirPotsImg,
    rawMaterial: 'Natural coconut coir fibre',
    extractionOrProcess: 'Hydraulic molding with natural latex binder',
    features: [
      '100% biodegradable, sustainable, and eco-friendly',
      'Prevents root coiling; roots prune naturally with air',
      'Direct ground transplantation with zero root shock',
      'Degrades naturally into soil enriching humus',
      'Sturdy structure packaged securely in export cartons'
    ],
    specs: [
      { label: 'Material', value: 'Coir fibre' },
      { label: 'Shape', value: 'Circular' },
      { label: 'Sizes / Diameters', value: '3, 4, 6 and 10 inches' },
      { label: 'Eco Profile', value: '100% Biodegradable & Compostable' },
      { label: 'Packaging', value: 'Carton box' }
    ],
    sizes: ['3 inches', '4 inches', '6 inches', '10 inches'],
    packaging: 'Carton box',
    applications: ['Commercial Tree Nurseries', 'Horticulture & Seedling Pots', 'Urban Terrace Gardening', 'Eco-Conscious Garden Centers']
  },
  {
    id: 'coir-mulch-mats',
    name: 'Coir Mulch Mats',
    category: 'coir',
    categoryName: 'Coir Products',
    businessType: 'Exporter',
    tagline: 'Circular Natural Coir Fiber Weed Control & Moisture Retention Mats',
    description: 'High-density 1200 GSM circular coir mulch mats designed to protect young trees and potted plants by retaining soil moisture, suppressing weeds naturally, and regulating root-zone temperature.',
    image: './assets/aistudio/WhatsApp_Image_2026-11-19_at_09.11.36_e7ecd45d.jpeg',
    rawMaterial: 'Coir fiber',
    extractionOrProcess: 'Needle-punched compressed coir mat (with latex and without latex)',
    features: [
      'Natural brown 100% coir fiber construction at 1200 GSM density',
      'Available both with natural latex bonding and without latex',
      'Uniform 10 to 12 mm thickness for durable field weed control',
      'Prevents evaporation while allowing water & air to permeate freely',
      'Packaged cleanly in export carton boxes across sizes from 4" up to 48"'
    ],
    specs: [
      { label: 'Material', value: 'Coir fiber' },
      { label: 'Shape', value: 'Circular' },
      { label: 'Type', value: 'With latex and without latex' },
      { label: 'Thickness', value: '10 to 12 mm' },
      { label: 'GSM', value: '1200' },
      { label: 'Available Sizes', value: '4", 10", 16", 17", 18" to 48" inches' },
      { label: 'Colour', value: 'Natural brown' },
      { label: 'Packing', value: 'Carton box' }
    ],
    sizes: ['4"', '10"', '16"', '17"', '18" to 48" inches'],
    packaging: 'Carton box',
    applications: ['Commercial Orchards & Tree Nurseries', 'Weed Control Weed-Barrier Discs', 'Landscaping & Forestry', 'Potted Plant Moisture Protection']
  },
  {
    id: 'coir-scrubbers',
    name: 'Coir Scrubber Pads',
    category: 'coir',
    categoryName: 'Coir Products',
    businessType: 'Exporter',
    tagline: 'Natural Biodegradable Scouring Pads for Kitchen & Cleaning',
    description: 'Tough, natural coir fiber scrubber pads crafted for non-scratch kitchen and utility cleaning. Sustainable, naturally antimicrobial, odor-resistant, and entirely plastic-free alternative to synthetic nylon pads.',
    image: './assets/edited/coir-scrubber-pads.jpg',
    rawMaterial: 'Coir fiber',
    extractionOrProcess: 'Machine woven & stitched / unstitched pressing',
    features: [
      'Eco-friendly, lightweight, sustainable, and biodegradable',
      'Naturally abrasive yet non-scratch on cookware',
      'Fast-drying, plastic-free, and odor-resistant',
      'Available in stitched and unstitched edges',
      'Rectangle and circular shapes available'
    ],
    specs: [
      { label: 'Material', value: 'Coir fiber' },
      { label: 'Sizes', value: '4 × 3 inches and 6 × 4 inches' },
      { label: 'Type', value: 'Stitched and Unstitched' },
      { label: 'Shapes', value: 'Rectangle and circular' },
      { label: 'Thickness', value: '6 mm' },
      { label: 'Features', value: 'Eco-friendly, Lightweight, Sustainable, Biodegradable' },
      { label: 'Packing', value: 'Carton box' }
    ],
    sizes: ['4 × 3 inches', '6 × 4 inches'],
    packaging: 'Carton box',
    applications: ['Kitchen Cookware Cleaning', 'Eco-Household Supply Brands', 'Industrial Hand Washing', 'General Surface Scrubbing']
  },
  {
    id: 'coir-pvc-backed-mats',
    name: 'Coir PVC Backed Mats',
    category: 'coir',
    categoryName: 'Coir Products',
    businessType: 'Exporter',
    tagline: 'Durable Natural Coir Doormats with Non-Slip PVC Rubber Backing',
    description: 'Heavy-duty entrance mats manufactured from dense natural coir bristles mechanically bonded to a slip-resistant PVC backing. High dirt-scraping capability with plain or custom printed export designs.',
    image: productCoirPvcMatImg,
    rawMaterial: 'Coir fibre and PVC backing',
    extractionOrProcess: 'Needle punched coir bonded with PVC',
    features: [
      'Natural brown resilient coir bristles for superior scraping',
      'Non-slip heavy rubber/PVC backing prevents displacement',
      'Weather-resistant and easy to clean by shaking or vacuuming',
      'Plain natural finish or custom buyer design printing',
      'Durable construction ranging from 1 kg to 2.2 kg per unit'
    ],
    specs: [
      { label: 'Material', value: 'Coir and PVC' },
      { label: 'Sizes', value: '40 × 60 cm, 45 × 75 cm and 60 × 90 cm' },
      { label: 'Thickness', value: '0.2 – 0.4 inches (approx. 10–12 mm)' },
      { label: 'Shape', value: 'Rectangle' },
      { label: 'Weight', value: '1 – 2.2 kg' },
      { label: 'Backing', value: 'Rubber / PVC backing' },
      { label: 'Colour', value: 'Natural brown' },
      { label: 'Design', value: 'Plain or custom design' }
    ],
    sizes: ['40 × 60 cm', '45 × 75 cm', '60 × 90 cm'],
    packaging: 'Carton box / Palletized',
    applications: ['Residential & Commercial Entryways', 'Home Furnishing Distributors', 'Corporate Reception Areas', 'Hospitality & Hotel Entrances']
  },

  // COCONUT SHELL PRODUCTS (Export)
  {
    id: 'coconut-shell-dessert-cups',
    name: 'Coconut Shell Dessert Cups',
    category: 'coconut-shell',
    categoryName: 'Coconut Shell Products',
    businessType: 'Exporter',
    tagline: 'Handcrafted Polished 200 ml Natural Coconut Shell Bowls & Dessert Cups',
    description: 'Eco-friendly handcrafted 200 ml dessert cups crafted from genuine mature coconut shells with a smooth polished finish. Naturally lightweight, food-safe, and 100% biodegradable for hospitality, cafes, and zero-waste dining.',
    image: './assets/edited/coconut-shell-cups.jpg',
    rawMaterial: 'Coconut shell',
    extractionOrProcess: 'Crafted, smoothed & naturally polished',
    features: [
      'Eco-friendly, lightweight, and 100% biodegradable',
      'Smooth polished food-safe natural exterior and interior',
      'Ideal 200 ml serving size for desserts, smoothie bowls, and snacks',
      'Reusable sustainable alternative to plastic and disposable ware',
      'Securely packed in export carton boxes'
    ],
    specs: [
      { label: 'Material', value: 'Coconut shell' },
      { label: 'Size', value: '200 ml' },
      { label: 'Type', value: 'Polished' },
      { label: 'Features', value: 'Eco-friendly, lightweight, Biodegradable' },
      { label: 'Packing', value: 'Carton box' }
    ],
    sizes: ['200 ml'],
    packaging: 'Carton box',
    applications: ['Desserts & Ice Cream Serving', 'Cafes, Resorts & Eco-Hospitality', 'Smoothie Bowls & Salads', 'Sustainable Kitchen & Tableware']
  }
];

export const UPCOMING_PRODUCTS = [
  {
    id: 'sesame-oil',
    name: 'Sesame Oil',
    status: 'Coming Soon',
    timeline: 'Manufacturing Expansion: Next Year',
    rawMaterial: 'Selected Premium Sesame Seeds',
    type: 'Cold Pressed Traditional Oil',
    description: 'Artisanal cold-pressed sesame oil manufacturing planned as part of our upcoming facilities expansion.',
    image: productSesameOilImg,
    note: 'Under active facility planning. Commercial bulk availability scheduled for next year.'
  },
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    status: 'Coming Soon',
    timeline: 'Manufacturing Expansion: Next Year',
    rawMaterial: 'Producer-Fresh Shelled Groundnuts (Peanuts)',
    type: 'Pure Cold Pressed Peanut Oil',
    description: 'Traditional rotary cold-pressed groundnut oil expansion from locally grown peanuts, delivering rich natural taste and aroma.',
    image: productGroundnutOilImg,
    note: 'Facility engineering underway. Commercial bulk availability scheduled for next year.'
  }
];
