import type { Metadata } from "next";
import {
  Archivo_Black,
  Caveat,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const displayFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sketchFont = Caveat({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-sketch",
});

const monoFont = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const sansFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ST Dev Solutions | We Add The Real Glitter To Your Local Business",
  description:
    "No dull code. We engineer high-octane websites that draw crowds. Live with Tusar & partner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sketchFont.variable} ${monoFont.variable} ${sansFont.variable}`}
    >
      <body className="bg-[#0b0a08] text-[#F5F5F0] antialiased selection:bg-yellow-300 selection:text-black">
        {children}
      </body>
    </html>
  );
}
