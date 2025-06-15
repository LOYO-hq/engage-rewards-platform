
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Shield, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface PaymentStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const PaymentStep = ({ formData, updateFormData }: PaymentStepProps) => {
  const { user } = useAuth();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: ''
  });

  const planDetails = {
    basic: { name: 'Basic', price: '$29', features: ['1 Campaign', '250 Customers', 'Basic Analytics'] },
    premium: { name: 'Premium', price: '$59', features: ['Unlimited Campaigns', '1,000 Customers', 'Advanced Analytics'] }
  };

  const currentPlan = planDetails[user?.subscriptionTier as keyof typeof planDetails] || planDetails.basic;

  const handlePaymentDataChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
    updateFormData('paymentMethod', { ...paymentData, [field]: value });
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
    }
    return v;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Payment Information</h3>
        <p className="text-gray-600 mt-2">Secure payment to activate your plan</p>
      </div>

      {/* Plan Summary */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Your Selected Plan</span>
            <Badge className="bg-blue-600 text-white">{currentPlan.name}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">{currentPlan.name} Plan</span>
            <span className="text-2xl font-bold text-blue-600">{currentPlan.price}/month</span>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            {currentPlan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Payment Form */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Payment Details
          </CardTitle>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <Lock className="h-4 w-4" />
            Your payment information is encrypted and secure
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cardholderName" className="text-sm font-medium">Cardholder Name *</Label>
            <Input
              id="cardholderName"
              placeholder="John Smith"
              value={paymentData.cardholderName}
              onChange={(e) => handlePaymentDataChange('cardholderName', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="cardNumber" className="text-sm font-medium">Card Number *</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentData.cardNumber}
              onChange={(e) => handlePaymentDataChange('cardNumber', formatCardNumber(e.target.value))}
              maxLength={19}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date *</Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={paymentData.expiryDate}
                onChange={(e) => handlePaymentDataChange('expiryDate', formatExpiryDate(e.target.value))}
                maxLength={5}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-sm font-medium">CVV *</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={paymentData.cvv}
                onChange={(e) => handlePaymentDataChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 4))}
                maxLength={4}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billingAddress" className="text-sm font-medium">Billing Address *</Label>
            <Input
              id="billingAddress"
              placeholder="123 Main St, City, State, ZIP"
              value={paymentData.billingAddress}
              onChange={(e) => handlePaymentDataChange('billingAddress', e.target.value)}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      <div className="text-center py-4">
        <p className="text-sm text-gray-500">
          By proceeding, you agree to our Terms of Service and Privacy Policy.
          You can cancel your subscription at any time.
        </p>
      </div>
    </div>
  );
};
