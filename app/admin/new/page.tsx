"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Video, Image as ImageIcon, Plus, Trash2, CheckCircle2, Film } from "lucide-react";
import { Project, Scene } from "@/lib/data";

const STUDIO_LIBRARY_VIDEOS = [
  { name: "Perfume Liquid Gold (9:16)", url: "/videos/perfume-liquid-gold.mp4", industry: "LUXURY", aspect: "9:16" },
  { name: "Velvet Noir Confectionery (16:9)", url: "/videos/chocolate-velvet.mp4", industry: "FOOD", aspect: "16:9" },
  { name: "Biomechanical Fitness (9:16)", url: "/videos/fitness-apex.mp4", industry: "FITNESS", aspect: "9:16" },
  { name: "Athletic Training (9:16)", url: "/videos/athletic-training.mp4", industry: "FITNESS", aspect: "9:16" },
  { name: "Hyperlight Running Shoe (9:16)", url: "/videos/shoe-hyperlight.mp4", industry: "SHOES", aspect: "9:16" },
  { name: "Obsidian Tourbillon Watch (16:9)", url: "/videos/watch-chronos.mp4", industry: "WATCHES", aspect: "16:9" },
  { name: "Botanical Cellular Skincare (9:16)", url: "/videos/skincare-lumina.mp4", industry: "SKINCARE", aspect: "9:16" },
  { name: "Editorial Lifestyle (9:16)", url: "/videos/editorial-lifestyle.mp4", industry: "FASHION", aspect: "9:16" },
];

