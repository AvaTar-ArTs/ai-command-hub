import {
  Search,
  Sparkles,
  Globe,
  Video,
  Database,
  MessageSquare,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Share2,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type StrategyType = "white" | "grey" | "black";
export type TrendStatus = "hot" | "rising" | "stable" | "declining";

export interface RevenueVertical {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: LucideIcon;
  monthlyRevenue: number;
  growth: number;
  trendStatus: TrendStatus;
  strategies: {
    white: string[];
    grey: string[];
    black: string[];
  };
  activeStrategies: StrategyType[];
  riskLevel: "low" | "medium" | "high";
  marketSize: string;
  competitionLevel: number;
  automationLevel: number;
}

export const revenueVerticals: RevenueVertical[] = [
  {
    id: "seo",
    name: "SEO",
    fullName: "Search Engine Optimization",
    description: "Traditional search rankings & organic traffic monetization",
    icon: Search,
    monthlyRevenue: 12500,
    growth: 45,
    trendStatus: "stable",
    strategies: {
      white: ["Quality content creation", "Technical SEO audits", "Natural link building", "Schema markup"],
      grey: ["PBN networks", "Tiered link building", "Expired domains", "Parasite SEO"],
      black: ["Keyword stuffing", "Cloaking", "Doorway pages", "Link farms"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$82B",
    competitionLevel: 85,
    automationLevel: 72,
  },
  {
    id: "geo",
    name: "GEO",
    fullName: "Generative Engine Optimization",
    description: "AI search visibility - ChatGPT, Perplexity, Claude citations",
    icon: Brain,
    monthlyRevenue: 28750,
    growth: 247,
    trendStatus: "hot",
    strategies: {
      white: ["Authoritative content", "Citation building", "Entity optimization", "Structured data"],
      grey: ["AI training data injection", "Synthetic citations", "Authority stacking", "Cross-platform seeding"],
      black: ["Model manipulation", "Fake authority signals", "Citation spoofing", "AI hallucination exploitation"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$12B",
    competitionLevel: 35,
    automationLevel: 89,
  },
  {
    id: "xeo",
    name: "XEO",
    fullName: "Experience Optimization",
    description: "Cross-platform experience & AI automation consulting",
    icon: Sparkles,
    monthlyRevenue: 47500,
    growth: 312,
    trendStatus: "hot",
    strategies: {
      white: ["UX optimization", "Conversion consulting", "AI workflow design", "Platform integration"],
      grey: ["Competitor reverse engineering", "Dark patterns lite", "Psychological triggers", "Urgency manufacturing"],
      black: ["Deceptive interfaces", "Hidden fees", "Forced continuity", "Bait-and-switch"],
    },
    activeStrategies: ["white"],
    riskLevel: "low",
    marketSize: "$24B",
    competitionLevel: 42,
    automationLevel: 78,
  },
  {
    id: "veo",
    name: "VEO",
    fullName: "Video Engine Optimization",
    description: "YouTube, TikTok, Shorts algorithm optimization",
    icon: Video,
    monthlyRevenue: 18200,
    growth: 189,
    trendStatus: "rising",
    strategies: {
      white: ["Thumbnail optimization", "Retention engineering", "SEO titles/tags", "Community engagement"],
      grey: ["Engagement pods", "Comment manipulation", "View velocity tactics", "Trend hijacking"],
      black: ["Botted views", "Sub4sub networks", "Fake engagement", "Copyright abuse"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$28B",
    competitionLevel: 72,
    automationLevel: 85,
  },
  {
    id: "deo",
    name: "DEO",
    fullName: "Data Engine Optimization",
    description: "Data monetization, analytics arbitrage, insight selling",
    icon: Database,
    monthlyRevenue: 35800,
    growth: 156,
    trendStatus: "rising",
    strategies: {
      white: ["Data visualization services", "Analytics consulting", "BI dashboard creation", "Data cleaning"],
      grey: ["Data brokerage", "Scraping services", "Competitive intelligence", "Shadow profiling"],
      black: ["Unauthorized data sales", "Privacy violations", "Data theft", "Fake data generation"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "high",
    marketSize: "$45B",
    competitionLevel: 58,
    automationLevel: 92,
  },
  {
    id: "aeo",
    name: "AEO",
    fullName: "Answer Engine Optimization",
    description: "Featured snippets, voice search, knowledge panels",
    icon: MessageSquare,
    monthlyRevenue: 8900,
    growth: 78,
    trendStatus: "stable",
    strategies: {
      white: ["FAQ schema", "Q&A content", "Voice search optimization", "Knowledge base creation"],
      grey: ["Answer box hijacking", "Competitor snippet stealing", "Query manipulation", "SERP feature stacking"],
      black: ["Fake reviews for panels", "Knowledge panel fraud", "Answer manipulation", "AI-generated misinformation"],
    },
    activeStrategies: ["white"],
    riskLevel: "low",
    marketSize: "$8B",
    competitionLevel: 48,
    automationLevel: 65,
  },
  {
    id: "meo",
    name: "MEO",
    fullName: "Marketplace Engine Optimization",
    description: "Amazon, Etsy, eBay listing & ranking optimization",
    icon: ShoppingCart,
    monthlyRevenue: 22400,
    growth: 124,
    trendStatus: "rising",
    strategies: {
      white: ["Listing optimization", "Review management", "A+ content", "Keyword research"],
      grey: ["Review incentives", "Keyword stuffing", "Price manipulation", "Competitor sabotage lite"],
      black: ["Fake reviews", "Review bombing competitors", "Counterfeit products", "Account manipulation"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$35B",
    competitionLevel: 78,
    automationLevel: 81,
  },
  {
    id: "leo",
    name: "LEO",
    fullName: "Local Engine Optimization",
    description: "Google Business, Maps, local pack domination",
    icon: Globe,
    monthlyRevenue: 15600,
    growth: 67,
    trendStatus: "stable",
    strategies: {
      white: ["GBP optimization", "Review generation", "Local citations", "Geo-targeted content"],
      grey: ["Review gating", "Fake locations", "Citation manipulation", "Competitor negative SEO"],
      black: ["Fake business listings", "Review fraud", "Listing hijacking", "Location spoofing"],
    },
    activeStrategies: ["white"],
    riskLevel: "low",
    marketSize: "$18B",
    competitionLevel: 65,
    automationLevel: 70,
  },
  {
    id: "smo",
    name: "SMO",
    fullName: "Social Media Optimization",
    description: "Algorithm hacking across all social platforms",
    icon: Share2,
    monthlyRevenue: 19800,
    growth: 203,
    trendStatus: "hot",
    strategies: {
      white: ["Content calendar", "Engagement optimization", "Influencer partnerships", "Community building"],
      grey: ["Engagement pods", "Follow/unfollow", "Trend hijacking", "Bot amplification lite"],
      black: ["Fake followers", "Bot farms", "Account impersonation", "Coordinated inauthentic behavior"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$42B",
    competitionLevel: 82,
    automationLevel: 88,
  },
  {
    id: "cro",
    name: "CRO",
    fullName: "Conversion Rate Optimization",
    description: "Landing page, funnel, and checkout optimization",
    icon: Target,
    monthlyRevenue: 31200,
    growth: 94,
    trendStatus: "stable",
    strategies: {
      white: ["A/B testing", "Heatmap analysis", "User research", "Form optimization"],
      grey: ["Urgency tactics", "Social proof manipulation", "Price anchoring", "Cognitive bias exploitation"],
      black: ["Deceptive checkout", "Hidden subscriptions", "Fake scarcity", "Dark patterns"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "medium",
    marketSize: "$15B",
    competitionLevel: 55,
    automationLevel: 75,
  },
  {
    id: "aio",
    name: "AIO",
    fullName: "AI Output Optimization",
    description: "Training AI models to recommend your products/services",
    icon: Zap,
    monthlyRevenue: 42000,
    growth: 485,
    trendStatus: "hot",
    strategies: {
      white: ["Authority building", "Citation network", "Training data contribution", "Model feedback loops"],
      grey: ["Synthetic endorsements", "AI influencer networks", "Cross-model seeding", "Prompt injection lite"],
      black: ["Model poisoning", "Jailbreak exploitation", "Competitor suppression", "Fake training data"],
    },
    activeStrategies: ["white", "grey"],
    riskLevel: "high",
    marketSize: "$8B",
    competitionLevel: 22,
    automationLevel: 95,
  },
];

export const trendingStrategies = [
  { name: "GEO Citation Building", growth: 312, category: "geo", type: "white" as StrategyType },
  { name: "AI Output Seeding", growth: 485, category: "aio", type: "grey" as StrategyType },
  { name: "Shorts Algorithm Hacking", growth: 267, category: "veo", type: "grey" as StrategyType },
  { name: "Perplexity Optimization", growth: 234, category: "geo", type: "white" as StrategyType },
  { name: "TikTok Shop Arbitrage", growth: 198, category: "meo", type: "grey" as StrategyType },
  { name: "Claude Citation Network", growth: 189, category: "aio", type: "white" as StrategyType },
  { name: "Reddit Authority Building", growth: 156, category: "smo", type: "white" as StrategyType },
  { name: "Voice Search Domination", growth: 134, category: "aeo", type: "white" as StrategyType },
];

export const revenueMetrics = {
  totalMonthlyRevenue: revenueVerticals.reduce((sum, v) => sum + v.monthlyRevenue, 0),
  totalAnnualProjection: revenueVerticals.reduce((sum, v) => sum + v.monthlyRevenue, 0) * 12,
  averageGrowth: Math.round(revenueVerticals.reduce((sum, v) => sum + v.growth, 0) / revenueVerticals.length),
  hotVerticals: revenueVerticals.filter(v => v.trendStatus === "hot").length,
  risingVerticals: revenueVerticals.filter(v => v.trendStatus === "rising").length,
  activeStrategies: revenueVerticals.reduce((sum, v) => sum + v.activeStrategies.length, 0),
  whiteHatActive: revenueVerticals.filter(v => v.activeStrategies.includes("white")).length,
  greyHatActive: revenueVerticals.filter(v => v.activeStrategies.includes("grey")).length,
  blackHatActive: revenueVerticals.filter(v => v.activeStrategies.includes("black")).length,
  averageAutomation: Math.round(revenueVerticals.reduce((sum, v) => sum + v.automationLevel, 0) / revenueVerticals.length),
};
