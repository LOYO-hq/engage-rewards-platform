
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, QrCode, Star, Info } from 'lucide-react';

export const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Campaigns',
      value: '3',
      change: '+1',
      icon: Star,
      color: 'text-green-600'
    },
    {
      title: 'QR Code Scans',
      value: '1,247',
      change: '+23%',
      icon: QrCode,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue Impact',
      value: '$12,847',
      change: '+18%',
      icon: Info,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-green-600 mt-1">
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
