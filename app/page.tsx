import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Story from "@/components/Story";
import CompatibilityMatrix from "@/components/CompatibilityMatrix";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Calamari Trading | Managed MT4/MT5 Infrastructure for Prop Traders",
  description:
    "Calamari keeps every MT4 and MT5 account correctly sized, synchronized, and within its individual limits. Managed infrastructure for prop firm traders who trade their own accounts.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Story />
      <CompatibilityMatrix />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
