import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | Calamari Trading",
  description:
    "How Calamari Trading secures your trading infrastructure — dedicated VMs, AES-256 encryption, access controls, and audit logging.",
};

export default function SecurityPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-heading mb-3">Security at Calamari Trading</h1>
          <p className="text-brand-text text-sm">Last Updated: July 29, 2026</p>
        </div>

        {/* Intro */}
        <p className="text-base text-brand-text leading-relaxed mb-10">
          At Calamari Trading, we understand that providing infrastructure for your trading operations requires an uncompromising approach to security. This page outlines the architecture, practices, and controls we use to protect your data, credentials, and virtual machines.
        </p>

        {/* Security summary table */}
        <div className="mb-12 overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-card border-b border-brand-border">
                <th className="text-left px-4 py-3 text-brand-heading font-semibold">Security Control</th>
                <th className="text-left px-4 py-3 text-brand-heading font-semibold">Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Credential Encryption</td>
                <td className="px-4 py-3 text-brand-text">AES-256 at rest; TLS 1.2+ in transit</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">VM Isolation</td>
                <td className="px-4 py-3 text-brand-text">Dedicated VMs — no shared hosting</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Dashboard Access</td>
                <td className="px-4 py-3 text-brand-text">MFA available; IP allowlisting supported</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Support Access</td>
                <td className="px-4 py-3 text-brand-text">Just-in-time; requires customer approval</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Audit Logging</td>
                <td className="px-4 py-3 text-brand-text">All admin actions logged and auditable</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Credential Rotation</td>
                <td className="px-4 py-3 text-brand-text">Supported and encouraged</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Data Deletion</td>
                <td className="px-4 py-3 text-brand-text">Full deletion within 30 days of cancellation</td>
              </tr>
              <tr className="hover:bg-brand-card/40 transition-colors">
                <td className="px-4 py-3 text-brand-heading font-medium">Security Reviews</td>
                <td className="px-4 py-3 text-brand-text">Quarterly minimum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-legal space-y-10 text-brand-text leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Infrastructure Architecture</h2>
            <p>
              We do not use shared hosting for trading terminals. Every customer is provisioned with isolated, dedicated Windows Virtual Private Servers. Your trading terminals run in a sandboxed environment completely separate from other users. These virtual machines are deployed within secure virtual networks with strict firewall rules, exposing only the necessary ports for connectivity and remote management.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Credential Protection</h2>
            <p>
              All sensitive data, including broker account numbers, trading passwords, and proprietary trading firm credentials, are encrypted at rest using industry-standard AES-256 encryption. All communications between your browser, our dashboard API, and the underlying infrastructure are secured using TLS 1.2 or higher. Our platform also supports and encourages regular rotation of your trading credentials to maintain a strong security posture over time.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Access Controls</h2>
            <p>
              Access to Calamari&apos;s internal management systems is strictly limited based on the principle of least privilege through Role-Based Access Control. Multi-Factor Authentication is available and strongly recommended for securing your Calamari dashboard access. Additionally, customers can configure IP allowlisting to restrict dashboard and API access to trusted IP addresses only, adding an extra layer of defense against unauthorized access.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Support Access and Auditing</h2>
            <p>
              Calamari support staff do not have standing access to your virtual machines or unencrypted credentials. If you require interactive technical support that involves accessing your virtual machine, you must explicitly grant temporary, time-bound approval before any session begins. Every administrative action, API call, and support access event is logged, and these audit logs are continuously monitored for anomalous activity.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Data Lifecycle and Deletion</h2>
            <p>
              When you cancel your Calamari Trading service, your infrastructure is immediately queued for decommissioning. We retain your encrypted data and virtual machine snapshots for 30 days post-cancellation to allow for account recovery if you change your mind. After 30 days, or immediately upon your explicit request, all virtual machines are destroyed and all associated data, including credentials and trading history, are permanently wiped from our databases.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Continuous Monitoring and Reviews</h2>
            <p>
              We employ continuous monitoring tools to track the health, performance, and security posture of our infrastructure. This includes automated scanning for vulnerabilities and regular patching of host operating systems to ensure your trading environment remains secure and resilient against emerging threats. We conduct formal security reviews at least quarterly.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">Report a Vulnerability</h2>
            <p>
              If you believe you have discovered a security vulnerability in our platform, please report it to us immediately at{" "}
              <a href="mailto:security@calamaritrading.ai" className="text-brand-cyan hover:underline">
                security@calamaritrading.ai
              </a>. We take all reports seriously and will investigate promptly.
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
            <Link href="/privacy" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
