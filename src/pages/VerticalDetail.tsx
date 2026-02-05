import { useParams, useNavigate } from "react-router-dom";
import { revenueVerticals, StrategyType } from "@/data/revenueData";
import { Header } from "@/components/dashboard/Header";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Flame,
  Minus,
  Zap,
  Target,
  Shield,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const trendConfig = {
  hot: { icon: Flame, color: "text-hot", bg: "bg-hot/10", label: "HOT" },
  rising: { icon: TrendingUp, color: "text-success", bg: "bg-success/10", label: "RISING" },
  stable: { icon: Minus, color: "text-muted-foreground", bg: "bg-muted", label: "STABLE" },
  declining: { icon: TrendingDown, color: "text-destructive", bg: "bg-destructive/10", label: "DECLINING" },
};

const strategyColors: Record<StrategyType, { bg: string; border: string; text: string; fill: string }> = {
  white: { bg: "bg-success/10", border: "border-success/30", text: "text-success", fill: "#4ADE80" },
  grey: { bg: "bg-warning/10", border: "border-warning/30", text: "text-warning", fill: "#FBBF24" },
  black: { bg: "bg-destructive/10", border: "border-destructive/30", text: "text-destructive", fill: "#FF5757" },
};

// Generate mock historical data
const generateHistoricalData = (baseRevenue: number, growth: number) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = [];
  let revenue = baseRevenue * 0.4;

  for (let i = 0; i < 12; i++) {
    const growthFactor = 1 + (growth / 100 / 12) * (1 + Math.random() * 0.5);
    revenue = Math.min(revenue * growthFactor, baseRevenue * 1.2);
    data.push({
      month: months[i],
      revenue: Math.round(revenue),
      projected: Math.round(revenue * (1 + growth / 100 / 12)),
    });
  }
  return data;
};

