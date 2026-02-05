import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerticalDetail from "./pages/VerticalDetail";
import Settings from "./pages/Settings";
import KnowledgeHub from "./pages/KnowledgeHub";
import CourseDetail from "./pages/CourseDetail";
import LessonViewer from "./pages/LessonViewer";
import { CommandPalette } from "./components/dashboard/CommandPalette";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CommandPalette />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vertical/:id" element={<VerticalDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/learn" element={<KnowledgeHub />} />
          <Route path="/learn/:courseId" element={<CourseDetail />} />
          <Route path="/learn/:courseId/:lessonId" element={<LessonViewer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
