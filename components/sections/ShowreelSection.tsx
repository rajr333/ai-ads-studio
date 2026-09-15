"use client";

import React, { useState } from "react";
import { Play, Volume2, VolumeX, Maximize2 } from "lucide-react";
import Modal from "@/components/ui/Modal";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function ShowreelSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span>02 CINEMATIC SHOWREEL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-black leading-tight font-normal">
              The 2026 Showreel.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            MONTAGE // 4K BROADCAST GRADE • RUNTIME 0:45
          </div>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black rounded-[2rem] md:rounded-[2.5rem] border border-neutral-300/80 overflow-hidden group shadow-2xl">
          <video
            src="/videos/perfume-liquid-gold.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-102 transition-transform duration-700"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Interactive Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <button
              onClick={() => setModalOpen(true)}
              data-cursor="PLAY"
              className="pointer-events-auto group/btn flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover/btn:bg-neutral-200 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-1" />
              </div>
              <span className="px-5 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono tracking-widest uppercase text-white">
                PLAY FULL SHOWREEL [0:45]
              </span>
            </button>
          </div>

          {/* Quick Sound Toggle on bottom right */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-full bg-white/90 backdrop-blur-md text-black hover:bg-white shadow-md transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-black" />}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="p-3 rounded-full bg-white/90 backdrop-blur-md text-black hover:bg-white shadow-md transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Reel Category ticker on bottom left */}
          <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center space-x-4 text-[11px] font-mono text-neutral-300">
            <span className="text-white font-bold">FEATURING:</span>
            <span>JEWELLERY</span>
            <span>•</span>
            <span>CONFECTIONERY</span>
            <span>•</span>
            <span>ATHLETIC WEAR</span>
            <span>•</span>
            <span>HORLOGERIE</span>
            <span>•</span>
            <span>SKINCARE</span>
          </div>
        </div>
      </div>

      {/* Showreel Fullscreen Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="STUDIO SHOWREEL // 4K DIRECTOR'S CUT"
      >
        <VideoPlayer
          src="/videos/perfume-liquid-gold.mp4"
          autoPlay={true}
          loop={true}
          aspectRatio="16:9"
          title="ATELIER AI // 2026 COMMERCIAL REEL"
        />
      </Modal>
    </section>
  );
}
