"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { RefObject } from "react";
import { birthdayContent } from "@/data/birthday";

export function ReasonsILoveYou({ sectionRef }: { sectionRef?: RefObject<HTMLElement | null> }) {
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggle = (i: number) => setFlipped((p) => (p === i ? null : i));

  return (
    <section
      ref={sectionRef}
      id="reasons-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] rounded-full bg-rose-600/10 blur-[140px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070509_98%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-18 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              From the Heart
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
            Reasons I Love You ❤️
          </h2>
          <p className="mt-4 text-sm sm:text-base text-rose-200/60 font-light">
            Tap each card to reveal the feeling behind it.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {birthdayContent.reasons.map((reason, idx) => {
            const isFlipped = flipped === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-52 cursor-pointer"
                onClick={() => toggle(idx)}
                style={{ perspective: "1200px" }}
                aria-label={`Reason ${idx + 1}: ${reason.title}`}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-rose-500/25 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-md shadow-xl shadow-black/40 transition-all duration-300 group-hover:border-rose-400/50 group-hover:shadow-[0_12px_35px_rgba(244,63,94,0.2)] px-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Sheen on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Glow orb */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-rose-500/20 blur-2xl transition-opacity duration-500 ${isFlipped ? "opacity-0" : "opacity-100 group-hover:opacity-100"}`} />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.18, 1, 1.12, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      className="text-2xl drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                    >
                      ❤️
                    </motion.div>
                    <p className="relative z-10 font-serif text-lg sm:text-xl font-normal text-rose-100/95 text-center leading-snug">
                      {reason.title}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-rose-400/50 font-light">
                      tap to reveal
                    </span>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-rose-400/40 bg-gradient-to-b from-rose-950/60 via-[#1a0a14]/80 to-[#130d1a]/90 backdrop-blur-md shadow-[0_0_40px_rgba(244,63,94,0.25)] px-6"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-pink-500/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-rose-500/20 blur-3xl" />
                    </div>
                    <span className="text-2xl drop-shadow-[0_0_18px_rgba(244,63,94,0.8)]">💌</span>
                    <p className="relative z-10 font-serif text-base sm:text-lg font-light italic text-rose-50/95 text-center leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      {reason.message}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-16 flex items-center gap-3 text-rose-300/30"
        >
          <span className="h-[1px] w-12 bg-rose-400/20" />
          <span className="text-xs tracking-[0.3em] uppercase font-light">∞</span>
          <span className="h-[1px] w-12 bg-rose-400/20" />
        </motion.div>
      </div>
    </section>
  );
}
