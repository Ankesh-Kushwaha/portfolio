/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Layers,
  Zap,
  Activity,
  Server,
  Database,
  Radio,
  ExternalLink,
  Code2,
  CheckCircle2,
  Play
} from "lucide-react";
import { personalInfo, quickStats, systemArchitectureNodes } from "../data/portfolioData";

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [selectedNode, setSelectedNode] = useState(systemArchitectureNodes[0]);
  const [isSimulating, setIsSimulating] = useState(true);

  // Micro pipeline steps for the animated flow
  const pipeline = [
    { id: "client", label: "Client UI", type: "React 19", latency: "5ms", icon: Radio },
    { id: "gateway", label: "API Gateway", type: "Node.js", latency: "4ms", icon: Server },
    { id: "redisStream", label: "Redis Queue", type: "Streams", latency: "<1ms", icon: Zap },
    { id: "workerPool", label: "Worker Pool", type: "Cluster", latency: "80ms", icon: Cpu },
    { id: "dockerSandbox", label: "Docker Box", type: "cgroups", latency: "750ms", icon: Layers },
    { id: "database", label: "PostgreSQL", type: "Prisma", latency: "8ms", icon: Database },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Gradients & Grid Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Personal Brand & Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-sm shadow-cyan-900/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold">{personalInfo.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
            Building <span className="text-gradient-cyan">Scalable Systems.</span>
            <br />
            Solving Hard Problems.
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-medium text-slate-300 leading-snug mb-5">
            Software Engineer focused on{" "}
            <span className="text-cyan-400 font-semibold">Backend Development</span>,{" "}
            <span className="text-blue-400 font-semibold">Distributed Systems</span>, and{" "}
            <span className="text-indigo-400 font-semibold">High-Performance Applications</span>.
          </h2>

          {/* Narrative Paragraph */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            I design and implement resilient backend systems that solve genuine concurrency,
            latency, and throughput challenges. From sandboxed Docker code execution engines and
            multi-instance WebSocket clusters with Redis Pub/Sub to rigorous algorithmic problem
            solving (<span className="text-slate-200 font-semibold">1200+ DSA problems, 1778 LeetCode rating</span>
            ), I care deeply about how systems perform under real load.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              <span>View My Work</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 text-sm font-semibold transition-all hover:scale-[1.02]"
            >
              <Download size={16} className="text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
            >
              <Mail size={16} className="text-blue-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Quick Profile Links & Terminal Teaser */}
          <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-white/10 w-full">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Profiles:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="GitHub @Ankesh-Kushwaha"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="LinkedIn Ankesh Kushwaha"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1 text-xs font-mono font-semibold"
                title="LeetCode @01_Heisenberg"
              >
                <Code2 size={16} />
                <span>1750+</span>
              </a>
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors text-xs font-mono font-semibold"
                title="Codeforces @Xeron_Cadmile9648"
              >
                CF
              </a>
            </div>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 px-3 py-1 rounded-md border border-cyan-500/30 transition-colors"
            >
              <Terminal size={12} />
              <span>$ whoami --engineer</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive System Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full"
        >
          <div className="relative rounded-2xl bg-[#0b0f19]/90 border border-slate-700/60 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  system-telemetry.distributed-v2
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PIPELINE LIVE
                </span>
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Distributed Submission Flow
                </div>
                <div className="text-[11px] font-mono text-cyan-400">
                  Click nodes to inspect
                </div>
              </div>

              {/* Sequential Flow Nodes */}
              <div className="space-y-2.5 relative">
                {pipeline.map((item, idx) => {
                  const NodeIcon = item.icon;
                  const isSelected = selectedNode?.id === item.id;
                  const fullNode = systemArchitectureNodes.find((n) => n.id === item.id) || systemArchitectureNodes[0];

                  return (
                    <div key={item.id} className="relative">
                      <button
                        onClick={() => setSelectedNode(fullNode)}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-cyan-950/40 border-cyan-500/60 shadow-md shadow-cyan-500/10 translate-x-1"
                            : "bg-slate-900/50 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            <NodeIcon size={16} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-slate-100">
                                {item.label}
                              </span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-white/5">
                                {item.type}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400">
                              {fullNode.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-cyan-400/90 font-medium">
                            {item.latency}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isSelected
                                ? "bg-cyan-400 animate-ping"
                                : "bg-emerald-500/60"
                            }`}
                          />
                        </div>
                      </button>

                      {/* Animated Connector Arrow between nodes */}
                      {idx < pipeline.length - 1 && (
                        <div className="h-2 flex items-center justify-center my-0.5">
                          <div className="w-0.5 h-full bg-linear-to-b from-cyan-500/50 to-blue-500/50 relative overflow-hidden">
                            {isSimulating && (
                              <motion.div
                                animate={{ y: [0, 8] }}
                                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                className="w-full h-1 bg-cyan-300"
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Inspected Node Detail Drawer */}
              {selectedNode && (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-cyan-300 font-mono flex items-center gap-1.5">
                      <Zap size={13} className="text-cyan-400" />
                      {selectedNode.title}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {selectedNode.latency}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                    {selectedNode.purpose}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t border-white/5">
                    <div>
                      <span className="text-slate-400">Scale Strategy:</span>
                      <p className="text-slate-300 truncate">{selectedNode.scalingStrategy}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Fault Tolerance:</span>
                      <p className="text-slate-300 truncate">{selectedNode.failureMode}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 size={12} className="text-emerald-400" />
                Benchmark: 800+ requests | 0% drops
              </span>
              <a href="#projects" className="text-cyan-400 hover:underline flex items-center gap-1">
                Explore TalentIQ <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
