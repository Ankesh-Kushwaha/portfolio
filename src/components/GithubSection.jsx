import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Layers
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function GithubSection() {
  const highlightedRepos = [
    {
      name: "TalentIQ",
      desc: "Distributed online coding assessment platform featuring Docker cgroup sandboxing, Redis Streams queueing, and real-time WebSocket status.",
      lang: "TypeScript",
      langColor: "#3178c6",
      stars: 14,
      forks: 4,
      link: "https://github.com/Ankesh-Kushwaha",
    },
    {
      name: "Chatty",
      desc: "Horizontally scalable real-time chat architecture utilizing multi-node WebSocket servers backed by Redis Pub/Sub broadcast channels.",
      lang: "TypeScript",
      langColor: "#3178c6",
      stars: 12,
      forks: 3,
      link: "https://github.com/Ankesh-Kushwaha",
    },
    {
      name: "Planet-Guardian-SIH",
      desc: "Gamified environmental platform for Smart India Hackathon (SIH 2025). Real-time quiz synchronization with Python ML image validation.",
      lang: "JavaScript",
      langColor: "#f7df1e",
      stars: 18,
      forks: 6,
      link: "https://github.com/Ankesh-Kushwaha",
    },
    {
      name: "DSA-CP-Problem-Solving",
      desc: "Curated collection of 1200+ solutions to algorithmic problems on LeetCode and Codeforces written in high-performance C++.",
      lang: "C++",
      langColor: "#f34b7d",
      stars: 25,
      forks: 8,
      link: "https://github.com/Ankesh-Kushwaha",
    },
  ];

  const languages = [
    { name: "TypeScript", percent: 45, color: "#3178c6" },
    { name: "C++", percent: 30, color: "#f34b7d" },
    { name: "JavaScript", percent: 18, color: "#f7df1e" },
    { name: "Python", percent: 7, color: "#3572A5" },
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Github size={13} />
          <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          GitHub & Open Source
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Public repositories, code cleanliness, and distributed systems architecture under handle @Ankesh-Kushwaha.
        </p>
      </div>

      {/* Main Container */}
      <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
        {/* Top Profile Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center text-white">
              <Github size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Ankesh Kushwaha</h3>
                <span className="text-xs font-mono text-slate-400">@Ankesh-Kushwaha</span>
              </div>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                Systems, Backend & Algorithmic Problem Solving
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors w-fit"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Most Used Languages Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span>Primary Languages Breakdown</span>
            <span>Public Code Distribution</span>
          </div>

          {/* Progress Bar Segment */}
          <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex mb-3">
            {languages.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.percent}%`, backgroundColor: l.color }}
                title={`${l.name}: ${l.percent}%`}
                className="h-full transition-all"
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                <span>{l.name}</span>
                <span className="text-slate-400">{l.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Repositories Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlightedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                    {repo.name}
                  </span>
                  <ExternalLink size={13} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-mono mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} className="text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
