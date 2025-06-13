
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Clock, 
  Heart, 
  Plus,
  Play,
  CheckCircle
} from 'lucide-react';

export const WorkoutPlan = ({ user }) => {
  const [activeWorkout, setActiveWorkout] = useState(null);

  const todayWorkouts = [
    {
      id: 1,
      name: 'Morning HIIT',
      duration: 25,
      calories: 300,
      difficulty: 'Intermediate',
      exercises: 8,
      completed: false,
      type: 'HIIT'
    },
    {
      id: 2,
      name: 'Upper Body Strength',
      duration: 45,
      calories: 400,
      difficulty: 'Advanced',
      exercises: 12,
      completed: false,
      type: 'Strength'
    }
  ];

  const weeklyPlan = [
    { day: 'Mon', workout: 'Full Body', completed: true },
    { day: 'Tue', workout: 'Cardio', completed: true },
    { day: 'Wed', workout: 'Upper Body', completed: false, active: true },
    { day: 'Thu', workout: 'Yoga', completed: false },
    { day: 'Fri', workout: 'Lower Body', completed: false },
    { day: 'Sat', workout: 'HIIT', completed: false },
    { day: 'Sun', workout: 'Rest', completed: false }
  ];

  const exercises = [
    { name: 'Push-ups', sets: 3, reps: 15, rest: 60 },
    { name: 'Squats', sets: 3, reps: 20, rest: 60 },
    { name: 'Plank', sets: 3, time: 30, rest: 60 },
    { name: 'Burpees', sets: 3, reps: 10, rest: 90 }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workouts</h1>
          <p className="text-gray-600 text-sm">Stay consistent, stay strong!</p>
        </div>
        <Button size="sm" className="bg-wellness-sage hover:bg-wellness-sage/90">
          <Plus className="w-4 h-4 mr-1" />
          Custom
        </Button>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {/* Today's Workouts */}
          {todayWorkouts.map((workout) => (
            <Card key={workout.id} className="card-hover">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{workout.name}</h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {workout.duration} min
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Heart className="w-4 h-4 mr-1" />
                        {workout.calories} cal
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {workout.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Badge className={workout.type === 'HIIT' ? 'bg-wellness-coral' : 'bg-wellness-ocean'}>
                    {workout.type}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{workout.exercises} exercises</span>
                  <Button 
                    size="sm" 
                    className="bg-wellness-sage hover:bg-wellness-sage/90"
                    onClick={() => setActiveWorkout(workout)}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Active Workout Session */}
          {activeWorkout && (
            <Card className="border-wellness-sage border-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Active: {activeWorkout.name}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setActiveWorkout(null)}
                  >
                    End
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{exercise.name}</p>
                      <p className="text-sm text-gray-600">
                        {exercise.reps ? `${exercise.sets} × ${exercise.reps} reps` : `${exercise.sets} × ${exercise.time}s`}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          {/* Weekly Plan */}
          <Card>
            <CardHeader>
              <CardTitle>This Week's Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {weeklyPlan.map((day, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg text-center text-sm ${
                      day.completed 
                        ? 'bg-wellness-sage text-white' 
                        : day.active 
                          ? 'bg-wellness-ocean text-white' 
                          : 'bg-gray-100'
                    }`}
                  >
                    <p className="font-medium">{day.day}</p>
                    <p className="text-xs mt-1">{day.workout}</p>
                    {day.completed && <CheckCircle className="w-3 h-3 mx-auto mt-1" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          {/* Progress Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Workouts Completed</span>
                  <span>5/6</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Total Minutes</span>
                  <span>245/300</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories Burned</span>
                  <span>1,850/2,100</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-wellness-sage/10 rounded-lg">
                  <div className="w-8 h-8 bg-wellness-sage rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">5-Day Streak</p>
                    <p className="text-xs text-gray-600">Keep it up!</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-wellness-ocean/10 rounded-lg">
                  <div className="w-8 h-8 bg-wellness-ocean rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Personal Best</p>
                    <p className="text-xs text-gray-600">45 min workout</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
