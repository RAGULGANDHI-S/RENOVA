import React, { createContext, useContext, useState } from 'react';
import { aiService } from '../services/aiService';

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [detections, setDetections] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeDetection, setActiveDetection] = useState(null);

  const runDetection = async (imageData) => {
    setIsAnalyzing(true);
    try {
      const result = await aiService.detectWaste(imageData);
      setActiveDetection(result);
      setDetections((prev) => [result, ...prev]);
      return result;
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearDetections = () => {
    setDetections([]);
    setActiveDetection(null);
  };

  return (
    <AIContext.Provider value={{ detections, isAnalyzing, activeDetection, runDetection, clearDetections }}>
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => useContext(AIContext);
