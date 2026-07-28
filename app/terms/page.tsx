import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-darker py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-brand-cyan hover:text-white transition-colors text-sm mb-8 block">
          ← Back to home
        </Link>
        <h1 className="text-4xl font-black text-brand-heading mb-4">Terms of Service</h1>
        <p className="text-brand-text text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-text">
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Calamari Trading services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Services Description</h2>
            <p>Calamari Trading provides managed infrastructure services for traders, including dedicated Windows VPS instances, MT5 configuration, trade monitoring software, and related tools. We are an infrastructure provider, not a financial advisor.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Risk Disclaimer</h2>
            <p>Trading financial instruments involves substantial risk of loss. Calamari Trading provides infrastructure tools only and does not provide financial, investment, or trading advice. Past performance is not indicative of future results. You are solely responsible for your trading decisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Subscription and Billing</h2>
            <p>Subscriptions are billed monthly. You may cancel at any time, effective at the end of your current billing period. We offer a 7-day money-back guarantee for new subscribers. Refunds are processed within 5–10 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Acceptable Use</h2>
            <p>You agree to use our services in compliance with all applicable laws and the terms of service of any prop firm or broker you connect to our platform. You are responsible for ensuring your use of our services complies with your prop firm agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Service Availability</h2>
            <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance. We are not liable for losses resulting from service interruptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:support@calamaritrading.ai" className="text-brand-cyan">support@calamaritrading.ai</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
