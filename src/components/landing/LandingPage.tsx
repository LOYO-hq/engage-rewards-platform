
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, QrCode, Users, CreditCard, TrendingUp, Heart, Zap, Gift, BarChart2, Sparkles, Mail, Phone, MapPin, Rocket, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 29,
      annualPrice: 23,
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
      monthlyPrice: 59,
      annualPrice: 47,
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                LOYO
              </span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How it works</a>
              <Button variant="ghost" onClick={() => navigate('/auth')} className="text-gray-600 hover:text-gray-900">
                Log in
              </Button>
            </nav>
            
            <Button onClick={() => navigate('/auth')} className="bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-200 text-lg px-4 py-2">
            🚀 DIGITAL LOYALTY MADE SIMPLE
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Turn First-Time Visitors
            <span className="block text-blue-600">
              Into Lifelong Customers
            </span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gray-600">Skip the paper punch cards.</span>
            <br />
            <span className="text-gray-600">Create stunning digital loyalty programs that customers actually want to use.</span>
            <br />
            <span className="text-gray-600">Watch your repeat sales soar.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-3">
              <QrCode className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <p className="text-base text-gray-500 mt-4">
            Join 2,500+ businesses already growing with LOYO
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Loyalty
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools designed to turn one-time visitors into lifelong customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">
                  No more lost cards
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Beautiful Digital Cards</CardTitle>
              <CardDescription className="text-gray-600">
                Ditch the paper! Create stunning, branded digital stamp cards that customers actually want to keep and use.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <QrCode className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-2 py-1 rounded-full text-xs font-medium">
                  2-second experience
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Instant QR Magic</CardTitle>
              <CardDescription className="text-gray-600">
                One scan, one stamp. The fastest loyalty system ever created. No apps to download, no passwords to remember.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-full text-xs font-medium">
                  Know your customers
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Smart Business Intelligence</CardTitle>
              <CardDescription className="text-gray-600">
                See exactly who your best customers are, when they visit, and what drives them to return. Make data-driven decisions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <Gift className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 px-2 py-1 rounded-full text-xs font-medium">
                  Perfect timing
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Targeted Promotions</CardTitle>
              <CardDescription className="text-gray-600">
                Send the right offer to the right customer at the perfect moment. Birthday specials, happy hours, new product launches.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 px-2 py-1 rounded-full text-xs font-medium">
                  Proven results
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Revenue Growth</CardTitle>
              <CardDescription className="text-gray-600">
                Turn one-time visitors into regulars. Increase visit frequency by 40% and average spend by 25% with proven loyalty tactics.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-50 p-3 rounded-xl w-fit">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100 px-2 py-1 rounded-full text-xs font-medium">
                  Zero maintenance
                </Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Set & Forget Automation</CardTitle>
              <CardDescription className="text-gray-600">
                Once set up, LOYO runs itself. Automatic rewards, smart reminders, and seamless customer experiences.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>
          
          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Annual</span>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Save 20% with Annual Payment
            </Badge>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${
              plan.popular ? 'border-blue-500 ring-2 ring-blue-200 shadow-xl' : 'border-gray-200'
            } hover:shadow-lg transition-all duration-300 bg-white`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              {plan.trial && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    14-Day Free Trial
                  </div>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900">
                  {plan.price === 'Custom' ? (
                    'Custom'
                  ) : (
                    <>
                      {isAnnual && plan.monthlyPrice ? (
                        <div>
                          <span className="text-lg text-gray-400 line-through">${plan.monthlyPrice}</span>
                          <div>${plan.annualPrice}<span className="text-lg text-gray-500">/month</span></div>
                          <div className="text-sm text-gray-500 mt-1">billed annually</div>
                        </div>
                      ) : (
                        <>
                          ${plan.monthlyPrice}
                          <span className="text-lg text-gray-500">/month</span>
                        </>
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
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => navigate('/auth')}
                >
                  {plan.trial ? 'Start Free Trial' : plan.name === 'Enterprise' ? 'Contact Us' : `Get ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 p-2 rounded-xl">
                  <Heart className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold">LOYO</span>
              </div>
              <p className="text-gray-400 mb-4">
                Digital loyalty programs that customers actually want to use. Turn first-time visitors into lifelong customers.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">hello@loyo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">1-800-LOYO-NOW</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 LOYO. All rights reserved. Built with ❤️ for business owners.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
