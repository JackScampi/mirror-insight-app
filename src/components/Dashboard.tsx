import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, Droplets, Activity, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const todayScore = 87;
  
  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-health-excellent";
    if (score >= 75) return "text-health-good";
    if (score >= 60) return "text-health-fair";
    return "text-health-poor";
  };

  const metrics = [
    { icon: Heart, label: "Heart Rate", value: "72 bpm", status: "excellent", trend: "stable" },
    { icon: Activity, label: "Blood Oxygen", value: "98%", status: "excellent", trend: "up" },
    { icon: Droplets, label: "Skin Hydration", value: "+3%", status: "good", trend: "up" },
    { icon: Activity, label: "Posture Score", value: "8.5/10", status: "good", trend: "stable" },
    { icon: Activity, label: "Stress Level", value: "Low", status: "excellent", trend: "down" },
    { icon: Moon, label: "Sleep Quality", value: "85%", status: "good", trend: "up" },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "↗";
      case "down": return "↙";
      default: return "→";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-health-excellent";
      case "good": return "text-health-good";
      case "fair": return "text-health-fair";
      default: return "text-health-poor";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Mind Mirror</h1>
        <p className="text-muted-foreground">Your wellness companion</p>
      </div>

      {/* Today Score */}
      <div className="px-6 mb-8">
        <Card 
          className="p-8 cursor-pointer transition-all duration-300 hover:shadow-lg"
          onClick={() => setShowDetails(!showDetails)}
        >
          <div className="text-center">
            <div className="text-6xl font-bold mb-2 tracking-tight">
              <span className={cn("", getScoreColor(todayScore))}>{todayScore}</span>
            </div>
            <div className="text-lg text-muted-foreground mb-4">Today's Score</div>
            <div className="flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Tap for breakdown</span>
              {showDetails ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Metrics */}
      {showDetails && (
        <div className="px-6 mb-8 space-y-4 animate-in slide-in-from-top-4 duration-300">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon size={20} className="text-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{metric.label}</div>
                      <div className={cn("text-lg font-semibold", getStatusColor(metric.status))}>
                        {metric.value}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-muted-foreground">
                    {getTrendIcon(metric.trend)}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Weekly Trends */}
      <div className="px-6 mb-24">
        <h2 className="text-xl font-semibold text-foreground mb-4">Weekly Trends</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-2">Heart Health</div>
            <div className="flex items-end space-x-1 h-16">
              {[65, 70, 72, 68, 74, 72, 75].map((value, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-t flex-1 opacity-80"
                  style={{ height: `${(value / 80) * 100}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1">↗ Improving</div>
          </Card>
          
          <Card className="p-4">
            <div className="text-sm text-muted-foreground mb-2">Skin Health</div>
            <div className="flex items-end space-x-1 h-16">
              {[80, 82, 85, 83, 87, 85, 88].map((value, index) => (
                <div
                  key={index}
                  className="bg-accent rounded-t flex-1 opacity-80"
                  style={{ height: `${(value / 100) * 100}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1">↗ Improving</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;