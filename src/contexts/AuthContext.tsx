
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  businessName?: string;
  subscriptionTier?: 'basic' | 'premium' | 'enterprise';
  subscriptionStatus?: 'active' | 'inactive' | 'trial';
  needsOnboarding?: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, businessName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
  updateUser: (updates: Partial<User>) => void;
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
        subscriptionStatus: 'trial',
        needsOnboarding: false
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
        subscriptionStatus: 'trial',
        needsOnboarding: true
      };
      
      setUser(newUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const googleUser: User = {
        id: '2',
        email: 'user@example.com',
        businessName: '',
        subscriptionTier: 'premium',
        subscriptionStatus: 'trial',
        needsOnboarding: true
      };
      
      setUser(googleUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(googleUser));
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('loyaltyUser');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('loyaltyUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signInWithGoogle, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
