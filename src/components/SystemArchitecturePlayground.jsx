import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Network,
  Zap,
  GitCommit,
  Server,
  Box,
  Database,
  Radio,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowDown,
  Info
} from "lucide-react";
import { systemArchitectureNodes } from "../data/portfolioData";

export default function SystemArchitecturePlayground() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScenario, setActiveScenario] = useState("execution"); // 'execution' | 'chat' | 'cache'
  const [inspectedNode, setInspectedNode] = useState(systemArchitectureNodes[0]);

  const scenarios = {
    execution: {
      name: "TalentIQ: Untrusted C++ Code Assessment",
      flow: ["client", "gateway", "redisCache", "redisStream", "workerPool", "dockerSandbox", "database", "websocket"],
      latencyTotal: "923ms",
      desc: "Client submits C++ solution. Gateway validates token, caches test cases in Redis, pushes task into Redis Streams. Worker claims task, provisions Docker sandbox with 128MB limit, and streams compiler output via WebSockets."
    },
    chat: {
      name: "Chatty: Multi-Instance Real-time Broadcast",
      flow: ["client", "gateway", "redisCache", "workerPool", "database", "websocket"],
      latencyTotal: "24ms",
      desc: "User broadcasts a room message. API forwards payload to Redis Pub/Sub backplane. All 4 clustered WebSocket nodes receive the event and emit to connected room participants with async MongoDB write."
    },
    cache: {
      name: "Hot Problem Query Cache Hit",
      flow: ["client", "gateway", "redisCache"],
      latencyTotal: "10ms",
      desc: "Client requests leaderboard or problem suite. Gateway queries Redis In-Memory KV cache. Instant cache hit returns in 10ms, skipping primary database read entirely."
    }
  };

  const currentScenario = scenarios[activeScenario];
  const activeNodeId = currentScenario.flow[activeStep % currentScenario.flow.length];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % currentScenario.flow.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [isPlaying, activeScenario, currentScenario.flow.length]);

  const iconMap = {
    Monitor,
    Network,
    Zap,
    GitCommit,
    Server,
    Box,
    Database,
    Radio,
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 mb-3">
          <Network size={13} />
          <span>INTERACTIVE SYSTEM TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          System Architecture Simulation
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-mono">
          Watch simulated requests travel through our distributed layers. Select scenarios, inspect node telemetry, and explore failure modes.
        </p>
      </div>

      {/* Main Simulation Panel */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-2xl relative overflow-hidden">
        {/* Scenario Selectors & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "execution", label: "TalentIQ Execution (923ms)" },
              { id: "chat", label: "Chatty Real-Time (24ms)" },
              { id: "cache", label: "Cache Hit Flow (10ms)" },
            ].map((sc) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenario(sc.id);
                  setActiveStep(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeScenario === sc.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-800/80 text-slate-300 hover:text-white border border-white/5"
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:bg-slate-700 transition-colors"
            >
              <Play size={13} className={isPlaying ? "animate-pulse" : ""} />
              <span>{isPlaying ? "Pause Flow" : "Resume Flow"}</span>
            </button>

            <button
              onClick={() => setActiveStep(0)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Current Scenario Summary */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 font-mono text-xs text-slate-300 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-cyan-400 font-bold block mb-0.5">
              ACTIVE SCENARIO: {currentScenario.name}
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {currentScenario.desc}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] text-slate-500 block">TOTAL LATENCY</span>
            <span className="text-base font-bold text-emerald-400 font-mono">
              ~{currentScenario.latencyTotal}
            </span>
          </div>
        </div>

        {/* Topology Grid (Sequential Nodes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {systemArchitectureNodes.map((node) => {
            const Icon = iconMap[node.icon] || Server;
            const isNodeInFlow = currentScenario.flow.includes(node.id);
            const isCurrentlyActive = activeNodeId === node.id;
            const isInspected = inspectedNode?.id === node.id;

            return (
              <motion.div
                key={node.id}
                onClick={() => setInspectedNode(node)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  isCurrentlyActive
                    ? "bg-cyan-950/70 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-2 ring-cyan-400/40 scale-[1.03]"
                    : isInspected
                    ? "bg-slate-800/80 border-cyan-500/50"
                    : isNodeInFlow
                    ? "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    : "bg-slate-950/40 border-slate-900 opacity-40"
                }`}
              >
                {/* Active Pulse Pill */}
                {isCurrentlyActive && (
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono font-bold text-[9px] shadow-md shadow-cyan-400/50 animate-bounce">
                    PACKET HERE
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isCurrentlyActive
                        ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30"
                        : "bg-slate-800 text-cyan-400"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/5">
                    {node.latency}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-0.5">
                  {node.title}
                </h4>
                <p className="text-[11px] font-mono text-cyan-400/90 mb-2">
                  {node.tech}
                </p>
                <p className="text-[11px] text-slate-400 font-mono line-clamp-2">
                  {node.purpose}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Node Detailed Inspector */}
        {inspectedNode && (
          <div className="p-6 rounded-2xl bg-[#080c14] border border-cyan-500/30 font-mono text-xs text-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="text-sm font-bold text-white">
                  Node Inspector: {inspectedNode.title}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {inspectedNode.category}
                </span>
              </div>
              <span className="text-emerald-400 font-bold text-xs">
                Operating Latency: {inspectedNode.latency}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-slate-500 block uppercase text-[10px] mb-1">
                  Why It Exists
                </span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {inspectedNode.whyItExists}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[10px] mb-1">
                  Scaling Strategy
                </span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {inspectedNode.scalingStrategy}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[10px] mb-1">
                  Fault Tolerance & Failure Mode
                </span>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {inspectedNode.failureMode}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
