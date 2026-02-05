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
    duration: "15 hours",
    lessonsCount: 12,
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
            content: `# From SEO to XEO: The Evolution of Search Optimization

## The Death of Traditional SEO?

According to Gartner's 2024 research, **traditional search volume will drop by 25% by 2026** as AI assistants become primary discovery channels. This isn't the death of SEO—it's an evolution.

## Timeline of Search Evolution

\`\`\`
1990s: Directory-based (Yahoo!)
2000s: Keyword-based (Google PageRank)
2010s: Intent-based (Semantic Search)
2020s: AI-based (Generative Answers)
2025+: XEO Era (Cross-Engine Discovery)
\`\`\`

## The Fragmentation Problem

Modern users discover information through:

| Channel | % of Discovery | Key Demographic |
|---------|---------------|-----------------|
| Google Search | 45% (declining) | All ages |
| AI Assistants | 25% (rising) | 18-45 |
| Social Search (TikTok) | 15% | Gen Z |
| Voice Assistants | 10% | Families |
| Vertical Platforms | 5% | Intent-based |

## What XEO Solves

**Traditional SEO Gaps:**
- Optimized for one engine only
- Focused on rankings, not answers
- Ignored AI citation opportunities
- Missed social discovery

**XEO Approach:**
- Unified strategy across all engines
- Focus on being THE answer
- Active citation building
- Platform-specific optimization

## The XEO Maturity Model

### Level 1: SEO Foundation
- Technical SEO excellence
- Content quality
- Link authority

### Level 2: Multi-Platform Presence
- Social media optimization
- Video content strategy
- Local search optimization

### Level 3: AI Optimization
- Entity recognition
- Citation building
- Structured data for AI

### Level 4: XEO Mastery
- Unified measurement
- Cross-platform attribution
- Predictive optimization

## Key Metrics Shift

| Old Metric | New Metric |
|------------|------------|
| Rankings | AI Citations |
| CTR | Answer Inclusion Rate |
| Backlinks | Entity Authority |
| Traffic | Discovery Share |

## Action Items

1. Audit your current SEO foundation
2. Map your presence across all discovery channels
3. Identify AI citation opportunities
4. Build unified measurement framework`,
          },
          {
            id: "ai-search-landscape",
            title: "The AI Search Landscape",
            description: "Understanding ChatGPT, Perplexity, and more",
            duration: "30 min",
            contentType: "article",
            status: "available",
            content: `# The AI Search Landscape in 2025

## Market Overview

The AI search market has exploded with **$200M+ raised** across GEO/AEO tools and platforms. Understanding this landscape is crucial for XEO success.

## Major AI Search Platforms

### ChatGPT Search
- **Users**: 100M+ weekly active
- **Model**: GPT-4 with real-time browsing
- **Citation style**: Inline links + sources
- **Key insight**: Prefers authoritative, recent content

### Perplexity AI
- **Users**: 15M+ monthly
- **Model**: Multiple (Claude, GPT-4, custom)
- **Citation style**: Numbered citations with previews
- **Key insight**: Heavy emphasis on source credibility

### Google AI Overviews (SGE)
- **Users**: Billions (integrated into Google)
- **Model**: Gemini
- **Citation style**: Expandable source cards
- **Key insight**: Favors Google-indexed content

### Claude AI
- **Users**: 5M+ monthly
- **Model**: Claude 3.5 Sonnet/Opus
- **Citation style**: Contextual mentions
- **Key insight**: Values nuanced, comprehensive content

### Microsoft Copilot
- **Users**: 30M+ monthly
- **Model**: GPT-4 + Bing
- **Citation style**: Footnote-style links
- **Key insight**: Bing index influences results

## How AI Engines Select Sources

\`\`\`
Query Received
     ↓
Intent Classification
     ↓
Knowledge Retrieval (RAG)
     ↓
Source Ranking Factors:
├── Authority (E-E-A-T signals)
├── Recency (freshness)
├── Relevance (semantic match)
├── Credibility (citations, reviews)
└── Accessibility (crawlable, structured)
     ↓
Answer Generation + Citations
\`\`\`

## The Citation Economy

### What Gets Cited?

**High Citation Probability:**
- Primary research and data
- Expert opinions with credentials
- Comprehensive guides
- Official documentation
- Unique insights

**Low Citation Probability:**
- Generic content
- Thin affiliate content
- Outdated information
- Duplicate/syndicated content

## Platform-Specific Strategies

### For ChatGPT
- Publish original research
- Use clear, structured formatting
- Include expert credentials
- Keep content current

### For Perplexity
- Focus on factual accuracy
- Provide multiple data points
- Build topical authority
- Get linked from authoritative sources

### For Google AI Overviews
- Maintain strong traditional SEO
- Implement comprehensive schema
- Focus on EEAT signals
- Create definitive resources

## Tools for AI Search Monitoring

| Tool | Focus | Pricing |
|------|-------|---------|
| Otterly.ai | AI citation tracking | $25/mo |
| Profound | AI visibility metrics | $99/mo |
| Goodie AI | GEO analytics | $79/mo |
| Semrush Copilot | Integrated SEO+AI | Enterprise |

## Future Trends

1. **Agentic search**: AI agents browsing and acting
2. **Multimodal answers**: Images, video in AI responses
3. **Real-time citations**: Live source verification
4. **Personalized discovery**: Context-aware results`,
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
            status: "available",
            content: `# GEO Fundamentals: Optimizing for AI-Generated Answers

## What is GEO?

**Generative Engine Optimization (GEO)** is the practice of optimizing content to be selected, cited, and recommended by AI-powered search engines and assistants.

## The GEO Landscape

### Market Size & Growth
- **$200M+** raised in GEO tools (2024-2025)
- **60%** of searches now involve AI platforms
- **40%** of Gen Z prefers AI for information discovery

### Key Platforms
- ChatGPT (OpenAI)
- Perplexity AI
- Google AI Overviews
- Microsoft Copilot
- Claude AI

## Core GEO Principles

### 1. Entity Recognition
AI systems understand entities, not just keywords:
\`\`\`
Keyword: "best running shoes"
Entity: Nike Air Max 90 (product entity)
        with attributes: price, reviews, features
\`\`\`

### 2. Semantic Authority
Build topical authority through:
- Comprehensive coverage of topics
- Consistent terminology
- Expert credentials
- Cross-references

### 3. Citation Worthiness
Content that gets cited:
- Original research/data
- Expert opinions
- Unique insights
- Definitive guides

## GEO Ranking Factors

| Factor | Weight | How to Optimize |
|--------|--------|-----------------|
| Authority | High | E-E-A-T signals, credentials |
| Relevance | High | Semantic matching, intent |
| Freshness | Medium | Regular updates, timestamps |
| Structure | Medium | Schema, headings, lists |
| Uniqueness | High | Original data, insights |

## GEO Tools Comparison

### Tier 1: Enterprise
| Tool | Price | Features |
|------|-------|----------|
| Profound | $99/mo | AI visibility, citations |
| Semrush Copilot | $449/mo | Integrated SEO+GEO |
| Evertune | $3,000/mo | Enterprise AI monitoring |

### Tier 2: SMB
| Tool | Price | Features |
|------|-------|----------|
| Otterly.ai | $25/mo | Citation tracking |
| Goodie AI | $79/mo | GEO analytics |
| Scrunch AI | $300/mo | Influencer + AI |

### Tier 3: Emerging
- Peec AI (€89/mo) - European focus
- Relixir (Y Combinator) - Real-time monitoring

## Implementation Framework

### Step 1: Audit
- Map current AI visibility
- Identify citation gaps
- Analyze competitor citations

### Step 2: Optimize
- Enhance entity signals
- Add structured data
- Improve content comprehensiveness

### Step 3: Monitor
- Track AI mentions
- Measure citation frequency
- Analyze answer inclusion

### Step 4: Iterate
- A/B test content formats
- Update based on AI changes
- Scale winning patterns`,
          },
          {
            id: "entity-optimization",
            title: "Entity Optimization",
            description: "Making your brand AI-recognizable",
            duration: "40 min",
            contentType: "article",
            status: "available",
            content: `# Entity Optimization: Making Your Brand AI-Recognizable

## What is Entity Optimization?

Entity optimization is the process of establishing your brand, products, or content as recognized entities within AI knowledge systems.

## How AI Understands Entities

\`\`\`
Raw Text: "Apple released a new phone"
     ↓
Entity Recognition:
├── Apple (Organization) → Apple Inc.
├── phone (Product) → iPhone
└── released (Action) → Product Launch
     ↓
Knowledge Graph Connection:
Apple Inc. → releases → iPhone 15 → category: smartphones
\`\`\`

## The Entity Stack

### Level 1: Named Entities
- Brand names
- Product names
- Person names
- Location names

### Level 2: Attribute Entities
- Features
- Specifications
- Categories
- Relationships

### Level 3: Context Entities
- Industry
- Use cases
- Competitors
- Trends

## Building Entity Recognition

### 1. Wikipedia Strategy
Wikipedia is the foundation of most AI knowledge:
- Create/improve Wikipedia page
- Ensure accuracy and citations
- Link to authoritative sources

### 2. Knowledge Graph Optimization
- Google Knowledge Panel
- Wikidata entries
- Schema.org markup

### 3. Brand Consistency
Maintain consistent:
- Name spelling
- Description language
- Category placement
- Attribute terminology

## Entity Signals

| Signal | Importance | Implementation |
|--------|------------|----------------|
| Schema Markup | Critical | Organization, Product, Person |
| Wikipedia | High | Verified page with citations |
| Knowledge Panel | High | Claim and optimize |
| Social Profiles | Medium | Consistent branding |
| News Coverage | Medium | Press releases, features |

## Entity Optimization Checklist

**Foundational:**
- [ ] Organization schema on website
- [ ] Consistent NAP (Name, Address, Phone)
- [ ] Claimed Google Business Profile
- [ ] Verified social profiles

**Advanced:**
- [ ] Wikipedia page or mention
- [ ] Wikidata entry
- [ ] Knowledge Panel claimed
- [ ] Industry association listings

**Expert:**
- [ ] Structured data for all products
- [ ] Entity relationships mapped
- [ ] Cross-platform entity linking
- [ ] Entity monitoring system

## Tools for Entity Optimization

| Tool | Purpose | Notes |
|------|---------|-------|
| Google Search Console | Entity detection | Free |
| Schema Markup Validator | Structured data | Free |
| Kalicube | Entity SEO | Paid |
| InLinks | Entity mapping | Paid |

## Measuring Entity Strength

Track these metrics:
1. Knowledge Panel appearance rate
2. AI mention frequency
3. Entity association accuracy
4. Brand query classification`,
          },
          {
            id: "citation-building",
            title: "Building AI Citations",
            description: "Getting cited by AI systems",
            duration: "45 min",
            contentType: "article",
            status: "available",
            content: `# Building AI Citations: Getting Cited by AI Systems

## The Citation Economy

In the AI era, **citations are the new backlinks**. When an AI system cites your content, it:
- Validates your authority
- Drives qualified traffic
- Builds compounding visibility

## What Gets Cited?

### High-Citation Content Types

**1. Original Research (90% citation rate)**
- Surveys and studies
- Industry reports
- Proprietary data
- Case studies

**2. Expert Content (70% citation rate)**
- Thought leadership
- Expert interviews
- Professional insights
- Credentialed analysis

**3. Definitive Resources (60% citation rate)**
- Comprehensive guides
- Official documentation
- How-to tutorials
- Reference materials

### Low-Citation Content Types

**Avoid:**
- Generic listicles (10%)
- Thin affiliate content (5%)
- Duplicate information (2%)
- Outdated content (3%)

## Citation Building Strategies

### Strategy 1: Data-First Content
\`\`\`
Create → Original research/surveys
Publish → With clear methodology
Distribute → Press releases, social
Result → AI systems cite as source
\`\`\`

### Strategy 2: Expert Positioning
- Add author credentials
- Include expert quotes
- Reference authoritative sources
- Build personal brand

### Strategy 3: Comprehensiveness
AI prefers comprehensive sources:
- Cover all aspects of topic
- Include examples and data
- Answer related questions
- Update regularly

### Strategy 4: Technical Authority
- Accurate information
- Proper citations
- Clear sourcing
- Fact-checkable claims

## Citation Tracking

### Tools & Methods

| Method | Cost | Accuracy |
|--------|------|----------|
| Manual checking | Free | Low |
| Otterly.ai | $25/mo | High |
| Profound | $99/mo | High |
| Custom monitoring | Varies | Medium |

### Metrics to Track

1. **Citation Frequency**: How often cited
2. **Citation Context**: How you're mentioned
3. **Citation Quality**: Which AI platforms
4. **Citation Sentiment**: Positive/neutral/negative

## Citation Optimization Workflow

\`\`\`
Week 1: Audit current citations
Week 2: Identify high-potential content
Week 3: Optimize for citation signals
Week 4: Build supporting signals
Week 5+: Monitor and iterate
\`\`\`

## Advanced Citation Tactics

### 1. Citation Magnets
Create content specifically for citations:
- Statistics pages
- Glossary/definitions
- Methodology guides
- Benchmark reports

### 2. Citation Networks
Build cross-citation relationships:
- Partner with complementary sources
- Guest expert contributions
- Collaborative research

### 3. Real-Time Citation
Stay current for news citations:
- Rapid response content
- Trend commentary
- Breaking news analysis`,
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
            title: "VEO: Video Engine Optimization",
            description: "Video SEO for AI discovery",
            duration: "35 min",
            contentType: "article",
            status: "available",
            content: `# VEO: Video Engine Optimization

## What is VEO?

**Video Engine Optimization (VEO)** encompasses strategies for optimizing video content across YouTube, TikTok, Instagram Reels, and emerging AI video platforms.

## The Video-First Discovery Shift

### Platform Statistics (2025)
| Platform | Monthly Users | Search Behavior |
|----------|--------------|-----------------|
| YouTube | 2.5B | 65% use as search engine |
| TikTok | 1.5B | 40% Gen Z prefer for search |
| Instagram Reels | 2B | Growing discovery feature |
| Google Veo | Emerging | AI video generation |

## YouTube VEO Strategies

### 1. AI-Optimized Titles
\`\`\`
Before: "How to Cook Pasta"
After: "Perfect Al Dente Pasta in 10 Minutes | Chef's Technique"
Why: Includes intent + value + credibility
\`\`\`

### 2. Description Optimization
- First 200 characters critical
- Include timestamps
- Natural keyword integration
- Links to resources

### 3. Transcript Optimization
YouTube's AI reads transcripts:
- Speak keywords naturally
- Define technical terms
- Include CTAs verbally

### 4. Thumbnail AI Signals
- High contrast
- Faces (1.5x engagement)
- Text overlay (3-4 words)
- Consistent branding

## TikTok VEO Strategies

### Algorithm Factors
1. **Watch time** (most important)
2. **Completion rate**
3. **Shares** (viral signal)
4. **Comments** (engagement)
5. **Profile visits**

### Optimization Tactics
- Hook in first 1 second
- Loop-friendly content
- Trending sounds
- Hashtag strategy (3-5 relevant)

## AI Video Platforms

### Google Veo 3.1
Google's AI video generation:
- Text-to-video
- Image-to-video
- Style transfer

### Implications for VEO
- AI-generated video competition
- Authenticity premium
- Human expertise differentiation

## Video SEO Checklist

**Pre-Production:**
- [ ] Keyword research for topic
- [ ] Competitor analysis
- [ ] Script with natural keywords

**Production:**
- [ ] Clear audio quality
- [ ] Good lighting
- [ ] Engaging visuals

**Post-Production:**
- [ ] Optimized title
- [ ] Keyword-rich description
- [ ] Custom thumbnail
- [ ] Captions/subtitles
- [ ] End screens
- [ ] Cards

## Video Analytics to Track

| Metric | Target | Why |
|--------|--------|-----|
| CTR | >5% | Thumbnail/title effectiveness |
| Watch time | >50% | Content quality |
| Retention | <20% drop at start | Hook effectiveness |
| Engagement | >5% | Community building |

## Tools for VEO

- **TubeBuddy**: YouTube optimization
- **VidIQ**: Analytics + suggestions
- **Descript**: Transcript editing
- **Canva**: Thumbnail creation`,
          },
          {
            id: "smo-strategies",
            title: "SMO: Social Media Optimization",
            description: "Social signals for AI visibility",
            duration: "30 min",
            contentType: "article",
            status: "available",
            content: `# SMO: Social Media Optimization for AI Visibility

## The Social-AI Connection

Social signals increasingly influence AI recommendations. Platforms like TikTok, Reddit, and Twitter/X are becoming primary discovery channels.

## Platform-Specific SMO

### TikTok SMO
**Algorithm Factors:**
- Watch time & completion
- Shares (viral multiplier)
- Saves (value signal)
- Comments (engagement)
- Following ratio

**Optimization:**
- Post 1-4x daily
- Trend participation
- Consistent niche
- Sound optimization

### Reddit SMO
**Why Reddit Matters:**
- Google indexes heavily
- AI systems cite Reddit
- High engagement signals

**Optimization:**
- Authentic participation
- Value-first approach
- Community guidelines
- AMA opportunities

### LinkedIn SMO
**Algorithm Factors:**
- Dwell time (read depth)
- Early engagement
- Share to comment ratio
- Connection relevance

**Optimization:**
- Document posts (carousels)
- Native video
- Thought leadership
- Employee advocacy

### Twitter/X SMO
**Signal Factors:**
- Retweets (reach)
- Quote tweets (conversation)
- Bookmarks (value)
- Profile clicks

**Optimization:**
- Thread strategy
- Visual content
- Engagement timing
- Hashtag research

## Social Signals for AI

### What AI Systems Track
\`\`\`
Brand Mentions → Entity recognition
Engagement Rate → Authority signal
Content Shares → Value indicator
Follower Quality → Credibility
Sentiment → Brand perception
\`\`\`

### Building AI-Relevant Social Signals

1. **Consistent Brand Voice**
   - Same messaging across platforms
   - Recognizable visual identity
   - Coherent topic coverage

2. **Engagement Quality**
   - Meaningful interactions
   - Expert responses
   - Community building

3. **Content Distribution**
   - Cross-platform sharing
   - Influencer amplification
   - UGC encouragement

## SMO Tools

| Tool | Purpose | Pricing |
|------|---------|---------|
| Hootsuite | Scheduling | $99/mo |
| Sprout Social | Analytics | $249/mo |
| BuzzSumo | Content research | $199/mo |
| Scrunch AI | Influencer + AI | $300/mo |

## Social Content Calendar

**Daily:**
- 1 TikTok/Reel
- 2-3 Twitter posts
- 1 LinkedIn engagement

**Weekly:**
- 1 LinkedIn article
- 1 Reddit contribution
- 1 Twitter thread

**Monthly:**
- 1 Influencer collab
- Platform audit
- Performance review`,
          },
          {
            id: "leo-local",
            title: "LEO: Local Engine Optimization",
            description: "Local search in the AI era",
            duration: "25 min",
            contentType: "article",
            status: "available",
            content: `# LEO: Local Engine Optimization in the AI Era

## Local Search Transformation

AI is reshaping local discovery through:
- Voice search ("near me" queries)
- AI-powered recommendations
- Personalized local results
- Conversational local queries

## Core LEO Elements

### 1. Google Business Profile
**Foundation of local visibility:**
- Claim and verify
- Complete all fields
- Regular updates
- Photo optimization
- Q&A management
- Review response

### 2. Local Structured Data
\`\`\`json
{
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {...},
  "geo": {...},
  "openingHours": "...",
  "priceRange": "$$"
}
\`\`\`

### 3. NAP Consistency
**Name, Address, Phone** must match:
- Google Business Profile
- Website
- Social profiles
- Directory listings
- Local citations

## AI-Specific Local Optimization

### Voice Search Optimization
**40% of local searches** are voice:
- Natural language content
- Question-based headings
- Conversational tone
- Featured snippet targeting

### AI Assistant Optimization
For Siri, Alexa, Google Assistant:
- Yelp profile (Siri)
- Amazon Local (Alexa)
- Google Maps (Assistant)

### ChatGPT Local Queries
AI assistants cite for local:
- Yelp reviews
- Google reviews
- TripAdvisor
- Local news coverage

## Local Ranking Factors

| Factor | Weight | Optimization |
|--------|--------|--------------|
| Relevance | 30% | Category accuracy |
| Distance | 25% | Service area setup |
| Prominence | 25% | Reviews, citations |
| Engagement | 20% | Clicks, calls, directions |

## Local Citation Building

### Core Citations
- Google Business Profile
- Yelp
- Facebook
- Apple Maps
- Bing Places

### Industry Citations
- Industry directories
- Professional associations
- Local chambers
- Niche platforms

### Local Citations
- Local newspapers
- Community sites
- Local blogs
- Event listings

## Review Strategy

### Review Generation
- Post-purchase requests
- Email sequences
- QR codes in-store
- Text message requests

### Review Response
- Respond to ALL reviews
- Thank positive reviewers
- Address negative professionally
- Include keywords naturally

## LEO Tools

| Tool | Purpose | Cost |
|------|---------|------|
| BrightLocal | Local rank tracking | $39/mo |
| Whitespark | Citation building | $33/mo |
| Yext | Listing management | $499/yr |
| GatherUp | Review management | $99/mo |

## Local SEO Audit Checklist

**Foundation:**
- [ ] Google Business verified
- [ ] NAP consistent
- [ ] Categories accurate
- [ ] Service areas defined

**Content:**
- [ ] Local landing pages
- [ ] City/neighborhood content
- [ ] Local schema markup
- [ ] Local keywords

**Signals:**
- [ ] Reviews (target: 50+)
- [ ] Citations (target: 100+)
- [ ] Local backlinks
- [ ] Social engagement`,
          },
          {
            id: "aeo-fundamentals",
            title: "AEO: Answer Engine Optimization",
            description: "Optimizing for featured snippets and AI answers",
            duration: "30 min",
            contentType: "article",
            status: "available",
            content: `# AEO: Answer Engine Optimization

## What is AEO?

**Answer Engine Optimization (AEO)** focuses on getting your content featured as direct answers in search engines and AI systems.

## The Zero-Click Reality

### Key Statistics
- **70% of searches** will be zero-click by 2026
- Featured snippets get **35% of clicks** when shown
- AI Overviews appear in **40%+ of queries**

## Answer Formats

### 1. Featured Snippets (Google)
\`\`\`
Types:
├── Paragraph (most common)
├── List (numbered/bulleted)
├── Table
└── Video
\`\`\`

### 2. AI Overviews
Google's AI-generated summaries:
- Synthesized answers
- Multiple sources
- Expandable details

### 3. People Also Ask (PAA)
- Question-based expansion
- Related queries
- Infinite scroll

### 4. Knowledge Panels
- Entity-based information
- Right sidebar (desktop)
- Structured data driven

## AEO Optimization Strategies

### Strategy 1: Question Targeting
Structure content around questions:
\`\`\`markdown
## What is [Topic]?

[Topic] is [clear definition in 40-60 words].

## How does [Topic] work?

[Step-by-step explanation...]
\`\`\`

### Strategy 2: Format Optimization

**For Paragraph Snippets:**
- 40-60 word definitions
- Lead with the answer
- Use "is" statements

**For List Snippets:**
- Use H2/H3 headers
- 5-8 items optimal
- Clear formatting

**For Table Snippets:**
- Use HTML tables
- Clear headers
- Comparable data

### Strategy 3: Schema Markup
\`\`\`json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is XEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "XEO is..."
    }
  }]
}
\`\`\`

## Content Structure for AEO

### The AEO Template
\`\`\`
1. Definition (40-60 words)
2. Key benefits (bulleted)
3. How it works (numbered steps)
4. Comparison table
5. FAQ section
6. Expert quote
\`\`\`

### Heading Hierarchy
- H1: Main topic
- H2: Major questions/sections
- H3: Sub-questions/details
- H4: Examples/specifics

## Measuring AEO Success

| Metric | Tool | Target |
|--------|------|--------|
| Featured snippet wins | Semrush/Ahrefs | Track growth |
| PAA presence | SERP trackers | 3+ per topic |
| Zero-click share | Search Console | Monitor trend |
| AI Overview inclusion | Manual/tools | Track frequency |

## AEO Tools

- **Ahrefs**: Featured snippet opportunities
- **Semrush**: Position tracking with SERP features
- **Clearscope**: Content optimization
- **Frase**: Question research

## Common AEO Mistakes

1. **Too long** - Keep definitions concise
2. **No structure** - Use clear formatting
3. **Missing schema** - Implement FAQ/HowTo
4. **Poor headings** - Use question format
5. **No updates** - Refresh regularly`,
          },
          {
            id: "meo-marketplace",
            title: "MEO: Marketplace Engine Optimization",
            description: "Amazon, eBay, and marketplace AI",
            duration: "35 min",
            contentType: "article",
            status: "available",
            content: `# MEO: Marketplace Engine Optimization

## What is MEO?

**Marketplace Engine Optimization (MEO)** is the practice of optimizing product listings for AI-driven discovery on platforms like Amazon, eBay, Etsy, and Walmart.

## The Marketplace AI Revolution

### Platform Search Evolution
| Platform | AI Features | Impact |
|----------|-------------|--------|
| Amazon | Rufus AI, Cosmo | Conversational shopping |
| eBay | AI listings, Magical | Auto-optimization |
| Walmart | Search AI | Intent matching |
| Etsy | Discovery AI | Trend prediction |

## Amazon MEO

### Amazon Rufus (AI Assistant)
Amazon's shopping AI:
- Conversational product search
- Comparison queries
- Review summaries
- Recommendation engine

### A9/A10 Algorithm Factors

**Relevance Factors:**
- Title keywords
- Backend search terms
- Product description
- A+ Content

**Performance Factors:**
- Sales velocity
- Conversion rate
- Reviews (quantity + quality)
- Inventory health

### Amazon Listing Optimization
\`\`\`
Title Formula:
[Brand] + [Product] + [Key Feature] + [Size/Quantity]

Example:
"BrandX Wireless Earbuds - Active Noise Cancelling - 40H Battery - Black"
\`\`\`

## eBay MEO

### eBay AI Features
- **Magical Listing**: AI-generated descriptions
- **Smart Pricing**: AI price suggestions
- **Image Enhancement**: Auto background removal

### eBay SEO Factors
1. Title optimization (80 chars)
2. Item specifics (complete all)
3. High-quality images (12 max)
4. Competitive pricing
5. Seller metrics

## Marketplace Content Strategy

### Image Optimization
- Main: White background, 1000x1000+
- Lifestyle: Product in use
- Infographic: Features highlighted
- Size: Scale reference
- Detail: Close-ups

### Bullet Point Strategy
\`\`\`
Bullet Formula:
[BENEFIT] - [Feature] that [outcome]

Example:
"CRYSTAL CLEAR AUDIO - Advanced drivers that deliver studio-quality sound"
\`\`\`

### Backend Keywords (Amazon)
- No punctuation needed
- No competitor brands
- Include misspellings
- Use all 250 bytes

## AI Listing Tools

| Tool | Platform | Features |
|------|----------|----------|
| Helium 10 | Amazon | Keyword research, listing optimization |
| Jungle Scout | Amazon | Sales data, competitor analysis |
| Sellics | Amazon | PPC + listing optimization |
| ZIK Analytics | eBay | Market research |
| eRank | Etsy | SEO + trends |

## Review Strategy for Marketplaces

### Review Generation
- Amazon Vine program
- Request a Review button
- Product inserts (compliant)
- Follow-up emails

### Review Optimization
- Respond to feedback
- Address issues publicly
- Use reviews for keywords
- Feature in A+ Content

## Marketplace Advertising + MEO

### PPC Integration
- Use converting keywords in listings
- Test titles via ads
- Sponsored Brand videos
- DSP for awareness

### Organic + Paid Synergy
\`\`\`
PPC Data → Keyword Discovery
   ↓
Listing Optimization → Better Organic
   ↓
Higher Sales → Better Rankings
   ↓
Lower ACoS → Profitable Growth
\`\`\`

## MEO Metrics Dashboard

| Metric | Target | Action |
|--------|--------|--------|
| Search rank | Top 10 | Optimize keywords |
| CTR | >0.5% | Improve images/title |
| Conversion | >15% | Enhance content |
| BSR | Track trend | Sales velocity |
| Reviews | >50, >4.5★ | Quality + quantity |`,
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
