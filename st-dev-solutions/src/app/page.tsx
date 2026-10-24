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
      className={`${sansFont.className} relative min-h-screen min-h-[100dvh] w-full bg-[#0b0a07] text-[#F3F3EE] overflow-hidden flex flex-col justify-between`}
    >
      {/* Warm Golden Ambient Glow */}
      <div className="pointer-events-none absolute top-[18%] left-[28%] w-[320px] sm:w-[620px] h-[300px] sm:h-[520px] rounded-full bg-amber-500/[0.1] blur-[120px] sm:blur-[160px]" />

      {/* TOP BAR */}
      <header className="relative z-30 flex items-center justify-between px-4 sm:px-8 md:px-14 pt-5 sm:pt-7 pb-2">
        <div
          className={`${displayFont.className} text-sm sm:text-lg md:text-xl tracking-wider uppercase text-white scale-y-110`}
        >
          ST&nbsp;&nbsp;DEV&nbsp;&nbsp;SOLUTIONS
        </div>
        <button
          aria-label="Menu"
          className="text-zinc-300 hover:text-white transition p-2"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
        </button>
      </header>

      {/* RIGHT-EDGE VERTICAL PILL WIDGET — hidden on mobile & tablet */}
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
      <section className="relative z-20 max-w-[1520px] w-full mx-auto px-4 sm:px-8 md:px-14 flex-1 flex flex-col lg:grid lg:grid-cols-12 items-center pb-24 sm:pb-20">

        {/* ─── MOBILE 3D SCENE (behind headline on small screens) ─── */}
        <div className="lg:hidden absolute inset-0 z-0 overflow-hidden opacity-40 sm:opacity-50">
          <div
            className="w-full h-full"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 80% at 65% 40%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 90% 80% at 65% 40%, #000 40%, transparent 100%)",
            }}
          >
            <Hero3DScene />
          </div>
        </div>

        {/* LEFT COLUMN: Heavy Display Headline + Real Cursive Sketch Notes */}
        <div className="lg:col-span-5 relative z-30 pt-6 sm:pt-4 lg:pt-0 w-full">
          {/* Repositioned Arrow so it NEVER overlaps "01 DISCOVERY" */}
          <TopDiscoverySketchArrow className="hidden xl:block w-28 absolute -top-3 -right-12 z-30" />

          <h1
            className={`${displayFont.className} uppercase text-[2rem] xs:text-[2.4rem] sm:text-[3.5rem] xl:text-[4.1rem] leading-[0.93] tracking-[-0.03em] text-[#F5F5F0] scale-x-[0.88] scale-y-[1.08] origin-left select-none`}
          >
            <span className="block whitespace-nowrap">WE ADD THE</span>

            <span className="block mt-1 whitespace-nowrap">
              REAL{" "}
              <span className="relative inline-block bg-gradient-to-b from-[#FFF8DC] via-[#E5C168] to-[#9A7B38] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(234,179,8,0.3)]">
                GLITTER
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] sm:h-[5px] rounded-full bg-gradient-to-r from-amber-300 via-fuchsia-400 to-amber-200 opacity-95 shadow-[0_0_12px_rgba(232,121,249,0.65)]" />
              </span>
            </span>

            <span className="block mt-1.5 whitespace-nowrap">
              TO YOUR LOCAL
            </span>

            <span className="relative inline-block mt-1">
              <LeftDownSketchArrow className="hidden sm:block w-5 h-20 absolute -left-7 top-1" />
              BUSINESS.
              <span className="absolute -bottom-1.5 left-0 right-0 h-[4px] sm:h-[6px] rounded-sm bg-gradient-to-r from-white via-zinc-200 to-zinc-400" />
              <BusinessToCodeArrow className="hidden xl:block w-24 h-20 absolute -right-24 -top-2" />
            </span>
          </h1>

          {/* Real Cursive Handwritten Yellow Annotations */}
          <div className="mt-4 sm:mt-6 space-y-1">
            <div className="flex items-center gap-2">
              <p
                className={`${sketchFont.className} text-lg sm:text-2xl md:text-[29px] text-[#FDE047] tracking-wide leading-none`}
              >
                No dull code., High-voltage sketch notes
              </p>
              <span className="hidden sm:inline-block w-8 h-[1.5px] bg-yellow-300/70" />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              <span
                className={`${monoFont.className} text-[10px] sm:text-xs md:text-[13px] tracking-widest text-zinc-200`}
              >
                [ 01 // ELEVATE LOCAL ]
              </span>
              <div className="relative flex items-center">
                <TechIndicatorArrow className="hidden sm:block w-14 h-6" />
                <span
                  className={`${sketchFont.className} text-base sm:text-xl md:text-[22px] text-yellow-200/95 -mt-2 ml-1`}
                >
                  Dynamic Tech indicators
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Left Subcopy */}
          <p className="mt-4 sm:mt-6 text-zinc-200 text-sm sm:text-base md:text-[18px] leading-[1.45] max-w-[440px] font-normal">
            No dull code. We engineer high-octane websites{" "}
            <br className="hidden sm:inline" />
            that draw crowds. Live with Tusar &amp; partner.
          </p>
        </div>

        {/* RIGHT COLUMN: Floating Cards + Feathered Full-Bleed 3D Scene — DESKTOP ONLY */}
        <div className="hidden lg:flex lg:col-span-7 relative h-[600px] sm:h-[700px] w-full items-center justify-center">
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

        {/* ─── MOBILE WORKFLOW CARDS (horizontal scroll strip) ─── */}
        <div className="lg:hidden relative z-20 w-full mt-6 sm:mt-10">
          <div className="flex gap-3 overflow-x-auto pb-4 px-1 snap-x snap-mandatory scrollbar-hide -mx-1">
            {/* Card 01 */}
            <div className="snap-start shrink-0 w-[160px] sm:w-[185px] rounded-xl bg-gradient-to-b from-zinc-700/75 via-zinc-900/90 to-zinc-950 backdrop-blur-xl border border-white/25 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden">
              <div className="p-3.5 sm:p-4">
                <div className="text-xl sm:text-2xl font-light tracking-tight text-white/95">01</div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-zinc-100 mt-0.5">DISCOVERY</div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-zinc-400 via-white to-zinc-500 border-t border-white/40" />
            </div>

            {/* Card 02 */}
            <div className="snap-start shrink-0 w-[160px] sm:w-[185px] rounded-xl bg-gradient-to-b from-zinc-600/80 via-zinc-800/90 to-zinc-950 backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.95)] overflow-hidden">
              <div className="p-3.5 sm:p-4">
                <div className="flex items-start justify-between">
                  <span className="text-xl sm:text-2xl font-light text-white">02</span>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-white via-zinc-300 to-zinc-700 p-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.85)] flex items-center justify-center">
                    <div className="h-full w-full rounded-full bg-gradient-to-b from-zinc-700 to-zinc-950 flex items-center justify-center border border-white/40">
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-100 shadow-inner" />
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-white">3D / DESIGN</div>
              </div>
              <div className="h-2.5 w-full bg-gradient-to-r from-zinc-400 via-white to-zinc-400 border-t border-white/50" />
            </div>

            {/* Card 03 */}
            <div className="snap-start shrink-0 w-[160px] sm:w-[185px] rounded-xl bg-gradient-to-b from-zinc-700/75 via-zinc-900/90 to-zinc-950 backdrop-blur-xl border border-white/25 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden">
              <div className="p-3.5 sm:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-light text-white">03</span>
                  <span className="h-4 w-6 rounded-sm border border-white/30 bg-white/10" />
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-zinc-100">CUSTOM CODE</div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 border-t border-white/40" />
            </div>

            {/* Card 04 */}
            <div className="snap-start shrink-0 w-[160px] sm:w-[185px] rounded-xl bg-gradient-to-b from-zinc-600/80 via-zinc-800/90 to-zinc-950 backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.95)] overflow-hidden">
              <div className="p-3.5 sm:p-4">
                <div className="flex items-start justify-between">
                  <span className="text-xl sm:text-2xl font-light text-white">04</span>
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-white via-zinc-300 to-zinc-700 p-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.85)] flex items-center justify-center">
                    <div className="h-full w-full rounded-full bg-gradient-to-b from-zinc-700 to-zinc-950 flex items-center justify-center border border-white/40">
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-100 shadow-inner" />
                    </div>
                  </div>
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-white">THE GLOW-UP</div>
              </div>
              <div className="h-2.5 w-full bg-gradient-to-r from-zinc-300 via-white to-zinc-400 border-t border-white/50" />
            </div>
          </div>
        </div>

      </section>

      {/* BOTTOM FLOATING macOS DOCK */}
      <footer className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center w-[calc(100%-24px)] sm:w-auto max-w-[95vw]">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-zinc-900/85 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-b from-sky-300 to-blue-600 flex items-center justify-center shadow-inner border border-white/40 shrink-0">
            <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          <a
            href="#work"
            className={`${monoFont.className} relative px-1.5 sm:px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-[13px] tracking-wider text-white hover:text-yellow-300 transition whitespace-nowrap`}
          >
            [ OUR WORK ]
            <MousePointerClick className="hidden sm:block w-4 h-4 text-yellow-300 absolute -bottom-2.5 right-1 fill-yellow-300/30" />
          </a>

          <a
            href="#audit"
            className={`${monoFont.className} relative px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-yellow-400/15 border border-yellow-300/60 text-[10px] sm:text-xs md:text-[13px] tracking-wider text-yellow-200 hover:bg-yellow-300 hover:text-black transition shadow-[0_0_20px_rgba(253,224,71,0.2)] whitespace-nowrap`}
          >
            [ GET AUDIT ↗ ]
            <MousePointerClick className="hidden sm:block w-4 h-4 text-yellow-300 absolute -bottom-2.5 -right-1 fill-yellow-300/40" />
          </a>

          <a
            href="#duo"
            className={`${monoFont.className} hidden sm:block px-2.5 py-1.5 text-xs md:text-[13px] tracking-wider text-zinc-200 hover:text-white transition whitespace-nowrap`}
          >
            [ DUO &amp; METHOD ]
          </a>

          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/15">
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

        <div className="mt-1.5 h-[2px] w-48 sm:w-72 md:w-96 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent rounded-full blur-[0.5px]" />
      </footer>
    </main>
  );
}
