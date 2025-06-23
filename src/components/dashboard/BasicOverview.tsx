
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, QrCode, Star, Users, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const BasicOverview = () => {
  const { upgradeToPremium } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-gray-600">Basic Plan</Badge>
            <Button variant="link" className="text-blue-600 p-0 h-auto" onClick={upgradeToPremium}>
              Upgrade to Premium for Advanced Analytics
            </Button>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <QrCode className="h-4 w-4 mr-2" />
            Create QR Code
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">New customer joined: John Doe</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">QR code scanned 12 times today</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Campaign "Double Points" ended</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 flex-col">
                <Users className="h-6 w-6 mb-1" />
                Add Customer
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <QrCode className="h-6 w-6 mb-1" />
                Generate QR
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <Star className="h-6 w-6 mb-1" />
                New Promotion
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <Plus className="h-6 w-6 mb-1" />
                Campaign
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <p className="text-sm text-gray-600">Customer Retention</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">3.2x</div>
              <p className="text-sm text-gray-600">Average Visit Frequency</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">$48</div>
              <p className="text-sm text-gray-600">Avg Customer Value</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Prompt */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Unlock Advanced Analytics</h3>
              <p className="text-blue-700 mt-1">Get deep insights into customer behavior, ROI tracking, and AI-powered recommendations.</p>
              <Badge className="mt-2 bg-green-500 text-white">14-Day Free Trial</Badge>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mr-4" />
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={upgradeToPremium}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
