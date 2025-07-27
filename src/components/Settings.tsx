import { ChevronRight, Download, Shield, Bell, Users, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const settingsGroups = [
    {
      title: "Privacy & Data",
      items: [
        {
          icon: Shield,
          label: "Local Data Storage",
          description: "Store data on device only",
          type: "switch",
          value: true
        },
        {
          icon: Download,
          label: "Export Health Report",
          description: "PDF for medical consultation",
          type: "action"
        },
        {
          icon: Users,
          label: "Social Features",
          description: "Share progress with community",
          type: "switch",
          value: false
        }
      ]
    },
    {
      title: "Notifications",
      items: [
        {
          icon: Bell,
          label: "Health Alerts",
          description: "Important health notifications",
          type: "switch",
          value: true
        },
        {
          icon: Bell,
          label: "Weekly Recaps",
          description: "Summary of your progress",
          type: "switch",
          value: true
        },
        {
          icon: Bell,
          label: "Reminder Notifications",
          description: "Daily check-in reminders",
          type: "switch",
          value: false
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: "Help & FAQ",
          description: "Get help using Mind Mirror",
          type: "action"
        },
        {
          icon: Shield,
          label: "Privacy Policy",
          description: "How we protect your data",
          type: "action"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your wellness app</p>
      </div>

      {/* App Info */}
      <div className="px-6 mb-8">
        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl text-primary-foreground font-bold">MM</span>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Mind Mirror</h2>
          <p className="text-muted-foreground text-sm">Your wellness companion</p>
          <p className="text-xs text-muted-foreground mt-2">Version 1.0.0</p>
        </Card>
      </div>

      {/* Settings Groups */}
      <div className="px-6 mb-24 space-y-8">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
            <Card className="divide-y divide-border">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div key={itemIndex} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="p-2 rounded-lg bg-muted">
                          <Icon size={20} className="text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {item.type === "switch" && (
                          <Switch defaultChecked={item.value} />
                        )}
                        {item.type === "action" && (
                          <ChevronRight size={20} className="text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Card>
          </div>
        ))}
      </div>

      {/* Emergency Export */}
      <div className="px-6 mb-24">
        <Card className="p-6 border-destructive/20 bg-destructive/5">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Emergency Data Export</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Export all health data immediately for medical consultation
            </p>
            <Button variant="destructive" className="w-full">
              <Download className="mr-2" size={16} />
              Export All Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;