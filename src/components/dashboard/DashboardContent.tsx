
import { OverviewTab } from './tabs/OverviewTab';
import { CustomersTab } from './tabs/CustomersTab';
import { CampaignsTab } from './tabs/CampaignsTab';
import { QRCodesTab } from './tabs/QRCodesTab';
import { AnalyticsTab } from './tabs/AnalyticsTab';
import { SettingsTab } from './tabs/SettingsTab';
import { StampCardDesigner } from './StampCardDesigner';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardContentProps {
  activeTab: string;
  onNavigate?: (tab: string) => void;
}

export const DashboardContent = ({ activeTab, onNavigate }: DashboardContentProps) => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionTier === 'enterprise';

  switch (activeTab) {
    case 'overview':
      return <OverviewTab onNavigate={onNavigate} />;
    case 'customers':
      return <CustomersTab />;
    case 'campaigns':
      return <CampaignsTab />;
    case 'qrcodes':
      return <QRCodesTab />;
    case 'stamp-designer':
      return <StampCardDesigner />;
    case 'analytics':
      return isPremium ? <AnalyticsTab /> : <OverviewTab onNavigate={onNavigate} />;
    case 'settings':
      return <SettingsTab />;
    default:
      return <OverviewTab onNavigate={onNavigate} />;
  }
};
