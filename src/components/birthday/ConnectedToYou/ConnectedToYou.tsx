"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import confetti from "canvas-confetti";

const TRANQUIL_MOTES = [
  { id: 1, left: "10%", delay: 0.3, duration: 8.8, symbol: "❤️", size: "text-xs" },
  { id: 2, left: "24%", delay: 2.1, duration: 9.4, symbol: "✨", size: "text-sm" },
  { id: 3, left: "52%", delay: 1.0, duration: 10.2, symbol: "🧿", size: "text-base" },
  { id: 4, left: "76%", delay: 3.1, duration: 9.1, symbol: "🥹", size: "text-xs" },
  { id: 5, left: "90%", delay: 1.5, duration: 8.5, symbol: "💖", size: "text-sm" },
];

export function ConnectedToYou() {
  const { eyebrow, heading, subheading, paragraphs, highlightQuote, signature } =
    birthdayContent.connectedToYou;

  const [hasHeldHands, setHasHeldHands] = useState(false);

  const handleSmileReaction = () => {
    setHasHeldHands(true);

    confetti({
      particleCount: 40,
      spread: 75,
      origin: { y: 0.72 },
      colors: ["#f43f5e", "#fda4af", "#fbbf24", "#ffffff", "#e11d48"],
      scalar: 1.05,
      disableForReducedMotion: true,
    });
  };

  return (
    <section
      id="connected-to-you-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-20 sm:py-28 select-none overflow-hidden"
    >
      {/* ── Soft Ambient Glows (Performance Optimized) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] h-[300px] sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070509_95%)]" />

        {/* Gentle floating dust/motes */}
        {TRANQUIL_MOTES.map((m) => (
          <motion.span
            key={m.id}
            style={{ left: m.left, bottom: "6%" }}
            className={`absolute ${m.size} text-rose-300/40 drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]`}
            animate={{
              y: [0, -290, -540],
              opacity: [0, 0.7, 0],
              scale: [0.85, 1.15, 0.9],
              x: [0, (m.id % 2 === 0 ? 1 : -1) * 20, 0],
            }}
            transition={{
              duration: m.duration,
              delay: m.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {m.symbol}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 flex flex-col items-center text-center px-4"
        >
          {/* Eyebrow badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-950/30 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.15)]">
            <span className="text-rose-300 text-xs tracking-[0.25em] uppercase font-light">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)] leading-tight">
            {heading}
          </h2>

          <p className="mt-3 max-w-md text-sm sm:text-base text-rose-200/65 font-light leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* ── Main Letter Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden rounded-3xl border border-rose-400/25 bg-gradient-to-b from-[#180d24]/90 via-[#10071a]/95 to-[#160c22]/90 p-7 sm:p-12 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(244,63,94,0.12)]"
        >
          {/* Inner frame line */}
          <div className="pointer-events-none absolute inset-3 rounded-2xl border border-rose-400/10" />

          {/* Top medallion icon */}
          <div className="flex flex-col items-center text-center mb-8 pb-5 border-b border-rose-400/15">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="mb-3 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-600/20 via-pink-600/30 to-amber-500/20 border border-rose-400/35 shadow-[0_0_25px_rgba(244,63,94,0.3)] text-2xl sm:text-3xl"
            >
              ❤️
            </motion.div>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-rose-300/60 font-light">
              A Confession From My Soul
            </span>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 text-sm sm:text-base font-light text-rose-100/85 leading-relaxed sm:leading-loose">
            {paragraphs.map((para, idx) => {
              const isSecond = idx === 1; // "Chalte hain, kahin miss"
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={
                    isSecond
                      ? "rounded-2xl border border-rose-400/20 bg-gradient-to-r from-rose-950/25 via-purple-950/30 to-rose-950/25 p-4 sm:p-5 shadow-[0_0_25px_rgba(244,63,94,0.08)]"
                      : ""
                  }
                >
                  <p>{para}</p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Climax Highlight Quote Box ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative mt-8 sm:mt-10 rounded-2xl border border-rose-400/35 bg-gradient-to-r from-rose-950/40 via-purple-950/45 to-rose-950/40 p-5 sm:p-8 text-center shadow-[0_0_35px_rgba(244,63,94,0.18)] overflow-hidden"
          >
            {/* Soft shimmer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-rose-300/5 to-transparent" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xl sm:text-2xl mb-2">🧿</span>
              <p className="font-serif text-base sm:text-xl md:text-2xl font-light italic text-rose-100 tracking-wide leading-relaxed drop-shadow-[0_2px_15px_rgba(244,63,94,0.35)]">
                &ldquo;{highlightQuote}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Signature */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-rose-400/50" />
            <span className="font-serif text-sm sm:text-base italic text-rose-300/90 tracking-wider">
              {signature}
            </span>
            <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-rose-400/50" />
          </div>

          {/* ── Interactive Reaction ── */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!hasHeldHands ? (
                <motion.button
                  key="smile-button"
                  type="button"
                  onClick={handleSmileReaction}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 35px 8px rgba(244,63,94,0.35)" }}
                  whileTap={{ scale: 0.94 }}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-rose-300/35 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-7 py-3 text-sm sm:text-base font-medium text-white shadow-[0_8px_25px_rgba(225,29,72,0.35)] focus:outline-none cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Send Umair A Gentle Smile 🌸❤️</span>
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  key="smile-response"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-full border border-rose-300/40 bg-rose-950/40 px-6 py-2.5 text-center backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                >
                  <p className="text-xs sm:text-sm font-light text-rose-100 flex items-center gap-2">
                    <span>❤️</span>
                    <span>Your smile is my whole world, Miss. Thank you for being in my life.</span>
                    <span>🥹🫶🏻</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060408] to-transparent z-10" />
    </section>
  );
}
