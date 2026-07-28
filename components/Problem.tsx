"use client";
export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            The problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            You have the edge.
            <br />
            <span className="text-red-400">The infrastructure is killing you.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            You know how to trade. You have your alpha — your edge, your strategy, the thing that makes you profitable. But you&apos;re spending more time managing infrastructure than actually trading. That&apos;s backwards.
          </p>
        </div>
        {/* Pain points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "😴",
              title: "3am crash alerts",
              desc: "MT5 goes down. Your position stays open. You find out in the morning when the damage is already done.",
            },
            {
              icon: "🔄",
              title: "Manual signal copying",
              desc: "Trade on one account, manually replicate it on three others. One slip and your accounts are out of sync.",
            },
            {
              icon: "🖥️",
              title: "RDP hell",
              desc: "Three separate VPS connections. Three different Windows environments. Checking each one individually, every single day.",
            },
            {
              icon: "💸",
              title: "VPS costs stacking up",
              desc: "Paying $20–50/month per VPS, then spending hours setting up MT5 on each one. The DIY tax is real.",
            },
            {
              icon: "🌐",
              title: "Six different portals",
              desc: "Prop firm dashboard. Another prop firm dashboard. Yet another portal. None of them show you the full picture across all your accounts.",
            },
            {
              icon: "🤯",
              title: "No time to actually trade",
              desc: "You're spending more time managing infrastructure than managing your strategy. That's backwards.",
            },
          ].map((pain, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-red-500/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{pain.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2">{pain.title}</h3>
              <p className="text-xs sm:text-sm text-brand-text leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
        {/* Anti-Scam Callout */}
        <div className="mt-10 sm:mt-16 max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl border border-red-500/30 bg-red-500/5">
          <h3 className="text-xl sm:text-2xl font-black text-brand-heading mb-4 text-center">
            And then there&apos;s the other problem.
          </h3>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed mb-4">
            You search for a solution and you find a million services offering to trade your prop account for you, pass your challenge for you, or sell you a &quot;secret strategy&quot; for $99/month.
          </p>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed mb-4">
            <strong className="text-brand-heading">They are all scams — by definition.</strong> If they actually had real alpha — a genuine edge, a strategy that consistently beats the market — they would not sell it for any price anyone could afford. They&apos;d be trading it themselves, compounding it into a fund. The fact that they&apos;re selling it to you is proof it doesn&apos;t work.
          </p>
          <p className="text-sm sm:text-base text-brand-heading font-semibold leading-relaxed">
            Calamari is fundamentally different. We are not selling you a strategy. We are helping traders monetize their OWN alpha — their own edge — with full transparency, by providing them a tool. You bring the edge. We handle the machine.
          </p>
        </div>
        {/* Bottom line */}
        <div className="mt-10 sm:mt-16 max-w-3xl mx-auto text-center px-2">
          <p className="text-base sm:text-xl text-brand-text leading-relaxed">
            We lived this. Every single day. Until we built something that made it stop.
          </p>
        </div>
      </div>
    </section>
  );
}
