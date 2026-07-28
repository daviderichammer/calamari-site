import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calamari Trading — Managed Infrastructure for Serious Prop Traders",
  description:
    "One dashboard to rule all your prop firm accounts. Dedicated Windows VPS, MT5 pre-configured, trade copying, 24/7 monitoring, and LiveView. Built by traders, for traders.",
  keywords:
    "prop trading, MT5, FTMO, MyForexFunds, The5ers, trade copying, VPS, forex, prop firm",
  openGraph: {
    title: "Calamari Trading — Managed Infrastructure for Serious Prop Traders",
    description:
      "One dashboard to rule all your prop firm accounts. Built by traders, for traders.",
    url: "https://calamaritrading.ai",
    siteName: "Calamari Trading",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calamari Trading — Managed Infrastructure for Serious Prop Traders",
    description: "One dashboard to rule all your prop firm accounts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-darker text-brand-heading font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
