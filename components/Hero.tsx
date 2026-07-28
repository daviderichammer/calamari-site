"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
const PROP_FIRMS = [
  "FTMO", "The5ers", "FundedNext", "True Forex Funds", "Apex Trader",
  "TopStep", "Earn2Trade", "E8 Funding", "Fidelcrest", "MyForexFunds",
  "FTMO", "The5ers", "FundedNext", "True Forex Funds", "Apex Trader",
  "TopStep", "Earn2Trade", "E8 Funding", "Fidelcrest", "MyForexFunds",
];
export default function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[300px] sm:h-[600px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-brand-purple/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-brand-cyan/10 rounded-full blur-[80px]" />
        {/* Grid pattern */}
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
          Built by traders. Running live. Trusted with our own money.
        </div>
        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 animate-fade-in-up">
          <span className="text-brand-heading">One Platform.</span>
          <br />
          <span className="gradient-text">All Your Prop Accounts.</span>
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-brand-text max-w-3xl mx-auto mb-3 sm:mb-4 animate-fade-in-up px-2" style={{ animationDelay: "0.1s" }}>
          Dedicated Windows VPS + up to 7 MT4/MT5 instances + FX Blue trade copying + 24/7 monitoring.
          <br className="hidden sm:block" />
          <strong className="text-brand-heading"> Stop babysitting your terminals.</strong>
        </p>
        <p className="text-sm sm:text-base text-brand-text/70 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
          We built this because nothing reliable existed. We run our own prop accounts on it every day. Now it&apos;s yours.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
          <Link
            href="/checkout"
            className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white w-full sm:w-auto"
          >
            Get Started — $199/mo per VM
          </Link>
          <a
            href="#features"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-brand-text border border-brand-border hover:border-brand-blue/50 hover:text-brand-heading transition-all duration-300 w-full sm:w-auto"
          >
            See How It Works
          </a>
        </div>
        {/* Logo + Stats Row */}
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Squid Logo — hidden on smallest screens, shown from sm up */}
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
              { value: "24/7", label: "Uptime Monitoring", sub: "Watchdog auto-recovery" },
              { value: "7", label: "MT4/MT5 Instances", sub: "Per VM, any combination" },
              { value: "<1ms", label: "Signal Copy Speed", sub: "FX Blue platform-level" },
              { value: "100%", label: "Prop Firm Compatible", sub: "FTMO, The5ers, FundedNext + more" },
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
