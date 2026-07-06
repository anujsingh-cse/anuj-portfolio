import type { Metadata } from "next";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CommandPalette from "@/components/CommandPalette";
import Spotlight from "@/components/effects/Spotlight";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read about AI engineering, LLM development, full-stack architecture, and startup building by Anuj Singh.",
};

export default function BlogPage() {
  return (
    <>
      <Background />
      <Spotlight />
      <Navbar />
      <CommandPalette />
      <main id="main-content" className="min-h-screen pt-24">
        <BlogPageContent />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
