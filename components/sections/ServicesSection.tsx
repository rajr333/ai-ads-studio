import React from "react";
import Link from "next/link";
import { CORE_SERVICES } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-28 bg-[#F4F3F0] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-300 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-[1.05] tracking-tight font-normal">
              What I Can <br />
              <span className="text-neutral-400 font-serif italic">Create For</span> <br />
              Your Brand.
            </h2>
          </div>

          <p className="max-w-md text-neutral-600 text-sm font-body leading-relaxed">
            Eliminate traditional production friction. We deploy generative AI video pipelines with human creative direction to deliver broadcast-caliber campaigns at speed.
          </p>
        </div>

        {/* 6 Clean Luxury Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.number}
              className="group bg-white rounded-3xl border border-neutral-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <span className="text-xs font-mono text-black font-bold">
                    SERVICE 0{srv.number.slice(-1)}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {srv.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono text-neutral-500 uppercase bg-neutral-100 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Title & Headline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-black tracking-tight font-normal">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 leading-normal">
                    {srv.headline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-600 font-body leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 space-y-2.5 border-t border-neutral-100">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    DELIVERABLES:
                  </span>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-start gap-2 text-xs text-neutral-700 font-body"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service CTA */}
              <div className="pt-8 mt-6 border-t border-neutral-100">
                <Link
                  href="/#contact"
                  className="group/cta inline-flex items-center justify-between w-full text-xs font-medium uppercase tracking-wider text-black hover:text-neutral-600 transition-colors"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
