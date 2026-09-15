"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface BeforeAfterProps {
  rawProductImg: string;
  aiConceptImg: string;
  finalAdVideo: string;
  title?: string;
}

export default function BeforeAfterSlider({
  rawProductImg,
  aiConceptImg,
  finalAdVideo,
  title = "CREATIVE TRANSFORMATION ENGINE",
}: BeforeAfterProps) {
  const [activeStage, setActiveStage] = useState<"product" | "concept" | "commercial">("commercial");

  const stages = [
    {
      id: "product",
      label: "01 PRODUCT INPUT",
      sub: "Original packshot / CAD / sample",
      desc: "Raw asset provided by brand. Neutral lighting, isolated background, no campaign context.",
    },
    {
      id: "concept",
      label: "02 AI CONCEPT",
      sub: "Keyframe & art direction",
      desc: "Bespoke visual world engineered around product psychology, lighting, and dramatic mood.",
    },
    {
      id: "commercial",
      label: "03 FINAL COMMERCIAL",
      sub: "Sound-synced video master",
      desc: "Full generative video diffusion with fluid dynamics, cinematic camera motion, and conversion pacing.",
    },
  ];

  return (
    <div className="w-full bg-secondary border border-border p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <span className="text-[11px] font-mono text-accent uppercase tracking-widest block mb-1">
            // TRANSFORMATION ARCHITECTURE
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white">
            {title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          {stages.map((st) => (
            <button
              key={st.id}
              onClick={() => setActiveStage(st.id as any)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                activeStage === st.id
                  ? "bg-white text-black border-white font-bold"
                  : "bg-surface border-border text-neutral-400 hover:text-white"
              }`}
            >
              {st.label.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Stage Display */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-black overflow-hidden border border-border">
        {activeStage === "product" && (
          <div className="relative w-full h-full flex items-center justify-center bg-neutral-950">
            <img
              src={rawProductImg}
              alt="Raw Product Input"
              className="w-full h-full object-contain p-8 md:p-12 filter brightness-95 contrast-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 border border-border text-xs font-mono text-neutral-300">
              STAGE 01: RAW PRODUCT PACKSHOT
            </div>
          </div>
        )}

        {activeStage === "concept" && (
          <div className="relative w-full h-full flex items-center justify-center bg-neutral-950">
            <img
              src={aiConceptImg}
              alt="AI Keyframe Concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 border border-border text-xs font-mono text-accent">
              STAGE 02: GENERATIVE ART DIRECTION & KEYFRAME
            </div>
          </div>
        )}

        {activeStage === "commercial" && (
          <div className="relative w-full h-full">
            <video
              src={finalAdVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 border border-accent/40 text-xs font-mono text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>STAGE 03: FINAL CAMPAIGN VIDEO MASTER</span>
            </div>
          </div>
        )}
      </div>

      {/* 3 Step Interactive Progress Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {stages.map((stage) => {
          const isSelected = activeStage === stage.id;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(stage.id as any)}
              className={`cursor-pointer p-5 border transition-all duration-200 ${
                isSelected
                  ? "bg-surface border-white text-white"
                  : "bg-surface/50 border-border text-neutral-400 hover:border-neutral-600"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono ${isSelected ? "text-accent font-bold" : "text-neutral-500"}`}>
                  {stage.label}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-accent" />}
              </div>
              <h4 className="text-sm font-display font-bold text-white mb-1">
                {stage.sub}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                {stage.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
