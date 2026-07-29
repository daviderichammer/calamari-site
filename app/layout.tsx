import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Calamari Trading | Managed MT4/MT5 Infrastructure for Prop Traders",
  description:
    "Managed MT4/MT5 infrastructure for prop firm traders. Dedicated Windows VM, up to 7 MT4/MT5 instances, FX Blue trade copying, 99.9% uptime target, and LiveView. Built by traders, for traders.",
  keywords:
    "prop trading, MT4, MT5, prop firms, funded accounts, trade copying, VPS, forex, prop firm infrastructure",
  openGraph: {
    title: "Calamari Trading | Managed MT4/MT5 Infrastructure for Prop Traders",
    description:
      "Managed MT4/MT5 infrastructure for prop firm traders. Your MT4 and MT5 Accounts. One Managed Platform.",
    url: "https://calamaritrading.ai",
    siteName: "Calamari Trading",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calamari Trading | Managed MT4/MT5 Infrastructure for Prop Traders",
    description: "Managed MT4/MT5 infrastructure for prop firm traders. Your MT4 and MT5 Accounts. One Managed Platform.",
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
        {/* Tawk.to Live Chat Widget
            TO ACTIVATE: Replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID below
            with your actual values from tawk.to > Administration > Chat Widget > Direct Chat Link
            Format: https://embed.tawk.to/{PROPERTY_ID}/{WIDGET_ID}
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/TAWK_PROPERTY_ID/TAWK_WIDGET_ID';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-brand-darker text-brand-heading font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
