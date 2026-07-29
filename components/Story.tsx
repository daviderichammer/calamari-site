"use client";
export default function Story() {
  return (
    <section id="story" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left: Origin story */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-purple-400 text-sm font-medium mb-6">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
              We named it after
              <br />
              <span className="gradient-text-purple">the metric that matters.</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-brand-text leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-brand-heading">Calamari = Calmar + AI.</strong> The Calmar ratio — annualized return divided by maximum drawdown — is the number that separates disciplined traders from gamblers. We obsess over it, so we named our platform after it.
              </p>
              <p>
                We are active prop traders who were running multiple funded accounts simultaneously: multiple VPS instances, multiple terminals, multiple portals, and no way to see everything in one place. We looked for a solution, found nothing reliable, and built it ourselves. We still run our own accounts on this platform every day. When Calamari goes down, our money is at risk too.
              </p>
              <p className="text-brand-heading font-semibold">
                That is Calamari. Built by traders who were frustrated enough to build it themselves, and confident enough in what we built to offer it to you.
              </p>
            </div>

            {/* Company Identity */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-brand-card border border-brand-purple/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">📍</span>
                <span className="text-sm font-bold text-brand-heading">About the company</span>
              </div>
              <div className="space-y-3 text-sm text-brand-text">
                <div className="flex items-start gap-3">
                  <span className="text-brand-cyan font-semibold flex-shrink-0">Location</span>
                  <span>Built by prop traders. Operating entity registered internationally.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-cyan font-semibold flex-shrink-0">Team</span>
                  <span>The Calamari Team — active Forex and CFD prop traders. We trade the same accounts this platform manages.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-cyan font-semibold flex-shrink-0">Mission</span>
                  <span>Infrastructure for traders who manage their own accounts. Not signals. Not account management. Tools.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI intelligence layer */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
              Intelligent Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
              The AI layer that
              <br />
              <span className="gradient-text">protects your accounts.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed mb-6 sm:mb-8">
              Intelligent rule analysis, anomaly detection, and predictive risk warnings — so you never lose an account to a preventable breach.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "🔎",
                  title: "Prop firm rule analysis",
                  desc: "Analyzes your prop firm program rules and flags gaps or conflicts in your configuration before they become a problem.",
                  color: "border-brand-blue/30 bg-brand-blue/5",
                },
                {
                  icon: "📡",
                  title: "Anomaly detection",
                  desc: "Detects unusual patterns in trade execution and account behavior — unusual lot sizes, unexpected symbol activity, copy failures.",
                  color: "border-brand-cyan/30 bg-brand-cyan/5",
                },
                {
                  icon: "⚠️",
                  title: "Predictive breach-risk warnings",
                  desc: "Warns you before you hit a limit: \"You are 80% toward your daily loss limit with 3 open positions.\" Early enough to act.",
                  color: "border-yellow-500/30 bg-yellow-500/5",
                },
                {
                  icon: "🛠️",
                  title: "Configuration pitfall identification",
                  desc: "Flags issues like mismatched contract sizes between master and receiver, or symbol naming differences that could cause copy failures.",
                  color: "border-orange-500/30 bg-orange-500/5",
                },
                {
                  icon: "🩺",
                  title: "Automated incident diagnosis",
                  desc: "When something goes wrong, the system diagnoses the cause automatically — so you know what happened and why, without digging through logs.",
                  color: "border-brand-purple/30 bg-brand-purple/5",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border ${item.color} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-brand-heading mb-1">{item.title}</div>
                    <div className="text-xs sm:text-sm text-brand-text">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-brand-text/60 mt-4 italic">
              Anomaly detection and predictive risk warnings are on the active development roadmap.
            </p>
          </div>
        </div>

        {/* Ideal Customer Definition */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-brand-card border border-brand-border p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-4">
              Who Calamari is built for
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-heading">
              Designed for a specific trader. Not for everyone.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Good fit */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm font-bold text-green-400 uppercase tracking-wider">Calamari is right for you if</span>
              </div>
              <ul className="space-y-3 text-sm text-brand-text">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  You trade Forex or CFDs on MetaTrader 4 or MetaTrader 5
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  You manage approximately four to seven MT4/MT5 accounts that you own
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  All accounts execute from the same strategy — you want them synchronized
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  Each account has different sizing requirements that need to be applied automatically
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  You want one place to see all accounts, positions, and health at once
                </li>
              </ul>
            </div>
            {/* Not a fit */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-sm font-bold text-red-400 uppercase tracking-wider">Calamari is not right for you if</span>
              </div>
              <ul className="space-y-3 text-sm text-brand-text">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  You trade futures, options, or non-MT4/MT5 platforms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  You have a single account and do not need trade copying
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  You are looking for trade signals or a strategy to follow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  You want someone else to manage accounts that belong to other people
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  You need a PAMM, MAM, or third-party account management structure
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-brand-border text-center">
            <p className="text-sm text-brand-text/70 italic">
              Calamari is a tool for Forex and CFD traders managing their own same-owner MT4/MT5 accounts from a common execution strategy.
              If that is you, it was built for you specifically.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center px-2">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-30">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-heading italic leading-relaxed">
            We did not build Calamari to sell software. We built it because we needed it to trade better.
            We still run our own accounts on it every day. That is the only endorsement that matters.
          </blockquote>
          <div className="mt-4 sm:mt-6 text-brand-text text-sm">
            — The Calamari Team
          </div>
        </div>
      </div>
    </section>
  );
}
