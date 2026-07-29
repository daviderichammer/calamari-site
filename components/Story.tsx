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

        {/* Master-Terminal Architecture Details */}
        <div className="mb-16 sm:mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-4">
              Architecture details
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-heading mb-4">
              How the master-terminal model works
            </h2>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 mb-8">
            <p className="text-sm sm:text-base text-brand-text leading-relaxed italic">
              &ldquo;Your designated master account remains connected through a terminal on the Calamari VM. You may trade that account normally from your phone or computer. When the VM terminal detects the resulting trade, the local copier distributes the configured instructions to the receiving terminals.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📱",
                title: "Trade from anywhere",
                desc: "MetaTrader allows simultaneous logins. You can place trades into the master account from your phone, laptop, or any device. The terminal on the VM detects those trades and triggers the copy.",
              },
              {
                icon: "🔢",
                title: "Terminal limit includes master",
                desc: "The master terminal counts toward the stated limit. Up to 7 total terminals per VM — including the master. For example: 1 master + 6 receivers.",
              },
              {
                icon: "🗂️",
                title: "Multiple master accounts",
                desc: "Multiple master accounts can be configured for traders running different strategies across separate account groups. Each master drives its own set of receivers.",
              },
              {
                icon: "⚡",
                title: "Manual changes persist",
                desc: "If you manually alter a receiver account, the change persists until the next copy event overrides it. Be aware of this when making manual adjustments.",
              },
              {
                icon: "🔌",
                title: "Disconnect behavior",
                desc: "If the master account or broker connection disconnects, copying pauses until reconnection. The watchdog detects this condition and alerts you.",
              },
              {
                icon: "📊",
                title: "Broker execution is independent",
                desc: "Sub-second local copy propagation describes the intra-VM copy speed. Broker execution speed, fills and slippage remain dependent on the broker, market conditions and network connectivity.",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-xl bg-brand-card border border-brand-border">
                <div className="flex items-start gap-3">
                  <div className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-brand-heading mb-1">{item.title}</div>
                    <div className="text-xs sm:text-sm text-brand-text">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Customer Definition */}
        <div className="rounded-2xl bg-brand-card border border-brand-border p-6 sm:p-10 max-w-4xl mx-auto">
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
