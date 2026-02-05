import { TrendingUp, Flame, Zap } from "lucide-react";
import { trendingStrategies, StrategyType } from "@/data/revenueData";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const strategyColors: Record<StrategyType, string> = {
  white: "text-success",
  grey: "text-warning",
  black: "text-destructive",
};

const strategyBarColors: Record<StrategyType, string> = {
  white: "bg-success",
  grey: "bg-warning",
  black: "bg-destructive",
};

const maxGrowth = Math.max(...trendingStrategies.map((s) => s.growth));

export function TrendingStrategies() {
  const navigate = useNavigate();

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
          <button
            key={strategy.name}
            onClick={() => navigate(`/vertical/${strategy.category}`)}
            className={cn(
              "group flex w-full items-center justify-between rounded-md px-3 py-2 transition-all text-left",
              "hover:bg-muted/50",
              i === 0 && "bg-hot/5 border border-hot/20"
            )}
            aria-label={`View ${strategy.name} strategy in ${strategy.category.toUpperCase()}`}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="font-mono text-xs text-muted-foreground w-4 flex-shrink-0">
                {i + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate">{strategy.name}</span>
                  {strategy.growth >= 200 && (
                    <Zap className="h-3 w-3 text-hot flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {strategy.category}
                  </span>
                  <span className={cn(
                    "text-[10px] font-bold uppercase",
                    strategyColors[strategy.type]
                  )}>
                    {strategy.type}
                  </span>
                  {/* Mini progress bar */}
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden max-w-16">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        strategy.growth >= 200 ? "bg-hot" : strategyBarColors[strategy.type]
                      )}
                      style={{ width: `${(strategy.growth / maxGrowth) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "flex items-center gap-1 font-mono text-xs font-bold flex-shrink-0 ml-2",
              strategy.growth >= 200 ? "text-hot" : "text-success"
            )}>
              <TrendingUp className="h-3 w-3" />
              +{strategy.growth}%
            </div>
          </button>
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
