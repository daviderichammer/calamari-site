import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Calamari Trading",
  description: "Terms of Service for Calamari Trading.",
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
          <p className="text-brand-text">Last Updated: October 2023</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-brand max-w-none space-y-8 sm:space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">1. Contracting Entity</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer") and Calamari Trading LLC ("Calamari", "we", "us", or "our") governing your access to and use of the Calamari Trading platform and related infrastructure services (the "Services"). By accessing or using the Services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">2. Service Description</h2>
            <p>
              Calamari provides managed infrastructure and software configuration services for traders. Specifically, we provision and manage Windows Virtual Private Servers (VPS), install and configure MetaTrader 4 (MT4) and MetaTrader 5 (MT5) terminals, and set up trade copying software. 
              <br/><br/>
              <strong>Calamari is strictly an infrastructure provider. We do not provide trading signals, investment advice, or account management services.</strong> You are solely responsible for all trading decisions executed on your infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">3. Customer Representations</h2>
            <p>
              By using the Services, you represent and warrant that:
              <ul>
                <li>You are at least 18 years of age.</li>
                <li>You have the legal authority to enter into these Terms.</li>
                <li>All accounts connected to the Services are owned by you.</li>
                <li>Your use of the Services complies with all applicable laws and regulations.</li>
                <li>Your use of the Services complies with the terms and conditions of your broker(s) and/or proprietary trading firm(s).</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">4. Account Ownership</h2>
            <p>
              The Services are designed exclusively for individuals managing their own trading accounts. You may not use the Services to manage accounts belonging to third parties, operate a PAMM/MAM structure, or provide copy-trading services to others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">5. Credential Responsibilities</h2>
            <p>
              To configure the Services, you must provide accurate login credentials for your MT4 and MT5 accounts. You are responsible for ensuring these credentials are correct. Calamari encrypts and stores these credentials securely to maintain and recover your terminal connections. You must notify us immediately if you suspect your credentials have been compromised.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">6. Third-Party Platforms</h2>
            <p>
              The Services interact with third-party platforms, including MT4, MT5, brokers, and proprietary trading firms. We do not control these third parties. We are not responsible for their performance, uptime, rule changes, or any actions they take regarding your accounts. Compatibility with specific prop firms may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">7. Intellectual Property</h2>
            <p>
              Calamari retains all rights, title, and interest in and to the platform, dashboard, infrastructure management tools, and associated intellectual property. You retain all rights to your trading strategies, Expert Advisors (EAs), and trading data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">8. Data Ownership</h2>
            <p>
              You own all trading execution data generated on your provisioned VM. We process this data solely to provide the Services, populate your dashboard, and monitor system health.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">9. Service Level</h2>
            <p>
              We target a 99.9% uptime for our infrastructure services. However, this is a target, not a guarantee. We may perform scheduled maintenance with advance notice. We are not responsible for downtime caused by third-party cloud providers or factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Calamari shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use. We are an infrastructure provider and are not responsible for:
              <ul>
                <li>Trading losses or missed profits.</li>
                <li>Broker or prop firm platform issues, slippage, or execution delays.</li>
                <li>Account breaches due to prop firm rule violations.</li>
                <li>Copy-trade failures or software glitches.</li>
                <li>Market conditions.</li>
              </ul>
              Our total liability for any claims arising under these Terms shall not exceed the amount you paid us for the Services in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Calamari Trading LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of your use of the Services, your violation of these Terms, or your violation of any broker or proprietary trading firm rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">12. Termination</h2>
            <p>
              Either party may terminate this agreement with 30 days' written notice. We may terminate your access immediately for breach of these Terms. Upon cancellation, your infrastructure will be decommissioned. Your data and encrypted credentials will be permanently deleted within 30 days of cancellation, or immediately upon your explicit request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">13. Refund Policy</h2>
            <p>
              We offer a 7-day money-back guarantee starting from the date your service is activated. If you are unsatisfied within this period, you may request a full refund. After 7 days, all payments are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">14. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in performance due to causes beyond their reasonable control, including acts of God, natural disasters, war, terrorism, or internet/infrastructure outages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">15. Beta and Roadmap Features</h2>
            <p>
              Features labeled as "Beta" or "Roadmap" are in active development. They are provided "as is" without warranties of any kind and may be modified or removed at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">16. Modifications</h2>
            <p>
              We reserve the right to modify these Terms. We will provide 30 days' notice for material changes by posting the updated Terms or via email. Your continued use of the Services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">17. Governing Law</h2>
            <p>
              Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by a mutually agreed-upon arbitration body.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">18. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">19. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Calamari Trading LLC regarding the Services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-heading mb-3">20. Contact Information</h2>
            <p>
              For questions regarding these Terms, please contact us at{" "}
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
