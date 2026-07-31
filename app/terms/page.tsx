import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Calamari Trading",
  description:
    "Terms of Service for Calamari Trading — managed MT4/MT5 infrastructure for prop firm traders. Subscription terms, acceptable use, service levels, and governing law.",
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-heading mb-4">
            Terms of Service
          </h1>
          <p className="text-brand-text">
            Effective Date: July 1, 2026 &nbsp;·&nbsp; Last Updated: July 31, 2026
          </p>
          <p className="mt-4 text-sm text-brand-text leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Calamari Trading LLC, a Florida limited liability company (&ldquo;Calamari,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of the Calamari Trading platform and related managed infrastructure services (collectively, the &ldquo;Services&rdquo;). By subscribing to or using the Services, you agree to be bound by these Terms in their entirety.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 sm:space-y-12">

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              1. Service Description
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari provides managed Windows appliance hosting services for MetaTrader 4 (&ldquo;MT4&rdquo;) and MetaTrader 5 (&ldquo;MT5&rdquo;) trading terminals. Each subscription unit is referred to as a &ldquo;Tentacle&rdquo; — a dedicated Windows Server virtual machine provisioned with the Calamari software stack, including the Tentacle API, FX Blue trade copying software, the Watchdog monitoring agent, and the LiveView remote desktop streaming service.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              <strong className="text-brand-heading">Calamari is strictly an infrastructure provider.</strong> We do not provide trading signals, investment advice, portfolio management, or account management services of any kind. All trading decisions, strategies, and execution parameters are solely your responsibility. We provide the machine; you provide the alpha.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              The Services include access to the Calamari Dashboard, a web-based control panel for managing your Tentacle(s), and the Tentacle API, a programmatic interface for custom integrations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              2. Subscription Terms and Billing
            </h2>
            <p className="text-brand-text leading-relaxed">
              The current subscription fee is <strong className="text-brand-heading">$199.00 USD per Tentacle per month</strong>. Each Tentacle supports up to seven (7) simultaneous MT4/MT5 terminal instances. Pricing is subject to change with thirty (30) days&apos; written notice.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Subscriptions are billed monthly on the anniversary of your activation date. Payment is processed via Stripe. By providing payment information, you authorize Calamari to charge the applicable subscription fee on each billing date until the subscription is cancelled.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              We offer a <strong className="text-brand-heading">7-day money-back guarantee</strong> from the date your Tentacle is activated. If you are not satisfied within this period, contact support for a full refund. After seven days, all payments are non-refundable. Partial-month credits are not issued upon cancellation.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              If a payment fails, we will retry the charge up to three times over five business days. If payment remains outstanding after this period, your Tentacle will be suspended. Suspended Tentacles are retained for fourteen (14) days, after which they are decommissioned and all data is permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              3. Acceptable Use
            </h2>
            <p className="text-brand-text leading-relaxed">
              You agree to use the Services only for lawful purposes and in compliance with all applicable laws, regulations, and the terms and conditions of your broker(s) and proprietary trading firm(s). Specifically, you agree that you will not:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "Engage in, facilitate, or attempt to facilitate any form of illegal trading activity, including market manipulation, wash trading, front-running, or insider trading.",
                "Use the Services to manage trading accounts belonging to third parties without their explicit written consent and in compliance with all applicable financial regulations.",
                "Operate a commercial copy-trading service, PAMM structure, or managed account service using the Services without prior written approval from Calamari.",
                "Attempt to circumvent, disable, or interfere with any security feature of the Services.",
                "Use the Services in a manner that violates the terms of service of MetaQuotes Software Corp. (the developer of MT4/MT5), your broker, or any proprietary trading firm.",
                "Reverse-engineer, decompile, or attempt to extract the source code of any Calamari software.",
                "Resell, sublicense, or otherwise transfer access to the Services to any third party without prior written consent from Calamari.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              Calamari reserves the right to suspend or terminate your account immediately and without notice if we determine, in our sole discretion, that you are in violation of this section.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              4. Service Level and Uptime
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari targets a <strong className="text-brand-heading">99.5% monthly uptime</strong> for the Tentacle infrastructure layer. This target applies to the availability of the Tentacle API and the Windows Server appliance. It does not apply to MT4/MT5 terminal connectivity to your broker, which is dependent on your broker&apos;s infrastructure and is outside Calamari&apos;s control.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Planned maintenance windows are scheduled during off-peak hours (typically 02:00–05:00 UTC on weekdays) and announced via the Dashboard and email with at least 48 hours&apos; notice. Emergency maintenance required to address active security incidents or critical failures may be performed without advance notice.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              The 99.5% uptime target is a service objective, not a contractual guarantee. Calamari does not offer service credits for downtime. Downtime caused by factors outside Calamari&apos;s reasonable control — including Contabo infrastructure failures, broker platform outages, internet routing issues, or force majeure events — does not count against the uptime target.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              5. Customer Representations and Warranties
            </h2>
            <p className="text-brand-text leading-relaxed">
              By using the Services, you represent and warrant that:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-brand-text">
              {[
                "You are at least 18 years of age and have the legal capacity to enter into a binding contract.",
                "All information you provide to Calamari is accurate, current, and complete.",
                "All trading accounts connected to the Services are owned by you or you have explicit written authorization from the account owner.",
                "Your use of the Services complies with all applicable laws and regulations in your jurisdiction.",
                "Your use of the Services complies with the terms and conditions of your broker(s) and proprietary trading firm(s).",
                "You understand that trading involves significant risk of loss and that Calamari does not guarantee any trading outcomes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              6. Data Handling
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari collects and processes your name, email address, and payment information (via Stripe) to deliver and bill for the Services. We also collect Tentacle telemetry data — CPU usage, memory consumption, uptime metrics, and API health signals — to operate the monitoring and recovery systems.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              <strong className="text-brand-heading">We do not store your trade execution data on our servers.</strong> All trading activity occurs locally on your Tentacle and is transmitted directly between your MT4/MT5 terminals and your broker. Broker account passwords are handled in-memory only and are never written to disk or transmitted to Calamari&apos;s servers. See our{" "}
              <Link href="/privacy" className="text-brand-cyan hover:underline">
                Privacy Policy
              </Link>{" "}
              for a complete description of our data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              7. Limitation of Liability
            </h2>
            <p className="text-brand-text leading-relaxed">
              <strong className="text-brand-heading">CALAMARI IS AN INFRASTRUCTURE PROVIDER. WE DO NOT GUARANTEE TRADING PROFITS, AND NOTHING IN THESE TERMS OR ON OUR WEBSITE CONSTITUTES FINANCIAL ADVICE.</strong>
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              To the maximum extent permitted by applicable law, Calamari and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of trading opportunities, loss of data, or business interruption, arising out of or related to your use of the Services, even if Calamari has been advised of the possibility of such damages.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Calamari is not responsible for:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-brand-text">
              {[
                "Trading losses or missed profits of any kind.",
                "Broker execution speed, fills, slippage, or rejections.",
                "Broker or proprietary trading firm platform outages or rule changes.",
                "Account violations, breaches, or disqualifications imposed by your broker or prop firm.",
                "Failures or inaccuracies in third-party trade copying software (including FX Blue).",
                "Internet connectivity issues between your Tentacle and your broker's servers.",
                "Actions taken by MetaQuotes Software Corp. that affect MT4/MT5 terminal functionality.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-cyan mt-0.5 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-brand-text leading-relaxed">
              Calamari&apos;s total aggregate liability for any claims arising under or related to these Terms shall not exceed the total amount you paid Calamari for the Services during the three (3) calendar months immediately preceding the event giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              8. Indemnification
            </h2>
            <p className="text-brand-text leading-relaxed">
              You agree to indemnify, defend, and hold harmless Calamari Trading LLC, its officers, directors, employees, contractors, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any applicable law or regulation; (d) your violation of the terms of service of any broker, proprietary trading firm, or third-party platform; or (e) any claim by a third party arising from your trading activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              9. Intellectual Property
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari retains all rights, title, and interest in and to the Calamari platform, Dashboard, Tentacle API, Watchdog Controller, and all associated software, documentation, and intellectual property. Nothing in these Terms grants you any ownership interest in Calamari&apos;s technology.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              You retain all rights to your trading strategies, Expert Advisors (EAs), and any trading data generated on your Tentacle. Calamari does not claim any ownership over your intellectual property or trading data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              10. Termination
            </h2>
            <p className="text-brand-text leading-relaxed">
              Either party may terminate this agreement with <strong className="text-brand-heading">30 days&apos; written notice</strong>. You may cancel your subscription at any time through the Dashboard or by emailing{" "}
              <a href="mailto:support@calamaritrading.ai" className="text-brand-cyan hover:underline">
                support@calamaritrading.ai
              </a>
              . Cancellation takes effect at the end of the current billing period.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Calamari may terminate your access immediately and without notice for: (a) material breach of these Terms, including violation of the Acceptable Use section; (b) non-payment; (c) conduct that poses a security risk to our infrastructure or other customers; or (d) any illegal activity.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Upon termination or cancellation, your Tentacle is queued for decommissioning. All data — including Tentacle snapshots, configuration, and any stored account information — is retained for 30 days to allow for account recovery, then permanently deleted. You may request immediate deletion by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              11. Third-Party Platforms and Compatibility
            </h2>
            <p className="text-brand-text leading-relaxed">
              The Services interact with third-party platforms, including MT4, MT5, brokers, and proprietary trading firms. Calamari is technically compatible with standard MT4 and MT5 terminals. Compatibility with specific brokers and prop firm programs is reviewed during onboarding and is subject to change as those firms update their platforms and rules.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Calamari does not control these third parties and is not responsible for their performance, uptime, rule changes, or any actions they take regarding your accounts. You remain solely responsible for ensuring your use of the Services complies with your broker&apos;s and prop firm&apos;s terms at all times.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              12. Beta Features
            </h2>
            <p className="text-brand-text leading-relaxed">
              Features labeled as &ldquo;Beta,&rdquo; &ldquo;Coming Soon,&rdquo; or &ldquo;Roadmap&rdquo; are in active development and are provided &ldquo;as is&rdquo; without warranties of any kind. Beta features may be modified, suspended, or removed at Calamari&apos;s discretion without notice or liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              13. Modifications to These Terms
            </h2>
            <p className="text-brand-text leading-relaxed">
              Calamari reserves the right to modify these Terms at any time. We will provide at least 30 days&apos; notice of material changes by posting the updated Terms on our website and notifying you via the email address on file. Your continued use of the Services after the effective date of any modification constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must cancel your subscription before the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              14. Force Majeure
            </h2>
            <p className="text-brand-text leading-relaxed">
              Neither party shall be liable for any failure or delay in performance due to causes beyond their reasonable control, including acts of God, natural disasters, war, terrorism, government action, labor disputes, internet infrastructure failures, or actions taken by third-party hosting providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              15. Governing Law and Dispute Resolution
            </h2>
            <p className="text-brand-text leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-brand-heading">State of Florida</strong>, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in Miami, Florida. Judgment on the arbitration award may be entered in any court of competent jurisdiction.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm. Nothing in this section limits Calamari&apos;s right to seek collection of unpaid fees in any court of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              16. Severability and Entire Agreement
            </h2>
            <p className="text-brand-text leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect. These Terms, together with the Privacy Policy, constitute the entire agreement between you and Calamari regarding the Services and supersede all prior agreements, representations, and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-4 pb-2 border-b border-brand-border">
              17. Contact Information
            </h2>
            <p className="text-brand-text leading-relaxed">
              For questions regarding these Terms, please contact:
            </p>
            <div className="mt-4 p-4 bg-brand-card border border-brand-border rounded-lg text-sm text-brand-text space-y-1">
              <p><strong className="text-brand-heading">Calamari Trading LLC</strong></p>
              <p>Florida, United States</p>
              <p>
                Email:{" "}
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
            <Link href="/privacy" className="text-sm text-brand-text hover:text-brand-cyan transition-colors">
              Privacy Policy
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
  );
}
