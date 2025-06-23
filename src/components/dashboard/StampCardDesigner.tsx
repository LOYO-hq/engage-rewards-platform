import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Coffee, 
  Pizza, 
  ShoppingBag, 
  Car, 
  Utensils, 
  Heart, 
  Star, 
  Crown, 
  Gift, 
  Zap,
  Circle,
  Square,
  ArrowLeft,
  Save,
  Eye,
  Download,
  Palette,
  Type,
  Layout,
  RotateCcw,
  Plus,
  Trash2,
  Percent,
  DollarSign
} from 'lucide-react';

interface RewardTier {
  id: string;
  stampsRequired: number;
  rewardType: 'percentage' | 'free_item' | 'fixed_amount' | 'buy_x_get_y';
  value: number;
  description: string;
  productCategory?: string;
}

interface StampCardConfig {
  title: string;
  subtitle: string;
  businessType: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  layout: 'grid' | 'linear' | 'circular';
  orientation: 'vertical' | 'horizontal';
  template: string;
  rewardTiers: RewardTier[];
  maxStamps: number;
}

interface StampCardDesignerProps {
  onBack?: () => void;
}

export const StampCardDesigner = ({ onBack }: StampCardDesignerProps) => {
  const [config, setConfig] = useState<StampCardConfig>({
    title: 'Loyalty Card',
    subtitle: 'Collect stamps for rewards',
    businessType: 'restaurant',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    icon: 'coffee',
    layout: 'grid',
    orientation: 'vertical',
    template: 'modern',
    rewardTiers: [
      {
        id: '1',
        stampsRequired: 5,
        rewardType: 'percentage',
        value: 20,
        description: '20% Off Your Order',
        productCategory: 'any'
      },
      {
        id: '2',
        stampsRequired: 10,
        rewardType: 'percentage',
        value: 50,
        description: '50% Off Your Order',
        productCategory: 'any'
      }
    ],
    maxStamps: 10
  });

  const [currentStamps, setCurrentStamps] = useState(6);

  const businessTypes = [
    { id: 'restaurant', label: 'Restaurant', defaultProduct: 'meal' },
    { id: 'coffee_shop', label: 'Coffee Shop', defaultProduct: 'coffee' },
    { id: 'retail', label: 'Retail Store', defaultProduct: 'item' },
    { id: 'salon', label: 'Salon/Spa', defaultProduct: 'service' },
    { id: 'automotive', label: 'Automotive', defaultProduct: 'service' },
    { id: 'bakery', label: 'Bakery', defaultProduct: 'item' }
  ];

  const businessIcons = [
    { id: 'coffee', icon: Coffee, label: 'Coffee Shop' },
    { id: 'pizza', icon: Pizza, label: 'Restaurant' },
    { id: 'shopping', icon: ShoppingBag, label: 'Retail' },
    { id: 'car', icon: Car, label: 'Automotive' },
    { id: 'utensils', icon: Utensils, label: 'Dining' },
    { id: 'heart', icon: Heart, label: 'Health & Beauty' }
  ];

  const shapeIcons = [
    { id: 'star', icon: Star, label: 'Star' },
    { id: 'crown', icon: Crown, label: 'Crown' },
    { id: 'gift', icon: Gift, label: 'Gift' },
    { id: 'zap', icon: Zap, label: 'Lightning' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'square', icon: Square, label: 'Square' }
  ];

  const rewardTypes = [
    { id: 'percentage', label: 'Percentage Off', icon: Percent, suffix: '% Off' },
    { id: 'free_item', label: 'Free Item', icon: Gift, suffix: 'Free' },
    { id: 'fixed_amount', label: 'Fixed Amount Off', icon: DollarSign, suffix: '$ Off' },
    { id: 'buy_x_get_y', label: 'Buy X Get Y Free', icon: Gift, suffix: 'Free' }
  ];

  const colorPresets = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
    '#8B5CF6', '#F97316', '#06B6D4', '#84CC16'
  ];

  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and minimalist',
      config: {
        backgroundColor: '#3B82F6',
        textColor: '#FFFFFF',
        layout: 'grid' as const,
        orientation: 'vertical' as const
      }
    },
    {
      id: 'vintage',
      name: 'Vintage',
      description: 'Classic retro style',
      config: {
        backgroundColor: '#8B5CF6',
        textColor: '#FFFFFF',
        layout: 'circular' as const,
        orientation: 'vertical' as const
      }
    },
    {
      id: 'playful',
      name: 'Playful',
      description: 'Fun and colorful',
      config: {
        backgroundColor: '#F59E0B',
        textColor: '#FFFFFF',
        layout: 'grid' as const,
        orientation: 'vertical' as const
      }
    },
    {
      id: 'elegant',
      name: 'Elegant',
      description: 'Sophisticated design',
      config: {
        backgroundColor: '#1F2937',
        textColor: '#FFFFFF',
        layout: 'linear' as const,
        orientation: 'horizontal' as const
      }
    }
  ];

  const applyTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setConfig(prev => ({
        ...prev,
        template: templateId,
        ...template.config
      }));
    }
  };

  const getSelectedIcon = () => {
    const businessIcon = businessIcons.find(i => i.id === config.icon);
    const shapeIcon = shapeIcons.find(i => i.id === config.icon);
    return businessIcon || shapeIcon || businessIcons[0];
  };

  const addRewardTier = () => {
    const newTier: RewardTier = {
      id: Date.now().toString(),
      stampsRequired: Math.max(...config.rewardTiers.map(t => t.stampsRequired)) + 1,
      rewardType: 'percentage',
      value: 10,
      description: '10% Off Your Order',
      productCategory: 'any'
    };
    setConfig({ ...config, rewardTiers: [...config.rewardTiers, newTier] });
  };

  const updateRewardTier = (id: string, updates: Partial<RewardTier>) => {
    const updatedTiers = config.rewardTiers.map(tier => 
      tier.id === id ? { ...tier, ...updates } : tier
    );
    setConfig({ ...config, rewardTiers: updatedTiers });
    
    // Update maxStamps if needed
    const maxRequired = Math.max(...updatedTiers.map(t => t.stampsRequired));
    if (maxRequired > config.maxStamps) {
      setConfig(prev => ({ ...prev, maxStamps: maxRequired }));
    }
  };

  const removeRewardTier = (id: string) => {
    const updatedTiers = config.rewardTiers.filter(tier => tier.id !== id);
    setConfig({ ...config, rewardTiers: updatedTiers });
  };

  const generateRewardDescription = (tier: RewardTier) => {
    const businessType = businessTypes.find(bt => bt.id === config.businessType);
    const defaultProduct = businessType?.defaultProduct || 'item';
    
    switch (tier.rewardType) {
      case 'percentage':
        return `${tier.value}% Off Your Order`;
      case 'free_item':
        return `Free ${defaultProduct.charAt(0).toUpperCase() + defaultProduct.slice(1)}`;
      case 'fixed_amount':
        return `$${tier.value} Off Your Order`;
      case 'buy_x_get_y':
        return `Buy ${tier.value} Get 1 Free`;
      default:
        return tier.description;
    }
  };

  const getNextReward = () => {
    const sortedTiers = config.rewardTiers
      .filter(tier => tier.stampsRequired > currentStamps)
      .sort((a, b) => a.stampsRequired - b.stampsRequired);
    return sortedTiers[0];
  };

  const getEarnedRewards = () => {
    return config.rewardTiers
      .filter(tier => tier.stampsRequired <= currentStamps)
      .sort((a, b) => b.stampsRequired - a.stampsRequired);
  };

  const renderStampCard = () => {
    const SelectedIcon = getSelectedIcon()?.icon || Coffee;
    const stamps = Array.from({ length: config.maxStamps }, (_, i) => i + 1);
    const nextReward = getNextReward();
    const earnedRewards = getEarnedRewards();
    
    const cardWidth = config.orientation === 'vertical' ? 'w-80' : 'w-96';
    const cardHeight = config.orientation === 'vertical' ? 'h-96' : 'h-64';
    
    const getStampGridClass = () => {
      if (config.layout === 'linear') {
        return config.orientation === 'vertical' 
          ? 'flex flex-col gap-2' 
          : 'flex flex-row gap-2 flex-wrap';
      }
      if (config.layout === 'circular') {
        return 'relative w-full h-20 flex items-center justify-center';
      }
      return config.orientation === 'vertical' 
        ? 'grid grid-cols-5 gap-2' 
        : 'grid grid-cols-10 gap-2';
    };

    const renderStamps = () => {
      if (config.layout === 'circular') {
        const radius = 30;
        const centerX = 40;
        const centerY = 40;
        return (
          <div className="relative w-20 h-20 mx-auto">
            {stamps.map((stamp, index) => {
              const angle = (index / config.maxStamps) * 2 * Math.PI;
              const x = centerX + radius * Math.cos(angle - Math.PI / 2);
              const y = centerY + radius * Math.sin(angle - Math.PI / 2);
              
              return (
                <div
                  key={index}
                  className={`absolute w-4 h-4 rounded-full border-2 border-white/50 flex items-center justify-center ${
                    index < currentStamps 
                      ? 'bg-white/90 text-black' 
                      : 'bg-transparent'
                  }`}
                  style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
                >
                  {index < currentStamps && (
                    <SelectedIcon className="h-2 w-2" />
                  )}
                </div>
              );
            })}
          </div>
        );
      }

      return stamps.map((stamp, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center ${
            index < currentStamps 
              ? 'bg-white/90 text-black' 
              : 'bg-transparent'
          }`}
        >
          {index < currentStamps && (
            <SelectedIcon className="h-3 w-3" />
          )}
        </div>
      ));
    };
    
    return (
      <div 
        className={`${cardWidth} ${cardHeight} rounded-2xl p-6 shadow-2xl relative overflow-hidden`}
        style={{ 
          backgroundColor: config.backgroundColor,
          color: config.textColor
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4">
            <SelectedIcon className="h-16 w-16" />
          </div>
          <div className="absolute bottom-4 left-4">
            <SelectedIcon className="h-8 w-8" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <SelectedIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{config.title}</h3>
              <p className="text-sm opacity-90">{config.subtitle}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress: {currentStamps}/{config.maxStamps}</span>
              <span>{Math.round((currentStamps / config.maxStamps) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStamps / config.maxStamps) * 100}%` }}
              />
            </div>
          </div>

          {/* Stamps */}
          <div className="mb-4 flex-1">
            <div className={getStampGridClass()}>
              {renderStamps()}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="space-y-2">
            {earnedRewards.length > 0 && (
              <div className="text-center p-2 bg-white/20 rounded-lg">
                <p className="text-xs opacity-75">🎉 Rewards Earned!</p>
                <p className="font-semibold text-sm">{earnedRewards[0].description}</p>
              </div>
            )}
            
            {nextReward && (
              <div className="text-center">
                <p className="text-xs opacity-75">
                  {nextReward.stampsRequired - currentStamps} more stamps for
                </p>
                <p className="font-bold text-sm">{nextReward.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const handleBackToDashboard = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={handleBackToDashboard}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stamp Card Designer</h1>
          <p className="text-gray-600">Create intelligent loyalty programs with multiple reward tiers</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          Premium Feature
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Design Panel */}
        <div className="space-y-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="content" className="flex items-center gap-1">
                <Type className="h-3 w-3" />
                Content
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center gap-1">
                <Gift className="h-3 w-3" />
                Rewards
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-1">
                <Palette className="h-3 w-3" />
                Design
              </TabsTrigger>
              <TabsTrigger value="layout" className="flex items-center gap-1">
                <Layout className="h-3 w-3" />
                Layout
              </TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Card Title</Label>
                    <Input
                      id="title"
                      value={config.title}
                      onChange={(e) => setConfig({ ...config, title: e.target.value })}
                      placeholder="Enter card title"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input
                      id="subtitle"
                      value={config.subtitle}
                      onChange={(e) => setConfig({ ...config, subtitle: e.target.value })}
                      placeholder="Enter subtitle"
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select value={config.businessType} onValueChange={(value) => setConfig({ ...config, businessType: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Maximum Stamps: {config.maxStamps}</Label>
                    <Slider
                      value={[config.maxStamps]}
                      onValueChange={(value) => setConfig({ ...config, maxStamps: value[0] })}
                      max={50}
                      min={5}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Reward Tiers</CardTitle>
                    <Button onClick={addRewardTier} size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Tier
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {config.rewardTiers.map((tier, index) => (
                    <div key={tier.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Tier {index + 1}</h4>
                        {config.rewardTiers.length > 1 && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeRewardTier(tier.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label>Stamps Required</Label>
                          <Input
                            type="number"
                            value={tier.stampsRequired}
                            onChange={(e) => updateRewardTier(tier.id, { stampsRequired: parseInt(e.target.value) || 1 })}
                            min="1"
                            max={config.maxStamps}
                          />
                        </div>
                        
                        <div>
                          <Label>Reward Type</Label>
                          <Select 
                            value={tier.rewardType} 
                            onValueChange={(value: any) => updateRewardTier(tier.id, { 
                              rewardType: value,
                              description: generateRewardDescription({ ...tier, rewardType: value })
                            })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {rewardTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>{type.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label>Value</Label>
                        <Input
                          type="number"
                          value={tier.value}
                          onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 0;
                            updateRewardTier(tier.id, { 
                              value: newValue,
                              description: generateRewardDescription({ ...tier, value: newValue })
                            });
                          }}
                          placeholder={tier.rewardType === 'percentage' ? '20' : tier.rewardType === 'fixed_amount' ? '5' : '2'}
                        />
                      </div>

                      <div>
                        <Label>Description</Label>
                        <Input
                          value={tier.description}
                          onChange={(e) => updateRewardTier(tier.id, { description: e.target.value })}
                          placeholder="Custom reward description"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Colors & Icons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Background Color</Label>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {colorPresets.map((color) => (
                        <button
                          key={color}
                          className={`w-8 h-8 rounded-full border-2 ${
                            config.backgroundColor === color ? 'border-gray-900' : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => setConfig({ ...config, backgroundColor: color })}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Business Icons</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {businessIcons.map((item) => (
                        <Button
                          key={item.id}
                          variant={config.icon === item.id ? "default" : "outline"}
                          size="sm"
                          className="flex-col h-16"
                          onClick={() => setConfig({ ...config, icon: item.id })}
                        >
                          <item.icon className="h-5 w-5 mb-1" />
                          <span className="text-xs">{item.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Shape Icons</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {shapeIcons.map((item) => (
                        <Button
                          key={item.id}
                          variant={config.icon === item.id ? "default" : "outline"}
                          size="sm"
                          className="flex-col h-16"
                          onClick={() => setConfig({ ...config, icon: item.id })}
                        >
                          <item.icon className="h-5 w-5 mb-1" />
                          <span className="text-xs">{item.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="layout" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Layout Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Orientation</Label>
                    <div className="flex gap-4 mt-2">
                      <Button
                        variant={config.orientation === 'vertical' ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setConfig({ ...config, orientation: 'vertical' })}
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Vertical
                      </Button>
                      <Button
                        variant={config.orientation === 'horizontal' ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setConfig({ ...config, orientation: 'horizontal' })}
                      >
                        <RotateCcw className="h-4 w-4 mr-2 rotate-90" />
                        Horizontal
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Stamp Layout</Label>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <Button
                        variant={config.layout === 'grid' ? "default" : "outline"}
                        className="h-20 flex-col"
                        onClick={() => setConfig({ ...config, layout: 'grid' })}
                      >
                        <div className="grid grid-cols-2 gap-1 mb-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-2 h-2 bg-current rounded-full" />
                          ))}
                        </div>
                        <span className="text-xs">Grid</span>
                      </Button>
                      
                      <Button
                        variant={config.layout === 'linear' ? "default" : "outline"}
                        className="h-20 flex-col"
                        onClick={() => setConfig({ ...config, layout: 'linear' })}
                      >
                        <div className="flex gap-1 mb-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-2 h-2 bg-current rounded-full" />
                          ))}
                        </div>
                        <span className="text-xs">Linear</span>
                      </Button>
                      
                      <Button
                        variant={config.layout === 'circular' ? "default" : "outline"}
                        className="h-20 flex-col"
                        onClick={() => setConfig({ ...config, layout: 'circular' })}
                      >
                        <div className="relative w-8 h-8 mb-2">
                          {[1,2,3,4].map(i => (
                            <div 
                              key={i} 
                              className="absolute w-1.5 h-1.5 bg-current rounded-full"
                              style={{
                                top: `${20 + 15 * Math.sin((i * Math.PI) / 2)}px`,
                                left: `${20 + 15 * Math.cos((i * Math.PI) / 2)}px`
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs">Circular</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Design Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {templates.map((template) => (
                      <Button
                        key={template.id}
                        variant={config.template === template.id ? "default" : "outline"}
                        className="h-24 flex-col"
                        onClick={() => applyTemplate(template.id)}
                      >
                        <span className="font-semibold capitalize">{template.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {template.description}
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center min-h-[400px]">
              {renderStampCard()}
            </CardContent>
          </Card>

          {/* Preview Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Preview Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Stamps: {currentStamps}</Label>
                <Slider
                  value={[currentStamps]}
                  onValueChange={(value) => setCurrentStamps(value[0])}
                  max={config.maxStamps}
                  min={0}
                  step={1}
                  className="mt-2"
                />
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Save Design
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Export QR
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reward Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Reward Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {config.rewardTiers
                  .sort((a, b) => a.stampsRequired - b.stampsRequired)
                  .map((tier, index) => (
                  <div key={tier.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">{tier.stampsRequired} stamps</span>
                      <p className="text-sm text-gray-600">{tier.description}</p>
                    </div>
                    <Badge variant={currentStamps >= tier.stampsRequired ? "default" : "secondary"}>
                      {currentStamps >= tier.stampsRequired ? "Earned" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
