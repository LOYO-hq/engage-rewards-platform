
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

export const CustomerInsights = () => {
  const customerSegmentData = [
    { name: 'VIP (10+ visits)', value: 156, color: '#8B5CF6' },
    { name: 'Regular (5-9 visits)', value: 324, color: '#3B82F6' },
    { name: 'Occasional (2-4 visits)', value: 892, color: '#10B981' },
    { name: 'New (1 visit)', value: 445, color: '#F59E0B' }
  ];

  const customerLifetimeValue = [
    { month: 'Jan', newCustomers: 120, returningCustomers: 890, totalValue: 12400 },
    { month: 'Feb', newCustomers: 145, returningCustomers: 920, totalValue: 14200 },
    { month: 'Mar', newCustomers: 167, returningCustomers: 1050, totalValue: 16800 },
    { month: 'Apr', newCustomers: 189, returningCustomers: 1180, totalValue: 18900 },
    { month: 'May', newCustomers: 234, returningCustomers: 1320, totalValue: 22100 },
    { month: 'Jun', newCustomers: 278, returningCustomers: 1450, totalValue: 26400 }
  ];

  const visitFrequencyData = [
    { frequency: 'Daily', customers: 89 },
    { frequency: 'Weekly', customers: 234 },
    { frequency: 'Bi-weekly', customers: 456 },
    { frequency: 'Monthly', customers: 678 },
    { frequency: 'Quarterly', customers: 234 }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Customer Segments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {customerSegmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Customer Lifetime Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerLifetimeValue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="totalValue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-600" />
            Visit Frequency Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitFrequencyData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="frequency" type="category" width={80} />
                <RechartsTooltip />
                <Bar dataKey="customers" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Customer Growth Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={customerLifetimeValue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Line type="monotone" dataKey="newCustomers" stroke="#10B981" strokeWidth={3} />
                <Line type="monotone" dataKey="returningCustomers" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
