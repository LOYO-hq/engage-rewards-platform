
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
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="flex-1 lg:ml-64">
          <DashboardHeader user={user || { businessName: '', subscriptionTier: 'basic' }} />
          <main className="p-0">
            <DashboardContent activeTab={activeTab} onNavigate={handleNavigate} />
          </main>
        </div>
      </div>
    </div>
  );
};
