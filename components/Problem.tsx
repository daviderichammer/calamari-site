"use client";
export default function Problem() {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            The problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Running multiple prop accounts
            <br />
            <span className="text-red-400">is a full-time job.</span>
          </h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto">
            You know the drill. Multiple VPS logins, multiple MT4/MT5 terminals, multiple prop firm portals.
            And none of it talks to each other.
          </p>
        </div>
        {/* Pain points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              desc: "FTMO dashboard. The5ers dashboard. FundedNext dashboard. None of them show you the full picture.",
            },
            {
              icon: "🤯",
              title: "No time to actually trade",
              desc: "You're spending more time managing infrastructure than managing your strategy. That's backwards.",
            },
          ].map((pain, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-red-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{pain.icon}</div>
              <h3 className="text-base font-bold text-brand-heading mb-2">{pain.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
        {/* Bottom line */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-xl text-brand-text leading-relaxed">
            We lived this. Every single day. Until we built something that made it stop.
          </p>
        </div>
      </div>
    </section>
  );
}
