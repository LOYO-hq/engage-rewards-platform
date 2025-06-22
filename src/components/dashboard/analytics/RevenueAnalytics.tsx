
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';
import { DollarSign, TrendingUp, CreditCard, Repeat } from 'lucide-react';

export const RevenueAnalytics = () => {
  const revenueData = [
    { 
      month: 'Jan', 
      loyaltyRevenue: 18500, 
      regularRevenue: 45200, 
      totalRevenue: 63700,
      loyaltyCustomers: 234,
      regularCustomers: 890
    },
    { 
      month: 'Feb', 
      loyaltyRevenue: 24800, 
      regularRevenue: 48900, 
      totalRevenue: 73700,
      loyaltyCustomers: 289,
      regularCustomers: 920
    },
    { 
      month: 'Mar', 
      loyaltyRevenue: 31200, 
      regularRevenue: 52100, 
      totalRevenue: 83300,
      loyaltyCustomers: 345,
      regularCustomers: 1050
    },
    { 
      month: 'Apr', 
      loyaltyRevenue: 28900, 
      regularRevenue: 49800, 
      totalRevenue: 78700,
      loyaltyCustomers: 320,
      regularCustomers: 980
    },
    { 
      month: 'May', 
      loyaltyRevenue: 39600, 
      regularRevenue: 56700, 
      totalRevenue: 96300,
      loyaltyCustomers: 412,
      regularCustomers: 1180
    },
    { 
      month: 'Jun', 
      loyaltyRevenue: 45200, 
      regularRevenue: 61200, 
      totalRevenue: 106400,
      loyaltyCustomers: 478,
      regularCustomers: 1290
    }
  ];

  const averageOrderValue = [
    { month: 'Jan', loyalty: 79, regular: 51 },
    { month: 'Feb', loyalty: 86, regular: 53 },
    { month: 'Mar', loyalty: 90, regular: 50 },
    { month: 'Apr', loyalty: 90, regular: 51 },
    { month: 'May', loyalty: 96, regular: 48 },
    { month: 'Jun', loyalty: 95, regular: 47 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Revenue Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="loyaltyRevenue" 
                    stackId="1" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    name="Loyalty Program Revenue"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="regularRevenue" 
                    stackId="1" 
                    stroke="#94A3B8" 
                    fill="#94A3B8" 
                    name="Regular Revenue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-purple-600" />
              Average Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={averageOrderValue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="loyalty" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    name="Loyalty Customers"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="regular" 
                    stroke="#94A3B8" 
                    strokeWidth={3}
                    name="Regular Customers"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Monthly Revenue Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="loyaltyRevenue" fill="#3B82F6" name="Loyalty Program" />
                <Bar dataKey="regularRevenue" fill="#94A3B8" name="Regular Sales" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Loyalty Program Impact</p>
                <p className="text-2xl font-bold text-green-600">+42%</p>
              </div>
              <Repeat className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Customer Value</p>
                <p className="text-2xl font-bold text-blue-600">$95</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue Growth</p>
                <p className="text-2xl font-bold text-purple-600">+67%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Loyalty Contribution</p>
                <p className="text-2xl font-bold text-orange-600">38%</p>
              </div>
              <CreditCard className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
