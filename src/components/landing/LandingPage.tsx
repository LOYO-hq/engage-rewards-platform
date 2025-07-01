
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, QrCode, Users, CreditCard, TrendingUp, Heart, Zap, Gift, BarChart2, Sparkles, Mail, Phone, MapPin, Rocket, Facebook, Instagram, Youtube, Linkedin, Star, ArrowRight, DollarSign, Target, Calendar, Eye, UserPlus, Repeat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  // Sample analytics data to showcase the dashboard
  const revenueData = [
    { month: 'Jan', revenue: 12500, customers: 89 },
    { month: 'Feb', revenue: 15800, customers: 112 },
    { month: 'Mar', revenue: 18900, customers: 134 },
    { month: 'Apr', revenue: 22400, customers: 156 },
    { month: 'May', revenue: 26700, customers: 189 },
    { month: 'Jun', revenue: 31200, customers: 224 },
  ];

  const campaignData = [
    { name: 'Double Points', value: 35, color: '#3b82f6' },
    { name: 'Birthday Special', value: 28, color: '#10b981' },
    { name: 'Referral Program', value: 22, color: '#f59e0b' },
    { name: 'New Customer', value: 15, color: '#ef4444' },
  ];

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
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LOYO
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#analytics" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Analytics</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">How it works</a>
              <Button variant="ghost" onClick={() => navigate('/auth')} className="text-gray-600 hover:text-gray-900">
                Log in
              </Button>
            </nav>
            
            <Button onClick={() => navigate('/auth')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-100 hover:to-purple-100 border-blue-200 text-lg px-6 py-2">
                🚀 Transform Your Business Today
              </Badge>
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Turn Every Visit Into
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lifetime Value
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing customers to competitors. LOYO's intelligent loyalty platform helps you create irresistible experiences that keep customers coming back for more.
              </p>
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-gray-600 font-medium">Join 2,500+ successful businesses</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/auth')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Start 14-Day Free Trial
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4">
                  <Eye className="h-5 w-5 mr-2" />
                  See Live Demo
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                ✅ No credit card required • ✅ Setup in 5 minutes • ✅ Cancel anytime
              </p>
            </div>
            
            {/* Hero Analytics Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Growth</h3>
                  <Badge className="bg-green-100 text-green-700">+145% this quarter</Badge>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">+89 new customers</p>
                    <p className="text-xs text-gray-500">this month</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Repeat className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">78% return rate</p>
                    <p className="text-xs text-gray-500">up from 45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-200">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Customer Loyalty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beautiful digital cards to advanced analytics, LOYO gives you all the tools to create loyalty programs that actually work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Digital First</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Beautiful Digital Cards</CardTitle>
              <CardDescription className="text-gray-600">
                Create stunning, branded digital stamp cards that customers love to use. No more lost paper cards or forgotten punches.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Lightning Fast</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Instant QR Rewards</CardTitle>
              <CardDescription className="text-gray-600">
                One scan, one stamp. The fastest loyalty experience ever created. Customers get rewards in under 2 seconds.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <BarChart2 className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Data Driven</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Advanced Analytics</CardTitle>
              <CardDescription className="text-gray-600">
                See exactly who your best customers are, track campaign performance, and make data-driven decisions that grow your business.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Smart Targeting</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Targeted Campaigns</CardTitle>
              <CardDescription className="text-gray-600">
                Send personalized offers based on customer behavior. Birthday specials, win-back campaigns, and VIP rewards that convert.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Automated</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Set & Forget Automation</CardTitle>
              <CardDescription className="text-gray-600">
                Once configured, LOYO runs your loyalty program automatically. Smart rewards, timely reminders, seamless experiences.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100">Revenue Growth</Badge>
              </div>
              <CardTitle className="text-xl text-gray-900">Increase Revenue 40%</CardTitle>
              <CardDescription className="text-gray-600">
                Turn one-time visitors into regulars. Our customers see average increases of 40% in visit frequency and 25% in spend per visit.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section id="analytics" className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-100 hover:to-purple-100 border-blue-200">
              Business Intelligence
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Make Every Decision Count
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced analytics turn customer data into actionable insights that drive real business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Revenue Tracking</h3>
                    <p className="text-gray-600">See how loyalty programs directly impact your bottom line with live revenue attribution and ROI calculations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Behavior Insights</h3>
                    <p className="text-gray-600">Understand visit patterns, spending habits, and preferences to create targeted campaigns that actually work.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Performance</h3>
                    <p className="text-gray-600">Track which campaigns drive the most engagement and revenue. Optimize your strategy with data, not guesswork.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Revenue Chart */}
              <Card className="p-6 bg-white shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Monthly Revenue Growth</h3>
                  <Badge className="bg-green-100 text-green-700">+145%</Badge>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
              
              {/* Campaign Performance */}
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={campaignData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {campaignData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {campaignData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-200">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes, Not Months
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your loyalty program in just 3 simple steps. No technical skills required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Your Cards</h3>
            <p className="text-gray-600">
              Choose from beautiful templates or create custom designs that match your brand. Add your logo, colors, and reward structure.
            </p>
            <ArrowRight className="h-5 w-5 text-blue-500 mx-auto mt-6 md:hidden" />
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch Campaigns</h3>
            <p className="text-gray-600">
              Set up automated campaigns for different customer segments. Birthday specials, VIP rewards, win-back offers - all on autopilot.
            </p>
            <ArrowRight className="h-5 w-5 text-green-500 mx-auto mt-6 md:hidden" />
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Watch Revenue Grow</h3>
            <p className="text-gray-600">
              Track performance with real-time analytics. See customer retention improve and revenue increase month over month.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-100 hover:to-purple-100 border-blue-200">
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plans That Grow With Your Business
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
                Save 20%
              </Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-200 shadow-2xl scale-105' : 'border-gray-200 shadow-lg'
              } hover:shadow-xl transition-all duration-300 bg-white`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-medium">
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
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => navigate('/auth')}
                  >
                    {plan.trial ? 'Start Free Trial' : plan.name === 'Enterprise' ? 'Contact Sales' : `Get ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LOYO</span>
              </div>
              <p className="text-gray-400 mb-4">
                The most powerful loyalty platform for modern businesses. Turn first-time visitors into lifelong customers with intelligent rewards and data-driven insights.
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
                <li><a href="#analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
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
                © 2024 LOYO. All rights reserved. Built with ❤️ for business owners who want to grow.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
