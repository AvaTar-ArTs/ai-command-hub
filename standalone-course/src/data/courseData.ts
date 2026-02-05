export type LessonStatus = 'locked' | 'available' | 'completed';
export type ContentType = 'video' | 'article' | 'quiz' | 'project';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: ContentType;
  status: LessonStatus;
  content: string;
  videoUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  duration: string;
  lessonsCount: number;
  modules: Module[];
}

export const course: Course = {
  id: "zero-to-ai",
  title: "Zero to AI",
  subtitle: "Master Generative AI from Scratch",
  description: "A comprehensive introduction to Large Language Models and Generative AI. Learn the fundamentals, master prompt engineering, and build real-world AI applications.",
  author: "AvatarArts Academy",
  duration: "8 hours",
  lessonsCount: 16,
  modules: [
    {
      id: "foundations",
      title: "Module 1: Foundations",
      description: "Understanding the basics of AI and Large Language Models",
      lessons: [
        {
          id: "intro-gen-ai",
          title: "Introduction to Generative AI",
          description: "What are LLMs and how do they work?",
          duration: "25 min",
          type: "article",
          status: "available",
          content: `# Introduction to Generative AI

Welcome to the fascinating world of Generative AI! This lesson will introduce you to the fundamental concepts that power modern AI systems like ChatGPT, Claude, and Gemini.

## What is Generative AI?

Generative AI refers to artificial intelligence systems that can create new content - whether that's text, images, code, music, or video. Unlike traditional software that follows explicit rules, generative models learn patterns from vast amounts of data and can produce original outputs.

**Key Insight:** Generative AI doesn't "think" like humans. It predicts the most likely next piece of content based on patterns learned during training.

## Large Language Models (LLMs)

LLMs are neural networks trained on massive text datasets. They learn to predict the next token in a sequence, which enables them to:

- Generate coherent, contextual text
- Answer questions accurately
- Translate between languages
- Write and explain code
- Analyze sentiment and tone
- Summarize long documents

### How LLMs Work

1. **Training:** The model processes billions of text samples, learning statistical patterns
2. **Tokenization:** Text is broken into tokens (words or subwords)
3. **Prediction:** Given a sequence, the model predicts probable next tokens
4. **Generation:** By repeatedly predicting next tokens, it generates complete responses

## The Transformer Architecture

The transformer architecture, introduced in the paper "Attention Is All You Need" (2017), revolutionized natural language processing. Key innovations include:

- **Self-Attention:** Allows the model to weigh the importance of different parts of the input
- **Parallel Processing:** Unlike previous models, transformers can process entire sequences at once
- **Scalability:** The architecture scales efficiently with more data and compute

## Popular Models Comparison

| Model | Creator | Key Strengths |
|-------|---------|---------------|
| GPT-4 | OpenAI | Reasoning, code generation |
| Claude | Anthropic | Safety, nuanced analysis |
| Gemini | Google | Multimodal capabilities |
| Llama | Meta | Open source, customizable |
| Mistral | Mistral AI | Efficiency, performance |

## Key Concepts to Remember

### Tokens
Text is broken into tokens - typically words or parts of words. GPT-4 has a vocabulary of ~100,000 tokens. Understanding tokens helps you write more effective prompts.

### Context Window
The amount of text a model can "see" at once. This ranges from 4,000 to 200,000+ tokens in modern models. Longer context windows allow for more complex tasks.

### Temperature
A parameter that controls randomness in outputs. Lower temperature (0-0.3) produces focused, deterministic responses. Higher temperature (0.7-1.0) produces more creative, varied outputs.

## Why This Matters

Understanding these fundamentals will help you:
- Write more effective prompts
- Choose the right model for each task
- Troubleshoot when AI doesn't perform as expected
- Stay informed as the field evolves

## Practice Exercise

Try this prompt in any AI assistant:

\`\`\`
Explain how you generate responses, step by step.
Include information about tokens and probability.
\`\`\`

Compare the responses from different models. Notice how each explains its own functioning.

## Summary

- Generative AI creates new content by predicting likely sequences
- LLMs are trained on massive datasets to learn language patterns
- Transformers enable efficient, scalable language processing
- Understanding these concepts improves your ability to use AI effectively

In the next lesson, we'll get hands-on with popular AI tools and learn how to interact with them effectively.`
        },
        {
          id: "practical-intro",
          title: "Hands-On with AI Tools",
          description: "Exploring ChatGPT, Claude, and other AI assistants",
          duration: "30 min",
          type: "article",
          status: "available",
          content: `# Hands-On with AI Tools

Now that you understand the fundamentals, let's get practical! In this lesson, you'll learn how to effectively use the most popular AI assistants.

## The Big Players

### ChatGPT (OpenAI)
The model that brought AI to the mainstream. Available at chat.openai.com

**Best for:**
- General conversation and brainstorming
- Code generation and debugging
- Creative writing
- Data analysis with Advanced Data Analysis

**Pro Tips:**
- Use GPT-4 for complex reasoning tasks
- Enable browsing for current information
- Use DALL-E integration for image generation

### Claude (Anthropic)
Known for nuanced, thoughtful responses. Available at claude.ai

**Best for:**
- Long document analysis
- Careful, nuanced discussions
- Code review and explanation
- Writing with specific tone/style

**Pro Tips:**
- Claude handles 200K tokens - upload entire documents
- Great at following complex instructions
- Excellent at admitting uncertainty

### Gemini (Google)
Google's multimodal AI. Available at gemini.google.com

**Best for:**
- Multimodal tasks (text + images)
- Google ecosystem integration
- Real-time information
- Workspace integration

## Effective Interaction Patterns

### 1. Be Specific
Instead of: "Help me with code"
Say: "Write a Python function that validates email addresses using regex, with error handling and docstrings"

### 2. Provide Context
Instead of: "Fix this bug"
Say: "I'm getting a TypeError on line 23 of my React component. Here's the code: [code]. The error appears when I click the submit button."

### 3. Request Format
Instead of: "Give me some ideas"
Say: "Give me 5 startup ideas in the AI education space. Format each as: Name, One-line pitch, Target audience, Revenue model"

### 4. Iterate
Don't expect perfection on the first try. Refine:
- "Make it more concise"
- "Add more technical detail"
- "Rewrite for a beginner audience"

## Comparing Responses

Let's see how different models handle the same prompt:

**Prompt:** "Explain quantum computing in simple terms"

Each model will have different:
- Analogies and examples
- Level of technical detail
- Length and structure
- Caveats and limitations mentioned

**Exercise:** Try this prompt on 2-3 different AI assistants and compare the results.

## API vs Chat Interface

### Chat Interface (Free/Consumer)
- Conversational, maintains context
- Easy to use, no setup
- Limited customization
- Rate limits on free tiers

### API Access (Developer)
- Programmatic access
- Full control over parameters
- Build into applications
- Pay per token

We'll cover API usage in the AI Engineering module.

## Best Practices

1. **Start fresh for new topics** - Start a new conversation to avoid context confusion
2. **Save useful prompts** - Build a library of prompts that work well
3. **Verify important info** - AI can hallucinate; verify critical facts
4. **Understand limitations** - Knowledge cutoffs, inability to access the internet (in some modes)
5. **Respect rate limits** - Don't spam requests

## Hands-On Exercise

Complete these tasks using any AI assistant:

1. **Summarization:** Find a news article and ask the AI to summarize it in 3 bullet points
2. **Code Help:** Ask it to explain a code snippet you don't understand
3. **Creative:** Ask it to write a haiku about artificial intelligence
4. **Analysis:** Paste a restaurant review and ask it to identify the sentiment and key points

## Summary

- Different AI tools have different strengths
- Specific, contextual prompts get better results
- Iteration is key to getting what you want
- Understanding the interface helps you use it effectively

Next, we'll dive deep into how AI models process and understand text through tokenization and context windows.`
        },
        {
          id: "understanding-tokens",
          title: "Understanding Tokens & Context",
          description: "How models process and understand text",
          duration: "20 min",
          type: "article",
          status: "available",
          content: `# Understanding Tokens & Context

To use AI effectively, you need to understand how these models actually "see" your text. This lesson covers tokenization and context windows - crucial concepts for prompt engineering.

## What are Tokens?

Tokens are the basic units that language models work with. A token might be:
- A complete word: "hello" = 1 token
- Part of a word: "understanding" = "under" + "standing" = 2 tokens
- Punctuation: "!" = 1 token
- Special characters: spaces, newlines

**Rule of thumb:** 1 token ≈ 4 characters or ¾ of a word in English.

## Tokenization Examples

| Text | Token Count |
|------|-------------|
| "Hello" | 1 |
| "Hello, world!" | 4 |
| "Artificial Intelligence" | 2-3 |
| "supercalifragilistic" | 5-6 |

## Why Tokens Matter

### 1. Cost
API pricing is per token. Understanding token counts helps you:
- Estimate costs before running
- Optimize prompts for efficiency
- Choose appropriate model tiers

### 2. Context Limits
Every model has a maximum context window:
- GPT-3.5: 4K or 16K tokens
- GPT-4: 8K, 32K, or 128K tokens
- Claude 3: Up to 200K tokens
- Gemini 1.5: Up to 1M tokens

### 3. Output Quality
Longer inputs with more context generally produce better outputs, but only if the context is relevant.

## The Context Window

Think of the context window as the model's "working memory" - everything it can see and consider when generating a response.

\`\`\`
[System Prompt] + [Your Message] + [AI Response] = Total Context
\`\`\`

### What Happens When You Hit the Limit?

When a conversation exceeds the context window:
- Oldest messages get "forgotten"
- The model loses earlier context
- Responses may become inconsistent

## Strategies for Long Conversations

### 1. Summarization
Periodically ask the AI to summarize the conversation, then start fresh with the summary.

### 2. Chunking
Break large documents into sections and process each separately.

### 3. Focus
Keep conversations focused on one topic. Start new chats for new topics.

### 4. Reference Documents
Instead of pasting everything, paste only the relevant sections.

## Practical Token Counting

### Estimating Tokens
- 1 page of text ≈ 250-300 words ≈ 350-400 tokens
- 1 code file (100 lines) ≈ 400-600 tokens
- Average email ≈ 100-200 tokens

### Tools
- OpenAI Tokenizer: platform.openai.com/tokenizer
- tiktoken Python library
- Many AI tools show token counts

## Optimizing Your Prompts

### Do:
- Be concise but complete
- Remove unnecessary filler
- Use clear, direct language
- Structure with headers and lists

### Don't:
- Include irrelevant context
- Repeat information
- Use overly verbose language
- Paste entire files when you only need a section

## Exercise: Token Awareness

Take this prompt and optimize it:

**Before (verbose):**
"I was wondering if you could possibly help me out with something. I need to write an email to my boss about taking vacation time next week. Could you please write a professional email for me that I could send to request time off? The dates I'm looking for are Monday through Friday of next week."

**After (optimized):**
"Write a professional email to my boss requesting vacation time for Monday-Friday next week."

Both achieve the same result, but the optimized version uses ~75% fewer tokens.

## Summary

- Tokens are how AI "sees" text - usually word parts
- Context windows limit what the model can consider
- Understanding tokens helps optimize costs and quality
- Strategic context management improves results

In the next lesson, we'll compare different AI models to help you choose the right tool for each task.`
        },
        {
          id: "model-comparison",
          title: "Comparing AI Models",
          description: "GPT vs Claude vs Gemini vs Open Source",
          duration: "35 min",
          type: "article",
          status: "available",
          content: `# Comparing AI Models

With so many AI models available, how do you choose the right one? This lesson provides a comprehensive comparison to help you make informed decisions.

## The Major Players

### OpenAI (GPT Series)

**GPT-4 / GPT-4 Turbo**
- Best overall reasoning capabilities
- Excellent code generation
- Strong at following complex instructions
- Multimodal (can analyze images)

**GPT-3.5 Turbo**
- Fast and cost-effective
- Good for simpler tasks
- Great for high-volume applications

**Pricing:** GPT-4 is ~20x more expensive than GPT-3.5

### Anthropic (Claude Series)

**Claude 3 Opus**
- Highest capability, rivals GPT-4
- Excellent at nuanced tasks
- Very good at following instructions precisely

**Claude 3 Sonnet**
- Balance of capability and speed
- Great for most business applications

**Claude 3 Haiku**
- Fastest, most cost-effective
- Good for simple tasks at scale

**Key Advantage:** 200K token context window - process entire books!

### Google (Gemini Series)

**Gemini Ultra**
- Google's most capable model
- Strong multimodal capabilities
- Integrated with Google services

**Gemini Pro**
- Good balance of performance
- Available in Google AI Studio

**Key Advantage:** Deep integration with Google ecosystem

### Open Source Models

**Llama 3 (Meta)**
- Free to use and modify
- Can run locally
- Multiple sizes (8B, 70B, 405B)

**Mistral / Mixtral**
- Excellent efficiency
- Strong performance for size
- European company (GDPR friendly)

**Advantages:**
- No API costs (if self-hosted)
- Full control over data
- Customizable

**Disadvantages:**
- Requires technical setup
- Need GPU for large models
- Generally less capable than frontier models

## Model Selection Guide

### Choose GPT-4 when:
- Complex reasoning is required
- Code generation/debugging
- You need reliable, consistent outputs
- Budget isn't the primary concern

### Choose Claude when:
- Processing long documents
- Nuanced writing/analysis needed
- Following specific formatting instructions
- Safety and accuracy are paramount

### Choose Gemini when:
- Working within Google ecosystem
- Multimodal tasks (images + text)
- Need real-time information
- Using Google Workspace

### Choose Open Source when:
- Data privacy is critical
- Running many requests (cost savings)
- Need to customize the model
- Building offline applications

## Benchmarks (as of 2024)

| Task | GPT-4 | Claude 3 | Gemini | Llama 3 |
|------|-------|----------|--------|---------|
| Reasoning | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★★☆ |
| Coding | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★★☆ |
| Writing | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| Speed | ★★★☆☆ | ★★★★☆ | ★★★★★ | ★★★★☆ |
| Cost | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ |

## Real-World Scenarios

### Scenario 1: Building a Chatbot
**Best choice:** GPT-3.5 Turbo or Claude Haiku
**Why:** High volume, lower complexity, cost-effective

### Scenario 2: Analyzing Legal Documents
**Best choice:** Claude 3 Opus
**Why:** Long context, nuanced understanding, accuracy

### Scenario 3: Code Review System
**Best choice:** GPT-4
**Why:** Best code understanding, detailed explanations

### Scenario 4: Private Healthcare App
**Best choice:** Llama 3 (self-hosted)
**Why:** Data never leaves your servers, HIPAA compliance

## Hands-On Comparison

Try this prompt on multiple models:

"Analyze this ethical dilemma: A self-driving car must choose between hitting one pedestrian or swerving to hit two. What factors should influence this decision? Consider multiple ethical frameworks."

Notice differences in:
- Depth of analysis
- Ethical frameworks mentioned
- Nuance and hedging
- Structure of response

## Summary

- No single model is best for everything
- Match model capabilities to your specific needs
- Consider cost, speed, privacy, and capability
- Open source offers control and cost savings
- Frontier models (GPT-4, Claude Opus) remain most capable

Congratulations! You've completed the Foundations module. Next, we'll dive deep into Prompt Engineering - the art of communicating effectively with AI.`
        },
      ],
    },
    {
      id: "prompt-engineering",
      title: "Module 2: Prompt Engineering",
      description: "Master the art of communicating with AI",
      lessons: [
        {
          id: "prompt-basics",
          title: "Prompt Engineering Fundamentals",
          description: "Core principles of effective prompts",
          duration: "30 min",
          type: "article",
          status: "available",
          content: `# Prompt Engineering Fundamentals

Prompt engineering is the art and science of communicating effectively with AI. A well-crafted prompt can be the difference between a useless response and a brilliant one.

## The Anatomy of a Great Prompt

A effective prompt typically includes:

1. **Context:** Background information the AI needs
2. **Task:** What you want the AI to do
3. **Format:** How you want the output structured
4. **Constraints:** Limitations or requirements
5. **Examples:** (Optional) Sample inputs/outputs

## The CRISPE Framework

**C**apacity: What role should the AI play?
**R**equest: What do you want it to do?
**I**nput: What information are you providing?
**S**tructure: How should the output be formatted?
**P**urpose: Why do you need this?
**E**xamples: What does good output look like?

### Example Using CRISPE

**Weak prompt:**
"Write about marketing"

**Strong prompt using CRISPE:**
"You are an experienced digital marketing consultant (Capacity). Create a 30-day social media content calendar (Request) for a new coffee shop in Portland targeting young professionals (Input). Present it as a table with columns for Date, Platform, Content Type, and Caption Idea (Structure). This will be used to launch our social media presence and attract local customers (Purpose). For example, Day 1 might be: Instagram, Photo, Shop interior, 'Welcome to your new morning ritual' (Example)."

## Key Principles

### 1. Be Specific
Vague prompts get vague answers.

❌ "Help me with my resume"
✅ "Review my resume for a Senior Software Engineer role at a FAANG company. Focus on: 1) Quantifying achievements, 2) Keywords for ATS systems, 3) Technical skills formatting"

### 2. Provide Context
Give the AI the information it needs.

❌ "Is this code good?"
✅ "Review this Python function for a production web scraper. Requirements: must handle rate limits, retry on failure, and log errors. [code here]"

### 3. Specify Format
Tell the AI exactly how you want the output.

❌ "Give me some ideas"
✅ "Give me 5 blog post ideas about productivity. For each, include: Title (max 60 chars), 2-sentence hook, target keyword, estimated word count"

### 4. Use Delimiters
Clearly separate different parts of your prompt.

\`\`\`
Analyze the following customer review:
---
[review text here]
---
Provide: sentiment (positive/negative/neutral), key complaints, suggested actions
\`\`\`

### 5. Assign a Role
Tell the AI who it should be.

"You are a senior tax accountant with 20 years of experience in small business taxation. A client asks..."

## Common Prompt Patterns

### The Expert Pattern
"You are a [expert type] with [years] of experience in [field]. Your task is to..."

### The Step-by-Step Pattern
"Walk me through [task] step by step. Before each step, explain why it's necessary."

### The Critique Pattern
"Review [item] and provide: 3 strengths, 3 weaknesses, and specific suggestions for improvement."

### The Format Pattern
"Format your response as:
- Summary (2-3 sentences)
- Key Points (bullet list)
- Action Items (numbered list)
- Questions to Consider"

## Exercise: Improve These Prompts

Transform these weak prompts into strong ones:

1. "Write a email" → ?
2. "Fix this bug" → ?
3. "Explain AI" → ?

**Suggested improvements:**

1. "Write a professional email to a client apologizing for a delayed shipment. Tone: sincere but confident. Include: acknowledgment of the issue, explanation (not excuse), concrete resolution timeline, and offer of compensation. Max 150 words."

2. "Debug this JavaScript function that should filter an array of users by age > 18, but returns an empty array. Code: [paste code]. Expected: users over 18. Actual: empty array. Explain the bug and provide corrected code."

3. "Explain how neural networks learn, for someone who understands basic algebra but has no programming experience. Use an analogy to human learning. Include a simple diagram description. Max 300 words."

## Summary

- Great prompts are specific, contextual, and structured
- Use frameworks like CRISPE to build comprehensive prompts
- Delimiters and formatting improve clarity
- Role assignment helps set the right context
- Practice transforms good prompters into great ones

Next, we'll explore advanced prompting techniques like chain-of-thought and few-shot learning.`
        },
        {
          id: "advanced-prompts",
          title: "Advanced Prompting Techniques",
          description: "Chain-of-thought, few-shot learning, and more",
          duration: "40 min",
          type: "article",
          status: "locked",
          content: `Content for Advanced Prompting Techniques...`
        },
        {
          id: "system-prompts",
          title: "System Prompts & Personas",
          description: "Creating consistent AI behaviors",
          duration: "25 min",
          type: "article",
          status: "locked",
          content: `Content for System Prompts & Personas...`
        },
        {
          id: "prompt-templates",
          title: "Building Prompt Templates",
          description: "Reusable patterns for common tasks",
          duration: "35 min",
          type: "project",
          status: "locked",
          content: `Content for Building Prompt Templates...`
        },
      ],
    },
    {
      id: "applications",
      title: "Module 3: Practical Applications",
      description: "Real-world AI use cases and projects",
      lessons: [
        {
          id: "content-creation",
          title: "AI for Content Creation",
          description: "Writing, editing, and creative work",
          duration: "30 min",
          type: "article",
          status: "locked",
          content: `Content for AI for Content Creation...`
        },
        {
          id: "code-generation",
          title: "Code Generation & Debugging",
          description: "Using AI as a coding assistant",
          duration: "45 min",
          type: "project",
          status: "locked",
          content: `Content for Code Generation & Debugging...`
        },
        {
          id: "data-analysis",
          title: "Data Analysis with AI",
          description: "Extracting insights from data",
          duration: "35 min",
          type: "project",
          status: "locked",
          content: `Content for Data Analysis with AI...`
        },
        {
          id: "automation",
          title: "AI-Powered Automation",
          description: "Building workflows with AI",
          duration: "40 min",
          type: "project",
          status: "locked",
          content: `Content for AI-Powered Automation...`
        },
      ],
    },
    {
      id: "ethics-future",
      title: "Module 4: Ethics & Future",
      description: "Responsible AI and what's next",
      lessons: [
        {
          id: "ai-ethics",
          title: "Ethics and Bias in AI",
          description: "Understanding and mitigating AI bias",
          duration: "30 min",
          type: "article",
          status: "locked",
          content: `Content for Ethics and Bias in AI...`
        },
        {
          id: "legal-implications",
          title: "Legal & Privacy Considerations",
          description: "Copyright, data privacy, and compliance",
          duration: "25 min",
          type: "article",
          status: "locked",
          content: `Content for Legal & Privacy Considerations...`
        },
        {
          id: "future-ai",
          title: "The Future of AI Collaboration",
          description: "Human-AI partnership in work",
          duration: "30 min",
          type: "video",
          status: "locked",
          content: `Content for The Future of AI Collaboration...`
        },
        {
          id: "staying-current",
          title: "Staying Current in AI",
          description: "Resources and communities to follow",
          duration: "20 min",
          type: "article",
          status: "locked",
          content: `Content for Staying Current in AI...`
        },
      ],
    },
  ],
};

// Helper functions
export function getLessonById(lessonId: string): Lesson | undefined {
  for (const module of course.modules) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getModuleByLessonId(lessonId: string): Module | undefined {
  return course.modules.find(m => m.lessons.some(l => l.id === lessonId));
}

export function getProgress(): { completed: number; total: number; percentage: number } {
  const total = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completed = course.modules.reduce(
    (acc, m) => acc + m.lessons.filter(l => l.status === 'completed').length,
    0
  );
  return { completed, total, percentage: Math.round((completed / total) * 100) };
}

export function getAllLessons(): Lesson[] {
  return course.modules.flatMap(m => m.lessons);
}
