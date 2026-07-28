"use client";
export default function Features() {
  const features = [
    {
      icon: "🖥️",
      title: "Dedicated Windows VPS",
      desc: "Your own isolated Windows environment — always-on, managed, and monitored. No shared resources, no noisy neighbors. We handle the infrastructure so you never have to think about it.",
      tags: ["Windows Server", "Always-on", "Fully managed"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "hover:border-blue-500/40",
    },
    {
      icon: "📡",
      title: "FX Blue Trade Copying",
      desc: "We use FX Blue Personal Trade Copier — free, proven, and millisecond-level execution. It runs as an EA directly inside MT4/MT5, no API latency, no external dependencies. Sender and receiver on the same VM means essentially zero-latency local copying. We configure and manage it for you.",
      tags: ["FX Blue", "Platform-level", "Millisecond execution"],
      color: "from-cyan-500/20 to-transparent",
      borderColor: "hover:border-cyan-500/40",
    },
    {
      icon: "📊",
      title: "Real-Time Dashboard",
      desc: "One screen. Every account. See balances, open positions, P&L, and account health across all your prop firms in real time. Full analytics, no tab-switching, no logging into six different portals.",
      tags: ["Real-time", "Full analytics", "All firms"],
      color: "from-green-500/20 to-transparent",
      borderColor: "hover:border-green-500/40",
    },
    {
      icon: "🔭",
      title: "LiveView",
      desc: "See your MT5 terminals in real time directly from your browser. No RDP client needed. Watch your charts, verify your trades, and troubleshoot — from your phone if you want. Your screens, anywhere.",
      tags: ["Browser-based", "No RDP needed", "Mobile access"],
      color: "from-orange-500/20 to-transparent",
      borderColor: "hover:border-orange-500/40",
    },
    {
      icon: "🛡️",
      title: "24/7 Watchdog Recovery",
      desc: "If MT5 crashes, the watchdog restarts it automatically. If the VPS goes down, we alert you immediately. Your accounts never go unmonitored — not at 3am, not on weekends, not ever.",
      tags: ["Auto-restart", "Instant alerts", "Zero babysitting"],
      color: "from-red-500/20 to-transparent",
      borderColor: "hover:border-red-500/40",
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
      icon: "📱",
      title: "Calamari App — Coming Soon",
      desc: "Full mobile access to your dashboard, positions, and alerts. Everything you can do on the web, from your pocket. Built for traders who need to stay connected without being chained to a desk.",
      tags: ["iOS & Android", "Coming soon", "Full dashboard"],
      color: "from-pink-500/20 to-transparent",
      borderColor: "hover:border-pink-500/40",
    },
    {
      icon: "🏢",
      title: "Works With Any Prop Firm",
      desc: "FTMO, The5ers, FundedNext, True Forex Funds, Apex, TopStep, Earn2Trade, E8 Funding — if it runs MT4 or MT5, we support it. No special integrations, no prop firm partnerships required.",
      tags: ["FTMO", "The5ers", "FundedNext", "+20 more"],
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
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Built by traders.
            <br />
            <span className="gradient-text">Trusted with our own money.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            Every feature was built because we needed it ourselves. We run our own prop accounts on this platform every day.
            No bloat. No fluff. Just the tools that actually matter.
          </p>
        </div>
        {/* Features grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-5 sm:p-6 bg-brand-card border border-brand-border ${feature.borderColor} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2 sm:mb-3">{feature.title}</h3>
                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed mb-3 sm:mb-4">{feature.desc}</p>
                {/* Tags */}
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
                We tried MetaAPI and cloud-based copiers. They introduce latency, they have outages, and when they fail, your trades don&apos;t copy. That&apos;s not acceptable when real money is on the line.
              </p>
              <p className="text-brand-text text-sm leading-relaxed">
                FX Blue Personal Trade Copier runs as an EA directly inside MT4/MT5 — no external API calls, no network round-trips. Sender and receiver on the same VM means the copy happens at the platform level, in milliseconds. <strong className="text-brand-heading">This is the only approach we trust with our own money.</strong>
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
            Squids are faster and more aggressive than octopuses — exactly the edge you need.
            Up to 7 MT4/MT5 instances per VM. You stay in control without being everywhere at once.
          </p>
        </div>
      </div>
    </section>
  );
}
