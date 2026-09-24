import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Mail, ArrowUpRight, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function FloatingStatus({ onOpenTerminal }) {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 shadow-xl shadow-cyan-500/10 hover:scale-110 transition-transform"
        title="Open Status & Terminal"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute -top-0.5 -right-0.5" />
        <Terminal size={18} />
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl shadow-black/80 font-mono text-xs max-w-sm"
    >
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <div>
          <span className="text-white font-semibold block text-[11px]">
            Open for Software Engineer Roles
          </span>
          <span className="text-[10px] text-slate-400 block">
            2026 Grad • Backend & Distributed
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
        <button
          onClick={onOpenTerminal}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
          title="Open Terminal"
        >
          <Terminal size={14} />
        </button>

        <a
          href="#contact"
          className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
          title="Direct Contact"
        >
          <Mail size={14} />
        </a>

        <button
          onClick={() => setMinimized(true)}
          className="p-1 rounded-lg text-slate-500 hover:text-slate-300 transition-colors"
          title="Minimize"
        >
          <X size={13} />
        </button>
      </div>
    </motion.div>
  );
}
