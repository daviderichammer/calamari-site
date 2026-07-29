import Link from "next/link";

export const metadata = {
  title: "Security | Calamari Trading",
  description: "Security architecture and practices for Calamari Trading.",
};

export default function Security() {
  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
            Security Architecture
          </h1>
          <p className="text-brand-text">How we protect your infrastructure and credentials.</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-brand max-w-none space-y-8 sm:space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Isolated Infrastructure Architecture</h2>
            <p>
              Each customer receives an isolated Windows VM with allocated CPU, memory and storage. Customers do not share an operating-system environment or trading-terminal installation. These virtual machines are deployed within secure virtual networks with strict firewall rules, exposing only the necessary ports for connectivity and remote management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Credential Vault Architecture</h2>
            <p>
              Trading-platform credentials are encrypted before storage in Calamari&apos;s segregated credential vault. Credentials are never stored in plaintext. Administrative access is restricted, time-limited and logged. Customers can rotate credentials at any time. Credentials are permanently deleted upon service cancellation.
            </p>
            <p className="mt-4">
              Additional details:
            </p>
            <ul>
              <li>Encryption keys are stored separately from encrypted credential data. A compromise of the application database would not expose your credentials.</li>
              <li>Only automated provisioning systems decrypt credentials during terminal configuration. Human staff cannot retrieve plaintext passwords.</li>
              <li>Every credential access — automated or manual — is logged with timestamp and purpose.</li>
              <li>Customers can update credentials through the dashboard at any time.</li>
              <li>Credentials are permanently deleted within 30 days of cancellation, or immediately upon explicit request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. External Heartbeat Monitoring</h2>
            <p>
              Calamari continuously monitors supported VM and terminal health signals while the service is operational, including nights and weekends. Monitoring systems operate <em>outside</em> your VM. External heartbeat monitoring means that if your VM crashes, freezes, or loses network connectivity, our systems detect the failure independently and can initiate automated recovery procedures, rather than relying on an internal agent that would fail alongside the VM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. LiveView Streaming</h2>
            <p>
              Our LiveView feature allows you to view your MT4/MT5 terminals from your browser. This is a secure, real-time stream. We do not record, store, or retain screenshots or video of your terminal sessions. The data is transmitted securely via TLS and exists only while your LiveView session is active.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Support Access Model</h2>
            <p>
              Staff do not have standing access to your VM. Temporary support access requires your explicit authorization before any session begins. All access events — including the timestamp, purpose, and personnel involved — are logged and continuously monitored. Calamari does not inspect, analyze, copy or reuse your trading strategy. Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) are required for all administrative access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Data Lifecycle and Deletion</h2>
            <p>
              When you cancel your Calamari Trading service, your infrastructure is immediately queued for decommissioning. We retain your encrypted data and virtual machine snapshots for 30 days post-cancellation to allow for account recovery if you change your mind. After 30 days, or immediately upon your explicit request, all virtual machines are destroyed and all associated data, including credentials and trading history, are permanently wiped from our databases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Data Sharing Policy</h2>
            <p>
              We do not sell your data. We do not use your trading data for advertising, signal generation, or any proprietary trading purposes. We do not disclose your trading data to other traders. Limited data may be processed by our infrastructure providers solely to operate Calamari, subject to strict contractual confidentiality and security obligations.
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
