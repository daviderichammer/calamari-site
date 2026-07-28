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

  return (
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Calamari Trading"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-lg font-bold gradient-text">Calamari</span>
              <span className="text-lg font-bold text-brand-heading"> Trading</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
              href="#story"
              className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
            >
              Our Story
            </a>
            <a
              href="#faq"
              className="text-brand-text hover:text-brand-heading transition-colors text-sm font-medium"
            >
              FAQ
            </a>
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

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-text hover:text-brand-heading"
            onClick={() => setMobileOpen(!mobileOpen)}
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

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-brand-card border-t border-brand-border py-4 px-4 space-y-4">
            <a
              href="#features"
              className="block text-brand-text hover:text-brand-heading transition-colors text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-brand-text hover:text-brand-heading transition-colors text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#story"
              className="block text-brand-text hover:text-brand-heading transition-colors text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#faq"
              className="block text-brand-text hover:text-brand-heading transition-colors text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://dashboard.calamaritrading.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-brand-text hover:text-brand-heading transition-colors text-sm font-medium py-2"
            >
              Login
            </a>
            <Link
              href="/checkout"
              className="btn-primary block text-center px-5 py-3 rounded-lg text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
