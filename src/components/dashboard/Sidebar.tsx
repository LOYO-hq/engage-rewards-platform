
import { Button } from '@/components/ui/button';
import { 
  QrCode, 
  Users, 
  Star, 
  Info,
  Settings,
  Plus
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'campaigns', label: 'Campaigns', icon: Star },
    { id: 'qrcodes', label: 'QR Codes', icon: QrCode },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

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
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => onTabChange(item.id)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
