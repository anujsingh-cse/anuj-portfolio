import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProofOfWork from "@/components/ProofOfWork";
import BuildingInPublic from "@/components/BuildingInPublic";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spotlight from "@/components/effects/Spotlight";
import ScrollToTop from "@/components/ScrollToTop";
import CommandPalette from "@/components/CommandPalette";
import BlogPreview from "@/components/BlogPreview";
import RecruiterDashboard from "@/components/RecruiterDashboard";
import dynamic from "next/dynamic";

const SkillsRadar = dynamic(() => import("@/components/SkillsRadar"), {
  loading: () => <div className="h-96 animate-pulse bg-white/5 rounded-2xl" />,
});

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <Background />
      <Spotlight />

      {/* Navigation */}
      <Navbar />

      {/* Command Palette */}
      <CommandPalette />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <RecruiterDashboard />

        <div className="section-divider" />
        <ProofOfWork />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <SkillsRadar />

        <div className="section-divider" />
        <Timeline />

        <div className="section-divider" />
        <BuildingInPublic />

        <div className="section-divider" />
        <BlogPreview />

        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Utilities */}
      <ScrollToTop />
    </>
  );
}