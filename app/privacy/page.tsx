import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-darker py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-brand-cyan hover:text-white transition-colors text-sm mb-8 block">
          ← Back to home
        </Link>
        <h1 className="text-4xl font-black text-brand-heading mb-4">Privacy Policy</h1>
        <p className="text-brand-text text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8 text-brand-text">
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Information We Collect</h2>
            <p>We collect information you provide when creating an account (name, email, password), payment information (processed securely via Stripe), and usage data from your dashboard interactions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our services, process payments, send service-related communications, and ensure the security of your account. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Data Security</h2>
            <p>We implement industry-standard security measures including SSL/TLS encryption, secure password hashing, and regular security audits. Your MT5 credentials are stored encrypted and are only used to configure your VPS instances.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Cookies</h2>
            <p>We use essential cookies for authentication and session management. We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan">privacy@calamaritrading.ai</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
