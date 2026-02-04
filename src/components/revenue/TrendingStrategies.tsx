import { TrendingUp, Flame, Zap } from "lucide-react";
import { trendingStrategies, StrategyType } from "@/data/revenueData";
import { cn } from "@/lib/utils";

const strategyColors: Record<StrategyType, string> = {
  white: "text-success",
  grey: "text-warning",
  black: "text-destructive",
};

export function TrendingStrategies() {
  return (
    <div className="rounded-lg border border-hot/30 bg-card p-5 shadow-[0_0_30px_hsl(var(--hot)/0.1)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hot/20 text-hot">
          <Flame className="h-4 w-4" />
        </div>
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
            Trending Strategies
          </h3>
          <p className="text-xs text-muted-foreground">Hot opportunities right now</p>
        </div>
      </div>

      <div className="space-y-2">
        {trendingStrategies.map((strategy, i) => (
          <div
            key={strategy.name}
            className={cn(
              "group flex items-center justify-between rounded-md px-3 py-2 transition-all",
            "hover:bg-muted/50",
            i === 0 && "bg-hot/5 border border-hot/20"
          )}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground w-4">
                {i + 1}.
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{strategy.name}</span>
                  {strategy.growth >= 200 && (
                    <Zap className="h-3 w-3 text-hot" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {strategy.category}
                  </span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase",
                    strategyColors[strategy.type]
                  )}>
                    {strategy.type}
                  </span>
                </div>
              </div>
            </div>

            <div className={cn(
              "flex items-center gap-1 font-mono text-xs font-bold",
              strategy.growth >= 200 ? "text-hot" : "text-success"
            )}>
              <TrendingUp className="h-3 w-3" />
              +{strategy.growth}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md bg-hot/10 border border-hot/20 p-3">
        <p className="text-xs text-hot">
          <span className="font-bold">🔥 HOT TIP:</span> GEO & AIO verticals showing explosive growth.
          AI search optimization is the new SEO.
        </p>
      </div>
    </div>
  );
}
