"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIO_CONFIG } from "@/lib/config";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "/#work" },
    { name: "SERVICES", href: "/#services" },
    { name: "WHY ME", href: "/#whyme" },
    { name: "PROCESS", href: "/#process" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Editorial Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-3 transition-opacity hover:opacity-80"
        >
          <span className="font-serif tracking-[0.25em] text-lg sm:text-xl uppercase font-semibold text-black">
            {STUDIO_CONFIG.name.replace("//", "")}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-mono tracking-widest text-neutral-600 hover:text-black transition-colors uppercase font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/admin"
            className="text-[10px] text-neutral-400 hover:text-black font-mono tracking-widest transition-colors px-2 py-1 uppercase"
          >
            [ADMIN]
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm"
          >
            <span>WORK WITH ME</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link
            href="/#contact"
            className="text-[10px] font-bold tracking-wider text-white bg-black px-3.5 py-1.5 rounded-full uppercase"
          >
            WORK
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-black hover:text-neutral-600 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-neutral-200 mt-3 px-6 py-8 space-y-6 animate-in fade-in duration-200 shadow-xl bg-white/95">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-widest text-neutral-800 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-neutral-500 hover:text-black"
            >
              [ADMIN PORTAL]
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2.5 bg-black text-white text-xs font-bold tracking-wider uppercase rounded-full inline-flex items-center gap-1.5"
            >
              <span>WORK WITH ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
