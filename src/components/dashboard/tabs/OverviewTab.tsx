
import { useAuth } from '@/contexts/AuthContext';
import { PremiumOverview } from '../PremiumOverview';
import { BasicOverview } from '../BasicOverview';

interface OverviewTabProps {
  onNavigate?: (tab: string) => void;
}

export const OverviewTab = ({ onNavigate }: OverviewTabProps) => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionTier === 'enterprise';

  if (isPremium) {
    return <PremiumOverview onNavigate={onNavigate} />;
  }

  return <BasicOverview />;
};
