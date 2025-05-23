import logo from './logo.svg';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Student from './pages/student.js';
import Registration from './pages/registration.js';
import Course from './pages/course.js';
function App() {
  return (
    <div>
      <nav>
                {/* Link works but does NOT add an active class */}
                <Link to="/student">Student</Link> | <Link to="/course">Course</Link> | <Link to="/registration">Registration</Link> 
            </nav>

            <Routes>
                <Route path="/student" element={<Student />} />
                <Route path="/course" element={<Course />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
    </div>
  );
}

export default App;
