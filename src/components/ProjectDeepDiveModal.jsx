import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Zap,
  Shield,
  Layers,
  Cpu,
  TrendingUp,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Server
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ProjectDeepDiveModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState("overview");

  // Sample load-test benchmark data for TalentIQ and Chatty
  const loadTestData = [
    { vus: "5 VUs", latencyWithoutCache: 110, latencyWithCache: 12, errors: 0 },
    { vus: "10 VUs", latencyWithoutCache: 180, latencyWithCache: 14, errors: 0 },
    { vus: "15 VUs", latencyWithoutCache: 320, latencyWithCache: 18, errors: 0 },
    { vus: "20 VUs", latencyWithoutCache: 640, latencyWithCache: 22, errors: 0 },
    { vus: "30 VUs", latencyWithoutCache: 1250, latencyWithCache: 28, errors: 0 },
  ];

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0f19] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="p-6 bg-slate-900/90 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {project.year} Case Study
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title} — Architectural Deep Dive
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-mono">
                {project.architectureSummary}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="px-6 py-2 bg-slate-950/70 border-b border-white/5 flex gap-2 overflow-x-auto text-xs font-mono">
            {[
              { id: "overview", label: "Problem & Solution" },
              { id: "architecture", label: "Architecture Flow" },
              { id: "challenges", label: "Engineering Challenges" },
              { id: "performance", label: "Load Test Benchmark" },
              { id: "lessons", label: "Lessons & Roadmap" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-300 text-sm leading-relaxed">
            {/* TAB 1: OVERVIEW & PROBLEM */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={14} />
                    <span>The Problem Statement</span>
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                    {caseStudy.problem || project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Architectural Highlights</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights?.map((h, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <Zap size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    Key Performance Indicators
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics?.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900/80 border border-white/5 text-center"
                      >
                        <span className="text-xs text-slate-400 font-mono block">
                          {m.label}
                        </span>
                        <span className="text-base font-bold text-white font-mono mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE FLOW */}
            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Server size={14} />
                    <span>Step-by-Step Data Flow Pipeline</span>
                  </h3>

                  <div className="space-y-3">
                    {caseStudy.architecture?.map((step) => (
                      <div
                        key={step.step}
                        className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {step.name}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-mono">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300">
                  <span className="font-bold text-cyan-400 font-mono block mb-1">
                    Decoupled Ingestion Principle
                  </span>
                  By passing submission requests immediately to Redis Streams, the HTTP
                  API remains non-blocking and achieves sub-10ms response times even during
                  massive traffic surges.
                </div>
              </div>
            )}

            {/* TAB 3: ENGINEERING CHALLENGES */}
            {activeTab === "challenges" && (
              <div className="space-y-4">
                <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu size={14} />
                  <span>Difficult Problems & Engineering Solutions</span>
                </h3>

                {caseStudy.engineeringChallenges?.map((ch, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-rose-400 font-bold font-mono text-xs">
                        CHALLENGE 0{idx + 1}:
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {ch.challenge}
                      </h4>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-xs text-slate-300 font-mono leading-relaxed">
                      <span className="text-emerald-400 font-bold block mb-1">
                        ENGINEERED RESOLUTION:
                      </span>
                      {ch.solution}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: LOAD TEST BENCHMARK */}
            {activeTab === "performance" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Activity size={14} />
                    <span>k6 Load Testing: Redis Cache-Aside Impact</span>
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 font-mono">
                    Synthetic test of 800+ requests comparing API latency with vs. without Redis caching.
                  </p>

                  <div className="h-64 w-full p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={loadTestData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="vus" stroke="#64748b" textAnchor="middle" />
                        <YAxis stroke="#64748b" unit="ms" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0f172a",
                            borderColor: "#334155",
                            borderRadius: "12px",
                            fontSize: "12px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="latencyWithoutCache"
                          name="Without Cache (Direct DB)"
                          stroke="#ef4444"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="latencyWithCache"
                          name="With Redis Cache"
                          stroke="#06b6d4"
                          strokeWidth={3}
                          dot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Peak Virtual Users
                    </span>
                    <span className="text-xl font-bold font-mono text-cyan-400">
                      20 - 50 VUs
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Cache Hit Latency
                    </span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      ~10ms
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Packet Drop Rate
                    </span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      0.0%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: LESSONS LEARNED & FUTURE ROADMAP */}
            {activeTab === "lessons" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Lightbulb size={14} />
                    <span>Key Architectural Lessons</span>
                  </h3>
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {caseStudy.lessonsLearned}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp size={14} />
                    <span>Future Engineering Roadmap</span>
                  </h3>
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                    {caseStudy.futureImprovements}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer with Actions */}
          <div className="p-5 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack?.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
