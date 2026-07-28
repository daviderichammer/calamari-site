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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Story text */}
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
                <strong className="text-brand-heading">Calamari = Calmar + AI.</strong> The Calmar ratio — annualized return divided by maximum drawdown — is the number that separates real traders from gamblers. Anyone can make money in a bull run. The Calmar ratio tells you whether you actually know what you&apos;re doing. It&apos;s the metric we obsess over, so we named our platform after it.
              </p>
              <p>
                We&apos;re not a SaaS company that decided to build a trading tool. We&apos;re active prop traders running our own accounts on this exact platform every single day. When Calamari goes down, our money is at risk too. That&apos;s not a marketing line — it&apos;s why the reliability bar is where it is.
              </p>
              <p>
                We were running multiple funded accounts across FTMO, The5ers, and FundedNext simultaneously.
                Three VPS instances, three MT5 terminals, three different prop firm portals — and absolutely
                zero way to see everything in one place. Every morning started the same way: open three RDP sessions,
                check that nothing crashed overnight, manually verify positions, copy signals by hand.
                It was exhausting, error-prone, and completely unsustainable.
              </p>
              <p>
                We looked for a solution. There wasn&apos;t one. Existing tools were either too expensive,
                too fragile, or required constant babysitting — which defeated the entire point. So we built it.
                It took months. We got it wrong a few times. But eventually we had something that worked — really worked.
              </p>
              <p>
                The squid isn&apos;t just a logo. It&apos;s the metaphor that drove the architecture: ten tentacles reaching across all your accounts simultaneously, managing everything in parallel, while you stay focused on what matters — your edge. Squids are faster and more aggressive than octopuses — and that&apos;s exactly the kind of edge Calamari gives you.
              </p>
              <p className="text-brand-heading font-semibold">
                That&apos;s Calamari. Built by traders who were frustrated enough to build it themselves,
                and confident enough in what we built to offer it to you.
              </p>
            </div>
          </div>
          {/* Right: Timeline / visual */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                phase: "The Name",
                icon: "📐",
                title: "Calmar + AI = Calamari",
                desc: "Named after the Calmar ratio — annualized return / max drawdown. The number that separates disciplined traders from lucky ones.",
                color: "border-brand-purple/30 bg-brand-purple/5",
              },
              {
                phase: "The Problem",
                icon: "😤",
                title: "3 VPS, 3 MT5, 3 portals",
                desc: "Managing multiple funded accounts was a full-time job in itself. Manual, fragile, and exhausting.",
                color: "border-red-500/30 bg-red-500/5",
              },
              {
                phase: "The Search",
                icon: "🔍",
                title: "Nothing reliable existed",
                desc: "We tried everything. Too expensive, too fragile, or required constant babysitting. None of it was good enough to trust with real money.",
                color: "border-yellow-500/30 bg-yellow-500/5",
              },
              {
                phase: "The Build",
                icon: "🔧",
                title: "We built it ourselves",
                desc: "Months of development. The Tentacle agent, the dashboard, the watchdog, LiveView, FX Blue integration. Piece by piece.",
                color: "border-brand-blue/30 bg-brand-blue/5",
              },
              {
                phase: "The Result",
                icon: "🚀",
                title: "It worked. Really well.",
                desc: "24/7 uptime. Millisecond-level signal copying via FX Blue. One dashboard for everything. We stopped babysitting our accounts.",
                color: "border-green-500/30 bg-green-500/5",
              },
              {
                phase: "Now",
                icon: "🦑",
                title: "We run our accounts on this. Every day.",
                desc: "We&apos;re not selling you software we built and moved on from. We trade on this platform daily. Your reliability bar is our reliability bar.",
                color: "border-brand-purple/30 bg-brand-purple/5",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border ${item.color} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-1">
                    {item.phase}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-brand-heading mb-1">{item.title}</div>
                  <div className="text-xs sm:text-sm text-brand-text">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Quote */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center px-2">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-30">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-brand-heading italic leading-relaxed">
            We didn&apos;t build Calamari to sell software. We built it because we needed it to trade better.
            We still run our own accounts on it every day. That&apos;s the only endorsement that matters.
          </blockquote>
          <div className="mt-4 sm:mt-6 text-brand-text text-sm">
            — The Calamari Team, prop traders first
          </div>
        </div>
      </div>
    </section>
  );
}
