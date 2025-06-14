
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardHeader } from './DashboardHeader';
import { DashboardStats } from './DashboardStats';
import { DashboardContent } from './DashboardContent';
import { Sidebar } from './Sidebar';

export const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Main content */}
      <div className="lg:pl-64">
        <DashboardHeader 
          user={user} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="p-4 lg:p-6">
          <DashboardStats />
          <DashboardContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
};
