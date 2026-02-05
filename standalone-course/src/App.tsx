import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CoursePlayer from './pages/CoursePlayer';
import Certificate from './pages/Certificate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/course" element={<CoursePlayer />} />
        <Route path="/lesson/:lessonId" element={<CoursePlayer />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
