import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Terminal
} from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <GraduationCap size={13} />
          <span>ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education & Coursework
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Rigorous computer science curriculum grounding practical distributed systems engineering with core theoretical fundamentals.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Institution & Overview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <GraduationCap size={28} />
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 mb-3 inline-block">
                Undergraduate Degree
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {educationData.institution}
              </h3>

              <p className="text-base font-semibold text-slate-200 mb-4">
                {educationData.degree}
              </p>

              <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-cyan-400" />
                  <span>Duration: {educationData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-cyan-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5">
              <span className="text-xs font-mono text-slate-400 block mb-1">
                ACADEMIC STANDING
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-400">
                {educationData.cgpa}
              </span>
            </div>
          </div>

          {/* Coursework & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen size={14} />
                <span>Core Computer Science Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationData.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-2.5 text-xs text-slate-300 font-mono"
                  >
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award size={14} />
                <span>Academic & Campus Leadership</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                {educationData.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
