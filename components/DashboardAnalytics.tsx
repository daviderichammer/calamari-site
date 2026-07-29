"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "performance", label: "Performance", icon: "📈" },
  { id: "trades", label: "Trades", icon: "🎯" },
  { id: "risk", label: "Risk", icon: "🛡️" },
  { id: "multiacccount", label: "Multi-Account", icon: "🏦" },
];

const performanceMetrics = [
  { label: "Calmar Ratio", value: "2.84", desc: "Annualized return / max drawdown", highlight: true, color: "text-brand-cyan" },
  { label: "Sharpe Ratio", value: "1.92", desc: "Risk-adjusted return", highlight: false, color: "text-green-400" },
  { label: "Sortino Ratio", value: "2.31", desc: "Downside deviation adjusted", highlight: false, color: "text-green-400" },
  { label: "Profit Factor", value: "1.73", desc: "Gross profit / gross loss", highlight: false, color: "text-green-400" },
  { label: "Max Drawdown", value: "-4.2%", desc: "Peak-to-trough decline", highlight: false, color: "text-red-400" },
  { label: "Recovery Factor", value: "3.4×", desc: "Net profit / max drawdown", highlight: false, color: "text-brand-cyan" },
  { label: "Expectancy", value: "$127", desc: "Average profit per trade", highlight: false, color: "text-green-400" },
  { label: "Win Rate", value: "67.3%", desc: "Winning trades percentage", highlight: false, color: "text-green-400" },
];

const tradeMetrics = [
  { label: "Win Rate", value: "67.3%", color: "text-green-400" },
  { label: "Avg RR", value: "1:2.1", color: "text-brand-cyan" },
  { label: "Best Trade", value: "+$847", color: "text-green-400" },
  { label: "Worst Trade", value: "-$312", color: "text-red-400" },
  { label: "Avg Duration", value: "4h 23m", color: "text-brand-cyan" },
  { label: "Consec. Wins", value: "8", color: "text-green-400" },
];

const riskItems = [
  { label: "Max Drawdown", current: "2.1%", limit: "10%", pct: 21, status: "safe" },
  { label: "Daily Loss Limit", current: "3.2%", limit: "5%", pct: 64, status: "warn" },
  { label: "Position Sizing", current: "Within limits", limit: "", pct: 30, status: "safe" },
  { label: "Margin Usage", current: "18.4%", limit: "100%", pct: 18, status: "safe" },
];

const accounts = [
  { name: "Prop Firm Challenge #1", firm: "Prop Firm A", balance: "$15,420", equity: "$16,112", pl: "+$692", positions: 4, status: "Running" },
  { name: "Funded Account Phase 2", firm: "Prop Firm B", balance: "$14,230", equity: "$14,987", pl: "+$757", positions: 3, status: "Running" },
  { name: "Evaluation Account", firm: "Prop Firm C", balance: "$13,650", equity: "$14,381", pl: "+$731", positions: 4, status: "Running" },
  { name: "Challenge Account #2", firm: "Prop Firm D", balance: "$12,980", equity: "$13,498", pl: "+$518", positions: 3, status: "Copying" },
  { name: "Funded Account #3", firm: "Prop Firm E", balance: "$11,820", equity: "$12,347", pl: "+$527", positions: 3, status: "Running" },
  { name: "Evaluation Account #2", firm: "Prop Firm F", balance: "$9,870", equity: "$10,221", pl: "+$351", positions: 3, status: "Copying" },
  { name: "Funded Account #4", firm: "Prop Firm G", balance: "$16,862", equity: "$17,286", pl: "+$424", positions: 3, status: "Running" },
];

const replacements = [
  { tool: "Third-party monitoring tool", cost: "$29/mo", feature: "Performance analytics" },
  { tool: "External account monitor", cost: "$19/mo", feature: "Account monitoring" },
  { tool: "External trade analytics", cost: "$25/mo", feature: "Trade analytics" },
  { tool: "External equity tracker", cost: "$15/mo", feature: "Equity charts" },
  { tool: "Extra EA", cost: "Resources", feature: "Data collection" },
];

