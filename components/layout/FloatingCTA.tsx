"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <Link
          href="/#contact"
          data-cursor="OPEN"
          className="group flex items-center gap-2.5 px-6 py-3.5 bg-accent text-black font-display font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(184,255,61,0.25)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          <span>START A PROJECT</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-secondary/90 backdrop-blur-md border-t border-border animate-in slide-in-from-bottom duration-300">
        <Link
          href="/#contact"
          className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-black font-display font-bold text-xs uppercase tracking-widest"
        >
          <span>CREATE MY AD →</span>
        </Link>
      </div>
    </>
  );
}
