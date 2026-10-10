"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

export function ThingsYouDontKnow() {
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const { heading, subheading, cards } = birthdayContent.thingsYouDontKnow;

  const toggleCard = (id: number) => {
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="things-you-dont-know-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-rose-600/8 blur-[140px]"
        />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[260px] rounded-full bg-pink-500/6 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#070509_96%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center px-4"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              Little Secrets
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
            {heading}
          </h2>

          <p className="mt-3 max-w-md text-sm sm:text-base text-rose-200/60 font-light leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
          {cards.map((card, idx) => {
            const isRevealed = revealedIds.includes(card.id);
            const isFifthOnLg = idx === 4;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex ${isFifthOnLg ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`relative w-full min-h-[190px] sm:min-h-[210px] rounded-2xl border p-6 sm:p-7 text-left transition-colors duration-500 cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
                    isRevealed
                      ? "border-rose-400/50 bg-gradient-to-b from-[#1d1026] via-[#140a1d] to-[#1c0f27] shadow-[0_15px_40px_-10px_rgba(244,63,94,0.25),0_0_30px_rgba(244,63,94,0.12)]"
                      : "border-rose-400/20 bg-gradient-to-b from-[#140c1c]/90 via-[#0e0714]/90 to-[#120a1a]/90 hover:border-rose-400/40 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(244,63,94,0.1)]"
                  }`}
                >
                  {/* Subtle shimmer sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5" />

                  <AnimatePresence mode="wait" initial={false}>
                    {!isRevealed ? (
                      /* ── UNREVEALED FRONT FACE ── */
                      <motion.div
                        key="front"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="relative z-10 flex flex-col justify-between h-full w-full gap-4"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="rounded-full border border-rose-400/25 bg-rose-950/40 px-3 py-1 text-xs tracking-wider uppercase text-rose-300/80 font-light">
                            {card.title}
                          </span>
                          <span className="text-xl sm:text-2xl drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]">
                            {card.emoji}
                          </span>
                        </div>

                        <div className="py-2">
                          <p className="font-serif text-lg sm:text-xl font-light italic text-rose-100/70">
                            A little secret just between us...
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-rose-300/60 font-light">
                          <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block h-1.5 w-1.5 rounded-full bg-rose-400"
                          />
                          <span>{card.hint}</span>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── REVEALED BACK / MESSAGE FACE ── */
                      <motion.div
                        key="back"
                        initial={{ opacity: 0, scale: 0.96, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex flex-col justify-between h-full w-full gap-4"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="rounded-full border border-rose-400/40 bg-rose-500/20 px-3 py-1 text-xs tracking-wider uppercase text-rose-200 font-medium">
                            {card.title}
                          </span>
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.3, 1] }}
                            transition={{ duration: 0.5 }}
                            className="text-xl sm:text-2xl"
                          >
                            💌
                          </motion.span>
                        </div>

                        <div className="py-1">
                          <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-50 drop-shadow-[0_2px_12px_rgba(244,63,94,0.25)]">
                            &ldquo;{card.message}&rdquo;
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs text-rose-300/50 font-light">
                          <span className="tracking-widest uppercase text-[10px]">
                            tap to hide
                          </span>
                          <span className="text-rose-400/70">❤</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
