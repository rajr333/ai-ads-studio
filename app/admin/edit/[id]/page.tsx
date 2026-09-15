"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Video, Image as ImageIcon, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { Project, Scene } from "@/lib/data";

interface EditProjectProps {
  params: {
    id: string;
  };
}

export default function EditProjectPage({ params }: EditProjectProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [videoStatus, setVideoStatus] = useState<string>("");
  const [formData, setFormData] = useState<Project | null>(null);

  useEffect(() => {
    fetchProject();
  }, [params.id]);

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/projects/${params.id}`);
      if (!res.ok) {
        alert("Project not found");
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setFormData(data);
    } catch (e) {
      alert("Error loading project");
    } finally {
      setLoading(false);
    }
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !formData) return;

    setUploadingVideo(true);
    setVideoStatus("Uploading...");

    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      setVideoStatus("Processing...");
      const res = await fetch("/api/upload", { method: "POST", body: uploadFormData });
      const data = await res.json();
      if (res.ok) {
        setFormData({ ...formData, videoUrl: data.url });
        setVideoStatus("Ready ✓");
      }
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleThumbUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !formData) return;

    setUploadingThumb(true);
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: uploadFormData });
      const data = await res.json();
      if (res.ok) {
        setFormData({ ...formData, thumbnailUrl: data.url });
      }
    } catch (err) {
      alert("Error uploading thumbnail");
    } finally {
      setUploadingThumb(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/projects/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        alert("Failed to update project");
      }
    } catch (err) {
      alert("Error updating project");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || !formData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-xs font-mono text-neutral-400">
        LOADING CAMPAIGN DETAILS...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-10">
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
              EDIT: {formData.title}
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href={`/work/${formData.slug}`}
              target="_blank"
              className="px-4 py-2 bg-surface border border-border text-xs font-mono uppercase text-neutral-300 hover:text-white"
            >
              PREVIEW LIVE
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* SECTION 1: METADATA */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              01. CAMPAIGN METADATA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  PROJECT TITLE
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-sm font-display font-bold focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  URL SLUG
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                HEADLINE / TAGLINE
              </label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  CLIENT / BRAND
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-body focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  CLASSIFICATION
                </label>
                <label className="flex items-center gap-3 p-3 bg-secondary border border-border cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isSpec}
                    onChange={(e) => setFormData({ ...formData, isSpec: e.target.checked })}
                    className="accent-accent w-4 h-4"
                  />
                  <span className="text-xs font-mono text-neutral-300">
                    SPEC CREATIVE
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
                  className="w-full px-4 py-3 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
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
                  SERVICE
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
                  <option value="9:16">9:16 (Vertical)</option>
                  <option value="16:9">16:9 (Landscape)</option>
                  <option value="4:5">4:5 (Feed)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2: MEDIA REPLACEMENT */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              02. VIDEO & THUMBNAIL ASSETS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  VIDEO SOURCE
                </label>
                <input
                  type="text"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                />

                <div className="relative border border-dashed border-border p-4 text-center bg-secondary/50">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="text-xs text-neutral-300 font-mono">
                    {uploadingVideo ? videoStatus : "REPLACE VIDEO FILE"}
                  </div>
                </div>

                <div className="relative aspect-video bg-black border border-border overflow-hidden">
                  <video key={formData.videoUrl} src={formData.videoUrl} controls autoPlay muted playsInline className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono uppercase text-neutral-400 block">
                  THUMBNAIL IMAGE
                </label>
                <input
                  type="text"
                  value={formData.thumbnailUrl}
                  onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                  className="w-full px-4 py-2 bg-secondary border border-border text-white text-xs font-mono focus:outline-none"
                />

                <div className="relative border border-dashed border-border p-4 text-center bg-secondary/50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="text-xs text-neutral-300 font-mono">
                    {uploadingThumb ? "Uploading..." : "REPLACE THUMBNAIL FILE"}
                  </div>
                </div>

                <div className="relative aspect-video bg-black border border-border overflow-hidden">
                  <img src={formData.thumbnailUrl} alt="Thumb" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: CREATIVE STRATEGY */}
          <div className="p-8 bg-surface border border-border space-y-6">
            <h2 className="text-base font-display font-bold uppercase text-accent border-b border-border pb-3">
              03. DIRECTORIAL STORY & APPROACH
            </h2>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 block">
                THE IDEA
              </label>
              <textarea
                rows={3}
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

          {/* SECTION 4: PUBLISHING STATE */}
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
                  PUBLISHED LIVE
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
                  FEATURED HERO CAMPAIGN
                </span>
              </label>
            </div>
          </div>

          {/* Save & Cancel Actions */}
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
              {submitting ? "UPDATING CAMPAIGN..." : "SAVE CHANGES →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
