"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is Calamari a signal service or prop firm pass service?",
    a: "No. Calamari does not provide signals, strategies, or account-management services. We are infrastructure. You bring your own strategy and we provide the machine that runs it across multiple accounts simultaneously. We believe traders should retain ownership of their trading decisions. Our job is to make their infrastructure dependable.",
  },
  {
    q: "Will this get my prop firm account banned?",
    a: "No. Calamari runs on a dedicated VPS — your own isolated Windows environment. From the prop firm's perspective, it looks exactly like a normal trader running MT4/MT5 on a VPS. We do not inject into the platform or modify its behavior in any way that would violate terms of service. Thousands of traders use VPS hosting for their prop accounts — that is completely standard practice.",
  },
  {
    q: "Can Calamari see my strategy or copy my trades to other accounts?",
    a: "No. We see executions — open trades, close trades, P&L — not your intent or strategy logic. We do not copy your trades to any other account. We do not share your trading data with anyone. Your accounts are our priority. You can revoke access instantly at any time. We are traders ourselves running our own money on this same platform — we built the privacy guarantees we would want for ourselves.",
  },
  {
    q: "How does the trade copying actually work?",
    a: "We use FX Blue Personal Trade Copier — a proven EA that runs directly inside MT4/MT5. There is no external API, no cloud round-trip, no latency introduced by a third-party service. The sender and receiver instances run on the same VM, so copying happens at the platform level in sub-second time. We configure and manage FX Blue for you — you do not need to touch it.",
  },
  {
    q: "What prop firms are supported?",
    a: "Any prop firm that uses MetaTrader 4 or MetaTrader 5. Works with any MT4/MT5 prop firm — no special integrations or prop firm partnerships required. FTMO, The5ers, FundedNext, and any other MT4/MT5 firm are supported, subject to their current program rules. If your prop firm runs MT4 or MT5, Calamari works with it.",
  },
  {
    q: "What happens if my VPS crashes?",
    a: "The Watchdog service monitors your VPS and MT4/MT5 instances continuously. If MT4/MT5 crashes, it restarts automatically within seconds. If the VPS itself goes down, you get an immediate alert via email. We monitor it too — we run our own accounts on the same infrastructure.",
  },
  {
    q: "Can I use my existing MT4/MT5 accounts?",
    a: "Yes. You bring your own MT4/MT5 login credentials (server, account number, password) and we configure the instance for you. Nothing about your account changes — we are just providing the infrastructure to run it on.",
  },
  {
    q: "How many MT4/MT5 instances can I run?",
    a: "Up to 7 MT4/MT5 instances per VM — any combination of MT4 and MT5. Need more? Add another VM at $199/month. Each VM is fully independent with its own dedicated Windows environment.",
  },
  {
    q: "How quickly will my VM be ready after I sign up?",
    a: "After signup we verify your account compatibility, provision your dedicated VM, and walk through the full setup with you. The onboarding process typically completes within 24 hours. You will receive your dashboard login and connection details once your VM is live.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-ins. Cancel anytime from your dashboard and your subscription ends at the end of the billing period. We also offer a 7-day money-back guarantee if you are not satisfied.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Not really. If you can log into MT4/MT5 and enter a server, account number, and password, you can use Calamari. We handle all the infrastructure setup, including FX Blue configuration. The dashboard is designed to be intuitive for traders, not sysadmins.",
  },
  {
    q: "What is LiveView?",
    a: "LiveView is a browser-based feature that lets you see your MT4/MT5 terminal in real time from any browser — no RDP client, no VPN, no special software. You can watch your charts, verify your trades, and monitor your terminals from your phone.",
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
            Straight answers. No marketing fluff.
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="mailto:support@calamaritrading.ai"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-medium touch-manipulation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@calamaritrading.ai
            </a>
            <span className="text-brand-text/30 hidden sm:inline">or</span>
            <button
              onClick={() => { if (typeof window !== "undefined" && (window as any).Tawk_API) { (window as any).Tawk_API.toggle(); } }}
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors font-medium touch-manipulation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
