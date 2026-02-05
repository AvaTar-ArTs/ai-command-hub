import { useCallback, useState } from "react";
import {
  Zap,
  Database,
  Cloud,
  Shield,
  FileCode,
  Bot,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { CommandPalette } from "./CommandPalette";

const actions = [
  {
    id: "ai-shell",
    icon: Bot,
    label: "AI Shell",
    shortcut: "⌘K",
    color: "text-primary",
    bg: "bg-primary/10 hover:bg-primary/20",
    opensCommandPalette: true,
  },
  {
    id: "harbor",
    icon: Database,
    label: "Harbor",
    shortcut: "⌘H",
    color: "text-accent",
    bg: "bg-accent/10 hover:bg-accent/20",
    action: () => toast.info("Harbor Dashboard", { description: "8 AI services running • 2 pending updates" }),
  },
  {
    id: "cloud-sync",
    icon: Cloud,
    label: "Cloud Sync",
    shortcut: "⌘S",
    color: "text-success",
    bg: "bg-success/10 hover:bg-success/20",
    action: () => toast.success("Cloud Sync Complete", { description: "All 4,143 scripts synchronized" }),
  },
  {
    id: "security",
    icon: Shield,
    label: "Security",
    shortcut: "⌘L",
    color: "text-warning",
    bg: "bg-warning/10 hover:bg-warning/20",
    action: () => toast.warning("Security Scan Initiated", { description: "Checking 61 API keys and 30 services..." }),
  },
  {
    id: "scripts",
    icon: FileCode,
    label: "Scripts",
    shortcut: "⌘P",
    color: "text-muted-foreground",
    bg: "bg-muted hover:bg-muted/80",
    action: () => toast.info("Script Library", { description: "4,143 Python scripts • 200 automations" }),
  },
  {
    id: "automations",
    icon: Zap,
    label: "Automations",
    shortcut: "⌘A",
    color: "text-destructive",
    bg: "bg-destructive/10 hover:bg-destructive/20",
    action: () => toast.info("Automation Hub", { description: "200 workflows • 89% automation rate" }),
  },
];

export function QuickActions() {
  const [commandOpen, setCommandOpen] = useState(false);

  const handleAction = useCallback((action: typeof actions[0]) => {
    if (action.opensCommandPalette) {
      setCommandOpen(true);
    } else if (action.action) {
      action.action();
    }
  }, []);

  return (
    <>
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Quick Actions
          </h3>
          <button
            onClick={() => setCommandOpen(true)}
            className="flex items-center gap-2 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
            aria-label="Open command palette"
          >
            <Search className="h-3 w-3" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-flex h-4 items-center rounded border border-border bg-background px-1 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleAction(action)}
              className={cn(
                "group flex flex-col items-center gap-2 rounded-lg p-3 transition-all duration-200",
                action.bg
              )}
              aria-label={`${action.label} - ${action.shortcut}`}
            >
              <action.icon className={cn("h-5 w-5", action.color)} />
              <span className="text-xs font-medium">{action.label}</span>
              <span className="font-mono text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {action.shortcut}
              </span>
            </button>
          ))}
        </div>
      </div>

      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
