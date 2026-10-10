"use client";

import { motion } from "framer-motion";

interface GiftBoxProps {
  opened: boolean;
  onOpen?: () => void;
}

export function GiftBox({ opened, onOpen }: GiftBoxProps) {
  return (
    <div
      onClick={!opened ? onOpen : undefined}
      className={`relative flex flex-col items-center justify-center select-none ${
        !opened ? "cursor-pointer" : ""
      }`}
    >
      {/* ── Floor Shadow Glow ── */}
      <div className="absolute -bottom-6 w-44 sm:w-60 h-8 rounded-full bg-rose-600/30 blur-2xl" />
      <div className="absolute -bottom-2 w-32 sm:w-44 h-4 rounded-full bg-black/60 blur-md" />

      {/* ── Outer Box Container ── */}
      <motion.div
        animate={
          !opened
            ? {
                y: [0, -8, 0],
                rotate: [0, -1, 1, 0],
              }
            : { y: 0 }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-48 sm:w-60 flex flex-col items-center"
      >
        {/* ── Gift Box Lid (Flies open when opened) ── */}
        <motion.div
          animate={
            opened
              ? {
                  y: -95,
                  rotateX: -110,
                  opacity: 0,
                  scale: 1.05,
                }
              : { y: 0, rotateX: 0, opacity: 1, scale: 1 }
          }
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "top center", transformPerspective: 800 }}
          className="relative z-20 w-[106%] -mb-2"
        >
          {/* 3D Bow on top */}
          <div className="relative -mb-3 flex justify-center z-30">
            <div className="relative flex items-center justify-center">
              {/* Left loop */}
              <div className="w-8 sm:w-10 h-7 sm:h-8 rounded-full bg-gradient-to-br from-amber-200 via-amber-300 to-yellow-500 border border-amber-100/60 shadow-[0_2px_10px_rgba(251,191,36,0.5)] -rotate-[35deg] origin-bottom-right" />
              {/* Right loop */}
              <div className="w-8 sm:w-10 h-7 sm:h-8 rounded-full bg-gradient-to-bl from-amber-200 via-amber-300 to-yellow-500 border border-amber-100/60 shadow-[0_2px_10px_rgba(251,191,36,0.5)] rotate-[35deg] origin-bottom-left" />
              {/* Center knot */}
              <div className="absolute h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 border border-amber-100 shadow-[0_0_12px_rgba(251,191,36,0.7)] z-40" />
            </div>
          </div>

          {/* Lid body */}
          <div className="relative h-12 sm:h-14 w-full rounded-t-xl bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 border border-rose-300/50 shadow-[0_-5px_25px_rgba(244,63,94,0.45)] overflow-hidden">
            {/* Gold Ribbon on Lid */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-7 sm:w-8 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Lid lip edge */}
          <div className="h-2.5 w-full bg-gradient-to-b from-rose-700 to-rose-900 rounded-b-sm border-t border-rose-400/30" />
        </motion.div>

        {/* ── Box Base (Body) ── */}
        <div className="relative w-full h-40 sm:h-48 rounded-b-2xl bg-gradient-to-b from-rose-600 via-rose-700 to-rose-900 border border-rose-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(244,63,94,0.3)] overflow-hidden">
          {/* Vertical gold ribbon */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-7 sm:w-8 bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.4)]" />

          {/* Horizontal gold ribbon */}
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-7 sm:h-8 bg-gradient-to-b from-amber-200 via-amber-300 to-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.4)]" />

          {/* Velvet sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/30 pointer-events-none" />

          {/* Shimmer light bar across box */}
          <motion.div
            animate={
              !opened
                ? { x: ["-150%", "250%"] }
                : { opacity: 0 }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] pointer-events-none"
          />

          {/* Internal magic burst glow upon opening */}
          {opened && (
            <motion.div
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-200 via-rose-300 to-white blur-md pointer-events-none"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
