import { useState } from "react";
import { Camera, Scan, CheckCircle, AlertCircle, XCircle, RotateCcw, Calendar, Filter, Share2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CameraAnalysis = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasCapture, setHasCapture] = useState(false);
  const [filter, setFilter] = useState("all");
  
  const startScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setHasCapture(true);
    }, 3000);
  };

  const retakeScan = () => {
    setHasCapture(false);
    setIsScanning(false);
  };

  const analysisResults = [
    { label: "Skin Hydration", value: "Good", status: "good", detail: "72% moisture level" },
    { label: "Texture Quality", value: "Excellent", status: "good", detail: "Smooth, even texture" },
    { label: "Spot Detection", value: "2 areas", status: "warning", detail: "Minor blemishes detected" },
    { label: "Tone Evenness", value: "Very Good", status: "good", detail: "Consistent pigmentation" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-health-good";
      case "warning": return "text-health-fair";
      case "poor": return "text-health-poor";
      default: return "text-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return CheckCircle;
      case "warning": return AlertCircle;
      case "poor": return XCircle;
      default: return CheckCircle;
    }
  };

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
        <h1 className="text-2xl font-bold text-foreground mb-2">Analyze</h1>
        <p className="text-muted-foreground">Monitor your wellness progress</p>
      </div>

      <Tabs defaultValue="scan" className="flex-1">
        <TabsList className="grid w-full grid-cols-2 mx-6 mb-6">
          <TabsTrigger value="scan">Scan</TabsTrigger>
          <TabsTrigger value="gallery">Progress Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="scan" className="mt-0">
          {/* Camera Interface */}
          <div className="px-6 mb-8">
            <Card className="p-6">
              <div className="aspect-square bg-muted rounded-lg mb-6 relative overflow-hidden">
                {!hasCapture && !isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Camera size={48} className="text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Position your face in the frame</p>
                    </div>
                  </div>
                )}
                
                {isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
                    <div className="text-center">
                      <Scan size={48} className="text-accent mx-auto mb-4 animate-pulse" />
                      <p className="text-accent font-medium">Analyzing...</p>
                      <div className="w-24 h-1 bg-muted rounded-full mx-auto mt-4 overflow-hidden">
                        <div className="h-full bg-accent rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {hasCapture && (
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50"></div>
                )}
              </div>

              {!hasCapture && !isScanning && (
                <Button 
                  onClick={startScan}
                  className="w-full h-12 text-lg font-medium"
                  size="lg"
                >
                  <Camera className="mr-2" size={20} />
                  Start Analysis
                </Button>
              )}

              {isScanning && (
                <Button disabled className="w-full h-12 text-lg font-medium" size="lg">
                  <Scan className="mr-2 animate-spin" size={20} />
                  Scanning...
                </Button>
              )}

              {hasCapture && (
                <div className="space-y-3">
                  <Button 
                    onClick={retakeScan}
                    variant="outline" 
                    className="w-full h-12"
                    size="lg"
                  >
                    <RotateCcw className="mr-2" size={20} />
                    Retake Scan
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Analysis Results */}
          {hasCapture && (
            <div className="px-6 mb-24 space-y-4 animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-semibold text-foreground mb-4">Analysis Results</h2>
              
              {analysisResults.map((result, index) => {
                const IconComponent = getStatusIcon(result.status);
                return (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-foreground">{result.label}</div>
                      <IconComponent size={16} className={getStatusColor(result.status)} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`text-lg font-semibold ${getStatusColor(result.status)}`}>
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {result.detail}
                      </div>
                    </div>
                  </Card>
                );
              })}

              <Card className="p-4 mt-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Overall Skin Score</div>
                  <div className="text-3xl font-bold text-health-good mb-2">82</div>
                  <div className="text-sm text-muted-foreground">
                    Good condition with minor improvements needed
                  </div>
                </div>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="gallery" className="mt-0">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CameraAnalysis;