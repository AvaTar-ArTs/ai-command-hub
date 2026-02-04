import { Terminal, Bell, Settings, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Terminal className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-mono text-lg font-bold tracking-tight">
              <span className="text-gradient">DEV</span>
              <span className="text-foreground">_UNIVERSE</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Enterprise Command Center • AvatarArts
            </p>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="flex items-center gap-4">
          {/* System Status */}
          <div className="hidden items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-3 py-1.5 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-xs font-medium text-success">All Systems Operational</span>
          </div>

          {/* Actions */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            className="h-9 w-9"
          >
            <RefreshCw
              className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </Button>
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
