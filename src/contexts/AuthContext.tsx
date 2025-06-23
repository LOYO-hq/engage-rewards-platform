
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  businessName?: string;
  subscriptionTier?: 'basic' | 'premium' | 'enterprise';
  subscriptionStatus?: 'active' | 'inactive' | 'trial';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, businessName: string) => Promise<void>;
  signOut: () => void;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkSession = async () => {
      const storedUser = localStorage.getItem('loyaltyUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };
    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        businessName: 'Demo Business',
        subscriptionTier: 'premium',
        subscriptionStatus: 'trial'
      };
      
      setUser(mockUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, businessName: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: '1',
        email,
        businessName,
        subscriptionTier: 'premium',
        subscriptionStatus: 'trial'
      };
      
      setUser(newUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const upgradeToPremium = () => {
    if (user) {
      const updatedUser = {
        ...user,
        subscriptionTier: 'premium' as const,
        subscriptionStatus: 'active' as const
      };
      setUser(updatedUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(updatedUser));
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('loyaltyUser');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, upgradeToPremium }}>
      {children}
    </AuthContext.Provider>
  );
};
