import { cn } from "@/lib/utils";
import { revenueVerticals } from "@/data/revenueData";
import { Shield, AlertTriangle, Skull } from "lucide-react";

export function StrategyMatrix() {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
          Strategy Matrix
        </h3>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div className="flex items-center gap-1">
          <Shield className="h-3 w-3 text-success" />
          <span className="text-muted-foreground">White Hat</span>
        </div>
        <div className="flex items-center gap-1">
          <AlertTriangle className="h-3 w-3 text-warning" />
          <span className="text-muted-foreground">Grey Hat</span>
        </div>
        <div className="flex items-center gap-1">
          <Skull className="h-3 w-3 text-destructive" />
          <span className="text-muted-foreground">Black Hat</span>
        </div>
      </div>

      {/* Matrix */}
      <div className="space-y-2">
        {revenueVerticals.map((vertical) => (
          <div
            key={vertical.id}
            className="flex items-center gap-3 rounded-md bg-muted/30 p-2"
          >
            <span className="font-mono text-xs font-bold w-10 text-muted-foreground">
              {vertical.name}
            </span>
            
            <div className="flex-1 grid grid-cols-3 gap-1">
              {/* White */}
              <div
                className={cn(
                  "h-6 rounded-sm flex items-center justify-center transition-all",
                  vertical.activeStrategies.includes("white")
                    ? "bg-success text-success-foreground"
                    : "bg-muted/50"
                )}
              >
                {vertical.activeStrategies.includes("white") && (
                  <Shield className="h-3 w-3" />
                )}
              </div>
              
              {/* Grey */}
              <div
                className={cn(
                  "h-6 rounded-sm flex items-center justify-center transition-all",
                  vertical.activeStrategies.includes("grey")
                    ? "bg-warning text-warning-foreground"
                    : "bg-muted/50"
                )}
              >
                {vertical.activeStrategies.includes("grey") && (
                  <AlertTriangle className="h-3 w-3" />
                )}
              </div>
              
              {/* Black */}
              <div
                className={cn(
                  "h-6 rounded-sm flex items-center justify-center transition-all",
                  vertical.activeStrategies.includes("black")
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-muted/50"
                )}
              >
                {vertical.activeStrategies.includes("black") && (
                  <Skull className="h-3 w-3" />
                )}
              </div>
            </div>

            <span className={cn(
              "font-mono text-[10px] w-12 text-right",
              vertical.growth >= 200 ? "text-hot" :
              vertical.growth >= 100 ? "text-success" : "text-muted-foreground"
            )}>
              +{vertical.growth}%
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="font-mono text-lg font-bold text-success">
              {revenueVerticals.filter(v => v.activeStrategies.includes("white")).length}
            </p>
            <p className="text-[10px] text-muted-foreground">Active White</p>
          </div>
          <div>
            <p className="font-mono text-lg font-bold text-warning">
              {revenueVerticals.filter(v => v.activeStrategies.includes("grey")).length}
            </p>
            <p className="text-[10px] text-muted-foreground">Active Grey</p>
          </div>
          <div>
            <p className="font-mono text-lg font-bold text-destructive">
              {revenueVerticals.filter(v => v.activeStrategies.includes("black")).length}
            </p>
            <p className="text-[10px] text-muted-foreground">Active Black</p>
          </div>
        </div>
      </div>
    </div>
  );
}
