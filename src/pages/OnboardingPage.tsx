
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BusinessInfoStep } from '@/components/onboarding/BusinessInfoStep';
import { OwnerContactStep } from '@/components/onboarding/OwnerContactStep';
import { IntegrationsStep } from '@/components/onboarding/IntegrationsStep';
import { PaymentStep } from '@/components/onboarding/PaymentStep';
import { WelcomeStep } from '@/components/onboarding/WelcomeStep';
import { useAuth } from '@/contexts/AuthContext';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    businessAddress: '',
    businessDescription: '',
    logo: null,
    ownerName: '',
    contactPhone: '',
    additionalUsers: [],
    googleReviews: false,
    facebookPage: '',
    instagramAccount: '',
    pinterestAccount: '',
    businessHours: false,
    paymentMethod: null,
    usedFreeTrial: user?.subscriptionStatus === 'trial'
  });

  const stepTitles = [
    'Business Information',
    'Owner & Contact Details', 
    'Integrations',
    'Payment Details',
    'Welcome!'
  ];

  const shouldSkipPayment = formData.usedFreeTrial || user?.subscriptionTier === 'basic';

  const nextStep = () => {
    if (currentStep === 3 && shouldSkipPayment) {
      // Skip payment step if on free trial or basic plan
      setCurrentStep(5);
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and navigate to dashboard
      navigate('/');
    }
  };

  const prevStep = () => {
    if (currentStep === 5 && shouldSkipPayment) {
      // Skip back over payment step
      setCurrentStep(3);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.businessName.trim() !== '' && formData.businessType !== '';
      case 2: return formData.ownerName.trim() !== '' && formData.contactPhone.trim() !== '';
      case 3: return true; // Integrations are optional
      case 4: return shouldSkipPayment || formData.paymentMethod !== null;
      case 5: return true;
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BusinessInfoStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <OwnerContactStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <IntegrationsStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <PaymentStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <WelcomeStep businessName={formData.businessName} />;
      default:
        return null;
    }
  };

  const getDisplayStep = () => {
    if (shouldSkipPayment && currentStep === 5) return 4;
    if (shouldSkipPayment && currentStep > 3) return currentStep - 1;
    return currentStep;
  };

  const getDisplayTotal = () => {
    return shouldSkipPayment ? totalSteps - 1 : totalSteps;
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
            <span className="text-2xl font-bold text-gray-900">LOYO</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{stepTitles[currentStep - 1]}</h1>
          <p className="text-gray-600">Step {getDisplayStep()} of {getDisplayTotal()}</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(getDisplayStep() / getDisplayTotal()) * 100}%` }}
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
