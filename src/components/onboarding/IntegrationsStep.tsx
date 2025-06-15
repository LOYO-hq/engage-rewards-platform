
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Link2, Star, Facebook, Instagram, Clock, ChevronRight } from 'lucide-react';

interface IntegrationsStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const IntegrationsStep = ({ formData, updateFormData }: IntegrationsStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <Link2 className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Connect Your Integrations</h3>
        <p className="text-gray-600 mt-2">Link your social media and review platforms (all optional)</p>
      </div>

      <div className="space-y-6">
        {/* Google Reviews */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-lg">
                <Star className="h-5 w-5 text-red-600" />
              </div>
              Google Reviews
            </CardTitle>
            <p className="text-sm text-gray-600">Display your Google Reviews to build trust with customers</p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Include Google Reviews</p>
                <p className="text-sm text-gray-500">Show reviews in your loyalty program</p>
              </div>
              <Switch
                checked={formData.googleReviews}
                onCheckedChange={(checked) => updateFormData('googleReviews', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Media Integrations */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Social Media Accounts</CardTitle>
            <p className="text-sm text-gray-600">Connect your social media for better customer engagement</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Facebook className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <Label htmlFor="facebookPage" className="text-sm font-medium">Facebook Page</Label>
                <Input
                  id="facebookPage"
                  placeholder="https://facebook.com/yourbusiness"
                  value={formData.facebookPage}
                  onChange={(e) => updateFormData('facebookPage', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-pink-50 p-2 rounded-lg">
                <Instagram className="h-5 w-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <Label htmlFor="instagramAccount" className="text-sm font-medium">Instagram Account</Label>
                <Input
                  id="instagramAccount"
                  placeholder="@yourbusiness"
                  value={formData.instagramAccount}
                  onChange={(e) => updateFormData('instagramAccount', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-lg">
                <div className="h-5 w-5 bg-red-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">P</div>
              </div>
              <div className="flex-1">
                <Label htmlFor="pinterestAccount" className="text-sm font-medium">Pinterest Account</Label>
                <Input
                  id="pinterestAccount"
                  placeholder="https://pinterest.com/yourbusiness"
                  value={formData.pinterestAccount}
                  onChange={(e) => updateFormData('pinterestAccount', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-3">
              <div className="bg-green-50 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              Business Hours Display
            </CardTitle>
            <p className="text-sm text-gray-600">Show your business hours in the loyalty program</p>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Display Business Hours</p>
                <p className="text-sm text-gray-500">Help customers know when you're open</p>
              </div>
              <Switch
                checked={formData.businessHours}
                onCheckedChange={(checked) => updateFormData('businessHours', checked)}
              />
            </div>
            {formData.businessHours && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 flex items-center gap-2">
                  <ChevronRight className="h-4 w-4" />
                  You can set your specific hours in Settings after completing setup
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            Don't worry - you can always add or modify these integrations later in your Settings
          </p>
        </div>
      </div>
    </div>
  );
};
