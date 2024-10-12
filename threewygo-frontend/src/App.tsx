import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import HomePage from './pages/HomePage';
import AddCoursePage from './pages/AddCoursePage';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <CourseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-course" element={<AddCoursePage />} />
          <Route path="/edit-course/:id" element={<AddCoursePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;
