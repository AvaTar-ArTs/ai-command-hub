import {
  Brain,
  Sparkles,
  Code,
  Zap,
  Target,
  Shield,
  Rocket,
  Bot,
  Database,
  Globe,
  TrendingUp,
  Cpu,
  MessageSquare,
  FileCode,
  Layers,
  Search,
  type LucideIcon,
} from "lucide-react";

export type LessonStatus = "locked" | "available" | "in_progress" | "completed";
export type DifficultyLevel = "beginner" | "intermediate" | "advanced" | "expert";
export type ContentType = "video" | "article" | "interactive" | "project";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  contentType: ContentType;
  status: LessonStatus;
  content?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  icon: LucideIcon;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  difficulty: DifficultyLevel;
  duration: string;
  lessonsCount: number;
  modules: Module[];
  tags: string[];
  featured?: boolean;
  new?: boolean;
}

export const courses: Course[] = [
  {
    id: "zero-to-ai",
    title: "Zero to AI",
    subtitle: "Master Generative AI from Scratch",
    description: "A comprehensive introduction to LLMs and Generative AI. Learn the fundamentals, prompt engineering, and practical applications.",
    icon: Brain,
    color: "primary",
    difficulty: "beginner",
    duration: "8 hours",
    lessonsCount: 16,
    featured: true,
    tags: ["LLM", "GPT", "Prompt Engineering", "Fundamentals"],
    modules: [
      {
        id: "foundations",
        title: "Foundations",
        description: "Understanding the basics of AI and LLMs",
        icon: Layers,
        lessons: [
          {
            id: "intro-gen-ai",
            title: "Introduction to Generative AI",
            description: "What are LLMs and how do they work?",
            duration: "25 min",
            contentType: "article",
            status: "completed",
            content: `# Introduction to Generative AI

Generative AI represents a paradigm shift in how we interact with technology. Unlike traditional software that follows explicit rules, generative models learn patterns from vast amounts of data and can create new content.

## What are Large Language Models (LLMs)?

LLMs are neural networks trained on massive text datasets. They learn to predict the next token in a sequence, which enables them to:

- Generate coherent text
- Answer questions
- Translate languages
- Write code
- Analyze sentiment

## Key Concepts

### Transformers
The transformer architecture, introduced in "Attention Is All You Need" (2017), revolutionized NLP by enabling parallel processing and capturing long-range dependencies.

### Tokens
Text is broken into tokens (words or subwords). GPT-4 uses ~100k tokens in its vocabulary.

### Context Window
The amount of text a model can "see" at once. Ranges from 4k to 128k+ tokens in modern models.

## Popular Models

| Model | Creator | Strengths |
|-------|---------|-----------|
| GPT-4 | OpenAI | Reasoning, code |
| Claude | Anthropic | Safety, analysis |
| Gemini | Google | Multimodal |
| Llama | Meta | Open source |

## Next Steps

In the following lessons, we'll explore how to effectively use these models through prompt engineering and practical applications.`,
          },
          {
            id: "practical-intro",
            title: "Practical Introduction to LLMs",
            description: "Hands-on exploration of available AI tools",
            duration: "30 min",
            contentType: "interactive",
            status: "completed",
          },
          {
            id: "understanding-tokens",
            title: "Understanding Tokens & Context",
            description: "How models process and understand text",
            duration: "20 min",
            contentType: "article",
            status: "in_progress",
          },
          {
            id: "model-comparison",
            title: "Comparing AI Models",
            description: "GPT vs Claude vs Gemini vs Open Source",
            duration: "35 min",
            contentType: "video",
            status: "available",
          },
        ],
      },
      {
        id: "prompt-engineering",
        title: "Prompt Engineering",
        description: "Master the art of communicating with AI",
        icon: MessageSquare,
        lessons: [
          {
            id: "prompt-basics",
            title: "Prompt Engineering Fundamentals",
            description: "Core principles of effective prompts",
            duration: "30 min",
            contentType: "article",
            status: "available",
          },
          {
            id: "advanced-prompts",
            title: "Advanced Prompting Techniques",
            description: "Chain-of-thought, few-shot, and more",
            duration: "40 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "system-prompts",
            title: "System Prompts & Personas",
            description: "Creating consistent AI behaviors",
            duration: "25 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "prompt-templates",
            title: "Building Prompt Templates",
            description: "Reusable patterns for common tasks",
            duration: "35 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
      {
        id: "applications",
        title: "Practical Applications",
        description: "Real-world AI use cases",
        icon: Rocket,
        lessons: [
          {
            id: "content-creation",
            title: "AI for Content Creation",
            description: "Writing, editing, and creative work",
            duration: "30 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "code-generation",
            title: "Code Generation & Debugging",
            description: "Using AI as a coding assistant",
            duration: "45 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "data-analysis",
            title: "Data Analysis with AI",
            description: "Extracting insights from data",
            duration: "35 min",
            contentType: "project",
            status: "locked",
          },
          {
            id: "automation",
            title: "AI-Powered Automation",
            description: "Building workflows with AI",
            duration: "40 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
      {
        id: "ethics-future",
        title: "Ethics & Future",
        description: "Responsible AI and what's next",
        icon: Shield,
        lessons: [
          {
            id: "ai-ethics",
            title: "Ethics and Bias in AI",
            description: "Understanding and mitigating AI bias",
            duration: "30 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "legal-implications",
            title: "Legal & Privacy Considerations",
            description: "Copyright, data privacy, and compliance",
            duration: "25 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "future-ai",
            title: "The Future of AI Collaboration",
            description: "Human-AI partnership in work",
            duration: "30 min",
            contentType: "video",
            status: "locked",
          },
          {
            id: "staying-current",
            title: "Staying Current in AI",
            description: "Resources and communities to follow",
            duration: "20 min",
            contentType: "article",
            status: "locked",
          },
        ],
      },
    ],
  },
  {
    id: "xeo-mastery",
    title: "XEO Mastery",
    subtitle: "Cross-Engine Optimization",
    description: "Master the art of optimizing for AI search engines, traditional SEO, and emerging platforms simultaneously.",
    icon: Search,
    color: "hot",
    difficulty: "intermediate",
    duration: "12 hours",
    lessonsCount: 20,
    featured: true,
    new: true,
    tags: ["XEO", "GEO", "SEO", "AI Search", "Optimization"],
    modules: [
      {
        id: "xeo-foundations",
        title: "XEO Foundations",
        description: "Understanding cross-engine optimization",
        icon: Globe,
        lessons: [
          {
            id: "what-is-xeo",
            title: "What is XEO?",
            description: "The new paradigm of search optimization",
            duration: "20 min",
            contentType: "article",
            status: "available",
            content: `# What is XEO (Cross-Engine Optimization)?

XEO represents the evolution of digital optimization strategies in an age where search is no longer limited to Google.

## The Fragmented Search Landscape

Today's users find information through:
- **Traditional Search**: Google, Bing, DuckDuckGo
- **AI Assistants**: ChatGPT, Claude, Perplexity
- **Social Search**: TikTok, Reddit, YouTube
- **Voice Assistants**: Alexa, Siri, Google Assistant
- **Vertical Platforms**: Amazon, Yelp, App Stores

## XEO = SEO + GEO + Platform Optimization

| Component | Focus | Key Tactics |
|-----------|-------|-------------|
| **SEO** | Traditional search | Keywords, backlinks, technical |
| **GEO** | Generative AI | Entity optimization, citations |
| **AEO** | Answer engines | Featured snippets, Q&A |
| **VEO** | Video platforms | YouTube, TikTok SEO |

## Why XEO Matters Now

1. **AI is eating search** - 40% of Gen Z prefers TikTok/AI for searches
2. **Zero-click searches** - AI provides answers without clicks
3. **Citation economy** - Being cited by AI = new currency

## The XEO Framework

\`\`\`
Traditional SEO (Foundation)
     ↓
+ Entity Optimization (AI Recognition)
     ↓
+ Content Diversification (Multi-platform)
     ↓
= XEO (Omnipresent Visibility)
\`\`\`

In this course, you'll learn to build a unified strategy that works across all discovery channels.`,
          },
          {
            id: "seo-to-xeo",
            title: "From SEO to XEO Evolution",
            description: "How search optimization has transformed",
            duration: "25 min",
            contentType: "article",
            status: "available",
          },
          {
            id: "ai-search-landscape",
            title: "The AI Search Landscape",
            description: "Understanding ChatGPT, Perplexity, and more",
            duration: "30 min",
            contentType: "video",
            status: "locked",
          },
        ],
      },
      {
        id: "geo-deep-dive",
        title: "GEO Deep Dive",
        description: "Generative Engine Optimization mastery",
        icon: Sparkles,
        lessons: [
          {
            id: "geo-fundamentals",
            title: "GEO Fundamentals",
            description: "Optimizing for AI-generated answers",
            duration: "35 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "entity-optimization",
            title: "Entity Optimization",
            description: "Making your brand AI-recognizable",
            duration: "40 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "citation-building",
            title: "Building AI Citations",
            description: "Getting cited by AI systems",
            duration: "45 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
      {
        id: "vertical-optimization",
        title: "Vertical Optimization",
        description: "Platform-specific strategies",
        icon: TrendingUp,
        lessons: [
          {
            id: "veo-youtube",
            title: "VEO: YouTube Optimization",
            description: "Video SEO for AI discovery",
            duration: "35 min",
            contentType: "video",
            status: "locked",
          },
          {
            id: "smo-strategies",
            title: "SMO: Social Media Optimization",
            description: "Social signals for AI visibility",
            duration: "30 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "leo-local",
            title: "LEO: Local Engine Optimization",
            description: "Local search in the AI era",
            duration: "25 min",
            contentType: "article",
            status: "locked",
          },
        ],
      },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    subtitle: "Build Production AI Systems",
    description: "Learn to build, deploy, and scale AI applications using modern tools and frameworks.",
    icon: Code,
    color: "accent",
    difficulty: "advanced",
    duration: "20 hours",
    lessonsCount: 24,
    tags: ["LangChain", "RAG", "Agents", "APIs", "Production"],
    modules: [
      {
        id: "ai-apis",
        title: "AI APIs & SDKs",
        description: "Working with AI provider APIs",
        icon: Cpu,
        lessons: [
          {
            id: "openai-api",
            title: "OpenAI API Deep Dive",
            description: "Mastering the OpenAI API",
            duration: "45 min",
            contentType: "interactive",
            status: "available",
          },
          {
            id: "anthropic-api",
            title: "Anthropic Claude API",
            description: "Building with Claude",
            duration: "40 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "multi-provider",
            title: "Multi-Provider Strategies",
            description: "Using LiteLLM for provider abstraction",
            duration: "35 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
      {
        id: "rag-systems",
        title: "RAG Systems",
        description: "Retrieval-Augmented Generation",
        icon: Database,
        lessons: [
          {
            id: "rag-fundamentals",
            title: "RAG Fundamentals",
            description: "Understanding retrieval-augmented generation",
            duration: "40 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "vector-databases",
            title: "Vector Databases",
            description: "Chroma, Pinecone, Qdrant comparison",
            duration: "50 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "advanced-rag",
            title: "Advanced RAG Patterns",
            description: "Hybrid search, reranking, and more",
            duration: "55 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        description: "Building autonomous AI systems",
        icon: Bot,
        lessons: [
          {
            id: "agent-fundamentals",
            title: "Agent Architecture",
            description: "Understanding AI agent patterns",
            duration: "45 min",
            contentType: "article",
            status: "locked",
          },
          {
            id: "langchain-agents",
            title: "LangChain Agents",
            description: "Building agents with LangChain",
            duration: "60 min",
            contentType: "project",
            status: "locked",
          },
          {
            id: "tool-use",
            title: "Tool Use & Function Calling",
            description: "Giving agents capabilities",
            duration: "50 min",
            contentType: "interactive",
            status: "locked",
          },
        ],
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    subtitle: "Automate Everything with AI",
    description: "Build powerful automation workflows combining AI with tools like n8n, Make, and custom scripts.",
    icon: Zap,
    color: "warning",
    difficulty: "intermediate",
    duration: "10 hours",
    lessonsCount: 15,
    tags: ["Automation", "n8n", "Workflows", "Integration"],
    modules: [
      {
        id: "automation-foundations",
        title: "Automation Foundations",
        description: "Core automation concepts",
        icon: Layers,
        lessons: [
          {
            id: "automation-mindset",
            title: "The Automation Mindset",
            description: "Identifying automation opportunities",
            duration: "20 min",
            contentType: "article",
            status: "available",
          },
          {
            id: "workflow-design",
            title: "Workflow Design Principles",
            description: "Designing reliable automations",
            duration: "30 min",
            contentType: "article",
            status: "locked",
          },
        ],
      },
      {
        id: "ai-workflows",
        title: "AI-Powered Workflows",
        description: "Integrating AI into automations",
        icon: Bot,
        lessons: [
          {
            id: "ai-triggers",
            title: "AI-Triggered Workflows",
            description: "Using AI for smart triggers",
            duration: "35 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "content-pipelines",
            title: "Content Generation Pipelines",
            description: "Automated content creation",
            duration: "45 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
    ],
  },
  {
    id: "harbor-mastery",
    title: "Harbor Mastery",
    subtitle: "Self-Hosted AI Infrastructure",
    description: "Deploy and manage your own AI infrastructure with Harbor, Ollama, and open-source models.",
    icon: Database,
    color: "success",
    difficulty: "advanced",
    duration: "15 hours",
    lessonsCount: 18,
    tags: ["Harbor", "Ollama", "Self-Hosted", "Docker", "vLLM"],
    modules: [
      {
        id: "harbor-setup",
        title: "Harbor Setup",
        description: "Getting started with Harbor",
        icon: Rocket,
        lessons: [
          {
            id: "harbor-intro",
            title: "Introduction to Harbor",
            description: "What is Harbor and why use it",
            duration: "20 min",
            contentType: "article",
            status: "available",
          },
          {
            id: "docker-basics",
            title: "Docker for AI Services",
            description: "Container fundamentals for AI",
            duration: "40 min",
            contentType: "interactive",
            status: "locked",
          },
        ],
      },
      {
        id: "local-llms",
        title: "Local LLMs",
        description: "Running models locally",
        icon: Cpu,
        lessons: [
          {
            id: "ollama-setup",
            title: "Ollama Setup & Usage",
            description: "Run local models with Ollama",
            duration: "30 min",
            contentType: "interactive",
            status: "locked",
          },
          {
            id: "vllm-deployment",
            title: "vLLM for Production",
            description: "High-performance LLM serving",
            duration: "45 min",
            contentType: "project",
            status: "locked",
          },
        ],
      },
    ],
  },
];

// Calculate progress for a course
export function calculateCourseProgress(course: Course): number {
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const completedLessons = allLessons.filter((l) => l.status === "completed").length;
  return Math.round((completedLessons / allLessons.length) * 100);
}

// Get all lessons across all courses
export function getAllLessons(): { lesson: Lesson; module: Module; course: Course }[] {
  return courses.flatMap((course) =>
    course.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ lesson, module, course }))
    )
  );
}

// Get featured courses
export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}

// Get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

// Get lesson by ID
export function getLessonById(courseId: string, lessonId: string): { lesson: Lesson; module: Module; course: Course } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;

  for (const module of course.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { lesson, module, course };
    }
  }
  return undefined;
}

// Learning stats
export const learningStats = {
  totalCourses: courses.length,
  totalLessons: courses.reduce((acc, c) => acc + c.lessonsCount, 0),
  totalHours: courses.reduce((acc, c) => acc + parseInt(c.duration), 0),
  completedLessons: 2,
  inProgressLessons: 1,
  streak: 5,
};
