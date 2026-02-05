import { Header } from "@/components/dashboard/Header";
import {
  BookOpen,
  Clock,
  Flame,
  GraduationCap,
  Play,
  ChevronRight,
  Sparkles,
  Trophy,
  Target,
  Zap,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  courses,
  learningStats,
  calculateCourseProgress,
  type Course,
  type DifficultyLevel,
} from "@/data/knowledgeData";

const difficultyConfig: Record<DifficultyLevel, { label: string; color: string; bg: string }> = {
  beginner: { label: "Beginner", color: "text-success", bg: "bg-success/10" },
  intermediate: { label: "Intermediate", color: "text-warning", bg: "bg-warning/10" },
  advanced: { label: "Advanced", color: "text-hot", bg: "bg-hot/10" },
  expert: { label: "Expert", color: "text-destructive", bg: "bg-destructive/10" },
};

const colorConfig: Record<string, { border: string; bg: string; glow: string }> = {
  primary: { border: "border-primary/30", bg: "bg-primary/5", glow: "shadow-[0_0_30px_hsl(var(--primary)/0.1)]" },
  hot: { border: "border-hot/30", bg: "bg-hot/5", glow: "shadow-[0_0_30px_hsl(var(--hot)/0.1)]" },
  accent: { border: "border-accent/30", bg: "bg-accent/5", glow: "shadow-[0_0_30px_hsl(var(--accent)/0.1)]" },
  warning: { border: "border-warning/30", bg: "bg-warning/5", glow: "shadow-[0_0_30px_hsl(var(--warning)/0.1)]" },
  success: { border: "border-success/30", bg: "bg-success/5", glow: "shadow-[0_0_30px_hsl(var(--success)/0.1)]" },
};

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

function CourseCard({ course, onClick }: CourseCardProps) {
  const progress = calculateCourseProgress(course);
  const difficulty = difficultyConfig[course.difficulty];
  const colors = colorConfig[course.color] || colorConfig.primary;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col rounded-xl border p-6 text-left transition-all hover:scale-[1.02]",
        colors.border,
        colors.bg,
        colors.glow
      )}
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 flex gap-2">
        {course.new && (
          <span className="flex items-center gap-1 rounded-full bg-hot px-2 py-0.5 text-[10px] font-bold text-white">
            <Sparkles className="h-3 w-3" />
            NEW
          </span>
        )}
        {course.featured && !course.new && (
          <span className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
            <Trophy className="h-3 w-3" />
            FEATURED
          </span>
        )}
      </div>

      {/* Icon */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl mb-4",
          course.color === "primary" && "bg-primary/20 text-primary",
          course.color === "hot" && "bg-hot/20 text-hot",
          course.color === "accent" && "bg-accent/20 text-accent",
          course.color === "warning" && "bg-warning/20 text-warning",
          course.color === "success" && "bg-success/20 text-success"
        )}
      >
        <course.icon className="h-6 w-6" />
      </div>

      {/* Content */}
      <h3 className="font-mono text-lg font-bold mb-1 group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3">{course.subtitle}</p>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", difficulty.bg, difficulty.color)}>
          {difficulty.label}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <BookOpen className="h-3 w-3" />
          {course.lessonsCount} lessons
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {course.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {course.tags.length > 3 && (
          <span className="text-[10px] text-muted-foreground">+{course.tags.length - 3}</span>
        )}
      </div>

      {/* Progress */}
      <div className="mt-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="font-mono text-xs font-bold">{progress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              progress > 0 ? "bg-primary" : "bg-muted"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="h-5 w-5 text-primary" />
      </div>
    </button>
  );
}

export default function KnowledgeHub() {
  const navigate = useNavigate();
  const featuredCourses = courses.filter((c) => c.featured);
  const allCourses = courses.filter((c) => !c.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <Header />

        <main className="container mx-auto max-w-7xl space-y-8 px-4 py-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-hot/5 p-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-hot/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h1 className="font-mono text-2xl font-bold">Knowledge Hub</h1>
                    <p className="text-sm text-muted-foreground">Master AI • Level Up Your Skills</p>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-lg">
                  Comprehensive courses on AI, automation, and optimization. From zero to expert with hands-on projects and real-world applications.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-lg bg-background/50 backdrop-blur p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-primary">{learningStats.totalCourses}</p>
                  <p className="text-xs text-muted-foreground">Courses</p>
                </div>
                <div className="rounded-lg bg-background/50 backdrop-blur p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-success">{learningStats.totalLessons}</p>
                  <p className="text-xs text-muted-foreground">Lessons</p>
                </div>
                <div className="rounded-lg bg-background/50 backdrop-blur p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-warning">{learningStats.totalHours}h</p>
                  <p className="text-xs text-muted-foreground">Content</p>
                </div>
                <div className="rounded-lg bg-background/50 backdrop-blur p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Flame className="h-5 w-5 text-hot" />
                    <p className="font-mono text-2xl font-bold text-hot">{learningStats.streak}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Learning */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Continue Learning</h2>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Zero to AI • Foundations</p>
                    <h3 className="font-medium">Understanding Tokens & Context</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground">20 min remaining</span>
                      <span className="flex items-center gap-1 text-xs text-success">
                        <CheckCircle2 className="h-3 w-3" />
                        2/4 completed
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/learn/zero-to-ai/understanding-tokens")}
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Continue
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Course Progress</span>
                  <span className="font-mono text-xs">12%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[12%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Courses */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-warning" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">Featured Courses</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => navigate(`/learn/${course.id}`)}
                />
              ))}
            </div>
          </section>

          {/* All Courses */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">All Courses</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => navigate(`/learn/${course.id}`)}
                />
              ))}
            </div>
          </section>

          {/* Learning Path CTA */}
          <section className="rounded-xl border border-success/30 bg-gradient-to-r from-success/5 via-card to-primary/5 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-success/20 text-success">
                  <Target className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold mb-1">Recommended Learning Path</h3>
                  <p className="text-sm text-muted-foreground max-w-lg">
                    Not sure where to start? Follow our curated path: Zero to AI → XEO Mastery → AI Engineering.
                    Build a complete AI skillset from fundamentals to production.
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/learn/zero-to-ai")}
                className="flex items-center gap-2 rounded-lg bg-success px-6 py-3 text-sm font-medium text-success-foreground hover:bg-success/90 transition-colors whitespace-nowrap"
              >
                Start Learning Path
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto max-w-7xl px-4">
            <p className="text-center text-xs text-muted-foreground">
              DEV_UNIVERSE Knowledge Hub • Powered by AvatarArts
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
