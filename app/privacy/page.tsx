import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Calamari Trading",
  description:
    "Calamari Trading's Privacy Policy — what data we collect, what we don't collect, how we use it, your rights under GDPR and CCPA, and how to contact us.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-text">
            Effective Date: July 1, 2026 &nbsp;·&nbsp; Last Updated: July 31, 2026
          </p>
          <p className="mt-4 text-sm text-brand-text leading-relaxed">
            Calamari Trading LLC (&ldquo;Calamari,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, and share information when you use the Calamari Trading platform and related managed infrastructure services (the &ldquo;Services&rdquo;). It also describes your rights regarding your personal data.
          </p>
          <p className="mt-3 text-sm text-brand-text leading-relaxed">
            By using the Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use the Services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 sm:space-y-12">

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              1. Data Controller
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari Trading LLC, a Florida limited liability company, is the data controller for the personal information you provide when using our Services. For questions about this policy or to exercise your data rights, contact us at{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              2. What Data We Collect
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              We collect the minimum data necessary to deliver, operate, and support the Services. The following table describes each category of data we collect and why.
            </p>
            <div className="space-y-3">
              {[
                {
                  category: "Account Information",
                  data: "Name, email address",
                  purpose: "Account creation, authentication, and service communications",
                  collected: true,
                },
                {
                  category: "Payment Information",
                  data: "Payment method details (card number, expiry, CVV)",
                  purpose: "Billing and subscription management",
                  collected: true,
                  note: "Processed and stored by Stripe. Calamari does not store raw card data.",
                },
                {
                  category: "MT4/MT5 Account Numbers",
                  data: "Broker account numbers and server names",
                  purpose: "Tentacle configuration and reconnection after restarts",
                  collected: true,
                },
                {
                  category: "Tentacle Telemetry",
                  data: "CPU usage, memory consumption, uptime metrics, API health signals",
                  purpose: "Monitoring, Watchdog recovery, and service health reporting",
                  collected: true,
                },
                {
                  category: "Dashboard Usage Data",
                  data: "Pages visited, actions taken in the Dashboard",
                  purpose: "Product improvement and support",
                  collected: true,
                },
                {
                  category: "Support Communications",
                  data: "Emails, chat transcripts, and support tickets",
                  purpose: "Customer support and issue resolution",
                  collected: true,
                },
              ].map((item) => (
                <div key={item.category} className="bg-brand-card border border-brand-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-semibold text-brand-heading">{item.category}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-brand-blue/20 text-brand-blue shrink-0">COLLECTED</span>
                  </div>
                  <p className="text-xs text-brand-text mb-1"><span className="text-brand-heading/70">Data:</span> {item.data}</p>
                  <p className="text-xs text-brand-text"><span className="text-brand-heading/70">Purpose:</span> {item.purpose}</p>
                  {item.note && <p className="text-xs text-brand-cyan mt-1">{item.note}</p>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              3. What We Do NOT Collect
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              This section is as important as the previous one. Calamari is designed so that your most sensitive trading data never touches our servers.
            </p>
            <div className="space-y-3">
              {[
                {
                  category: "Trade Execution Data",
                  explanation: "Orders, positions, trade history, and P&L data are generated on your Tentacle and transmitted directly between your MT4/MT5 terminals and your broker. This data does not pass through or reside on Calamari's servers.",
                },
                {
                  category: "Broker Passwords",
                  explanation: "Broker account passwords are passed directly to the MT4/MT5 login function in memory on your Tentacle. They are never written to disk, never transmitted to Calamari's servers, and are not retained after the login operation completes. Calamari cannot retrieve your broker password.",
                },
                {
                  category: "Trading Strategy Details",
                  explanation: "Your Expert Advisors (EAs), trading parameters, and strategy logic reside on your Tentacle. Calamari does not inspect, copy, analyze, or use your trading strategy for any purpose.",
                },
                {
                  category: "LiveView Session Recordings",
                  explanation: "LiveView streams your Windows desktop in real time. We do not record, store, or retain screenshots or video of your terminal sessions. The stream exists only while your LiveView session is active.",
                },
              ].map((item) => (
                <div key={item.category} className="bg-brand-card border border-brand-border rounded-lg p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-semibold text-brand-heading">{item.category}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-900/30 text-green-400 shrink-0">NOT COLLECTED</span>
                  </div>
                  <p className="text-xs text-brand-text leading-relaxed">{item.explanation}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              4. How We Use Your Data
            </h2>
            <p className="text-brand-text leading-relaxed">
              We use the data we collect for the following purposes, each of which is necessary to deliver the Services or fulfill our legal obligations:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "Service delivery: provisioning and managing your Tentacle, configuring MT4/MT5 terminals, and operating the Watchdog monitoring system.",
                "Billing and payments: processing subscription charges, handling payment failures, and issuing refunds.",
                "Customer support: responding to support requests, diagnosing technical issues, and providing onboarding assistance.",
                "Service communications: sending transactional emails (account activation, billing receipts, maintenance notices, and security alerts).",
                "Product improvement: analyzing aggregated, anonymized usage patterns to improve the Dashboard and platform features.",
                "Legal compliance: fulfilling our obligations under applicable law, responding to lawful requests from government authorities, and enforcing our Terms of Service.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              <strong className="text-brand-heading">We do not sell your personal data.</strong> We do not use your data for advertising, behavioral profiling, or any purpose unrelated to delivering the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              5. Third-Party Service Providers
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              We share data with the following third-party service providers solely to the extent necessary to operate the Services. All providers are subject to contractual data processing agreements that prohibit them from using your data for any purpose other than providing their services to Calamari.
            </p>
            <div className="space-y-3">
              {[
                {
                  provider: "Stripe, Inc.",
                  role: "Payment processing",
                  data: "Payment method details, billing address, transaction history",
                  link: "https://stripe.com/privacy",
                },
                {
                  provider: "Contabo GmbH",
                  role: "Infrastructure hosting (Tentacle VMs)",
                  data: "VM configuration, IP addresses, resource utilization metrics",
                  link: "https://contabo.com/en/legal/privacy/",
                },
              ].map((item) => (
                <div key={item.provider} className="bg-brand-card border border-brand-border rounded-lg p-4">
                  <p className="text-sm font-semibold text-brand-heading mb-1">{item.provider}</p>
                  <p className="text-xs text-brand-text mb-0.5"><span className="text-brand-heading/70">Role:</span> {item.role}</p>
                  <p className="text-xs text-brand-text mb-1"><span className="text-brand-heading/70">Data shared:</span> {item.data}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-cyan hover:underline">
                    View their Privacy Policy →
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-brand-text leading-relaxed">
              We do not share your data with any other third parties except as required by law or with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              6. Data Retention
            </h2>
            <p className="text-brand-text leading-relaxed">
              We retain your personal data only for as long as necessary to deliver the Services and fulfill our legal obligations:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "Account information and Tentacle configuration: retained for the duration of your active subscription, plus 30 days post-cancellation to allow for account recovery.",
                "Billing records: retained for seven (7) years as required by applicable tax and financial regulations.",
                "Support communications: retained for two (2) years from the date of the last interaction.",
                "Tentacle telemetry data: retained for 90 days on a rolling basis.",
                "Audit logs: retained for one (1) year.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              Upon cancellation, your Tentacle is decommissioned and all associated data is permanently deleted after the 30-day recovery window, or immediately upon your explicit written request to{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              7. Your Rights
            </h2>
            <p className="text-brand-text leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights with respect to your personal data. We honor these rights regardless of where you are located.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { right: "Right of Access", desc: "Request a copy of the personal data we hold about you." },
                { right: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
                { right: "Right to Erasure", desc: "Request deletion of your personal data (subject to legal retention requirements)." },
                { right: "Right to Portability", desc: "Request a machine-readable export of your personal data." },
                { right: "Right to Restrict Processing", desc: "Request that we limit how we use your data in certain circumstances." },
                { right: "Right to Object", desc: "Object to processing of your data for direct marketing or legitimate interest purposes." },
              ].map((item) => (
                <div key={item.right} className="bg-brand-card border border-brand-border rounded-lg p-4">
                  <p className="text-sm font-semibold text-brand-heading mb-1">{item.right}</p>
                  <p className="text-xs text-brand-text leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-brand-text leading-relaxed">
              To exercise any of these rights, email{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
              </a>
              . We will respond within 30 days. We may need to verify your identity before processing your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              8. GDPR Compliance (EEA Residents)
            </h2>
            <p className="text-brand-text leading-relaxed">
              If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, the General Data Protection Regulation (GDPR) or equivalent legislation applies to our processing of your personal data. Our legal bases for processing are:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "Contract performance: processing necessary to deliver the Services you have subscribed to.",
                "Legal obligation: processing required to comply with applicable law.",
                "Legitimate interests: processing for fraud prevention, security, and product improvement, where these interests are not overridden by your rights.",
                "Consent: where we have obtained your explicit consent for a specific processing activity.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              Your data may be transferred to and processed in the United States, where Calamari is headquartered. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses where required. You have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              9. CCPA Compliance (California Residents)
            </h2>
            <p className="text-brand-text leading-relaxed">
              If you are a California resident, the California Consumer Privacy Act (CCPA) grants you the following additional rights:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "The right to know what personal information we collect, use, disclose, and sell.",
                "The right to delete personal information we have collected from you.",
                "The right to opt out of the sale of your personal information. Note: Calamari does not sell personal information.",
                "The right to non-discrimination for exercising your CCPA rights.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              To exercise your CCPA rights, contact us at{" "}
              <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                privacy@calamaritrading.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              10. Security
            </h2>
            <p className="text-brand-text leading-relaxed">
              We implement industry-standard technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, and destruction. These measures include TLS encryption for all data in transit, access controls with multi-factor authentication for administrative systems, and audit logging of all data access events.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              In the event of a data breach that compromises your personal information, we will notify you via email within 72 hours of discovering the breach, in accordance with applicable data protection law. See our{" "}
              <Link href="/security" className="text-brand-cyan hover:underline">
                Security Architecture page
              </Link>{" "}
              for a detailed description of our technical security controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              11. Cookies and Tracking
            </h2>
            <p className="text-brand-text leading-relaxed">
              The Calamari marketing website uses minimal cookies necessary for site functionality and session management. We do not use third-party advertising cookies or behavioral tracking pixels. The Dashboard uses session cookies to maintain your authenticated session. We do not use Google Analytics or similar third-party analytics services that track individual users across sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              12. Changes to This Policy
            </h2>
            <p className="text-brand-text leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will provide at least 30 days&apos; notice of material changes by posting the updated policy on our website and notifying you via the email address on file. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when the policy was most recently revised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              13. Contact Information
            </h2>
            <p className="text-brand-text leading-relaxed">
              For privacy-related inquiries, data subject requests, or to report a privacy concern:
            </p>
            <div className="mt-4 p-4 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text space-y-1">
              <p><strong className="text-brand-heading">Calamari Trading LLC</strong></p>
              <p>Florida, United States</p>
              <p>
                Privacy inquiries:{" "}
                <a href="mailto:privacy@calamaritrading.ai" className="text-brand-cyan hover:underline">
                  privacy@calamaritrading.ai
                </a>
              </p>
              <p>
                General support:{" "}
                <a href="mailto:support@calamaritrading.ai" className="text-brand-cyan hover:underline">
                  support@calamaritrading.ai
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
            ← Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              Security
            </Link>
            <Link href="/status" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
