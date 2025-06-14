
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessDescription: '',
    businessAddress: '',
    ownerName: '',
    phoneNumber: '',
    showGoogleReviews: false
  });

  const businessTypes = [
    { value: 'cafe', label: '☕ Cafe / Coffee Shop', emoji: '☕' },
    { value: 'restaurant', label: '🍽️ Restaurant', emoji: '🍽️' },
    { value: 'hair_salon', label: '💇 Hair Salon', emoji: '💇' },
    { value: 'barber', label: '✂️ Barber Shop', emoji: '✂️' },
    { value: 'mechanic', label: '🔧 Auto Repair / Mechanic', emoji: '🔧' },
    { value: 'florist', label: '🌸 Florist / Flower Shop', emoji: '🌸' },
    { value: 'bakery', label: '🥖 Bakery', emoji: '🥖' },
    { value: 'spa', label: '🧖‍♀️ Spa / Wellness', emoji: '🧖‍♀️' },
    { value: 'gym', label: '💪 Gym / Fitness', emoji: '💪' },
    { value: 'retail', label: '🛍️ Retail Store', emoji: '🛍️' },
    { value: 'dental', label: '🦷 Dental Practice', emoji: '🦷' },
    { value: 'pet_services', label: '🐕 Pet Services', emoji: '🐕' },
    { value: 'other', label: '📋 Other', emoji: '📋' }
  ];

  const steps = [
    'Business Name',
    'Business Type', 
    'Business Description',
    'Business Address',
    'Owner/Contact Name',
    'Phone Number',
    'Complete Setup'
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and navigate to dashboard
      navigate('/');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">What's your business name?</h3>
              <p className="text-gray-600 mt-2">This will be visible to your customers</p>
            </div>
            <div>
              <Label htmlFor="businessName" className="text-base">Business Name</Label>
              <Input 
                id="businessName" 
                placeholder="e.g., Joe's Coffee House"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                className="mt-2 text-lg py-3"
                autoFocus
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">What type of business do you have?</h3>
              <p className="text-gray-600 mt-2">Help us customize your loyalty program</p>
            </div>
            <div>
              <Label htmlFor="businessType" className="text-base">Business Type</Label>
              <Select 
                value={formData.businessType} 
                onValueChange={(value) => updateFormData('businessType', value)}
              >
                <SelectTrigger className="mt-2 text-lg py-3">
                  <SelectValue placeholder="Select a business type..." />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {businessTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} className="text-base py-3">
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formData.businessType === 'other' && (
                <Input 
                  placeholder="Please specify your business type"
                  className="mt-3 text-base py-3"
                  onChange={(e) => updateFormData('businessDescription', e.target.value)}
                />
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Describe your business</h3>
              <p className="text-gray-600 mt-2">Optional - help customers understand what you offer</p>
            </div>
            <div>
              <Label htmlFor="businessDescription" className="text-base">Business Description</Label>
              <Textarea 
                id="businessDescription"
                placeholder="e.g., Authentic Italian cuisine with a cozy atmosphere"
                value={formData.businessDescription}
                onChange={(e) => updateFormData('businessDescription', e.target.value)}
                className="mt-2 text-base min-h-[100px]"
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Where is your business located?</h3>
              <p className="text-gray-600 mt-2">Your business address for customer reference</p>
            </div>
            <div>
              <Label htmlFor="businessAddress" className="text-base">Business Address</Label>
              <Textarea 
                id="businessAddress"
                placeholder="123 Main Street, City, State 12345"
                value={formData.businessAddress}
                onChange={(e) => updateFormData('businessAddress', e.target.value)}
                className="mt-2 text-base"
                rows={3}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Who should we contact?</h3>
              <p className="text-gray-600 mt-2">Primary contact person for this account</p>
            </div>
            <div>
              <Label htmlFor="ownerName" className="text-base">Owner/Contact Name</Label>
              <Input 
                id="ownerName"
                placeholder="Your full name"
                value={formData.ownerName}
                onChange={(e) => updateFormData('ownerName', e.target.value)}
                className="mt-2 text-lg py-3"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">What's your phone number?</h3>
              <p className="text-gray-600 mt-2">For customer support and notifications</p>
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="text-base">Phone Number</Label>
              <Input 
                id="phoneNumber"
                placeholder="(555) 123-4567"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                className="mt-2 text-lg py-3"
                type="tel"
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Setup Complete!</h3>
              <p className="text-gray-600 mt-2 text-lg">
                Welcome to LOYO! Your loyalty platform is ready to go.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium">🎉 Your 14-day Premium trial has started!</p>
              <p className="text-blue-600 text-sm mt-1">
                Explore advanced analytics and unlimited campaigns
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.businessName.trim() !== '';
      case 2: return formData.businessType !== '';
      case 3: return true; // Optional step
      case 4: return formData.businessAddress.trim() !== '';
      case 5: return formData.ownerName.trim() !== '';
      case 6: return formData.phoneNumber.trim() !== '';
      case 7: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              LOYO
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Set Up Your Business Profile</h1>
          <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg text-gray-700">
              {steps[currentStep - 1]}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                {currentStep === totalSteps ? 'Go to Dashboard' : 'Next'}
                {currentStep !== totalSteps && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;
