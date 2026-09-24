import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Terminal,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { sendEmail } from "../utils/sendMail";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill out your name, email, and message.");
      return;
    }

    setStatus("sending");

    try {
      const fullMessage = formData.subject
        ? `Subject: ${formData.subject}\n\n${formData.message}`
        : formData.message;

      const res = await sendEmail(formData.name, formData.email, fullMessage);

      if (res?.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback or service error
        setStatus("error");
        setStatusMessage("Couldn't send through the form service. Please email me directly at ankeshkush9651@gmail.com.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please email me directly at ankeshkush9651@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <MessageSquare size={13} />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something Great
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          I'm always interested in discussing software engineering, backend systems, interesting technical problems, and opportunities to build impactful products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Details & Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Channels
            </h3>

            <div className="space-y-4 font-mono text-xs">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-white/5 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 hover:bg-slate-800/60 border border-white/5 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Professional Networks:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-mono transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6">
              Recruiting inquiries, technical discussions, or freelance collaborations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Opportunity / Distributed Systems"
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono resize-none"
                />
              </div>

              {/* Status Alert */}
              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle size={16} className="text-rose-400 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01]"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
