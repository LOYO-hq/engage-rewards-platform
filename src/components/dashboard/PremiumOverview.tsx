
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  QrCode, 
  Star, 
  Users, 
  TrendingUp, 
  Gift,
  Share2,
  Target,
  Zap,
  BarChart3,
  PieChart,
  LineChart,
  Settings
} from 'lucide-react';

export const PremiumOverview = () => {
  const [favoriteCharts, setFavoriteCharts] = useState([
    'customer-segments',
    'revenue-trend',
    'campaign-performance',
    'loyalty-impact'
  ]);

  const quickActions = [
    {
      title: 'Stamp Card QR',
      description: 'Create digital punch cards',
      icon: QrCode,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      action: 'create-stamp-card'
    },
    {
      title: 'Promotion Campaign',
      description: 'Launch special offers',
      icon: Star,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      action: 'create-promotion'
    },
    {
      title: 'Referral Program',
      description: 'Grow through referrals',
      icon: Share2,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      action: 'create-referral'
    },
    {
      title: 'Gift Cards',
      description: 'Digital gift cards',
      icon: Gift,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      action: 'create-gift-card'
    }
  ];

  const analyticsSnapshots = [
    {
      id: 'customer-segments',
      title: 'Customer Segments',
      type: 'pie',
      value: '65% Returning',
      trend: '+8%',
      icon: PieChart
    },
    {
      id: 'revenue-trend',
      title: 'Revenue Growth',
      type: 'line',
      value: '$106,400',
      trend: '+23%',
      icon: LineChart
    },
    {
      id: 'campaign-performance',
      title: 'Campaign ROI',
      type: 'bar',
      value: '340% Avg',
      trend: '+45%',
      icon: BarChart3
    },
    {
      id: 'loyalty-impact',
      title: 'Loyalty Impact',
      type: 'area',
      value: '+42% Revenue',
      trend: '+12%',
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Premium Dashboard</h2>
          <p className="text-gray-600">Complete control over your loyalty ecosystem</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">
          Premium Plan
        </Badge>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex-col p-4 border-2 hover:border-blue-300 transition-all duration-200"
              >
                <div className={`p-2 rounded-lg ${action.color} mb-2`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm">{action.title}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Snapshots */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Analytics Snapshots
            </CardTitle>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Customize
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {analyticsSnapshots.map((snapshot) => (
              <Card key={snapshot.id} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <snapshot.icon className="h-6 w-6 text-blue-600" />
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {snapshot.trend}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-700 mb-1">
                    {snapshot.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">{snapshot.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity & Quick Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Campaign "Double Points" launched</p>
                  <p className="text-xs text-gray-500">847 customers engaged in first hour</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">156 new loyalty members joined</p>
                  <p className="text-xs text-gray-500">23% increase from last week</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Referral program generated $8,900</p>
                  <p className="text-xs text-gray-500">89 successful referrals this month</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">VIP tier reached 156 customers</p>
                  <p className="text-xs text-gray-500">Avg spend: $95 per visit</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Customer Retention Rate</p>
                  <p className="text-2xl font-bold text-green-600">94.2%</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600">+5.8% vs industry avg</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-15 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Average Visit Frequency</p>
                  <p className="text-2xl font-bold text-blue-600">3.2x/month</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-blue-600">+0.8x from baseline</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Revenue Per Customer</p>
                  <p className="text-2xl font-bold text-purple-600">$248</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-purple-600">+$89 with loyalty</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-14 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Program ROI</p>
                  <p className="text-2xl font-bold text-orange-600">420%</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-orange-600">$4.20 per $1 invested</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-full h-2 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Target className="h-5 w-5" />
            AI-Powered Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">💡 Opportunity Detected</h4>
              <p className="text-sm text-green-700">
                Your Tuesday traffic is 40% lower. A "Double Points Tuesday" campaign could boost visits by an estimated 65%.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Target Segment</h4>
              <p className="text-sm text-blue-700">
                147 customers are close to VIP tier. A small nudge campaign could convert 78% of them within 2 weeks.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">📈 Growth Prediction</h4>
              <p className="text-sm text-purple-700">
                Based on current trends, your loyalty program will generate an additional $47K in revenue next quarter.
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-800 mb-2">⚠️ Retention Alert</h4>
              <p className="text-sm text-orange-700">
                89 high-value customers haven't visited in 21+ days. Launch a win-back campaign within 5 days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