export default function DashboardAnalytics() {
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <section id="dashboard" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
            Built-in Analytics Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Your trading cockpit.
            <br />
            <span className="gradient-text">No extra tools needed.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-3xl mx-auto mb-8 px-2">
            Most traders pay $20–50/month for a separate monitoring dashboard, then run an extra EA that eats resources.
            With Calamari, full analytics are built in. One less thing to manage.
          </p>

          {/* Replacement callout */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 px-2">
            {["Third-party monitoring", "External analytics", "External trade tracker", "Separate equity tool"].map((tool) => (
              <div key={tool} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm">
                <span className="line-through opacity-60">{tool}</span>
                <span className="text-xs">✕</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-semibold">
              <span>✓</span>
              <span>Calamari Dashboard — included</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-brand-text px-2">
            No additional software to install. No extra EA on your chart. No third-party login. It&apos;s all built into your Calamari VM.
          </p>
        </div>

        {/* Calmar Ratio Hero Callout */}
        <div className="mb-10 sm:mb-16 rounded-2xl gradient-border p-5 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <div className="flex-shrink-0 text-center">
              <div className="text-5xl sm:text-6xl font-black gradient-text mb-1">2.84</div>
              <div className="text-brand-cyan font-bold text-base sm:text-lg">Calmar Ratio</div>
              <div className="text-xs text-brand-text mt-1">Annualized Return ÷ Max Drawdown</div>
            </div>
            <div className="flex-1 sm:border-l sm:border-brand-border sm:pl-8">
              <h3 className="text-lg sm:text-xl font-bold text-brand-heading mb-3 text-center sm:text-left">
                The metric we named ourselves after — front and center.
              </h3>
              <p className="text-brand-text text-sm leading-relaxed mb-3">
                The Calmar ratio is the number that separates disciplined traders from lucky ones. Anyone can make money in a bull run.
                The Calmar ratio tells you whether your edge is real. We obsess over it — so we built it into the dashboard as the headline metric.
              </p>
              <p className="text-brand-text text-sm leading-relaxed">
                Alongside Calmar, you get Sharpe ratio, Sortino ratio, profit factor, recovery factor, and expectancy — all calculated in real time
                across every account, every trade.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation — scrollable on mobile */}
        <div className="mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex-shrink-0 touch-manipulation ${
                  activeTab === tab.id
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                    : "bg-brand-card border border-brand-border text-brand-text hover:text-brand-heading hover:border-brand-blue/40"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-10 sm:mb-16">

          {/* Performance Analytics Tab */}
          {activeTab === "performance" && (
            <div className="space-y-6 sm:space-y-8">
              {/* Screenshot mockup */}
              <div className="terminal rounded-2xl overflow-hidden shadow-2xl glow-blue">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 sm:ml-4 text-brand-text text-xs font-mono truncate">Performance Analytics — All Accounts</span>
                  <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono hidden sm:inline">Live</span>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/dashboard-analytics.png"
                    alt="Calamari Performance Analytics Dashboard — equity curve, drawdown chart, Calmar ratio"
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {performanceMetrics.map((m, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 sm:p-4 border transition-all duration-200 hover:-translate-y-0.5 ${
                      m.highlight
                        ? "bg-brand-blue/10 border-brand-blue/40 shadow-lg shadow-brand-blue/10"
                        : "bg-brand-card border-brand-border hover:border-brand-blue/30"
                    }`}
                  >
                    {m.highlight && (
                      <div className="text-xs text-brand-cyan font-semibold mb-1 uppercase tracking-wider">★ Headline</div>
                    )}
                    <div className="text-xs text-brand-text mb-1">{m.label}</div>
                    <div className={`text-xl sm:text-2xl font-black font-mono ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-brand-text mt-1 leading-tight hidden sm:block">{m.desc}</div>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "📉", title: "Equity Curve", desc: "Real-time and historical equity curve with balance vs equity overlay. See exactly how your account grew over time." },
                  { icon: "🔻", title: "Drawdown Chart", desc: "Absolute and percentage drawdown visualized over time. Know your worst periods at a glance." },
                  { icon: "📅", title: "P&L Calendar Heatmap", desc: "Daily, weekly, and monthly P&L breakdowns in a color-coded calendar. Spot your best and worst trading days instantly." },
                  { icon: "📊", title: "Cumulative Profit Chart", desc: "Watch your edge compound over time. Cumulative profit curve updated after every closed trade." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-blue/30 transition-colors">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-brand-heading text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-brand-text leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trade Analytics Tab */}
          {activeTab === "trades" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="terminal rounded-2xl overflow-hidden shadow-2xl glow-blue">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 sm:ml-4 text-brand-text text-xs font-mono truncate">Trade Analytics — May 2025</span>
                  <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono hidden sm:inline">Live</span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/dashboard-trades.png"
                    alt="Calamari Trade Analytics — P&L calendar heatmap, performance by session and symbol"
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
                {tradeMetrics.map((m, i) => (
                  <div key={i} className="rounded-xl p-3 sm:p-4 bg-brand-card border border-brand-border text-center hover:border-brand-blue/30 transition-colors">
                    <div className="text-xs text-brand-text mb-1">{m.label}</div>
                    <div className={`text-base sm:text-xl font-black font-mono ${m.color}`}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "🗓️", title: "P&L Calendar Heatmap", desc: "Every trading day color-coded from deep red to bright green. Identify your best sessions, worst weeks, and seasonal patterns." },
                  { icon: "🌍", title: "Performance by Session", desc: "Asian, London, and New York session breakdown. Know exactly which session your edge lives in." },
                  { icon: "💱", title: "Performance by Symbol", desc: "See your P&L, win rate, and trade count broken down by currency pair and instrument." },
                  { icon: "📆", title: "Performance by Day of Week", desc: "Are you consistently losing on Mondays? The data knows. Day-of-week breakdown reveals hidden patterns." },
                  { icon: "⏱️", title: "Trade Duration Analysis", desc: "Average trade duration, distribution histogram, and correlation between hold time and profitability." },
                  { icon: "🎲", title: "Lot Size Distribution", desc: "Visualize your position sizing consistency. Spot outlier trades and sizing drift over time." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-blue/30 transition-colors">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-brand-heading text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-brand-text leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risk Monitoring Tab */}
          {activeTab === "risk" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="terminal rounded-2xl overflow-hidden shadow-2xl glow-blue">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 sm:ml-4 text-brand-text text-xs font-mono truncate">Risk & Compliance Monitor — Real-time</span>
                  <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono hidden sm:inline">All rules passing</span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/dashboard-risk.png"
                    alt="Calamari Risk Monitoring — prop firm compliance, drawdown tracking, real-time positions"
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Live compliance indicators */}
              <div className="rounded-2xl bg-brand-card border border-brand-border p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="font-bold text-brand-heading text-sm sm:text-base">Live Prop Firm Compliance</h3>
                  <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="hidden sm:inline">All rules passing</span>
                    <span className="sm:hidden">Passing</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {riskItems.map((item, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-brand-text">{item.label}</span>
                        <span className={`font-mono font-semibold ${item.status === "warn" ? "text-amber-400" : "text-green-400"}`}>
                          {item.current}{item.limit ? ` / ${item.limit}` : ""}
                        </span>
                      </div>
                      <div className="h-2 bg-brand-border rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            item.status === "warn"
                              ? "bg-gradient-to-r from-amber-500 to-amber-400"
                              : "bg-gradient-to-r from-green-600 to-green-400"
                          }`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                  <span className="text-green-400 text-xs sm:text-sm font-semibold">✓ All prop firm rules: COMPLIANT — 3.2% of 5% daily limit used</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "⚠️", title: "Real-time Drawdown Tracking", desc: "Live max drawdown vs your prop firm limit. Color-coded alerts as you approach thresholds — green, amber, red." },
                  { icon: "📏", title: "Daily Loss Limit Tracking", desc: "See exactly how much of your daily loss limit you've used. Resets at midnight server time. Never get caught off guard." },
                  { icon: "💼", title: "Margin & Exposure Monitor", desc: "Real-time margin usage and total market exposure across all open positions. Know your risk at any moment." },
                  { icon: "🔔", title: "Push Alerts & Notifications", desc: "Drawdown threshold hit, trade executed, SL/TP triggered, connection lost — alerts delivered instantly to your phone." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-blue/30 transition-colors">
                    <div className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-brand-heading text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-brand-text leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Account Tab */}
          {activeTab === "multiacccount" && (
            <div className="space-y-6 sm:space-y-8">
              <div className="terminal rounded-2xl overflow-hidden shadow-2xl glow-blue">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 sm:ml-4 text-brand-text text-xs font-mono truncate">All Accounts Overview — 7/7 Active</span>
                  <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono hidden sm:inline">All systems operational</span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/dashboard-multiacccount.png"
                    alt="Calamari Multi-Account Overview — all 7 instances at a glance with aggregated P&L"
                    width={1280}
                    height={720}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Aggregated stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: "Total Balance", value: "$94,832", color: "text-brand-heading" },
                  { label: "Floating P&L", value: "+$3,000", color: "text-green-400" },
                  { label: "Open Positions", value: "23", color: "text-brand-cyan" },
                  { label: "Accounts Active", value: "7 / 7", color: "text-green-400" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl p-3 sm:p-4 bg-brand-card border border-brand-border text-center">
                    <div className="text-xs text-brand-text mb-1">{stat.label}</div>
                    <div className={`text-xl sm:text-2xl font-black font-mono ${stat.color}`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Account cards */}
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs text-brand-text uppercase tracking-wider font-semibold mb-3">
                  Per-Account Status Cards
                </div>
                {accounts.map((acc, i) => (
                  <div
                    key={i}
                    className="bg-brand-card rounded-xl px-3 sm:px-4 py-3 border border-brand-border hover:border-brand-blue/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-brand-heading">{acc.name}</div>
                          <div className="text-xs text-brand-text">{acc.firm}</div>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full font-medium sm:hidden ${
                        acc.status === "Copying"
                          ? "bg-brand-blue/20 text-brand-cyan"
                          : "bg-green-500/20 text-green-400"
                      }`}>
                        {acc.status}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm mt-2 sm:mt-0 sm:justify-end">
                      <div className="text-center">
                        <div className="text-xs text-brand-text">Balance</div>
                        <div className="font-mono font-semibold text-brand-heading text-xs sm:text-sm">{acc.balance}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-brand-text">P&L</div>
                        <div className="font-mono font-semibold text-green-400 text-xs sm:text-sm">{acc.pl}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-brand-text">Pos.</div>
                        <div className="font-mono font-semibold text-brand-cyan text-xs sm:text-sm">{acc.positions}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full font-medium hidden sm:block ${
                        acc.status === "Copying"
                          ? "bg-brand-blue/20 text-brand-cyan"
                          : "bg-green-500/20 text-green-400"
                      }`}>
                        {acc.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* vs. Third-party tools comparison */}
        <div className="mb-10 sm:mb-16 rounded-2xl bg-brand-card border border-brand-border overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-brand-border">
            <h3 className="text-lg sm:text-xl font-bold text-brand-heading text-center">
              Everything third-party monitoring tools do. Built in. No extra EA required.
            </h3>
            <p className="text-brand-text text-sm text-center mt-2">
              Stop paying for tools that should have been included from day one.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="text-left px-4 sm:px-6 py-3 sm:py-4 text-brand-text font-medium">Tool</th>
                  <th className="text-center px-3 sm:px-4 py-3 sm:py-4 text-brand-text font-medium">Cost</th>
                  <th className="text-left px-3 sm:px-4 py-3 sm:py-4 text-brand-text font-medium hidden sm:table-cell">What it does</th>
                  <th className="text-center px-3 sm:px-4 py-3 sm:py-4 text-brand-cyan font-medium">Calamari</th>
                </tr>
              </thead>
              <tbody>
                {replacements.map((row, i) => (
                  <tr key={i} className="border-b border-brand-border/50 hover:bg-brand-blue/5 transition-colors">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <span className="text-red-400 line-through opacity-70">{row.tool}</span>
                    </td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-center">
                      <span className="text-red-400 font-mono text-xs">{row.cost}</span>
                    </td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-brand-text hidden sm:table-cell">{row.feature}</td>
                    <td className="px-3 sm:px-4 py-3 sm:py-4 text-center">
                      <span className="text-green-400 font-bold">✓</span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-green-500/5">
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-cyan">Calamari</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-center">
                    <span className="text-green-400 font-bold font-mono">$0 extra</span>
                  </td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-brand-text hidden sm:table-cell">All of the above + more</td>
                  <td className="px-3 sm:px-4 py-3 sm:py-4 text-center">
                    <span className="text-green-400 font-bold">✓ Built in</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 sm:p-6 bg-brand-blue/5 border-t border-brand-border">
            <p className="text-center text-brand-text text-xs sm:text-sm">
              <strong className="text-brand-heading">No additional software to install.</strong> No extra EA running on your chart.
              No third-party login. No monthly subscription for monitoring.
              It&apos;s all built into your Calamari VM — accessible from any browser, anywhere.
            </p>
          </div>
        </div>

        {/* Real-time monitoring features */}
        <div className="mb-10 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-heading mb-3">
              Real-time. Always on. No refresh needed.
            </h3>
            <p className="text-brand-text max-w-2xl mx-auto text-sm sm:text-base px-2">
              The dashboard streams live data from all your MT4/MT5 instances. Every tick. Every trade. Every account event.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "📡",
                title: "Live Open Positions",
                desc: "Every open trade across all accounts — entry price, current price, live P&L, duration, and lot size. Updated in real time.",
                color: "from-brand-blue/20 to-transparent",
                border: "hover:border-brand-blue/40",
              },
              {
                icon: "⏳",
                title: "Pending Orders",
                desc: "All pending limit and stop orders visible in one place. Know what's waiting to trigger before it does.",
                color: "from-brand-cyan/20 to-transparent",
                border: "hover:border-brand-cyan/40",
              },
              {
                icon: "📜",
                title: "Account Events Feed",
                desc: "A live stream of everything that happens: trades opened, closed, SL/TP hit, margin calls, connection events. Your trading journal, automated.",
                color: "from-brand-purple/20 to-transparent",
                border: "hover:border-brand-purple/40",
              },
              {
                icon: "🔔",
                title: "Push Notifications",
                desc: "Drawdown threshold breached, trade executed, connection lost — instant alerts to your phone. No more checking every 10 minutes.",
                color: "from-amber-500/20 to-transparent",
                border: "hover:border-amber-500/40",
              },
              {
                icon: "📊",
                title: "Account Health Score",
                desc: "A composite score for each account based on drawdown usage, daily loss limit, and rule compliance. Green means go.",
                color: "from-green-500/20 to-transparent",
                border: "hover:border-green-500/40",
              },
              {
                icon: "🔗",
                title: "Cross-Account Correlation",
                desc: "Are your accounts moving together or independently? Correlation analysis reveals concentration risk across your portfolio.",
                color: "from-pink-500/20 to-transparent",
                border: "hover:border-pink-500/40",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl p-4 sm:p-6 bg-brand-card border border-brand-border ${item.border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{item.icon}</div>
                  <h4 className="font-bold text-brand-heading mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-brand-text leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl gradient-border p-6 sm:p-10 text-center max-w-3xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-4">📊</div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-heading mb-4">
            Your analytics. Your accounts. One screen.
          </h3>
          <p className="text-brand-text mb-6 leading-relaxed text-sm sm:text-base px-2">
            Stop juggling external monitoring dashboards and multiple prop firm portals.
            Calamari gives you everything — Calmar ratio, equity curves, drawdown tracking, prop firm compliance,
            and real-time multi-account monitoring — built in, no extra cost, no extra setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/checkout"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white w-full sm:w-auto"
            >
              Get Your Dashboard Today
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://dashboard.calamaritrading.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/10 transition-all duration-200 w-full sm:w-auto"
            >
              View Live Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
