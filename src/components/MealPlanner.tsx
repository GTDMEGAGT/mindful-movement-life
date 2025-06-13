
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Plus, 
  Search,
  Clock,
  Heart
} from 'lucide-react';

export const MealPlanner = ({ user }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const todayMeals = [
    {
      id: 1,
      name: 'Avocado Toast with Eggs',
      type: 'Breakfast',
      calories: 420,
      protein: 18,
      carbs: 24,
      fat: 28,
      time: '8:00 AM',
      image: '🥑'
    },
    {
      id: 2,
      name: 'Quinoa Buddha Bowl',
      type: 'Lunch',
      calories: 550,
      protein: 22,
      carbs: 65,
      fat: 18,
      time: '12:30 PM',
      image: '🥗'
    },
    {
      id: 3,
      name: 'Grilled Salmon & Veggies',
      type: 'Dinner',
      calories: 480,
      protein: 35,
      carbs: 15,
      fat: 32,
      time: '7:00 PM',
      image: '🐟'
    }
  ];

  const nutritionGoals = {
    calories: 2200,
    protein: 120,
    carbs: 275,
    fat: 73
  };

  const todayIntake = {
    calories: 1450,
    protein: 75,
    carbs: 104,
    fat: 78
  };

  const mealSuggestions = [
    {
      name: 'Greek Yogurt Parfait',
      calories: 280,
      prep: '5 min',
      diet: 'Vegetarian',
      rating: 4.8
    },
    {
      name: 'Chicken Stir Fry',
      calories: 350,
      prep: '15 min',
      diet: 'Balanced',
      rating: 4.6
    },
    {
      name: 'Keto Cauliflower Bowl',
      calories: 320,
      prep: '20 min',
      diet: 'Keto',
      rating: 4.7
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Meal Planner</h1>
          <p className="text-gray-600 text-sm">Fuel your body right!</p>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline">
            <Search className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-wellness-sage hover:bg-wellness-sage/90">
            <Plus className="w-4 h-4 mr-1" />
            Add Meal
          </Button>
        </div>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {/* Nutrition Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-wellness-ocean" />
                <span>Today's Nutrition</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-wellness-sage">{todayIntake.calories}</p>
                  <p className="text-sm text-gray-600">of {nutritionGoals.calories} calories</p>
                  <Progress value={(todayIntake.calories / nutritionGoals.calories) * 100} className="mt-2 h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Protein</span>
                    <span>{todayIntake.protein}g / {nutritionGoals.protein}g</span>
                  </div>
                  <Progress value={(todayIntake.protein / nutritionGoals.protein) * 100} className="h-1" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Carbs</span>
                    <span>{todayIntake.carbs}g / {nutritionGoals.carbs}g</span>
                  </div>
                  <Progress value={(todayIntake.carbs / nutritionGoals.carbs) * 100} className="h-1" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Fat</span>
                    <span>{todayIntake.fat}g / {nutritionGoals.fat}g</span>
                  </div>
                  <Progress value={(todayIntake.fat / nutritionGoals.fat) * 100} className="h-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Meals */}
          <div className="space-y-3">
            {todayMeals.map((meal) => (
              <Card key={meal.id} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{meal.image}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{meal.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {meal.type}
                            </Badge>
                            <div className="flex items-center text-xs text-gray-600">
                              <Clock className="w-3 h-3 mr-1" />
                              {meal.time}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-wellness-sage">
                          {meal.calories} cal
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                        <div>Protein: {meal.protein}g</div>
                        <div>Carbs: {meal.carbs}g</div>
                        <div>Fat: {meal.fat}g</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="week" className="space-y-4">
          {/* Weekly Meal Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>This Week's Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div 
                    key={day} 
                    className={`p-3 rounded-lg border ${
                      index === 2 ? 'border-wellness-sage bg-wellness-sage/5' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{day}</span>
                      <div className="text-sm text-gray-600">
                        {index <= 2 ? 'Planned' : 'Not planned'}
                      </div>
                    </div>
                    {index <= 2 && (
                      <div className="mt-2 flex space-x-2">
                        <Badge variant="outline" className="text-xs">Breakfast</Badge>
                        <Badge variant="outline" className="text-xs">Lunch</Badge>
                        <Badge variant="outline" className="text-xs">Dinner</Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recipes" className="space-y-4">
          {/* Recipe Suggestions */}
          <div className="space-y-3">
            <h3 className="font-semibold">Suggested for You</h3>
            {mealSuggestions.map((recipe, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{recipe.name}</h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>{recipe.calories} cal</span>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {recipe.prep}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {recipe.diet}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">⭐ {recipe.rating}</div>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Recipe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
