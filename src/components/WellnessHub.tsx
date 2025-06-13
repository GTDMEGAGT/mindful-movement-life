
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { 
  Heart, 
  Sleep, 
  Water,
  Clock,
  Star,
  Play,
  Pause,
  CheckCircle,
  Plus
} from 'lucide-react';

export const WellnessHub = ({ user }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSession, setCurrentSession] = useState(null);

  const todayHabits = [
    { name: 'Drink 8 glasses of water', completed: 6, total: 8, icon: Water },
    { name: 'Get 8 hours of sleep', completed: 7.5, total: 8, icon: Sleep },
    { name: 'Meditate for 10 minutes', completed: 1, total: 1, icon: Heart },
    { name: 'Take vitamins', completed: 1, total: 1, icon: Star }
  ];

  const meditationSessions = [
    {
      id: 1,
      name: 'Morning Mindfulness',
      duration: 10,
      category: 'Mindfulness',
      instructor: 'Sarah Chen',
      rating: 4.8,
      description: 'Start your day with intention and clarity'
    },
    {
      id: 2,
      name: 'Stress Relief',
      duration: 15,
      category: 'Anxiety',
      instructor: 'Michael Torres',
      rating: 4.9,
      description: 'Release tension and find inner peace'
    },
    {
      id: 3,
      name: 'Deep Sleep',
      duration: 20,
      category: 'Sleep',
      instructor: 'Emma Wilson',
      rating: 4.7,
      description: 'Wind down for a restful night'
    }
  ];

  const sleepData = {
    lastNight: 7.5,
    goal: 8,
    quality: 85,
    bedtime: '10:30 PM',
    wakeup: '6:00 AM'
  };

  const habits = [
    { name: 'Morning Stretch', streak: 12, enabled: true },
    { name: 'Gratitude Journal', streak: 8, enabled: true },
    { name: 'Evening Walk', streak: 5, enabled: false },
    { name: 'Deep Breathing', streak: 15, enabled: true }
  ];

  const startMeditation = (session) => {
    setCurrentSession(session);
    setIsPlaying(true);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const endSession = () => {
    setCurrentSession(null);
    setIsPlaying(false);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wellness Hub</h1>
          <p className="text-gray-600 text-sm">Nurture your mind, body & soul</p>
        </div>
        <Button size="sm" className="bg-wellness-lavender hover:bg-wellness-lavender/90">
          <Plus className="w-4 h-4 mr-1" />
          Custom
        </Button>
      </div>

      <Tabs defaultValue="habits" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="habits">Habits</TabsTrigger>
          <TabsTrigger value="meditation">Meditate</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
        </TabsList>

        <TabsContent value="habits" className="space-y-4">
          {/* Today's Habits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-wellness-sage" />
                <span>Today's Habits</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayHabits.map((habit, index) => {
                const Icon = habit.icon;
                const progress = (habit.completed / habit.total) * 100;
                const isCompleted = habit.completed >= habit.total;
                
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      isCompleted ? 'bg-wellness-sage text-white' : 'bg-gray-100'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{habit.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={progress} className="flex-1 h-2" />
                        <span className="text-xs text-gray-600">
                          {habit.completed}/{habit.total}
                        </span>
                      </div>
                    </div>
                    {isCompleted && (
                      <CheckCircle className="w-5 h-5 text-wellness-sage" />
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Habit Tracker */}
          <Card>
            <CardHeader>
              <CardTitle>Habit Tracker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {habits.map((habit, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Switch checked={habit.enabled} />
                    <div>
                      <p className="text-sm font-medium">{habit.name}</p>
                      <p className="text-xs text-gray-600">
                        🔥 {habit.streak} day streak
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {habit.streak} days
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meditation" className="space-y-4">
          {/* Current Session */}
          {currentSession && (
            <Card className="border-wellness-lavender border-2">
              <CardContent className="p-4">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-wellness-lavender rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{currentSession.name}</h3>
                    <p className="text-sm text-gray-600">with {currentSession.instructor}</p>
                  </div>
                  <div className="text-3xl font-mono">
                    {currentSession.duration}:00
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={togglePlayback}
                      className="w-20"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={endSession}
                    >
                      End
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Meditation Library */}
          <div className="space-y-3">
            <h3 className="font-semibold">Meditation Library</h3>
            {meditationSessions.map((session) => (
              <Card key={session.id} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{session.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {session.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {session.duration} min
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {session.category}
                        </Badge>
                        <div>⭐ {session.rating}</div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => startMeditation(session)}
                      className="bg-wellness-lavender hover:bg-wellness-lavender/90"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Start
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600">
                    by {session.instructor}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-4">
          {/* Sleep Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sleep className="w-5 h-5 text-wellness-lavender" />
                <span>Last Night's Sleep</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-lavender">
                  {sleepData.lastNight}h
                </div>
                <p className="text-sm text-gray-600">
                  of {sleepData.goal}h goal
                </p>
                <Progress 
                  value={(sleepData.lastNight / sleepData.goal) * 100} 
                  className="mt-2 h-2"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm font-medium">Sleep Quality</p>
                  <p className="text-2xl font-semibold text-wellness-sage">
                    {sleepData.quality}%
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">In Bed</p>
                  <p className="text-sm text-gray-600">
                    {sleepData.bedtime} - {sleepData.wakeup}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sleep Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Sleep Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-wellness-lavender/10 rounded-lg">
                  <p className="text-sm font-medium">💤 Great job!</p>
                  <p className="text-xs text-gray-600">
                    You've maintained a consistent sleep schedule this week.
                  </p>
                </div>
                <div className="p-3 bg-wellness-sage/10 rounded-lg">
                  <p className="text-sm font-medium">🌙 Tip</p>
                  <p className="text-xs text-gray-600">
                    Try dimming lights 1 hour before bed for better sleep quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="water" className="space-y-4">
          {/* Water Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Water className="w-5 h-5 text-wellness-mint" />
                <span>Water Intake</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-mint">
                  6 / 8
                </div>
                <p className="text-sm text-gray-600">glasses today</p>
                <Progress value={75} className="mt-2 h-3" />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((glass) => (
                  <div
                    key={glass}
                    className={`aspect-square rounded-lg flex items-center justify-center ${
                      glass <= 6 
                        ? 'bg-wellness-mint text-white' 
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <Water className="w-6 h-6" />
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-wellness-mint hover:bg-wellness-mint/90"
                size="lg"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Glass
              </Button>
            </CardContent>
          </Card>

          {/* Hydration Reminders */}
          <Card>
            <CardHeader>
              <CardTitle>Hydration Reminders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Smart reminders</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Reminder frequency</span>
                <span className="text-sm text-gray-600">Every 2 hours</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
