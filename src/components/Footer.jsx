import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  FileText,
  Heart,
  Terminal,
  ArrowUp
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function Footer({ onOpenResume, onOpenTerminal }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#06080e] text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md shadow-cyan-500/20">
              &gt;_
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Ankesh Kushwaha
            </h3>
          </div>
          <p className="text-xs font-mono text-cyan-400">
            Software Engineer • Backend • Distributed Systems
          </p>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            G.L. Bajaj Institute of Technology & Management (2023 - 2027)
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#expertise" className="hover:text-cyan-400 transition-colors">
            Expertise
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#dsa" className="hover:text-cyan-400 transition-colors">
            DSA
          </a>
          <a href="#writing" className="hover:text-cyan-400 transition-colors">
            Writing
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-white/5 transition-colors"
            aria-label="LeetCode Profile"
          >
            <Code2 size={16} />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-white/5 transition-colors"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Copyright & Telemetry Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>All systems operational • Built with React & TypeScript</span>
        </div>
        <p>© {currentYear} Ankesh Kushwaha. All rights reserved.</p>
      </div>
    </footer>
  );
}
