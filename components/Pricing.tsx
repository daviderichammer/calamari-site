"use client";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/8 rounded-full blur-[120px]" />
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
            We ran the numbers. A raw VPS costs $20–50/month and you still have to build everything yourself.
            Calamari gives you the VPS <em>plus</em> the full managed stack — for less than the cost of one blown challenge.
          </p>
        </div>

        {/* Single pricing card — full width on mobile, max-lg on desktop */}
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
              <p className="text-sm text-brand-text mt-1">One dedicated Windows VPS. Up to 7 MT4/MT5 instances. Fully managed.</p>
            </div>

            {/* Price */}
            <div className="mb-6 sm:mb-8 mt-4 sm:mt-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black gradient-text">$199</span>
                <span className="text-brand-text text-sm">/month per VM</span>
              </div>
              <div className="text-xs text-brand-text mt-1">Billed monthly. Cancel anytime.</div>
            </div>

            {/* CTA */}
            <Link
              href="/checkout"
              className="block text-center w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 mb-6 sm:mb-8 btn-primary text-white"
            >
              Get Started — $199/mo
            </Link>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Dedicated Windows VPS (always-on, managed, monitored)",
                "Up to 7 MT4/MT5 instances — any combination",
                "FX Blue trade copying (configured and managed by us)",
                "Real-time dashboard with full analytics",
                "LiveView — see your MT5 screens from anywhere",
                "24/7 Watchdog with auto-recovery",
                "Tentacle agent for remote management",
                "Works with any MT4/MT5 prop firm — no special integrations required",
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
                      strokeWidth={2.5}
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

        {/* Value comparison */}
        <div className="mt-10 sm:mt-16 rounded-2xl bg-brand-card border border-brand-border p-4 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-brand-heading mb-4 sm:mb-6 text-center">
            Why Calamari beats DIY every time
          </h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-brand-border">
                  <th className="text-left py-2 sm:py-3 text-brand-text font-medium pr-2">Feature</th>
                  <th className="text-center py-2 sm:py-3 text-brand-text font-medium px-2">DIY Setup</th>
                  <th className="text-center py-2 sm:py-3 text-brand-cyan font-medium pl-2">Calamari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {[
                  ["Windows VPS", "$20–50/mo each", "Included"],
                  ["MT4/MT5 Setup", "2–4 hours each", "Automatic"],
                  ["Trade Copying", "Manual or expensive EA", "FX Blue — configured by us"],
                  ["Monitoring", "None / manual checks", "24/7 automated"],
                  ["Crash Recovery", "Wake up and fix it yourself", "Auto-restart"],
                  ["LiveView", "Need RDP client", "Browser-based"],
                  ["Multi-account view", "Multiple portals", "One dashboard"],
                  ["Total cost (7 instances)", "$140–350/mo + 10hrs/wk", "$199/mo, zero maintenance"],
                ].map(([feature, diy, cal], i) => (
                  <tr key={i} className="hover:bg-brand-blue/5 transition-colors">
                    <td className="py-2 sm:py-3 text-brand-heading font-medium pr-2">{feature}</td>
                    <td className="py-2 sm:py-3 text-center text-red-400 px-2">{diy}</td>
                    <td className="py-2 sm:py-3 text-center text-green-400 font-semibold pl-2">{cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Money back */}
        <div className="text-center mt-8 sm:mt-10 px-4">
          <p className="text-brand-text text-sm">
            <span className="text-green-400 font-semibold">7-day money-back guarantee.</span>{" "}
            If Calamari doesn&apos;t work for you in the first week, we&apos;ll refund you. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
