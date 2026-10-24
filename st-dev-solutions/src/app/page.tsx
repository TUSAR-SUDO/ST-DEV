"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Archivo_Black,
  Caveat,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import FloatingWorkflowCards from "@/assets/FloatingWorkflowCards";
import {
  TopDiscoverySketchArrow,
  LeftDownSketchArrow,
  BusinessToCodeArrow,
  TechIndicatorArrow,
} from "@/assets/SketchAnnotations";
import {
  Menu,
  Phone,
  Plus,
  Trash2,
  Camera,
  Compass,
  Smile,
  MousePointerClick,
} from "lucide-react";

const displayFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const sketchFont = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const sansFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Hero3DScene = dynamic(() => import("@/assets/Hero3DScene"), {
  ssr: false,
  loading: () => null,
});

export default function ExactReferenceHeroPage() {
  return (
    <main
      className={`${sansFont.className} relative min-h-screen w-full bg-[#0b0a07] text-[#F3F3EE] overflow-hidden flex flex-col justify-between`}
    >
      {/* Warm Golden Ambient Glow */}
      <div className="pointer-events-none absolute top-[18%] left-[28%] w-[620px] h-[520px] rounded-full bg-amber-500/[0.1] blur-[160px]" />

      {/* TOP BAR */}
      <header className="relative z-30 flex items-center justify-between px-8 md:px-14 pt-7 pb-2">
        <div
          className={`${displayFont.className} text-lg md:text-xl tracking-wider uppercase text-white scale-y-110`}
        >
          ST&nbsp;&nbsp;DEV&nbsp;&nbsp;SOLUTIONS
        </div>
        <button
          aria-label="Menu"
          className="text-zinc-300 hover:text-white transition p-2"
        >
          <Menu className="w-6 h-6 stroke-[1.75]" />
        </button>
      </header>

      {/* RIGHT-EDGE VERTICAL PILL WIDGET */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 py-3 px-2 rounded-full bg-zinc-900/80 border border-white/15 backdrop-blur-md shadow-2xl">
        <button
          aria-label="Quick Call"
          className="w-7 h-7 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-zinc-300 hover:text-yellow-300 transition"
        >
          <Phone className="w-3.5 h-3.5" />
        </button>
        <div className="h-6 w-[1px] bg-white/15" />
        <button
          aria-label="Expand"
          className="w-7 h-7 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white transition"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* MAIN HERO VIEWPORT */}
      <section className="relative z-20 max-w-[1520px] w-full mx-auto px-8 md:px-14 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center pb-20">
        {/* LEFT COLUMN: Heavy Display Headline + Real Cursive Sketch Notes */}
        <div className="lg:col-span-5 relative z-30 pt-4 lg:pt-0">
          {/* Repositioned Arrow so it NEVER overlaps "01 DISCOVERY" */}
          <TopDiscoverySketchArrow className="hidden xl:block w-28 absolute -top-3 -right-12 z-30" />

          <h1
            className={`${displayFont.className} uppercase text-[2.75rem] sm:text-[3.5rem] xl:text-[4.1rem] leading-[0.93] tracking-[-0.03em] text-[#F5F5F0] scale-x-[0.88] scale-y-[1.08] origin-left select-none`}
          >
            <span className="block whitespace-nowrap">WE ADD THE</span>

            <span className="block mt-1 whitespace-nowrap">
              REAL{" "}
              <span className="relative inline-block bg-gradient-to-b from-[#FFF8DC] via-[#E5C168] to-[#9A7B38] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(234,179,8,0.3)]">
                GLITTER
                <span className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full bg-gradient-to-r from-amber-300 via-fuchsia-400 to-amber-200 opacity-95 shadow-[0_0_12px_rgba(232,121,249,0.65)]" />
              </span>
            </span>

            <span className="block mt-1.5 whitespace-nowrap">
              TO YOUR LOCAL
            </span>

            <span className="relative inline-block mt-1">
              <LeftDownSketchArrow className="hidden sm:block w-5 h-20 absolute -left-7 top-1" />
              BUSINESS.
              <span className="absolute -bottom-1.5 left-0 right-0 h-[6px] rounded-sm bg-gradient-to-r from-white via-zinc-200 to-zinc-400" />
              <BusinessToCodeArrow className="hidden xl:block w-24 h-20 absolute -right-24 -top-2" />
            </span>
          </h1>

          {/* Real Cursive Handwritten Yellow Annotations */}
          <div className="mt-6 space-y-1">
            <div className="flex items-center gap-2">
              <p
                className={`${sketchFont.className} text-2xl sm:text-[29px] text-[#FDE047] tracking-wide leading-none`}
              >
                No dull code., High-voltage sketch notes
              </p>
              <span className="w-8 h-[1.5px] bg-yellow-300/70 inline-block" />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span
                className={`${monoFont.className} text-xs sm:text-[13px] tracking-widest text-zinc-200`}
              >
                [ 01 // ELEVATE LOCAL ]
              </span>
              <div className="relative flex items-center">
                <TechIndicatorArrow className="w-14 h-6" />
                <span
                  className={`${sketchFont.className} text-xl sm:text-[22px] text-yellow-200/95 -mt-2 ml-1`}
                >
                  Dynamic Tech indicators
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Left Subcopy */}
          <p className="mt-6 text-zinc-200 text-base sm:text-[18px] leading-[1.45] max-w-[440px] font-normal">
            No dull code. We engineer high-octane websites{" "}
            <br className="hidden sm:inline" />
            that draw crowds. Live with Tusar &amp; partner.
          </p>
        </div>

        {/* RIGHT COLUMN: Floating Cards + Feathered Full-Bleed 3D Scene */}
        <div className="lg:col-span-7 relative h-[600px] sm:h-[700px] w-full flex items-center justify-center">
          {/* 4 Floating Metallic Glass Cards */}
          <div className="absolute inset-y-6 left-[6%] sm:left-[10%] w-full sm:w-[56%] z-20">
            <FloatingWorkflowCards />
          </div>

          {/* Feathered Mask Wrapper Eliminates the Harsh Rectangular Box */}
          <div
            className="absolute -inset-y-10 -right-10 left-[8%] sm:left-[14%] z-10 overflow-hidden"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 75% at 58% 50%, #000 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 78% 75% at 58% 50%, #000 55%, transparent 100%)",
            }}
          >
            <Hero3DScene />

            {/* 4 Edge-Fade Gradients Blending Seamlessly Into #0b0a07 */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0a07] via-[#0b0a07]/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b0a07] via-[#0b0a07]/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0b0a07] via-[#0b0a07]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0a07] to-transparent" />
          </div>
        </div>
      </section>

      {/* BOTTOM FLOATING macOS DOCK */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="flex items-center gap-2 sm:gap-3 px-3.5 py-2 rounded-2xl bg-zinc-900/85 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-sky-300 to-blue-600 flex items-center justify-center shadow-inner border border-white/40">
            <Smile className="w-5 h-5 text-white" />
          </div>

          <a
            href="#work"
            className={`${monoFont.className} relative px-2.5 py-1.5 text-xs sm:text-[13px] tracking-wider text-white hover:text-yellow-300 transition`}
          >
            [ OUR WORK ]
            <MousePointerClick className="w-4 h-4 text-yellow-300 absolute -bottom-2.5 right-1 fill-yellow-300/30" />
          </a>

          <a
            href="#audit"
            className={`${monoFont.className} relative px-3.5 py-1.5 rounded-lg bg-yellow-400/15 border border-yellow-300/60 text-xs sm:text-[13px] tracking-wider text-yellow-200 hover:bg-yellow-300 hover:text-black transition shadow-[0_0_20px_rgba(253,224,71,0.2)]`}
          >
            [ GET AUDIT ↗ ]
            <MousePointerClick className="w-4 h-4 text-yellow-300 absolute -bottom-2.5 -right-1 fill-yellow-300/40" />
          </a>

          <a
            href="#duo"
            className={`${monoFont.className} px-2.5 py-1.5 text-xs sm:text-[13px] tracking-wider text-zinc-200 hover:text-white transition`}
          >
            [ DUO &amp; METHOD ]
          </a>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-white/15">
            <div className="w-7 h-7 rounded-md bg-gradient-to-b from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow">
              <Compass className="w-4 h-4" />
            </div>
            <div className="w-7 h-7 rounded-md bg-gradient-to-b from-sky-400 to-blue-700 flex items-center justify-center text-white shadow">
              <Camera className="w-4 h-4" />
            </div>
            <div className="w-7 h-8 rounded-md bg-gradient-to-b from-zinc-400/40 to-zinc-700/60 border border-white/25 flex items-center justify-center text-zinc-200 ml-0.5">
              <Trash2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="mt-1.5 h-[2px] w-72 sm:w-96 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent rounded-full blur-[0.5px]" />
      </footer>
    </main>
  );
}
