
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, QrCode, Users, Star, TrendingUp, Heart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      description: 'Perfect for small businesses starting their loyalty journey',
      features: [
        '1 Active Campaign',
        '250 Customers',
        'Basic QR Codes',
        'Essential Analytics',
        'Email Support'
      ]
    },
    {
      name: 'Premium',
      price: '$59',
      description: 'Everything you need to scale your loyalty program',
      features: [
        'Unlimited Campaigns',
        '1,000 Customers',
        'Custom Branded Cards',
        'Advanced QR System',
        'Advanced Analytics Dashboard',
        'Customer Behavior Insights',
        'ROI & Performance Tracking',
        'Automated Promotions Engine',
        'Priority Support'
      ],
      popular: true,
      trial: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Advanced features for multi-location businesses',
      features: [
        'Everything Premium',
        'Unlimited Customers',
        'Multi-location Hub',
        'Dedicated Success Manager',
        'White-label Options',
        'API Access',
        'Enterprise Security'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                LOYO
              </span>
            </div>
            <Button onClick={() => navigate('/auth')} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🎉 14-Day Free Premium Trial - No Credit Card Required
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Every Customer Into a 
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Loyal Advocate
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build irresistible loyalty programs that keep customers coming back for more. 
            Smart QR codes, powerful analytics, and automated rewards that drive real revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <QrCode className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Join 2,500+ businesses already growing with LOYO
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Loyalty
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools designed to turn one-time visitors into lifelong customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl w-fit">
                <QrCode className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Smart QR Loyalty Cards</CardTitle>
              <CardDescription className="text-gray-600">
                Dynamic QR codes that work like magic. Customers scan to earn points, 
                redeem rewards, and join exclusive promotions instantly.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl w-fit">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              <CardDescription className="text-gray-600">
                Deep insights into customer behavior, visit patterns, and ROI tracking. 
                Know exactly what drives loyalty and revenue.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-blue-100 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl w-fit">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Automated Campaigns</CardTitle>
              <CardDescription className="text-gray-600">
                Set up double points days, birthday rewards, and win-back campaigns 
                that run on autopilot while you focus on your business.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Trusted by businesses everywhere
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-lg font-medium">☕ Coffee Shops</div>
              <div className="text-lg font-medium">🍕 Restaurants</div>
              <div className="text-lg font-medium">💇 Salons</div>
              <div className="text-lg font-medium">🛠️ Auto Shops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${
              plan.popular ? 'border-blue-500 ring-2 ring-blue-200 shadow-xl' : 'border-blue-100'
            } hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              {plan.trial && (
                <div className="absolute -top-4 right-4">
                  <Badge className="bg-green-500 text-white px-3 py-1 text-sm font-medium">
                    14-Day Free Trial
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg text-gray-500">/month</span>}
                </div>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-white border border-blue-200 text-blue-700 hover:bg-blue-50'
                  }`}
                  onClick={() => navigate('/auth')}
                >
                  {plan.trial ? 'Start Free Trial' : `Get ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-white/10 p-2 rounded-xl">
              <Heart className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold">LOYO</span>
          </div>
          <p className="text-center text-blue-200 mt-4">
            © 2024 LOYO. All rights reserved. Built with ❤️ for business owners.
          </p>
        </div>
      </footer>
    </div>
  );
};
