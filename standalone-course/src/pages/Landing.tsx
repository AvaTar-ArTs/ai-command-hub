import { useNavigate } from 'react-router-dom';
import {
  Brain,
  Sparkles,
  Code,
  Zap,
  CheckCircle,
  Clock,
  BookOpen,
  Star,
  Users,
  ArrowRight,
  Play,
  Trophy,
  Target,
  Shield,
} from 'lucide-react';
import { course, getProgress } from '../data/courseData';
import { cn } from '../lib/utils';

const features = [
  {
    icon: Brain,
    title: 'Master LLM Fundamentals',
    description: 'Understand how GPT, Claude, and other AI models actually work under the hood.',
  },
  {
    icon: Sparkles,
    title: 'Prompt Engineering',
    description: 'Learn techniques to get consistent, high-quality outputs from any AI model.',
  },
  {
    icon: Code,
    title: 'Hands-On Projects',
    description: 'Build real applications and workflows using AI tools and APIs.',
  },
  {
    icon: Shield,
    title: 'Ethics & Safety',
    description: 'Understand bias, privacy concerns, and responsible AI practices.',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    text: "This course transformed how I work with AI. I went from confused prompts to building automated workflows for my team.",
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Freelance Developer',
    text: "Finally, a course that explains AI without the hype. Practical, actionable, and immediately useful.",
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    text: "The prompt engineering module alone was worth it. I've 10x'd my content output while improving quality.",
    rating: 5,
  },
];

const outcomes = [
  'Understand how Large Language Models work',
  'Write prompts that get consistent, quality results',
  'Choose the right AI model for each task',
  'Build AI-powered automation workflows',
  'Navigate ethical considerations confidently',
  'Stay current as AI technology evolves',
];

export default function Landing() {
  const navigate = useNavigate();
  const progress = getProgress();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono font-bold text-lg">Zero<span className="text-indigo-400">To</span>AI</span>
          </div>
          {progress.completed > 0 && (
            <button
              onClick={() => navigate('/course')}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium"
            >
              Continue Learning
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">Comprehensive AI Course</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Generative AI</span>
              <br />from Scratch
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              A comprehensive introduction to LLMs and Generative AI. Learn the fundamentals, master prompt engineering, and build real-world AI applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={() => navigate('/course')}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all text-lg font-semibold shadow-lg shadow-indigo-500/25"
              >
                <Play className="w-5 h-5" />
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{course.duration} of content</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <p className="text-3xl font-bold text-indigo-400">{course.lessonsCount}</p>
                <p className="text-sm text-slate-500">Lessons</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">{course.modules.length}</p>
                <p className="text-sm text-slate-500">Modules</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400">4</p>
                <p className="text-sm text-slate-500">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From foundational concepts to advanced techniques, this course covers everything you need to become proficient with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-slate-400">
              {course.modules.length} modules • {course.lessonsCount} lessons • {course.duration}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {course.modules.map((module, moduleIndex) => (
              <div
                key={module.id}
                className="rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden"
              >
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center font-mono font-bold text-indigo-400">
                      {moduleIndex + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="text-sm text-slate-400">{module.lessons.length} lessons</p>
                    </div>
                  </div>
                  <BookOpen className="w-5 h-5 text-slate-500" />
                </div>
                <div className="border-t border-slate-700 p-4 bg-slate-900/50">
                  <div className="space-y-2">
                    {module.lessons.map((lesson, i) => (
                      <div key={lesson.id} className="flex items-center gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-400">
                          {i + 1}
                        </span>
                        <span className={cn(
                          lesson.status === 'locked' ? 'text-slate-500' : 'text-slate-300'
                        )}>
                          {lesson.title}
                        </span>
                        <span className="ml-auto text-xs text-slate-500">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">By the End of This Course, You'll Be Able To:</h2>
              <div className="space-y-4">
                {outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Certificate of Completion</h3>
                    <p className="text-slate-400 text-sm">Showcase your achievement</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Complete all lessons and projects to earn your Zero to AI certificate. Share it on LinkedIn and showcase your new AI skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Join thousands of students who have transformed their careers with AI skills.
          </p>
          <button
            onClick={() => navigate('/course')}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all text-lg font-semibold shadow-lg shadow-indigo-500/25"
          >
            Start Learning Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-slate-500 mt-4">Free access • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-400" />
              <span className="font-mono font-bold">Zero<span className="text-indigo-400">To</span>AI</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2024 AvatarArts Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
