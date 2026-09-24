import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Flame,
  Cpu,
  ShieldCheck,
  Star,
  ExternalLink
} from "lucide-react";
import { achievementsData } from "../data/portfolioData";

export default function Achievements() {
  const iconMap = {
    Trophy,
    Award,
    Flame,
    Cpu,
    ShieldCheck,
    Star,
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Trophy size={13} />
          <span>VERIFIED MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Honors & Achievements
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Measurable, real-world accomplishments across national hackathons, competitive programming contests, and distributed load benchmarks.
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Trophy;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Timeline</span>
                <span className="text-slate-200 font-semibold">{item.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
