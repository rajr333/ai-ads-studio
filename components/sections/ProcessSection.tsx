import React from "react";
import { CREATIVE_PROCESS_STEPS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-28 bg-[#F4F3F0] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-300 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>04 PRODUCTION METHODOLOGY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              From Raw Product <br />
              <span className="text-neutral-400 font-serif italic">To Viral</span> <br />
              Campaign.
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 text-sm font-body leading-relaxed">
            A rigorous 6-stage production framework bridging the gap between raw product files and high-converting commercial storytelling.
          </p>
        </div>

        {/* 6 Step Editorial Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {CREATIVE_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-8 bg-white rounded-3xl border border-neutral-200/80 space-y-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="text-3xl font-serif text-neutral-400 font-normal">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono font-bold text-neutral-800 uppercase px-3 py-1 rounded-full bg-neutral-100">
                  PHASE 0{idx + 1}
                </span>
              </div>

              {/* Phase Title */}
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-black tracking-tight font-normal">
                  {step.phase}
                </h3>
                <h4 className="text-xs font-mono text-neutral-500">
                  {step.subtitle}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Big Agency Statement Quote */}
        <div className="p-8 md:p-12 bg-white rounded-[2.5rem] border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              THE CORE PHILOSOPHY
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-black tracking-tight leading-snug">
              "You give me the product. <br />
              <span className="text-neutral-400 font-serif italic">I give you the campaign."</span>
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex-shrink-0 shadow-md"
          >
            <span>START STEP 01 NOW</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
