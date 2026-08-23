import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* Main Portfolio Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Invalid URL → Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;