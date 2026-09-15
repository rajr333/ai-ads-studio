import React from "react";
import { Project } from "@/lib/data";
import PortfolioFilter from "./PortfolioFilter";

interface FeaturedWorkProps {
  projects: Project[];
}

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  return (
    <section id="work" className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>SELECTED COMMERCIAL WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              We Make Products <br />
              <span className="text-neutral-400 font-serif italic">Look Unbelievably</span> <br />
              Expensive.
            </h2>
          </div>

          <div className="max-w-md space-y-3 text-neutral-600 text-sm font-body leading-relaxed">
            <p>
              Every advertisement below is directed with cinematic lighting, dynamic camera choreography, and direct-response conversion psychology.
            </p>
            <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              DIRECTOR-LED AI PRODUCTION
            </p>
          </div>
        </div>

        {/* Portfolio Filter & Grid Component */}
        <PortfolioFilter projects={projects} />
      </div>
    </section>
  );
}
