"use client";
export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-purple/8 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            The problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Running multiple MT4/MT5 accounts
            <br />
            <span className="gradient-text">is a second job.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            Traders who manage multiple prop accounts face a set of operational problems that have nothing to do with trading.
          </p>
        </div>

        {/* Pain points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            {
              icon: "🖥️",
              title: "Multiple terminals, multiple tabs",
              desc: "You are managing 4–7 MetaTrader windows. Each one needs to be open, logged in, and monitored. One crash means a missed copy.",
            },
            {
              icon: "📐",
              title: "Manual lot sizing every time",
              desc: "A $10k account and a $50k account need different lot sizes for the same trade. Doing this manually under pressure is a mistake waiting to happen.",
            },
            {
              icon: "🚨",
              title: "No consolidated view",
              desc: "You have to tab between accounts to see your total exposure. There is no single screen showing all your positions, P&L, and risk at once.",
            },
            {
              icon: "😴",
              title: "Terminals crash when you sleep",
              desc: "MT4/MT5 disconnects at 2am. You wake up to find a terminal that has been offline for six hours and missed three copy events.",
            },
            {
              icon: "⚠️",
              title: "Drawdown limits creeping up",
              desc: "You are watching multiple accounts manually for daily loss and max drawdown. One bad day and you miss the threshold on one account.",
            },
            {
              icon: "🔧",
              title: "Infrastructure is your problem",
              desc: "You provision the VPS. You install the terminals. You configure the copier. You diagnose failures. You own every migration and recovery risk.",
            },
          ].map((pain, i) => (
            <div
              key={i}
              className="group p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-red-500/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{pain.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2">{pain.title}</h3>
              <p className="text-xs sm:text-sm text-brand-text leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-brand-text mb-6">
            None of these are trading problems. They are infrastructure problems.
            And infrastructure problems have infrastructure solutions.
          </p>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-semibold text-sm sm:text-base"
          >
            See how Calamari solves this
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
