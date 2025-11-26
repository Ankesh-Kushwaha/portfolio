/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// --- Test Data ---
const githubPie = [
  { name: "Stars", value: 67 },
  { name: "Forks", value: 21 },
  { name: "Issues", value: 12 },
];

const githubConsistency = [
  { day: "Mon", commits: 3 },
  { day: "Tue", commits: 5 },
  { day: "Wed", commits: 2 },
  { day: "Thu", commits: 6 },
  { day: "Fri", commits: 4 },
  { day: "Sat", commits: 1 },
  { day: "Sun", commits: 3 },
];

const leetcodePie = [
  { name: "Easy", value: 120 },
  { name: "Medium", value: 60 },
  { name: "Hard", value: 15 },
];

const leetcodeConsistency = [
  { day: "Mon", submissions: 4 },
  { day: "Tue", submissions: 3 },
  { day: "Wed", submissions: 6 },
  { day: "Thu", submissions: 2 },
  { day: "Fri", submissions: 5 },
  { day: "Sat", submissions: 1 },
  { day: "Sun", submissions: 4 },
];

const COLORS = ["#6366f1", "#22c55e", "#eab308"];

export default function PortfolioStats() {
  const [tab, setTab] = useState("github");

  return (
    <section id="codingStats py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto p-6"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          My Coding Stats
        </h2>

        {/* Tabs */}
        <div
          role="tablist"
          className="tabs tabs-bordered w-full mb-6 grid grid-cols-2"
        >
          <a
            role="tab"
            className={`tab text-lg ${
              tab === "github" ? "tab-active text-blue-700 font-bold" : ""
            }`}
            onClick={() => setTab("github")}
          >
            GitHub
          </a>
          <a
            role="tab"
            className={`tab text-lg ${
              tab === "leetcode" ? "tab-active text-blue-700 font-bold" : ""
            }`}
            onClick={() => setTab("leetcode")}
          >
            LeetCode
          </a>
        </div>

        {/* GitHub Panel */}
        {tab === "github" && (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">GitHub Breakdown</h3>
              <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart
                    style={{
                      filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.25))",
                    }}
                  >
                    <Pie
                      data={githubPie}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={90}
                    >
                      {githubPie.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">Commit Consistency</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={githubConsistency}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="commits"
                      stroke="#6366f1"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="stats shadow w-full bg-base-100 rounded-2xl">
              <div className="stat">
                <div className="stat-title">Total Commits</div>
                <div className="stat-value text-primary">340</div>
              </div>
              <div className="stat">
                <div className="stat-title">Pull Requests</div>
                <div className="stat-value text-secondary">58</div>
              </div>
              <div className="stat">
                <div className="stat-title">Contributions</div>
                <div className="stat-value text-accent">127</div>
              </div>
            </div>
          </div>
        )}

        {/* LeetCode Panel */}
        {tab === "leetcode" && (
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">
                LeetCode Difficulty Breakdown
              </h3>
              <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart
                    style={{
                      filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.25))",
                    }}
                  >
                    <Pie
                      data={leetcodePie}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={90}
                    >
                      {leetcodePie.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
              <h3 className="text-xl font-bold mb-2">Submission Consistency</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={leetcodeConsistency}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="submissions"
                      stroke="#22c55e"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="stats shadow w-full bg-base-100 rounded-2xl">
              <div className="stat">
                <div className="stat-title">Total Submissions</div>
                <div className="stat-value text-primary">195</div>
              </div>
              <div className="stat">
                <div className="stat-title">Streak</div>
                <div className="stat-value text-secondary">12 Days</div>
              </div>
              <div className="stat">
                <div className="stat-title">Solved Problems</div>
                <div className="stat-value text-accent">195</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
