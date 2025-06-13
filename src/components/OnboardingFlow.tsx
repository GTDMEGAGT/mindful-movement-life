
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Heart, Activity, Clock } from 'lucide-react';

export const OnboardingFlow = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    age: 25,
    weight: 70,
    height: 170,
    goal: '',
    activityLevel: '',
    dietPreference: '',
    workoutDays: 3
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete(userData);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateUserData = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div className="min-h-screen wellness-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-morphism animate-fade-in">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Welcome to Mindful Movement
          </CardTitle>
          <p className="text-white/80 text-sm">Step {step} of 4</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-slide-up">
              <div>
                <Label htmlFor="name" className="text-white font-medium">What's your name?</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) => updateUserData('name', e.target.value)}
                  placeholder="Enter your name"
                  className="mt-2 bg-white/90"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-medium">Age</Label>
                  <div className="mt-2">
                    <Slider
                      value={[userData.age]}
                      onValueChange={(value) => updateUserData('age', value[0])}
                      max={80}
                      min={16}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-center text-white/80 mt-1">{userData.age} years</p>
                  </div>
                </div>
                <div>
                  <Label className="text-white font-medium">Weight (kg)</Label>
                  <div className="mt-2">
                    <Slider
                      value={[userData.weight]}
                      onValueChange={(value) => updateUserData('weight', value[0])}
                      max={200}
                      min={30}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-center text-white/80 mt-1">{userData.weight} kg</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-lg font-semibold text-white">What's your main goal?</h3>
              <RadioGroup
                value={userData.goal}
                onValueChange={(value) => updateUserData('goal', value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <RadioGroupItem value="weight-loss" id="weight-loss" className="text-white" />
                  <Label htmlFor="weight-loss" className="text-white cursor-pointer flex-1">
                    🔥 Weight Loss
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <RadioGroupItem value="muscle-gain" id="muscle-gain" className="text-white" />
                  <Label htmlFor="muscle-gain" className="text-white cursor-pointer flex-1">
                    💪 Muscle Gain
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <RadioGroupItem value="wellness" id="wellness" className="text-white" />
                  <Label htmlFor="wellness" className="text-white cursor-pointer flex-1">
                    🧘 Overall Wellness
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <RadioGroupItem value="endurance" id="endurance" className="text-white" />
                  <Label htmlFor="endurance" className="text-white cursor-pointer flex-1">
                    🏃 Endurance
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-lg font-semibold text-white">Activity & Diet Preferences</h3>
              <div>
                <Label className="text-white font-medium">Activity Level</Label>
                <RadioGroup
                  value={userData.activityLevel}
                  onValueChange={(value) => updateUserData('activityLevel', value)}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sedentary" id="sedentary" className="text-white" />
                    <Label htmlFor="sedentary" className="text-white text-sm">Sedentary</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" className="text-white" />
                    <Label htmlFor="light" className="text-white text-sm">Lightly Active</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="moderate" className="text-white" />
                    <Label htmlFor="moderate" className="text-white text-sm">Moderately Active</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very" id="very" className="text-white" />
                    <Label htmlFor="very" className="text-white text-sm">Very Active</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-white font-medium">Diet Preference</Label>
                <RadioGroup
                  value={userData.dietPreference}
                  onValueChange={(value) => updateUserData('dietPreference', value)}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" className="text-white" />
                    <Label htmlFor="balanced" className="text-white text-sm">Balanced</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="keto" id="keto" className="text-white" />
                    <Label htmlFor="keto" className="text-white text-sm">Keto</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="vegan" id="vegan" className="text-white" />
                    <Label htmlFor="vegan" className="text-white text-sm">Vegan</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mediterranean" id="mediterranean" className="text-white" />
                    <Label htmlFor="mediterranean" className="text-white text-sm">Mediterranean</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-white text-center">You're all set!</h3>
              <div className="bg-white/10 rounded-lg p-4 space-y-2">
                <p className="text-white/90 text-sm"><strong>Name:</strong> {userData.name}</p>
                <p className="text-white/90 text-sm"><strong>Goal:</strong> {userData.goal}</p>
                <p className="text-white/90 text-sm"><strong>Activity:</strong> {userData.activityLevel}</p>
                <p className="text-white/90 text-sm"><strong>Diet:</strong> {userData.dietPreference}</p>
              </div>
              <div className="text-center">
                <Activity className="w-12 h-12 mx-auto text-white mb-2" />
                <p className="text-white/80 text-sm">Ready to start your wellness journey!</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button 
                onClick={handlePrevious}
                variant="outline" 
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                Previous
              </Button>
            )}
            <Button 
              onClick={handleNext}
              className="bg-white text-slate-800 hover:bg-white/90 ml-auto"
              disabled={
                (step === 1 && !userData.name) || 
                (step === 2 && !userData.goal) || 
                (step === 3 && (!userData.activityLevel || !userData.dietPreference))
              }
            >
              {step < 4 ? 'Next' : 'Get Started'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
