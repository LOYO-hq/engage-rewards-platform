
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Calendar as CalendarIcon, 
  Star, 
  Gift, 
  Users, 
  Target, 
  Percent,
  DollarSign,
  Sparkles,
  Heart,
  Zap,
  Crown
} from 'lucide-react';
import { format } from 'date-fns';

interface CreateCampaignModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CampaignConfig {
  name: string;
  description: string;
  type: 'points_multiplier' | 'percentage_discount' | 'fixed_discount' | 'free_item' | 'buy_x_get_y' | 'birthday_special' | 'referral';
  startDate?: Date;
  endDate?: Date;
  targetAudience: 'all' | 'new_customers' | 'vip' | 'birthday' | 'custom';
  isPersonalized: boolean;
  conditions: {
    minPurchase?: number;
    maxRedemptions?: number;
    validDays?: string[];
    category?: string;
  };
  reward: {
    value: number;
    description: string;
  };
}

export const CreateCampaignModal = ({ open, onOpenChange }: CreateCampaignModalProps) => {
  const [config, setConfig] = useState<CampaignConfig>({
    name: '',
    description: '',
    type: 'percentage_discount',
    targetAudience: 'all',
    isPersonalized: false,
    conditions: {},
    reward: {
      value: 10,
      description: '10% Off Your Order'
    }
  });

  const campaignTypes = [
    {
      id: 'points_multiplier',
      name: 'Points Multiplier',
      description: 'Double or triple points for purchases',
      icon: Star,
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'percentage_discount',
      name: 'Percentage Discount',
      description: 'Percentage off total purchase',
      icon: Percent,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'fixed_discount',
      name: 'Fixed Amount Off',
      description: 'Fixed dollar amount discount',
      icon: DollarSign,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'free_item',
      name: 'Free Item',
      description: 'Get a specific item for free',
      icon: Gift,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'buy_x_get_y',
      name: 'Buy X Get Y Free',
      description: 'Purchase requirement for free items',
      icon: Sparkles,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'birthday_special',
      name: 'Birthday Special',
      description: 'Special offer for customer birthdays',
      icon: Heart,
      color: 'bg-red-100 text-red-800'
    },
    {
      id: 'referral',
      name: 'Referral Program',
      description: 'Reward customers for referrals',
      icon: Users,
      color: 'bg-indigo-100 text-indigo-800'
    }
  ];

  const targetAudiences = [
    { id: 'all', label: 'All Customers', description: 'Available to everyone' },
    { id: 'new_customers', label: 'New Customers', description: 'First-time visitors only' },
    { id: 'vip', label: 'VIP Members', description: 'Premium loyalty members' },
    { id: 'birthday', label: 'Birthday Customers', description: 'Customers with birthdays this month' },
    { id: 'custom', label: 'Custom Segment', description: 'Define custom criteria' }
  ];

  const updateRewardDescription = () => {
    const selectedType = campaignTypes.find(t => t.id === config.type);
    let description = '';
    
    switch (config.type) {
      case 'points_multiplier':
        description = `${config.reward.value}x Points on All Purchases`;
        break;
      case 'percentage_discount':
        description = `${config.reward.value}% Off Your Order`;
        break;
      case 'fixed_discount':
        description = `$${config.reward.value} Off Your Order`;
        break;
      case 'free_item':
        description = `Free Item (Value up to $${config.reward.value})`;
        break;
      case 'buy_x_get_y':
        description = `Buy ${config.reward.value} Get 1 Free`;
        break;
      case 'birthday_special':
        description = `${config.reward.value}% Off Birthday Special`;
        break;
      case 'referral':
        description = `$${config.reward.value} Credit for Each Referral`;
        break;
      default:
        description = selectedType?.description || '';
    }
    
    setConfig(prev => ({
      ...prev,
      reward: { ...prev.reward, description }
    }));
  };

  const handleTypeChange = (type: string) => {
    setConfig(prev => ({ ...prev, type: type as any }));
    setTimeout(updateRewardDescription, 0);
  };

  const handleValueChange = (value: number) => {
    setConfig(prev => ({
      ...prev,
      reward: { ...prev.reward, value }
    }));
    setTimeout(updateRewardDescription, 0);
  };

  const handleSave = () => {
    console.log('Saving campaign:', config);
    onOpenChange(false);
  };

  const selectedType = campaignTypes.find(t => t.id === config.type);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Campaign</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="type">Campaign Type</TabsTrigger>
            <TabsTrigger value="targeting">Targeting</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input
                    id="name"
                    value={config.name}
                    onChange={(e) => setConfig({ ...config, name: e.target.value })}
                    placeholder="e.g., Summer Sale 2024"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={config.description}
                    onChange={(e) => setConfig({ ...config, description: e.target.value })}
                    placeholder="Describe your campaign..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {config.startDate ? format(config.startDate, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={config.startDate}
                          onSelect={(date) => setConfig({ ...config, startDate: date })}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {config.endDate ? format(config.endDate, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={config.endDate}
                          onSelect={(date) => setConfig({ ...config, endDate: date })}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="personalized"
                    checked={config.isPersonalized}
                    onCheckedChange={(checked) => setConfig({ ...config, isPersonalized: checked })}
                  />
                  <Label htmlFor="personalized">Enable Personalized Offers</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="type" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Campaign Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {campaignTypes.map((type) => (
                    <Card 
                      key={type.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        config.type === type.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => handleTypeChange(type.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${type.color}`}>
                            <type.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{type.name}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {selectedType && (
              <Card>
                <CardHeader>
                  <CardTitle>Configure {selectedType.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>
                      {config.type === 'points_multiplier' && 'Multiplier (e.g., 2 for double points)'}
                      {config.type === 'percentage_discount' && 'Discount Percentage'}
                      {config.type === 'fixed_discount' && 'Discount Amount ($)'}
                      {config.type === 'free_item' && 'Maximum Item Value ($)'}
                      {config.type === 'buy_x_get_y' && 'Required Purchase Quantity'}
                      {config.type === 'birthday_special' && 'Birthday Discount (%)'}
                      {config.type === 'referral' && 'Referral Credit ($)'}
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={[config.reward.value]}
                        onValueChange={(value) => handleValueChange(value[0])}
                        max={config.type === 'percentage_discount' || config.type === 'birthday_special' ? 50 : 
                             config.type === 'points_multiplier' ? 5 : 100}
                        min={config.type === 'points_multiplier' ? 2 : 1}
                        step={config.type === 'points_multiplier' ? 1 : 
                              config.type === 'percentage_discount' || config.type === 'birthday_special' ? 5 : 5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{config.type === 'points_multiplier' ? '2x' : 
                               config.type === 'percentage_discount' || config.type === 'birthday_special' ? '1%' : '$1'}</span>
                        <span className="font-medium">{config.reward.value}{
                          config.type === 'points_multiplier' ? 'x' :
                          config.type === 'percentage_discount' || config.type === 'birthday_special' ? '%' : ''
                        }</span>
                        <span>{config.type === 'points_multiplier' ? '5x' : 
                               config.type === 'percentage_discount' || config.type === 'birthday_special' ? '50%' : '$100'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">Preview: {config.reward.description}</p>
                  </div>

                  <div>
                    <Label htmlFor="minPurchase">Minimum Purchase Amount ($)</Label>
                    <Input
                      id="minPurchase"
                      type="number"
                      value={config.conditions.minPurchase || ''}
                      onChange={(e) => setConfig({
                        ...config,
                        conditions: { ...config.conditions, minPurchase: parseFloat(e.target.value) || undefined }
                      })}
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <Label htmlFor="maxRedemptions">Maximum Redemptions</Label>
                    <Input
                      id="maxRedemptions"
                      type="number"
                      value={config.conditions.maxRedemptions || ''}
                      onChange={(e) => setConfig({
                        ...config,
                        conditions: { ...config.conditions, maxRedemptions: parseInt(e.target.value) || undefined }
                      })}
                      placeholder="Unlimited"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="targeting" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Target Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {targetAudiences.map((audience) => (
                    <Card 
                      key={audience.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        config.targetAudience === audience.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setConfig({ ...config, targetAudience: audience.id as any })}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{audience.label}</h3>
                            <p className="text-sm text-gray-600">{audience.description}</p>
                          </div>
                          <Target className="h-5 w-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {config.targetAudience === 'custom' && (
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-lg">Custom Targeting Criteria</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Product Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="food">Food & Beverages</SelectItem>
                            <SelectItem value="retail">Retail Items</SelectItem>
                            <SelectItem value="services">Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Valid Days of Week</Label>
                        <div className="flex gap-2 mt-2">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <Button key={day} variant="outline" size="sm">
                              {day}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="review" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Basic Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {config.name || 'Untitled Campaign'}</p>
                      <p><strong>Type:</strong> {selectedType?.name}</p>
                      <p><strong>Offer:</strong> {config.reward.description}</p>
                      <p><strong>Target:</strong> {targetAudiences.find(a => a.id === config.targetAudience)?.label}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Conditions</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Start Date:</strong> {config.startDate ? format(config.startDate, 'PPP') : 'Not set'}</p>
                      <p><strong>End Date:</strong> {config.endDate ? format(config.endDate, 'PPP') : 'Not set'}</p>
                      <p><strong>Min Purchase:</strong> {config.conditions.minPurchase ? `$${config.conditions.minPurchase}` : 'None'}</p>
                      <p><strong>Max Redemptions:</strong> {config.conditions.maxRedemptions || 'Unlimited'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">
                    {config.isPersonalized ? 'Personalized offers enabled' : 'Standard campaign'}
                  </span>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="flex-1">
                      <Zap className="h-4 w-4 mr-2" />
                      Create Campaign
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
