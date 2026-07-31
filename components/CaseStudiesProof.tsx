"use client";
import Link from "next/link";

export default function CaseStudiesProof() {
  return (
    <section id="case-studies" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            We eat our own cooking
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-heading mb-4">
            Running live on our own infrastructure
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Calamari is not vaporware. We run 17 Tentacles for our own prop trading operation.
            Every feature was built to solve a real problem we encountered ourselves.
          </p>
        </div>

        {/* Featured case study card */}
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies/internal-operations"
            className="group block rounded-2xl border border-brand-border bg-brand-card hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all duration-300 overflow-hidden"
          >
            {/* Card top bar */}
            <div className="bg-brand-blue/5 border-b border-brand-border px-6 sm:px-8 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Live Infrastructure</span>
              </div>
              <span className="text-xs text-brand-text/50 font-mono">case-study #001</span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {/* Left — text */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-brand-heading mb-3 group-hover:text-brand-cyan transition-colors leading-tight">
                    How We Run 17 Tentacles for Our Own Prop Trading Operation
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text leading-relaxed mb-6">
                    Real operational data from our 17-Tentacle Contabo Windows VM fleet — covering
                    scale, Watchdog auto-recovery, FX Blue intra-Tentacle copying, LiveView remote
                    access, and cost efficiency.
                  </p>
                  <div className="inline-flex items-center gap-2 text-brand-cyan text-sm font-semibold group-hover:gap-3 transition-all">
                    Read the case study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Right — stats */}
                <div className="grid grid-cols-2 gap-3 sm:w-64 flex-shrink-0">
                  {[
                    { value: "17", label: "Tentacles", sub: "Running simultaneously" },
                    { value: "100+", label: "Terminals", sub: "Up to 7 per Tentacle" },
                    { value: "30s", label: "Health checks", sub: "Watchdog interval" },
                    { value: "$199", label: "Per month", sub: "vs $500+ elsewhere" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-brand-dark border border-brand-border text-left"
                    >
                      <div className="text-xl font-black gradient-text">{stat.value}</div>
                      <div className="text-xs font-semibold text-brand-heading mt-0.5">{stat.label}</div>
                      <div className="text-xs text-brand-text/50 mt-0.5">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/case-studies"
            className="text-sm text-brand-text/60 hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
          >
            View all case studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
