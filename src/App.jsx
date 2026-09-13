import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AIProvider } from './context/AIContext';
import AppRoutes from './routes/AppRoutes';
import './localization/i18n';
=======
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/AppRoutes';
import './styles/globals.css';
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
<<<<<<< HEAD
        <AIProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AIProvider>
=======
        <AppRoutes />
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
      </AuthProvider>
    </ThemeProvider>
  );
};
<<<<<<< HEAD

export default App;
=======
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
