"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioFilterProps {
  projects: Project[];
}

const CATEGORIES = [
  "ALL",
  "FASHION",
  "JEWELLERY",
  "SHOES",
  "AI UGC",
  "LUXURY",
  "COMMERCIALS",
];

export default function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filtered = projects.filter((project) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "AI UGC") {
      return (
        project.service === "AI UGC" ||
        (project.industry as string) === "AI UGC" ||
        project.industry === "SOCIAL ADS" ||
        (project.category && project.category.includes("UGC"))
      );
    }
    if (selectedCategory === "COMMERCIALS") {
      return project.service === "Product Commercials" || project.service === "AI Video Ads";
    }
    return (project.industry as string) === selectedCategory;
  });

  return (
    <div className="w-full space-y-12">
      {/* Filter Tabs Header with Pill Buttons */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-6 overflow-x-auto no-scrollbar gap-4">
        <div className="flex items-center space-x-2 flex-nowrap">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-black text-white font-semibold shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-neutral-400 hidden lg:inline-block flex-shrink-0">
          SHOWING {filtered.length} CAMPAIGNS
        </span>
      </div>

      {/* Animated Editorial Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <AnimatePresence>
          {filtered.map((project, index) => {
            const colSpan =
              index % 4 === 0
                ? "md:col-span-12"
                : index % 4 === 1
                ? "md:col-span-7"
                : index % 4 === 2
                ? "md:col-span-5"
                : "md:col-span-12";

            const isFullWidth = colSpan === "md:col-span-12";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`${colSpan} group`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="VIEW"
                  className="block relative rounded-[2rem] bg-neutral-950 border border-neutral-200/60 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Media Container */}
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      isFullWidth
                        ? "aspect-[16/9] md:aspect-[21/9]"
                        : project.format === "9:16"
                        ? "aspect-[9/16] max-h-[580px]"
                        : "aspect-[16/9]"
                    }`}
                  >
                    <video
                      src={project.videoUrl}
                      poster={project.videoUrl.replace(/\.mp4$/i, ".jpg")}
                      preload="metadata"
                      autoPlay
                      loop
                      muted
                      playsInline
                      // @ts-ignore
                      webkit-playsinline="true"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                      <div className="flex items-center space-x-2">
                        {project.isSpec && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                            SPEC CREATIVE
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
                          {project.format}
                        </span>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Metadata Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-3">
                      <div className="flex items-center space-x-3 text-xs font-mono text-neutral-300 uppercase tracking-widest">
                        <span>{project.industry}</span>
                        <span>•</span>
                        <span>{project.service}</span>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="space-y-1.5">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-300 font-body max-w-xl line-clamp-2">
                            {project.tagline}
                          </p>
                        </div>

                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 ml-4 group-hover:bg-neutral-200 transition-colors shadow-lg">
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
