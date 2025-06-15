
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Gift, 
  Calendar,
  Target,
  Crown,
  AlertTriangle,
  QrCode,
  DollarSign
} from 'lucide-react';
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
  Tooltip as RechartsTooltip
} from 'recharts';

export const AdvancedAnalytics = () => {
  // Sample data for charts
  const visitData = [
    { date: '2024-01-01', visits: 45, newCustomers: 12, returningCustomers: 33 },
    { date: '2024-01-02', visits: 52, newCustomers: 15, returningCustomers: 37 },
    { date: '2024-01-03', visits: 38, newCustomers: 8, returningCustomers: 30 },
    { date: '2024-01-04', visits: 61, newCustomers: 18, returningCustomers: 43 },
    { date: '2024-01-05', visits: 72, newCustomers: 22, returningCustomers: 50 },
    { date: '2024-01-06', visits: 85, newCustomers: 25, returningCustomers: 60 },
    { date: '2024-01-07', visits: 68, newCustomers: 16, returningCustomers: 52 }
  ];

  const repeatVisitData = [
    { name: 'First-time', value: 35, color: '#3B82F6' },
    { name: 'Returning', value: 65, color: '#10B981' }
  ];

  const timeIntervalData = [
    { interval: '1-3 days', customers: 120 },
    { interval: '4-7 days', customers: 85 },
    { interval: '8-14 days', customers: 65 },
    { interval: '15-30 days', customers: 40 },
    { interval: '30+ days', customers: 25 }
  ];

  const topCustomers = [
    { name: 'Sarah Johnson', visits: 24, avatar: '👩' },
    { name: 'Mike Chen', visits: 19, avatar: '👨' },
    { name: 'Emma Davis', visits: 17, avatar: '👩' },
    { name: 'Alex Rodriguez', visits: 15, avatar: '👨' },
    { name: 'Lisa Wong', visits: 14, avatar: '👩' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Advanced Analytics</h2>
          <p className="text-gray-600">Deep insights into your customer loyalty program</p>
        </div>
        <Badge className="bg-blue-100 text-blue-700">Premium Plan</Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="behavior">Customer Behavior</TabsTrigger>
          <TabsTrigger value="insights">Insights & ROI</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1">
                      Total Visits
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total customer check-ins across all locations</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1">
                      Repeat Visit Rate
                      <Users className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage of customers who visited more than once</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-green-600 mt-1">+8% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1">
                      Avg Time Between Visits
                      <Clock className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Average days between customer visits</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.5 days</div>
                <p className="text-xs text-green-600 mt-1">-1.2 days (better)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <Tooltip>
                    <TooltipTrigger className="flex items-center gap-1">
                      Redemption Rate
                      <Gift className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage of issued rewards that were redeemed</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">74%</div>
                <p className="text-xs text-green-600 mt-1">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Customer Visits Over Time
                <Tooltip>
                  <TooltipTrigger>
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Track your overall traffic trends and identify patterns</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="visits" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="newCustomers" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="returningCustomers" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Repeat Visit Distribution
                  <Tooltip>
                    <TooltipTrigger>
                      <Users className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Shows loyalty program stickiness and engagement</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={repeatVisitData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {repeatVisitData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Time Between Visits
                  <Tooltip>
                    <TooltipTrigger>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Understanding visit patterns helps optimize promotions</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeIntervalData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="interval" />
                      <YAxis />
                      <RechartsTooltip />
                      <Bar dataKey="customers" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Most Active Customers
                  <Tooltip>
                    <TooltipTrigger>
                      <Crown className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Identify your VIP customers for special targeting</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCustomers.map((customer, index) => (
                    <div key={customer.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{customer.avatar}</span>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-500">{customer.visits} visits</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        #{index + 1}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  QR Code Engagement
                  <Tooltip>
                    <TooltipTrigger>
                      <QrCode className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Monitor QR code scan rates and engagement</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Scans Today</span>
                    <span className="text-2xl font-bold">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Unique Customers</span>
                    <span className="text-lg font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Conversion Rate</span>
                    <Badge className="bg-green-100 text-green-700">68%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Peak Hour</span>
                    <span className="font-medium">12:00 - 1:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Churn Risk Indicator
                <Tooltip>
                  <TooltipTrigger>
                    <AlertTriangle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Customers at risk of churning - ideal for win-back campaigns</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">18%</div>
                  <p className="text-sm text-gray-600">At Risk (30+ days)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">25%</div>
                  <p className="text-sm text-gray-600">Declining (15-30 days)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">57%</div>
                  <p className="text-sm text-gray-600">Active (&lt; 15 days)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Plan ROI Estimation
                  <Tooltip>
                    <TooltipTrigger>
                      <DollarSign className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Estimated revenue retained due to your loyalty program</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Plan Cost (Monthly)</span>
                      <span className="font-semibold">$59</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Estimated Retained Revenue</span>
                      <span className="text-2xl font-bold text-green-600">$2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>ROI</span>
                      <Badge className="bg-green-100 text-green-700 text-lg">48x</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm">💡 <strong>Opportunity:</strong> Tuesdays are your quietest day. Try running a "Double Points Tuesday" promotion.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm">✅ <strong>Success:</strong> Your loyalty program retained ~18% more customers this month compared to baseline.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm">⚠️ <strong>Alert:</strong> 47 customers haven't visited in 30+ days. Consider a win-back campaign.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Customer Growth Trend
                <Tooltip>
                  <TooltipTrigger>
                    <Target className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Track new customer acquisition and growth patterns</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <RechartsTooltip />
                    <Bar dataKey="newCustomers" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
