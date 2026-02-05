import { cn } from "@/lib/utils";
import { RevenueVertical, StrategyType } from "@/data/revenueData";
import { TrendingUp, TrendingDown, Flame, Zap, Minus, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface VerticalCardProps {
  vertical: RevenueVertical;
}

const trendConfig = {
  hot: { icon: Flame, color: "text-hot", bg: "bg-hot/10", label: "🔥 HOT" },
  rising: { icon: TrendingUp, color: "text-success", bg: "bg-success/10", label: "📈 RISING" },
  stable: { icon: Minus, color: "text-muted-foreground", bg: "bg-muted", label: "➡️ STABLE" },
  declining: { icon: TrendingDown, color: "text-destructive", bg: "bg-destructive/10", label: "📉 DECLINING" },
};

const strategyColors: Record<StrategyType, { bg: string; border: string; text: string }> = {
  white: { bg: "bg-success/10", border: "border-success/30", text: "text-success" },
  grey: { bg: "bg-warning/10", border: "border-warning/30", text: "text-warning" },
  black: { bg: "bg-destructive/10", border: "border-destructive/30", text: "text-destructive" },
};

const riskColors = {
  low: "text-success",
  medium: "text-warning",
  high: "text-destructive",
};

export function VerticalCard({ vertical }: VerticalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const trend = trendConfig[vertical.trendStatus];
  const TrendIcon = trend.icon;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all duration-300",
        vertical.trendStatus === "hot" && "border-hot/30 shadow-[0_0_20px_hsl(var(--hot)/0.1)]",
        vertical.trendStatus === "rising" && "border-success/30",
        vertical.trendStatus === "stable" && "border-border",
        "hover:border-primary/40"
      )}
    >
      {/* Hot indicator glow */}
      {vertical.trendStatus === "hot" && (
        <div className="absolute inset-0 bg-gradient-to-br from-hot/5 to-transparent" />
      )}

      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              "flex h-11 w-11 items-center justify-center rounded-lg",
              vertical.trendStatus === "hot" ? "bg-hot/20 text-hot" : "bg-primary/10 text-primary"
            )}>
              <vertical.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-lg font-bold">{vertical.name}</h3>
                <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase", trend.bg, trend.color)}>
                  {trend.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{vertical.fullName}</p>
            </div>
          </div>

          {/* Growth indicator */}
          <div className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1",
            vertical.growth >= 200 ? "bg-hot/10 text-hot" :
            vertical.growth >= 100 ? "bg-success/10 text-success" :
            vertical.growth >= 0 ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
          )}>
            {vertical.growth >= 200 && <Zap className="h-3 w-3" />}
            <TrendIcon className="h-3 w-3" />
            <span className="font-mono text-xs font-bold">
              {vertical.growth > 0 ? "+" : ""}{vertical.growth}%
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{vertical.description}</p>

        {/* Revenue & Market */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p>
            <p className="font-mono text-lg font-bold text-success">
              ${vertical.monthlyRevenue.toLocaleString()}
            </p>
          </div>
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground mb-1">Market Size</p>
            <p className="font-mono text-lg font-bold">{vertical.marketSize}</p>
          </div>
        </div>

        {/* Strategy indicators */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-muted-foreground">Active:</span>
          {vertical.activeStrategies.map((strategy) => (
            <span
              key={strategy}
              className={cn(
                "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase",
                strategyColors[strategy].bg,
                strategyColors[strategy].border,
                strategyColors[strategy].text
              )}
            >
              {strategy}
            </span>
          ))}
          <span className={cn("ml-auto text-xs font-medium", riskColors[vertical.riskLevel])}>
            {vertical.riskLevel.toUpperCase()} RISK
          </span>
        </div>

        {/* Progress bars */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Competition</span>
            <span className="font-mono">{vertical.competitionLevel}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-500",
                vertical.competitionLevel > 70 ? "bg-destructive" :
                vertical.competitionLevel > 40 ? "bg-warning" : "bg-success"
              )}
              style={{ width: `${vertical.competitionLevel}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Automation</span>
            <span className="font-mono">{vertical.automationLevel}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${vertical.automationLevel}%` }}
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 rounded-md bg-muted/50 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Hide strategies" : "View all strategies"}
          >
            {isExpanded ? "Hide Strategies ↑" : "View Strategies ↓"}
          </button>
          <button
            onClick={() => navigate(`/vertical/${vertical.id}`)}
            className="flex items-center justify-center gap-1 rounded-md bg-primary/10 px-3 py-2 text-xs text-primary transition-colors hover:bg-primary/20"
            aria-label={`View ${vertical.name} details`}
          >
            <span>Details</span>
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>

        {/* Expanded strategies */}
        {isExpanded && (
          <div className="mt-4 space-y-3 animate-fade-in">
            {(["white", "grey", "black"] as StrategyType[]).map((type) => (
              <div key={type} className={cn("rounded-md border p-3", strategyColors[type].border, strategyColors[type].bg)}>
                <h4 className={cn("text-xs font-bold uppercase mb-2", strategyColors[type].text)}>
                  {type === "white" ? "⚪ White Hat" : type === "grey" ? "🔘 Grey Hat" : "⚫ Black Hat"}
                </h4>
                <ul className="space-y-1">
                  {vertical.strategies[type].map((strategy, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className={cn("h-1 w-1 rounded-full", strategyColors[type].text.replace("text-", "bg-"))} />
                      {strategy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
