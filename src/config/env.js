export const env = {
  appName: import.meta.env.VITE_APP_TITLE || 'RENOVA-AI',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'mock-key',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'renova-ai.firebaseapp.com',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'renova-ai',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'renova-ai.appspot.com',
  },
  yoloModelUrl: import.meta.env.VITE_YOLO_MODEL_URL || 'https://models.renova-ai.io/yolov8-waste.onnx',
};
