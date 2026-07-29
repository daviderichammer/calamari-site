"use client";

export default function CompatibilityMatrix() {
  const rows = [
    {
      firm: "FTMO",
      program: "2-Step Challenge",
      platform: "MT5",
      status: "Verified",
      statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
      notes: "Subject to current FTMO rules",
    },
    {
      firm: "The5ers",
      program: "Instant Funding",
      platform: "MT5",
      status: "Verified",
      statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
      notes: "Subject to current rules",
    },
    {
      firm: "FundedNext",
      program: "Stellar 2-Step",
      platform: "MT5",
      status: "Verified",
      statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
      notes: "Subject to current rules",
    },
    {
      firm: "Other MT4/MT5 firms",
      program: "Any MT4/MT5 program",
      platform: "MT4 / MT5",
      status: "Reviewed at onboarding",
      statusColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
      notes: "Compatibility confirmed before setup",
    },
  ];

  return (
    <section id="compatibility" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-sm font-medium mb-6">
            Prop firm compatibility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Know before you sign up.
            <br />
            <span className="gradient-text">Verified compatibility.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text max-w-2xl mx-auto px-2">
            Compatibility is reviewed during onboarding. Rules vary by firm, program, and account phase.
            The table below reflects known status at the time of writing.
          </p>
        </div>

        {/* Matrix table */}
        <div className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-brand-border bg-brand-darker/50">
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs font-bold text-brand-text uppercase tracking-wider">Firm</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs font-bold text-brand-text uppercase tracking-wider">Program</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs font-bold text-brand-text uppercase tracking-wider">Platform</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs font-bold text-brand-text uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-xs font-bold text-brand-text uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-blue/5 transition-colors">
                    <td className="py-3 sm:py-4 px-4 sm:px-6">
                      <span className="font-bold text-brand-heading text-sm">{row.firm}</span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-brand-text text-xs sm:text-sm">{row.program}</td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-1 rounded">
                        {row.platform}
                      </span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded border ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-6 text-xs text-brand-text/70">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-brand-card/50 border border-brand-border">
          <div className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg flex-shrink-0">⚠</span>
            <div className="text-xs sm:text-sm text-brand-text/70 leading-relaxed">
              <strong className="text-brand-text">Compatibility is reviewed during onboarding.</strong>{" "}
              Rules vary by firm, program, and account phase. Prop firm terms change without notice.
              The status shown above reflects our current knowledge and does not constitute a guarantee.
              We verify compatibility for your specific accounts before setup begins.
            </div>
          </div>
        </div>

        {/* General MT4/MT5 statement */}
        <div className="mt-4 text-center">
          <p className="text-sm text-brand-text/60">
            Calamari can operate with most standard MT4 and MT5 broker terminals. Prop-firm rules vary by firm, program, phase and account ownership. We review intended configurations during onboarding, but customers remain responsible for confirming compliance with their agreements.
            If your firm is not listed, compatibility will be confirmed during your onboarding review.
          </p>
        </div>
      </div>
    </section>
  );
}
