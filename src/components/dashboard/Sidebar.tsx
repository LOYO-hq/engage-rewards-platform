
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  Users, 
  Star, 
  Info,
  Settings,
  Plus,
  BarChart3
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionTier === 'enterprise';

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'campaigns', label: 'Campaigns', icon: Star },
    { id: 'qrcodes', label: 'QR Codes', icon: QrCode },
  ];

  // Add analytics tab for premium users
  if (isPremium) {
    menuItems.splice(4, 0, { id: 'analytics', label: 'Analytics', icon: BarChart3 });
  }

  menuItems.push({ id: 'settings', label: 'Settings', icon: Settings });

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform lg:translate-x-0 lg:static lg:inset-0">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <QrCode className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold">LoyaltyPro</span>
        </div>
        
        <div className="flex-1 px-4 py-6">
          <Button className="w-full mb-6" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Quick Action
          </Button>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <Button
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => onTabChange(item.id)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                  {item.id === 'analytics' && isPremium && (
                    <Badge className="ml-auto bg-purple-100 text-purple-700 text-xs">
                      PRO
                    </Badge>
                  )}
                </Button>
              </div>
            ))}
          </nav>

          {!isPremium && (
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
              <h3 className="font-semibold text-sm text-gray-800 mb-2">Unlock Premium</h3>
              <p className="text-xs text-gray-600 mb-3">Get advanced analytics, AI insights, and more.</p>
              <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Upgrade Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
