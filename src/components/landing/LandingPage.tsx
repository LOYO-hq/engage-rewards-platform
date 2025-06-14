
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Check, QrCode, Users, Star, TrendingUp, Heart, Zap, Gift, BarChart3, Smartphone, Target, Sparkles, Banknote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      annualPrice: '$23.20',
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
      annualPrice: '$47.20',
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
      price: 'Contact Sales',
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

  const features = [
    {
      icon: QrCode,
      title: 'Beautiful Digital Cards',
      subtitle: 'No more lost cards',
      description: 'Ditch the paper! Create stunning, branded digital stamp cards that customers actually want to keep and use.'
    },
    {
      icon: Smartphone,
      title: 'Instant QR Magic',
      subtitle: '2-second experience',
      description: 'One scan, one stamp. The fastest loyalty system ever created. No apps to download, no passwords to remember.'
    },
    {
      icon: BarChart3,
      title: 'Smart Business Intelligence',
      subtitle: 'Know your customers',
      description: 'See exactly who your best customers are, when they visit, and what drives them to return. Make data-driven decisions.'
    },
    {
      icon: Gift,
      title: 'Targeted Promotions',
      subtitle: 'Perfect timing',
      description: 'Send the right offer to the right customer at the perfect moment. Birthday specials, happy hours, new product launches.'
    },
    {
      icon: Banknote,
      title: 'Revenue Growth',
      subtitle: 'Proven results',
      description: 'Turn one-time visitors into regulars. Increase visit frequency by 40% and average spend by 25% with proven loyalty tactics.'
    },
    {
      icon: Sparkles,
      title: 'Set & Forget Automation',
      subtitle: 'Zero maintenance',
      description: 'Once set up, LOYO runs itself. Automatic rewards, smart reminders, and seamless customer experiences.'
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
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
              <Button onClick={() => navigate('/auth')} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                Get Started Free
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            🚀 DIGITAL LOYALTY MADE SIMPLE
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Turn First-Time Visitors<br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Into Lifelong Customers
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Skip the paper punch cards. Create stunning digital loyalty programs that customers
            actually want to use.
          </p>
          <p className="text-2xl font-semibold text-yellow-400 mb-8">
            Watch your repeat sales soar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3 font-semibold"
            >
              Start Free 7-Day Trial →
            </Button>
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-100 hover:bg-blue-50/10">
              See How It Works ↓
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              <span>Quick Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              <span>QR Code Magic</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              <span>Smart Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Loyalty
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools designed to turn one-time visitors into lifelong customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-blue-100 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <Badge className="bg-yellow-100 text-yellow-700 text-xs">{feature.subtitle}</Badge>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Digital Loyalty Programs Work Better
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600">Increase in visit frequency</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
                <p className="text-gray-600">Higher average spend</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-gray-600">Customer retention rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-lg ${isAnnual ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>Annual</span>
            <Badge className="bg-green-100 text-green-700 ml-2">Save 20% with Annual Payment</Badge>
          </div>
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
                <div className="absolute -top-3 right-4">
                  <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-xs font-medium shadow-lg">
                    14-Day Free Trial
                  </div>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  {plan.price === 'Contact Sales' ? (
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Contact Sales
                    </div>
                  ) : (
                    <>
                      {isAnnual && plan.annualPrice ? (
                        <div className="space-y-1">
                          <div className="text-lg text-gray-400 line-through">{plan.price}/month</div>
                          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            {plan.annualPrice}<span className="text-lg text-gray-500">/month</span>
                          </div>
                          <div className="text-sm text-gray-500">billed annually</div>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {plan.price}<span className="text-lg text-gray-500">/month</span>
                        </div>
                      )}
                    </>
                  )}
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
                  {plan.name === 'Enterprise' ? 'Contact Sales' : (plan.trial ? 'Start Free Trial' : `Get ${plan.name}`)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 p-2 rounded-xl">
                  <Heart className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">LOYO</span>
              </div>
              <p className="text-blue-200 mb-4">
                Transform your business with digital loyalty programs that customers actually love to use.
              </p>
              <div className="text-sm text-blue-300">
                <p>Privacy | Terms</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Trial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">© 2025 LOYO. All rights reserved.</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 md:mt-0">
              Start Free Trial
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
