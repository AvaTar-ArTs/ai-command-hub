import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Play,
  CheckCircle2,
  Lock,
  ChevronRight,
  Trophy,
  Target,
  FileText,
  Video,
  Code,
  Zap,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getCourseById,
  calculateCourseProgress,
  type Course,
  type Module,
  type Lesson,
  type LessonStatus,
  type ContentType,
  type DifficultyLevel,
} from "@/data/knowledgeData";

const difficultyConfig: Record<DifficultyLevel, { label: string; color: string; bg: string }> = {
  beginner: { label: "Beginner", color: "text-success", bg: "bg-success/10" },
  intermediate: { label: "Intermediate", color: "text-warning", bg: "bg-warning/10" },
  advanced: { label: "Advanced", color: "text-hot", bg: "bg-hot/10" },
  expert: { label: "Expert", color: "text-destructive", bg: "bg-destructive/10" },
};

const statusConfig: Record<LessonStatus, { icon: typeof CheckCircle2; color: string; label: string }> = {
  completed: { icon: CheckCircle2, color: "text-success", label: "Completed" },
  in_progress: { icon: Play, color: "text-primary", label: "In Progress" },
  available: { icon: Play, color: "text-muted-foreground", label: "Start" },
  locked: { icon: Lock, color: "text-muted-foreground", label: "Locked" },
};

const contentTypeConfig: Record<ContentType, { icon: typeof FileText; label: string }> = {
  article: { icon: FileText, label: "Article" },
  video: { icon: Video, label: "Video" },
  interactive: { icon: Code, label: "Interactive" },
  project: { icon: Zap, label: "Project" },
};

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  courseId: string;
  onNavigate: (lessonId: string) => void;
}

function LessonItem({ lesson, index, courseId, onNavigate }: LessonItemProps) {
  const status = statusConfig[lesson.status];
  const StatusIcon = status.icon;
  const contentType = contentTypeConfig[lesson.contentType];
  const ContentIcon = contentType.icon;
  const isAccessible = lesson.status !== "locked";

  return (
    <button
      onClick={() => isAccessible && onNavigate(lesson.id)}
      disabled={!isAccessible}
      className={cn(
        "group flex w-full items-center gap-4 rounded-lg p-4 text-left transition-all",
        isAccessible ? "hover:bg-muted/50 cursor-pointer" : "opacity-60 cursor-not-allowed",
        lesson.status === "in_progress" && "bg-primary/5 border border-primary/20"
      )}
    >
      {/* Index */}
      <div
        className={cn(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold",
          lesson.status === "completed" && "bg-success/20 text-success",
          lesson.status === "in_progress" && "bg-primary/20 text-primary",
          lesson.status === "available" && "bg-muted text-muted-foreground",
          lesson.status === "locked" && "bg-muted text-muted-foreground"
        )}
      >
        {lesson.status === "completed" ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          index + 1
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={cn("font-medium truncate", !isAccessible && "text-muted-foreground")}>
            {lesson.title}
          </h4>
          {lesson.status === "in_progress" && (
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
              IN PROGRESS
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground truncate">{lesson.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ContentIcon className="h-3 w-3" />
            {contentType.label}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {lesson.duration}
          </span>
        </div>
      </div>

      {/* Action */}
      <div className="flex-shrink-0">
        {isAccessible ? (
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              lesson.status === "completed" && "bg-success/10 text-success",
              lesson.status === "in_progress" && "bg-primary text-primary-foreground",
              lesson.status === "available" && "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"
            )}
          >
            <StatusIcon className="h-4 w-4" />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Lock className="h-4 w-4" />
          </div>
        )}
      </div>
    </button>
  );
}

interface ModuleSectionProps {
  module: Module;
  moduleIndex: number;
  courseId: string;
  onNavigate: (lessonId: string) => void;
}

function ModuleSection({ module, moduleIndex, courseId, onNavigate }: ModuleSectionProps) {
  const completedLessons = module.lessons.filter((l) => l.status === "completed").length;
  const totalLessons = module.lessons.length;
  const progress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Module Header */}
      <div className="flex items-center justify-between p-5 border-b border-border bg-muted/30">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <module.icon className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Module {moduleIndex + 1}</span>
              {progress === 100 && (
                <CheckCircle2 className="h-4 w-4 text-success" />
              )}
            </div>
            <h3 className="font-mono font-semibold">{module.title}</h3>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm font-bold">{completedLessons}/{totalLessons}</p>
          <p className="text-xs text-muted-foreground">lessons</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Lessons */}
      <div className="divide-y divide-border">
        {module.lessons.map((lesson, index) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={index}
            courseId={courseId}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Course Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested course does not exist.</p>
          <button
            onClick={() => navigate("/learn")}
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Hub
          </button>
        </div>
      </div>
    );
  }

  const progress = calculateCourseProgress(course);
  const difficulty = difficultyConfig[course.difficulty];
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const completedLessons = allLessons.filter((l) => l.status === "completed").length;
  const inProgressLesson = allLessons.find((l) => l.status === "in_progress");
  const nextAvailableLesson = allLessons.find((l) => l.status === "available");
  const continueLesson = inProgressLesson || nextAvailableLesson;

  const handleLessonNavigate = (lessonId: string) => {
    navigate(`/learn/${course.id}/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <Header />

        <main className="container mx-auto max-w-5xl space-y-8 px-4 py-8">
          {/* Back button */}
          <button
            onClick={() => navigate("/learn")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Knowledge Hub</span>
          </button>

          {/* Course Hero */}
          <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <course.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", difficulty.bg, difficulty.color)}>
                        {difficulty.label}
                      </span>
                      {course.new && (
                        <span className="rounded-full bg-hot px-2 py-0.5 text-xs font-bold text-white">NEW</span>
                      )}
                    </div>
                    <h1 className="font-mono text-2xl font-bold mb-1">{course.title}</h1>
                    <p className="text-muted-foreground">{course.subtitle}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="font-mono text-2xl font-bold">{course.lessonsCount}</p>
                    <p className="text-xs text-muted-foreground">Lessons</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-2xl font-bold">{course.duration}</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-2xl font-bold text-success">{completedLessons}</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4 max-w-2xl">{course.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {course.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6 p-4 rounded-lg bg-background/50 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Course Progress</span>
                  <span className="font-mono text-sm font-bold">{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Continue Button */}
              {continueLesson && (
                <button
                  onClick={() => handleLessonNavigate(continueLesson.id)}
                  className="mt-6 flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  {inProgressLesson ? "Continue Learning" : "Start Course"}
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Modules */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-mono text-sm font-semibold uppercase tracking-wider">
                Course Content
              </h2>
              <span className="text-xs text-muted-foreground">
                • {course.modules.length} modules • {course.lessonsCount} lessons
              </span>
            </div>

            <div className="space-y-6">
              {course.modules.map((module, index) => (
                <ModuleSection
                  key={module.id}
                  module={module}
                  moduleIndex={index}
                  courseId={course.id}
                  onNavigate={handleLessonNavigate}
                />
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-6">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-center text-xs text-muted-foreground">
              DEV_UNIVERSE Knowledge Hub • {course.title}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
