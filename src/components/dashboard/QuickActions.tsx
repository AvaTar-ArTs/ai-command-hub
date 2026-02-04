import {
  Zap,
  Database,
  Cloud,
  Shield,
  FileCode,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  {
    icon: Bot,
    label: "AI Shell",
    shortcut: "⌘K",
    color: "text-primary",
    bg: "bg-primary/10 hover:bg-primary/20",
  },
  {
    icon: Database,
    label: "Harbor",
    shortcut: "⌘H",
    color: "text-accent",
    bg: "bg-accent/10 hover:bg-accent/20",
  },
  {
    icon: Cloud,
    label: "Cloud Sync",
    shortcut: "⌘S",
    color: "text-success",
    bg: "bg-success/10 hover:bg-success/20",
  },
  {
    icon: Shield,
    label: "Security",
    shortcut: "⌘L",
    color: "text-warning",
    bg: "bg-warning/10 hover:bg-warning/20",
  },
  {
    icon: FileCode,
    label: "Scripts",
    shortcut: "⌘P",
    color: "text-muted-foreground",
    bg: "bg-muted hover:bg-muted/80",
  },
  {
    icon: Zap,
    label: "Automations",
    shortcut: "⌘A",
    color: "text-destructive",
    bg: "bg-destructive/10 hover:bg-destructive/20",
  },
];

export function QuickActions() {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Quick Actions
      </h3>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {actions.map((action) => (
          <button
            key={action.label}
            className={cn(
              "group flex flex-col items-center gap-2 rounded-lg p-3 transition-all duration-200",
              action.bg
            )}
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
  );
}
