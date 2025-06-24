
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
import { Checkbox } from '@/components/ui/checkbox';
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
  Crown,
  ChevronRight,
  ChevronLeft,
  Settings,
  ExternalLink
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
  selectedCustomers: string[];
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
  const [activeTab, setActiveTab] = useState('basics');
  const [config, setConfig] = useState<CampaignConfig>({
    name: '',
    description: '',
    type: 'percentage_discount',
    targetAudience: 'all',
    isPersonalized: false,
    selectedCustomers: [],
    conditions: {
      validDays: []
    },
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

  const daysOfWeek = [
    { id: 'monday', label: 'Mon', full: 'Monday' },
    { id: 'tuesday', label: 'Tue', full: 'Tuesday' },
    { id: 'wednesday', label: 'Wed', full: 'Wednesday' },
    { id: 'thursday', label: 'Thu', full: 'Thursday' },
    { id: 'friday', label: 'Fri', full: 'Friday' },
    { id: 'saturday', label: 'Sat', full: 'Saturday' },
    { id: 'sunday', label: 'Sun', full: 'Sunday' }
  ];

  const mockCustomers = [
    { id: '1', name: 'John Smith', email: 'john@example.com', visits: 15 },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', visits: 8 },
    { id: '3', name: 'Mike Davis', email: 'mike@example.com', visits: 22 },
    { id: '4', name: 'Lisa Wilson', email: 'lisa@example.com', visits: 5 }
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

  const handleDayToggle = (dayId: string) => {
    const currentDays = config.conditions.validDays || [];
    const newDays = currentDays.includes(dayId)
      ? currentDays.filter(d => d !== dayId)
      : [...currentDays, dayId];
    
    setConfig(prev => ({
      ...prev,
      conditions: { ...prev.conditions, validDays: newDays }
    }));
  };

  const handleCustomerToggle = (customerId: string) => {
    const newSelected = config.selectedCustomers.includes(customerId)
      ? config.selectedCustomers.filter(id => id !== customerId)
      : [...config.selectedCustomers, customerId];
    
    setConfig(prev => ({ ...prev, selectedCustomers: newSelected }));
  };

  const getNextTab = () => {
    const tabs = ['basics', 'type', 'targeting', 'review'];
    const currentIndex = tabs.indexOf(activeTab);
    return currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null;
  };

  const getPrevTab = () => {
    const tabs = ['basics', 'type', 'targeting', 'review'];
    const currentIndex = tabs.indexOf(activeTab);
    return currentIndex > 0 ? tabs[currentIndex - 1] : null;
  };

  const handleNext = () => {
    const nextTab = getNextTab();
    if (nextTab) setActiveTab(nextTab);
  };

  const handlePrev = () => {
    const prevTab = getPrevTab();
    if (prevTab) setActiveTab(prevTab);
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="personalized"
                      checked={config.isPersonalized}
                      onCheckedChange={(checked) => setConfig({ ...config, isPersonalized: checked })}
                    />
                    <Label htmlFor="personalized">Enable Personalized Offers</Label>
                  </div>
                  <p className="text-sm text-gray-600">
                    When enabled, you can select specific customers to receive this campaign instead of making it available to all customers in the target audience.
                  </p>

                  {config.isPersonalized && (
                    <Card className="mt-4">
                      <CardHeader>
                        <CardTitle className="text-lg">Select Customers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 max-h-48 overflow-y-auto">
                          {mockCustomers.map((customer) => (
                            <div key={customer.id} className="flex items-center space-x-3 p-2 border rounded-lg">
                              <Checkbox
                                checked={config.selectedCustomers.includes(customer.id)}
                                onCheckedChange={() => handleCustomerToggle(customer.id)}
                              />
                              <div className="flex-1">
                                <p className="font-medium">{customer.name}</p>
                                <p className="text-sm text-gray-600">{customer.email} • {customer.visits} visits</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        {config.selectedCustomers.length > 0 && (
                          <p className="text-sm text-blue-600 mt-2">
                            {config.selectedCustomers.length} customer(s) selected
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <div></div>
              <Button onClick={handleNext} className="flex items-center">
                Next: Campaign Type
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
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

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrev} className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back: Basics
              </Button>
              <Button onClick={handleNext} className="flex items-center">
                Next: Targeting
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
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
                        <div className="flex items-center justify-between mb-2">
                          <Label>Product Category</Label>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center text-xs"
                            onClick={() => console.log('Navigate to settings')}
                          >
                            <Settings className="h-3 w-3 mr-1" />
                            Manage Categories
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                        <Select value={config.conditions.category} onValueChange={(value) => 
                          setConfig({
                            ...config,
                            conditions: { ...config.conditions, category: value }
                          })
                        }>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="beverages">Beverages</SelectItem>
                            <SelectItem value="food">Food Items</SelectItem>
                            <SelectItem value="desserts">Desserts</SelectItem>
                            <SelectItem value="retail">Retail Items</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500 mt-1">
                          Don't see your category? Add it in the Settings page.
                        </p>
                      </div>
                      
                      <div>
                        <Label className="mb-3 block">Valid Days of Week</Label>
                        <div className="flex gap-2 flex-wrap">
                          {daysOfWeek.map((day) => (
                            <Button
                              key={day.id}
                              variant={config.conditions.validDays?.includes(day.id) ? "default" : "outline"}
                              size="sm"
                              onClick={() => handleDayToggle(day.id)}
                              className={`transition-colors ${
                                config.conditions.validDays?.includes(day.id)
                                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                                  : 'hover:bg-blue-50'
                              }`}
                            >
                              {day.label}
                            </Button>
                          ))}
                        </div>
                        {config.conditions.validDays && config.conditions.validDays.length > 0 && (
                          <p className="text-sm text-blue-600 mt-2">
                            Campaign active on: {config.conditions.validDays.map(dayId => 
                              daysOfWeek.find(d => d.id === dayId)?.full
                            ).join(', ')}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrev} className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back: Campaign Type
              </Button>
              <Button onClick={handleNext} className="flex items-center">
                Next: Review
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
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

                {config.isPersonalized && (
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Targeting</h3>
                    <div className="flex items-center gap-2">
                      <Crown className="h-5 w-5 text-purple-500" />
                      <span className="text-sm">
                        {config.selectedCustomers.length} specific customer(s) selected
                      </span>
                    </div>
                  </div>
                )}

                {config.conditions.validDays && config.conditions.validDays.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Schedule</h3>
                    <p className="text-sm">
                      Active on: {config.conditions.validDays.map(dayId => 
                        daysOfWeek.find(d => d.id === dayId)?.full
                      ).join(', ')}
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                      Cancel
                    </Button>
                    <Button variant="outline" onClick={handlePrev} className="flex items-center">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Back: Targeting
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
