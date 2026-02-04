import { cn } from "@/lib/utils";

type StatusType = "online" | "offline" | "warning" | "idle";

interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  showPulse?: boolean;
}

const statusConfig: Record<StatusType, { color: string; bg: string; label: string }> = {
  online: {
    color: "bg-success",
    bg: "bg-success/10 text-success",
    label: "Online",
  },
  offline: {
    color: "bg-destructive",
    bg: "bg-destructive/10 text-destructive",
    label: "Offline",
  },
  warning: {
    color: "bg-warning",
    bg: "bg-warning/10 text-warning",
    label: "Warning",
  },
  idle: {
    color: "bg-muted-foreground",
    bg: "bg-muted text-muted-foreground",
    label: "Idle",
  },
};

export function StatusBadge({ status, label, showPulse = true }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium",
        config.bg
      )}
    >
      <span className="relative flex h-2 w-2">
        {showPulse && status === "online" && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              config.color
            )}
          />
        )}
        <span
          className={cn("relative inline-flex h-2 w-2 rounded-full", config.color)}
        />
      </span>
      {label || config.label}
    </div>
  );
}
