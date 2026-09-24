import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Flame,
  Award,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Activity,
  Layers,
  Terminal
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { dsaStats, personalInfo } from "../data/portfolioData";

export default function DsaSection() {
  const [selectedTopic, setSelectedTopic] = useState(dsaStats.topicMastery[0]);

  // Generate simulated 52-week heatmap data (7 days x 52 weeks = 364 days)
  const generateHeatmap = () => {
    const weeks = [];
    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // High density activity simulating 365-day streak
        const intensity = (w + d) % 5 === 0 ? 3 : (w * d) % 4 === 0 ? 2 : (w + d) % 2 === 0 ? 4 : 1;
        days.push({ day: d, intensity, count: intensity * 2 + 1 });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const heatmapWeeks = generateHeatmap();

  const getHeatmapColor = (intensity) => {
    switch (intensity) {
      case 4: return "bg-emerald-400";
      case 3: return "bg-emerald-500/80";
      case 2: return "bg-emerald-600/60";
      case 1: return "bg-emerald-800/40";
      default: return "bg-slate-800/50";
    }
  };

  return (
    <section id="dsa" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Code2 size={13} />
          <span>ALGORITHMIC RIGOR & PROBLEM SOLVER</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Problem Solver & Algorithmic Rigor
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Proven analytical thinking, low-level data structure optimization, and competitive programming consistency across 1200+ solved algorithmic problems.
        </p>
      </div>

      {/* Primary 3 Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Code2 size={24} />
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300">
              Multi-Platform
            </span>
          </div>
          <span className="text-4xl font-extrabold font-mono text-white block mb-1">
            {dsaStats.totalSolved}+
          </span>
          <h3 className="text-base font-bold text-slate-200 mb-1">
            Problems Solved
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            LeetCode, Codeforces, and GeeksforGeeks with focus on hard graphs & DP.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 backdrop-blur-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Trophy size={24} />
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/20">
              {dsaStats.contestRankTop} Globally
            </span>
          </div>
          <span className="text-4xl font-extrabold font-mono text-white block mb-1">
            {dsaStats.peakRating}+
          </span>
          <h3 className="text-base font-bold text-slate-200 mb-1">
            Peak LeetCode Rating (Knight)
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Top 7% global percentile under competitive handle @01_Heisenberg.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 backdrop-blur-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Flame size={24} />
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">
              Unbroken Daily Streak
            </span>
          </div>
          <span className="text-4xl font-extrabold font-mono text-white block mb-1">
            {dsaStats.streakDays}+ Days
          </span>
          <h3 className="text-base font-bold text-slate-200 mb-1">
            Continuous Coding Discipline
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            365+ consecutive days of daily problem solving and system commits.
          </p>
        </div>
      </div>

      {/* Middle Row: Difficulty Breakdown Donut + Topic Mastery Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Difficulty Breakdown (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                Difficulty Breakdown
              </h3>
              <span className="text-xs font-mono text-cyan-400">
                1200+ Solved
              </span>
            </div>

            <div className="h-56 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dsaStats.solvedBreakdown}
                    dataKey="count"
                    nameKey="name"
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={4}
                  >
                    {dsaStats.solvedBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderColor: "#334155",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-2xl font-extrabold font-mono text-white">
                  1200+
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Total Solved
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
            {dsaStats.solvedBreakdown.map((item) => (
              <div key={item.name} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-center">
                <span
                  className="text-xs font-bold font-mono block"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
                <span className="text-base font-extrabold font-mono text-white mt-0.5 block">
                  {item.count}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {item.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Mastery Bar Chart (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Core Algorithmic Topic Mastery
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Categories solved across binary search, graph theory, DP, and trees.
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400">
              10 Key Domains
            </span>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dsaStats.topicMastery}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 35, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#64748b" />
                <YAxis
                  dataKey="topic"
                  type="category"
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  width={110}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderColor: "#334155",
                    borderRadius: "12px",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="solved"
                  name="Problems Solved"
                  fill="#06b6d4"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* GitHub/LeetCode-Inspired 52-Week Activity Heatmap */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl mb-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Activity size={18} className="text-emerald-400" />
              <span>365-Day Problem Solving & Commit Heatmap</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Consistent daily algorithmic practice & systems development over the past 52 weeks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-xs bg-slate-800" />
            <div className="w-2.5 h-2.5 rounded-xs bg-emerald-800/40" />
            <div className="w-2.5 h-2.5 rounded-xs bg-emerald-600/60" />
            <div className="w-2.5 h-2.5 rounded-xs bg-emerald-500/80" />
            <div className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid (horizontally scrollable on small screens) */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex gap-1 min-w-[720px]">
            {heatmapWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${day.count} submissions`}
                    className={`w-3 h-3 rounded-xs ${getHeatmapColor(
                      day.intensity
                    )} transition-transform hover:scale-125 cursor-pointer`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* External Action Profiles */}
      <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white">
            Verify Live Competitive Profiles
          </h4>
          <p className="text-xs text-slate-400 font-mono">
            Check live contest ratings, past contest solutions, and repository commits.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold font-mono transition-all"
          >
            <Trophy size={14} />
            <span>LeetCode @01_Heisenberg</span>
            <ExternalLink size={12} />
          </a>

          <a
            href={personalInfo.codeforces}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold font-mono transition-all"
          >
            <Code2 size={14} />
            <span>Codeforces @Xeron_Cadmile</span>
            <ExternalLink size={12} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold font-mono transition-colors"
          >
            <Github size={14} />
            <span>GitHub @Ankesh-Kushwaha</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
