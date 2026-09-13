import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile, UserRole } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  role: UserRole;
  setRole: (role: UserRole) => void;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>({
    id: 'usr_demo_123',
    email: 'admin@renova-ai.io',
    name: 'Demo Admin User',
    role: 'super-admin',
    createdAt: new Date().toISOString(),
  });

  const [role, setRole] = useState<UserRole>('super-admin');

  const login = (email: string, selectedRole: UserRole) => {
    setUser({
      id: `usr_${Date.now()}`,
      email,
      name: email.split('@')[0],
      role: selectedRole,
      createdAt: new Date().toISOString(),
    });
    setRole(selectedRole);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, setRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
