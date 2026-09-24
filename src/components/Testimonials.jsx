import React from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Users, Star, Terminal } from "lucide-react";
import { testimonialsData } from "../data/portfolioData";

export default function Testimonials() {
  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Users size={13} />
          <span>COLLABORATIVE ENDORSEMENTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Peer & Collaborator Feedback
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Feedback from hackathon jury evaluations, peer engineers, and teammates who have built and shipped software alongside me.
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.avatar}</span>
                <MessageSquareQuote size={22} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono mb-6 italic">
                "{item.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <h4 className="text-sm font-bold text-white">
                {item.name}
              </h4>
              <p className="text-xs text-cyan-400 font-mono">
                {item.role}
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                {item.organization}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
