import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "online" | "offline" | "warning" | "idle";
  category: string;
  usage?: number;
}

export function ServiceCard({
  name,
  description,
  icon: Icon,
  status,
  category,
  usage,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-300 group-hover:from-primary/5 group-hover:to-transparent" />

      <div className="relative space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-mono text-sm font-semibold">{name}</h4>
              <p className="text-xs text-muted-foreground">{category}</p>
            </div>
          </div>
          <StatusBadge status={status} showPulse={status === "online"} />
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>

        {/* Usage bar */}
        {usage !== undefined && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Resource Usage</span>
              <span className="font-mono text-foreground">{usage}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  usage < 50 ? "bg-success" : usage < 80 ? "bg-warning" : "bg-destructive"
                )}
                style={{ width: `${usage}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
