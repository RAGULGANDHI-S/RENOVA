<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect } from 'react';
=======
import React, { createContext, useContext, useState } from 'react';
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
<<<<<<< HEAD
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('renova_theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('renova_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
=======
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
>>>>>>> 0795af187bcd4eea9fc84bc410602ad457b1ff2b
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
