import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from "./components/User/User";
import Admin from "./components/Admin/Admin"
import Auth from './components/Auth/Auth';
import About from "./components/Admin/About";
import Experience from "./components/Admin/Experience";
import Skills from "./components/Admin/Skills";
import Projects from "./components/Admin/Projects";
import Tools from "./components/Admin/Tools";
import Contributions from "./components/Admin/Contributions";
import Contact from "./components/Admin/Contact";
import Courses from "./components/MyCourses/Courses"
import ServiceForm from './components/ServiceForm/ServiceForm';
import StartedCourse from './components/MyCourses/StartedCourse';


function App() {
  return <Router>
    <Routes>
      <Route path="/*" element={<User />} />
      <Route path="/admin" element={<Admin />} >
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skill" element={<Skills />} />
        <Route path="project" element={<Projects />} />
        <Route path="tool" element={<Tools />} />
        <Route path="contribution" element={<Contributions />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<StartedCourse />} />
      <Route path="/serviceform" element={<ServiceForm />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </Router>
}

export default App;
