export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "mock-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "renova-ai.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "renova-ai",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "renova-ai.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:000000000000:web:000000000000",
};
