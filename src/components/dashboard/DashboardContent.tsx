
import { OverviewTab } from './tabs/OverviewTab';
import { CustomersTab } from './tabs/CustomersTab';
import { CampaignsTab } from './tabs/CampaignsTab';
import { QRCodesTab } from './tabs/QRCodesTab';
import { AnalyticsTab } from './tabs/AnalyticsTab';
import { SettingsTab } from './tabs/SettingsTab';
import { useAuth } from '@/contexts/AuthContext';

interface DashboardContentProps {
  activeTab: string;
}

export const DashboardContent = ({ activeTab }: DashboardContentProps) => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionTier === 'enterprise';

  switch (activeTab) {
    case 'overview':
      return <OverviewTab />;
    case 'customers':
      return <CustomersTab />;
    case 'campaigns':
      return <CampaignsTab />;
    case 'qrcodes':
      return <QRCodesTab />;
    case 'analytics':
      return isPremium ? <AnalyticsTab /> : <OverviewTab />;
    case 'settings':
      return <SettingsTab />;
    default:
      return <OverviewTab />;
  }
};
