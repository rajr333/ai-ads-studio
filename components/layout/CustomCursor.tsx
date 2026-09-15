"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch devices / mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[10000] transition-transform duration-75 ease-out will-change-transform flex items-center justify-center"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {isHovered ? (
        <div className="w-20 h-20 rounded-full bg-white/90 text-black flex items-center justify-center text-[11px] font-display font-extrabold tracking-widest uppercase shadow-2xl backdrop-blur-sm transition-all duration-200 scale-100 animate-in zoom-in-50">
          {cursorText}
        </div>
      ) : (
        <div className="w-3 h-3 rounded-full bg-white transition-all duration-200" />
      )}
    </div>
  );
}
