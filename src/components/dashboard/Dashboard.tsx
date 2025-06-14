
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from './DashboardHeader';
import { DashboardStats } from './DashboardStats';
import { DashboardContent } from './DashboardContent';
import { Sidebar } from './Sidebar';

export const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 lg:ml-64">
        <DashboardHeader user={user} />
        
        <main className="p-6">
          <DashboardStats />
          <DashboardContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
};
