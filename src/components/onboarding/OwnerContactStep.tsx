
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Phone, Plus, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface OwnerContactStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export const OwnerContactStep = ({ formData, updateFormData }: OwnerContactStepProps) => {
  const { user } = useAuth();
  const isPremium = user?.subscriptionTier === 'premium' || user?.subscriptionStatus === 'trial';

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: '',
      email: '',
      role: 'staff'
    };
    updateFormData('additionalUsers', [...formData.additionalUsers, newUser]);
  };

  const updateUser = (userId: number, field: string, value: string) => {
    const updatedUsers = formData.additionalUsers.map((user: any) =>
      user.id === userId ? { ...user, [field]: value } : user
    );
    updateFormData('additionalUsers', updatedUsers);
  };

  const removeUser = (userId: number) => {
    const updatedUsers = formData.additionalUsers.filter((user: any) => user.id !== userId);
    updateFormData('additionalUsers', updatedUsers);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-blue-50 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <User className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Owner & Contact Information</h3>
        <p className="text-gray-600 mt-2">Help your customers connect with you</p>
      </div>

      <div className="grid gap-6">
        <div>
          <Label htmlFor="ownerName" className="text-base font-medium">Owner/Manager Name *</Label>
          <Input 
            id="ownerName" 
            placeholder="John Smith"
            value={formData.ownerName}
            onChange={(e) => updateFormData('ownerName', e.target.value)}
            className="mt-2 text-base py-3"
          />
        </div>

        <div>
          <Label htmlFor="contactPhone" className="text-base font-medium">Contact Phone Number *</Label>
          <div className="mt-2 relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              id="contactPhone" 
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.contactPhone}
              onChange={(e) => updateFormData('contactPhone', e.target.value)}
              className="text-base py-3 pl-10"
            />
          </div>
        </div>

        {/* Additional Users Section */}
        <Card className={`${isPremium ? 'border-blue-200' : 'border-gray-200 bg-gray-50'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              Add Team Members
              {isPremium ? (
                <Badge className="bg-blue-100 text-blue-700">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              ) : (
                <Badge variant="outline">Premium Feature</Badge>
              )}
            </CardTitle>
            <p className="text-sm text-gray-600">
              {isPremium 
                ? "Give your team members access to manage the loyalty program"
                : "Upgrade to Premium to add team members who can manage your loyalty program"
              }
            </p>
          </CardHeader>
          <CardContent>
            {isPremium ? (
              <div className="space-y-4">
                {formData.additionalUsers.map((userItem: any) => (
                  <div key={userItem.id} className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 border border-gray-200 rounded-lg">
                    <Input
                      placeholder="Full Name"
                      value={userItem.name}
                      onChange={(e) => updateUser(userItem.id, 'name', e.target.value)}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={userItem.email}
                      onChange={(e) => updateUser(userItem.id, 'email', e.target.value)}
                    />
                    <div className="flex gap-2">
                      <select
                        value={userItem.role}
                        onChange={(e) => updateUser(userItem.id, 'role', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="staff">Staff</option>
                        <option value="manager">Manager</option>
                      </select>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeUser(userItem.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={addUser}
                  className="w-full flex items-center gap-2 mt-4"
                >
                  <Plus className="h-4 w-4" />
                  Add Team Member
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <Crown className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-4">Team management is available with Premium plans</p>
                <Button variant="outline" disabled>
                  Upgrade to Premium
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
