
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Bell, Settings, User } from 'lucide-react';

interface DashboardHeaderProps {
  user: {
    businessName?: string;
    subscriptionTier?: string;
  };
}

export const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  const { signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {user.businessName || 'Your Business'}
          </h1>
          <p className="text-sm text-gray-500 capitalize">
            {user.subscriptionTier} Plan
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={signOut}>
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
