import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('renova_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role, email, name = '') => {
    const newUser = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      role,
      email,
      name: name || `${role.charAt(0).toUpperCase() + role.slice(1)} Operator`,
      organization: role === 'hotel' ? 'Grand Regency Hotel' : role === 'restaurant' ? 'Verde Bistro' : role === 'farmer' ? 'GreenAcres Bio Farm' : role === 'vendor' ? 'EcoMetals & Plastics Co.' : role === 'delivery' ? 'Fleet Unit #409' : 'RENOVA Enterprise HQ',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${role}`,
      token: 'renova_jwt_' + Date.now()
    };
    setUser(newUser);
    localStorage.setItem('renova_user', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('renova_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
