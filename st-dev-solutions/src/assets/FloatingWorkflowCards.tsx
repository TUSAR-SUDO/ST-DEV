"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, MessageSquare, UserCheck } from "lucide-react";
import { UnderDiscoveryArrow } from "./SketchAnnotations";

// 3D Metallic Hex Nut Badge (Top-Right of Card 02 & Card 04)
function MetallicHexNut() {
  return (
    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white via-zinc-300 to-zinc-700 p-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.85)] flex items-center justify-center">
      <div className="h-full w-full rounded-full bg-gradient-to-b from-zinc-700 to-zinc-950 flex items-center justify-center border border-white/40">
        <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-100 shadow-inner" />
      </div>
    </div>
  );
}

export default function FloatingWorkflowCards() {
  return (
    <div className="relative z-20 w-full h-full select-none pointer-events-none">
      {/* CARD 01: DISCOVERY + Tilted Smartphone + Chat Bubbles */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        whileHover={{ scale: 1.04, rotate: -3 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-auto absolute top-[6%] left-[2%] sm:left-[5%] w-[210px] rounded-xl bg-gradient-to-b from-zinc-700/75 via-zinc-900/90 to-zinc-950 backdrop-blur-xl border border-white/25 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-visible cursor-pointer"
      >
        <div className="p-4 pr-20">
          <div className="text-2xl font-light tracking-tight text-white/95">
            01
          </div>
          <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-100 mt-0.5">
            DISCOVERY
          </div>
        </div>
        {/* Thick Brushed Chrome Bottom Lip */}
        <div className="h-2.5 w-full rounded-b-xl bg-gradient-to-r from-zinc-400 via-white to-zinc-500 border-t border-white/40" />

        {/* Overlapping Tilted iPhone Mockup on the Right */}
        <div className="absolute -top-4 -right-8 w-[88px] h-[152px] rounded-[16px] bg-zinc-950 border-[2.5px] border-zinc-300 shadow-[0_20px_40px_rgba(0,0,0,0.95)] p-1 rotate-[10deg] flex flex-col justify-between overflow-hidden">
          <div className="mx-auto w-7 h-1 rounded-full bg-zinc-800 mb-0.5" />
          {/* Warm Cream Mobile Website Screen inside Phone */}
          <div className="flex-1 rounded-[11px] bg-[#F5EFE6] text-zinc-900 p-1.5 flex flex-col justify-between">
            <div className="text-[6px] font-bold uppercase text-center text-zinc-500">
              LOCAL ARTISAN
            </div>
            {/* Portrait/Hero Card inside Phone */}
            <div className="mx-auto w-12 h-12 rounded-lg bg-gradient-to-b from-amber-200 to-amber-700/60 border border-amber-900/20 flex flex-col items-center justify-center shadow-inner">
              <div className="w-5 h-5 rounded-full bg-amber-950/80 mb-0.5" />
              <div className="w-8 h-3 rounded-t-full bg-amber-900/90" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-zinc-800/80 rounded" />
              <div className="h-1 w-3/4 mx-auto bg-zinc-400 rounded" />
            </div>
            <div className="h-3 w-full rounded bg-amber-800/20 border border-amber-900/30" />
          </div>
        </div>

        {/* Floating Green & Blue Pills Left/Right of the Phone */}
        <div className="absolute -top-2 right-14 bg-emerald-500/90 text-white text-[8px] font-bold px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
          <UserCheck className="w-2.5 h-2.5" /> Live
        </div>
        <div className="absolute top-5 right-14 bg-amber-200 text-zinc-900 text-[8px] font-bold px-2 py-0.5 rounded-md shadow-md">
          ★ 5.0
        </div>
        <div className="absolute top-9 -right-14 bg-zinc-800/95 border border-white/20 text-white text-[8px] px-2 py-0.5 rounded-full shadow-lg">
          ● Booking
        </div>
        <div className="absolute top-16 -right-14 bg-sky-500 text-white text-[8px] font-semibold px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1">
          <MessageSquare className="w-2.5 h-2.5" /> Chat
        </div>

        {/* Small Curved Yellow Arrow Below Card 01 */}
        <UnderDiscoveryArrow className="w-12 h-12 absolute -bottom-14 left-16" />
      </motion.div>

      {/* CARD 03: CUSTOM CODE (Positioned Left & Slightly Behind Card 02) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        whileHover={{ scale: 1.05, zIndex: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pointer-events-auto absolute top-[50%] left-[-6%] sm:left-[-4%] z-10 w-[185px] rounded-xl bg-gradient-to-b from-zinc-700/75 via-zinc-900/90 to-zinc-950 backdrop-blur-xl border border-white/25 shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden cursor-pointer"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-light text-white">03</span>
            <span className="h-4 w-6 rounded-sm border border-white/30 bg-white/10" />
          </div>
          <div className="mt-1 text-[11px] font-bold tracking-wider uppercase text-zinc-100">
            CUSTOM CODE
          </div>
        </div>
        <div className="h-2.5 w-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 border-t border-white/40" />
      </motion.div>

      {/* CARD 02: 3D / DESIGN (Overlapping Right Edge of Card 03) */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 1 }}
        whileHover={{ scale: 1.05, zIndex: 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pointer-events-auto absolute top-[45%] left-[16%] sm:left-[20%] z-20 w-[195px] rounded-xl bg-gradient-to-b from-zinc-600/80 via-zinc-800/90 to-zinc-950 backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.95)] overflow-hidden cursor-pointer"
      >
        <div className="p-4">
          <div className="flex items-start justify-between">
            <span className="text-2xl font-light text-white">02</span>
            <MetallicHexNut />
          </div>
          <div className="mt-1 text-[11px] font-bold tracking-wider uppercase text-white">
            3D / DESIGN
          </div>
        </div>
        {/* Thick Brushed Chrome Bottom Lip */}
        <div className="h-3 w-full bg-gradient-to-r from-zinc-400 via-white to-zinc-400 border-t border-white/50" />
      </motion.div>

      {/* 3D Metallic Circular Sync / Loop Icon Below Card 03 */}
      <div className="absolute top-[69%] left-[7%] z-20 h-11 w-11 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-700 to-zinc-950 p-[2px] shadow-[0_12px_25px_rgba(0,0,0,0.9)] flex items-center justify-center">
        <div className="h-full w-full rounded-full bg-zinc-950 flex items-center justify-center">
          <RefreshCw
            className="w-5 h-5 text-zinc-200 animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>

      {/* CARD 04: THE GLOW-UP */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pointer-events-auto absolute top-[62%] left-[22%] sm:left-[25%] z-20 w-[205px] rounded-xl bg-gradient-to-b from-zinc-600/80 via-zinc-800/90 to-zinc-950 backdrop-blur-xl border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.95)] overflow-hidden cursor-pointer"
      >
        <div className="p-4">
          <div className="flex items-start justify-between">
            <span className="text-2xl font-light text-white">04</span>
            <MetallicHexNut />
          </div>
          <div className="mt-1 text-[11px] font-bold tracking-wider uppercase text-white">
            THE GLOW-UP
          </div>
        </div>
        {/* Thick Brushed Chrome Bottom Lip */}
        <div className="h-3 w-full bg-gradient-to-r from-zinc-300 via-white to-zinc-400 border-t border-white/50" />
      </motion.div>
    </div>
  );
}
