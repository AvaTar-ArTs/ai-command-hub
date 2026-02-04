import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
}

const variantStyles = {
  default: "border-border",
  primary: "border-primary/30 glow-border",
  success: "border-success/30",
  warning: "border-warning/30",
};

const iconVariantStyles = {
  default: "text-muted-foreground bg-muted",
  primary: "text-primary bg-primary/10",
  success: "text-success bg-success/10",
  warning: "text-warning bg-warning/10",
};

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "metric-card relative overflow-hidden rounded-lg border bg-card p-5",
        variantStyles[variant]
      )}
    >
      {/* Background glow effect */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      )}

      <div className="relative flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="font-mono text-3xl font-bold tracking-tight">
              {value}
            </h3>
            {trend && (
              <span
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            iconVariantStyles[variant]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
