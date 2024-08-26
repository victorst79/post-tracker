'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

import { User } from 'firebase/auth';
/* TODO: improve interfaces */
interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (userData: any) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = () => {
    return user !== null;
  };

  const authContextValue = React.useMemo(() => ({ user, setUser, login, logout, isLoggedIn }), [user, setUser, login, logout, isLoggedIn]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}