
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Check, 
  Crown,
  Activity,
  Heart,
  Users,
  Calendar,
  Clock
} from 'lucide-react';

export const PremiumSubscription = ({ user }) => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      period: 'month',
      features: [
        'Basic workout plans',
        'Meal tracking',
        'Community access',
        'Progress tracking'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 19.99,
      period: 'month',
      features: [
        'All Basic features',
        'Advanced workout plans',
        'Custom meal plans',
        'Personal trainer chat',
        'Advanced analytics',
        'Premium meditation library'
      ],
      popular: true
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 39.99,
      period: 'month',
      features: [
        'All Pro features',
        '1-on-1 coaching sessions',
        'Custom nutrition plans',
        'Priority support',
        'Exclusive content',
        'Advanced biometric tracking'
      ],
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: Activity,
      title: 'Advanced Workouts',
      description: 'Access to exclusive HIIT, strength training, and specialty programs'
    },
    {
      icon: Heart,
      title: 'Meditation Library',
      description: 'Premium guided meditations from world-class instructors'
    },
    {
      icon: Calendar,
      title: 'Custom Meal Plans',
      description: 'Personalized nutrition plans based on your goals and preferences'
    },
    {
      icon: Users,
      title: 'Personal Coaching',
      description: 'Direct access to certified trainers and nutritionists'
    }
  ];

  const handleSubscribe = (planId) => {
    // In a real app, this would integrate with Stripe
    console.log(`Subscribing to ${planId} plan`);
    alert(`Subscription to ${planId} plan initiated! 🎉`);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center pt-2">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-wellness rounded-full flex items-center justify-center">
          <Crown className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Unlock Premium</h1>
        <p className="text-gray-600 text-sm">Take your wellness journey to the next level</p>
      </div>

      {/* Premium Features */}
      <div className="space-y-3">
        <h3 className="font-semibold text-center mb-4">Premium Features</h3>
        {premiumFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="card-hover">
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-wellness-sage/20 rounded-lg">
                    <Icon className="w-5 h-5 text-wellness-sage" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pricing Plans */}
      <div className="space-y-4">
        <h3 className="font-semibold text-center">Choose Your Plan</h3>
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`cursor-pointer transition-all duration-200 ${
              selectedPlan === plan.id 
                ? 'border-wellness-sage border-2 shadow-lg' 
                : 'hover:shadow-md'
            } ${plan.popular ? 'relative' : ''}`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-wellness-sage">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-lg">{plan.name}</h4>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold text-wellness-sage">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === plan.id 
                    ? 'border-wellness-sage bg-wellness-sage' 
                    : 'border-gray-300'
                }`}>
                  {selectedPlan === plan.id && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-wellness-sage" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Subscription Button */}
      <div className="space-y-4">
        <Button 
          onClick={() => handleSubscribe(selectedPlan)}
          className="w-full h-12 bg-gradient-wellness hover:opacity-90 text-white font-semibold"
          size="lg"
        >
          Subscribe to {plans.find(p => p.id === selectedPlan)?.name} Plan
        </Button>
        
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-600">
            🔒 Secure payment powered by Stripe
          </p>
          <p className="text-xs text-gray-600">
            Cancel anytime • 7-day free trial • No commitment
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <Card className="bg-gradient-to-br from-wellness-sage/5 to-wellness-ocean/5">
        <CardContent className="p-4">
          <div className="text-center space-y-3">
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-wellness-sage text-wellness-sage" />
              ))}
            </div>
            <p className="text-sm italic">
              "Premium features transformed my fitness journey. The personal coaching and custom plans made all the difference!"
            </p>
            <p className="text-xs text-gray-600">- Sarah M., Premium Member</p>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-wellness-sage">50k+</div>
          <div className="text-xs text-gray-600">Happy Members</div>
        </div>
        <div>
          <div className="text-lg font-bold text-wellness-ocean">4.9⭐</div>
          <div className="text-xs text-gray-600">App Rating</div>
        </div>
        <div>
          <div className="text-lg font-bold text-wellness-lavender">24/7</div>
          <div className="text-xs text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );
};
