export const USER_ROLES = {
  ADMIN: 'Admin',
  HOTEL: 'Hotel',
  RESTAURANT: 'Restaurant',
  VENDOR: 'Vendor',
  FARMER: 'Farmer',
  DELIVERY: 'Delivery',
};

export const WASTE_TYPES = {
  ORGANIC: 'Organic',
  PLASTIC: 'Plastic',
  PAPER: 'Paper',
  GLASS: 'Glass',
  METAL: 'Metal',
  ELECTRONIC: 'Electronic',
};

export const MOCK_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Bio-Enriched Organic Compost',
    category: 'Fertilizer',
    pricePerKg: 18,
    stockKg: 2500,
    rating: 4.9,
    seller: 'EcoTerra Composting Co.',
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80',
    type: 'Organic',
  },
  {
    id: 'prod-2',
    name: 'High-Density Pelletized Organic Fertilizer',
    category: 'Fertilizer',
    pricePerKg: 24,
    stockKg: 1800,
    rating: 4.8,
    seller: 'GreenCycle Agritech',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80',
    type: 'Organic',
  },
  {
    id: 'prod-3',
    name: 'Processed Recycled PET Flakes',
    category: 'Raw Materials',
    pricePerKg: 32,
    stockKg: 5000,
    rating: 4.7,
    seller: 'PurePolymer Recyclers',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    type: 'Inorganic',
  },
];
