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
              We do not use shared hosting environments for trading terminals. Every customer is provisioned with an isolated Windows Virtual Private Server (VPS). Your trading terminals run in a sandboxed environment completely separate from other users. These virtual machines are deployed within secure virtual networks with strict firewall rules, exposing only the necessary ports for connectivity and remote management.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Credential Vault Architecture</h2>
            <p>
              Your trading-platform credentials are never stored in plain text. They are encrypted at rest using AES-256 encryption and stored in Calamari's credential vault. This vault is logically separated from the primary application database. The encryption keys required to decrypt these credentials are managed independently. This separation ensures that a compromise of the application database would not expose your credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. External Heartbeat Monitoring</h2>
            <p>
              Our monitoring systems operate <em>outside</em> your VM. We use external heartbeat monitoring to track the health of your infrastructure. This means that if your VM crashes, freezes, or loses network connectivity, our systems detect the failure immediately and can initiate automated recovery procedures, rather than relying on an internal agent that would fail alongside the VM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. LiveView Streaming</h2>
            <p>
              Our LiveView feature allows you to view your MT4/MT5 terminals from your browser. This is a secure, real-time stream. We do not record, store, or retain screenshots or video of your terminal sessions. The data is transmitted securely via TLS and exists only while your LiveView session is active.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Access Controls and Auditing</h2>
            <p>
              Access to Calamari's internal management systems is strictly limited based on the principle of least privilege through Role-Based Access Control (RBAC). Calamari support staff do not have standing access to your virtual machines. If you require interactive technical support, you must explicitly grant temporary, time-bound approval before any session begins. Every administrative action, credential access, and support event is logged, and these audit logs are continuously monitored.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Data Lifecycle and Deletion</h2>
            <p>
              When you cancel your Calamari Trading service, your infrastructure is immediately queued for decommissioning. We retain your encrypted data and virtual machine snapshots for 30 days post-cancellation to allow for account recovery if you change your mind. After 30 days, or immediately upon your explicit request, all virtual machines are destroyed and all associated data, including credentials and trading history, are permanently wiped from our databases.
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
