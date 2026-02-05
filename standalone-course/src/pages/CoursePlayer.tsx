import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Lock,
  Play,
  Clock,
  BookOpen,
  FileText,
  Video,
  Code,
  Trophy,
  Home,
} from 'lucide-react';
import { course, getLessonById, getModuleByLessonId, getAllLessons, getProgress } from '../data/courseData';
import type { Lesson, ContentType } from '../data/courseData';
import { cn } from '../lib/utils';

const contentTypeIcons: Record<ContentType, typeof FileText> = {
  article: FileText,
  video: Video,
  quiz: Code,
  project: Code,
};

// Simple markdown renderer
function renderMarkdown(content: string): React.ReactNode {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeLanguage = '';
  let inTable = false;
  let tableRows: string[][] = [];

  lines.forEach((line, index) => {
    // Code blocks
    if (line.startsWith('```')) {
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
                {codeContent.join('\n')}
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
    if (line.startsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      const cells = line.split('|').filter((c) => c.trim() !== '');
      if (!line.includes('---')) {
        tableRows.push(cells.map((c) => c.trim()));
      }
      return;
    } else if (inTable) {
      inTable = false;
      if (tableRows.length > 0) {
        const [header, ...body] = tableRows;
        elements.push(
          <div key={`table-${index}`} className="my-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  {header.map((cell, i) => (
                    <th key={i} className="px-4 py-2 text-left font-semibold text-slate-200">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-slate-800">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-slate-400">
                        {cell}
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
    if (line.trim() === '') {
      return;
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${index}`} className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
          {line.slice(2)}
        </h1>
      );
      return;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${index}`} className="text-xl md:text-2xl font-bold mt-8 mb-3 text-indigo-400">
          {line.slice(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${index}`} className="text-lg font-semibold mt-6 mb-2 text-white">
          {line.slice(4)}
        </h3>
      );
      return;
    }

    // Bold text
    const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    // Inline code
    const codeProcessed = boldProcessed.replace(
      /`([^`]+)`/g,
      '<code class="bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-300">$1</code>'
    );

    // Lists
    if (line.startsWith('- ')) {
      elements.push(
        <li
          key={`li-${index}`}
          className="ml-4 text-slate-300 flex items-start gap-2 mb-2"
          dangerouslySetInnerHTML={{ __html: `<span class="text-indigo-400 mt-2">•</span><span>${codeProcessed.slice(2)}</span>` }}
        />
      );
      return;
    }

    // Numbered lists
    const numberedMatch = line.match(/^(\d+)\. /);
    if (numberedMatch) {
      elements.push(
        <li
          key={`ol-${index}`}
          className="ml-4 text-slate-300 flex items-start gap-2 mb-2"
          dangerouslySetInnerHTML={{
            __html: `<span class="text-indigo-400 font-mono">${numberedMatch[1]}.</span><span>${codeProcessed.slice(numberedMatch[0].length)}</span>`,
          }}
        />
      );
      return;
    }

    // Regular paragraphs
    elements.push(
      <p
        key={`p-${index}`}
        className="text-slate-300 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: codeProcessed }}
      />
    );
  });

  return elements;
}

export default function CoursePlayer() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const allLessons = getAllLessons();
  const progress = getProgress();

  // Find first available lesson or current lesson
  useEffect(() => {
    if (lessonId) {
      const lesson = getLessonById(lessonId);
      if (lesson && lesson.status !== 'locked') {
        setCurrentLesson(lesson);
      }
    } else {
      // Find first available lesson
      const firstAvailable = allLessons.find((l) => l.status === 'available');
      if (firstAvailable) {
        setCurrentLesson(firstAvailable);
        navigate(`/lesson/${firstAvailable.id}`, { replace: true });
      }
    }
  }, [lessonId, navigate]);

  const currentIndex = currentLesson ? allLessons.findIndex((l) => l.id === currentLesson.id) : 0;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const currentModule = currentLesson ? getModuleByLessonId(currentLesson.id) : null;

  const handleLessonSelect = (lesson: Lesson) => {
    if (lesson.status !== 'locked') {
      setCurrentLesson(lesson);
      navigate(`/lesson/${lesson.id}`);
      setSidebarOpen(false);
    }
  };

  const ContentIcon = currentLesson ? contentTypeIcons[currentLesson.type] : FileText;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-80 bg-slate-950 border-r border-slate-800 transform transition-transform duration-300 lg:relative lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm">{course.title}</h2>
              <p className="text-xs text-slate-500">{progress.percentage}% complete</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* Course Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {course.modules.map((module, moduleIndex) => (
            <div key={module.id} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-mono text-indigo-400">
                  {moduleIndex + 1}
                </span>
                <h3 className="text-sm font-semibold text-slate-300 truncate">{module.title}</h3>
              </div>
              <div className="space-y-1 ml-8">
                {module.lessons.map((lesson) => {
                  const LessonIcon = contentTypeIcons[lesson.type];
                  const isActive = currentLesson?.id === lesson.id;
                  const isLocked = lesson.status === 'locked';
                  const isCompleted = lesson.status === 'completed';

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonSelect(lesson)}
                      disabled={isLocked}
                      className={cn(
                        'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-colors',
                        isActive && 'bg-indigo-500/20 text-indigo-300',
                        !isActive && !isLocked && 'text-slate-400 hover:bg-slate-800 hover:text-white',
                        isLocked && 'text-slate-600 cursor-not-allowed'
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <LessonIcon className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span className="truncate flex-1">{lesson.title}</span>
                      <span className="text-xs text-slate-500">{lesson.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Certificate Link */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-sm">Certificate</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Complete all lessons to earn your certificate
            </p>
            <button
              onClick={() => navigate('/certificate')}
              className="w-full px-3 py-2 rounded-lg bg-slate-800 text-sm hover:bg-slate-700 transition-colors"
            >
              View Certificate
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-slate-400 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>
              {currentModule && (
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500">{currentModule.title}</p>
                  <p className="font-semibold text-sm">{currentLesson?.title}</p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              {currentLesson?.duration}
            </div>
          </div>
        </header>

        {/* Lesson Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-8 md:px-8">
            {currentLesson ? (
              <article className="animate-fade-in">
                {/* Lesson Meta */}
                <div className="flex items-center gap-3 mb-6 text-sm">
                  <span className={cn(
                    'flex items-center gap-1.5 px-3 py-1 rounded-full',
                    currentLesson.type === 'article' && 'bg-blue-500/10 text-blue-400',
                    currentLesson.type === 'video' && 'bg-red-500/10 text-red-400',
                    currentLesson.type === 'project' && 'bg-green-500/10 text-green-400',
                    currentLesson.type === 'quiz' && 'bg-purple-500/10 text-purple-400'
                  )}>
                    <ContentIcon className="w-4 h-4" />
                    {currentLesson.type.charAt(0).toUpperCase() + currentLesson.type.slice(1)}
                  </span>
                </div>

                {/* Lesson Content */}
                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(currentLesson.content)}
                </div>

                {/* Mark Complete */}
                {currentLesson.status === 'available' && (
                  <div className="mt-12 pt-8 border-t border-slate-800">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 transition-colors font-medium">
                      <CheckCircle className="w-5 h-5" />
                      Mark as Complete
                    </button>
                  </div>
                )}
              </article>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 mx-auto text-slate-600 mb-4" />
                <p className="text-slate-400">Select a lesson to begin</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <footer className="sticky bottom-0 bg-slate-900/95 backdrop-blur border-t border-slate-800 px-4 py-3">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {prevLesson && prevLesson.status !== 'locked' ? (
              <button
                onClick={() => handleLessonSelect(prevLesson)}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous:</span>
                <span className="max-w-[150px] truncate">{prevLesson.title}</span>
              </button>
            ) : (
              <div />
            )}
            {nextLesson && nextLesson.status !== 'locked' ? (
              <button
                onClick={() => handleLessonSelect(nextLesson)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium"
              >
                <span className="hidden sm:inline">Next:</span>
                <span className="max-w-[150px] truncate">{nextLesson.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/certificate')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 transition-colors text-sm font-medium"
              >
                <Trophy className="w-4 h-4" />
                Get Certificate
              </button>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}
