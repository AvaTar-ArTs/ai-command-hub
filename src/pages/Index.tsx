import {
  Code2,
  Key,
  Container,
  Puzzle,
  Wand2,
  Bot,
  Database,
  FileCode,
  Layers,
  DollarSign,
  TrendingUp,
  Flame,
} from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { ApiKeyCard } from "@/components/dashboard/ApiKeyCard";
import { CategorySection } from "@/components/dashboard/CategorySection";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ResourceMonitor } from "@/components/dashboard/ResourceMonitor";
import { VerticalCard } from "@/components/revenue/VerticalCard";
import { TrendingStrategies } from "@/components/revenue/TrendingStrategies";
import { RevenueMetrics } from "@/components/revenue/RevenueMetrics";
import { StrategyMatrix } from "@/components/revenue/StrategyMatrix";
import {
  metrics,
  aiServices,
  apiKeyCategories,
  pythonCategories,
  systemLayers,
} from "@/data/ecosystemData";
import { revenueVerticals, revenueMetrics } from "@/data/revenueData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
  const hotVerticals = revenueVerticals.filter(v => v.trendStatus === "hot");
  const risingVerticals = revenueVerticals.filter(v => v.trendStatus === "rising");

  return (
    <div className="min-h-screen bg-background">
      {/* Background grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-30" />

      {/* Main content */}
      <div className="relative">
        <Header />

        <main className="container mx-auto max-w-7xl space-y-8 px-4 py-8">
          {/* Quick Actions */}
          <QuickActions />

          {/* Revenue Overview Banner */}
          <div className="relative overflow-hidden rounded-xl border border-success/30 bg-gradient-to-r from-success/5 via-card to-primary/5 p-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-success/5 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-5 w-5 text-hot" />
                <h2 className="font-mono text-xl font-bold">Revenue Intelligence Active</h2>
                </div>
                <p className="text-muted-foreground">
                  Tracking {revenueVerticals.length} verticals across SEO, GEO, XEO, VEO, DEO & more
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="font-mono text-3xl font-bold text-success">
                    ${(revenueMetrics.totalMonthlyRevenue / 1000).toFixed(1)}K
                  </p>
                  <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-3xl font-bold text-hot">
                    +{revenueMetrics.averageGrowth}%
                  </p>
                  <p className="text-xs text-muted-foreground">Avg Growth</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-3xl font-bold text-primary">
                    {revenueMetrics.hotVerticals}
                  </p>
                  <p className="text-xs text-muted-foreground">🔥 Hot Verticals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Monthly Revenue"
              value={`$${(revenueMetrics.totalMonthlyRevenue / 1000).toFixed(1)}K`}
              subtitle="Across all XEO verticals"
              icon={DollarSign}
              variant="success"
              trend={{ value: revenueMetrics.averageGrowth, isPositive: true }}
            />
            <MetricCard
              title="Python Scripts"
              value={metrics.pythonScripts.toLocaleString()}
              subtitle="Automation arsenal"
              icon={Code2}
              variant="primary"
            />
            <MetricCard
              title="API Keys"
              value={metrics.apiKeys}
              subtitle="Configured in ~/.env.d"
              icon={Key}
            />
            <MetricCard
              title="Active Verticals"
              value={revenueVerticals.length}
              subtitle={`${hotVerticals.length} hot, ${risingVerticals.length} rising`}
              icon={TrendingUp}
            />
          </div>

          {/* Revenue Verticals Section */}
          <Tabs defaultValue="hot" className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hot/20 text-hot">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Revenue Verticals
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    XEO ecosystem monetization
                  </p>
                </div>
              </div>

              <TabsList className="bg-muted/50">
                <TabsTrigger value="hot" className="text-xs">🔥 Hot</TabsTrigger>
                <TabsTrigger value="rising" className="text-xs">📈 Rising</TabsTrigger>
                <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="hot" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hotVerticals.map((vertical) => (
                  <VerticalCard key={vertical.id} vertical={vertical} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rising" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {risingVerticals.map((vertical) => (
                  <VerticalCard key={vertical.id} vertical={vertical} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {revenueVerticals.map((vertical) => (
                  <VerticalCard key={vertical.id} vertical={vertical} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Revenue Intelligence Row */}
          <div className="grid gap-6 lg:grid-cols-3">
            <TrendingStrategies />
            <RevenueMetrics />
            <StrategyMatrix />
          </div>

          {/* Two Column Layout - AI Services & API Keys */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Services & Keys */}
            <div className="space-y-8 lg:col-span-2">
              {/* AI Services */}
              <CategorySection
                title="Harbor AI Services"
                description="Docker-based AI infrastructure"
                icon={Bot}
                count={aiServices.length}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {aiServices.map((service) => (
                    <ServiceCard key={service.name} {...service} />
                  ))}
                </div>
              </CategorySection>

              {/* API Keys with Tabs */}
              <CategorySection
                title="API Key Management"
                description="61 keys across 15+ service categories"
                icon={Key}
              >
                <Tabs defaultValue={apiKeyCategories[0].category} className="w-full">
                  <TabsList className="mb-4 flex h-auto flex-wrap gap-1 bg-transparent p-0">
                    {apiKeyCategories.map((cat) => (
                      <TabsTrigger
                        key={cat.category}
                        value={cat.category}
                        className="rounded-md border border-transparent bg-muted px-3 py-1.5 text-xs data-[state=active]:border-primary/30 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                      >
                        {cat.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {apiKeyCategories.map((cat) => (
                    <TabsContent
                      key={cat.category}
                      value={cat.category}
                      className="mt-0 space-y-2"
                    >
                      {cat.keys.map((key) => (
                        <ApiKeyCard
                          key={key.name}
                          name={key.name}
                          category={cat.category}
                          isConfigured={key.isConfigured}
                          lastUsed={key.lastUsed}
                        />
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CategorySection>
            </div>

            {/* Right Column - Monitoring & Stats */}
            <div className="space-y-6">
              <ResourceMonitor />

              {/* System Layers */}
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    System Architecture
                  </h3>
                </div>
                <div className="space-y-2">
                  {systemLayers.map((layer, i) => (
                    <div
                      key={layer.name}
                      className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          L{i + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium">{layer.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                      <span className="flex h-2 w-2 rounded-full bg-success" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Python Script Categories */}
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="mb-4 flex items-center gap-2">
                  <FileCode className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-sm font-semibold uppercase tracking-wider">
                    Python Arsenal
                  </h3>
                </div>
                <div className="space-y-2">
                  {pythonCategories.slice(0, 6).map((cat) => (
                    <div
                      key={cat.name}
                      className="group flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <cat.icon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {cat.count}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-3 w-full rounded-md bg-muted/50 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  View all {pythonCategories.length} categories →
                </button>
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Docker Services"
              value={metrics.dockerServices}
              subtitle="Harbor AI Platform"
              icon={Container}
            />
            <MetricCard
              title="Automation Scripts"
              value={metrics.automationScripts}
              subtitle="Workflow automation"
              icon={Wand2}
            />
            <MetricCard
              title="Extensions"
              value={metrics.cursorExtensions + metrics.raycastExtensions}
              subtitle="Cursor + Raycast"
              icon={Puzzle}
            />
            <MetricCard
              title="Annual Projection"
              value={`$${(revenueMetrics.totalAnnualProjection / 1000000).toFixed(2)}M`}
              subtitle="XEO ecosystem revenue"
              icon={DollarSign}
              variant="success"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-muted-foreground">
                DEV_UNIVERSE Command Center • AvatarArts Enterprise Infrastructure
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                v2.0.0 • Revenue Intel Active • Last sync: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
