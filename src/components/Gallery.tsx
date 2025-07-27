import { useState } from "react";
import { Calendar, Filter, Share2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All" },
    { id: "skin", label: "Skin" },
    { id: "posture", label: "Posture" },
    { id: "fitness", label: "Fitness" },
  ];

  const galleryItems = [
    { id: 1, type: "skin", date: "Today", progress: "+5%", thumbnail: "bg-gradient-to-br from-primary/20 to-primary/10" },
    { id: 2, type: "posture", date: "3 days ago", progress: "+2 pts", thumbnail: "bg-gradient-to-br from-accent/20 to-accent/10" },
    { id: 3, type: "skin", date: "1 week ago", progress: "+3%", thumbnail: "bg-gradient-to-br from-primary/20 to-primary/10" },
    { id: 4, type: "fitness", date: "2 weeks ago", progress: "+8%", thumbnail: "bg-gradient-to-br from-health-good/20 to-health-good/10" },
    { id: 5, type: "skin", date: "3 weeks ago", progress: "+1%", thumbnail: "bg-gradient-to-br from-primary/20 to-primary/10" },
    { id: 6, type: "posture", date: "1 month ago", progress: "+4 pts", thumbnail: "bg-gradient-to-br from-accent/20 to-accent/10" },
  ];

  const achievements = [
    { icon: "🎯", title: "7-Day Streak", desc: "Daily check-ins" },
    { icon: "📈", title: "Skin Improved", desc: "+15% hydration" },
    { icon: "💪", title: "Posture Pro", desc: "Perfect alignment" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Progress Gallery</h1>
        <p className="text-muted-foreground">Your wellness journey</p>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">Recent Achievements</h2>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {achievements.map((achievement, index) => (
            <Card key={index} className="flex-shrink-0 p-4 min-w-[140px]">
              <div className="text-center">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-medium text-sm text-foreground">{achievement.title}</div>
                <div className="text-xs text-muted-foreground">{achievement.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.id}
              variant={filter === filterOption.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(filterOption.id)}
              className="flex-shrink-0"
            >
              {filterOption.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 mb-24">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className={`aspect-square ${item.thumbnail} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-3 right-3">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Share2 size={14} />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="text-white text-sm font-medium">{item.progress}</div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="capitalize text-sm font-medium text-foreground">{item.type}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Filter size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No items found for this filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;