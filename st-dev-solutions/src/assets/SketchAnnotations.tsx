"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointer } from "lucide-react";

// Top-right of "WE ADD THE": Crosshairs + White Cursor + Curved Yellow Arrow to Card 01
export function TopDiscoverySketchArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      {/* White Outline Cursor & Coordinate Crosshair */}
      <div className="relative h-16 w-40">
        <span className="absolute left-2 top-2 text-yellow-300/80 font-mono text-xs">
          ↑
        </span>
        <MousePointer className="
          absolute left-8 top-0 w-5 h-5 text-white/90 -rotate-12 fill-black/60
        " />
        <svg viewBox="0 0 150 60" fill="none" className="w-full h-full overflow-visible">
          {/* Curved arrow pointing right to 01 DISCOVERY */}
          <motion.path
            d="M8 42 C 38 18, 78 24, 132 24"
            stroke="#FDE047"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          />
          <motion.path
            d="M122 17 L 134 24 L 122 31"
            stroke="#FDE047"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
          {/* Small vertical tick under curve */}
          <path d="M45 35 L 45 50 M41 46 L 45 51 L 49 46" stroke="#FDE047" strokeWidth="1.3" />
        </svg>
      </div>
    </div>
  );
}

// Left of "BUSINESS.": Vertical Downward Hand-Drawn Arrow
export function LeftDownSketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 90"
      fill="none"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      <motion.path
        d="M12 4 C 10 35, 13 60, 12 82"
        stroke="#FDE047"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      />
      <path
        d="M6 72 L 12 84 L 18 72"
        stroke="#FDE047"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Right of "BUSINESS.": S-Curve Arrow + Loop pointing to Card 03
export function BusinessToCodeArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 110"
      fill="none"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      {/* Upward & Right Branch to Card 03 */}
      <motion.path
        d="M28 18 C 32 45, 65 42, 112 52"
        stroke="#FDE047"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      />
      <path
        d="M102 45 L 114 52 L 101 59"
        stroke="#FDE047"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Upward Arrowhead near BUSINESS. */}
      <path
        d="M22 25 L 28 14 L 34 25"
        stroke="#FDE047"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Lower Swoop */}
      <motion.path
        d="M28 22 C 35 60, 55 88, 12 95"
        stroke="#FDE047"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      />
    </svg>
  );
}

// Small Upward Curved Arrow Beneath Card 01
export function UnderDiscoveryArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      <path
        d="M45 52 C 22 42, 18 25, 22 8"
        stroke="#FDE047"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15 16 L 22 6 L 29 16"
        stroke="#FDE047"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Small Left-Pointing Arrow from "Dynamic Tech indicators" to "[ 01 // ELEVATE LOCAL ]"
export function TechIndicatorArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 30"
      fill="none"
      className={`pointer-events-none overflow-visible ${className}`}
    >
      <path
        d="M84 6 C 62 22, 35 22, 8 16"
        stroke="#FDE047"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 11 L 6 16 L 15 22"
        stroke="#FDE047"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
