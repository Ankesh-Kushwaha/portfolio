import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Award
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-blue-950/40 border border-slate-800 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30">
              <FileText size={13} />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Want the complete picture?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono">
              Download my resume for a detailed overview of my experience, projects, technical skills, and achievements.
              Includes verified metrics on distributed systems, load-tested backends, and algorithmic achievements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>B.Tech CSE (2023-2027) • 8.2 CGPA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>1200+ DSA Problems • 1750+ LeetCode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>TalentIQ & Chatty Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Smart India Hackathon 2025 Finalist</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                <Eye size={16} className="text-cyan-400" />
                <span>View Resume Preview</span>
              </button>
            </div>
          </div>

          {/* Right Preview Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={onOpenResume}
              className="w-full max-w-sm p-6 rounded-2xl bg-[#080c14] border border-slate-700/80 shadow-2xl cursor-pointer hover:border-cyan-500/50 transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-xs font-mono text-cyan-400">PDF Document</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  Ready to Download
                </span>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-slate-400">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5">
                  <span className="text-white font-bold block text-xs">
                    Ankesh Kushwaha
                  </span>
                  <span className="text-cyan-400 block text-[10px]">
                    Software Engineer • Backend • Distributed Systems
                  </span>
                </div>

                <div className="space-y-1.5 text-[10px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Education:</span>
                    <span className="text-slate-300">G.L. Bajaj Institute (B.Tech)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LeetCode Peak:</span>
                    <span className="text-slate-300">1750+ (Knight Tier)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Key Projects:</span>
                    <span className="text-slate-300">TalentIQ, Chatty, SIH 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="text-emerald-400 font-semibold">2026 Grad / SDE Roles</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-mono font-semibold">
                <span>Click to Preview Online</span>
                <Eye size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
