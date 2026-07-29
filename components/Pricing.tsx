"use client";
import Link from "next/link";
export default function Pricing() {
  return (
    <>
      <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px section-divider" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
              Simple, transparent pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              One price. Everything included.
              <br />
              <span className="gradient-text">No tiers. No gotchas.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
              You are not paying for a server. You are paying for accountable humans who set it up correctly,
              keep it running, and are reachable when something goes wrong.
            </p>
          </div>

          {/* Single pricing card */}
          <div className="w-full sm:max-w-lg sm:mx-auto">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-brand-card border border-brand-blue/50 pricing-popular shadow-2xl shadow-brand-blue/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-lg whitespace-nowrap">
                  Everything Included
                </div>
              </div>
              {/* Plan name */}
              <div className="mb-2 mt-2">
                <h3 className="text-xl sm:text-2xl font-black text-brand-heading">Calamari VM</h3>
                <p className="text-sm text-brand-text mt-1">One dedicated Windows VM. Up to 7 MT4/MT5 instances. Fully managed.</p>
              </div>
              {/* Price */}
              <div className="mb-6 sm:mb-8 mt-4 sm:mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black gradient-text">$199</span>
                  <span className="text-brand-text text-sm">/month per VM</span>
                </div>
                <div className="text-xs text-brand-text mt-1">Billed monthly. Cancel anytime.</div>
              </div>
              {/* Primary CTA */}
              <Link
                href="/checkout"
                className="block text-center w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 mb-3 btn-primary text-white"
              >
                Start for $199/month
              </Link>
              {/* Secondary CTA */}
              <button
                onClick={() => { if (typeof window !== "undefined" && (window as any).Tawk_API) { (window as any).Tawk_API.toggle(); } }}
                className="block text-center w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 mb-6 sm:mb-8 border border-brand-border text-brand-text hover:border-brand-blue/50 hover:text-brand-heading"
              >
                Questions? Chat with us
              </button>
              {/* Features */}
              <div className="space-y-3">
                {[
                  "Dedicated Windows VM (always-on, managed, monitored)",
                  "Up to 7 MT4/MT5 instances — any combination",
                  "FX Blue trade copying (configured and managed by us)",
                  "Real-time dashboard with full analytics",
                  "LiveView — see your MT4/MT5 screens from anywhere",
                  "99.9% uptime target with Watchdog auto-recovery",
                  "Tentacle agent for remote management",
                  "Compatibility reviewed during onboarding — no special integrations required",
                ].map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-brand-text">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 text-sm pt-2 border-t border-brand-border mt-4">
                  <svg
                    className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-brand-text">
                    <strong className="text-brand-heading">Need more capacity?</strong> Add another VM at $199/month. Each VM supports up to 7 instances.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibility-shift comparison table */}
          <div className="mt-10 sm:mt-16 rounded-2xl bg-brand-card border border-brand-border p-4 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-2 text-center">
              What responsibility shifts when you use Calamari
            </h3>
            <p className="text-sm text-brand-text text-center mb-6 max-w-2xl mx-auto">
              A raw VPS costs less. Calamari is designed for traders who value managed setup, monitoring, visibility and operational accountability more than minimizing infrastructure cost.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="text-left py-3 px-4 text-xs font-bold text-brand-text uppercase tracking-wider">Task</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-brand-text uppercase tracking-wider">With a raw VPS</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-brand-cyan uppercase tracking-wider">With Calamari</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {[
                    ["Server provisioning", "You select and provision the server", "VM provisioned and managed"],
                    ["Terminal installation", "You install and update terminals", "Installation handled"],
                    ["Copier configuration", "You configure copier mappings", "Configuration handled and tested"],
                    ["Health monitoring", "You monitor terminal health", "Automated monitoring and alerting"],
                    ["Failure recovery", "You diagnose and fix failures", "Watchdog recovery and support"],
                    ["Account visibility", "You build your own consolidated view", "Dashboard and LiveView included"],
                    ["Migration & recovery risk", "You own all migration and recovery risk", "Managed failover and test process"],
                  ].map(([task, vps, cal], i) => (
                    <tr key={i} className="hover:bg-brand-blue/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-brand-heading text-xs sm:text-sm">{task}</td>
                      <td className="py-3 px-4 text-brand-text/70 text-xs sm:text-sm">{vps}</td>
                      <td className="py-3 px-4 text-brand-cyan text-xs sm:text-sm font-medium">{cal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/20">
              <p className="text-sm text-brand-text italic text-center">
                &ldquo;A raw VPS costs less. Calamari is designed for traders who value managed setup, monitoring, visibility and operational accountability more than minimizing infrastructure cost.&rdquo;
              </p>
            </div>
          </div>

          {/* Money back */}
          <div className="text-center mt-8 sm:mt-10 px-4">
            <p className="text-brand-text text-sm">
              <span className="text-green-400 font-semibold">7-day money-back guarantee.</span>{" "}
              If Calamari does not work for you in the first week, we will refund you. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Flow Section */}
      <section id="onboarding" className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px section-divider" />
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium mb-6">
              What happens after you sign up
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              From signup to live
              <br />
              <span className="gradient-text">in six steps.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
              We handle the technical setup. You review and approve before anything goes live.
            </p>
          </div>
          {/* Steps timeline */}
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/50 via-brand-cyan/30 to-transparent hidden sm:block" />
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "01",
                  icon: "📋",
                  title: "Tell us your accounts and programs",
                  desc: "Share which prop firms you are trading, which accounts you want connected, and your basic risk parameters. We verify MT4/MT5 compatibility for each program.",
                  color: "border-brand-blue/40 bg-brand-blue/5",
                  dot: "bg-brand-blue",
                },
                {
                  step: "02",
                  icon: "🔍",
                  title: "We verify compatibility and provision your VM",
                  desc: "We confirm your accounts are compatible with MT4/MT5 and provision your dedicated Windows VM. Each customer receives an isolated Windows VM with allocated CPU, memory and storage. Customers do not share an operating-system environment or trading-terminal installation.",
                  color: "border-brand-cyan/40 bg-brand-cyan/5",
                  dot: "bg-brand-cyan",
                },
                {
                  step: "03",
                  icon: "⚙️",
                  title: "Terminals installed, credentials entered securely",
                  desc: "We install and configure your MT4/MT5 terminals. Trading-platform credentials are encrypted before storage in Calamari's segregated credential vault. Credentials are never stored in plaintext. Administrative access is restricted, time-limited and logged. Customers can rotate credentials at any time. Credentials are permanently deleted upon service cancellation.",
                  color: "border-green-500/40 bg-green-500/5",
                  dot: "bg-green-400",
                },
                {
                  step: "04",
                  icon: "🗺️",
                  title: "Master and receivers mapped, risk settings reviewed",
                  desc: "We configure FX Blue: your master account is set as sender, each prop account as a receiver with its own lot-sizing rules, symbol filters, and risk limits. Sender and receiver terminals communicate locally within the same VM.",
                  color: "border-yellow-500/40 bg-yellow-500/5",
                  dot: "bg-yellow-400",
                },
                {
                  step: "05",
                  icon: "✅",
                  title: "Test trade performed — you approve production activation",
                  desc: "We run a test copy to verify the full chain works end-to-end. You review the results and give the go-ahead before we activate production mode.",
                  color: "border-orange-500/40 bg-orange-500/5",
                  dot: "bg-orange-400",
                },
                {
                  step: "06",
                  icon: "🚀",
                  title: "You are live — monitor everything from one dashboard",
                  desc: "Your setup is active. Every account, every position, every copy event — visible in real time from your Calamari dashboard. Calamari continuously monitors supported VM and terminal health signals while the service is operational, including nights and weekends.",
                  color: "border-brand-purple/40 bg-brand-purple/5",
                  dot: "bg-brand-purple",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start">
                  {/* Step dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${item.color} border flex items-center justify-center flex-shrink-0 relative z-10`}>
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 p-4 sm:p-6 rounded-2xl border ${item.color} transition-all duration-300 hover:scale-[1.01]`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-brand-text/50 uppercase tracking-widest">Step {item.step}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-heading mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA after onboarding */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/checkout"
              className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white justify-center"
            >
              Start for $199/month
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-xs text-brand-text mt-3">7-day money-back guarantee. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
}
