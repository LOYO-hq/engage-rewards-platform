
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Star, Calendar, BarChart3, Edit, Trash2 } from 'lucide-react';
import { CreateCampaignModal } from '../CreateCampaignModal';
import { CampaignAnalyticsModal } from '../CampaignAnalyticsModal';

export const CampaignsTab = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState<number | null>(null);
  
  const campaigns = [
    {
      id: 1,
      name: 'Double Points Weekend',
      type: 'Points Multiplier',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      participants: 156,
      revenue: 2840,
      conversionRate: 12.5
    },
    {
      id: 2,
      name: 'Birthday Special',
      type: 'Bonus Reward',
      status: 'Scheduled',
      startDate: '2024-01-20',
      endDate: '2024-01-31',
      participants: 0,
      revenue: 0,
      conversionRate: 0
    },
    {
      id: 3,
      name: 'New Customer Bonus',
      type: 'Welcome Offer',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      participants: 89,
      revenue: 1650,
      conversionRate: 8.2
    }
  ];

  const campaignTemplates = [
    {
      id: 'double_points',
      name: 'Double Points',
      description: '2x loyalty points for weekend purchases',
      icon: Star,
      config: {
        type: 'points_multiplier',
        value: 2,
        validDays: ['saturday', 'sunday']
      }
    },
    {
      id: 'birthday_special',
      name: 'Birthday Special',
      description: '25% off during birthday month',
      icon: Calendar,
      config: {
        type: 'percentage_discount',
        value: 25,
        targetAudience: 'birthday'
      }
    },
    {
      id: 'referral_program',
      name: 'Referral Program',
      description: '$10 credit for each successful referral',
      icon: Plus,
      config: {
        type: 'referral',
        value: 10
      }
    }
  ];

  const handleEditCampaign = (campaignId: number) => {
    console.log('Editing campaign:', campaignId);
    // In a real app, this would populate the create modal with existing data
    setShowCreateModal(true);
  };

  const handleViewAnalytics = (campaignId: number) => {
    setSelectedCampaignId(campaignId);
    setShowAnalyticsModal(true);
  };

  const handleUseTemplate = (template: any) => {
    console.log('Using template:', template);
    // In a real app, this would pre-populate the create modal with template data
    setShowCreateModal(true);
  };

  const selectedCampaign = campaigns.find(c => c.id === selectedCampaignId);

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
                {campaign.status === 'Active' && (
                  <div className="text-sm text-gray-600">
                    <p>Revenue: ${campaign.revenue}</p>
                    <p>Conversion: {campaign.conversionRate}%</p>
                  </div>
                )}
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditCampaign(campaign.id)}
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleViewAnalytics(campaign.id)}
                  >
                    <BarChart3 className="h-3 w-3 mr-1" />
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
          <p className="text-sm text-gray-600">Quick-start templates for common campaign types</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {campaignTemplates.map((template) => (
              <Card 
                key={template.id}
                className="cursor-pointer transition-all hover:shadow-md hover:scale-105"
                onClick={() => handleUseTemplate(template)}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <template.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <CreateCampaignModal 
        open={showCreateModal} 
        onOpenChange={setShowCreateModal}
      />

      {selectedCampaign && (
        <CampaignAnalyticsModal
          open={showAnalyticsModal}
          onOpenChange={setShowAnalyticsModal}
          campaign={selectedCampaign}
        />
      )}
    </div>
  );
};
