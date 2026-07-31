import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Security & Infrastructure | Calamari Trading",
  description:
    "Calamari Trading's security architecture, infrastructure design, data protection practices, and compliance posture for enterprise prop firm traders.",
};

const sections = [
  {
    id: "infrastructure",
    number: "01",
    title: "Infrastructure Overview",
    content: (
      <>
        <p>
          Every Calamari customer receives a <strong>dedicated Windows Server appliance</strong> — a Tentacle — provisioned on Contabo bare-metal-class dedicated virtual machines in European data centers. No two customers share an operating system, a trading terminal installation, or any application runtime. Isolation is architectural, not logical.
        </p>
        <p className="mt-4">
          Each Tentacle runs Windows Server 2022 with a hardened baseline configuration. The Tentacle API service (FastAPI on port 8000) is the sole programmatic entry point to the appliance. All other inbound ports are blocked by default at the Windows Firewall layer.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Hosting Provider", value: "Contabo GmbH (DE)" },
            { label: "OS", value: "Windows Server 2022" },
            { label: "Isolation Model", value: "Dedicated VM per customer" },
          ].map((item) => (
            <div key={item.label} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <p className="text-xs text-brand-text uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-brand-heading">{item.value}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "network",
    number: "02",
    title: "Network Security",
    content: (
      <>
        <p>
          The Calamari Controller — a hardened Linux orchestrator — communicates with each Tentacle exclusively over <strong>encrypted channels</strong>. All Tentacle API calls are authenticated with per-appliance API keys and transmitted over TLS. WinRM management traffic uses HTTPS (port 5986) with certificate-pinned connections; the plaintext WinRM port (5985) is blocked.
        </p>
        <p className="mt-4">
          Windows Firewall rules on each Tentacle are configured to accept inbound connections <em>only</em> from the Controller&apos;s IP address on the permitted ports. All other inbound traffic is silently dropped. This means your Tentacle is not reachable from the public internet except through Calamari&apos;s authenticated management plane.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-brand-text">
          {[
            "Port 8000 (Tentacle API): inbound allowed from Controller IP only",
            "Port 5986 (WinRM HTTPS): inbound allowed from Controller IP only",
            "Port 443 (LiveView/noVNC): inbound allowed, TLS-terminated, session-authenticated",
            "Port 5985 (WinRM HTTP): blocked",
            "Port 5900 (VNC): blocked externally — loopback only",
            "All other inbound ports: blocked by default firewall policy",
          ].map((rule) => (
            <li key={rule} className="flex items-start gap-2">
              <span className="text-brand-cyan mt-0.5 shrink-0">→</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "data-protection",
    number: "03",
    title: "Data Protection",
    content: (
      <>
        <p>
          <strong>Calamari does not store your trade data on our servers.</strong> All trade execution happens locally on your Tentacle. Your MT4/MT5 terminals connect directly to your broker — Calamari&apos;s infrastructure sits between you and your terminal, not between your terminal and your broker.
        </p>
        <p className="mt-4">
          Broker credentials (account numbers and passwords) are handled with a zero-trust model. Passwords are passed directly to the MT4/MT5 login function in memory and are <strong>never written to disk, never logged, and never transmitted to Calamari&apos;s servers</strong>. The credential vault stores account numbers and server names for reconnection purposes; passwords are not retained after the login operation completes.
        </p>
        <div className="mt-6 space-y-3">
          {[
            { label: "Trade execution data", stored: false, note: "Stays on your Tentacle and your broker" },
            { label: "Broker passwords", stored: false, note: "In-memory only, never persisted" },
            { label: "MT4/MT5 account numbers", stored: true, note: "Required for reconnection" },
            { label: "Broker server names", stored: true, note: "Required for reconnection" },
            { label: "Tentacle health telemetry", stored: true, note: "CPU, memory, uptime — no trade data" },
            { label: "Billing information", stored: true, note: "Processed and stored by Stripe" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 py-2 border-b border-brand-border last:border-0">
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.stored ? "bg-brand-blue/20 text-brand-blue" : "bg-green-900/30 text-green-400"}`}>
                {item.stored ? "STORED" : "NOT STORED"}
              </span>
              <span className="text-sm text-brand-heading flex-1">{item.label}</span>
              <span className="text-xs text-brand-text hidden sm:block">{item.note}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "access-control",
    number: "04",
    title: "Access Control",
    content: (
      <>
        <p>
          Each Tentacle is provisioned with a unique, randomly generated API key. This key is stored in Windows Credential Manager on the appliance — not in a configuration file — and is never transmitted in plaintext. Customers can rotate their API key at any time through the dashboard; the old key is invalidated immediately upon rotation.
        </p>
        <p className="mt-4">
          Calamari staff do not have standing access to customer Tentacles. Temporary support access requires explicit customer authorization and is time-limited. Every access event — including the timestamp, purpose, and personnel involved — is logged in the immutable audit trail on the appliance.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Per-Tentacle Isolation",
              desc: "Each appliance has its own API key. A compromise of one Tentacle does not affect any other customer.",
            },
            {
              title: "No Shared Resources",
              desc: "No shared databases, no shared runtimes, no shared network segments between customers.",
            },
            {
              title: "Key Rotation",
              desc: "API keys can be rotated on demand. Old keys are invalidated server-side immediately.",
            },
            {
              title: "Audit Logging",
              desc: "All API calls, support access events, and configuration changes are logged with timestamps.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <p className="text-sm font-semibold text-brand-heading mb-1">{item.title}</p>
              <p className="text-xs text-brand-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "monitoring",
    number: "05",
    title: "Monitoring & Recovery",
    content: (
      <>
        <p>
          The Calamari Watchdog Controller monitors every active Tentacle from <strong>outside the Tentacle&apos;s failure domain</strong>. This is a critical design principle: if a Tentacle crashes, freezes, or loses network connectivity, the monitoring system detects the failure independently because it does not rely on an agent running inside the Tentacle itself.
        </p>
        <p className="mt-4">
          Health checks run every 30 seconds. If a Tentacle fails to respond within the configured threshold, the Watchdog initiates an automated recovery sequence: it attempts a graceful service restart first, escalates to a full appliance restart if needed, and alerts the operations team for manual intervention if automated recovery does not succeed within the recovery window.
        </p>
        <div className="mt-6 space-y-3">
          {[
            { step: "1", label: "Health check every 30 seconds", detail: "GET /health on each Tentacle API" },
            { step: "2", label: "Failure detected", detail: "No response within threshold → alert triggered" },
            { step: "3", label: "Automated service restart", detail: "WinSW restarts the Tentacle API service" },
            { step: "4", label: "Appliance restart if needed", detail: "Full VM restart via Contabo API" },
            { step: "5", label: "Operations alert", detail: "Escalation to on-call if automated recovery fails" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {item.step}
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-heading">{item.label}</p>
                <p className="text-xs text-brand-text">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "compliance",
    number: "06",
    title: "Compliance Posture",
    content: (
      <>
        <p>
          Calamari is an early-stage infrastructure company. We are not currently SOC 2 Type II certified. We are building toward that certification as part of our Phase 6 roadmap (Q1 2027). The controls described on this page represent our current implemented security practices, not a certified audit outcome.
        </p>
        <p className="mt-4">
          Our privacy practices are designed to be consistent with GDPR and CCPA requirements. We do not sell customer data, we do not use trading data for any purpose other than service delivery, and we provide data deletion on request. See our{" "}
          <Link href="/privacy" className="text-brand-cyan hover:underline">
            Privacy Policy
          </Link>{" "}
          for the complete data handling disclosure.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "SOC 2 Type II", status: "Roadmap (Q1 2027)", color: "text-yellow-400 bg-yellow-900/20" },
            { label: "GDPR Alignment", status: "Implemented", color: "text-green-400 bg-green-900/20" },
            { label: "CCPA Alignment", status: "Implemented", color: "text-green-400 bg-green-900/20" },
          ].map((item) => (
            <div key={item.label} className="bg-brand-card border border-brand-border rounded-lg p-4">
              <p className="text-xs text-brand-text uppercase tracking-wider mb-2">{item.label}</p>
              <span className={`text-xs font-bold px-2 py-1 rounded ${item.color}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export default function Security() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
            Infrastructure & Security
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
            Security Architecture
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            How Calamari protects your infrastructure, credentials, and trading operations. Written for enterprise prospects evaluating our security posture.
          </p>
        </div>

        {/* Quick summary bar */}
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Dedicated VM", sub: "per customer" },
            { label: "Zero trade data", sub: "stored on our servers" },
            { label: "30s health checks", sub: "external watchdog" },
            { label: "TLS everywhere", sub: "no plaintext channels" },
          ].map((item) => (
            <div key={item.label} className="bg-brand-card border border-brand-border rounded-lg p-3 text-center">
              <p className="text-sm font-bold text-brand-heading">{item.label}</p>
              <p className="text-xs text-brand-text mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-12 sm:space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono font-bold text-brand-cyan">{section.number}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-heading">{section.title}</h2>
              </div>
              <div className="text-brand-text leading-relaxed">{section.content}</div>
            </section>
          ))}
        </div>

        {/* Vulnerability disclosure */}
        <div className="mt-16 p-6 bg-brand-card border border-brand-border rounded-xl">
          <h2 className="text-lg font-bold text-brand-heading mb-2">Report a Vulnerability</h2>
          <p className="text-sm text-brand-text leading-relaxed">
            If you believe you have discovered a security vulnerability in our platform, please report it immediately at{" "}
            <a href="mailto:security@calamaritrading.ai" className="text-brand-cyan hover:underline">
              security@calamaritrading.ai
            </a>
            . We take all reports seriously, respond within 24 hours, and do not pursue legal action against good-faith security researchers.
          </p>
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link href="/" className="text-sm text-brand-text hover:text-brand-heading transition-colors">
            ← Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              Privacy Policy
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
