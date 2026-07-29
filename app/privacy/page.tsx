import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Calamari Trading",
  description:
    "Calamari Trading Privacy Policy — how we collect, store, and protect your data.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-heading mb-3">Privacy Policy</h1>
          <p className="text-brand-text text-sm">Last Updated: July 29, 2026</p>
        </div>

        <div className="prose-legal space-y-10 text-brand-text leading-relaxed">

          <p className="text-base">
            At Calamari Trading (&ldquo;Calamari,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we take your privacy and the security of your data seriously. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and managed infrastructure services (the &ldquo;Services&rdquo;).
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Information We Collect</h2>
            <p>
              We collect several types of information to provide and improve our services. This includes account information such as your name, email address, and billing details, which are processed securely via our payment processor, Stripe. We also collect trading credentials, including MetaTrader 4 and MetaTrader 5 account numbers, passwords, and server details necessary to configure your virtual private server instances. Furthermore, we collect infrastructure data, such as terminal health metrics, CPU and RAM usage, and the connection status of your virtual machines. Finally, we collect trading metadata, including trade execution data, account balances, and equity metrics required to provide dashboard analytics and monitoring services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. How We Use Your Information</h2>
            <p>
              We use your data strictly to provide and improve our infrastructure services. This includes provisioning and maintaining your dedicated Windows virtual private server environments, configuring and monitoring your trading terminals, and displaying analytics and account health on your Calamari dashboard. We also use this information to process payments and provide customer support.
            </p>
            <p className="mt-3 font-semibold text-brand-heading">
              We do not sell, rent, or share your personal information or trading data with third parties for marketing or advertising purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Data Security and Credential Storage</h2>
            <p>
              Protecting your trading credentials is our highest priority. All trading passwords and sensitive credentials are encrypted at rest using AES-256 encryption. Additionally, all data transmitted between your browser and our servers is secured using industry-standard TLS encryption. Our encryption keys are strictly managed and isolated from the application database to ensure maximum security.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Access Controls and Logging</h2>
            <p>
              Your virtual machines are dedicated exclusively to you. Calamari support staff cannot access your virtual machine or view your unencrypted credentials without your explicit, time-bound approval. Furthermore, all administrative actions and system access events are logged and audited regularly to maintain a secure and accountable environment.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Subprocessors and Data Location</h2>
            <p>
              We use trusted third-party subprocessors to provide our Services. Our infrastructure is hosted on secure servers located in the United States, and we use internal tools to monitor server health and uptime. By using our Services, you consent to the processing of your data in the United States.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Data Retention and Deletion</h2>
            <p>
              We retain your data for as long as your account is active. If you cancel your subscription, we retain your data for 30 days to allow for easy reactivation should you choose to return. After this 30-day period, your virtual machines, credentials, and associated data are permanently and irreversibly deleted. You also have the right to request immediate deletion of your data upon cancellation by contacting our support team.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Your Data Rights</h2>
            <p>
              Depending on your jurisdiction, you may have specific rights regarding your personal data. These rights may include accessing the personal data we hold about you, requesting correction of inaccurate data, requesting deletion of your data, or requesting a portable copy of your data. To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
              </a>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">8. Breach Notification</h2>
            <p>
              In the unlikely event of a data breach that compromises your personal information or trading credentials, we will notify you via email within 72 hours of discovering the breach, in accordance with applicable laws and our commitment to transparency.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">9. Security Reviews</h2>
            <p>
              We conduct regular security reviews, at least quarterly, to assess our infrastructure, update dependencies, and ensure compliance with our security standards and industry best practices.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">10. Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date at the top of the document.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">11. Contact Us</h2>
            <p>
              For any privacy-related questions or concerns, please contact us at{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
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
            <Link href="/terms" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Terms of Service</Link>
            <Link href="/security" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
