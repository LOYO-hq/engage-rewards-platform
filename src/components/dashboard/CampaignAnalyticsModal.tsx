
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, Calendar, Star } from 'lucide-react';

interface Campaign {
  id: number;
  name: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  participants: number;
  revenue: number;
  conversionRate: number;
}

interface CampaignAnalyticsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign: Campaign;
}

export const CampaignAnalyticsModal = ({ open, onOpenChange, campaign }: CampaignAnalyticsModalProps) => {
  // Mock analytics data
  const dailyData = [
    { date: '01/15', participants: 12, revenue: 280, redemptions: 8 },
    { date: '01/16', participants: 18, revenue: 420, redemptions: 12 },
    { date: '01/17', participants: 25, revenue: 580, redemptions: 16 },
    { date: '01/18', participants: 22, revenue: 510, redemptions: 14 },
    { date: '01/19', participants: 19, revenue: 445, redemptions: 11 },
    { date: '01/20', participants: 30, revenue: 695, redemptions: 20 },
    { date: '01/21', participants: 28, revenue: 650, redemptions: 18 }
  ];

  const demographicData = [
    { name: 'New Customers', value: 35, color: '#3B82F6' },
    { name: 'Returning Customers', value: 45, color: '#10B981' },
    { name: 'VIP Members', value: 20, color: '#F59E0B' }
  ];

  const hourlyData = [
    { hour: '9 AM', usage: 5 },
    { hour: '10 AM', usage: 8 },
    { hour: '11 AM', usage: 12 },
    { hour: '12 PM', usage: 18 },
    { hour: '1 PM', usage: 22 },
    { hour: '2 PM', usage: 15 },
    { hour: '3 PM', usage: 20 },
    { hour: '4 PM', usage: 25 },
    { hour: '5 PM', usage: 30 },
    { hour: '6 PM', usage: 28 },
    { hour: '7 PM', usage: 24 },
    { hour: '8 PM', usage: 18 }
  ];

  const totalRedemptions = dailyData.reduce((sum, day) => sum + day.redemptions, 0);
  const avgDailyRevenue = campaign.revenue / dailyData.length;
  const growthRate = 15.3; // Mock growth rate

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl">{campaign.name} - Analytics</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                  {campaign.status}
                </Badge>
                <span className="text-sm text-gray-600">{campaign.type}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Participants</p>
                    <p className="text-2xl font-bold">{campaign.participants}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-xs text-green-600 mt-1">+{growthRate}% from last campaign</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold">${campaign.revenue}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <p className="text-xs text-green-600 mt-1">${avgDailyRevenue.toFixed(0)}/day avg</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold">{campaign.conversionRate}%</p>
                  </div>
                  <Target className="h-8 w-8 text-purple-500" />
                </div>
                <p className="text-xs text-green-600 mt-1">Above industry avg</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Redemptions</p>
                    <p className="text-2xl font-bold">{totalRedemptions}</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="text-xs text-gray-600 mt-1">{((totalRedemptions / campaign.participants) * 100).toFixed(1)}% of participants</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Daily Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      name="Revenue ($)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="participants" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      name="Participants"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {demographicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        />
                        {item.name}
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hourly Usage Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="usage" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <div>
                      <p className="font-medium">Start Date</p>
                      <p className="text-sm text-gray-600">{campaign.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <div>
                      <p className="font-medium">End Date</p>
                      <p className="text-sm text-gray-600">{campaign.endDate}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Key Insights</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Peak usage during lunch hours (12-2 PM)</li>
                        <li>• Strong weekend performance</li>
                        <li>• Higher conversion among VIP members</li>
                        <li>• Revenue trending upward daily</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
