import { useEffect, useState, useCallback } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Zap,
  Database,
  Cloud,
  Shield,
  FileCode,
  Bot,
  Search,
  Settings,
  BarChart3,
  Layers,
  Key,
  TrendingUp,
  Sparkles,
  Brain,
  Video,
  Globe,
  Target,
  ShoppingCart,
  MessageSquare,
  Share2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { revenueVerticals } from "@/data/revenueData";
import { toast } from "sonner";

const quickActions = [
  {
    id: "ai-shell",
    icon: Bot,
    label: "AI Shell",
    shortcut: "⌘K",
    description: "Open AI assistant",
    action: () => toast.success("AI Shell activated", { description: "Claude is ready to assist" }),
  },
  {
    id: "harbor",
    icon: Database,
    label: "Harbor Services",
    shortcut: "⌘H",
    description: "Manage Docker AI services",
    action: () => toast.info("Harbor Dashboard", { description: "8 services running" }),
  },
  {
    id: "cloud-sync",
    icon: Cloud,
    label: "Cloud Sync",
    shortcut: "⌘S",
    description: "Sync with cloud storage",
    action: () => toast.success("Syncing...", { description: "All systems synchronized" }),
  },
  {
    id: "security",
    icon: Shield,
    label: "Security Center",
    shortcut: "⌘L",
    description: "Security operations",
    action: () => toast.warning("Security Scan", { description: "Running vulnerability check..." }),
  },
  {
    id: "scripts",
    icon: FileCode,
    label: "Python Scripts",
    shortcut: "⌘P",
    description: "Browse 4,143 scripts",
    action: () => toast.info("Script Library", { description: "4,143 scripts available" }),
  },
  {
    id: "automations",
    icon: Zap,
    label: "Automations",
    shortcut: "⌘A",
    description: "Manage workflows",
    action: () => toast.info("Automation Hub", { description: "200 workflows configured" }),
  },
];

const navigationItems = [
  { id: "home", icon: BarChart3, label: "Dashboard", path: "/" },
  { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
];

const verticalIcons: Record<string, typeof Search> = {
  seo: Search,
  geo: Brain,
  xeo: Sparkles,
  veo: Video,
  deo: Database,
  aeo: MessageSquare,
  meo: ShoppingCart,
  leo: Globe,
  smo: Share2,
  cro: Target,
  aio: Zap,
};

interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CommandPalette({ open: controlledOpen, onOpenChange }: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const navigate = useNavigate();

  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  // Global keyboard shortcut handler
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Open command palette with Cmd+K or Ctrl+K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
        return;
      }

      // Quick action shortcuts when palette is closed
      if (!open && (e.metaKey || e.ctrlKey)) {
        const action = quickActions.find((a) => {
          const shortcutKey = a.shortcut.replace("⌘", "").toLowerCase();
          return e.key.toLowerCase() === shortcutKey;
        });

        if (action && action.id !== "ai-shell") {
          e.preventDefault();
          action.action();
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const handleAction = useCallback((action: () => void) => {
    setOpen(false);
    setTimeout(action, 100);
  }, [setOpen]);

  const handleNavigation = useCallback((path: string) => {
    setOpen(false);
    navigate(path);
  }, [setOpen, navigate]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Quick Actions">
          {quickActions.map((action) => (
            <CommandItem
              key={action.id}
              onSelect={() => handleAction(action.action)}
              className="flex items-center gap-3"
            >
              <action.icon className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                {action.shortcut}
              </kbd>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Revenue Verticals">
          {revenueVerticals.slice(0, 6).map((vertical) => {
            const Icon = verticalIcons[vertical.id] || TrendingUp;
            return (
              <CommandItem
                key={vertical.id}
                onSelect={() => handleNavigation(`/vertical/${vertical.id}`)}
                className="flex items-center gap-3"
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{vertical.name}</p>
                  <p className="text-xs text-muted-foreground">{vertical.fullName}</p>
                </div>
                <span className="font-mono text-xs text-success">
                  +{vertical.growth}%
                </span>
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.id}
              onSelect={() => handleNavigation(item.path)}
              className="flex items-center gap-3"
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
