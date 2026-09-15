import React from "react";
import { WHY_WORK_WITH_ME } from "@/lib/data";
import { ShieldCheck, Layers, Target, Zap, Smartphone, ArrowUpRight } from "lucide-react";

export default function WhyUsSection() {
  const icons = [
    <ShieldCheck className="w-5 h-5 text-black" key="1" />,
    <Layers className="w-5 h-5 text-black" key="2" />,
    <Target className="w-5 h-5 text-black" key="3" />,
    <Zap className="w-5 h-5 text-black" key="4" />,
    <Smartphone className="w-5 h-5 text-black" key="5" />,
  ];

  return (
    <section id="whyme" className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>05 COMPETITIVE ADVANTAGES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              Why Modern Brands <br />
              <span className="text-neutral-400 font-serif italic">Choose This</span> <br />
              Studio.
            </h2>
          </div>
          <p className="max-w-md text-neutral-600 text-sm font-body leading-relaxed">
            No empty claims. Here is how modern generative workflows combined with direct-response advertising strategy outperform traditional production houses.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 bg-white rounded-3xl border border-neutral-200/80 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center">
                {icons[idx]}
              </div>

              <h3 className="text-xl font-serif text-black tracking-tight font-normal">
                {item.title}
              </h3>

              <p className="text-xs text-neutral-600 font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Summary Callout */}
          <div className="p-8 bg-neutral-900 rounded-3xl border border-neutral-800 space-y-6 flex flex-col justify-between shadow-xl text-white">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                ZERO COMPROMISE
              </span>
              <h3 className="text-2xl font-serif text-white tracking-tight leading-snug">
                Creative Direction <br />
                <span className="italic text-neutral-400">+ AI Velocity</span>
              </h3>
              <p className="text-xs text-neutral-300 font-body leading-relaxed">
                The speed of artificial intelligence with the taste, storytelling, and conversion rigor of a seasoned creative director.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                <span>TALK ABOUT YOUR BRAND</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