export default function VerticalDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const vertical = revenueVerticals.find((v) => v.id === id);

  if (!vertical) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Vertical Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested vertical does not exist.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const trend = trendConfig[vertical.trendStatus];
  const TrendIcon = trend.icon;
  const historicalData = generateHistoricalData(vertical.monthlyRevenue, vertical.growth);

  const radarData = [
    { subject: "Growth", value: Math.min(vertical.growth / 5, 100), fullMark: 100 },
    { subject: "Automation", value: vertical.automationLevel, fullMark: 100 },
    { subject: "Competition", value: 100 - vertical.competitionLevel, fullMark: 100 },
    { subject: "Risk (inv)", value: vertical.riskLevel === "low" ? 90 : vertical.riskLevel === "medium" ? 50 : 20, fullMark: 100 },
    { subject: "Market", value: parseInt(vertical.marketSize.replace(/[^0-9]/g, "")) * 2, fullMark: 100 },
  ];

  const annualRevenue = vertical.monthlyRevenue * 12;
  const projectedAnnual = annualRevenue * (1 + vertical.growth / 100);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <Header />

        <main className="container mx-auto max-w-7xl space-y-8 px-4 py-8">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Go back to dashboard"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Dashboard</span>
          </button>

          {/* Hero Section */}
          <div
            className={cn(
              "relative overflow-hidden rounded-xl border p-8",
              vertical.trendStatus === "hot" && "border-hot/30 bg-gradient-to-br from-hot/5 via-card to-primary/5",
              vertical.trendStatus === "rising" && "border-success/30 bg-gradient-to-br from-success/5 via-card to-primary/5",
              vertical.trendStatus === "stable" && "border-border bg-card",
              vertical.trendStatus === "declining" && "border-destructive/30 bg-gradient-to-br from-destructive/5 via-card to-muted"
            )}
          >
            {vertical.trendStatus === "hot" && (
              <div className="absolute top-0 right-0 w-96 h-96 bg-hot/10 rounded-full blur-3xl" />
            )}

            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-xl",
                    vertical.trendStatus === "hot" ? "bg-hot/20 text-hot" : "bg-primary/10 text-primary"
                  )}
                >
                  <vertical.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-mono text-3xl font-bold">{vertical.name}</h1>
                    <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase", trend.bg, trend.color)}>
                      {trend.label}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">{vertical.fullName}</p>
                  <p className="text-sm text-muted-foreground max-w-xl">{vertical.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-muted/50 p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="h-4 w-4 text-success" />
                    <span className="text-xs text-muted-foreground">Monthly</span>
                  </div>
                  <p className="font-mono text-2xl font-bold text-success">
                    ${vertical.monthlyRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-hot" />
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                  <p className="font-mono text-2xl font-bold text-hot">+{vertical.growth}%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Market</span>
                  </div>
                  <p className="font-mono text-2xl font-bold">{vertical.marketSize}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Revenue Trend Chart */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  Revenue Trend
                </h2>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={historicalData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00FFFF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00FFFF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "1px solid #334155",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#00FFFF"
                      strokeWidth={2}
                      fill="url(#revenueGradient)"
                    />
                    <Line
                      type="monotone"
                      dataKey="projected"
                      stroke="#4ADE80"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-8 bg-primary rounded" />
                  <span className="text-muted-foreground">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-8 bg-success rounded border-dashed" style={{ borderTop: "2px dashed #4ADE80" }} />
                  <span className="text-muted-foreground">Projected</span>
                </div>
              </div>
            </div>

            {/* Performance Radar */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="h-5 w-5 text-primary" />
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                  Performance Matrix
                </h2>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={12} />
                    <PolarRadiusAxis stroke="#334155" />
                    <Radar
                      name="Performance"
                      dataKey="value"
                      stroke="#00FFFF"
                      fill="#00FFFF"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Competition</span>
              </div>
              <p className="font-mono text-2xl font-bold mb-2">{vertical.competitionLevel}%</p>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full",
                    vertical.competitionLevel > 70 ? "bg-destructive" :
                    vertical.competitionLevel > 40 ? "bg-warning" : "bg-success"
                  )}
                  style={{ width: `${vertical.competitionLevel}%` }}
                />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Automation</span>
              </div>
              <p className="font-mono text-2xl font-bold mb-2">{vertical.automationLevel}%</p>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${vertical.automationLevel}%` }}
                />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Risk Level</span>
              </div>
              <p className={cn(
                "font-mono text-2xl font-bold uppercase",
                vertical.riskLevel === "low" && "text-success",
                vertical.riskLevel === "medium" && "text-warning",
                vertical.riskLevel === "high" && "text-destructive"
              )}>
                {vertical.riskLevel}
              </p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-2 flex-1 rounded",
                      i <= (vertical.riskLevel === "low" ? 1 : vertical.riskLevel === "medium" ? 2 : 3)
                        ? vertical.riskLevel === "low" ? "bg-success" : vertical.riskLevel === "medium" ? "bg-warning" : "bg-destructive"
                        : "bg-muted"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-4 w-4 text-success" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Annual Projection</span>
              </div>
              <p className="font-mono text-2xl font-bold text-success">
                ${(projectedAnnual / 1000).toFixed(0)}K
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                +${((projectedAnnual - annualRevenue) / 1000).toFixed(0)}K from current
              </p>
            </div>
          </div>

          {/* Strategies Section */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                Strategy Analysis
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {(["white", "grey", "black"] as StrategyType[]).map((type) => {
                const isActive = vertical.activeStrategies.includes(type);
                return (
                  <div
                    key={type}
                    className={cn(
                      "rounded-lg border p-5 transition-all",
                      isActive ? strategyColors[type].border : "border-border opacity-60",
                      isActive && strategyColors[type].bg
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={cn("text-sm font-bold uppercase", isActive ? strategyColors[type].text : "text-muted-foreground")}>
                        {type === "white" ? "White Hat" : type === "grey" ? "Grey Hat" : "Black Hat"}
                      </h3>
                      {isActive ? (
                        <CheckCircle2 className={cn("h-5 w-5", strategyColors[type].text)} />
                      ) : (
                        <XCircle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <ul className="space-y-2">
                      {vertical.strategies[type].map((strategy, i) => (
                        <li
                          key={i}
                          className={cn(
                            "flex items-start gap-2 text-sm",
                            isActive ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0",
                              isActive ? strategyColors[type].text.replace("text-", "bg-") : "bg-muted-foreground"
                            )}
                          />
                          {strategy}
                        </li>
                      ))}
                    </ul>
                    {type === "black" && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-destructive">
                        <AlertTriangle className="h-3 w-3" />
                        <span>High risk - Use with caution</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Footer */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Active Strategies</p>
              <p className="font-mono text-xl font-bold">{vertical.activeStrategies.length}</p>
            </div>
            <div className="rounded-lg bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Total Strategies</p>
              <p className="font-mono text-xl font-bold">
                {Object.values(vertical.strategies).flat().length}
              </p>
            </div>
            <div className="rounded-lg bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Market Position</p>
              <p className="font-mono text-xl font-bold">
                #{revenueVerticals.findIndex((v) => v.id === vertical.id) + 1}
              </p>
            </div>
            <div className="rounded-lg bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Revenue Rank</p>
              <p className="font-mono text-xl font-bold">
                #{[...revenueVerticals].sort((a, b) => b.monthlyRevenue - a.monthlyRevenue).findIndex((v) => v.id === vertical.id) + 1}
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-muted-foreground">
                DEV_UNIVERSE Command Center • {vertical.name} Analytics
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
