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
} from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { ApiKeyCard } from "@/components/dashboard/ApiKeyCard";
import { CategorySection } from "@/components/dashboard/CategorySection";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ResourceMonitor } from "@/components/dashboard/ResourceMonitor";
import {
  metrics,
  aiServices,
  apiKeyCategories,
  pythonCategories,
  systemLayers,
} from "@/data/ecosystemData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Index() {
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

          {/* Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Python Scripts"
              value={metrics.pythonScripts.toLocaleString()}
              subtitle="Across pythons/ directory"
              icon={Code2}
              variant="primary"
            />
            <MetricCard
              title="API Keys"
              value={metrics.apiKeys}
              subtitle="Configured in ~/.env.d"
              icon={Key}
              variant="success"
            />
            <MetricCard
              title="Docker Services"
              value={metrics.dockerServices}
              subtitle="Harbor AI Platform"
              icon={Container}
            />
            <MetricCard
              title="Extensions"
              value={metrics.cursorExtensions + metrics.raycastExtensions}
              subtitle="Cursor + Raycast"
              icon={Puzzle}
            />
          </div>

          {/* Two Column Layout */}
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
              title="Automation Scripts"
              value={metrics.automationScripts}
              subtitle="REORGANIZATION_TEST_BED"
              icon={Wand2}
            />
            <MetricCard
              title="IntelliHub Versions"
              value={4}
              subtitle="v1 → v4 evolution"
              icon={Database}
            />
            <MetricCard
              title="Regex Patterns"
              value={metrics.regexPatterns}
              subtitle="Clean file system"
              icon={Code2}
            />
            <MetricCard
              title="Raycast Extensions"
              value={metrics.raycastExtensions.toLocaleString()}
              subtitle="Productivity tools"
              icon={Puzzle}
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
                v1.0.0 • Last sync: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
