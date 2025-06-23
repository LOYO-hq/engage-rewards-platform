
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
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
  Triangle,
  Hexagon,
  ArrowLeft,
  Save,
  Eye,
  Download,
  Palette,
  Type,
  Layout
} from 'lucide-react';

interface StampCardConfig {
  title: string;
  subtitle: string;
  requiredStamps: number;
  reward: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  layout: 'grid' | 'linear' | 'circular';
  template: string;
}

export const StampCardDesigner = () => {
  const [config, setConfig] = useState<StampCardConfig>({
    title: 'Loyalty Card',
    subtitle: 'Collect stamps for rewards',
    requiredStamps: 10,
    reward: 'Free Coffee',
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
    icon: 'coffee',
    layout: 'grid',
    template: 'modern'
  });

  const [currentStamps, setCurrentStamps] = useState(6);

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

  const templates = [
    { id: 'modern', name: 'Modern', preview: 'Clean and minimalist' },
    { id: 'vintage', name: 'Vintage', preview: 'Classic retro style' },
    { id: 'playful', name: 'Playful', preview: 'Fun and colorful' },
    { id: 'elegant', name: 'Elegant', preview: 'Sophisticated design' }
  ];

  const colorPresets = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B',
    '#8B5CF6', '#F97316', '#06B6D4', '#84CC16'
  ];

  const getSelectedIcon = () => {
    const businessIcon = businessIcons.find(i => i.id === config.icon);
    const shapeIcon = shapeIcons.find(i => i.id === config.icon);
    return businessIcon || shapeIcon || businessIcons[0];
  };

  const renderStampCard = () => {
    const SelectedIcon = getSelectedIcon()?.icon || Coffee;
    const stamps = Array.from({ length: config.requiredStamps }, (_, i) => i + 1);
    
    return (
      <div 
        className="w-80 h-48 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
        style={{ 
          backgroundColor: config.backgroundColor,
          color: config.textColor
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4">
            <SelectedIcon className="h-20 w-20" />
          </div>
          <div className="absolute bottom-4 left-4">
            <SelectedIcon className="h-12 w-12" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-lg">
              <SelectedIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{config.title}</h3>
              <p className="text-sm opacity-90">{config.subtitle}</p>
            </div>
          </div>

          {/* Stamps Grid */}
          <div className="mb-4">
            <div className={`grid gap-2 ${
              config.layout === 'grid' ? 'grid-cols-5' :
              config.layout === 'linear' ? 'grid-cols-10' :
              'grid-cols-5'
            }`}>
              {stamps.map((stamp, index) => (
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
              ))}
            </div>
          </div>

          {/* Reward */}
          <div className="text-center">
            <p className="text-sm opacity-75">Collect {config.requiredStamps} stamps for</p>
            <p className="font-bold text-lg">{config.reward}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stamp Card Designer</h1>
          <p className="text-gray-600">Create beautiful digital loyalty cards for your customers</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          Premium Feature
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Design Panel */}
        <div className="space-y-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content" className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Design
              </TabsTrigger>
              <TabsTrigger value="layout" className="flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Layout
              </TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Content</CardTitle>
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
                    <Label htmlFor="reward">Reward Description</Label>
                    <Input
                      id="reward"
                      value={config.reward}
                      onChange={(e) => setConfig({ ...config, reward: e.target.value })}
                      placeholder="e.g., Free Coffee, 20% Off"
                    />
                  </div>

                  <div>
                    <Label>Required Stamps: {config.requiredStamps}</Label>
                    <Slider
                      value={[config.requiredStamps]}
                      onValueChange={(value) => setConfig({ ...config, requiredStamps: value[0] })}
                      max={20}
                      min={3}
                      step={1}
                      className="mt-2"
                    />
                  </div>
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
                  <CardTitle>Stamp Layout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
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
                        onClick={() => setConfig({ ...config, template: template.id })}
                      >
                        <span className="font-semibold">{template.name}</span>
                        <span className="text-xs text-muted-foreground">{template.preview}</span>
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
            <CardContent className="flex justify-center items-center min-h-[300px]">
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
                  max={config.requiredStamps}
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

          {/* Usage Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Expected Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Customer Retention</span>
                  <span className="font-semibold text-green-600">+34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Visit Frequency</span>
                  <span className="font-semibold text-blue-600">+2.3x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Average Spend</span>
                  <span className="font-semibold text-purple-600">+$23</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
