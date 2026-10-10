"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import confetti from "canvas-confetti";

export function ToMyMiss() {
  const { eyebrow, heading, subheading, cards, closing } =
    birthdayContent.toMyMiss;

  const [activeTab, setActiveTab] = useState<"cards" | "letter">("cards");
  const [lovedCardIds, setLovedCardIds] = useState<number[]>([]);
  const [hugCount, setHugCount] = useState<number>(0);

  const toggleLoveCard = (id: number) => {
    setLovedCardIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

    // Mini heart burst
    confetti({
      particleCount: 18,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#f43f5e", "#fb7185", "#fda4af", "#ffd1dc"],
      shapes: ["circle"],
      scalar: 0.9,
    });
  };

  const handleSendHug = () => {
    setHugCount((prev) => prev + 1);

    confetti({
      particleCount: 45,
      spread: 90,
      origin: { y: 0.7 },
      colors: ["#f43f5e", "#e11d48", "#fda4af", "#fbbf24", "#f472b6"],
      scalar: 1.1,
    });
  };

  return (
    <section
      id="to-my-miss-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-20 sm:py-28 select-none overflow-hidden"
    >
      {/* ── Ambient Background Lighting ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft floating nebula glows */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] rounded-full bg-rose-600/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[580px] h-[300px] sm:h-[480px] rounded-full bg-amber-500/8 blur-[140px]"
        />
        <div className="absolute top-[50%] left-[10%] w-[240px] h-[240px] rounded-full bg-pink-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070509_95%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* ── Header Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 flex flex-col items-center text-center px-4"
        >
          {/* Eyebrow badge */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-rose-400/30 bg-rose-950/40 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.15)]">
            <span className="text-rose-300 text-xs tracking-[0.25em] uppercase font-light">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(244,63,94,0.35)] leading-tight">
            {heading}
          </h2>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-rose-200/70 font-light leading-relaxed">
            {subheading}
          </p>

          {/* View Mode Switcher Toggle */}
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
              <span>Cherished Chapters</span>
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
               CARDS VIEW: Beautifully articulated keepsake cards
            ──────────────────────────────────────────────────────── */
            <motion.div
              key="cards-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-6 sm:gap-8"
            >
              {cards.map((card, index) => {
                const isLoved = lovedCardIds.includes(card.id);

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-rose-400/20 bg-gradient-to-b from-[#160d22]/90 via-[#10071a]/95 to-[#150c20]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(244,63,94,0.08)] transition-all duration-500 hover:border-rose-400/40 hover:shadow-[0_25px_60px_-10px_rgba(244,63,94,0.2)]"
                  >
                    {/* Top ambient accent glow */}
                    <div
                      className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${card.accentGlow} blur-3xl`}
                    />

                    {/* Card Header row */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-400/10 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-rose-400/30 bg-rose-500/15 text-lg shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                          {card.emoji}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] uppercase tracking-widest text-rose-300/60">
                              Part {card.tag}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-rose-400/40" />
                            <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-rose-300 border border-rose-400/20">
                              {card.badge}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg sm:text-xl font-light text-rose-100 tracking-tight mt-0.5">
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      {/* Interactive Heart Reaction button */}
                      <motion.button
                        type="button"
                        onClick={() => toggleLoveCard(card.id)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all duration-300 cursor-pointer ${
                          isLoved
                            ? "border border-rose-400/60 bg-rose-500/25 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                            : "border border-rose-400/20 bg-rose-950/30 text-rose-300/70 hover:border-rose-400/40 hover:text-rose-100"
                        }`}
                      >
                        <span className="text-sm">{isLoved ? "❤️" : "🤍"}</span>
                        <span>{isLoved ? "Felt Deeply" : "Touch"}</span>
                      </motion.button>
                    </div>

                    {/* Highlight Quote Box */}
                    <div className="relative z-10 mt-5 rounded-xl border border-rose-400/15 bg-gradient-to-r from-rose-950/30 via-purple-950/20 to-transparent p-3.5 sm:p-4">
                      <p className="font-serif text-sm sm:text-base italic text-rose-200/90 tracking-wide flex items-center gap-2">
                        <span className="text-rose-400/60 text-lg leading-none">“</span>
                        {card.quote}
                        <span className="text-rose-400/60 text-lg leading-none">”</span>
                      </p>
                    </div>

                    {/* Main Paragraph Body */}
                    <p className="relative z-10 mt-4 text-sm sm:text-base font-light text-rose-100/80 leading-relaxed sm:leading-loose">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* ────────────────────────────────────────────────────────
               LETTER VIEW: Elegant continuous illuminated scroll
            ──────────────────────────────────────────────────────── */
            <motion.div
              key="letter-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full overflow-hidden rounded-3xl border border-rose-400/30 bg-gradient-to-b from-[#180e25] via-[#12081d] to-[#180e26] p-7 sm:p-12 backdrop-blur-2xl shadow-[0_25px_65px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(244,63,94,0.15)]"
            >
              {/* Parchment border ornament lines */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-rose-400/15" />

              {/* Watermark badge */}
              <div className="flex flex-col items-center text-center mb-8 border-b border-rose-400/15 pb-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 to-pink-700 text-2xl shadow-[0_0_25px_rgba(244,63,94,0.5)] border border-rose-300/40 mb-3">
                  💌
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-300/70">
                  To My Dear Miss
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-rose-100 mt-1">
                  Everything I Hold In My Heart For You
                </h3>
              </div>

              {/* Letter Paragraphs */}
              <div className="flex flex-col gap-6 text-sm sm:text-base font-light text-rose-100/85 leading-relaxed sm:leading-loose max-w-2xl mx-auto">
                {cards.map((card, i) => (
                  <div key={card.id} className="relative">
                    <p>
                      {i === 0 && (
                        <span className="font-serif text-3xl sm:text-4xl text-rose-300 float-left mr-2 leading-none">
                          B
                        </span>
                      )}
                      {i === 0 ? card.text.slice(1) : card.text}
                    </p>
                    {i < cards.length - 1 && (
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

        {/* ── Grand Finale Climax Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16 w-full overflow-hidden rounded-3xl border border-rose-400/40 bg-gradient-to-b from-[#210e2d] via-[#160922] to-[#210e2e] p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(244,63,94,0.35),0_0_45px_rgba(244,63,94,0.18)]"
        >
          {/* Pulsing background sheen */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.25)_0%,transparent_70%)]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing icon */}
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 border-2 border-rose-300/50 shadow-[0_0_35px_rgba(244,63,94,0.6)]"
            >
              <span className="text-3xl sm:text-4xl">❤️</span>
            </motion.div>

            <p className="max-w-lg text-base sm:text-lg font-light text-rose-200/90 leading-relaxed">
              {closing.message}
            </p>

            {/* Giant declaration */}
            <div className="my-6">
              <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.5)]">
                &ldquo;{closing.declaration}&rdquo;
              </h3>
            </div>

            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-rose-400/50" />
              <span className="font-serif text-base sm:text-lg italic text-rose-300/90 tracking-wide">
                {closing.signature}
              </span>
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-rose-400/50" />
            </div>

            {/* Interactive "Send A Hug" Button */}
            <motion.button
              type="button"
              onClick={handleSendHug}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px 8px rgba(244,63,94,0.45)" }}
              whileTap={{ scale: 0.94 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-rose-300/40 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.45)] focus:outline-none cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2">
                <span>Send Umair A Warm Hug</span>
                <span>🫂❤️</span>
                {hugCount > 0 && (
                  <span className="ml-1 rounded-full bg-white/25 px-2 py-0.5 text-xs">
                    +{hugCount}
                  </span>
                )}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade transition into OurFuture starry night */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050713] to-transparent z-10" />
    </section>
  );
}
