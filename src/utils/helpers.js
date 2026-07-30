// RenovA Platform Helper Functions

/**
 * Format currency to USD / Local format
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format weight in Kg or Tons
 */
export const formatWeight = (kg) => {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(1)} Tons`;
  }
  return `${kg.toLocaleString()} kg`;
};

/**
 * Format Date helper
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Role to dashboard route helper
 */
export const getRolePath = (role) => {
  const map = {
    admin: '/admin',
    hotel: '/hotel',
    restaurant: '/restaurant',
    vendor: '/vendor',
    farmer: '/farmer',
    delivery: '/delivery'
  };
  return map[role?.toLowerCase()] || '/';
};

/**
 * Badge style color based on category
 */
export const getCategoryBadgeColor = (isOrganic) => {
  return isOrganic ? 'badge-organic' : 'badge-inorganic';
};

/**
 * Unique ID Generator
 */
export const generateUniqueId = (prefix = 'RNV') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
};

/**
 * Sample pre-loaded waste images with realistic AI detection responses
 */
export const SAMPLE_WASTE_DATA = [
  {
    id: 'sample-1',
    name: 'Vegetable & Fruit Scraps',
    category: 'Kitchen Food Waste',
    isOrganic: true,
    confidence: 98.4,
    compostYield: '92%',
    details: 'High nitrogen content. Excellent for anaerobic digestion & high-grade vermicompost.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sample-2',
    name: 'PET Plastic Containers',
    category: 'Synthetic Polymers',
    isOrganic: false,
    confidence: 96.8,
    compostYield: '0%',
    details: 'Non-biodegradable. Routed to inorganic sorting bay for high-grade mechanical recycling.',
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sample-3',
    name: 'Coffee Grounds & Tea Leaves',
    category: 'Organic Substrate',
    isOrganic: true,
    confidence: 99.1,
    compostYield: '95%',
    details: 'Rich in potassium and phosphorus. Ideal for bio-fertilizer pelletization.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sample-4',
    name: 'Cardboard & Paper Packaging',
    category: 'Cellulosic Material',
    isOrganic: true,
    confidence: 94.2,
    compostYield: '78%',
    details: 'High carbon content. Suitable for brown composting mix or paper fiber recovery.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  }
];

/**
 * Simulate AI neural net image analysis
 */
export const mockAnalyzeImage = (fileOrSample) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // If passing a sample object or file
      if (fileOrSample?.category) {
        resolve(fileOrSample);
        return;
      }
      
      // Default fallback simulated analysis for uploaded custom images
      const isOrganic = Math.random() > 0.3;
      resolve({
        id: generateUniqueId('SCAN'),
        name: fileOrSample?.name || 'Uploaded Waste Sample',
        category: isOrganic ? 'Organic Food & Agro Residue' : 'Inorganic Recyclable Material',
        isOrganic,
        confidence: Number((89 + Math.random() * 10).toFixed(1)),
        compostYield: isOrganic ? `${Math.floor(85 + Math.random() * 12)}%` : '0%',
        details: isOrganic 
          ? 'High organic matter detected. Ready for immediate bio-fermentation.'
          : 'Synthetic material detected. Segregated for material recovery.',
        imageUrl: typeof fileOrSample === 'string' ? fileOrSample : URL.createObjectURL(fileOrSample)
      });
    }, 1800);
  });
};
