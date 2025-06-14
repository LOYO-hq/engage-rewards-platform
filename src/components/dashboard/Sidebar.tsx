
import { Button } from '@/components/ui/button';
import { 
  QrCode, 
  Users, 
  Star, 
  Info,
  Settings,
  Plus,
  Heart
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
    <div className="h-full bg-white shadow-lg border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              LOYO
            </span>
          </div>
        </div>
        
        <div className="flex-1 px-4 py-6">
          <Button className="w-full mb-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" size="sm">
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
