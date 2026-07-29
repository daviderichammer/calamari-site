"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const PROP_FIRMS = [
  "FTMO", "The5ers", "FundedNext", "MyForexFunds", "True Forex Funds",
  "E8 Funding", "Apex Trader Funding", "Topstep", "Funded Engineer",
  "FTMO", "The5ers", "FundedNext", "MyForexFunds", "True Forex Funds",
  "E8 Funding", "Apex Trader Funding", "Topstep", "Funded Engineer",
];

export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-brand-purple/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-brand-cyan/10 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 70, 229, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          Built by prop traders. Running live. Trusted with our own money.
        </div>

        {/* Main headline — outcome-led */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 animate-fade-in-up">
          <span className="text-brand-heading">Trade once.</span>
          <br />
          <span className="gradient-text">Calamari handles the rest.</span>
        </h1>

        {/* Outcome statement */}
        <p className="text-base sm:text-xl lg:text-2xl text-brand-text max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in-up px-2" style={{ animationDelay: "0.1s" }}>
          Calamari keeps every MT4 and MT5 account correctly sized, synchronized, and within its individual limits —
          so you can execute one decision and have it applied correctly across all your accounts.
        </p>

        {/* Implementation detail explanation */}
        <p className="text-sm sm:text-base text-brand-text/70 max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: "0.15s" }}>
          Under the hood: a dedicated Windows VPS hosts your master MT5 and all receiver accounts. FX Blue Personal Trade Copier
          runs locally on that VM — no cloud round-trips, no API latency — copying trades in sub-second time with per-account lot
          sizing, symbol filters, and risk limits applied automatically.
        </p>

        <p className="text-sm sm:text-base text-brand-text/70 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
          You trade from your phone or laptop. The master account runs on the VM. Calamari does the rest.
        </p>

        {/* Professional distinction */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 p-4 sm:p-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed">
            Calamari does not provide signals, strategies, or account-management services.{" "}
            <strong className="text-brand-heading">You retain full ownership of every trading decision.</strong>{" "}
            Calamari is a tool for traders managing their own accounts — not a service that manages accounts for you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
          <Link
            href="/checkout"
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white w-full sm:w-auto"
          >
            Start for $199/month
          </Link>
          <a
            href="#how-it-works"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-brand-text border border-brand-border hover:border-brand-blue/50 hover:text-brand-heading transition-all duration-300 w-full sm:w-auto"
          >
            See How It Works
          </a>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <div className="rounded-2xl border border-brand-border bg-brand-card/60 p-5 sm:p-8">
            <div className="text-xs sm:text-sm text-brand-text/60 uppercase tracking-widest font-semibold mb-6 text-center">
              How the system works
            </div>
            {/* Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* You / Your Device */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-2xl sm:text-3xl">
                  📱
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-brand-heading">You</div>
                  <div className="text-xs text-brand-text/60">Phone / Laptop</div>
                  <div className="text-xs text-brand-text/50">Trade from anywhere</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col sm:flex-row items-center gap-1 mx-0 sm:mx-2">
                <div className="hidden sm:block w-6 h-px bg-brand-blue/40" />
                <div className="text-brand-cyan text-xs font-mono px-2 py-1 rounded bg-brand-blue/10 border border-brand-blue/20 whitespace-nowrap">
                  Place trade on master
                </div>
                <div className="hidden sm:block w-6 h-px bg-brand-blue/40" />
                <div className="hidden sm:block text-brand-blue/60">▶</div>
              </div>

              {/* Calamari VM — contains everything */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="rounded-2xl border-2 border-brand-purple/50 bg-brand-purple/5 p-4 sm:p-5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-xs font-bold text-purple-300 whitespace-nowrap">
                    Calamari VM
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-400 border-2 border-brand-darker animate-pulse" />
                  <div className="flex flex-col gap-2 mt-2">
                    {/* Master MT5 + FX Blue */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-blue/10 border border-brand-blue/30">
                      <div className="text-lg">🦑</div>
                      <div>
                        <div className="text-xs font-bold text-brand-heading">Designated master account</div>
                        <div className="text-xs text-brand-text/60">FX Blue sender</div>
                      </div>
                    </div>
                    {/* Divider with arrow */}
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex-1 h-px bg-brand-cyan/30" />
                      <div className="text-brand-cyan text-xs font-mono px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 whitespace-nowrap">copies locally</div>
                      <div className="flex-1 h-px bg-brand-cyan/30" />
                    </div>
                    {/* Receivers */}
                    {[
                      { label: "Receiver 1", sub: "Sized for $10k account" },
                      { label: "Receiver 2", sub: "Sized for $25k account" },
                      { label: "Receiver 3", sub: "Sized for $50k account" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/5 border border-green-500/20">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-brand-heading">{r.label}</div>
                          <div className="text-xs text-brand-text/50">{r.sub}</div>
                        </div>
                      </div>
                    ))}
                    <div className="text-center text-xs text-brand-text/40 font-mono">+ up to 7 total</div>
                  </div>
                </div>
                <div className="text-xs text-brand-cyan/80 font-semibold text-center">Always-on VPS — everything runs here</div>
              </div>
            </div>

            {/* Diagram footnote */}
            <div className="mt-6 pt-4 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="text-xs text-brand-text/60">
                <span className="text-brand-cyan font-semibold">Sub-second copy speed</span><br />
                Sender and receiver on the same VM — no network latency
              </div>
              <div className="text-xs text-brand-text/60">
                <span className="text-brand-cyan font-semibold">Per-account sizing</span><br />
                Each receiver has its own lot scale, symbol filter, and risk limit
              </div>
              <div className="text-xs text-brand-text/60">
                <span className="text-brand-cyan font-semibold">Always monitored</span><br />
                Watchdog auto-restarts MT4/MT5 if it crashes — 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Logo + Stats Row */}
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="relative animate-float hidden sm:block">
            <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-3xl animate-pulse-glow" />
            <Image
              src="/logo.png"
              alt="Calamari Trading Squid"
              width={200}
              height={200}
              className="relative z-10 drop-shadow-2xl sm:w-[200px] lg:w-[280px] h-auto"
              priority
            />
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 text-left w-full max-w-sm sm:max-w-none sm:w-auto">
            {[
              { value: "99.9%", label: "Uptime Target", sub: "Watchdog auto-recovery" },
              { value: "7", label: "MT4/MT5 Instances", sub: "Per VM, any combination" },
              { value: "<1s", label: "Local Copy Speed", sub: "Sub-second intra-VM propagation" },
              { value: "MT4 & MT5", label: "MT4 & MT5 Compatible", sub: "most standard MT4 and MT5 broker terminals" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-xl bg-brand-card/50 border border-brand-border backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-brand-heading">{stat.label}</div>
                <div className="text-xs text-brand-text mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prop firm ticker */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-brand-darker to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-brand-darker to-transparent z-10" />
          <div
            ref={tickerRef}
            className="flex gap-6 sm:gap-8 animate-ticker whitespace-nowrap"
          >
            {PROP_FIRMS.map((firm, i) => (
              <span key={i} className="text-xs sm:text-sm text-brand-text/50 font-medium flex-shrink-0">
                {firm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
