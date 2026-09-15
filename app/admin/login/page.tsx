"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { STUDIO_CONFIG } from "@/lib/config";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Invalid credentials");
      }
    } catch (err: any) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6 py-20 relative">
      <div className="w-full max-w-md bg-surface border border-border p-8 md:p-10 space-y-8 shadow-2xl relative">
        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto text-accent">
            <Lock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
            STUDIO CONTROL PLANE
          </span>
          <h1 className="text-2xl font-display font-extrabold uppercase text-white tracking-tight">
            ADMIN PORTAL
          </h1>
          <p className="text-xs text-neutral-400 font-body">
            Enter master studio access key to manage projects and leads.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-neutral-400 block">
              ACCESS KEY
            </label>
            <input
              type="password"
              required
              autoFocus
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-secondary border border-border text-white text-sm font-mono focus:outline-none focus:border-white transition-colors"
            />
            <span className="text-[10px] font-mono text-neutral-500 block">
              DEFAULT KEY: <code className="text-accent">{STUDIO_CONFIG.adminDefaultPass}</code>
            </span>
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-white text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>VERIFYING ACCESS...</span>
            ) : (
              <>
                <span>ENTER DASHBOARD</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-border text-center">
          <Link
            href="/"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            ← RETURN TO WEBSITE
          </Link>
        </div>
      </div>
    </div>
  );
}
