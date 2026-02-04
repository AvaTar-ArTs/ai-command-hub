import { DollarSign, TrendingUp, Flame, Rocket, Bot, Shield, AlertTriangle } from "lucide-react";
import { revenueMetrics } from "@/data/revenueData";
import { cn } from "@/lib/utils";

interface MetricItemProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color?: string;
  suffix?: string;
}

function MetricItem({ label, value, icon: Icon, color = "text-primary", suffix }: MetricItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Icon className={cn("h-4 w-4", color)} />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="font-mono text-sm font-bold">
        {value}{suffix}
      </span>
    </div>
  );
}

export function RevenueMetrics() {
  return (
    <div className="rounded-lg border border-success/30 bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/20 text-success">
          <DollarSign className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
            Revenue Intelligence
          </h3>
          <p className="text-xs text-muted-foreground">Monetization metrics</p>
        </div>
      </div>

      {/* Primary metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-md bg-success/10 border border-success/20 p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p>
          <p className="font-mono text-xl font-bold text-success">
            ${revenueMetrics.totalMonthlyRevenue.toLocaleString()}
          </p>
        </div>
        <div className="rounded-md bg-primary/10 border border-primary/20 p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Annual Projection</p>
          <p className="font-mono text-xl font-bold text-primary">
            ${(revenueMetrics.totalAnnualProjection / 1000).toFixed(0)}K
          </p>
        </div>
      </div>

      {/* Trend metrics */}
      <div className="space-y-1 border-t border-border pt-3">
        <MetricItem
          label="Average Growth"
          value={`+${revenueMetrics.averageGrowth}`}
          icon={TrendingUp}
          color="text-success"
          suffix="%"
        />
        <MetricItem
          label="Hot Verticals"
          value={revenueMetrics.hotVerticals}
          icon={Flame}
          color="text-hot"
        />
        <MetricItem
          label="Rising Verticals"
          value={revenueMetrics.risingVerticals}
          icon={Rocket}
          color="text-accent"
        />
        <MetricItem
          label="Avg Automation"
          value={revenueMetrics.averageAutomation}
          icon={Bot}
          color="text-primary"
          suffix="%"
        />
      </div>

      {/* Strategy breakdown */}
      <div className="mt-4 border-t border-border pt-3">
        <p className="text-xs font-medium text-muted-foreground mb-2">Active Strategies</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-md bg-success/10 border border-success/20 p-2 text-center">
            <p className="font-mono text-lg font-bold text-success">{revenueMetrics.whiteHatActive}</p>
            <p className="text-[10px] text-muted-foreground">WHITE</p>
          </div>
          <div className="rounded-md bg-warning/10 border border-warning/20 p-2 text-center">
            <p className="font-mono text-lg font-bold text-warning">{revenueMetrics.greyHatActive}</p>
            <p className="text-[10px] text-muted-foreground">GREY</p>
          </div>
          <div className="rounded-md bg-destructive/10 border border-destructive/20 p-2 text-center">
            <p className="font-mono text-lg font-bold text-destructive">{revenueMetrics.blackHatActive}</p>
            <p className="text-[10px] text-muted-foreground">BLACK</p>
          </div>
        </div>
      </div>

      {/* Risk indicator */}
      <div className="mt-4 rounded-md bg-muted/50 p-3 flex items-center gap-2">
        <Shield className="h-4 w-4 text-success" />
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-success">Risk Profile:</span> Conservative white/grey mix
        </p>
      </div>
    </div>
  );
}
