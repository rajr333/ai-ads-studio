"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, X, Volume2, VolumeX } from "lucide-react";
import Modal from "@/components/ui/Modal";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function HeroWall() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    industry: string;
    videoUrl: string;
    tag: string;
  } | null>(null);

  // All 9:16 vertical video ads from @demo ad folder
  const wallItems = [
    {
      title: "STREETWEAR DRIP",
      industry: "FASHION & APPAREL",
      videoUrl: "/videos/demo-streetwear-fashion.mp4",
      slug: "streetwear-drip-ad",
      tag: "EDITORIAL 9:16",
    },
    {
      title: "HYPER SNEAKER",
      industry: "FOOTWEAR & KICKS",
      videoUrl: "/videos/demo-sneaker-generation.mp4",
      slug: "hyperlight-stratus-footwear",
      tag: "DYNAMIC MOTION",
    },
    {
      title: "BLACK TUNIC HAUTE",
      industry: "LUXURY FASHION",
      videoUrl: "/videos/demo-black-tunic-editorial.mp4",
      slug: "haute-couture-editorial",
      tag: "RUNWAY 9:16",
    },
    {
      title: "ROYAL GIFT BOX",
      industry: "FINE JEWELLERY",
      videoUrl: "/videos/demo-necklace-giftbox.mp4",
      slug: "aura-gold-necklace",
      tag: "TACTILE UNBOXING",
    },
    {
      title: "DAYLIGHT GLAMOUR",
      industry: "FINE JEWELLERY",
      videoUrl: "/videos/demo-necklace-daylight.mp4",
      slug: "aura-gold-necklace",
      tag: "SUNLIGHT REFLECTION",
    },
    {
      title: "PRODUCT SPEC AD",
      industry: "COMMERCIAL PRODUCTION",
      videoUrl: "/videos/demo-product-commercial.mp4",
      slug: "elan-parfums-liquid-gold",
      tag: "STUDIO 9:16",
    },
    {
      title: "VIRAL HOOK AD",
      industry: "DIRECT RESPONSE",
      videoUrl: "/videos/demo-ad-0913.mp4",
      slug: "velvet-noir-confectionery",
      tag: "HIGH CONVERSION",
    },
    {
      title: "BRAND SHOWCASE",
      industry: "SOCIAL ADS",
      videoUrl: "/videos/demo-ad-0913-1.mp4",
      slug: "apex-kinetic-sportswear",
      tag: "UGC PERFORMANCE",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-[#FAF9F7] overflow-hidden border-b border-neutral-200">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <h2 className="text-xs font-mono tracking-widest uppercase text-neutral-600 font-semibold">
            CINEMATIC PORTFOLIO STREAM // 9:16 VERTICAL COMMERCIAL ADS
          </h2>
        </div>
        <span className="text-[11px] font-mono text-neutral-500 uppercase hidden sm:inline-block">
          HOVER TO EXPAND • CLICK TO WATCH FULL AD
        </span>
      </div>

      {/* Infinite Horizontal Stream */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex space-x-6 animate-marquee hover:[animation-play-state:paused] py-4 px-4 will-change-transform">
          {/* Double array for seamless loop */}
          {[...wallItems, ...wallItems].map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              onClick={() => setSelectedVideo(item)}
              data-cursor="PLAY"
              className="group relative flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-[9/16] bg-neutral-900 rounded-[1.8rem] sm:rounded-[2rem] border border-neutral-300/80 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl shadow-md cursor-pointer select-none"
            >
              {/* Video Player (Autoplay Muted Loop with Instant Poster) */}
              <video
                src={item.videoUrl}
                poster={item.videoUrl.replace(/\.mp4$/i, ".jpg")}
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                // @ts-ignore
                webkit-playsinline="true"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag on top right */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-mono font-bold text-neutral-900 uppercase shadow-sm">
                {item.tag}
              </div>

              {/* Center Play Icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 fill-black translate-x-0.5" />
                </div>
              </div>

              {/* Hover Metadata on Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase mb-1">
                  {item.industry}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-serif text-white tracking-tight font-normal">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                    <Play className="w-3.5 h-3.5 fill-black translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Full Video Modal */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={`${selectedVideo.title} // 9:16 VERTICAL COMMERCIAL AD`}
        >
          <div className="flex flex-col items-center justify-center p-4 bg-neutral-950">
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
              <VideoPlayer
                src={selectedVideo.videoUrl}
                autoPlay={true}
                loop={true}
                aspectRatio="9:16"
                title={selectedVideo.title}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between w-full max-w-md gap-4 border-t border-neutral-800 pt-4">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  {selectedVideo.industry}
                </span>
                <h4 className="text-xl font-serif text-white">
                  {selectedVideo.title}
                </h4>
              </div>

              <Link
                href="/#contact"
                onClick={() => setSelectedVideo(null)}
                className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-md flex items-center gap-2"
              >
                <span>COMMISSION THIS STYLE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
