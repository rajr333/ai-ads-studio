import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { STUDIO_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${STUDIO_CONFIG.name} | AI Advertising Creative Studio`,
  description:
    "AI Video Ads That Make Brands Impossible to Ignore. Premium AI-generated video advertisements, commercial photography, and direct-response advertising creatives for modern brands.",
  keywords: [
    "AI Advertising",
    "AI Commercials",
    "AI Video Ads",
    "Creative Studio",
    "AI Product Photography",
    "D2C Ads",
    "AI Creative Direction",
    "AI UGC Ads",
  ],
  authors: [{ name: STUDIO_CONFIG.creator }],
  openGraph: {
    title: `${STUDIO_CONFIG.name} | AI Advertising Creative Studio`,
    description: "AI Video Ads That Make Brands Impossible to Ignore.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
    >
      <body className="bg-[#FAF9F7] text-[#111111] selection:bg-black selection:text-white min-h-screen relative antialiased">
        {/* Subtle Film grain layer */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Sticky luxury navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Floating action button & sticky mobile bar */}
        <FloatingCTA />

        {/* Studio Footer */}
        <Footer />
      </body>
    </html>
  );
}
