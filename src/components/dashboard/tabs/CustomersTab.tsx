
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Star } from 'lucide-react';

export const CustomersTab = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      points: 240,
      tier: 'Gold',
      visits: 12,
      lastVisit: '2 days ago'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@email.com',
      points: 180,
      tier: 'Silver',
      visits: 8,
      lastVisit: '1 week ago'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@email.com',
      points: 95,
      tier: 'Bronze',
      visits: 4,
      lastVisit: '3 days ago'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Customer Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Customer Database</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Customer</th>
                  <th className="text-left py-3">Points</th>
                  <th className="text-left py-3">Tier</th>
                  <th className="text-left py-3">Visits</th>
                  <th className="text-left py-3">Last Visit</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="py-4">
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="font-semibold">{customer.points}</span>
                    </td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        customer.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        customer.tier === 'Silver' ? 'bg-gray-100 text-gray-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        <Star className="h-3 w-3 mr-1" />
                        {customer.tier}
                      </span>
                    </td>
                    <td className="py-4">{customer.visits}</td>
                    <td className="py-4">{customer.lastVisit}</td>
                    <td className="py-4">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
