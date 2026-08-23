import MeshBackground from "@/components/MeshBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemStrip from "@/components/ProblemStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed ambient blobs — behind everything */}
      <MeshBackground />

      {/* Fixed pill nav */}
      <Nav />

      <main>
        <Hero />
        <ProblemStrip />
        <Features />
        <HowItWorks />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
