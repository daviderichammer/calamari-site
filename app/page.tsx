import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import CompatibilityMatrix from "@/components/CompatibilityMatrix";
import Pricing from "@/components/Pricing";
import Story from "@/components/Story";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <CompatibilityMatrix />
      <Pricing />
      <Story />
      <FAQ />
      <Footer />
    </main>
  );
}
