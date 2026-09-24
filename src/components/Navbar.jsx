import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  FileText,
  Terminal,
  ChevronRight,
  Code2,
  ExternalLink
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "expertise", label: "Expertise", href: "#expertise" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "dsa", label: "DSA", href: "#dsa" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "writing", label: "Writing", href: "#writing" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const scrollPos = window.scrollY + 200;
      navLinks.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[60]">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              &gt;_
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Ankesh Kushwaha
                </span>
                <span className="hidden lg:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available 2026
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Software & Distributed Systems
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1 text-xs font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              title="Launch Interactive Terminal (Ctrl + ~)"
              className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 border border-cyan-500/30 transition-all hover:shadow-sm hover:shadow-cyan-500/20"
            >
              <Terminal size={14} />
              <span>Terminal</span>
            </button>

            {/* Social Icons */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            {/* Resume Button */}
            <div className="flex items-center">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                <FileText size={14} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#0a0e17]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">Navigation</span>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTerminal();
                    }}
                    className="flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-400 border border-cyan-500/30"
                  >
                    <Terminal size={13} />
                    <span>Open CLI</span>
                  </button>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={14} className="opacity-40" />
                  </a>
                ))}

                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  >
                    <FileText size={15} />
                    <span>View / Download Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
