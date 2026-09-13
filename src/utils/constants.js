<<<<<<< HEAD
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
=======
export const RENOVA_STATS = [
  { id: 'waste', label: 'Tons Diverted', value: 1428500, suffix: '+', icon: 'Recycle' },
  { id: 'co2', label: 'CO₂ Offset (MT)', value: 890400, suffix: ' MT', icon: 'CloudOff' },
  { id: 'accuracy', label: 'AI Visual Precision', value: 99.6, suffix: '%', icon: 'Cpu' },
  { id: 'recovered', label: 'Raw Material Value', value: 48.2, prefix: '$', suffix: 'M', icon: 'TrendingUp' }
];

export const DEMO_WASTE_SAMPLES = [
  {
    id: 'organic-1',
    name: 'Mixed Hospitality Food Waste',
    category: 'Organic Bio-Waste',
    confidence: 99.4,
    moisture: '68%',
    compostPotential: '94%',
    methaneReduction: '1.4 kg CO2e / kg',
    color: '#10B981',
    valuePerKg: '$0.32',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    details: 'Suitable for high-grade aerobic thermophilic composting into NPK-rich fertilizer.'
  },
  {
    id: 'plastic-1',
    name: 'PET Clear Bottles & Containers',
    category: 'High-Purity Polymer',
    confidence: 99.8,
    moisture: '2%',
    compostPotential: '0%',
    methaneReduction: '2.1 kg CO2e / kg',
    color: '#06B6D4',
    valuePerKg: '$0.85',
    image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&w=600&q=80',
    details: 'Recyclable into Grade-A rPET pellets for apparel and packaging applications.'
  },
  {
    id: 'metal-1',
    name: 'Industrial Aluminum Packaging',
    category: 'Non-Ferrous Metal',
    confidence: 99.1,
    moisture: '1%',
    compostPotential: '0%',
    methaneReduction: '9.2 kg CO2e / kg',
    color: '#3B82F6',
    valuePerKg: '$1.45',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=600&q=80',
    details: 'Infinite circular re-smelting potential with 95% energy savings over virgin ore.'
  },
  {
    id: 'cardboard-1',
    name: 'Corrugated Supply Box Kraft',
    category: 'Cellulose Fibers',
    confidence: 98.7,
    moisture: '12%',
    compostPotential: '45%',
    methaneReduction: '0.9 kg CO2e / kg',
    color: '#F59E0B',
    valuePerKg: '$0.28',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    details: 'High fiber retention; optimal for recycled linerboard manufacturing.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Autonomous Vision Detection',
    description: 'Edge-mounted multispectral AI cameras inspect incoming waste streams at 120 FPS, identifying material polymers, food types, moisture levels, and purity.',
    icon: 'ScanLine'
  },
  {
    step: '02',
    title: 'Robotic Air Jet Segregation',
    description: 'High-speed optical sorters and pneumatic air-jets deflect materials into dedicated bio, polymer, metal, and fiber recovery chutes with sub-millimeter accuracy.',
    icon: 'Bot'
  },
  {
    step: '03',
    title: 'Smart Logistics & Fleet Routing',
    description: 'Predictive fill-level IoT sensors trigger dynamic vehicle dispatch, optimizing route topography to cut diesel fuel emissions by 42%.',
    icon: 'Truck'
  },
  {
    step: '04',
    title: 'Thermophilic Bio-Transformation',
    description: 'Organic kitchen waste undergoes rapid 72-hour aerobic digestion inside smart bioreactors, creating nutrient-certified organic NPK fertilizer.',
    icon: 'Leaf'
  },
  {
    step: '05',
    title: 'Circular Marketplace Supply',
    description: 'Bio-fertilizer and rPET raw materials are delivered directly to verified organic agricultural cooperatives and sustainable manufacturers.',
    icon: 'Store'
  }
];

export const TESTIMONIALS = [
  {
    quote: "RENOVA transformed our hotel operations across 14 luxury resorts. We eliminated 85% of landfill waste and achieved verified zero-waste-to-landfill status in under 5 months.",
    author: "Elena Rostova",
    role: "VP of Global Sustainability",
    company: "Grand Haven Hospitality Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The organic compost quality from RENOVA's bio-reactors increased our crop yield by 28% while reducing chemical fertilizer spending by $45,000 annually.",
    author: "Marcus Vance",
    role: "Director of Regenerative Agriculture",
    company: "SunValley Organic Farms",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a logistics & recycling vendor, RENOVA's AI auction engine keeps our recovery trucks at 98% capacity with pre-sorted, high-purity recyclable streams.",
    author: "Sophia Chen",
    role: "Chief Operating Officer",
    company: "Apex EcoRecycle Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export const PARTNERS = [
  { name: 'Marriott International', logo: 'MARRIOTT' },
  { name: 'ITC Hospitality', logo: 'ITC HOTELS' },
  { name: 'Swiggy Gourmet', logo: 'SWIGGY' },
  { name: 'Zomato Circular', logo: 'ZOMATO' },
  { name: 'Sustainable Agriculture Co.', logo: 'AGRI-CO' },
  { name: 'Apex Logistics', logo: 'APEX LOGISTICS' }
];

export const USER_ROLES = [
  { id: 'admin', title: 'Platform Admin', desc: 'System analytics, global fleet, AI model controls & revenue', icon: 'ShieldCheck', path: '/auth/admin' },
  { id: 'hotel', title: 'Hotel Partner', desc: 'Commercial waste tracking, pickup dispatch & ESG reports', icon: 'Building2', path: '/auth/hotel' },
  { id: 'restaurant', title: 'Restaurant Hub', desc: 'Food waste analytics, compost rewards & volume tracking', icon: 'Utensils', path: '/auth/restaurant' },
  { id: 'vendor', title: 'Recycling Vendor', desc: 'Material trading exchange, pickup bids & payouts', icon: 'Factory', path: '/auth/vendor' },
  { id: 'farmer', title: 'Organic Farmer', desc: 'Bio-compost marketplace, soil NPK analysis & deliveries', icon: 'Sprout', path: '/auth/farmer' },
  { id: 'delivery', title: 'Logistics Driver', desc: 'Turn-by-turn route optimization & IoT container status', icon: 'Navigation', path: '/auth/delivery' }
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
];
