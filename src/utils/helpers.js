export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const calculateCarbonSavings = (weightKg, wasteType) => {
  const multipliers = {
    Organic: 1.5,
    Plastic: 2.8,
    Paper: 1.1,
    Glass: 0.9,
    Metal: 3.5,
    Electronic: 4.2,
  };
  return ((multipliers[wasteType] || 1.5) * weightKg).toFixed(1);
};
