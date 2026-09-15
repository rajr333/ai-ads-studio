import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/lib/storage";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Badge from "@/components/ui/Badge";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import {
  ArrowLeft,
  ArrowUpRight,
  Sun,
  Camera,
  Layers,
  Eye,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const nextProject =
    allProjects.find((p) => p.id !== project.id && p.status === "published") || allProjects[0];

  const approach = project.theApproach || {
    lighting: "High-contrast chiaroscuro key with liquid edge reflections.",
    cameraMovement: "Slow cinematic orbital tracking transitioning to macro detail.",
    background: "Deep obsidian architectural set with subtle reflections.",
    productStyling: "Pristine product geometry with razor-sharp branding.",
    storytelling: "From raw material tension to triumphant commercial finish.",
    visualDirection: "Editorial commercial noir with dramatic rim light.",
    character: "Solo dynamic talent interacting with hero product.",
  };

  const breakdowns = project.creativeBreakdown || [];
  const scenes = project.scenes || [];

  return (
    <article className="min-h-screen bg-background text-white pt-24 pb-32">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL WORK</span>
        </Link>
      </div>

      {/* ================= PROJECT HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-16 space-y-6">
        {/* Title and Tagline */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.isSpec && <Badge variant="spec">SPEC CREATIVE</Badge>}
            <Badge variant="format">{project.format || "9:16"}</Badge>
            <Badge variant="outline">{project.industry || "LUXURY"}</Badge>
            <Badge variant="outline">{project.year || "2026"}</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tightest leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-body max-w-3xl leading-relaxed">
            {project.tagline || project.overview}
          </p>
        </div>

        {/* Hero Video Master */}
        <div className="w-full pt-4">
          <VideoPlayer
            src={project.videoUrl}
            aspectRatio={project.format === "9:16" ? "9:16" : "16:9"}
            autoPlay={true}
            loop={true}
            title={`${project.title} // ${project.service}`}
          />
        </div>
      </section>

      {/* ================= PROJECT SPECS & METADATA ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8 bg-surface border border-border">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              CLIENT / BRAND
            </span>
            <span className="text-xs font-display font-bold text-white uppercase block truncate">
              {project.client}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              INDUSTRY
            </span>
            <span className="text-xs font-display font-bold text-white uppercase block">
              {project.industry}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              SERVICE
            </span>
            <span className="text-xs font-display font-bold text-white uppercase block">
              {project.service}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              ASPECT RATIO
            </span>
            <span className="text-xs font-mono font-bold text-accent uppercase block">
              {project.format}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              CREATIVE DIRECTION
            </span>
            <span className="text-xs font-display font-bold text-white uppercase block truncate">
              {project.category}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              YEAR
            </span>
            <span className="text-xs font-mono text-white block">
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* ================= PROJECT DESCRIPTION: IDEA, APPROACH, RESULT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* THE IDEA */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // 01 THE CONCEPT
            </span>
            <h2 className="text-2xl font-display font-bold uppercase text-white tracking-tight">
              THE IDEA
            </h2>
            <p className="text-sm text-neutral-300 font-body leading-relaxed">
              {project.theIdea || "Engineered to deliver high visual friction and prestige brand positioning in mobile feeds."}
            </p>
          </div>

          {/* THE APPROACH */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // 02 DIRECTORIAL APPROACH
            </span>
            <h2 className="text-2xl font-display font-bold uppercase text-white tracking-tight">
              ART DIRECTION & CINEMATOGRAPHY
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-secondary border border-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                  <Sun className="w-3.5 h-3.5 text-accent" />
                  <span>LIGHTING & MOOD</span>
                </div>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {approach.lighting}
                </p>
              </div>

              <div className="p-5 bg-secondary border border-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                  <Camera className="w-3.5 h-3.5 text-accent" />
                  <span>CAMERA MOVEMENT</span>
                </div>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {approach.cameraMovement}
                </p>
              </div>

              <div className="p-5 bg-secondary border border-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                  <Layers className="w-3.5 h-3.5 text-accent" />
                  <span>ENVIRONMENT & BACKGROUND</span>
                </div>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {approach.background}
                </p>
              </div>

              <div className="p-5 bg-secondary border border-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                  <Eye className="w-3.5 h-3.5 text-accent" />
                  <span>PRODUCT STYLING</span>
                </div>
                <p className="text-xs text-neutral-300 font-body leading-relaxed">
                  {approach.productStyling}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THE RESULT */}
        <div className="p-8 md:p-10 bg-surface border border-border space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // 03 CAMPAIGN DELIVERABLE
          </span>
          <h3 className="text-xl font-display font-bold uppercase text-white">
            THE RESULT
          </h3>
          <p className="text-sm text-neutral-300 font-body leading-relaxed max-w-4xl">
            {project.theResult || "A commercial-grade video master optimized for paid social conversion."}
          </p>
        </div>
      </section>

      {/* ================= CREATIVE BREAKDOWN ================= */}
      {breakdowns.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24 space-y-12">
          <div className="space-y-3 border-b border-border pb-6">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // 04 STEP-BY-STEP BREAKDOWN
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
              CREATIVE PIPELINE DECONSTRUCTION
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-body max-w-2xl">
              How we translate the physical product into generative cinematic frames and sound-synced video assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {breakdowns.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-surface border border-border space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-display font-extrabold text-neutral-600">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono text-accent uppercase">
                      STAGE
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold uppercase text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.assetUrl && (
                  <div className="mt-4 pt-4 border-t border-border overflow-hidden">
                    <img
                      src={item.assetUrl}
                      alt={item.title}
                      className="w-full aspect-video object-cover border border-border"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= BEFORE / AFTER CREATIVE PROCESS ================= */}
      {project.beforeAfter && project.beforeAfter.finalAdVideo && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24">
          <BeforeAfterSlider
            rawProductImg={project.beforeAfter.rawProductImg || project.thumbnailUrl}
            aiConceptImg={project.beforeAfter.aiConceptImg || project.thumbnailUrl}
            finalAdVideo={project.beforeAfter.finalAdVideo}
            title={`${project.title} // TRANSFORMATION ARCHITECTURE`}
          />
        </section>
      )}

      {/* ================= VIDEO SCENE BREAKDOWN ================= */}
      {scenes.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mb-24 space-y-12">
          <div className="space-y-3 border-b border-border pb-6">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // 05 DIRECTOR'S SHOT LIST
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
              SCENE-BY-SCENE ADVERTISING ARCHITECTURE
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-body max-w-2xl">
              Commercial pacing is calculated down to tenths of a second. Here is the anatomical breakdown of how each scene serves a distinct psychological purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenes.map((scene) => (
              <div
                key={scene.sceneNumber}
                className="bg-secondary border border-border overflow-hidden space-y-4 p-6"
              >
                {/* Scene thumbnail */}
                <div className="relative aspect-video w-full bg-black border border-border overflow-hidden">
                  <img
                    src={scene.thumbnailUrl || project.thumbnailUrl || "/images/product-hero-perfume.jpg"}
                    alt={scene.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-accent">
                    SCENE {scene.sceneNumber}
                  </div>
                  <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white">
                    {scene.duration}
                  </div>
                </div>

                {/* Scene info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold uppercase text-white">
                    {scene.title}
                  </h3>

                  <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                    <div>
                      <span className="text-neutral-500">CAMERA:</span> {scene.camera}
                    </div>
                    <div>
                      <span className="text-accent">PURPOSE:</span> {scene.purpose}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 font-body leading-relaxed pt-1">
                    {scene.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROJECT INQUIRY CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="p-10 md:p-16 bg-surface border border-border text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40" />

          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // LIKE THIS STYLE?
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase text-white tracking-tightest">
            LET'S CREATE YOUR AD.
          </h2>

          <p className="text-sm md:text-base text-neutral-300 font-body max-w-xl mx-auto leading-relaxed">
            Send us your product imagery or CAD files. We will structure 2–3 bespoke advertising angles built specifically for your target audience.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NEXT CASE STUDY ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 border-t border-border flex items-center justify-between">
        <Link
          href="/#work"
          className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider"
        >
          ← ALL CAMPAIGNS
        </Link>

        {nextProject && (
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="text-[10px] font-mono text-accent uppercase block">
                NEXT CAMPAIGN
              </span>
              <span className="text-base sm:text-xl font-display font-bold uppercase text-white group-hover:text-accent transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        )}
      </section>
    </article>
  );
}
