"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-darker/95 backdrop-blur-xl border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <Image
                  src="/logo.png"
                  alt="Calamari Trading"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold gradient-text">Calamari</span>
                <span className="text-base sm:text-lg font-bold text-brand-heading"> Trading</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="#how-it-works"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#compatibility"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                Compatibility
              </a>
              <a
                href="#faq"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                FAQ
              </a>
              <Link
                href="/case-studies/internal-operations"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                Case Study
              </Link>
              <a
                href="https://dashboard.calamaritrading.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
              >
                Login
              </a>
              <Link
                href="/checkout"
                className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button — larger tap target */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-brand-text hover:text-brand-heading hover:bg-brand-card/50 transition-colors touch-manipulation"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu — full-width dropdown */}
          {mobileOpen && (
            <div className="md:hidden bg-brand-darker/98 backdrop-blur-xl border-t border-brand-border py-3 px-2 space-y-1">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Compatibility", href: "#compatibility" },
                { label: "FAQ", href: "#faq" },
                { label: "Case Study", href: "/case-studies/internal-operations" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-xl text-brand-text hover:text-brand-heading hover:bg-brand-card/60 transition-colors text-base font-medium touch-manipulation"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://dashboard.calamaritrading.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 rounded-xl text-brand-text hover:text-brand-heading hover:bg-brand-card/60 transition-colors text-base font-medium touch-manipulation"
              >
                Login
              </a>
              <div className="pt-2 pb-1 px-2">
                <Link
                  href="/checkout"
                  className="btn-primary flex items-center justify-center px-5 py-3.5 rounded-xl text-base font-semibold text-white w-full touch-manipulation"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started — $199/mo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Mobile overlay to close menu on outside tap */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
