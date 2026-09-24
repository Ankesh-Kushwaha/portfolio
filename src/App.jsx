import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import EngineeringExpertise from "./components/EngineeringExpertise";
import { Projects } from "./components/Project";
import SystemArchitecturePlayground from "./components/SystemArchitecturePlayground";
import DsaSection from "./components/DsaSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import GithubSection from "./components/GithubSection";
import Certifications from "./components/Certifications";
import ResumeSection from "./components/ResumeSection";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import TerminalModal from "./components/TerminalModal";
import FloatingStatus from "./components/FloatingStatus";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global keyboard shortcut to launch interactive terminal (Ctrl + ~ or Ctrl + `)
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "`" || e.key === "~")) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] relative font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* 2. Quick Stats */}
        <QuickStats />

        {/* 3. About Me & Timeline */}
        <About />

        {/* 4. Technical Skills */}
        <TechnicalSkills />

        {/* 5. Engineering Expertise: How I Build Systems */}
        <EngineeringExpertise />

        {/* 6. Featured Projects & Case Studies */}
        <Projects />

        {/* 7. Interactive System Architecture Playground */}
        <SystemArchitecturePlayground />

        {/* 8. DSA / Competitive Programming */}
        <DsaSection />

        {/* 9. Experience Timeline */}
        <Experience />

        {/* 10. Education */}
        <Education />

        {/* 11. Achievements */}
        <Achievements />

        {/* 12. GitHub & Open Source */}
        <GithubSection />

        {/* 13. Certifications */}
        <Certifications />

        {/* 14. Resume Section */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 15. Testimonials */}
        <Testimonials />

        {/* 16. Technical Writing / Blog */}
        <BlogSection />

        {/* 17. Contact Section */}
        <Contact />
      </main>

      {/* 18. Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Floating Status Indicator */}
      <FloatingStatus onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}