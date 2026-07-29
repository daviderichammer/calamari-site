"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PLAN = {
  id: "calamari-vm",
  name: "Calamari VM",
  price: 199,
  features: [
    "Dedicated Windows VM (always-on, managed, monitored)",
    "Up to 7 MT4/MT5 instances — any combination",
    "FX Blue trade copying (configured and managed by us)",
    "Real-time dashboard with full analytics",
    "LiveView — see your MT4/MT5 screens from anywhere",
    "24/7 Watchdog with auto-recovery",
    "Tentacle agent for remote management",
  ],
};

function CheckoutForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<"details" | "payment" | "processing" | "success">("details");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ email?: string; dashboardUrl?: string } | null>(null);

  const validateDetails = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (formData.password.length < 8) errs.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = "Passwords don't match";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateCard = () => {
    const errs: Record<string, string> = {};
    const cleanNumber = cardData.number.replace(/\s/g, "");
    if (cleanNumber.length < 13) errs.number = "Valid card number required";
    if (!cardData.expiry.match(/^\d{2}\/\d{2}$/)) errs.expiry = "Format: MM/YY";
    if (cardData.cvc.length < 3) errs.cvc = "Valid CVC required";
    if (!cardData.name.trim()) errs.name = "Cardholder name required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formatCardNumber = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 16);
    return clean.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 2) return clean.slice(0, 2) + "/" + clean.slice(2);
    return clean;
  };

  const handleSubmit = async () => {
    if (!validateCard()) return;
    setStep("processing");
    setIsLoading(true);
    try {
      const response = await fetch("/api/provision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          plan: PLAN.id,
          paymentMethod: "test_card",
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setResult({ email: formData.email, dashboardUrl: "https://dashboard.calamaritrading.ai" });
        setStep("success");
      } else {
        setErrors({ submit: data.error || "Something went wrong. Please try again." });
        setStep("payment");
      }
    } catch (err) {
      setErrors({ submit: "Network error. Please try again." });
      setStep("payment");
    } finally {
      setIsLoading(false);
    }
  };

  if (step === "success" && result) {
    return (
      <div className="min-h-screen bg-brand-darker flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-6 animate-float">🦑</div>
          <h1 className="text-3xl font-black text-brand-heading mb-4">
            Welcome to Calamari!
          </h1>
          <p className="text-brand-text mb-6">
            Your account has been created. Our team will contact you to begin onboarding and VM provisioning.
            Check your email at <strong className="text-brand-cyan">{result.email}</strong> for your login credentials.
          </p>
          <div className="bg-brand-card border border-green-500/30 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-sm font-semibold text-green-400 mb-3">What happens next:</h3>
            <ul className="space-y-2 text-sm text-brand-text">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">1</span>
                Our team will contact you to begin onboarding (typically within 24 hours)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">2</span>
                MT4/MT5 is installed and configured automatically
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">3</span>
                You&apos;ll receive a welcome email with your credentials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">4</span>
                Log in to your dashboard and connect your MT4/MT5 accounts
              </li>
            </ul>
          </div>
          <a
            href="https://dashboard.calamaritrading.ai"
            className="btn-primary inline-block px-8 py-4 rounded-xl font-bold text-white w-full text-center"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div className="min-h-screen bg-brand-darker flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-6 animate-float">🦑</div>
          <h2 className="text-2xl font-bold text-brand-heading mb-3">Processing your order...</h2>
          <p className="text-brand-text">Setting up your account. Our team will reach out to begin onboarding.</p>
          <div className="mt-8 flex justify-center">
            <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-darker">
      {/* Header */}
      <div className="border-b border-brand-border bg-brand-darker/95 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="Calamari Trading" fill className="object-contain" />
            </div>
            <span className="font-bold gradient-text">Calamari Trading</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-brand-text">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure checkout
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {(["details", "payment"] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step === s
                    ? "bg-brand-blue text-white"
                    : step === "payment" && s === "details"
                    ? "bg-green-500 text-white"
                    : "bg-brand-card border border-brand-border text-brand-text"
                }`}
              >
                {step === "payment" && s === "details" ? "✓" : i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${step === s ? "text-brand-heading font-semibold" : "text-brand-text"}`}>
                {s === "details" ? "Your Details" : "Payment"}
              </span>
              {i < 1 && <div className="w-8 h-px bg-brand-border mx-1" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            {/* Step 1: Account Details */}
            {step === "details" && (
              <div>
                <h2 className="text-2xl font-bold text-brand-heading mb-2">Create your account</h2>
                <p className="text-brand-text text-sm mb-6">You&apos;ll use these credentials to access your Calamari dashboard.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors"
                      placeholder="At least 8 characters"
                    />
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors"
                      placeholder="Repeat your password"
                    />
                    {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                  <button
                    onClick={() => { if (validateDetails()) setStep("payment"); }}
                    className="w-full btn-primary py-4 rounded-xl font-bold text-white mt-2"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === "payment" && (
              <div>
                <h2 className="text-2xl font-bold text-brand-heading mb-2">Payment details</h2>
                <p className="text-brand-text text-sm mb-6">Your card will be charged $199/month. Cancel anytime.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Card Number</label>
                    <input
                      type="text"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: formatCardNumber(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors font-mono"
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.number && <p className="text-red-400 text-xs mt-1">{errors.number}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-heading mb-2">Expiry</label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors font-mono"
                        placeholder="MM/YY"
                      />
                      {errors.expiry && <p className="text-red-400 text-xs mt-1">{errors.expiry}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-heading mb-2">CVC</label>
                      <input
                        type="text"
                        value={cardData.cvc}
                        onChange={(e) => setCardData({ ...cardData, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors font-mono"
                        placeholder="123"
                      />
                      {errors.cvc && <p className="text-red-400 text-xs mt-1">{errors.cvc}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-heading mb-2">Name on Card</label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border focus:border-brand-blue focus:outline-none text-brand-heading placeholder-brand-text/50 transition-colors"
                      placeholder="As it appears on your card"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  {errors.submit && (
                    <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {errors.submit}
                    </div>
                  )}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep("details")}
                      className="flex-1 py-4 rounded-xl font-semibold text-brand-text border border-brand-border hover:border-brand-blue/30 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex-[2] btn-primary py-4 rounded-xl font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Processing..." : `Pay $${PLAN.price}/mo & Start Trading`}
                    </button>
                  </div>
                  <p className="text-xs text-brand-text text-center mt-4">
                    By subscribing you agree to our Terms of Service. Cancel anytime. 7-day money-back guarantee.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sticky top-24">
              <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
                Order Summary
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-bold text-brand-heading">{PLAN.name}</div>
                  <div className="text-xs text-brand-text">Monthly subscription</div>
                </div>
                <div className="text-xl font-black gradient-text">${PLAN.price}</div>
              </div>
              <div className="border-t border-brand-border pt-4 mb-4">
                <div className="space-y-2">
                  {PLAN.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-text">
                      <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-brand-border pt-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-brand-text">Subtotal</span>
                  <span className="text-brand-heading">${PLAN.price}.00</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-brand-text">Tax</span>
                  <span className="text-brand-heading">$0.00</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span className="text-brand-heading">Total today</span>
                  <span className="text-xl gradient-text">${PLAN.price}.00</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border">
                <div className="flex items-center gap-2 text-xs text-brand-text mb-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  7-day money-back guarantee
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-text">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure 256-bit SSL encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-darker flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  );
}
