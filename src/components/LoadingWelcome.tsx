
import { useState, useEffect } from 'react';
import { Loader2, Heart, Activity } from 'lucide-react';

export const LoadingWelcome = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    { text: "Welcome to your wellness journey", icon: Heart },
    { text: "Preparing your mindful experience", icon: Activity },
    { text: "Ready to begin!", icon: Heart }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 300);
        }, 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length, onComplete]);

  if (!isVisible) return null;

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-wellness">
      <div className="text-center space-y-8 px-4">
        <div className="animate-pulse">
          <CurrentIcon className="w-16 h-16 mx-auto text-blue mb-4" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue animate-fade-in">
            {steps[currentStep].text}
          </h1>
          
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-blue' : 'bg-blue/30'
                }`}
              />
            ))}
          </div>
        </div>

        <Loader2 className="w-8 h-8 mx-auto text-blue animate-spin" />
      </div>
    </div>
  );
};