export default function AddProjectPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [videoStatus, setVideoStatus] = useState<string>("");
  const [uploadingThumb, setUploadingThumb] = useState(false);

  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    slug: "",
    tagline: "",
    client: "SPEC CREATIVE",
    isSpec: true,
    industry: "LUXURY",
    category: "Commercial Campaign",
    service: "AI Video Ads",
    year: "2026",
    format: "9:16",
    creativeAngle: "Product Emergence + Cinematic Physics",
    videoUrl: "/videos/perfume-liquid-gold.mp4",
    thumbnailUrl: "/images/product-hero-perfume.jpg",
    featured: false,
    status: "published",
    overview: "",
    theIdea: "",
    theApproach: {
      visualDirection: "Editorial noir with dramatic rim light and reflective fluid dynamics.",
      background: "Minimal obsidian void with ripples radiating outward.",
      lighting: "Chiaroscuro high-contrast key with liquid rim reflections.",
      character: "Solo ethereal talent revealed in macro silhouette.",
      productStyling: "Prismatic flacon with laser-sharp typography retention.",
      cameraMovement: "Slow orbital rise transitioning to macro push-in.",
      storytelling: "From raw fluid state into structural luxury artifact.",
    },
    theResult: "Commercial-grade video master engineered for high retention and conversion.",
    creativeBreakdown: [
      { step: "01", title: "ORIGINAL PRODUCT", description: "Studio bottle CAD render and packshot." },
      { step: "02", title: "CREATIVE CONCEPT", description: "Visual moodboards highlighting materials and lighting." },
      { step: "03", title: "AI KEYFRAME GENERATION", description: "Prompt-engineered photorealistic keyframes." },
      { step: "04", title: "AI MOTION SYNTHESIS", description: "Generative video diffusion controlling camera orbital path." },
      { step: "05", title: "FINAL COMMERCIAL MASTER", description: "Editorial color grading and typographic lockup." },
    ],
    scenes: [
      {
        sceneNumber: "01",
        title: "Product Hook",
        duration: "0.0s - 1.5s",
        camera: "Macro downward tilt",
        purpose: "Immediate 3-second hook arresting scroll velocity",
        description: "Product emerges in dramatic lighting.",
        thumbnailUrl: "/images/scenes/perfume-scene-01.jpg",
      },
    ],
  });

  const handleTitleChange = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setFormData({ ...formData, title, slug });
  };

  // Video file upload using XMLHttpRequest with real-time percentage
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadProgress(0);
    setVideoStatus("Starting upload...");

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
        setVideoStatus(`Uploading ${percent}%...`);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          setFormData((prev) => ({ ...prev, videoUrl: data.url }));
          setVideoStatus("Uploaded & Ready ✓");
          setUploadProgress(100);
        } catch (e) {
          setVideoStatus("Error processing server response");
        }
      } else {
        alert("Upload failed with status " + xhr.status);
        setVideoStatus("Upload failed");
      }
    };

    xhr.onerror = () => {
      alert("Network error during upload");
      setVideoStatus("Upload error");
      setUploadProgress(null);
    };

    xhr.send(uploadFormData);
  };

  const handleThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingThumb(true);
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: uploadFormData });
      const data = await res.json();
      if (res.ok) {
        setFormData((prev) => ({ ...prev, thumbnailUrl: data.url }));
      }
    } catch (err) {
      alert("Error uploading thumbnail");
    } finally {
      setUploadingThumb(false);
    }
  };

  const handleSelectLibraryVideo = (v: typeof STUDIO_LIBRARY_VIDEOS[0]) => {
    setFormData((prev) => ({
      ...prev,
      videoUrl: v.url,
      industry: v.industry as any,
      format: v.aspect as any,
    }));
    setVideoStatus(`Selected from Studio: ${v.name} ✓`);
  };

  const handleAddScene = () => {
    const nextNum = (formData.scenes?.length || 0) + 1;
    const newScene: Scene = {
      sceneNumber: `0${nextNum}`,
      title: `Scene 0${nextNum}`,
      duration: "0.0s - 2.0s",
      camera: "Macro tracking",
      purpose: "Narrative pacing",
      description: "Product craftsmanship focus.",
      thumbnailUrl: formData.thumbnailUrl || "/images/product-hero-perfume.jpg",
    };
    setFormData({
      ...formData,
      scenes: [...(formData.scenes || []), newScene],
    });
  };

  const handleRemoveScene = (index: number) => {
    const scenes = [...(formData.scenes || [])];
    scenes.splice(index, 1);
    setFormData({ ...formData, scenes });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.slug) {
      alert("Please enter a Project Title.");
      return;
    }

    if (!formData.videoUrl) {
      alert("Please provide or upload a Video for this ad.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to create project");
      }
    } catch (err) {
      alert("Error saving project");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-10">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div className="space-y-1">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO DASHBOARD</span>
            </Link>
            <h1 className="text-3xl font-display font-extrabold uppercase text-white tracking-tight">
              CREATE NEW CAMPAIGN
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* SECTION 1: VIDEO MASTER SELECTION & UPLOAD */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h2 className="text-base font-display font-bold uppercase text-accent">
                01. VIDEO AD MASTER & ASSETS
              </h2>
              {videoStatus && (
                <span className="text-xs font-mono text-accent">{videoStatus}</span>
              )}
            </div>

            {/* Quick Studio Library Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                OPTION A: CHOOSE FROM EXISTING STUDIO REELS (1-CLICK)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {STUDIO_LIBRARY_VIDEOS.map((v) => (
                  <button
                    type="button"
                    key={v.name}
                    onClick={() => handleSelectLibraryVideo(v)}
                    className={`p-2.5 text-left border text-xs font-mono transition-all ${
                      formData.videoUrl === v.url
                        ? "bg-accent/15 border-accent text-white font-bold"
                        : "bg-secondary border-border text-neutral-400 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] text-accent mb-1">
                      <Film className="w-3 h-3" />
                      <span>{v.aspect}</span>
                    </div>
                    <div className="truncate">{v.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload or Direct URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {/* Video Upload Dropzone */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  OPTION B: UPLOAD NEW VIDEO AD (MP4 / WEBM / MOV)
                </label>

                <div className="relative border border-dashed border-border p-6 text-center space-y-2 bg-secondary/50 hover:border-accent/60 transition-colors">
                  <input
                    type="file"
                    accept="video/*,.mp4,.webm,.mov"
                    onChange={handleVideoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Video className="w-8 h-8 text-neutral-500 mx-auto" />
                  <div className="text-xs text-neutral-300 font-mono">
                    CLICK OR DROP VIDEO FILE
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    Uploads directly to server media storage
                  </span>
                </div>

                {uploadProgress !== null && (
                  <div className="space-y-1">
                    <div className="w-full bg-secondary h-2 border border-border overflow-hidden">
                      <div
                        className="bg-accent h-full transition-all duration-150"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 flex justify-between">
                      <span>{videoStatus}</span>
                      <span>{uploadProgress}%</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                    OR VIDEO URL / PATH:
                  </label>
                  <input
                    type="text"
                    placeholder="/videos/your-video.mp4"
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    className="w-full px-3 py-2 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                  />
                </div>

                {formData.videoUrl && (
                  <div className="relative aspect-video bg-black border border-border overflow-hidden mt-3">
                    <video
                      key={formData.videoUrl}
                      src={formData.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Thumbnail */}
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  CAMPAIGN POSTER / THUMBNAIL
                </label>

                <div className="relative border border-dashed border-border p-6 text-center space-y-2 bg-secondary/50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <ImageIcon className="w-8 h-8 text-neutral-500 mx-auto" />
                  <div className="text-xs text-neutral-300 font-mono">
                    {uploadingThumb ? "Uploading thumbnail..." : "CLICK OR DROP THUMBNAIL"}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                    OR THUMBNAIL URL / PATH:
                  </label>
                  <input
                    type="text"
                    placeholder="/images/your-thumb.jpg"
                    value={formData.thumbnailUrl}
                    onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                    className="w-full px-3 py-2 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                  />
                </div>

                {formData.thumbnailUrl && (
                  <div className="relative aspect-video bg-black border border-border overflow-hidden mt-3">
                    <img
                      src={formData.thumbnailUrl}
                      alt="Thumbnail preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 2: METADATA */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              02. CAMPAIGN METADATA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  PROJECT TITLE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LUXURY CHRONOGRAPH"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-sm font-display font-bold focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  URL SLUG *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. luxury-chronograph"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                HEADLINE / TAGLINE
              </label>
              <input
                type="text"
                placeholder="e.g. Aerodynamic cushioning campaign built for marathon runners."
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none focus:border-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  CLIENT / BRAND
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maison Du Luxe"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none focus:border-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  WORK CLASSIFICATION
                </label>
                <label className="flex items-center gap-3 p-3 bg-secondary border border-border cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isSpec}
                    onChange={(e) => setFormData({ ...formData, isSpec: e.target.checked })}
                    className="accent-accent w-4 h-4"
                  />
                  <span className="text-xs font-mono text-neutral-300">
                    LABEL AS SPEC CREATIVE
                  </span>
                </label>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  YEAR
                </label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  INDUSTRY
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value as any })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                >
                  <option value="JEWELLERY">JEWELLERY</option>
                  <option value="FASHION">FASHION</option>
                  <option value="SHOES">SHOES</option>
                  <option value="FITNESS">FITNESS</option>
                  <option value="BEAUTY">BEAUTY</option>
                  <option value="SKINCARE">SKINCARE</option>
                  <option value="WATCHES">WATCHES</option>
                  <option value="FOOD">FOOD</option>
                  <option value="TECH">TECH</option>
                  <option value="LUXURY">LUXURY</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  SERVICE TYPE
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                >
                  <option value="AI Video Ads">AI Video Ads</option>
                  <option value="AI Product Visuals">AI Product Visuals</option>
                  <option value="Social Media Ads">Social Media Ads</option>
                  <option value="Product Commercials">Product Commercials</option>
                  <option value="AI Creative Direction">AI Creative Direction</option>
                  <option value="Campaign Creative">Campaign Creative</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  ASPECT RATIO
                </label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value as any })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                >
                  <option value="9:16">9:16 (Vertical Story / Reel)</option>
                  <option value="16:9">16:9 (Landscape Commercial)</option>
                  <option value="4:5">4:5 (Feed Placement)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 3: CREATIVE STRATEGY & THE IDEA */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              03. DIRECTORIAL STORY & LIGHTING
            </h2>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                THE IDEA (CREATIVE CONCEPT)
              </label>
              <textarea
                rows={3}
                placeholder="Explain the emotional hook and visual metaphor..."
                value={formData.theIdea}
                onChange={(e) => setFormData({ ...formData, theIdea: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">
                  LIGHTING
                </label>
                <input
                  type="text"
                  value={formData.theApproach?.lighting || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      theApproach: { ...formData.theApproach!, lighting: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-secondary border border-border text-white text-xs focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-neutral-400">
                  CAMERA MOVEMENT
                </label>
                <input
                  type="text"
                  value={formData.theApproach?.cameraMovement || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      theApproach: { ...formData.theApproach!, cameraMovement: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 bg-secondary border border-border text-white text-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                THE RESULT
              </label>
              <textarea
                rows={2}
                value={formData.theResult}
                onChange={(e) => setFormData({ ...formData, theResult: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none"
              />
            </div>
          </div>

          {/* SECTION 4: PUBLISHING */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              04. PUBLISHING & VISIBILITY
            </h2>

            <div className="flex flex-wrap items-center gap-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.status === "published"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.checked ? "published" : "draft",
                    })
                  }
                  className="accent-accent w-4 h-4"
                />
                <span className="text-xs font-mono uppercase text-white">
                  PUBLISH IMMEDIATELY
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="accent-accent w-4 h-4"
                />
                <span className="text-xs font-mono uppercase text-accent">
                  FEATURE AS HERO CAMPAIGN
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-border">
            <Link
              href="/admin"
              className="px-6 py-3 bg-surface border border-border text-neutral-400 hover:text-white text-xs font-mono uppercase transition-colors"
            >
              CANCEL
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3.5 bg-accent text-black font-display font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              {submitting ? "SAVING CAMPAIGN..." : "PUBLISH TO PORTFOLIO →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
