import { Terminal, Bell, Settings, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { CommandPalette } from "./CommandPalette";

export function Header() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    toast.success("Refreshing data...", { description: "All metrics updated" });
    setTimeout(() => setIsRefreshing(false), 1000);
  }, []);

  const handleNotifications = useCallback(() => {
    toast.info("Notifications", { description: "3 new alerts • 2 system updates" });
  }, []);

  const handleLogoClick = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo & Title */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            aria-label="Go to dashboard"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Terminal className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="font-mono text-lg font-bold tracking-tight">
                <span className="text-gradient">DEV</span>
                <span className="text-foreground">_UNIVERSE</span>
              </h1>
              <p className="text-xs text-muted-foreground">
                Enterprise Command Center • AvatarArts
              </p>
            </div>
          </button>

          {/* Status & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCommandOpen(true)}
              className="hidden sm:flex items-center gap-2 h-9 px-3 text-muted-foreground hover:text-foreground"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
              <span className="text-xs">Search...</span>
              <kbd className="ml-2 h-5 rounded border border-border bg-muted px-1.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </Button>

            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCommandOpen(true)}
              className="sm:hidden h-9 w-9"
              aria-label="Open search"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* System Status */}
            <div className="hidden items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-3 py-1.5 lg:flex">
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
              aria-label="Refresh data"
            >
              <RefreshCw
                className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9"
              onClick={handleNotifications}
              aria-label="View notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => navigate("/settings")}
              aria-label="Open settings"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
