/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Layers,
  Cpu,
  Terminal,
  Code2,
  CheckCircle2,
  Server,
  ArrowRight,
  Shield,
  Zap,
  MapPin,
  ExternalLink
} from "lucide-react";
import { personalInfo, careerTimeline, educationData } from "../data/portfolioData";

export default function About() {
  const [activeYear, setActiveYear] = useState("2025");
  const selectedMilestone =
    careerTimeline.find((item) => item.year === activeYear) || careerTimeline[2];

  const focusAreas = [
    {
      title: "Distributed Systems & Queues",
      desc: "Redis Streams, consumer groups, worker architectures, and backpressure handling for high-concurrency tasks.",
      icon: Server,
    },
    {
      title: "High-Performance Backend",
      desc: "Node.js, Express, Hono, asynchronous I/O, multi-tier caching with Redis, and optimized database indexing.",
      icon: Zap,
    },
    {
      title: "Real-Time Systems",
      desc: "WebSocket duplex channels with Redis Pub/Sub backplanes for seamless multi-node cross-server broadcasting.",
      icon: Cpu,
    },
    {
      title: "Algorithmic Rigor (DSA)",
      desc: "1200+ solved problems across LeetCode (1750+ rating) and Codeforces, with deep mastery of graph algorithms and DP.",
      icon: Code2,
    },
    {
      title: "Sandboxed Execution & Security",
      desc: "Docker container sandboxing with Linux cgroup limits, seccomp filters, RBAC, and rate limiting algorithms.",
      icon: Shield,
    },
    {
      title: "Full-Stack System Design",
      desc: "React 19, TypeScript, PostgreSQL (Prisma), MongoDB, and serverless edge functions on Cloudflare Workers.",
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Terminal size={13} />
          <span>ENGINEERING PROFILE & EVOLUTION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          About Me & Journey
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
          From algorithmic foundations and competitive programming to architecting distributed,
          load-tested backend systems.
        </p>
      </div>

      {/* Grid: Profile Bio & Focus Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Photo & Education Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-6 backdrop-blur-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-5 mb-6">
              <div className="relative">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">
                  ✓
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-cyan-400 font-mono">{personalInfo.role}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin size={12} />
                  <span>{personalInfo.location}</span>
                </p>
              </div>
            </div>

            {/* Education Highlight */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <GraduationCap size={15} />
                  <span>Education</span>
                </span>
                <span className="text-slate-400">{educationData.duration}</span>
              </div>
              <p className="text-sm font-semibold text-slate-100">
                {educationData.institution}
              </p>
              <p className="text-xs text-slate-400">
                {educationData.degree}
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[11px] font-mono">
                <span className="text-slate-400">CGPA:</span>
                <span className="text-emerald-400 font-bold">{educationData.cgpa}</span>
              </div>
            </div>

            {/* Availability Alert */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-xs text-emerald-300 font-medium">
                {personalInfo.availabilityStatus}
              </p>
            </div>
          </div>

          {/* Quick Technical Philosophies */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Engineering Mindset
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Decouple heavy tasks:</strong> Never run long CPU tasks inside the HTTP request-response cycle; push them to FIFO queues and worker pools.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Strict contracts:</strong> Share TypeScript interfaces across APIs and consumer workers to eliminate integration regressions.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Narrative & 6 Focus Pillars */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
            <p>
              I am a final-year Computer Science & Engineering undergraduate with a deliberate focus on
              <strong> backend systems, distributed architectures, and algorithmic problem solving</strong>.
              I approach software development not as gluing together frontends, but as engineering reliable,
              fault-tolerant services designed to survive real traffic.
            </p>
            <p>
              My journey began with low-level C and C++, where I developed a deep appreciation for memory
              management, data structures, and computational complexity. Over the past two years, I have
              solved over <strong>1,200+ DSA problems</strong> across LeetCode and Codeforces, earning a
              peak LeetCode rating of <strong>1778</strong>.
            </p>
            <p>
              In production, I have designed and load-tested distributed event-driven engines like
              <span className="text-cyan-400 font-semibold"> TalentIQ</span> (Docker container sandboxing with Redis Streams)
              and <span className="text-blue-400 font-semibold"> Chatty</span> (multi-instance real-time WebSockets backed by Redis Pub/Sub).
              I also led backend architecture for <span className="text-emerald-400 font-semibold"> Planet Guardian</span>, which qualified for  the national finals of
              <strong> Smart India Hackathon (SIH 2025)</strong>.
            </p>
          </div>

          {/* 6 Focus Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {focusAreas.map((area) => {
              const AreaIcon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-4 rounded-2xl bg-slate-900/40 hover:bg-slate-800/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <AreaIcon size={15} />
                    </div>
                    <h4 className="text-xs font-semibold text-slate-100">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal font-mono">
                    {area.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Career Evolution Timeline (2023 - 2026) */}
      <div className="mt-8 pt-12 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
              <Calendar size={13} />
              <span>INTERACTIVE MILESTONES</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Interactive Engineering Timeline
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Select a year to inspect progression
          </div>
        </div>

        {/* Year Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {careerTimeline.map((item) => {
            const isSelected = activeYear === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all text-center ${
                  isSelected
                    ? "bg-cyan-950/50 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                    : "bg-slate-900/40 hover:bg-slate-800/50 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="text-2xl font-extrabold font-mono mb-1">
                  {item.year}
                </span>
                <span className="text-[11px] font-mono tracking-tight text-slate-400">
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-700/80 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedMilestone.institution}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {selectedMilestone.title}
                </h4>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-500/30 w-fit">
                {selectedMilestone.role}
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedMilestone.description}
            </p>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Core Technologies & Concepts Mastered:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedMilestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
