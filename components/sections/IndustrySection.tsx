"use client";

import React, { useState } from "react";
import { INDUSTRIES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0]);

  return (
    <section id="industries" className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>03 MARKET VERSATILITY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              One Creative Mind. <br />
              <span className="text-neutral-400 font-serif italic">Many Industries.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 text-sm font-body leading-relaxed">
            From haute joaillerie reflections to sweat-drenched sportswear and microscopic watch gears, we tailor the creative direction specifically to the aesthetic codes of each market.
          </p>
        </div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Industry List */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-y border-neutral-200 bg-white rounded-3xl p-2 sm:p-4 shadow-sm">
            {INDUSTRIES.map((ind, idx) => {
              const isActive = activeIndustry.id === ind.id;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIndustry(ind)}
                  onClick={() => setActiveIndustry(ind)}
                  className={`group py-5 px-6 cursor-pointer transition-all duration-300 flex items-center justify-between rounded-2xl ${
                    isActive ? "bg-neutral-100 pl-8" : "hover:bg-neutral-50"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono text-neutral-400 font-semibold">
                        0{idx + 1}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-serif transition-colors ${
                          isActive ? "text-black font-semibold" : "text-neutral-500 group-hover:text-black font-normal"
                        }`}
                      >
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 font-body pl-7 line-clamp-1">
                      {ind.description}
                    </p>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center transition-all ${
                      isActive ? "bg-black text-white border-black" : "text-neutral-400 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Showcase on the Right */}
          <div className="lg:col-span-5 sticky top-28 bg-neutral-900 rounded-[2.5rem] border border-neutral-300/80 overflow-hidden shadow-xl">
            <div className="relative aspect-[9/16] max-h-[580px] w-full overflow-hidden">
              <video
                key={activeIndustry.id}
                src={activeIndustry.videoPreview}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

              {/* Tag overlay */}
              <div className="absolute top-5 left-5 z-10 px-3.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-mono font-bold text-black uppercase shadow-sm">
                {activeIndustry.tag}
              </div>

              {/* Bottom details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 space-y-2.5">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  CREATIVE CODE
                </span>
                <h4 className="text-2xl font-serif text-white tracking-tight">
                  {activeIndustry.name}
                </h4>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {activeIndustry.description}
                </p>
                <div className="pt-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-md"
                  >
                    <span>COMMISSION {activeIndustry.name} AD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
