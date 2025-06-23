
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardContent } from './DashboardContent';
import { DashboardHeader } from './DashboardHeader';
import { useAuth } from '@/contexts/AuthContext';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="flex-1">
        <DashboardHeader user={user || { businessName: '', subscriptionTier: 'basic' }} />
        <main>
          <DashboardContent activeTab={activeTab} onNavigate={handleNavigate} />
        </main>
      </div>
    </div>
  );
};
