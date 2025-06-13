
import { useState, useEffect } from 'react';
import { OnboardingFlow } from '@/components/OnboardingFlow';
import { Dashboard } from '@/components/Dashboard';
import { Navigation } from '@/components/Navigation';
import { WorkoutPlan } from '@/components/WorkoutPlan';
import { MealPlanner } from '@/components/MealPlanner';
import { CommunityFeed } from '@/components/CommunityFeed';
import { WellnessHub } from '@/components/WellnessHub';
import { UserProfile } from '@/components/UserProfile';
import { PremiumSubscription } from '@/components/PremiumSubscription';
import { LoadingWelcome } from '@/components/LoadingWelcome';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has completed onboarding
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    if (onboardingComplete) {
      setIsOnboarded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOnboardingComplete = (userData) => {
    setUser(userData);
    setIsOnboarded(true);
    localStorage.setItem('onboardingComplete', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  if (isLoading) {
    return <LoadingWelcome onComplete={handleLoadingComplete} />;
  }

  if (!isOnboarded) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'workouts':
        return <WorkoutPlan user={user} />;
      case 'meals':
        return <MealPlanner user={user} />;
      case 'community':
        return <CommunityFeed user={user} />;
      case 'wellness':
        return <WellnessHub user={user} />;
      case 'profile':
        return <UserProfile user={user} setUser={setUser} />;
      case 'premium':
        return <PremiumSubscription user={user} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-mint/20 via-wellness-sage/10 to-wellness-ocean/20">
      <div className="w-full max-w-md mx-auto bg-background min-h-screen relative shadow-lg">
        <main className="pb-20 px-safe">
          {renderCurrentView()}
        </main>
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
      </div>
    </div>
  );
};

export default Index;
