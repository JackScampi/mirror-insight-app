import { useState } from "react";
import { Users, Trophy, Heart, MessageCircle, Share2, Settings, Shield, Eye, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Social = () => {
  const [anonymousMode, setAnonymousMode] = useState(true);
  const [shareProgress, setShareProgress] = useState(false);

  const challenges = [
    { id: 1, title: "7-Day Hydration Challenge", participants: 156, progress: 85, timeLeft: "2 days left", reward: "🏆 Hydration Hero" },
    { id: 2, title: "Perfect Posture Week", participants: 89, progress: 60, timeLeft: "5 days left", reward: "🎯 Posture Pro" },
    { id: 3, title: "Skin Glow Up", participants: 234, progress: 40, timeLeft: "1 week left", reward: "✨ Glow Getter" },
    { id: 4, title: "Daily Check-in Streak", participants: 178, progress: 90, timeLeft: "Ongoing", reward: "📈 Consistency King" },
  ];

  const leaderboard = [
    { rank: 1, username: "WellnessWarrior23", score: 2890, streak: 14, badge: "🏆" },
    { rank: 2, username: "HealthyHabit", score: 2756, streak: 11, badge: "🥈" },
    { rank: 3, username: "MirrorMaster", score: 2643, streak: 9, badge: "🥉" },
    { rank: 4, username: "GlowUp2024", score: 2521, streak: 8, badge: "⭐" },
    { rank: 5, username: "You", score: 2287, streak: 6, badge: "🎯", isUser: true },
    { rank: 6, username: "FitnessFirst", score: 2198, streak: 5, badge: "💪" },
  ];

  const socialPosts = [
    {
      id: 1,
      username: "SkinCareQueen",
      achievement: "Completed 30-day hydration challenge",
      timeAgo: "2h ago",
      likes: 24,
      comments: 8,
      progress: "+12% skin hydration",
      liked: false
    },
    {
      id: 2,
      username: "PosturePro99",
      achievement: "Perfect posture score for 7 days",
      timeAgo: "5h ago",
      likes: 18,
      comments: 3,
      progress: "9.8/10 average score",
      liked: true
    },
    {
      id: 3,
      username: "WellnessJourney",
      achievement: "Reached 100-day check-in streak",
      timeAgo: "1d ago",
      likes: 67,
      comments: 15,
      progress: "Overall score: 94/100",
      liked: false
    },
  ];

  const toggleLike = (postId: number) => {
    // Like functionality would be implemented here
    console.log(`Toggled like for post ${postId}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Community</h1>
        <p className="text-muted-foreground">Connect and grow together</p>
      </div>

      <Tabs defaultValue="challenges" className="flex-1">
        <TabsList className="grid w-full grid-cols-4 mx-6 mb-6">
          <TabsTrigger value="challenges" className="text-xs">Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard" className="text-xs">Leaderboard</TabsTrigger>
          <TabsTrigger value="feed" className="text-xs">Community</TabsTrigger>
          <TabsTrigger value="privacy" className="text-xs">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="mt-0">
          <div className="px-6 mb-24">
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.participants} participants</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{challenge.timeLeft}</div>
                    </div>
                  </div>
                  <Progress value={challenge.progress} className="mb-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{challenge.progress}% complete</span>
                    <span className="text-sm">{challenge.reward}</span>
                  </div>
                  <Button size="sm" className="w-full mt-4">Join Challenge</Button>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-0">
          <div className="px-6 mb-24">
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <Card key={user.rank} className={`p-4 ${user.isUser ? 'border-primary' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-muted-foreground w-8">#{user.rank}</div>
                      <div className="text-2xl">{user.badge}</div>
                      <div>
                        <div className={`font-medium ${user.isUser ? 'text-primary' : 'text-foreground'}`}>
                          {user.username}
                        </div>
                        <div className="text-sm text-muted-foreground">{user.streak} day streak</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">{user.score.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="feed" className="mt-0">
          <div className="px-6 mb-24">
            <div className="space-y-4">
              {socialPosts.map((post) => (
                <Card key={post.id} className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-medium text-foreground">{post.username}</div>
                      <div className="text-sm text-muted-foreground">{post.timeAgo}</div>
                    </div>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Share2 size={16} />
                    </Button>
                  </div>
                  <p className="text-foreground mb-2">{post.achievement}</p>
                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-primary">{post.progress}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center space-x-1 ${post.liked ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      <Heart size={16} fill={post.liked ? 'currentColor' : 'none'} />
                      <span>{post.likes}</span>
                    </Button>
                    <Button size="sm" variant="ghost" className="flex items-center space-x-1 text-muted-foreground">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="mt-0">
          <div className="px-6 mb-24">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-primary" size={24} />
                  <h3 className="text-lg font-semibold text-foreground">Privacy Settings</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Eye size={20} className="text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">Anonymous Mode</div>
                        <div className="text-sm text-muted-foreground">Hide your real identity</div>
                      </div>
                    </div>
                    <Switch checked={anonymousMode} onCheckedChange={setAnonymousMode} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Share2 size={20} className="text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">Share Progress</div>
                        <div className="text-sm text-muted-foreground">Allow others to see your achievements</div>
                      </div>
                    </div>
                    <Switch checked={shareProgress} onCheckedChange={setShareProgress} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Lock size={20} className="text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">Private Profile</div>
                        <div className="text-sm text-muted-foreground">Only you can see your full data</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Data Sharing</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Your health data is never shared without explicit permission. All community interactions use anonymous identifiers.
                </p>
                <Button variant="outline" size="sm">View Privacy Policy</Button>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Social;