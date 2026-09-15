"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { STUDIO_CONFIG } from "@/lib/config";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    product: "",
    industry: "LUXURY",
    serviceNeeded: "AI Video Ads",
    budgetRange: "$3,000 - $5,000",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        brand: "",
        product: "",
        industry: "LUXURY",
        serviceNeeded: "AI Video Ads",
        budgetRange: "$3,000 - $5,000",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 bg-[#FAF9F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>06 INITIATE A PROJECT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-serif text-black leading-[1.05] tracking-tight font-normal">
                Let's Make Your <br />
                <span className="text-neutral-400 font-serif italic">Product Impossible</span> <br />
                to Ignore.
              </h2>
              <p className="text-neutral-600 text-sm md:text-base font-body max-w-md pt-2 leading-relaxed">
                Have a product that deserves better advertising? Fill out the brief below and we will get back to you within 24 hours with concept ideas and production timelines.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-neutral-200/80 space-y-5 shadow-sm">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-widest block">
                WHAT HAPPENS NEXT?
              </span>
              <ul className="space-y-4 text-xs text-neutral-600 font-body">
                <li className="flex items-start gap-3">
                  <span className="text-black font-mono font-bold">01.</span>
                  <span>We review your product and existing creative assets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-mono font-bold">02.</span>
                  <span>We provide 2–3 bespoke advertising angles & visual moodboards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-mono font-bold">03.</span>
                  <span>We begin production upon concept alignment.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-1 text-xs font-mono text-neutral-500">
              <div className="uppercase tracking-widest text-[10px]">DIRECT INQUIRIES:</div>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="text-black hover:underline transition-colors font-bold text-sm"
              >
                {STUDIO_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-neutral-200/80 p-8 md:p-12 relative shadow-xl">
            {status === "success" ? (
              <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-black">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto font-body">
                    Thank you. We have received your project details and will be in touch within 24 hours with creative concepts.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-md"
                >
                  SEND ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Brand */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      BRAND / COMPANY *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aethelgard Studio"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400"
                    />
                  </div>

                  {/* Product */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      PRODUCT TYPE / SKU *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Luxury Eau De Parfum"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Industry */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      INDUSTRY
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="JEWELLERY">Jewellery</option>
                      <option value="FASHION">Fashion & Apparel</option>
                      <option value="SHOES">Footwear & Sneakers</option>
                      <option value="FITNESS">Fitness & Sportswear</option>
                      <option value="BEAUTY">Beauty & Cosmetics</option>
                      <option value="SKINCARE">Skincare & Wellness</option>
                      <option value="WATCHES">Watches & Horlogerie</option>
                      <option value="FOOD">Food & Beverage</option>
                      <option value="TECH">Consumer Tech & Audio</option>
                      <option value="LUXURY">Luxury Artifacts</option>
                    </select>
                  </div>

                  {/* Service Needed */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                      WHAT DO YOU NEED?
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="AI Video Ads">AI Video Ads</option>
                      <option value="AI Product Visuals">AI Product Visuals</option>
                      <option value="Social Media Ads">Social Media Ads (9:16)</option>
                      <option value="Product Commercials">Cinematic Product Commercials</option>
                      <option value="AI Creative Direction">AI Creative Direction</option>
                      <option value="Campaign Creative">Full Campaign Creative Sprint</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                    PROJECT BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {["$1,500 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budgetRange: b })}
                        className={`py-2.5 px-2 text-[11px] font-mono rounded-xl border text-center transition-all ${
                          formData.budgetRange === b
                            ? "bg-black text-white border-black font-semibold shadow-sm"
                            : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-400"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 block font-medium">
                    CAMPAIGN GOALS / NOTES
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand positioning, upcoming launch deadlines, or target platforms..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black text-xs font-body focus:outline-none focus:border-black focus:bg-white transition-colors placeholder:text-neutral-400"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-mono rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {status === "submitting" ? (
                    <span>PROCESSING BRIEF...</span>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
