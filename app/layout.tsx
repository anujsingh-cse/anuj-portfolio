import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { RecruiterModeProvider } from "@/components/providers/RecruiterModeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://anujsingh.dev"
  ),
  title: {
    default: "Anuj Singh | AI Engineer & Startup Builder",
    template: "%s | Anuj Singh",
  },
  description:
    "AI Engineer and Startup Builder crafting intelligent products with LLMs, automation, and modern web technologies. Building YojanaSetu — an AI-powered GovTech platform.",
  keywords: [
    "AI Engineer",
    "LLM Developer",
    "Startup Builder",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Machine Learning",
    "YojanaSetu",
  ],
  authors: [{ name: "Anuj Singh" }],
  creator: "Anuj Singh",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION",
  },
  category: "technology",
  classification: "AI Engineer, Full Stack Developer",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Anuj Singh — Portfolio",
    title: "Anuj Singh | AI Engineer & Startup Builder",
    description:
      "Building AI-powered products, automation platforms, and SaaS applications.",
    images: [
      {
        url: "https://anuj-portfolio-rust.vercel.app/og-image-v3.png",
        width: 1200,
        height: 630,
        alt: "Anuj Singh — AI Engineer & Startup Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Singh | AI Engineer & Startup Builder",
    description:
      "Building AI-powered products, automation platforms, and SaaS applications.",
    images: ["https://anuj-portfolio-rust.vercel.app/og-image-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anuj Singh",
  jobTitle: "AI Engineer & Startup Builder",
  url: "https://anujsingh.dev",
  sameAs: [
    "https://github.com/YOUR_GITHUB",
    "https://linkedin.com/in/YOUR_LINKEDIN",
    "https://twitter.com/YOUR_TWITTER",
  ],
  worksFor: {
    "@type": "Organization",
    name: "YojanaSetu",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <RecruiterModeProvider>
            <TooltipProvider>
              <a href="#main-content" className="skip-nav">
                Skip to main content
              </a>
              {children}
            </TooltipProvider>
          </RecruiterModeProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
