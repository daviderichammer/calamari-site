"use client";
import Link from "next/link";

export default function Solution() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Simple in concept.
            <br />
            <span className="gradient-text">Serious in execution.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            You trade on your device. Calamari distributes those trades across all your prop accounts — sized correctly, filtered correctly, monitored continuously.
          </p>
        </div>

        {/* Dashboard visual mockup */}
        <div className="mb-16 sm:mb-24 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-brand-border shadow-2xl shadow-brand-blue/10">
            {/* Browser chrome */}
            <div className="bg-[#0F1120] border-b border-[#1E2035] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
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
                  { label: "Today&apos;s P&L", value: "+$1,247", change: "+2.67%", up: true },
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

        {/* Three-step explanation */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-brand-heading">Three steps. One platform.</h3>
          <div className="text-left space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">1. You trade on your device.</strong> Your phone, your laptop, MT4, MT5 — however you trade. That account becomes your signal source.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">2. Calamari copies those trades.</strong> To your prop firm accounts, funded accounts, and personal accounts — all running on your dedicated VM, all sized and filtered per-account.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F1120] border border-[#1E2035]">
              <p className="text-sm sm:text-base text-brand-text"><strong className="text-brand-cyan">3. You focus on entries and exits.</strong> Calamari handles distribution, sizing, filtering, monitoring, and recovery. Your accounts are our priority.</p>
            </div>
          </div>
        </div>

        {/* Trust & Security */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            Trust &amp; Security
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-8 text-brand-heading">Your accounts are our priority.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We do not see your strategy — we see executions, not intent.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We do not copy your trades to any other account.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">We do not sell trading data or disclose it for advertising, signal generation or use by other traders. Limited data may be processed by infrastructure and service providers solely to operate Calamari, subject to contractual confidentiality and security obligations.</p>
            </div>
            <div className="p-4 rounded-xl border border-brand-border bg-brand-card flex items-start gap-3">
              <span className="text-green-400">✓</span>
              <p className="text-sm text-brand-text">Dedicated resources — your VM is yours alone. No shared environments.</p>
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
            Start for $199/month
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
