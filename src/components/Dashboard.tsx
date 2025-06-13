
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Heart, 
  Calendar, 
  Droplets,
  Clock,
  Star,
  Settings,
  Bell
} from 'lucide-react';

export const Dashboard = ({ user }) => {
  const todayStats = {
    steps: 8742,
    stepsGoal: 10000,
    calories: 1847,
    caloriesGoal: 2200,
    water: 6,
    waterGoal: 8,
    workoutMinutes: 45,
    workoutGoal: 60
  };

  const quickActions = [
    { label: 'Start Workout', icon: Activity, color: 'bg-wellness-sage' },
    { label: 'Log Meal', icon: Calendar, color: 'bg-wellness-ocean' },
    { label: 'Meditation', icon: Heart, color: 'bg-wellness-lavender' },
    { label: 'Add Water', icon: Droplets, color: 'bg-wellness-mint' }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good morning, {user?.name || 'there'}! 👋
          </h1>
          <p className="text-gray-600 text-sm">Ready to crush your goals today?</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-wellness-sage/20 rounded-lg">
                  <Activity className="w-4 h-4 text-wellness-sage" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Steps</p>
                  <p className="text-lg font-semibold">{todayStats.steps.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <Progress 
              value={(todayStats.steps / todayStats.stepsGoal) * 100} 
              className="mt-3 h-2"
            />
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-wellness-ocean/20 rounded-lg">
                  <Heart className="w-4 h-4 text-wellness-ocean" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Calories</p>
                  <p className="text-lg font-semibold">{todayStats.calories}</p>
                </div>
              </div>
            </div>
            <Progress 
              value={(todayStats.calories / todayStats.caloriesGoal) * 100} 
              className="mt-3 h-2"
            />
          </CardContent>
        </Card>
      </div>

      {/* Today's Progress */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Star className="w-5 h-5 text-wellness-sage" />
            <span>Today's Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Droplets className="w-5 h-5 text-wellness-mint" />
              <span className="text-sm font-medium">Water Intake</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{todayStats.water}/{todayStats.waterGoal} glasses</span>
              <Progress value={(todayStats.water / todayStats.waterGoal) * 100} className="w-16 h-2" />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-wellness-lavender" />
              <span className="text-sm font-medium">Workout Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">{todayStats.workoutMinutes}/{todayStats.workoutGoal} min</span>
              <Progress value={(todayStats.workoutMinutes / todayStats.workoutGoal) * 100} className="w-16 h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className={`h-16 flex flex-col items-center space-y-2 ${action.color} text-white border-none hover:opacity-90 transition-all duration-200 hover:scale-105`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Upcoming */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-lg">Up Next</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-wellness-sage rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Upper Body Workout</p>
                  <p className="text-xs text-gray-600">3:00 PM • 45 min</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">Start</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-wellness-ocean rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Evening Meditation</p>
                  <p className="text-xs text-gray-600">7:00 PM • 15 min</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">Join</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
