import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";
import ProjectDetail from "./components/ProjectDetail";
import ExperienceDetail from "./components/ExperienceDetail";

import "./App.css";
import Achievements from "./components/Achievements";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <>
      <main className="container">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <Achievements />
        <ContactSection />
      </main>
    </>
  );
}

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
