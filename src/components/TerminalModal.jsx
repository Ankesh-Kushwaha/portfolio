import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import { personalInfo, quickStats, featuredProjects, educationData } from "../data/portfolioData";

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Ankesh Kushwaha's System Terminal v2.4" },
    { type: "system", text: "Type 'help' to see the list of supported engineering commands." },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Keyboard shortcut listener for Escape or Ctrl+~
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "input", text: `ankesh@sys-eng:~$ ${cmd}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available commands:
  help          - List all available terminal commands
  whoami        - Display engineer identity & summary
  about         - Background & core engineering philosophies
  skills        - View production architecture & tooling stack
  projects      - Overview of featured distributed systems
  stats         - Key metrics (DSA, LeetCode, Load Tests)
  architecture  - High-level pipeline topology
  education     - Academic background & coursework
  contact       - Direct contact channels
  github        - Open GitHub repository page
  leetcode      - Open LeetCode competitive profile
  resume        - Download or preview curriculum vitae
  clear         - Clear the terminal history
  exit          - Close the interactive terminal`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          text: `${personalInfo.name}
Role: ${personalInfo.role} (${personalInfo.focus})
Status: ${personalInfo.availabilityStatus}
Education: B.Tech CSE (2023 - 2027) @ G.L. Bajaj Institute
Competitive: 1200+ DSA Problems Solved | 1750+ LeetCode Rating (Knight)`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: personalInfo.summary,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `Languages:       C++, TypeScript, JavaScript, Python, C, HTML/CSS
Backend:         Node.js, Express.js, Hono, WebSockets, REST, JWT, RBAC
Distributed:     Redis Streams, Redis Pub/Sub, Worker Clusters, Docker
Databases:       PostgreSQL, MongoDB, Redis, Prisma ORM, Mongoose
DevOps:          Docker, Git/GitHub, Cloudflare Workers, Linux/Bash`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `Featured Projects:
1. TalentIQ: Online coding assessment platform with Docker cgroups sandboxing & Redis Streams.
   Metrics: 800+ requests, 20 concurrent VUs, 0% error rate, ~923ms average latency.
2. Chatty: Horizontally scalable real-time chat with multi-node WebSockets & Redis Pub/Sub.
   Metrics: 50 simulated users, 500 messages, 4 backend instances, <25ms delivery.
3. Planet Guardian: SIH 2025 National Finalist gamified real-time environmental platform.
4. CureShare: Distributed emergency healthcare & medical resource exchange.
5. ShareYourThought: Serverless micro-publishing on Cloudflare Workers & Hono.`,
        });
        break;

      case "stats":
        newHistory.push({
          type: "output",
          text: quickStats.map((s) => `• ${s.label}: ${s.metric} (${s.subtext})`).join("\n"),
        });
        break;

      case "architecture":
        newHistory.push({
          type: "output",
          text: `Distributed Pipeline Topology:
[Client Browser]
       │
       ▼ (HTTP / WebSockets)
[API Gateway / Rate Limiter] ──> (Redis Cache - 10ms lookup)
       │
       ▼ (Enqueue Task)
[Redis Streams (FIFO Queue)]
       │
       ▼ (XREADGROUP Worker Pull)
[Distributed Node.js Worker Cluster]
       │
       ▼ (cgroup isolation: 128MB, 0.5 CPU, no net)
[Docker Container Sandbox]
       │
       ▼ (Publish Execution Events)
[WebSocket Gateway] ──> [Real-time Client Terminal Output]`,
        });
        break;

      case "education":
        newHistory.push({
          type: "output",
          text: `${educationData.institution}
${educationData.degree} (${educationData.duration})
CGPA: ${educationData.cgpa}
Core Coursework: ${educationData.coursework.join(", ")}`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Email:    ${personalInfo.email}
Phone:    ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub:   ${personalInfo.github}`,
        });
        break;

      case "github":
        window.open(personalInfo.github, "_blank");
        newHistory.push({ type: "output", text: `Opening ${personalInfo.github}...` });
        break;

      case "leetcode":
        window.open(personalInfo.leetcode, "_blank");
        newHistory.push({ type: "output", text: `Opening ${personalInfo.leetcode}...` });
        break;

      case "resume":
        window.open(personalInfo.resumeUrl, "_blank");
        newHistory.push({ type: "output", text: `Opening resume (${personalInfo.resumeUrl})...` });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      default:
        newHistory.push({
          type: "output",
          text: `Command not found: "${cmd}". Type 'help' to see valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

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

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl h-[65vh] sm:h-[70vh] bg-[#07090e] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden flex flex-col z-10 font-mono text-xs"
        >
          {/* Terminal Window Chrome */}
          <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5">
                <TerminalIcon size={12} className="text-cyan-400" />
                ankesh@systems-terminal:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 hidden sm:inline">
                Press [Esc] to exit
              </span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close Terminal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Terminal Output Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2.5 text-slate-300 cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                {item.type === "input" ? (
                  <span className="text-cyan-400 font-semibold">{item.text}</span>
                ) : item.type === "system" ? (
                  <span className="text-slate-500">{item.text}</span>
                ) : (
                  <span className="text-emerald-300">{item.text}</span>
                )}
              </div>
            ))}

            {/* Current Input Prompt */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 font-semibold shrink-0">
                ankesh@sys-eng:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 p-0"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Footer Quick Commands Bar */}
          <div className="px-4 py-2 bg-slate-950/90 border-t border-white/5 flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
            <span>Quick:</span>
            {["whoami", "projects", "stats", "skills", "architecture", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
