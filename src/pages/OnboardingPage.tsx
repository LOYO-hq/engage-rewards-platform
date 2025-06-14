
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, ArrowLeft, ArrowRight, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessDescription: ''
  });

  const businessTypes = [
    { value: 'cafe', label: 'Coffee Shop, Cafe', emoji: '☕' },
    { value: 'restaurant', label: 'Restaurant, Retail Store', emoji: '🍽️' },
    { value: 'hair_salon', label: 'Hair Salon', emoji: '💇' },
    { value: 'barber', label: 'Barber Shop', emoji: '✂️' },
    { value: 'mechanic', label: 'Auto Repair, Mechanic', emoji: '🔧' },
    { value: 'other', label: 'Other', emoji: '📋' }
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

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Tell us about your business</h3>
              <p className="text-gray-600 mt-2">Let's start with the basics</p>
            </div>
            <div>
              <Label htmlFor="businessName" className="text-base font-medium">Business Name</Label>
              <Input 
                id="businessName" 
                placeholder="West Avenue Cafe"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                className="mt-2 text-base py-3"
                autoFocus
              />
            </div>
            <div>
              <Label htmlFor="businessType" className="text-base font-medium">Business Type</Label>
              <Input 
                id="businessType"
                placeholder="e.g. Coffee Shop, Restaurant, Retail Store"
                value={formData.businessType}
                onChange={(e) => updateFormData('businessType', e.target.value)}
                className="mt-2 text-base py-3"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Tell us more about your business</h3>
              <p className="text-gray-600 mt-2">Help us customize your experience</p>
            </div>
            <div>
              <Label htmlFor="businessDescription" className="text-base font-medium">Business Description (Optional)</Label>
              <Textarea 
                id="businessDescription"
                placeholder="Describe what makes your business special..."
                value={formData.businessDescription}
                onChange={(e) => updateFormData('businessDescription', e.target.value)}
                className="mt-2 text-base min-h-[120px]"
                rows={5}
              />
              <p className="text-sm text-gray-500 mt-2">This will help us suggest the best loyalty program features for you.</p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-50 p-6 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Setup Complete!</h3>
              <p className="text-gray-600 mt-2 text-lg">
                Welcome to LOYO! Your loyalty platform is ready to go.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
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
      case 1: return formData.businessName.trim() !== '' && formData.businessType.trim() !== '';
      case 2: return true; // Optional step
      case 3: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              LOYO
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Set Up Your Business Profile</h1>
          <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-lg border-0 bg-white">
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8 pt-6">
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
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
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
