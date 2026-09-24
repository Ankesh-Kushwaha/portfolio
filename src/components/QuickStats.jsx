import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Trophy,
  Layers,
  Cpu,
  ShieldCheck,
  Terminal,
  Activity,
  Zap
} from "lucide-react";
import { quickStats } from "../data/portfolioData";

function CounterItem({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.numericValue;
    const duration = 1800; // ms
    const incrementTime = 25;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, stat.numericValue]);

  // Map icon component
  const iconMap = {
    "1200+": Code2,
    "1750+": Trophy,
    "5+": Layers,
    "1000+": Cpu,
    "0%": ShieldCheck,
    "3+": Terminal,
  };
  const IconComponent = iconMap[stat.metric] || Activity;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
          <IconComponent size={20} />
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-white/5">
          {stat.badge}
        </span>
      </div>

      <div className="flex items-baseline gap-0.5 mb-1.5">
        <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
          {displayCount}
          {stat.suffix}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-slate-200 mb-1">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-400 font-mono">
        {stat.subtext}
      </p>
    </motion.div>
  );
}

export default function QuickStats() {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="p-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20">
        <div className="bg-[#090d16]/95 rounded-[22px] p-6 sm:p-10 border border-white/5 backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
                <Zap size={14} />
                <span>MEASURED IMPACT & PROVEN RIGOR</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Engineering Metrics at a Glance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
              Quantitative indicators of algorithmic rigor, distributed stress testing, and real production software delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickStats.map((stat, index) => (
              <CounterItem key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
