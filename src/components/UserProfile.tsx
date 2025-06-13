import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Settings, 
  Star, 
  Activity,
  Heart,
  Calendar,
  Bell,
  Shield,
  CreditCard,
  LogOut
} from 'lucide-react';

export const UserProfile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: 'john.doe@example.com',
    age: user?.age || 28,
    weight: user?.weight || 70,
    height: user?.height || 175,
    goal: user?.goal || 'wellness'
  });

  const achievements = [
    { name: '7-Day Streak', icon: '🔥', date: '2024-01-15', description: 'Completed 7 consecutive days of workouts' },
    { name: 'First 5K', icon: '🏃', date: '2024-01-10', description: 'Completed your first 5K run' },
    { name: 'Mindful Week', icon: '🧘', date: '2024-01-08', description: 'Meditated for 7 consecutive days' },
    { name: 'Hydration Hero', icon: '💧', date: '2024-01-05', description: 'Drank 8 glasses of water for 5 days straight' }
  ];

  const stats = {
    totalWorkouts: 42,
    totalMinutes: 1847,
    caloriesBurned: 12450,
    meditationMinutes: 385,
    level: 12,
    xp: 2847,
    xpToNext: 3000
  };

  const handleSave = () => {
    setUser({ ...user, ...profileData });
    setIsEditing(false);
  };

  const handleReset = () => {
    localStorage.removeItem('onboardingComplete');
    localStorage.removeItem('userData');
    window.location.reload();
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 text-sm">Manage your wellness journey</p>
        </div>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Settings className="w-4 h-4 mr-1" />
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="achievements">Awards</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          {/* Profile Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback className="text-xl bg-wellness-sage text-white">
                    {profileData.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-xl font-semibold">{profileData.name}</h2>
                    <Badge className="bg-wellness-sage">
                      Level {stats.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{profileData.email}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-wellness-sage" />
                    <span className="text-sm text-gray-600">
                      {stats.xp} / {stats.xpToNext} XP
                    </span>
                  </div>
                  <Progress 
                    value={(stats.xp / stats.xpToNext) * 100} 
                    className="mt-2 h-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditing ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={profileData.age}
                        onChange={(e) => setProfileData({...profileData, age: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={profileData.weight}
                        onChange={(e) => setProfileData({...profileData, weight: parseInt(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={profileData.height}
                        onChange={(e) => setProfileData({...profileData, height: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={handleSave} className="bg-wellness-sage hover:bg-wellness-sage/90">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Age</p>
                    <p className="text-gray-600">{profileData.age} years</p>
                  </div>
                  <div>
                    <p className="font-medium">Weight</p>
                    <p className="text-gray-600">{profileData.weight} kg</p>
                  </div>
                  <div>
                    <p className="font-medium">Height</p>
                    <p className="text-gray-600">{profileData.height} cm</p>
                  </div>
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="text-gray-600 capitalize">{profileData.goal}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-wellness-sage">{stats.totalWorkouts}</div>
                <p className="text-sm text-gray-600">Total Workouts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-wellness-ocean">{stats.totalMinutes}</div>
                <p className="text-sm text-gray-600">Active Minutes</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-wellness-sage" />
                  <span className="text-sm">Calories Burned</span>
                </div>
                <span className="font-semibold">{stats.caloriesBurned.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-wellness-lavender" />
                  <span className="text-sm">Meditation Minutes</span>
                </div>
                <span className="font-semibold">{stats.meditationMinutes}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-wellness-ocean" />
                  <span className="text-sm">Days Active</span>
                </div>
                <span className="font-semibold">28</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          {/* Achievements */}
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.name}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                    <Badge variant="secondary">Earned</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Workout reminders</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Meal reminders</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Water reminders</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Community updates</span>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Privacy & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Public profile</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Share achievements</span>
                <Switch defaultChecked />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* App Settings */}
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleReset}
              >
                Reset Onboarding
              </Button>
              <Button variant="outline" size="sm" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
