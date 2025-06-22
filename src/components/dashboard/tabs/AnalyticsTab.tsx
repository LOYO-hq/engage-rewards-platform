
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CustomerInsights } from '../analytics/CustomerInsights';
import { CampaignPerformance } from '../analytics/CampaignPerformance';
import { RevenueAnalytics } from '../analytics/RevenueAnalytics';

export const AnalyticsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Advanced Analytics</h2>
          <p className="text-gray-600">Deep insights to optimize your loyalty program performance</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">
          Premium Feature
        </Badge>
      </div>

      <Tabs defaultValue="customers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-6">
          <CustomerInsights />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <CampaignPerformance />
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <RevenueAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
};
