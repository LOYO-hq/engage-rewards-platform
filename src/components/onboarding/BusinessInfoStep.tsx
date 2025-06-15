
import { useState, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Building2, Upload, Crop, RotateCw, Trash2 } from 'lucide-react';

interface BusinessInfoStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const BusinessInfoStep = ({ formData, updateFormData }: BusinessInfoStepProps) => {
  const [useManualAddress, setUseManualAddress] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const businessTypes = [
    { value: 'cafe', label: '☕ Coffee Shop, Cafe' },
    { value: 'restaurant', label: '🍽️ Restaurant, Retail Store' },
    { value: 'hair_salon', label: '💇 Hair Salon' },
    { value: 'barber', label: '✂️ Barber Shop' },
    { value: 'mechanic', label: '🔧 Auto Repair, Mechanic' },
    { value: 'beauty', label: '💄 Beauty Salon' },
    { value: 'fitness', label: '💪 Gym, Fitness Center' },
    { value: 'dental', label: '🦷 Dental Office' },
    { value: 'medical', label: '🏥 Medical Practice' },
    { value: 'pet', label: '🐕 Pet Services' },
    { value: 'other', label: '📋 Other' }
  ];

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
        updateFormData('logo', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoPreview(null);
    updateFormData('logo', null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <Building2 className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Tell us about your business</h3>
        <p className="text-gray-600 mt-2">Help us set up your loyalty program</p>
      </div>

      <div className="grid gap-6">
        <div>
          <Label htmlFor="businessName" className="text-base font-medium">Business Name *</Label>
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
          <Label htmlFor="businessType" className="text-base font-medium">Business Type *</Label>
          <Select value={formData.businessType} onValueChange={(value) => updateFormData('businessType', value)}>
            <SelectTrigger className="mt-2 text-base py-3">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {businessTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base font-medium">Business Address</Label>
          {!useManualAddress ? (
            <div className="mt-2 space-y-2">
              <Input 
                placeholder="Start typing your address for suggestions..."
                value={formData.businessAddress}
                onChange={(e) => updateFormData('businessAddress', e.target.value)}
                className="text-base py-3"
              />
              <Button 
                type="button" 
                variant="link" 
                onClick={() => setUseManualAddress(true)}
                className="text-sm text-blue-600 p-0 h-auto"
              >
                Enter address manually instead
              </Button>
            </div>
          ) : (
            <div className="mt-2 space-y-2">
              <Textarea 
                placeholder="Enter your full business address..."
                value={formData.businessAddress}
                onChange={(e) => updateFormData('businessAddress', e.target.value)}
                className="text-base min-h-[80px]"
                rows={3}
              />
              <Button 
                type="button" 
                variant="link" 
                onClick={() => setUseManualAddress(false)}
                className="text-sm text-blue-600 p-0 h-auto"
              >
                Use address suggestions instead
              </Button>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="businessDescription" className="text-base font-medium">Business Description (Optional)</Label>
          <Textarea 
            id="businessDescription"
            placeholder="Describe what makes your business special..."
            value={formData.businessDescription}
            onChange={(e) => updateFormData('businessDescription', e.target.value)}
            className="mt-2 text-base min-h-[100px]"
            rows={4}
          />
          <p className="text-sm text-gray-500 mt-2">This will help us suggest the best loyalty program features for you.</p>
        </div>

        <div>
          <Label className="text-base font-medium">Business Logo (Optional)</Label>
          <div className="mt-2">
            {!logoPreview ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload your business logo</p>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 5MB</p>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={logoPreview} 
                    alt="Logo preview" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Logo uploaded</p>
                    <p className="text-xs text-gray-500 mb-3">Preview shown at left</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Crop className="h-3 w-3" />
                        Crop
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <RotateCw className="h-3 w-3" />
                        Rotate
                      </Button>
                      <Button size="sm" variant="outline" onClick={removeLogo} className="flex items-center gap-1 text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
