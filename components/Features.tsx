"use client";
export default function Features() {
  const features = [
    {
      icon: "🖥️",
      title: "Layer 1: Managed Windows VM",
      desc: "Each customer receives an isolated Windows VM with allocated CPU, memory and storage. Customers do not share an operating-system environment or trading-terminal installation. Always-on, managed, and monitored. Up to 7 MT4/MT5 instances, any blend. We handle the infrastructure so you never have to think about it.",
      tags: ["Windows Server", "Always-on", "Fully managed"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "hover:border-blue-500/40",
    },
    {
      icon: "📡",
      title: "Layer 2: FX Blue Trade Copying",
      desc: "FX Blue Personal Trade Copier runs as an EA directly inside MT4/MT5. Sender and receiver terminals communicate locally within the same VM, avoiding an external cloud-copying relay — sub-second local copy propagation. We configure and manage it for you.",
      tags: ["FX Blue", "Sub-second local copy", "Intra-VM"],
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
      desc: "Built-in dashboard replaces third-party monitoring tools — no extra EA needed. One screen. Every account. See balances, open positions, P&L, and account health across your MT4/MT5 accounts in real time. Full analytics, no tab-switching.",
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
      desc: "Our lightweight agent runs on your VM and connects it to the Calamari network. It enables remote management, trade data streaming, and health telemetry — all encrypted. The nervous system of the whole operation.",
      tags: ["Encrypted", "Lightweight", "Auto-reconnect"],
      color: "from-purple-500/20 to-transparent",
      borderColor: "hover:border-purple-500/40",
    },
    {
      icon: "🏢",
      title: "MT4 & MT5 Terminal Compatible",
      desc: "Calamari is technically compatible with standard MT4 and MT5 terminals. Firm, program and account eligibility is reviewed during onboarding. No special integrations or prop firm partnerships required.",
      tags: ["MT4 compatible", "MT5 compatible", "Onboarding review"],
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

        {/* FX Blue callout — condensed */}
        <div className="mt-8 sm:mt-12 rounded-2xl bg-brand-card border border-brand-border p-5 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="text-3xl sm:text-4xl flex-shrink-0">📡</div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-2">
                Why FX Blue — not API-based copiers
              </h3>
              <p className="text-brand-text text-sm leading-relaxed">
                API-based and cloud-based copy services introduce latency, have outages, and when they fail, your trades do not copy.
                FX Blue Personal Trade Copier runs as an EA directly inside MT4/MT5. Sender and receiver terminals communicate locally within the same VM,
                avoiding an external cloud-copying relay. <strong className="text-brand-heading">This is the only approach we trust with our own money.</strong>
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
            Just like a real squid, Calamari extends its reach across your accounts simultaneously —
            monitoring, copying, recovering, and reporting — all from a single intelligent core.
            Up to 7 MT4/MT5 instances per VM. You stay in control without being everywhere at once.
          </p>
        </div>

        {/* What Calamari Adds Section — prominent */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-4">
              The managed-service layer
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-heading mb-4">
              What Calamari adds around the copier
            </h2>
            <p className="text-sm sm:text-base text-brand-text max-w-2xl mx-auto">
              FX Blue performs local copying. Calamari operates, monitors and supervises the environment around it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Centralized account telemetry",
              "External VM and terminal health monitoring (outside-the-VM heartbeat)",
              "Automatic terminal recovery",
              "Consolidated copy-event visibility",
              "Browser-based LiveView",
              "Managed symbol and sizing configuration",
              "Controlled onboarding and test-copy validation",
              "Incident investigation and support",
              "Cross-account risk visibility",
              "Administrative and configuration logging",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-brand-card border border-brand-border">
                <span className="text-brand-cyan flex-shrink-0">✓</span>
                <span className="text-sm font-medium text-brand-text">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 text-center">
            <p className="text-sm sm:text-base text-brand-text italic">
              &ldquo;FX Blue performs local copying. Calamari operates, monitors and supervises the environment around it.&rdquo;
            </p>
          </div>
        </div>

        {/* Capability Status Table */}
        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-heading mb-4">
              Capability Status
            </h2>
            <p className="text-sm sm:text-base text-brand-text">
              What is live today versus what is on the roadmap.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-darker/50">
                    <th className="text-left py-4 px-6 text-xs font-bold text-brand-text uppercase tracking-wider">Capability</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-brand-text uppercase tracking-wider">Current Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {[
                    { cap: "Daily-loss monitoring", status: "Displays and alerts", color: "text-green-400" },
                    { cap: "Maximum-drawdown monitoring", status: "Displays and alerts", color: "text-green-400" },
                    { cap: "Lot scaling", status: "Configured through FX Blue", color: "text-green-400" },
                    { cap: "Prohibited-symbol filtering", status: "Blocks configured symbols", color: "text-green-400" },
                    { cap: "Emergency account pause", status: "Manual (support request)", color: "text-yellow-400" },
                    { cap: "Pre-trade breach prevention", status: "Roadmap", color: "text-brand-cyan" },
                    { cap: "Automatic liquidation", status: "Roadmap", color: "text-brand-cyan" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-brand-blue/5 transition-colors">
                      <td className="py-4 px-6 font-semibold text-brand-heading">{row.cap}</td>
                      <td className={`py-4 px-6 font-medium ${row.color}`}>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
