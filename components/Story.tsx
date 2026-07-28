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

          {/* Left: Origin story — trimmed to 2-3 paragraphs */}
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

        {/* Quote */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center px-2">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-30">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-heading italic leading-relaxed">
            We did not build Calamari to sell software. We built it because we needed it to trade better.
            We still run our own accounts on it every day. That is the only endorsement that matters.
          </blockquote>
          <div className="mt-4 sm:mt-6 text-brand-text text-sm">
            — The Calamari Team, prop traders first
          </div>
        </div>
      </div>
    </section>
  );
}
