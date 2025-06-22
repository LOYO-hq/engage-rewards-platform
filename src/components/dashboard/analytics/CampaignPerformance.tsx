
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';
import { Star, TrendingUp, DollarSign, Users, Eye } from 'lucide-react';

export const CampaignPerformance = () => {
  const campaignData = [
    { 
      name: 'Double Points Weekend', 
      engagement: 847, 
      conversion: 68, 
      revenue: 12400,
      participants: 156,
      status: 'Active',
      roi: 340
    },
    { 
      name: 'Birthday Special', 
      engagement: 523, 
      conversion: 45, 
      revenue: 8900,
      participants: 89,
      status: 'Completed',
      roi: 280
    },
    { 
      name: 'Referral Bonus', 
      engagement: 1234, 
      conversion: 78, 
      revenue: 18700,
      participants: 234,
      status: 'Active',
      roi: 420
    },
    { 
      name: 'New Customer Welcome', 
      engagement: 678, 
      conversion: 52, 
      revenue: 9800,
      participants: 123,
      status: 'Active',
      roi: 310
    }
  ];

  const monthlyPerformance = [
    { month: 'Jan', campaigns: 3, totalEngagement: 2400, totalRevenue: 18500 },
    { month: 'Feb', campaigns: 4, totalEngagement: 3200, totalRevenue: 24800 },
    { month: 'Mar', campaigns: 5, totalEngagement: 4100, totalRevenue: 31200 },
    { month: 'Apr', campaigns: 4, totalEngagement: 3800, totalRevenue: 28900 },
    { month: 'May', campaigns: 6, totalEngagement: 5200, totalRevenue: 39600 },
    { month: 'Jun', campaigns: 5, totalEngagement: 4700, totalRevenue: 36800 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Campaign Engagement Over Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <RechartsTooltip />
                  <Line type="monotone" dataKey="totalEngagement" stroke="#3B82F6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Revenue from Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="totalRevenue" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-purple-600" />
            Active Campaign Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge 
                      variant={campaign.status === 'Active' ? 'default' : 'secondary'}
                      className={campaign.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Engagement</p>
                    <p className="font-semibold text-blue-600">{campaign.engagement}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Conversion</p>
                    <p className="font-semibold text-green-600">{campaign.conversion}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenue</p>
                    <p className="font-semibold text-purple-600">${campaign.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Participants</p>
                    <p className="font-semibold text-orange-600">{campaign.participants}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">ROI</p>
                    <p className="font-semibold text-green-600">{campaign.roi}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
