import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl h-[88vh] bg-[#0b0f19] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Ankesh Kushwaha — Software Engineer Resume
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Official PDF Document • Last Updated 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono transition-all"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Resume"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Embedded Viewer with Fallback */}
          <div className="flex-1 w-full bg-slate-950 p-2 overflow-hidden relative">
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0`}
              title="Ankesh Kushwaha Resume"
              className="w-full h-full rounded-2xl border border-white/5 bg-slate-900"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
