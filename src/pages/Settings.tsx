import { Header } from "@/components/dashboard/Header";
import {
  ArrowLeft,
  Settings as SettingsIcon,
  Palette,
  Bell,
  Shield,
  Database,
  Keyboard,
  Monitor,
  Moon,
  Sun,
  Zap,
  Globe,
  RefreshCw,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface SettingItem {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const defaultSettings: SettingItem[] = [
  { id: "notifications", label: "Push Notifications", description: "Receive alerts for important events", enabled: true },
  { id: "sound", label: "Sound Effects", description: "Play sounds for actions", enabled: false },
  { id: "animations", label: "Animations", description: "Enable UI animations", enabled: true },
  { id: "autoRefresh", label: "Auto Refresh", description: "Automatically refresh data every 5 minutes", enabled: true },
  { id: "compactMode", label: "Compact Mode", description: "Use condensed UI layout", enabled: false },
  { id: "developerMode", label: "Developer Mode", description: "Show debug information", enabled: false },
];

const keyboardShortcuts = [
  { keys: ["⌘", "K"], action: "Open Command Palette" },
  { keys: ["⌘", "H"], action: "Harbor Services" },
  { keys: ["⌘", "S"], action: "Cloud Sync" },
  { keys: ["⌘", "L"], action: "Security Center" },
  { keys: ["⌘", "P"], action: "Python Scripts" },
  { keys: ["⌘", "A"], action: "Automations" },
  { keys: ["⌘", "/"], action: "Show Shortcuts" },
  { keys: ["Esc"], action: "Close Modal" },
];

type ThemeMode = "dark" | "light" | "system";

export default function Settings() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [settings, setSettings] = useState<SettingItem[]>(defaultSettings);
  const [accentColor, setAccentColor] = useState("cyan");

  const accentColors = [
    { name: "cyan", color: "#00FFFF", class: "bg-primary" },
    { name: "green", color: "#4ADE80", class: "bg-success" },
    { name: "orange", color: "#FF6B35", class: "bg-hot" },
    { name: "purple", color: "#A855F7", class: "bg-purple-500" },
    { name: "pink", color: "#EC4899", class: "bg-pink-500" },
    { name: "blue", color: "#3B82F6", class: "bg-blue-500" },
  ];

  const toggleSetting = (id: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
    toast.success("Setting updated");
  };

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    toast.success(`Theme changed to ${newTheme}`);
  };

  const handleAccentChange = (color: string) => {
    setAccentColor(color);
    toast.success(`Accent color changed to ${color}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <Header />

        <main className="container mx-auto max-w-4xl space-y-8 px-4 py-8">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Go back to dashboard"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Dashboard</span>
          </button>

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SettingsIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-mono text-2xl font-bold">Settings</h1>
              <p className="text-sm text-muted-foreground">Configure your DEV_UNIVERSE experience</p>
            </div>
          </div>

          {/* Appearance Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Appearance</h2>
            </div>

            {/* Theme Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Theme</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { mode: "dark" as ThemeMode, icon: Moon, label: "Dark" },
                  { mode: "light" as ThemeMode, icon: Sun, label: "Light" },
                  { mode: "system" as ThemeMode, icon: Monitor, label: "System" },
                ].map(({ mode, icon: Icon, label }) => (
                  <button
                    key={mode}
                    onClick={() => handleThemeChange(mode)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all",
                      theme === mode
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{label}</span>
                    {theme === mode && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color */}
            <div>
              <h3 className="text-sm font-medium mb-3">Accent Color</h3>
              <div className="flex gap-3">
                {accentColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleAccentChange(color.name)}
                    className={cn(
                      "h-10 w-10 rounded-full transition-all",
                      accentColor === color.name && "ring-2 ring-offset-2 ring-offset-background ring-white"
                    )}
                    style={{ backgroundColor: color.color }}
                    aria-label={`Set accent color to ${color.name}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Preferences</h2>
            </div>

            <div className="space-y-4">
              {settings.map((setting) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium">{setting.label}</p>
                    <p className="text-xs text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleSetting(setting.id)}
                    aria-label={`Toggle ${setting.label}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Keyboard Shortcuts Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Keyboard className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Keyboard Shortcuts</h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {keyboardShortcuts.map((shortcut) => (
                <div
                  key={shortcut.action}
                  className="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3"
                >
                  <span className="text-sm">{shortcut.action}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key, i) => (
                      <kbd
                        key={i}
                        className="inline-flex h-6 min-w-[24px] items-center justify-center rounded border border-border bg-background px-2 font-mono text-xs"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data & Privacy Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Data & Privacy</h2>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => toast.info("Exporting data...", { description: "Your data export will be ready shortly" })}
                className="flex w-full items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Export Data</p>
                    <p className="text-xs text-muted-foreground">Download all your data as JSON</p>
                  </div>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
              </button>

              <button
                onClick={() => toast.info("Syncing...", { description: "Synchronizing with cloud storage" })}
                className="flex w-full items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-sm font-medium">Sync Data</p>
                    <p className="text-xs text-muted-foreground">Last synced: 5 minutes ago</p>
                  </div>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
              </button>

              <button
                onClick={() => toast.warning("This action cannot be undone", { description: "Please confirm in the dialog" })}
                className="flex w-full items-center justify-between rounded-lg border border-destructive/30 p-4 transition-colors hover:bg-destructive/5"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-destructive" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-destructive">Clear All Data</p>
                    <p className="text-xs text-muted-foreground">Remove all local data and reset settings</p>
                  </div>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-destructive" />
              </button>
            </div>
          </section>

          {/* About Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">About</h2>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">DEV_UNIVERSE</strong> Command Center</p>
              <p>Version 2.0.0</p>
              <p>AvatarArts Enterprise Infrastructure</p>
              <p className="pt-2">
                Built with React, TypeScript, Tailwind CSS, and shadcn/ui
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-center text-xs text-muted-foreground">
              DEV_UNIVERSE Settings • Changes are saved automatically
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
