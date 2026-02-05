import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  BookOpen,
  FileText,
  Video,
  Code,
  Zap,
  Play,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  getCourseById,
  getLessonById,
  type Lesson,
  type ContentType,
} from "@/data/knowledgeData";

const contentTypeConfig: Record<ContentType, { icon: typeof FileText; label: string; color: string }> = {
  article: { icon: FileText, label: "Article", color: "text-primary" },
  video: { icon: Video, label: "Video", color: "text-hot" },
  interactive: { icon: Code, label: "Interactive", color: "text-success" },
  project: { icon: Zap, label: "Project", color: "text-warning" },
};

// Simple markdown renderer for lesson content
function renderMarkdown(content: string): React.ReactNode {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeLanguage = "";
  let inTable = false;
  let tableRows: string[][] = [];

  const processInlineMarkdown = (text: string): React.ReactNode => {
    // Bold
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  lines.forEach((line, index) => {
    // Code blocks
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeContent = [];
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={`code-${index}`} className="my-4 rounded-lg bg-slate-900 overflow-hidden">
            {codeLanguage && (
              <div className="px-4 py-2 bg-slate-800 text-xs text-slate-400 font-mono">
                {codeLanguage}
              </div>
            )}
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono text-slate-300">
                {codeContent.join("\n")}
              </code>
            </pre>
          </div>
        );
      }
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    // Tables
    if (line.startsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split("|").filter((c) => c.trim() !== "");
      if (!line.includes("---")) {
        tableRows.push(cells.map((c) => c.trim()));
      }
      return;
    } else if (inTable) {
      inTable = false;
      if (tableRows.length > 0) {
        const [header, ...body] = tableRows;
        elements.push(
          <div key={`table-${index}`} className="my-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {header.map((cell, i) => (
                    <th key={i} className="px-4 py-2 text-left text-sm font-semibold">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-sm">
                        {processInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    }

    // Empty lines
    if (line.trim() === "") {
      elements.push(<div key={`space-${index}`} className="h-4" />);
      return;
    }

    // Headers
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${index}`} className="text-2xl font-bold mt-8 mb-4 font-mono">
          {line.slice(2)}
        </h1>
      );
      return;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${index}`} className="text-xl font-bold mt-6 mb-3 font-mono text-primary">
          {line.slice(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${index}`} className="text-lg font-semibold mt-4 mb-2">
          {line.slice(4)}
        </h3>
      );
      return;
    }

    // Lists
    if (line.startsWith("- ")) {
      elements.push(
        <li key={`li-${index}`} className="ml-4 text-muted-foreground flex items-start gap-2">
          <span className="text-primary mt-2">•</span>
          <span>{processInlineMarkdown(line.slice(2))}</span>
        </li>
      );
      return;
    }

    // Numbered lists
    const numberedMatch = line.match(/^(\d+)\. /);
    if (numberedMatch) {
      elements.push(
        <li key={`ol-${index}`} className="ml-4 text-muted-foreground flex items-start gap-2">
          <span className="text-primary font-mono">{numberedMatch[1]}.</span>
          <span>{processInlineMarkdown(line.slice(numberedMatch[0].length))}</span>
        </li>
      );
      return;
    }

    // Regular paragraphs
    elements.push(
      <p key={`p-${index}`} className="text-muted-foreground leading-relaxed">
        {processInlineMarkdown(line)}
      </p>
    );
  });

  return elements;
}

export default function LessonViewer() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const course = courseId ? getCourseById(courseId) : undefined;
  const lessonData = courseId && lessonId ? getLessonById(courseId, lessonId) : undefined;

  // Get all lessons for navigation
  const allLessons = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap((m) =>
      m.lessons.map((l) => ({ lesson: l, module: m }))
    );
  }, [course]);

  const currentIndex = allLessons.findIndex((l) => l.lesson.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  if (!course || !lessonData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Lesson Not Found</h1>
          <p className="text-muted-foreground mb-4">The requested lesson does not exist.</p>
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

  const { lesson, module } = lessonData;
  const contentType = contentTypeConfig[lesson.contentType];
  const ContentIcon = contentType.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        {/* Sidebar - Course Navigation */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-80 bg-card border-r border-border transform transition-transform duration-300 lg:relative lg:translate-x-0 pt-16",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="h-full overflow-y-auto p-4">
            {/* Course Title */}
            <button
              onClick={() => navigate(`/learn/${course.id}`)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              {course.title}
            </button>

            {/* Modules */}
            <div className="space-y-4">
              {course.modules.map((m) => (
                <div key={m.id}>
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {m.title}
                    </span>
                  </div>
                  <div className="space-y-1 ml-6">
                    {m.lessons.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => l.status !== "locked" && navigate(`/learn/${course.id}/${l.id}`)}
                        disabled={l.status === "locked"}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                          l.id === lesson.id
                            ? "bg-primary/10 text-primary"
                            : l.status === "locked"
                            ? "text-muted-foreground/50 cursor-not-allowed"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {l.status === "completed" ? (
                          <CheckCircle2 className="h-3 w-3 text-success flex-shrink-0" />
                        ) : l.status === "locked" ? (
                          <div className="h-3 w-3 rounded-full border border-muted-foreground/30 flex-shrink-0" />
                        ) : (
                          <div className="h-3 w-3 rounded-full border border-primary flex-shrink-0" />
                        )}
                        <span className="truncate">{l.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-4 left-4 z-50 lg:hidden flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-3xl mx-auto px-4 py-8 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <button onClick={() => navigate("/learn")} className="hover:text-foreground">
                Knowledge Hub
              </button>
              <ChevronRight className="h-3 w-3" />
              <button onClick={() => navigate(`/learn/${course.id}`)} className="hover:text-foreground">
                {course.title}
              </button>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{module.title}</span>
            </div>

            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("flex items-center gap-1 text-xs font-medium", contentType.color)}>
                  <ContentIcon className="h-4 w-4" />
                  {contentType.label}
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {lesson.duration}
                </span>
                {lesson.status === "completed" && (
                  <span className="flex items-center gap-1 text-xs text-success">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold font-mono mb-2">{lesson.title}</h1>
              <p className="text-muted-foreground">{lesson.description}</p>
            </div>

            {/* Lesson Content */}
            <div className="prose prose-invert max-w-none">
              {lesson.content ? (
                <div className="space-y-2">{renderMarkdown(lesson.content)}</div>
              ) : (
                <div className="rounded-xl border border-border bg-card p-12 text-center">
                  <ContentIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold mb-2">Content Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    This lesson content is being prepared. Check back soon!
                  </p>
                </div>
              )}
            </div>

            {/* Mark Complete Button */}
            {lesson.status !== "completed" && (
              <div className="mt-8 pt-8 border-t border-border">
                <button className="flex items-center gap-2 rounded-lg bg-success px-6 py-3 text-sm font-medium text-success-foreground hover:bg-success/90 transition-colors">
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Complete
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
              {prevLesson ? (
                <button
                  onClick={() => navigate(`/learn/${course.id}/${prevLesson.lesson.id}`)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="font-medium">{prevLesson.lesson.title}</p>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextLesson && nextLesson.lesson.status !== "locked" ? (
                <button
                  onClick={() => navigate(`/learn/${course.id}/${nextLesson.lesson.id}`)}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="font-medium">{nextLesson.lesson.title}</p>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/learn/${course.id}`)}
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Back to Course</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
