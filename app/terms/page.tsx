import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Calamari Trading",
  description:
    "Calamari Trading Terms of Service — managed infrastructure for MT4/MT5 prop firm traders.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-darker text-brand-text">
      {/* Header */}
      <div className="border-b border-brand-border bg-brand-darker/90 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-brand-heading font-bold text-lg hover:text-brand-cyan transition-colors">
            <span className="text-brand-cyan">🦑</span> Calamari Trading
          </Link>
          <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-heading mb-3">Terms of Service</h1>
          <p className="text-brand-text text-sm">Last Updated: July 29, 2026</p>
        </div>

        <div className="prose-legal space-y-10 text-brand-text leading-relaxed">

          <p className="text-base">
            Welcome to Calamari Trading. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Calamari Trading website, platform, and services (collectively, the &ldquo;Services&rdquo;), operated by Calamari Trading (&ldquo;Calamari,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Description of Service</h2>
            <p>
              Calamari Trading provides managed infrastructure for traders. We host Windows Virtual Private Server (VPS) environments, run MetaTrader 4 (MT4) and MetaTrader 5 (MT5) terminals, and provide trade copying, monitoring, and analytics tools, including FX Blue integration.
            </p>
            <p className="mt-3">
              It is important to understand that Calamari Trading is strictly an infrastructure provider. We are not a financial advisor, broker, or account manager. We do not provide trading signals, investment strategies, or account management services. You retain full and exclusive control over your trading decisions, strategies, and account configurations at all times.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Account Ownership and Representations</h2>
            <p>
              By using our Services, you represent and warrant that you are the sole and lawful owner of the trading accounts connected to our platform, including any proprietary trading firm accounts. You must ensure that all connected accounts belong to the same individual or entity. Furthermore, you agree that you are not using our platform to provide third-party account management services, &ldquo;pass-your-challenge&rdquo; services, or any form of unauthorized portfolio management for others. Calamari Trading reserves the right to suspend or terminate accounts that violate these ownership requirements.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Third-Party Platforms and Brokers</h2>
            <p>
              Our Services interact with third-party platforms, including but not limited to MT4, MT5, brokers, and proprietary trading firms. We do not control these third-party entities, their rules, terms of service, or operational stability. Brokers and proprietary trading firms frequently update their rules regarding trade copying, IP addresses, and Expert Advisor usage. It is your sole responsibility to track, understand, and comply with the rules of your chosen broker or proprietary trading firm. Calamari Trading is not responsible for any account breaches, suspensions, or losses resulting from third-party rule changes.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Security and Credentials</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials, including your Calamari dashboard login and your broker or proprietary trading firm credentials. On our end, Calamari Trading encrypts your broker and proprietary trading firm credentials at rest using AES-256 encryption. However, no system is entirely immune to security breaches. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Intellectual Property and Data Ownership</h2>
            <p>
              Calamari Trading retains all right, title, and interest in and to the Calamari platform, its software, design, and infrastructure. Conversely, you retain full ownership of all your trading data, custom Expert Advisors, and trading strategies. Calamari Trading does not claim ownership over your proprietary trading intellectual property.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Beta Features and Roadmap</h2>
            <p>
              Certain features of the Services may be provided in &ldquo;beta&rdquo; or listed on our product roadmap. These features are provided &ldquo;as is&rdquo; and may contain bugs, errors, or inaccuracies. We make no guarantees regarding the release dates or final functionality of roadmap features.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Service Availability and Uptime</h2>
            <p>
              We strive to maintain a 99.9% uptime target for our infrastructure. However, this is a target and not a guarantee. We are not liable for any trading losses, missed opportunities, or damages resulting from system downtime, latency, or scheduled maintenance windows. We will make reasonable efforts to notify users in advance of scheduled maintenance.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Calamari Trading and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or trading capital. This limitation applies to damages arising out of or related to your use or inability to use the Services, any trading losses incurred while using our infrastructure, issues caused by brokers, proprietary trading firms, or trading software, and market conditions, slippage, or execution delays. Our total liability for any claims arising under these Terms shall not exceed the amount you paid us for the Services in the three months preceding the claim.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Calamari Trading, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including legal fees. This indemnification applies to claims arising out of or related to your use of the Services, your violation of these Terms, or your violation of any broker or proprietary trading firm rules.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">10. Refund Policy</h2>
            <p>
              We offer a 7-day money-back guarantee for new subscriptions. If you are unsatisfied with our Services within the first 7 days of your initial purchase, you may request a full refund by contacting support@calamaritrading.ai. After 7 days, all payments are non-refundable.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">11. Termination and Data Deletion</h2>
            <p>
              You may cancel your subscription at any time through your dashboard. We may also suspend or terminate your access to the Services at any time, with or without cause, if you violate these Terms. Upon cancellation or termination, your infrastructure will be decommissioned. We retain your data for 30 days following cancellation to facilitate account recovery if requested. After 30 days, all your data, including credentials and virtual machines, will be permanently deleted. You may also request immediate deletion upon cancellation by contacting our support team.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">12. Force Majeure</h2>
            <p>
              Calamari Trading shall not be liable for any failure or delay in performance due to causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, natural disasters, internet outages, or actions of government authorities.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association in Hillsborough County, Florida.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website or via email. Your continued use of the Services after the changes take effect constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">15. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@calamaritrading.ai" className="text-brand-cyan hover:underline">
                support@calamaritrading.ai
              </a>.
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
            ← Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="/security" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
