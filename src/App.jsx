import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import EducationSection from "./components/EducationSection";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="spacer" /> */}

      <main className="container">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
