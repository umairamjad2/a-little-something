"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import confetti from "canvas-confetti";

const GENTLE_STARS = [
  { id: 1, left: "12%", delay: 0.2, duration: 8.5, symbol: "✨", size: "text-sm" },
  { id: 2, left: "26%", delay: 2.1, duration: 9.8, symbol: "❤️", size: "text-xs" },
  { id: 3, left: "48%", delay: 1.2, duration: 10.5, symbol: "🫂", size: "text-base" },
  { id: 4, left: "70%", delay: 3.0, duration: 9.0, symbol: "🤲🏻", size: "text-sm" },
  { id: 5, left: "86%", delay: 0.8, duration: 10.0, symbol: "🤍", size: "text-xs" },
  { id: 6, left: "94%", delay: 2.5, duration: 8.8, symbol: "✦", size: "text-xs" },
];

export function HowMuchYouMean() {
  const { eyebrow, heading, subheading, sections, closingDeclaration, signature } =
    birthdayContent.howMuchYouMean;

  const [activeTab, setActiveTab] = useState<"cards" | "letter">("cards");
  const [hasHugged, setHasHugged] = useState(false);

  const handleShoulderReaction = () => {
    setHasHugged(true);

    confetti({
      particleCount: 45,
      spread: 80,
      origin: { y: 0.72 },
      colors: ["#f43f5e", "#fda4af", "#fbbf24", "#ffffff", "#c084fc", "#e11d48"],
      scalar: 1.05,
      disableForReducedMotion: true,
    });
  };

  return (
    <section
      id="how-much-you-mean-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#06040a] px-4 sm:px-6 py-20 sm:py-28 select-none overflow-hidden"
    >
      {/* ── Soft Ambient Background Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] h-[300px] sm:h-[480px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#06040a_95%)]" />

        {/* Gentle floating tranquil motes */}
        {GENTLE_STARS.map((s) => (
          <motion.span
            key={s.id}
            style={{ left: s.left, bottom: "6%" }}
            className={`absolute ${s.size} text-rose-300/40 drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]`}
            animate={{
              y: [0, -290, -550],
              opacity: [0, 0.7, 0],
              scale: [0.85, 1.15, 0.9],
              x: [0, (s.id % 2 === 0 ? 1 : -1) * 20, 0],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {s.symbol}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 flex flex-col items-center text-center px-4"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-950/30 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.15)]">
            <span className="text-rose-300 text-xs tracking-[0.25em] uppercase font-light">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)] leading-tight max-w-3xl">
            {heading}
          </h2>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-rose-200/65 font-light leading-relaxed">
            {subheading}
          </p>

          {/* View Mode Toggle */}
          <div className="mt-7 inline-flex items-center rounded-full border border-rose-400/20 bg-[#120a1c]/80 p-1 backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
            <button
              type="button"
              onClick={() => setActiveTab("cards")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "cards"
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "text-rose-200/60 hover:text-rose-100 hover:bg-rose-500/10"
              }`}
            >
              <span>🌸</span>
              <span>Story Chapters</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("letter")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === "letter"
                  ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                  : "text-rose-200/60 hover:text-rose-100 hover:bg-rose-500/10"
              }`}
            >
              <span>💌</span>
              <span>Read As One Letter</span>
            </button>
          </div>
        </motion.div>

        {/* ── Content View ── */}
        <AnimatePresence mode="wait">
          {activeTab === "cards" ? (
            /* ────────────────────────────────────────────────────────
               CARDS VIEW
            ──────────────────────────────────────────────────────── */
            <motion.div
              key="cards-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-6 sm:gap-8"
            >
              {sections.map((sec, index) => (
                <motion.div
                  key={sec.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-rose-400/20 bg-gradient-to-b from-[#180d24]/90 via-[#10071a]/95 to-[#160c22]/90 p-6 sm:p-9 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(244,63,94,0.08)] transition-all duration-500 hover:border-rose-400/35"
                >
                  {/* Header Row */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-400/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-rose-300/60">
                          {sec.tag}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-rose-400/40" />
                        <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-rose-300 border border-rose-400/20">
                          {sec.badge}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-2xl font-light text-rose-100 tracking-tight mt-1">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  {/* Highlight Quote */}
                  <div className="relative z-10 mt-5 rounded-xl border border-rose-400/15 bg-gradient-to-r from-rose-950/30 via-purple-950/20 to-transparent p-3.5 sm:p-4">
                    <p className="font-serif text-sm sm:text-base italic text-rose-200/90 tracking-wide flex items-center gap-2">
                      <span className="text-rose-400/60 text-lg leading-none">“</span>
                      {sec.quote}
                      <span className="text-rose-400/60 text-lg leading-none">”</span>
                    </p>
                  </div>

                  {/* Paragraphs */}
                  <div className="relative z-10 mt-5 flex flex-col gap-4 text-sm sm:text-base font-light text-rose-100/80 leading-relaxed sm:leading-loose">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* ────────────────────────────────────────────────────────
               LETTER VIEW
            ──────────────────────────────────────────────────────── */
            <motion.div
              key="letter-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full overflow-hidden rounded-3xl border border-rose-400/30 bg-gradient-to-b from-[#180e25] via-[#12081d] to-[#180e26] p-7 sm:p-12 backdrop-blur-2xl shadow-[0_25px_65px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(244,63,94,0.15)]"
            >
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-rose-400/15" />

              <div className="flex flex-col items-center text-center mb-8 border-b border-rose-400/15 pb-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 to-pink-700 text-2xl shadow-[0_0_25px_rgba(244,63,94,0.5)] border border-rose-300/40 mb-3">
                  💌
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-300/70">
                  To My Most Precious Miss
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-rose-100 mt-1">
                  How Much You Truly Mean To My Life
                </h3>
              </div>

              <div className="flex flex-col gap-6 text-sm sm:text-base font-light text-rose-100/85 leading-relaxed sm:leading-loose max-w-2xl mx-auto">
                {sections.map((sec, sIdx) => (
                  <div key={sec.id} className="flex flex-col gap-4">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>
                        {sIdx === 0 && pIdx === 0 && (
                          <span className="font-serif text-3xl sm:text-4xl text-rose-300 float-left mr-2 leading-none">
                            M
                          </span>
                        )}
                        {sIdx === 0 && pIdx === 0 ? para.slice(1) : para}
                      </p>
                    ))}
                    {sIdx < sections.length - 1 && (
                      <div className="my-5 flex items-center justify-center gap-3 opacity-30">
                        <span className="h-[1px] w-12 bg-rose-400" />
                        <span className="text-xs text-rose-300">✦</span>
                        <span className="h-[1px] w-12 bg-rose-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Grand Climax Declaration Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16 w-full overflow-hidden rounded-3xl border border-rose-400/35 bg-gradient-to-b from-[#220d2c] via-[#160822] to-[#220d2d] p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(244,63,94,0.3),0_0_45px_rgba(244,63,94,0.15)]"
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 border-2 border-rose-300/50 shadow-[0_0_35px_rgba(244,63,94,0.6)] text-3xl sm:text-4xl"
            >
              🫂❤️
            </motion.div>

            <h3 className="font-serif text-xl sm:text-3xl md:text-4xl font-light italic tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.5)] max-w-2xl leading-relaxed">
              &ldquo;{closingDeclaration}&rdquo;
            </h3>

            <div className="mt-6 mb-8 flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-rose-400/50" />
              <span className="font-serif text-base sm:text-lg italic text-rose-300/90 tracking-wide">
                {signature}
              </span>
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-rose-400/50" />
            </div>

            {/* Interactive Shoulder Reaction */}
            <AnimatePresence mode="wait">
              {!hasHugged ? (
                <motion.button
                  key="shoulder-btn"
                  type="button"
                  onClick={handleShoulderReaction}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 35px 8px rgba(244,63,94,0.4)" }}
                  whileTap={{ scale: 0.94 }}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-rose-300/40 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 text-base font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.4)] focus:outline-none cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Rest Your Head On My Shoulder 🫂❤️</span>
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  key="shoulder-resp"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-full border border-amber-300/40 bg-amber-950/40 px-7 py-3 text-center backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                >
                  <p className="text-sm font-light text-amber-100 flex items-center gap-2">
                    <span>❤️</span>
                    <span>You are never alone, Umair. I will always understand you and believe in you.</span>
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
