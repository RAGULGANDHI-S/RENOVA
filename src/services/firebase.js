import { firebaseConfig } from '../config/firebaseConfig';

// Firebase service initializer placeholder & fallback mock
export const initFirebase = () => {
  return {
    config: firebaseConfig,
    status: 'connected',
  };
};
