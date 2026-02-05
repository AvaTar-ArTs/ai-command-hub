import { DollarSign, TrendingUp, Flame, Rocket, Bot, Shield } from "lucide-react";
import { revenueMetrics, revenueVerticals } from "@/data/revenueData";
import { cn } from "@/lib/utils";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

interface MetricItemProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color?: string;
  suffix?: string;
}

// Generate sparkline data from verticals
const sparklineData = revenueVerticals
  .sort((a, b) => a.monthlyRevenue - b.monthlyRevenue)
  .map((v, i) => ({
    name: v.name,
    value: v.monthlyRevenue,
    growth: v.growth,
  }));

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

      {/* Mini Chart */}
      <div className="h-16 mb-4 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparklineData}>
            <defs>
              <linearGradient id="revenueGradientMini" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
              labelFormatter={(label) => `${label}`}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4ADE80"
              strokeWidth={2}
              fill="url(#revenueGradientMini)"
            />
          </AreaChart>
        </ResponsiveContainer>
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
