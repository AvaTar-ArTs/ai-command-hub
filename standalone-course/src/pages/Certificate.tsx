import { useNavigate } from 'react-router-dom';
import {
  Brain,
  Award,
  Download,
  Share2,
  ArrowLeft,
  CheckCircle,
  Calendar,
  Clock,
  BookOpen,
} from 'lucide-react';
import { course, getProgress } from '../data/courseData';

export default function Certificate() {
  const navigate = useNavigate();
  const progress = getProgress();
  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const isComplete = progress.percentage === 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/course')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Course
          </button>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <span className="font-mono font-bold">Zero<span className="text-indigo-400">To</span>AI</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {isComplete ? (
          <>
            {/* Congratulations */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Congratulations! 🎉
              </h1>
              <p className="text-lg text-slate-400">
                You've successfully completed the Zero to AI course
              </p>
            </div>

            {/* Certificate */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-white text-slate-900 rounded-2xl p-8 md:p-12">
                {/* Certificate Border */}
                <div className="absolute inset-4 border-2 border-slate-200 rounded-xl pointer-events-none" />
                <div className="absolute inset-6 border border-slate-100 rounded-lg pointer-events-none" />

                <div className="relative text-center">
                  {/* Logo */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <Brain className="w-8 h-8 text-indigo-600" />
                    <span className="font-mono font-bold text-xl">Zero<span className="text-indigo-600">To</span>AI</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-2">
                    Certificate of Completion
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    {course.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-slate-600 mb-8">
                    {course.subtitle}
                  </p>

                  {/* Recipient */}
                  <div className="mb-8">
                    <p className="text-sm text-slate-500 mb-2">This certifies that</p>
                    <div className="border-b-2 border-slate-300 pb-2 mb-2 max-w-xs mx-auto">
                      <p className="text-2xl font-semibold text-slate-800">Your Name</p>
                    </div>
                    <p className="text-sm text-slate-500">
                      has successfully completed all {course.lessonsCount} lessons
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-center gap-8 text-sm text-slate-600 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {completionDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {course.lessonsCount} Lessons
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="flex items-center justify-center gap-12">
                    <div className="text-center">
                      <div className="w-32 border-b border-slate-300 mb-2">
                        <p className="font-script text-xl text-indigo-600 italic">AvatarArts</p>
                      </div>
                      <p className="text-xs text-slate-500">AvatarArts Academy</p>
                    </div>
                  </div>

                  {/* Certificate ID */}
                  <p className="mt-8 text-xs text-slate-400 font-mono">
                    Certificate ID: ZTAI-{Date.now().toString(36).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors font-medium">
                <Share2 className="w-5 h-5" />
                Share on LinkedIn
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Not Complete */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800 mb-6">
                <Award className="w-10 h-10 text-slate-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Complete the Course to Earn Your Certificate
              </h1>
              <p className="text-lg text-slate-400 mb-8">
                You've completed {progress.completed} of {progress.total} lessons ({progress.percentage}%)
              </p>

              {/* Progress */}
              <div className="max-w-md mx-auto mb-8">
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  {progress.total - progress.completed} lessons remaining
                </p>
              </div>

              {/* Checklist */}
              <div className="max-w-sm mx-auto text-left mb-8">
                {course.modules.map((module) => {
                  const moduleCompleted = module.lessons.every((l) => l.status === 'completed');
                  return (
                    <div
                      key={module.id}
                      className="flex items-center gap-3 py-2 border-b border-slate-800"
                    >
                      {moduleCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                      )}
                      <span className={moduleCompleted ? 'text-slate-300' : 'text-slate-500'}>
                        {module.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => navigate('/course')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium"
              >
                Continue Learning
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-500">
          © 2024 AvatarArts Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
