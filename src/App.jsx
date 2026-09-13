import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AIProvider } from './context/AIContext';
import AppRoutes from './routes/AppRoutes';
import './localization/i18n';

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AIProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AIProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
