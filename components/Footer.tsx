"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-border bg-brand-darker">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Calamari Trading — squid mascot" fill className="object-contain" />
              </div>
              <div>
                <span className="text-lg font-bold gradient-text">Calamari</span>
                <span className="text-lg font-bold text-brand-heading"> Trading</span>
              </div>
            </div>
            <p className="text-brand-text text-sm leading-relaxed max-w-sm mb-6">
              Managed infrastructure for serious prop traders. Dedicated Windows VPS, MT5 pre-configured,
              trade copying, and 24/7 monitoring — all from one dashboard.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-text">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-brand-heading uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Our Story", href: "#story" },
                { label: "FAQ", href: "#faq" },
                { label: "Dashboard Login", href: "https://dashboard.calamaritrading.ai" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text hover:text-brand-heading transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-brand-heading uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Email Support", href: "mailto:support@calamaritrading.ai" },
                { label: "Get Started", href: "/checkout" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text hover:text-brand-heading transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Prop firms */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-brand-text uppercase tracking-wider mb-3">
                Compatible With
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MT4 Prop Firms", "MT5 Prop Firms", "Funded Accounts", "Challenge Accounts"].map((firm, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-brand-card border border-brand-border text-brand-text"
                  >
                    {firm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-brand-text">
            © {new Date().getFullYear()} Calamari Trading. All rights reserved.
          </p>
          <p className="text-xs text-brand-text text-center sm:text-right max-w-md">
            Trading involves significant risk of loss. Calamari Trading provides infrastructure services only
            and does not provide financial advice. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
