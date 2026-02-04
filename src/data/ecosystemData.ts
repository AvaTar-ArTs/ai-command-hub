import {
  Bot,
  Brain,
  Cpu,
  Database,
  Cloud,
  Key,
  FileCode,
  Folder,
  Terminal,
  Sparkles,
  Music,
  Image,
  Video,
  MessageSquare,
} from "lucide-react";

export const metrics = {
  pythonScripts: 4143,
  apiKeys: 61,
  dockerServices: 30,
  raycastExtensions: 1131,
  cursorExtensions: 500,
  automationScripts: 200,
  regexPatterns: 536,
};

export const aiServices = [
  {
    name: "vLLM",
    description: "High-performance inference engine for large language models",
    icon: Cpu,
    status: "online" as const,
    category: "LLM Inference",
    usage: 45,
  },
  {
    name: "Ollama",
    description: "Local model hosting and management",
    icon: Database,
    status: "online" as const,
    category: "LLM Inference",
    usage: 32,
  },
  {
    name: "Open WebUI",
    description: "Comprehensive chat interface for AI models",
    icon: MessageSquare,
    status: "online" as const,
    category: "AI Interface",
    usage: 78,
  },
  {
    name: "ComfyUI",
    description: "Visual AI workflows and image generation",
    icon: Image,
    status: "idle" as const,
    category: "Visual AI",
    usage: 0,
  },
  {
    name: "LibreChat",
    description: "Multi-platform chat interface",
    icon: MessageSquare,
    status: "online" as const,
    category: "AI Interface",
    usage: 23,
  },
  {
    name: "Dify",
    description: "AI application builder and orchestration",
    icon: Sparkles,
    status: "warning" as const,
    category: "AI Platform",
    usage: 89,
  },
  {
    name: "LiteLLM",
    description: "Unified API gateway for multiple providers",
    icon: Cloud,
    status: "online" as const,
    category: "API Gateway",
    usage: 56,
  },
  {
    name: "Langfuse",
    description: "LLM observability and monitoring",
    icon: Bot,
    status: "online" as const,
    category: "Monitoring",
    usage: 12,
  },
];

export const xcmdModels = [
  { name: "Gemini", status: "needs_setup" as const },
  { name: "Claude", status: "needs_setup" as const },
  { name: "Grok", status: "configured" as const },
  { name: "DeepSeek", status: "configured" as const },
  { name: "Qwen", status: "configured" as const },
];

export const apiKeyCategories = [
  {
    category: "LLM Platforms",
    keys: [
      { name: "ANTHROPIC_API_KEY", isConfigured: true, lastUsed: "2h ago" },
      { name: "XAI_API_KEY", isConfigured: true, lastUsed: "1h ago" },
      { name: "OPENAI_API_KEY", isConfigured: true, lastUsed: "3h ago" },
      { name: "DEEPSEEK_API_KEY", isConfigured: true, lastUsed: "30m ago" },
      { name: "GOOGLE_API_KEY", isConfigured: false },
      { name: "TOGETHER_API_KEY", isConfigured: true, lastUsed: "1d ago" },
    ],
  },
  {
    category: "Image Generation",
    keys: [
      { name: "LEONARDO_API_KEY", isConfigured: true, lastUsed: "5h ago" },
      { name: "STABILITY_API_KEY", isConfigured: true, lastUsed: "2d ago" },
      { name: "RUNWAY_API_KEY", isConfigured: true, lastUsed: "1w ago" },
    ],
  },
  {
    category: "Audio & Music",
    keys: [
      { name: "ELEVENLABS_API_KEY", isConfigured: true, lastUsed: "1d ago" },
      { name: "SUNO_API_KEY", isConfigured: true, lastUsed: "3d ago" },
      { name: "ASSEMBLYAI_API_KEY", isConfigured: true, lastUsed: "2d ago" },
    ],
  },
  {
    category: "Cloud Services",
    keys: [
      { name: "AWS_ACCESS_KEY", isConfigured: true, lastUsed: "1h ago" },
      { name: "AZURE_API_KEY", isConfigured: true, lastUsed: "6h ago" },
      { name: "SUPABASE_KEY", isConfigured: true, lastUsed: "10m ago" },
    ],
  },
  {
    category: "Vector Databases",
    keys: [
      { name: "CHROMADB_API_KEY", isConfigured: true, lastUsed: "4h ago" },
      { name: "ZEP_API_KEY", isConfigured: true, lastUsed: "1d ago" },
      { name: "QDRANT_API_KEY", isConfigured: true, lastUsed: "2d ago" },
    ],
  },
];

export const pythonCategories = [
  { name: "APIs", count: 198, icon: Cloud },
  { name: "Data Processing", count: 314, icon: Database },
  { name: "File Operations", count: 190, icon: Folder },
  { name: "Image Processing", count: 29, icon: Image },
  { name: "Audio Processing", count: 29, icon: Music },
  { name: "Video Processing", count: 396, icon: Video },
  { name: "Frameworks", count: 483, icon: FileCode },
  { name: "Tools", count: 764, icon: Terminal },
  { name: "Projects", count: 568, icon: Sparkles },
  { name: "YouTube", count: 102, icon: Video },
];

export const systemLayers = [
  { name: "Foundation", description: "ZSH, Git, Security", status: "healthy" },
  { name: "AI Services", description: "Harbor, x-cmd, Claude", status: "healthy" },
  { name: "Resource Mgmt", description: "Governor, Watchdog", status: "active" },
  { name: "Business Intel", description: "IntelliHub v4", status: "healthy" },
  { name: "File Org", description: "Clean, AutoTagger", status: "healthy" },
  { name: "Container", description: "Docker, Harbor", status: "healthy" },
];
