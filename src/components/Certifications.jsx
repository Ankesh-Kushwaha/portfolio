import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Terminal
} from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <ShieldCheck size={13} />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Certifications & Standards
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Industry-recognized validations in full-stack architecture, API design, and advanced algorithmic problem solving.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs font-semibold text-cyan-400 font-mono mb-4">
                {cert.issuer}
              </p>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 font-mono text-[11px] text-slate-400 mb-6">
                <span className="text-slate-500 block">Credential ID:</span>
                <span className="text-slate-200">{cert.credentialId}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={cert.verificationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors"
            >
              <span>Verify Credential</span>
              <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
