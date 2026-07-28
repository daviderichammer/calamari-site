"use client";
import Image from "next/image";
import Link from "next/link";
export default function Solution() {
  return (
    <section id="solution" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            You bring the alpha — your read on the market.
            <br />
            <span className="gradient-text">We handle the machine.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-3xl mx-auto px-2">
            You focus purely on entries and exits. Calamari handles distribution, sizing, filtering, and risk across all your accounts.
          </p>
        </div>
        {/* Dashboard mockup */}
        <div className="relative mb-12 sm:mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-darker pointer-events-none z-10" />
          {/* Mock Dashboard UI */}
          <div className="terminal max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl glow-blue">
            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 sm:ml-4 text-brand-text text-xs font-mono truncate">dashboard.calamaritrading.ai</span>
              <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono hidden sm:inline">All systems operational</span>
              </div>
            </div>
            {/* Dashboard content mockup */}
            <div className="p-3 sm:p-6 bg-[#0A0B14]">
              {/* Top stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { label: "Total Balance", value: "$47,832", change: "+2.4%", up: true },
                  { label: "Open Positions", value: "12", change: "4 accounts", up: true },
                  { label: "Today's P&L", value: "+$1,247", change: "+2.67%", up: true },
                  { label: "VPS Uptime", value: "99.98%", change: "30 days", up: true },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#0F1120] rounded-xl p-2 sm:p-4 border border-[#1E2035]">
                    <div className="text-xs text-brand-text mb-1">{stat.label}</div>
                    <div className="text-sm sm:text-lg font-bold text-brand-heading">{stat.value}</div>
                    <div className={`text-xs mt-1 ${stat.up ? "text-green-400" : "text-red-400"}`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
              {/* Account rows */}
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs text-brand-text uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
                  Active MT4/MT5 Instances
                </div>
                {[
                  { name: "Prop Firm Challenge #1", firm: "Prop Firm A", balance: "$12,450", pl: "+$340", status: "Running", positions: 3 },
                  { name: "Funded Account Phase 2", firm: "Prop Firm B", balance: "$8,920", pl: "+$210", status: "Running", positions: 2 },
                  { name: "Evaluation Account", firm: "Prop Firm C", balance: "$24,100", pl: "+$580", status: "Running", positions: 5 },
                  { name: "Funded Account #2", firm: "Prop Firm A", balance: "$2,362", pl: "+$117", status: "Copying", positions: 2 },
                ].map((account, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-[#0F1120] rounded-xl px-3 sm:px-4 py-2 sm:py-3 border border-[#1E2035] hover:border-brand-blue/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-brand-heading">{account.name}</div>
                        <div className="text-xs text-brand-text">{account.firm}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm">
                      <div className="text-brand-heading font-mono hidden sm:block">{account.balance}</div>
                      <div className="text-green-400 font-mono font-semibold">{account.pl}</div>
                      <div className="text-xs text-brand-text hidden sm:block">{account.positions} positions</div>
                      <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                        account.status === "Copying"
                          ? "bg-brand-blue/20 text-brand-cyan"
                          : "bg-green-500/20 text-green-400"
                      }`}>
                        {account.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {[
            {
              step: "Layer 1",
              title: "We host your VMs",
              desc: "Always-on managed Windows VPS, up to 7 MT4/MT5 instances any blend.",
            },
            {
              step: "Layer 2",
              title: "We copy your trades",
              desc: "FX Blue Personal Trade Copier, millisecond-level, intra-VM.",
            },
            {
              step: "Layer 3",
              title: "We size and filter",
              desc: "Per-account rules, lot scaling based on account size/risk%, symbol blocking.",
            },
            {
              step: "Layer 4",
              title: "We monitor & protect",
              desc: "Drawdown alerts, daily loss limits, prop firm compliance tracking.",
            },
            {
              step: "Layer 5",
              title: "Full visibility",
              desc: "Built-in dashboard replaces third-party monitoring tools — no extra EA needed.",
            },
          ].map((step, i) => (
            <div key={i} className="relative text-center p-4 rounded-xl bg-brand-card/50 border border-brand-border">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-border mb-3">
                  <span className="text-sm font-black gradient-text">{step.step}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* How it works */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-brand-heading">How it works</h3>
          <div className="text-left space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">1.</strong> You trade on YOUR device — your phone, your laptop, MT5, however you want. That&apos;s your signal account.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">2.</strong> Calamari copies those trades to your other accounts (prop firms, funded accounts, personal accounts).</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">3.</strong> Each receiving account has its own rules: lot sizing based on account size, symbol filters, risk limits.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">4.</strong> You focus purely on entries and exits. Calamari handles distribution, sizing, filtering, and risk.</p>
            </div>
          </div>
        </div>
        
        {/* Trust & Security */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            Trust & Security
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-brand-heading">Your trades stay yours. Period.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We don&apos;t see your strategy — we see executions, not intent.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We will NEVER copy your trades to any other account.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We will NEVER share your trading data.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">Your prop firm accounts are safe — no pattern-matching risk from our side.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">You can revoke access instantly.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">Full transparency: you see everything happening on your dashboard in real-time.</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-brand-text mt-8 font-semibold">We are traders ourselves running our own money on this same platform.</p>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-10 sm:mt-16 px-4">
          <Link
            href="/checkout"
            className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white w-full sm:w-auto justify-center"
          >
            Get Your Setup Running Today
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
