"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project, Inquiry } from "@/lib/data";
import {
  Plus,
  Search,
  Eye,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  Star,
  LogOut,
  Mail,
  Video,
  Layers,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"projects" | "inquiries">("projects");
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Check auth
      const authRes = await fetch("/api/auth");
      const authData = await authRes.json();
      if (!authData.authenticated) {
        router.push("/admin/login");
        return;
      }

      const [projRes, inqRes] = await Promise.all([
        fetch("/api/projects", { cache: "no-store" }),
        fetch("/api/inquiries", { cache: "no-store" }),
      ]);

      if (projRes.ok) {
        const projData = await projRes.json();
        setProjects(projData);
      }
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const togglePublish = async (project: Project) => {
    const newStatus = project.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setProjects(
          projects.map((p) => (p.id === project.id ? { ...p, status: newStatus } : p))
        );
      }
    } catch (e) {
      alert("Failed to update status");
    }
  };

  const toggleFeatured = async (project: Project) => {
    const newFeatured = !project.featured;
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: newFeatured }),
      });
      if (res.ok) {
        setProjects(
          projects.map((p) =>
            p.id === project.id ? { ...p, featured: newFeatured } : p
          )
        );
      }
    } catch (e) {
      alert("Failed to update featured flag");
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete project");
      }
    } catch (e) {
      alert("Error deleting project");
    }
  };

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "featured"
        ? p.featured
        : p.status === statusFilter;

    const matchesIndustry =
      industryFilter === "all" ? true : p.industry === industryFilter;

    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const totalProjects = projects.length;
  const publishedCount = projects.filter((p) => p.status === "published").length;
  const draftCount = projects.filter((p) => p.status === "draft").length;
  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-accent uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>STUDIO CONTROL PLANE // 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
              ADMIN DASHBOARD
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>ADD NEW PROJECT</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-surface border border-border text-xs font-mono uppercase text-neutral-300 hover:text-white hover:border-white transition-colors"
            >
              <span>VIEW SITE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="p-2.5 bg-surface border border-border text-neutral-400 hover:text-red-400 hover:border-red-400/50 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="p-6 bg-surface border border-border space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              TOTAL CAMPAIGNS
            </span>
            <div className="text-3xl font-display font-extrabold text-white">
              {totalProjects}
            </div>
          </div>

          <div className="p-6 bg-surface border border-border space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              PUBLISHED LIVE
            </span>
            <div className="text-3xl font-display font-extrabold text-white">
              {publishedCount}
            </div>
          </div>

          <div className="p-6 bg-surface border border-border space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              FEATURED HERO
            </span>
            <div className="text-3xl font-display font-extrabold text-accent">
              {featuredCount}
            </div>
          </div>

          <div className="p-6 bg-surface border border-border space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              CLIENT INQUIRIES
            </span>
            <div className="text-3xl font-display font-extrabold text-white">
              {inquiries.length}
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center space-x-3 border-b border-border">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-4 text-xs font-mono uppercase tracking-widest border-b-2 transition-all ${
              activeTab === "projects"
                ? "border-accent text-accent font-bold"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            PORTFOLIO CAMPAIGNS ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`pb-4 text-xs font-mono uppercase tracking-widest border-b-2 transition-all ${
              activeTab === "inquiries"
                ? "border-accent text-accent font-bold"
                : "border-transparent text-neutral-400 hover:text-white"
            }`}
          >
            CLIENT INQUIRIES ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: PROJECTS MANAGEMENT */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-surface border border-border">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search project or brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-secondary border border-border text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-secondary border border-border text-xs text-neutral-300 font-mono focus:outline-none"
                >
                  <option value="all">STATUS: ALL</option>
                  <option value="published">PUBLISHED ONLY</option>
                  <option value="draft">DRAFTS ONLY</option>
                  <option value="featured">FEATURED ONLY</option>
                </select>

                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="px-3 py-2 bg-secondary border border-border text-xs text-neutral-300 font-mono focus:outline-none"
                >
                  <option value="all">INDUSTRY: ALL</option>
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
            </div>

            {/* Projects Table */}
            <div className="bg-surface border border-border overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-secondary font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    <th className="p-4">MEDIA</th>
                    <th className="p-4">PROJECT & TAGLINE</th>
                    <th className="p-4">INDUSTRY / SERVICE</th>
                    <th className="p-4">ASPECT</th>
                    <th className="p-4">STATUS</th>
                    <th className="p-4">FEATURED</th>
                    <th className="p-4 text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-neutral-500 font-mono">
                        No projects found matching the criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map((project) => (
                      <tr
                        key={project.id}
                        className="hover:bg-secondary/60 transition-colors"
                      >
                        {/* Thumbnail / Video */}
                        <td className="p-4">
                          <div className="w-16 h-12 bg-black border border-border overflow-hidden relative">
                            <video
                              src={project.videoUrl}
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>

                        {/* Title */}
                        <td className="p-4 space-y-1">
                          <div className="font-display font-bold uppercase text-white text-sm">
                            {project.title}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-400 truncate max-w-xs">
                            {project.client}
                          </div>
                        </td>

                        {/* Industry */}
                        <td className="p-4 space-y-1">
                          <div className="text-white font-mono text-[11px]">
                            {project.industry}
                          </div>
                          <div className="text-neutral-500 text-[10px]">
                            {project.service}
                          </div>
                        </td>

                        {/* Aspect */}
                        <td className="p-4 font-mono text-accent">
                          {project.format}
                        </td>

                        {/* Status Toggle */}
                        <td className="p-4">
                          <button
                            onClick={() => togglePublish(project)}
                            className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border transition-colors ${
                              project.status === "published"
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                                : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-700"
                            }`}
                          >
                            {project.status}
                          </button>
                        </td>

                        {/* Featured Toggle */}
                        <td className="p-4">
                          <button
                            onClick={() => toggleFeatured(project)}
                            className="p-1 text-neutral-400 hover:text-accent transition-colors"
                            title={project.featured ? "Featured on homepage" : "Set as featured"}
                          >
                            <Star
                              className={`w-4 h-4 ${
                                project.featured
                                  ? "fill-accent text-accent"
                                  : "text-neutral-600"
                              }`}
                            />
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Link
                              href={`/work/${project.slug}`}
                              target="_blank"
                              className="p-1.5 bg-secondary border border-border text-neutral-400 hover:text-white transition-colors"
                              title="View Case Study"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                              href={`/admin/edit/${project.id}`}
                              className="p-1.5 bg-secondary border border-border text-neutral-400 hover:text-accent transition-colors"
                              title="Edit Project"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </Link>

                            <button
                              onClick={() => handleDelete(project.id, project.title)}
                              className="p-1.5 bg-secondary border border-border text-neutral-400 hover:text-red-400 hover:border-red-400/40 transition-colors"
                              title="Delete Project"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: INQUIRIES MANAGEMENT */}
        {activeTab === "inquiries" && (
          <div className="bg-surface border border-border overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-border bg-secondary font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  <th className="p-4">DATE</th>
                  <th className="p-4">CLIENT NAME</th>
                  <th className="p-4">EMAIL</th>
                  <th className="p-4">BRAND & PRODUCT</th>
                  <th className="p-4">SERVICE & BUDGET</th>
                  <th className="p-4">MESSAGE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-neutral-500 font-mono">
                      No client inquiries recorded yet.
                    </td>
                  </tr>
                ) : (
                  inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-secondary/60 transition-colors">
                      <td className="p-4 font-mono text-[11px] text-neutral-400">
                        {new Date(inq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 font-display font-bold text-white uppercase">
                        {inq.name}
                      </td>
                      <td className="p-4 font-mono text-neutral-300">
                        <a
                          href={`mailto:${inq.email}`}
                          className="hover:text-accent underline transition-colors"
                        >
                          {inq.email}
                        </a>
                      </td>
                      <td className="p-4 space-y-1">
                        <div className="font-bold text-white">{inq.brand}</div>
                        <div className="text-[11px] text-neutral-400">{inq.product}</div>
                      </td>
                      <td className="p-4 space-y-1">
                        <div className="text-accent font-mono text-[11px]">{inq.serviceNeeded}</div>
                        <div className="text-[10px] text-neutral-500 font-mono">{inq.budgetRange}</div>
                      </td>
                      <td className="p-4 text-neutral-300 text-xs max-w-sm">
                        {inq.message || "—"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
