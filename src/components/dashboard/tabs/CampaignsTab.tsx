
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Star, Calendar } from 'lucide-react';
import { CreateCampaignModal } from '../CreateCampaignModal';

export const CampaignsTab = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  const campaigns = [
    {
      id: 1,
      name: 'Double Points Weekend',
      type: 'Points Multiplier',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      participants: 156
    },
    {
      id: 2,
      name: 'Birthday Special',
      type: 'Bonus Reward',
      status: 'Scheduled',
      startDate: '2024-01-20',
      endDate: '2024-01-31',
      participants: 0
    },
    {
      id: 3,
      name: 'New Customer Bonus',
      type: 'Welcome Offer',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 89
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Campaign Management</h2>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{campaign.name}</CardTitle>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                  campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{campaign.type}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {campaign.startDate} - {campaign.endDate}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 mr-2" />
                  {campaign.participants} participants
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Star className="h-6 w-6 mb-2" />
              Double Points
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              Birthday Special
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Plus className="h-6 w-6 mb-2" />
              Referral Program
            </Button>
          </div>
        </CardContent>
      </Card>

      <CreateCampaignModal 
        open={showCreateModal} 
        onOpenChange={setShowCreateModal}
      />
    </div>
  );
};
