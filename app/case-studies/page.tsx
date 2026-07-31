import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Case Studies | Calamari Trading",
  description:
    "Real operational data from Calamari's own prop trading infrastructure. See how we use our own product to run 17 Tentacles and 100+ MT5 terminals.",
};

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              We eat our own cooking
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
              Case Studies
            </h1>
            <p className="text-base sm:text-lg text-brand-text max-w-2xl leading-relaxed">
              Every feature in Calamari was built to solve a real problem in our own prop trading operation.
              These case studies document how we use it — with real numbers.
            </p>
          </div>

          {/* Case study card */}
          <div className="grid grid-cols-1 gap-6">
            <Link
              href="/case-studies/internal-operations"
              className="group block p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-blue/50 transition-all duration-300 hover:bg-brand-blue/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-3xl flex-shrink-0">
                  🦑
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live Infrastructure
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-brand-heading mb-2 group-hover:text-brand-cyan transition-colors">
                    How We Run 17 Tentacles for Our Own Prop Trading Operation
                  </h2>
                  <p className="text-sm sm:text-base text-brand-text leading-relaxed mb-5">
                    Real operational data from our 17-Tentacle Contabo Windows VM fleet. Covers scale,
                    Watchdog auto-recovery, FX Blue intra-Tentacle copying, LiveView remote access,
                    and cost efficiency vs managed hosting alternatives.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "17 Tentacles",
                      "100+ MT5 Terminals",
                      "30s Health Checks",
                      "FX Blue Copying",
                      "LiveView",
                      "$199/mo",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-brand-text/40 group-hover:text-brand-cyan transition-colors self-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
              ← Back to Home
            </Link>
            <Link href="/checkout" className="text-sm text-brand-cyan hover:text-white transition-colors font-semibold">
              Get Started — $199/mo →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
