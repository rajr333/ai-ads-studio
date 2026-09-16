"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Flame, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>TRANSPARENT PRICING // NO HIDDEN FEES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              High-ROI Pricing <br />
              <span className="text-neutral-400 font-serif italic">Built For Modern</span> <br />
              Brands.
            </h2>
          </div>

          <div className="max-w-md space-y-2 text-neutral-600 text-sm font-body leading-relaxed">
            <p>
              Direct-response AI video commercials engineered to scale your ROAS without physical shoot friction, actor fees, or massive agency retainers.
            </p>
            <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              FAST 24-48H TURNAROUND • FULL COMMERCIAL RIGHTS
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Plan 1: Single Video Ad */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] border border-neutral-200/90 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-neutral-400 relative group">
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                    STARTER / TEST RUN
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-black font-normal">
                    1 Video Ad
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-serif text-black tracking-tight font-normal">
                    ₹2,500
                  </span>
                  <span className="text-neutral-400 text-xs font-mono uppercase">
                    / SINGLE AD
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-body">
                  Ideal for testing a new product angle or launching your first AI-driven commercial.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-3 pt-4 border-t border-neutral-100 font-body text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>1 Custom AI Video Commercial</strong> (Up to 30s)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>9:16 Vertical</strong> (Reels/TikTok) or 16:9 Landscape</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>High-Converting Direct-Response Script & Hook</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>AI Voiceover & Sound Design (SFX + Music)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Full HD 1080p Master Export</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>24–48 Hours</strong> Fast Delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>1 Free Revision Round Included</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-black">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>100% Full Commercial Rights</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-100">
              <Link
                href="/#contact"
                className="w-full py-4 rounded-full bg-neutral-100 text-black text-xs font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-black group-hover:text-white shadow-sm"
              >
                <span>GET 1 VIDEO AD // ₹2,500</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Plan 2: 10 Video Ads Pack (Featured / High Value) */}
          <div className="lg:col-span-7 bg-black text-white rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between relative shadow-2xl overflow-hidden border border-neutral-800">
            {/* Ambient subtle glow background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="space-y-8 relative z-10">
              {/* Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase tracking-widest border border-white/20">
                    <Flame className="w-3 h-3 text-amber-400" />
                    <span>MOST POPULAR // SCALING BUNDLE</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-normal pt-2">
                    10 Video Ads Pack
                  </h3>
                </div>

                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] uppercase tracking-wider border border-emerald-500/30">
                    SAVE ₹5,000 (20% OFF)
                  </span>
                </div>
              </div>

              {/* Price block */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-5xl sm:text-7xl font-serif tracking-tight font-normal text-white">
                    ₹20,000
                  </span>
                  <span className="text-neutral-500 line-through text-xl font-mono">
                    ₹25,000
                  </span>
                  <span className="text-neutral-400 text-xs font-mono uppercase bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                    ₹2,000 PER AD
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-body">
                  Engineered for brands running Meta, TikTok & YouTube ad campaigns looking to test multiple viral hooks and creatives.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-800 font-body text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>10 High-Converting AI Commercials</strong></span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>10 Unique Hook Variations</strong> (A/B Test)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Multiple Formats (9:16 + 16:9 + 1:1)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Premium UGC + Cinematic Hybrid Styles</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Ultra HD 4K & 1080p Deliverables</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>Priority Turnaround</strong> (Staggered or Batch)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span><strong>Unlimited Revisions Support</strong></span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Dedicated Creative Art Direction</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Sound FX, Trending Music & AI Voiceovers</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Full Commercial & Resell Licensing</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-800 relative z-10">
              <Link
                href="/#contact"
                className="w-full py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>CLAIM 10 ADS PACK // ₹20,000</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges Footer */}
        <div className="pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-black uppercase">24-48H TURNAROUND</span>
            <p className="text-[11px] text-neutral-500 font-body">Rapid production sprints</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-black uppercase">HOOK-RATE DRIVEN</span>
            <p className="text-[11px] text-neutral-500 font-body">Engineered to stop scroll</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-black uppercase">COMMERCIAL RIGHTS</span>
            <p className="text-[11px] text-neutral-500 font-body">100% royalty-free ownership</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-black uppercase">STUDIO QUALITY</span>
            <p className="text-[11px] text-neutral-500 font-body">1080p & 4K cinematic export</p>
          </div>
        </div>
      </div>
    </section>
  );
}