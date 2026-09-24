import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  ShieldAlert,
  Lock,
  Radio,
  Code,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal
} from "lucide-react";
import { engineeringPrinciples } from "../data/portfolioData";

export default function EngineeringExpertise() {
  const [activePrinciple, setActivePrinciple] = useState(engineeringPrinciples[0]);

  const iconMap = {
    TrendingUp,
    Zap,
    ShieldAlert,
    Lock,
    Radio,
    Code,
  };

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Cpu size={13} />
          <span>SYSTEM DESIGN METHODOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          How I Build Systems
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Six foundational engineering principles applied across my backend microservices, real-time queues, and distributed architectures.
        </p>
      </div>

      {/* Grid of 6 Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineeringPrinciples.map((item, idx) => {
          const Icon = iconMap[item.icon] || Cpu;
          const isSelected = activePrinciple.id === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActivePrinciple(item)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                isSelected
                  ? "bg-slate-900/90 border-cyan-500/80 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-500/20"
                  : "bg-slate-900/40 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-800/80 text-cyan-400 border border-white/5"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Technical Bullet Points */}
                <div className="space-y-2 mb-6">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Proof Metric:</span>
                <span className="text-emerald-400 font-semibold bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
