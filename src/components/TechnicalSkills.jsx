import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Terminal,
  Server,
  Database,
  Layers,
  Cpu,
  Search,
  CheckCircle2,
  Info,
  Zap,
  Globe
} from "lucide-react";
import { skillsCategorized } from "../data/portfolioData";

export default function TechnicalSkills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = ["All", ...skillsCategorized.map((c) => c.category)];

  // Flatten or filter skills
  const allSkills = skillsCategorized.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory =
      activeCategory === "All" || s.category === activeCategory;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.usage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Terminal size={13} />
          <span>PRODUCTION-PROVEN TOOLING</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills & Architecture Stack
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Interactive cards with verified implementation details. Click or hover over any skill to inspect how it was used in real systems.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-slate-800 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search skill (e.g. Redis, Docker, C++)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                onMouseEnter={() => setSelectedSkill(skill)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left relative group ${
                  isSelected
                    ? "bg-slate-800/90 border-cyan-500/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30"
                    : "bg-slate-900/50 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-white/5">
                    {skill.level}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-2">
                  {skill.category}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-mono line-clamp-2">
                  {skill.usage}
                </p>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Info size={11} />
                    <span>Real-world usage</span>
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Selected Skill Usage Detail Card (Sticky / Responsive Inspector) */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-8 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                <Zap size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300 border border-cyan-500/30">
                    {selectedSkill.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    • {selectedSkill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
                  {selectedSkill.usage}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/10 shrink-0 self-end md:self-auto"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
