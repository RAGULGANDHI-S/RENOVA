import axios from 'axios';

// Create base Axios instance
const api = axios.create({
  baseURL: 'https://api.renova-eco.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach bearer token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('renova_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Mock platform data stores for offline/dev showcase
export const mockDataStore = {
  stats: {
    totalWasteCollectedKg: 142500,
    co2SavedKg: 320000,
    farmersSupported: 1280,
    fertilizerProducedKg: 94000,
    activeHotels: 48,
    activeRestaurants: 112,
    activeVendors: 65,
    deliveryPartners: 34
  },
  pickupRequests: [
    {
      id: 'REQ-101',
      source: 'Grand Eco Hotel',
      type: 'Hotel',
      wasteType: 'Organic Kitchen Scraps',
      weightKg: 350,
      status: 'Scheduled',
      address: '742 Evergreen Terrace, Bay Area',
      scheduledTime: 'Today, 2:30 PM',
      driver: 'Alex Rivers'
    },
    {
      id: 'REQ-102',
      source: 'Green Leaf Bistro',
      type: 'Restaurant',
      wasteType: 'Food Waste & Coffee Grounds',
      weightKg: 120,
      status: 'In-Transit',
      address: '108 Market Street, Downtown',
      scheduledTime: 'Today, 1:15 PM',
      driver: 'Sam Vance'
    },
    {
      id: 'REQ-103',
      source: 'Central Agro Market',
      type: 'Vendor',
      wasteType: 'Spoiled Fruit & Produce',
      weightKg: 850,
      status: 'Completed',
      address: '45 Produce Way, Logistics Park',
      scheduledTime: 'Today, 10:00 AM',
      driver: 'Maria Chen'
    }
  ],
  fertilizers: [
    {
      id: 'FERT-01',
      name: 'RENOVA Bio-NPK Max',
      category: 'Liquid Organic Concentrate',
      nitrogen: '4.5%',
      phosphorus: '3.2%',
      potassium: '4.0%',
      pricePerKg: 1.85,
      stockKg: 12500,
      image: 'https://images.unsplash.com/photo-1585336261026-875a60a1c96b?auto=format&fit=crop&w=500&q=80',
      description: 'Enriched with microbial inoculants for rapid soil rejuvenation.'
    },
    {
      id: 'FERT-02',
      name: 'Eco-Humus Vermicompost',
      category: 'Granular Soil Conditioner',
      nitrogen: '2.8%',
      phosphorus: '2.1%',
      potassium: '2.5%',
      pricePerKg: 1.20,
      stockKg: 28000,
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=500&q=80',
      description: 'Pure earthworm castings rich in humic acid and beneficial bacteria.'
    },
    {
      id: 'FERT-03',
      name: 'AgroBoost Bio-Char Blend',
      category: 'Carbon Sequestration Soil Enhancer',
      nitrogen: '1.5%',
      phosphorus: '1.8%',
      potassium: '3.5%',
      pricePerKg: 2.10,
      stockKg: 8500,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80',
      description: 'Pyrolyzed biomass matrix that retains soil moisture and nutrients.'
    }
  ]
};

// API Service Methods
export const apiService = {
  // Fetch System Statistics
  getStats: async () => {
    try {
      // Return simulated fast resolution for presentation
      return { success: true, data: mockDataStore.stats };
    } catch {
      return { success: true, data: mockDataStore.stats };
    }
  },

  // Submit Waste Pickup Request
  createPickupRequest: async (requestData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newReq = {
          id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
          status: 'Scheduled',
          scheduledTime: 'Today, within 2 hours',
          ...requestData
        };
        mockDataStore.pickupRequests.unshift(newReq);
        resolve({ success: true, data: newReq });
      }, 1000);
    });
  },

  // Fetch Fertilizer List for Farmers
  getFertilizers: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: mockDataStore.fertilizers });
      }, 600);
    });
  },

  // Submit Fertilizer Order
  placeFertilizerOrder: async (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
          message: 'Order placed successfully! Delivery scheduled to farm address.'
        });
      }, 1200);
    });
  }
};

export default api;
