"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { STUDIO_CONFIG } from "@/lib/config";

export default function Hero() {
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Typography & Value Prop */}
        <div className="lg:col-span-7 space-y-8">
          {/* Top Label with Dot */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-600 font-semibold">
              AI UGC CREATOR / CREATIVE PARTNER
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif text-black leading-[1.03] tracking-tight font-normal">
            AI UGC That <br />
            Makes Brands <br />
            <span className="text-neutral-400 font-serif italic font-light">
              Impossible to
            </span> <br />
            Ignore.
          </h1>

          {/* Subheadline description */}
          <p className="text-base sm:text-lg text-neutral-600 font-body max-w-xl leading-relaxed">
            I create scroll-stopping AI-powered UGC ads and creative content designed to help brands showcase their products in a modern, authentic, and engaging way.
          </p>

          {/* Actions Row */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              href="/#contact"
              data-cursor="OPEN"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-neutral-800 hover:shadow-xl transition-all duration-200"
            >
              <span>WORK WITH ME</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/#work"
              data-cursor="VIEW"
              className="inline-flex items-center gap-2 px-6 py-4 text-neutral-800 hover:text-black text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
            >
              <span>VIEW MY WORK</span>
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Large Rounded Editorial Photo / Video Card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div 
            className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-200/80 bg-neutral-100 group cursor-pointer"
            onClick={() => setIsPlayingVideo(!isPlayingVideo)}
          >
            {isPlayingVideo ? (
              <video
                src="/videos/editorial-lifestyle.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter contrast-[105%]"
              />
            ) : (
              <img
                src="/images/hero-portrait.jpg"
                alt="AI UGC Creative Director"
                className="w-full h-full object-cover filter contrast-[105%] transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Vertical Studio Watermark on Right */}
            <div className="absolute top-8 right-6 pointer-events-none select-none z-20">
              <span className="writing-mode-vertical text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 rotate-90 origin-top-right block">
                {STUDIO_CONFIG.name.replace("//", "").trim()} / 2026
              </span>
            </div>

            {/* Floating Glass Badge Card on Bottom Left */}
            <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
              <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/80 space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-800 uppercase">
                    AVAILABLE FOR SELECT PROJECTS
                  </span>
                </div>
                <p className="text-xs font-serif italic text-neutral-700 font-medium">
                  Creative that earns attention & scales ROAS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
