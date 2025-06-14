
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LandingPage } from '@/components/landing/LandingPage';
import { Dashboard } from '@/components/dashboard/Dashboard';

const Index = () => {
  const { user, isLoading } = useAuth();
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (user) {
      setShowLanding(false);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (user) {
    if (user.needsOnboarding) {
      return <Navigate to="/onboarding" />;
    }
    return <Dashboard />;
  }

  return showLanding ? <LandingPage /> : <Navigate to="/auth" />;
};

export default Index;
