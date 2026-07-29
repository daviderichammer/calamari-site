"use client";
export default function Features() {
  const features = [
    {
      icon: "🖥️",
      title: "Layer 1: Managed Windows VPS",
      desc: "Your own isolated Windows environment — always-on, managed, and monitored. Up to 7 MT4/MT5 instances, any blend. Dedicated resources — your VM is yours alone. We handle the infrastructure so you never have to think about it.",
      tags: ["Windows Server", "Always-on", "Fully managed"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "hover:border-blue-500/40",
    },
    {
      icon: "📡",
      title: "Layer 2: FX Blue Trade Copying",
      desc: "FX Blue Personal Trade Copier — sub-second local copy propagation, intra-VM. It runs as an EA directly inside MT4/MT5, no API latency, no external dependencies. Sender and receiver on the same VM means platform-level execution speed. We configure and manage it for you.",
      tags: ["FX Blue", "Sub-second execution", "Intra-VM"],
      color: "from-cyan-500/20 to-transparent",
      borderColor: "hover:border-cyan-500/40",
    },
    {
      icon: "⚖️",
      title: "Layer 3: Intelligent Sizing & Filtering",
      desc: "Per-account rules via FX Blue copier receiver filter: lot scaling based on account size and risk%, symbol blocking, max lot limits. Each receiving account gets its own configuration — sized correctly, filtered correctly.",
      tags: ["Lot scaling", "Symbol filters", "Per-account rules"],
      color: "from-yellow-500/20 to-transparent",
      borderColor: "hover:border-yellow-500/40",
    },
    {
      icon: "🛡️",
      title: "Layer 4: Monitor & Protect",
      desc: "Two distinct functions: Monitoring delivers real-time alerts and warnings — drawdown approaching limits, daily loss thresholds, copy failures, terminal crashes. Enforcement actions (blocking trades, reducing size, pausing receivers, closing positions) are on the active development roadmap and will be clearly labeled when available.",
      tags: ["Alerts (live)", "Warnings (live)", "Enforcement (roadmap)"],
      color: "from-red-500/20 to-transparent",
      borderColor: "hover:border-red-500/40",
    },
    {
      icon: "📊",
      title: "Layer 5: Full Visibility Dashboard",
      desc: "Built-in dashboard replaces third-party monitoring tools — no extra EA needed. One screen. Every account. See balances, open positions, P&L, and account health across all your prop firms in real time. Full analytics, no tab-switching.",
      tags: ["Real-time", "Built-in analytics", "No extra EA"],
      color: "from-green-500/20 to-transparent",
      borderColor: "hover:border-green-500/40",
    },
    {
      icon: "🔭",
      title: "LiveView",
      desc: "See your MT4/MT5 terminals in real time directly from your browser. No RDP client needed. Watch your charts, verify your trades, and troubleshoot — from your phone if you want. Your screens, anywhere.",
      tags: ["Browser-based", "No RDP needed", "Mobile access"],
      color: "from-orange-500/20 to-transparent",
      borderColor: "hover:border-orange-500/40",
    },
    {
      icon: "🦑",
      title: "Tentacle Agent",
      desc: "Our lightweight agent runs on your VPS and connects it to the Calamari network. It enables remote management, trade data streaming, and signal execution — all encrypted. The nervous system of the whole operation.",
      tags: ["Encrypted", "Lightweight", "Auto-reconnect"],
      color: "from-purple-500/20 to-transparent",
      borderColor: "hover:border-purple-500/40",
    },
    {
      icon: "🏢",
      title: "Built for MT4 & MT5 Prop Firms",
      desc: "Works with any prop firm that supports MetaTrader 4 or MetaTrader 5. No special integrations, no prop firm partnerships required. FTMO, The5ers, FundedNext, and any other MT4/MT5 firm — subject to current program rules.",
      tags: ["MT4 prop firms", "MT5 prop firms", "Any MT4/MT5 firm"],
      color: "from-indigo-500/20 to-transparent",
      borderColor: "hover:border-indigo-500/40",
    },
  ];
  return (
    <section id="features" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
            The infrastructure stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Five layers of infrastructure.
            <br />
            <span className="gradient-text">One monthly price.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            Every layer below exists so you can focus on your edge — your read on the market, your timing, your entries — and nothing else.
          </p>
        </div>

        {/* Monitor & Protect detail callout */}
        <div className="mb-8 sm:mb-12 rounded-2xl bg-brand-card border border-red-500/20 p-5 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="text-3xl sm:text-4xl flex-shrink-0">🛡️</div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-3">
                What &ldquo;Monitor &amp; Protect&rdquo; actually means
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Monitoring — Live Now</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-brand-text">
                    <li>• Real-time drawdown alerts as limits approach</li>
                    <li>• Daily loss threshold warnings</li>
                    <li>• Copy failure notifications</li>
                    <li>• Terminal crash detection and auto-restart</li>
                    <li>• Incident diagnosis and failure reporting</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Enforcement — Roadmap</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-brand-text">
                    <li>• Block new trades when limits are reached</li>
                    <li>• Automatically reduce position size</li>
                    <li>• Pause individual receiver accounts</li>
                    <li>• Close positions on breach threshold</li>
                  </ul>
                  <p className="text-xs text-brand-text/50 mt-2 italic">
                    Enforcement features will be clearly labeled when available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 sm:p-6 bg-brand-card border border-brand-border ${feature.borderColor} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed mb-3 sm:mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {feature.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-full bg-brand-blue/10 text-brand-cyan border border-brand-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FX Blue callout */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-brand-card border border-brand-border p-5 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="text-3xl sm:text-4xl flex-shrink-0">📡</div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-2">
                Why FX Blue — not API-based copiers
              </h3>
              <p className="text-brand-text text-sm leading-relaxed mb-3">
                API-based and cloud-based copy services introduce latency, have outages, and when they fail, your trades do not copy. That is not acceptable when real money is on the line.
              </p>
              <p className="text-brand-text text-sm leading-relaxed">
                FX Blue Personal Trade Copier runs as an EA directly inside MT4/MT5 — no external API calls, no network round-trips. Sender and receiver on the same VM means the copy happens at the platform level, in sub-second time. <strong className="text-brand-heading">This is the only approach we trust with our own money.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-8 sm:mt-10 rounded-2xl gradient-border p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="text-3xl sm:text-4xl mb-4">🦑</div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-heading mb-3">
            Ten tentacles. One brain.
          </h3>
          <p className="text-sm sm:text-base text-brand-text">
            Just like a real squid, Calamari extends its reach across all your accounts simultaneously —
            monitoring, copying, recovering, and reporting — all from a single intelligent core.
            Up to 7 MT4/MT5 instances per VM. You stay in control without being everywhere at once.
          </p>
        </div>
      </div>
    </section>
  );
}
