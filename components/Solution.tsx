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
            <span className="gradient-text">Calamari</span> handles the infrastructure.
            <br />
            You focus on trading.
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-3xl mx-auto px-2">
            One dedicated Windows VPS. Up to 7 MT4/MT5 instances. FX Blue trade copying running at the platform level.
            A single dashboard where you see and control everything — from anywhere.
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
                  { name: "FTMO Challenge #1", firm: "FTMO", balance: "$12,450", pl: "+$340", status: "Running", positions: 3 },
                  { name: "The5ers Phase 2", firm: "The5ers", balance: "$8,920", pl: "+$210", status: "Running", positions: 2 },
                  { name: "FundedNext Eval", firm: "FundedNext", balance: "$24,100", pl: "+$580", status: "Running", positions: 5 },
                  { name: "FTMO Funded", firm: "FTMO", balance: "$2,362", pl: "+$117", status: "Copying", positions: 2 },
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Sign up & get your VM",
              desc: "One subscription, one VM, up to 7 MT4/MT5 instances. We provision your dedicated Windows VPS and have MT5 running within minutes.",
            },
            {
              step: "02",
              title: "Connect your prop firm accounts",
              desc: "Add your MT4/MT5 credentials. The Tentacle agent connects automatically. We configure FX Blue trade copying for you — no EA setup required on your end.",
            },
            {
              step: "03",
              title: "Trade from one dashboard",
              desc: "See all accounts, watch your terminals via LiveView, monitor positions, and let the watchdog handle the rest. From anywhere, on any device.",
            },
          ].map((step, i) => (
            <div key={i} className="relative text-center">
              {i < 2 && (
                <div className="hidden sm:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-blue/50 to-transparent -translate-x-4 z-0" />
              )}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-2xl gradient-border mb-4">
                  <span className="text-xl sm:text-2xl font-black gradient-text">{step.step}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-3">{step.title}</h3>
                <p className="text-sm text-brand-text leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
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
