import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Calamari Trading",
  description: "Privacy Policy for Calamari Trading.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-text">Last Updated: July 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-brand max-w-none space-y-8 sm:space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Data Controller</h2>
            <p>
              Calamari Trading LLC (&ldquo;Calamari&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) acts as the data controller for the personal information you provide to us when using our platform and infrastructure services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. What Data We Collect</h2>
            <p>
              We collect the following categories of data:
              <ul>
                <li><strong>Account Information:</strong> Name, email address, and payment information (processed securely via Stripe).</li>
                <li><strong>Trading-Platform Credentials:</strong> Broker or prop firm account numbers, passwords, and server details. These are stored securely as described in Section 3.</li>
                <li><strong>Trade Execution Data:</strong> Orders, positions, and trading history generated on your provisioned Tentacle (Tentacle).</li>
                <li><strong>Terminal Health Metrics:</strong> CPU usage, memory consumption, connection status, and application crash logs.</li>
                <li><strong>Dashboard Usage Data:</strong> How you interact with the Calamari dashboard.</li>
                <li><strong>LiveView Session Data:</strong> LiveView streams your terminal interface directly to your browser. We do <strong>not</strong> retain or store these screenshots; they are streamed only.</li>
                <li><strong>Support Interaction Records:</strong> Communications with our support team.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. How Credentials Are Stored</h2>
            <p>
              Trading-platform credentials are encrypted before storage in Calamari&apos;s segregated credential vault. Credentials are never stored in plaintext. Administrative access is restricted, time-limited and logged. Customers can rotate credentials at any time. Credentials are permanently deleted upon service cancellation.
            </p>
            <p className="mt-4">
              Additional details on credential security:
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
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Tentacle Isolation</h2>
            <p>
              Each customer receives an isolated Tentacle with allocated CPU, memory and storage. Customers do not share an operating-system environment or trading-terminal installation. Your Tentacle is deployed within a secure virtual network with strict firewall rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Support Access Model</h2>
            <p>
              Staff do not have standing access to your Tentacle. Temporary support access requires your explicit authorization before any session begins. All access events — including the timestamp, purpose, and personnel involved — are logged. Calamari does not inspect, analyze, copy or reuse your trading strategy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Data Retention and Deletion</h2>
            <p>
              We retain your data only as long as your service is active. Upon cancellation:
              <ul>
                <li>Your infrastructure is queued for decommissioning.</li>
                <li>We retain your encrypted data and Tentacle snapshots for 30 days post-cancellation to allow for account recovery.</li>
                <li>After 30 days, all Tentacles are destroyed, and all associated data (including credentials and trading history) are permanently wiped.</li>
              </ul>
              You may request immediate deletion of all data upon cancellation by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Subprocessors</h2>
            <p>
              We use trusted third-party subprocessors to operate our Services:
              <ul>
                <li><strong>Cloud Infrastructure Providers:</strong> For hosting your Tentacles.</li>
                <li><strong>Stripe:</strong> For payment processing.</li>
                <li><strong>Monitoring Tools:</strong> For tracking system health metrics (CPU, memory, uptime).</li>
              </ul>
              <strong>We do not share your trading data with subprocessors.</strong> They only process the infrastructure metrics required to keep the systems running. All subprocessors are subject to contractual confidentiality and security obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">8. Data Sharing and Confidentiality</h2>
            <p>
              We do not sell your data. We do not use your trading data for advertising, signal generation, or any proprietary trading purposes. We do not disclose your trading data to other traders. Limited data may be processed by our infrastructure providers solely to operate Calamari, subject to strict contractual confidentiality and security obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">9. Security Measures and Backups</h2>
            <p>
              We implement robust security measures, including encryption at rest and in transit, Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA) for administrative access, and continuous monitoring. Your Tentacle state is periodically backed up to allow for rapid recovery in the event of hardware failure. These backups are encrypted and subject to the same strict access controls and retention policies as live data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">10. Monitoring</h2>
            <p>
              Calamari continuously monitors supported Tentacle and terminal health signals while the service is operational, including nights and weekends. Monitoring systems operate outside your Tentacle, using external heartbeat checks so that Tentacle-level failures are detected independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">11. Breach Notification</h2>
            <p>
              In the event of a data breach that compromises your personal information or trading credentials, we will notify you via email within 72 hours of discovering the breach, outlining the nature of the incident and the steps we are taking to mitigate it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">12. Customer Rights</h2>
            <p>
              You have the right to:
              <ul>
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate data.</li>
                <li>Request deletion of your data.</li>
                <li>Request a portable copy of your data.</li>
                <li>Rotate or update your trading credentials at any time through the dashboard.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">13. International Transfers</h2>
            <p>
              Your data may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. We ensure appropriate safeguards are in place for any such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">14. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. We will provide 30 days&apos; notice for material changes by posting the updated policy on our website or notifying you via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">15. Contact Information</h2>
            <p>
              For privacy-related inquiries or to exercise your data rights, please contact us at{" "}
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
