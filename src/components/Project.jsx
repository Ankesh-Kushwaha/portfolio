import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Cpu,
  Zap,
  Activity,
  Server,
  ArrowRight,
  Database,
  Radio,
  FileCode,
  Shield,
  Play
} from "lucide-react";
import { featuredProjects } from "../data/portfolioData";
import ProjectDeepDiveModal from "./ProjectDeepDiveModal";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Distributed Systems", "Real-Time & Distributed", "Full-Stack & Real-Time", "Full-Stack & Serverless"];

  const filteredProjects = activeCategory === "All"
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeCategory || p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Layers size={13} />
          <span>PRODUCTION-READY SYSTEMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Architected around horizontal scalability, asynchronous event-driven pipelines,
          fault-tolerant queues, and low-latency communication.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {["All", "Distributed Systems", "Real-Time", "Full-Stack"].map((cat) => {
          const isActive =
            (cat === "All" && activeCategory === "All") ||
            (cat !== "All" && activeCategory.includes(cat));

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === "All" ? "All" : cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview / Architecture Mockup (6 cols) */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-2xl bg-[#080c14] border border-slate-700/60 overflow-hidden shadow-2xl group-hover:border-cyan-500/40 transition-colors">
                    {/* Window Controls */}
                    <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.title.toLowerCase()}.sys
                      </span>
                    </div>

                    {/* Image or High-Tech System Diagram */}
                    {project.image ? (
                      <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />
                      </div>
                    ) : (
                      <div className="p-6 h-64 sm:h-72 flex flex-col justify-between bg-gradient-to-br from-slate-950 to-slate-900">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                              System Architecture Pipeline
                            </span>
                            <span className="text-xs font-mono text-emerald-400">
                              Production Tested
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 font-mono text-xs text-slate-300 leading-relaxed">
                            <span className="text-cyan-400 block mb-1 font-bold">
                              DATA FLOW PIPELINE:
                            </span>
                            {project.architectureSummary}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                            <span className="text-slate-400 block text-[10px]">THROUGHPUT</span>
                            <span className="text-slate-200 font-bold">
                              {project.metrics[0]?.value || "High Concurrency"}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                            <span className="text-slate-400 block text-[10px]">STABILITY</span>
                            <span className="text-emerald-400 font-bold">
                              {project.metrics[2]?.value || "Zero Error Rate"}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom Pill */}
                    <div className="px-4 py-2 bg-slate-950/90 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Status: Verified Production Architecture</span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                      >
                        Deep Dive &rarr;
                      </button>
                    </div>
                  </div>
                </div>

                {/* Information & Engineering Description (6 cols) */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    {/* Project Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                        {project.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-mono">
                      {project.description}
                    </p>

                    {/* Architecture Pipeline Summary Badge */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 mb-6 font-mono text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold block text-[11px] mb-1">
                        PIPELINE:
                      </span>
                      <p className="text-slate-400 text-xs truncate">
                        {project.architectureSummary}
                      </p>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                      {project.metrics.slice(0, 3).map((m, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-center"
                        >
                          <span className="text-[10px] text-slate-400 font-mono block">
                            {m.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5 block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-semibold text-xs transition-all hover:scale-[1.02]"
                    >
                      <Layers size={14} />
                      <span>Architecture Deep Dive</span>
                    </button>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectDeepDiveModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
