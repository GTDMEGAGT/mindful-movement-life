
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Heart, 
  Users, 
  Calendar, 
  User, 
  Star 
} from 'lucide-react';

export const Navigation = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', icon: Activity, label: 'Home' },
    { id: 'workouts', icon: Heart, label: 'Workouts' },
    { id: 'meals', icon: Calendar, label: 'Meals' },
    { id: 'community', icon: Users, label: 'Community' },
    { id: 'wellness', icon: Star, label: 'Wellness' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center space-y-1 p-2 h-auto transition-all duration-200 ${
                isActive 
                  ? 'text-wellness-ocean bg-wellness-ocean/10' 
                  : 'text-gray-600 hover:text-wellness-sage'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
