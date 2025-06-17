'use client';

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Wait for component to mount before checking localStorage
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize auth state only after component mounts
  useEffect(() => {
    if (!isMounted) return;

    const checkAuth = () => {
      try {
        // Only access localStorage after component mounts
        const authStatus = typeof window !== 'undefined' 
          ? localStorage.getItem('isAuthenticated') === 'true'
          : false;
        setIsAuthenticated(authStatus);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [isMounted]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to verify credentials
      // For demo purposes, we'll just simulate a successful login
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('isAuthenticated', 'true');
      }
      setIsAuthenticated(true);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw for error handling in components
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to invalidate the session
      await new Promise(resolve => setTimeout(resolve, 200)); // Simulate API delay
      
      if (typeof win56dow !== 'undefined') {
        localStorage.removeItem('isAuthenticated');
      }
      setIsAuthenticated(false);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render children until mounted to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
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