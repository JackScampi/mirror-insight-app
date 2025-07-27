import { useState } from "react";
import { Camera, RotateCcw, Check, AlertCircle, Scan } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CameraAnalysis = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasCapture, setHasCapture] = useState(false);
  
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
    { label: "Texture Quality", value: "Excellent", status: "excellent", detail: "Smooth, even texture" },
    { label: "Spot Detection", value: "2 areas", status: "fair", detail: "Minor blemishes detected" },
    { label: "Tone Evenness", value: "Very Good", status: "good", detail: "Consistent pigmentation" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-health-excellent";
      case "good": return "text-health-good";
      case "fair": return "text-health-fair";
      default: return "text-health-poor";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": 
      case "good": return <Check size={16} className="text-health-good" />;
      case "fair": return <AlertCircle size={16} className="text-health-fair" />;
      default: return <AlertCircle size={16} className="text-health-poor" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Skin Analysis</h1>
        <p className="text-muted-foreground">Detailed close-up analysis</p>
      </div>

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
          
          {analysisResults.map((result, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-foreground">{result.label}</div>
                {getStatusIcon(result.status)}
              </div>
              <div className="flex items-center justify-between">
                <div className={cn("text-lg font-semibold", getStatusColor(result.status))}>
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.detail}
                </div>
              </div>
            </Card>
          ))}

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
    </div>
  );
};

export default CameraAnalysis;