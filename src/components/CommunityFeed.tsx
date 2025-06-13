
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Plus,
  Activity,
  Star
} from 'lucide-react';

export const CommunityFeed = ({ user }) => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/40/40',
        level: 'Fitness Enthusiast'
      },
      content: "Just completed my first 5K run! 🏃‍♀️ The training was tough but so worth it. Next goal: 10K!",
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      achievement: '5K Completed',
      stats: {
        distance: '5.2km',
        time: '28:45',
        calories: 280
      }
    },
    {
      id: 2,
      user: {
        name: 'Mike Chen',
        avatar: '/api/placeholder/40/40',
        level: 'Yoga Master'
      },
      content: "Morning meditation session complete ✨ Starting the day with 20 minutes of mindfulness. How do you center yourself?",
      timestamp: '4 hours ago',
      likes: 18,
      comments: 12,
      achievement: 'Mindful Morning',
      stats: {
        duration: '20 min',
        type: 'Meditation'
      }
    },
    {
      id: 3,
      user: {
        name: 'Emma Wilson',
        avatar: '/api/placeholder/40/40',
        level: 'Nutrition Pro'
      },
      content: "Meal prep Sunday! 🥗 Prepared healthy meals for the entire week. Consistency is key to reaching our goals!",
      timestamp: '6 hours ago',
      likes: 31,
      comments: 15,
      achievement: 'Meal Prep Master',
      image: '/api/placeholder/300/200'
    }
  ]);

  const challenges = [
    {
      name: '30-Day Push-up Challenge',
      participants: 1247,
      daysLeft: 12,
      progress: 60
    },
    {
      name: 'Mindful March',
      participants: 892,
      daysLeft: 18,
      progress: 40
    }
  ];

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        user: {
          name: user?.name || 'You',
          avatar: '/api/placeholder/40/40',
          level: 'Wellness Warrior'
        },
        content: newPost,
        timestamp: 'Just now',
        likes: 0,
        comments: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Community</h1>
          <p className="text-gray-600 text-sm">Connect, inspire, achieve together!</p>
        </div>
        <Button size="sm" className="bg-wellness-sage hover:bg-wellness-sage/90">
          <Plus className="w-4 h-4 mr-1" />
          Post
        </Button>
      </div>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold flex items-center space-x-2">
            <Star className="w-5 h-5 text-wellness-sage" />
            <span>Active Challenges</span>
          </h3>
        </CardHeader>
        <CardContent className="space-y-3">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">{challenge.name}</p>
                <p className="text-xs text-gray-600">
                  {challenge.participants} participants • {challenge.daysLeft} days left
                </p>
              </div>
              <Button size="sm" variant="outline">
                Join
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Textarea
                placeholder="Share your wellness journey..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="border-gray-200 resize-none"
                rows={3}
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    📸 Photo
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    📊 Stats
                  </Button>
                </div>
                <Button 
                  size="sm" 
                  onClick={handleNewPost}
                  disabled={!newPost.trim()}
                  className="bg-wellness-ocean hover:bg-wellness-ocean/90"
                >
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="card-hover">
            <CardContent className="p-4">
              {/* Post Header */}
              <div className="flex items-start space-x-3 mb-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-sm">{post.user.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {post.user.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600">{post.timestamp}</p>
                  {post.achievement && (
                    <div className="flex items-center space-x-1 mt-1">
                      <Activity className="w-3 h-3 text-wellness-sage" />
                      <span className="text-xs text-wellness-sage font-medium">
                        {post.achievement}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Post Content */}
              <p className="text-sm mb-3">{post.content}</p>

              {/* Post Stats */}
              {post.stats && (
                <div className="flex space-x-4 mb-3 p-2 bg-gray-50 rounded-lg">
                  {Object.entries(post.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs font-medium capitalize">{key}</p>
                      <p className="text-xs text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Post Image */}
              {post.image && (
                <div className="mb-3">
                  <img 
                    src={post.image} 
                    alt="Post content" 
                    className="w-full rounded-lg object-cover h-48"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleLike(post.id)}
                    className="text-gray-600 hover:text-wellness-coral"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-xs">{post.likes}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-600 hover:text-wellness-ocean"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">{post.comments}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-600 hover:text-wellness-sage"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
