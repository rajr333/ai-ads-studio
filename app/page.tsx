import React from "react";
import Hero from "@/components/sections/Hero";
import HeroWall from "@/components/sections/HeroWall";
import FeaturedWork from "@/components/sections/FeaturedWork";
import IndustrySection from "@/components/sections/IndustrySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import { getProjects } from "@/lib/storage";

export const revalidate = 0; // Dynamic data for live admin updates

export default function Home() {
  const allProjects = getProjects();
  const publishedProjects = allProjects.filter((p) => p.status === "published");

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 01: Hero Showcase */}
      <Hero />

      {/* 02: Cinematic Hero Portfolio Wall */}
      <HeroWall />

      {/* 03: Selected Commercial Work & Filter System */}
      <FeaturedWork projects={publishedProjects} />

      {/* 04: One Creative Mind. Many Industries. */}
      <IndustrySection />

      {/* 06: Core Agency Capabilities & Services */}
      <ServicesSection />

      {/* 07: Creative Process: From Product to Campaign */}
      <ProcessSection />

      {/* 08: Why Work With Me: Structural Creative Advantages */}
      <WhyUsSection />

      {/* 09: Transparent High-ROI Pricing */}
      <PricingSection />

      {/* 10: Commission a Campaign / Contact Section */}
      <ContactSection />
    </div>
  );
}
