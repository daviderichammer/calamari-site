"use client";
import { useState } from "react";
const faqs = [
  {
    q: "Is Calamari a signal service or prop firm pass service?",
    a: "No. We are not a signal service, and we are not trading your account for you. We are infrastructure. You bring your own strategy — your own alpha, meaning your own edge, your own read on the market, the thing that makes you profitable. We provide the machine that runs it across multiple accounts simultaneously. If you're looking for someone to trade for you, we're not that. If you already know how to trade and want to scale it efficiently, that's exactly what we built this for.",
  },
  {
    q: "Will this get my prop firm account banned?",
    a: "No. Calamari runs on a dedicated VPS — your own isolated Windows environment. From the prop firm's perspective, it looks exactly like a normal trader running MT4/MT5 on a VPS. We don't inject into the platform or modify its behavior in any way that would violate terms of service. Thousands of traders use VPS hosting for their prop accounts — that's completely standard practice.",
  },
  {
    q: "Can Calamari see my strategy or copy my trades to other accounts?",
    a: "No, and we want to be crystal clear about this. We see executions — open trades, close trades, P&L — not your intent or strategy logic. We will never copy your trades to any other account. We will never share your trading data with anyone. Your prop firm accounts are safe from pattern-matching risk on our side. You can revoke access instantly at any time. We are traders ourselves running our own money on this same platform — we built the privacy guarantees we'd want for ourselves.",
  },
  {
    q: "How does the trade copying actually work?",
    a: "We use FX Blue Personal Trade Copier — a free, proven EA that runs directly inside MT4/MT5. There's no external API, no cloud round-trip, no latency introduced by a third-party service. The sender and receiver instances run on the same VM, so copying happens at the platform level in milliseconds. We configure and manage FX Blue for you — you don't need to touch it. We tried API-based copiers and cloud-based copy services. They're not reliable enough for real trading. FX Blue at the platform level is the only approach we trust with our own money.",
  },
  {
    q: "What's the difference between Calamari and API-based copiers or cloud-based copy services?",
    a: "Cloud-based copiers route your trade signals through an external server. That introduces latency, creates a dependency on a third-party service, and means if their service has an outage, your copies don't execute. FX Blue runs as an EA inside MT4/MT5 on your own VPS — no external dependencies, no API calls, no latency. It's local, platform-level copying. That's why we use it.",
  },
  {
    q: "What happens if my VPS crashes?",
    a: "The Watchdog service monitors your VPS and MT4/MT5 instances continuously. If MT4/MT5 crashes, it restarts automatically within seconds. If the VPS itself goes down (rare, but it happens), you get an immediate alert via email. We're monitoring it too — we run our own accounts on the same infrastructure.",
  },
  {
    q: "Can I use my existing MT4/MT5 accounts?",
    a: "Yes. You bring your own MT4/MT5 login credentials (server, account number, password) and we configure the instance for you. Nothing about your account changes — we're just providing the infrastructure to run it on.",
  },
  {
    q: "How many MT4/MT5 instances can I run?",
    a: "Up to 7 MT4/MT5 instances per VM — any combination of MT4 and MT5. Need more? Add another VM at $199/month. Each VM is fully independent with its own dedicated Windows environment.",
  },
  {
    q: "What prop firms are supported?",
    a: "Any prop firm that uses MT4 or MT5. If it runs MT4 or MT5, Calamari supports it — no special integrations or prop firm partnerships required.",
  },
  {
    q: "How quickly will my VPS be ready after I sign up?",
    a: "Provisioning is automated. After successful payment, your VPS is spun up and MT4/MT5 is installed within 5–15 minutes. You'll receive an email with your dashboard login and VPS connection details.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-ins. Cancel anytime from your dashboard and your subscription ends at the end of the billing period. We also offer a 7-day money-back guarantee if you're not satisfied.",
  },
  {
    q: "What's the difference between the dashboard and the VPS?",
    a: "The VPS is the Windows server where MT4/MT5 actually runs. The dashboard is the web interface at dashboard.calamaritrading.ai where you monitor and manage everything. The Tentacle agent on your VPS is what connects the two. You access the dashboard from any browser — no need to RDP into the VPS for day-to-day monitoring.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Not really. If you can log into MT4/MT5 and enter a server/account/password, you can use Calamari. We handle all the infrastructure setup, including FX Blue configuration. The dashboard is designed to be intuitive for traders, not sysadmins.",
  },
  {
    q: "What's LiveView?",
    a: "LiveView is a browser-based screen sharing feature that lets you see your MT4/MT5 terminal in real time from any browser — no RDP client, no VPN, no special software. It's secured with a token-based auth system. You can watch your charts, verify your trades, and monitor your terminals from your phone.",
  },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Questions traders
            <br />
            <span className="gradient-text">actually ask.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text">
            We&apos;ve been asked all of these. Here are the real answers — no marketing fluff.
          </p>
        </div>
        {/* FAQ accordion */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-brand-blue/40 bg-brand-blue/5"
                  : "border-brand-border bg-brand-card hover:border-brand-blue/20"
              }`}
            >
              <button
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 touch-manipulation"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm sm:text-base font-semibold text-brand-heading">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-text flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-brand-cyan" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-brand-text leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Still have questions */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-brand-text mb-4">Still have questions?</p>
          <a
            href="mailto:support@calamaritrading.ai"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-medium touch-manipulation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@calamaritrading.ai
          </a>
        </div>
      </div>
    </section>
  );
}
