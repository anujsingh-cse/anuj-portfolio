import type { Metadata } from "next";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CommandPalette from "@/components/CommandPalette";
import Spotlight from "@/components/effects/Spotlight";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI-powered projects, SaaS applications, and automation tools built by Anuj Singh.",
};

export default function ProjectsPage() {
  return (
    <>
      <Background />
      <Spotlight />
      <Navbar />
      <CommandPalette />
      <main id="main-content" className="min-h-screen pt-24">
        <ProjectsPageContent />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
