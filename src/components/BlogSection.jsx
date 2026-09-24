import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  X,
  FileText,
  Share2,
  Terminal,
  Zap,
  CheckCircle2
} from "lucide-react";
import { technicalArticles } from "../data/portfolioData";

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="writing" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <BookOpen size={13} />
          <span>TECHNICAL WRITING & SYSTEM ESSAYS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Writing & Case Studies
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          In-depth architectural breakdowns documenting container sandboxing, queue backpressures, and WebSocket scaling strategies.
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {technicalArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>{article.readingTime}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono mb-6">
                {article.summary}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 font-semibold transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* In-App Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[88vh] bg-[#0b0f19] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="p-6 bg-slate-900/90 border-b border-white/10 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                    <span className="text-cyan-400">{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readingTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {selectedArticle.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close Article"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Article Markdown/Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-200 text-xs mb-6">
                  <strong>Abstract:</strong> {selectedArticle.summary}
                </div>

                <div className="whitespace-pre-line leading-relaxed text-slate-200">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-900/90 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Written by Ankesh Kushwaha
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
