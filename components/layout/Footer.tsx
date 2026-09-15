import React from "react";
import Link from "next/link";
import { STUDIO_CONFIG } from "@/lib/config";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem] mt-4">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>READY TO SCALE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.08] font-normal">
              AI Video Ads That <br />
              <span className="text-neutral-400 font-serif italic">Make Brands Impossible</span> <br />
              to Ignore.
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed font-body">
              {STUDIO_CONFIG.statement}
            </p>
            <div className="pt-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg"
              >
                <span>COMMISSION A CAMPAIGN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {[
                { name: "SELECTED WORK", href: "/#work" },
                { name: "CORE SERVICES", href: "/#services" },
                { name: "CREATIVE PROCESS", href: "/#process" },
                { name: "INDUSTRIES", href: "/#industries" },
                { name: "WHY WORK WITH ME", href: "/#whyme" },
                { name: "START A PROJECT", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              CHANNELS
            </h4>
            <ul className="space-y-3">
              {[
                { name: "INSTAGRAM", href: STUDIO_CONFIG.socials.instagram },
                { name: "YOUTUBE", href: STUDIO_CONFIG.socials.youtube },
                { name: "LINKEDIN", href: STUDIO_CONFIG.socials.linkedin },
                { name: "BEHANCE", href: STUDIO_CONFIG.socials.behance },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xs font-mono tracking-wider text-neutral-400 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <span className="block text-[10px] font-mono text-neutral-500 uppercase">
                DIRECT INQUIRY
              </span>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="text-xs text-neutral-300 hover:text-white transition-colors font-mono"
              >
                {STUDIO_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Studio Watermark */}
        <div className="pt-20 pb-8 border-b border-neutral-800 select-none overflow-hidden">
          <span className="block text-[13vw] font-serif uppercase tracking-tightest leading-none text-white/[0.04] whitespace-nowrap">
            {STUDIO_CONFIG.name.replace("//", "").trim()}
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {STUDIO_CONFIG.year} {STUDIO_CONFIG.fullName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <span>DIRECTOR & FOUNDER: {STUDIO_CONFIG.creator}</span>
            <Link href="/admin" className="hover:text-neutral-300 transition-colors">
              [ADMIN PORTAL]
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
