
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QrCode, Plus } from 'lucide-react';

export const QRCodesTab = () => {
  const qrCodes = [
    {
      id: 1,
      name: 'Check-in QR',
      type: 'Customer Check-in',
      scans: 1247,
      created: '2024-01-10',
      location: 'Main Store'
    },
    {
      id: 2,
      name: 'Promotion QR',
      type: 'Special Offer',
      scans: 456,
      created: '2024-01-15',
      location: 'Window Display'
    },
    {
      id: 3,
      name: 'Menu QR',
      type: 'Information',
      scans: 892,
      created: '2024-01-08',
      location: 'Tables'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">QR Code Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Generate QR Code
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {qrCodes.map((qr) => (
          <Card key={qr.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{qr.name}</CardTitle>
                <QrCode className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">{qr.type}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Scans:</span>
                  <span className="font-semibold">{qr.scans}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span>{qr.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Created:</span>
                  <span>{qr.created}</span>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Analytics
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>QR Code Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <QrCode className="h-6 w-6 mb-2" />
              Check-in QR
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <QrCode className="h-6 w-6 mb-2" />
              Promotion QR
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <QrCode className="h-6 w-6 mb-2" />
              Menu QR
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Plus className="h-6 w-6 mb-2" />
              Custom QR
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
