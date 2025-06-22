
import { useAuth } from '@/contexts/AuthContext';
import { PremiumOverview } from '../PremiumOverview';
import { BasicOverview } from '../BasicOverview';

export const OverviewTab = () => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionTier === 'enterprise';

  if (isPremium) {
    return <PremiumOverview />;
  }

  return <BasicOverview />;
};
