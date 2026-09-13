export const aiService = {
  detectWaste: async (imageFileOrData) => {
    // Simulated YOLOv8 / YOLO11 vision detection inference
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const categories = [
      { label: 'Organic Food Scraps', category: 'Organic', confidence: 0.94, bbox: [12, 18, 75, 68] },
      { label: 'PET Plastic Bottle', category: 'Inorganic', confidence: 0.98, bbox: [25, 30, 50, 60] },
      { label: 'Cardboard Packaging', category: 'Inorganic', confidence: 0.89, bbox: [10, 10, 80, 80] },
      { label: 'Compostable Bio-Waste', category: 'Organic', confidence: 0.96, bbox: [20, 15, 65, 70] },
    ];

    const result = categories[Math.floor(Math.random() * categories.length)];

    return {
      id: `det_${Date.now()}`,
      timestamp: new Date().toISOString(),
      label: result.label,
      category: result.category,
      confidence: result.confidence,
      bbox: result.bbox, // [x%, y%, width%, height%]
      recyclableScore: Math.round(result.confidence * 100),
    };
  },
};
