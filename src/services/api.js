import { env } from '../config/env';

export const apiClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`[RENOVA-AI API Fallback] ${endpoint}:`, error.message);
    return null;
  }
};
