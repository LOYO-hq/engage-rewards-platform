
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { 
  Upload, 
  Building2, 
  Target, 
  Palette, 
  QrCode, 
  BarChart3, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Facebook,
  Instagram,
  Chrome,
  MessageSquare,
  Clock
} from 'lucide-react';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');
  
  const [formData, setFormData] = useState({
    businessName: user?.businessName || '',
    businessType: '',
    targetAudience: '',
    primaryColor: '#3B82F6',
    rewardStructure: 'stamps',
    completionGoal: '10',
    rewardType: 'discount',
    rewardValue: '10',
    facebook: '',
    instagram: '',
    googleReviews: false,
    yelp: false,
    businessHours: {
      monday: { open: '09:00', close: '17:00', closed: false },
      tuesday: { open: '09:00', close: '17:00', closed: false },
      wednesday: { open: '09:00', close: '17:00', closed: false },
      thursday: { open: '09:00', close: '17:00', closed: false },
      friday: { open: '09:00', close: '17:00', closed: false },
      saturday: { open: '09:00', close: '17:00', closed: false },
      sunday: { open: '09:00', close: '17:00', closed: true }
    }
  });

  const totalSteps = 10;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      updateUser({ needsOnboarding: false });
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateBusinessHours = (day: string, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [day]: {
          ...prev.businessHours[day as keyof typeof prev.businessHours],
          [field]: value
        }
      }
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Tell us about your business</h2>
              <p className="text-gray-600">Let's start with the basics</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  placeholder="Enter your business name"
                />
              </div>
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Input
                  id="businessType"
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  placeholder="e.g., Coffee Shop, Restaurant, Retail Store"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Upload Your Logo</h2>
              <p className="text-gray-600">Add your business logo to personalize your loyalty cards</p>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                />
                <label htmlFor="logo-upload" className="cursor-pointer">
                  {logoPreview ? (
                    <div className="space-y-4">
                      <img 
                        src={logoPreview} 
                        alt="Logo preview" 
                        className="mx-auto h-32 w-32 object-contain border rounded-lg"
                      />
                      <p className="text-sm text-gray-600">Click to change logo</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                </label>
              </div>
              {logoPreview && (
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Rotate Left
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCw className="h-4 w-4 mr-2" />
                    Rotate Right
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom In
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4 mr-2" />
                    Zoom Out
                  </Button>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Who are your customers?</h2>
              <p className="text-gray-600">Help us understand your target audience</p>
            </div>
            <div>
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input
                id="targetAudience"
                value={formData.targetAudience}
                onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                placeholder="e.g., Young professionals, Families, Coffee enthusiasts"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Choose your brand colors</h2>
              <p className="text-gray-600">Select colors that match your brand</p>
            </div>
            <div>
              <Label htmlFor="primaryColor">Primary Brand Color</Label>
              <div className="flex items-center space-x-4">
                <input
                  type="color"
                  id="primaryColor"
                  value={formData.primaryColor}
                  onChange={(e) => setFormData({...formData, primaryColor: e.target.value})}
                  className="w-16 h-16 rounded-lg border-2 border-gray-300"
                />
                <Input
                  value={formData.primaryColor}
                  onChange={(e) => setFormData({...formData, primaryColor: e.target.value})}
                  placeholder="#3B82F6"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <QrCode className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Design your loyalty program</h2>
              <p className="text-gray-600">Choose how customers will earn rewards</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Reward Structure</Label>
                <ToggleGroup value={formData.rewardStructure} onValueChange={(value) => value && setFormData({...formData, rewardStructure: value})}>
                  <ToggleGroupItem value="stamps">
                    <Star className="h-4 w-4 mr-2" />
                    Stamp Cards
                  </ToggleGroupItem>
                  <ToggleGroupItem value="points">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Points System
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <Label htmlFor="completionGoal">
                  {formData.rewardStructure === 'stamps' ? 'Stamps to Complete Card' : 'Points for Reward'}
                </Label>
                <Input
                  id="completionGoal"
                  type="number"
                  value={formData.completionGoal}
                  onChange={(e) => setFormData({...formData, completionGoal: e.target.value})}
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Set your rewards</h2>
              <p className="text-gray-600">What do customers get when they complete their card?</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Reward Type</Label>
                <ToggleGroup value={formData.rewardType} onValueChange={(value) => value && setFormData({...formData, rewardType: value})}>
                  <ToggleGroupItem value="discount">% Discount</ToggleGroupItem>
                  <ToggleGroupItem value="free">Free Item</ToggleGroupItem>
                  <ToggleGroupItem value="cashback">Cash Back</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <Label htmlFor="rewardValue">
                  {formData.rewardType === 'discount' ? 'Discount Percentage' : 
                   formData.rewardType === 'cashback' ? 'Cash Back Amount' : 'Free Item Description'}
                </Label>
                <Input
                  id="rewardValue"
                  value={formData.rewardValue}
                  onChange={(e) => setFormData({...formData, rewardValue: e.target.value})}
                  placeholder={formData.rewardType === 'free' ? 'e.g., Free Coffee' : '10'}
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Facebook className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Connect Your Social Media</h2>
              <p className="text-gray-600">Link your social accounts to boost engagement</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Facebook Page</p>
                      <p className="text-sm text-gray-500">Share loyalty updates</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm text-gray-500">Post customer rewards</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Chrome className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Google Reviews</p>
                      <p className="text-sm text-gray-500">Encourage customer reviews</p>
                    </div>
                  </div>
                  <Switch 
                    checked={formData.googleReviews}
                    onCheckedChange={(checked) => setFormData({...formData, googleReviews: checked})}
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="font-medium">Yelp</p>
                      <p className="text-sm text-gray-500">Manage Yelp presence</p>
                    </div>
                  </div>
                  <Switch 
                    checked={formData.yelp}
                    onCheckedChange={(checked) => setFormData({...formData, yelp: checked})}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Business Hours</h2>
              <p className="text-gray-600">Set your operating hours (optional)</p>
            </div>
            <div className="space-y-3">
              {Object.entries(formData.businessHours).map(([day, hours]) => (
                <div key={day} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="w-20 text-sm font-medium capitalize">{day}</div>
                  <div className="flex items-center space-x-2 flex-1">
                    {hours.closed ? (
                      <div className="text-gray-500 text-sm">Closed</div>
                    ) : (
                      <>
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) => updateBusinessHours(day, 'open', e.target.value)}
                          className="text-sm border rounded px-2 py-1"
                        />
                        <span className="text-sm">to</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) => updateBusinessHours(day, 'close', e.target.value)}
                          className="text-sm border rounded px-2 py-1"
                        />
                      </>
                    )}
                  </div>
                  <Switch
                    checked={!hours.closed}
                    onCheckedChange={(checked) => updateBusinessHours(day, 'closed', !checked)}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Analytics & Insights</h2>
              <p className="text-gray-600">Choose what metrics matter most to your business</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium">Customer Growth</h3>
                  <p className="text-sm text-gray-600">Track new vs returning customers</p>
                </div>
              </Card>
              <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-medium">Reward Redemption</h3>
                  <p className="text-sm text-gray-600">Monitor reward usage patterns</p>
                </div>
              </Card>
              <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium">Revenue Impact</h3>
                  <p className="text-sm text-gray-600">See loyalty program ROI</p>
                </div>
              </Card>
              <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-medium">Engagement Metrics</h3>
                  <p className="text-sm text-gray-600">Track customer interactions</p>
                </div>
              </Card>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Welcome to LOYO!</h2>
              <p className="text-gray-600 mb-6">Your loyalty program is ready to launch</p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-4">What's Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">Generate your first QR codes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">Print and display at your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-blue-800">Watch customers start earning rewards</span>
                  </div>
                </div>
              </div>
              
              <Badge className="bg-green-100 text-green-700 mb-4">
                ✨ 14-Day Premium Trial Active
              </Badge>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Setup Your Loyalty Program</h1>
            <Badge variant="outline">{currentStep} of {totalSteps}</Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Card className="p-6">
          {renderStep()}
          
          <Separator className="my-6" />
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious} 
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? 'Complete Setup' : 'Next'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;
