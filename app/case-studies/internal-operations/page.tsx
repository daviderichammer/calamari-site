import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Case Study: How We Run 17 Tentacles for Our Own Prop Trading Operation | Calamari Trading",
  description:
    "A transparent look at how Calamari Trading uses its own platform to manage 17 Tentacles, 100+ MT5 terminals, and multi-account copy trading across a live prop trading operation.",
};

export default function CaseStudyInternalOperations() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-brand-darker pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-brand-purple/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-brand-text/60">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-text/40">Case Studies</span>
          <span>/</span>
          <span className="text-brand-cyan">Internal Operations</span>
        </div>

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live Operation — Running Now
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-6 leading-tight">
            How We Run 17 Tentacles for Our Own Prop Trading Operation
          </h1>
          <p className="text-base sm:text-xl text-brand-text leading-relaxed max-w-3xl">
            We built Calamari to solve our own problem. This is a transparent account of how we use the platform
            to manage a live, multi-Tentacle prop trading infrastructure — the same infrastructure
            you get access to when you subscribe.
          </p>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {[
            { value: "17", label: "Active Tentacles", sub: "Running simultaneously" },
            { value: "100+", label: "Potential Terminals", sub: "Up to 7 per Tentacle" },
            { value: "30s", label: "Health Check Interval", sub: "Watchdog polling cycle" },
            { value: "$199", label: "Per Tentacle / Month", sub: "vs $500+ managed hosting" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-brand-card border border-brand-border text-center"
            >
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-brand-heading leading-tight mb-0.5">{stat.label}</div>
              <div className="text-xs text-brand-text/60">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Section 1 — Background */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">1</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">The Problem We Were Solving</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed">
            <p>
              Running a prop trading operation across multiple funded accounts is not a technology problem that
              off-the-shelf solutions handle well. Each prop firm account has its own drawdown limit, lot-size
              ceiling, and instrument restrictions. A trade that is perfectly sized for a $50,000 account is
              wrong for a $10,000 account. Executing across all accounts manually — or trusting a cloud-based
              copier with sub-second timing requirements — introduces unacceptable risk.
            </p>
            <p>
              We needed a system where the copy logic ran <em>locally</em>, on the same machine as every
              terminal involved, eliminating the external network round-trip between sender and receiver.
              We also needed that machine to be continuously monitored and self-healing — because prop firm
              trading does not pause for weekends, and a crashed terminal during a live trade is a real
              financial event.
            </p>
            <p>
              We built Tentacle to be that machine. And then we deployed 17 of them.
            </p>
          </div>
        </section>

        {/* Section 2 — Scale */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">2</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">Scale: 17 Tentacles Running Simultaneously</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              Our internal operation currently runs 17 Tentacles in parallel. Each Tentacle is a dedicated
              managed Windows appliance — not a shared environment, not a container, not a VPS slice
              with noisy neighbours. Each one runs its own isolated instance of Windows, its own MT5
              installations, and its own local copy of FX Blue Personal Trade Copier.
            </p>
            <p>
              Across 17 Tentacles, with up to 7 MT5 terminals per Tentacle (including the master), our
              infrastructure has the capacity to support over 100 active terminals simultaneously. In practice,
              the number of live terminals at any given moment depends on how many accounts are funded and
              active — but the capacity is there, and the architecture scales linearly: adding a Tentacle
              adds another isolated unit of capacity without affecting any existing Tentacle.
            </p>
          </div>

          {/* Architecture visual */}
          <div className="rounded-2xl border border-brand-border bg-brand-card/40 p-5 sm:p-8">
            <div className="text-xs text-brand-text/50 uppercase tracking-widest font-semibold mb-6 text-center">
              Our 17-Tentacle Architecture
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
              {Array.from({ length: 17 }, (_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-2 sm:p-3 text-center"
                >
                  <div className="text-lg sm:text-xl mb-1">🦑</div>
                  <div className="text-xs font-bold text-brand-heading">T-{String(i + 1).padStart(2, "0")}</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400/80">Live</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-brand-text/50 font-mono">
              17 isolated Tentacles · each running independently · no shared state
            </div>
          </div>
        </section>

        {/* Section 3 — Terminal count */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">3</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">Terminal Count: Up to 7 MT5 Instances Per Tentacle</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              Each Tentacle supports up to 7 MT5 terminal instances running concurrently. One of those
              terminals is designated as the master — the account you trade from your phone or laptop.
              The remaining six are receivers, each configured with its own lot-scaling factor, symbol
              filter, and per-account risk parameters.
            </p>
            <p>
              This means a single Tentacle can serve a trader running one master account and up to six
              funded accounts simultaneously. Across 17 Tentacles, that is a potential of 102 terminals
              — all monitored, all auto-recovering, all copying locally without an external relay.
            </p>
          </div>

          {/* Terminal layout example */}
          <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5 sm:p-8">
            <div className="text-xs text-brand-text/50 uppercase tracking-widest font-semibold mb-6">
              Example: Single Tentacle Layout
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30">
                <div className="text-lg">🦑</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-brand-heading">Master Terminal</div>
                  <div className="text-xs text-brand-text/60">FX Blue sender · you trade this account from anywhere</div>
                </div>
                <div className="text-xs font-mono text-brand-cyan px-2 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20">SENDER</div>
              </div>
              {[
                { label: "Receiver 1", sub: "$10k funded account · 0.2× lot scale" },
                { label: "Receiver 2", sub: "$25k funded account · 0.5× lot scale" },
                { label: "Receiver 3", sub: "$50k funded account · 1.0× lot scale" },
                { label: "Receiver 4", sub: "$100k funded account · 2.0× lot scale" },
                { label: "Receiver 5", sub: "Challenge account · symbol-filtered" },
                { label: "Receiver 6", sub: "Challenge account · reduced risk profile" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-bold text-brand-heading">{r.label}</div>
                    <div className="text-xs text-brand-text/50">{r.sub}</div>
                  </div>
                  <div className="text-xs font-mono text-green-400/80 px-2 py-1 rounded bg-green-500/10 border border-green-500/20">RECEIVER</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-brand-border text-center">
              <span className="text-xs text-brand-text/50 font-mono">
                All 7 terminals run on the same Tentacle · copy propagation is local · no external relay
              </span>
            </div>
          </div>
        </section>

        {/* Section 4 — Copy Trading */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">4</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">Copy Trading: FX Blue Intra-Tentacle Propagation</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              We use FX Blue Personal Trade Copier for all intra-Tentacle copying. The key architectural
              decision is that both the sender terminal and all receiver terminals run on the same Tentacle.
              There is no external cloud relay, no third-party copying service, and no network round-trip
              between the trade detection and the copy execution.
            </p>
            <p>
              This matters for two reasons. First, latency: local copy propagation is sub-second because
              the sender and receivers communicate over the local machine's memory bus, not over the internet.
              Second, reliability: a cloud-based copier introduces a dependency on an external service that
              can go down independently of your terminals. Our architecture has no such external dependency
              in the copy path.
            </p>
            <p>
              Each receiver is configured independently with its own lot-scaling factor, symbol whitelist or
              blacklist, and maximum position size. A trade on the master account triggers the copier, which
              applies each receiver's configuration before placing the order — so a 1.0-lot trade on the
              master might become a 0.2-lot trade on a $10k receiver and a 2.0-lot trade on a $100k receiver,
              all from a single master entry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "⚡",
                title: "Sub-second local propagation",
                desc: "Sender and receivers share the same Tentacle. No external network hop in the copy path — the copier communicates locally.",
              },
              {
                icon: "⚖️",
                title: "Per-account lot scaling",
                desc: "Each receiver has its own multiplier. One master trade correctly sizes across accounts of any size simultaneously.",
              },
              {
                icon: "🔒",
                title: "No external relay dependency",
                desc: "FX Blue runs locally on the Tentacle. The copy path has zero dependency on any external cloud service or API.",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl bg-brand-card border border-brand-border">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="text-sm font-bold text-brand-heading mb-2">{item.title}</div>
                <div className="text-xs text-brand-text leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — Watchdog / Recovery */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">5</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">Recovery: Watchdog Controller Auto-Restart</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              Across 17 Tentacles running 24/7, terminal crashes are not a hypothetical. MT5 terminals
              occasionally freeze, disconnect, or exit unexpectedly — particularly after broker-side
              server maintenance, Windows update cycles, or network interruptions. Without automated
              recovery, a crashed terminal during a live trade is a position that is no longer being
              managed.
            </p>
            <p>
              The Watchdog Controller runs on every Tentacle and polls the health of each terminal
              every 30 seconds. If a terminal is found to be unresponsive, not running, or in an error
              state, the Watchdog initiates an automated restart sequence: it terminates any hung process,
              clears any lock files, and relaunches the terminal with its original configuration. The
              entire recovery cycle typically completes within 60–90 seconds of the fault being detected.
            </p>
            <p>
              This monitoring runs continuously — nights, weekends, and public holidays. Our team does
              not need to be awake for a terminal to recover from a crash at 3 AM on a Sunday.
            </p>
          </div>

          {/* Watchdog timeline */}
          <div className="rounded-2xl border border-brand-border bg-brand-card/40 p-5 sm:p-8">
            <div className="text-xs text-brand-text/50 uppercase tracking-widest font-semibold mb-6">
              Watchdog Recovery Sequence
            </div>
            <div className="space-y-0">
              {[
                {
                  time: "T+0s",
                  event: "Terminal becomes unresponsive",
                  detail: "Process hangs, exits unexpectedly, or loses broker connection",
                  color: "red",
                },
                {
                  time: "T+30s",
                  event: "Watchdog detects fault",
                  detail: "Health check polling cycle identifies the terminal as non-functional",
                  color: "yellow",
                },
                {
                  time: "T+32s",
                  event: "Recovery sequence initiated",
                  detail: "Watchdog terminates hung process, clears lock files, prepares restart",
                  color: "yellow",
                },
                {
                  time: "T+45s",
                  event: "Terminal relaunched",
                  detail: "Original configuration applied, broker login credentials re-injected",
                  color: "blue",
                },
                {
                  time: "T+60–90s",
                  event: "Terminal reconnected and operational",
                  detail: "Broker connection re-established, copy copier resumes, health check passes",
                  color: "green",
                },
              ].map((step, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                      step.color === "red" ? "bg-red-400" :
                      step.color === "yellow" ? "bg-yellow-400" :
                      step.color === "blue" ? "bg-brand-blue" :
                      "bg-green-400"
                    }`} />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-brand-border my-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-brand-cyan">{step.time}</span>
                      <span className="text-sm font-bold text-brand-heading">{step.event}</span>
                    </div>
                    <p className="text-xs text-brand-text/70">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — LiveView */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">6</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">LiveView: Remote Access to Any Terminal, From Anywhere</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              With 17 Tentacles running simultaneously, our team cannot physically sit in front of each
              machine. LiveView solves this: it streams a real-time view of any terminal on any Tentacle
              directly to a browser, from any location, without requiring a VPN, RDP client, or
              third-party remote-desktop tool.
            </p>
            <p>
              In practice, this means we can verify that a specific receiver account on Tentacle 12 has
              correctly copied a trade — from a phone, from a different country, at any hour — without
              any special software installed on the viewing device. The stream is secured over TLS and
              is not recorded or retained.
            </p>
            <p>
              For a 17-Tentacle operation, this is not a convenience feature. It is an operational
              necessity. The alternative — logging into 17 separate RDP sessions to audit terminal
              states — is not a viable monitoring workflow at scale.
            </p>
          </div>

          <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-5 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">🖥️</div>
              <div>
                <div className="text-sm font-bold text-brand-heading mb-2">How we use LiveView operationally</div>
                <ul className="space-y-2">
                  {[
                    "Verify copy execution on any receiver terminal within seconds of a master trade",
                    "Audit terminal state after a Watchdog recovery event to confirm clean restart",
                    "Check open positions and account equity across Tentacles without logging into each one",
                    "Confirm broker reconnection after known maintenance windows",
                    "Provide evidence of terminal state for prop firm compliance checks",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text">
                      <span className="text-brand-cyan mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Cost Efficiency */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">7</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">Cost Efficiency: $199/mo vs $500+ for Comparable Managed Hosting</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              Running 17 Tentacles at $199 per month each costs $3,383 per month in total infrastructure.
              The alternative — provisioning 17 comparable managed Windows environments with equivalent
              monitoring, auto-recovery, remote access, and MT5-optimised configuration from a traditional
              managed hosting provider — would cost $500 or more per unit per month, totalling $8,500+
              per month for the same footprint.
            </p>
            <p>
              The $500+ figure is not hypothetical. It reflects the market rate for managed Windows VPS
              environments with equivalent RAM, CPU, and included management services from providers
              that target the trading infrastructure segment. At that price point, the monitoring,
              auto-recovery, and remote access capabilities are often sold as add-ons rather than
              included by default.
            </p>
            <p>
              Calamari includes Watchdog monitoring, auto-restart, LiveView, and MT5-optimised
              configuration in the base $199/month price. There are no add-on fees for the features
              that make the infrastructure operationally viable.
            </p>
          </div>

          {/* Cost comparison table */}
          <div className="rounded-2xl border border-brand-border overflow-hidden">
            <div className="bg-brand-card/60 px-5 py-3 border-b border-brand-border">
              <div className="text-xs font-semibold text-brand-text/60 uppercase tracking-wider">Cost Comparison — Per Tentacle / Month</div>
            </div>
            <div className="divide-y divide-brand-border">
              <div className="grid grid-cols-3 px-5 py-3 text-xs font-semibold text-brand-text/50 uppercase tracking-wider">
                <div>Feature</div>
                <div className="text-center">Calamari Tentacle</div>
                <div className="text-center">Comparable Managed Hosting</div>
              </div>
              {[
                { feature: "Dedicated Windows environment", calamari: "✓", other: "✓" },
                { feature: "MT5-optimised configuration", calamari: "✓", other: "Add-on / manual" },
                { feature: "Watchdog auto-recovery", calamari: "✓", other: "Add-on / not included" },
                { feature: "30-second health checks", calamari: "✓", other: "5–15 min typical" },
                { feature: "LiveView remote access", calamari: "✓", other: "RDP only / add-on" },
                { feature: "FX Blue copier setup", calamari: "✓", other: "Manual / not included" },
                { feature: "Monthly price", calamari: "$199", other: "$500+" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-brand-card/20" : ""}`}>
                  <div className="text-brand-text">{row.feature}</div>
                  <div className="text-center text-green-400 font-semibold">{row.calamari}</div>
                  <div className="text-center text-brand-text/50">{row.other}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl border border-brand-blue/30 bg-brand-blue/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <div className="text-sm font-bold text-brand-heading mb-1">Our 17-Tentacle operation saves ~$5,117/month</div>
                <div className="text-xs text-brand-text/70">
                  $3,383/mo with Calamari vs $8,500+/mo for equivalent managed hosting.
                  That is $61,404 per year in infrastructure cost avoided — without sacrificing
                  any of the monitoring, recovery, or remote-access capabilities.
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="text-2xl font-black gradient-text">$61k+</div>
                <div className="text-xs text-brand-text/60">saved per year</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — What this means for you */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-brand-cyan flex-shrink-0">8</div>
            <h2 className="text-xl sm:text-2xl font-black text-brand-heading">What This Means for You</h2>
          </div>
          <div className="space-y-4 text-brand-text leading-relaxed mb-8">
            <p>
              When you subscribe to Calamari, you are not getting a product that was built for a
              hypothetical customer. You are getting the exact infrastructure we use to run our own
              live trading operation. Every feature exists because we needed it. Every edge case has
              been encountered by us first.
            </p>
            <p>
              The Watchdog recovery logic was tuned against real terminal crashes on real broker
              connections. The LiveView architecture was designed around the operational reality of
              managing multiple Tentacles without RDP sprawl. The FX Blue configuration defaults
              were set based on what actually works across a range of prop firm account types.
            </p>
            <p>
              We have skin in the game. Our own funded accounts depend on this infrastructure
              working correctly, every day, without manual intervention. That is the standard
              we hold ourselves to — and it is the standard you get when you deploy a Tentacle.
            </p>
          </div>

          {/* Quote */}
          <div className="p-6 sm:p-8 rounded-2xl border border-brand-purple/30 bg-brand-purple/5">
            <div className="text-base sm:text-lg text-brand-text leading-relaxed italic mb-4">
              &ldquo;We still run our own accounts on it every day. If it breaks for you, it breaks for us.
              That is the only alignment that actually matters.&rdquo;
            </div>
            <div className="text-sm font-semibold text-brand-heading">— Calamari Trading, Internal Operations Team</div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/10 to-brand-purple/5 p-6 sm:p-10 text-center mb-12">
          <div className="text-2xl sm:text-3xl font-black text-brand-heading mb-3">
            Ready to deploy your own Tentacle?
          </div>
          <p className="text-brand-text mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Start with one Tentacle at $199/month. The same infrastructure we run for our own
            prop trading operation — configured, monitored, and self-healing from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/checkout"
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white"
            >
              Get Started — $199/month
            </Link>
            <Link
              href="/#features"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-brand-text border border-brand-border hover:border-brand-blue/50 hover:text-brand-heading transition-all duration-300"
            >
              See All Features
            </Link>
          </div>
        </div>

        {/* Footer nav */}
        <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
            ← Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Terms</Link>
            <Link href="/privacy" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Privacy</Link>
            <Link href="/security" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
