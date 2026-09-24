import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Terminal,
  Layers
} from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Briefcase size={13} />
          <span>PRODUCTION TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Engineering Experience & Roles
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Achievement-driven engineering history focusing on distributed architectures,
          fellowships, hackathon leadership, and production-tested systems.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/30 before:to-transparent">
        {experienceData.map((exp, index) => {
          return (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-10 sm:pl-16 ${
                exp.isPlaceholder ? "opacity-95" : ""
              }`}
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute left-2 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 rounded-full border-4 border-[#07090e] ${
                  exp.isPlaceholder
                    ? "bg-emerald-400 animate-ping"
                    : "bg-cyan-500 shadow-md shadow-cyan-500/50"
                }`}
              />

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl ${
                  exp.isPlaceholder
                    ? "bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                    : "bg-slate-900/60 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/5 gap-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-white/5">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400 font-mono">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar size={13} className="text-cyan-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Accomplishments Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.accomplishments.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono"
                    >
                      <CheckCircle2
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          exp.isPlaceholder ? "text-emerald-400" : "text-cyan-400"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.isPlaceholder && (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      <span>Inquire for Roles &rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
