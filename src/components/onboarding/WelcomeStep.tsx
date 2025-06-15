
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface WelcomeStepProps {
  businessName: string;
}

export const WelcomeStep = ({ businessName }: WelcomeStepProps) => {
  return (
    <div className="text-center space-y-6">
      <div className="bg-green-50 p-6 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-green-600" />
      </div>
      
      <div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-2">
          Welcome to LOYO, {businessName}! 🎉
        </h3>
        <p className="text-gray-600 text-lg">
          Your loyalty platform is ready to help you build lasting customer relationships
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Create Your First Campaign</h4>
            <p className="text-sm text-gray-600">Start rewarding your customers today</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <div className="h-6 w-6 bg-green-600 rounded-sm"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Generate QR Codes</h4>
            <p className="text-sm text-gray-600">Make it easy for customers to join</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <div className="h-6 w-6 bg-purple-600 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Track Analytics</h4>
            <p className="text-sm text-gray-600">Monitor your program's success</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <p className="text-blue-800 font-semibold">Your 14-day Premium trial is active!</p>
        </div>
        <p className="text-blue-600 text-sm">
          Explore advanced analytics, unlimited campaigns, and premium features
        </p>
      </div>

      <div className="pt-4">
        <p className="text-gray-600 mb-4">
          Ready to start building customer loyalty?
        </p>
      </div>
    </div>
  );
};
