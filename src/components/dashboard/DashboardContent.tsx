
import { OverviewTab } from './tabs/OverviewTab';
import { CustomersTab } from './tabs/CustomersTab';
import { CampaignsTab } from './tabs/CampaignsTab';
import { QRCodesTab } from './tabs/QRCodesTab';
import { SettingsTab } from './tabs/SettingsTab';

interface DashboardContentProps {
  activeTab: string;
}

export const DashboardContent = ({ activeTab }: DashboardContentProps) => {
  switch (activeTab) {
    case 'overview':
      return <OverviewTab />;
    case 'customers':
      return <CustomersTab />;
    case 'campaigns':
      return <CampaignsTab />;
    case 'qrcodes':
      return <QRCodesTab />;
    case 'settings':
      return <SettingsTab />;
    default:
      return <OverviewTab />;
  }
};
