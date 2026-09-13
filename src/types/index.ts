export type UserRole = 
  | 'admin' 
  | 'super-admin'
  | 'hotel' 
  | 'restaurant' 
  | 'vendor' 
  | 'farmer' 
  | 'contractor' 
  | 'delivery'
  | 'industry';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  organization?: string;
  createdAt: string;
}

export interface WasteDetectionResult {
  id: string;
  timestamp: string;
  materialType: 'plastic' | 'paper' | 'metal' | 'glass' | 'organic' | 'electronic';
  confidenceScore: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  imageUrl: string;
}

export interface IoTSensorData {
  binId: string;
  locationName: string;
  fillLevelPercent: number;
  weightKg: number;
  temperatureC: number;
  batteryPercent: number;
  lastUpdated: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface MarketplaceItem {
  id: string;
  title: string;
  category: 'recycled-plastic' | 'compost' | 'metal-scrap' | 'glass-cullet' | 'e-waste';
  pricePerKg: number;
  quantityAvailableKg: number;
  supplierName: string;
  rating: number;
  imageUrl: string;
}
