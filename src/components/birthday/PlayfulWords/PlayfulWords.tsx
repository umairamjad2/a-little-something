"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

export function PlayfulWords() {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const { heading, subheading, cards } = birthdayContent.playfulWords;

  const toggleCard = (id: number) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="playful-words-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-20 sm:py-28 select-none overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[640px] h-[380px] sm:h-[640px] rounded-full bg-pink-600/10 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[15%] right-1/4 w-[260px] sm:w-[420px] h-[260px] rounded-full bg-rose-500/8 blur-[130px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070509_95%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 flex flex-col items-center text-center px-4"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-pink-400/50" />
            <span className="text-xs sm:text-sm tracking-[0.28em] uppercase text-pink-300/60 font-light">
              Your Little Words
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-pink-400/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-pink-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)]">
            {heading}
          </h2>

          <p className="mt-4 max-w-lg text-sm sm:text-base text-rose-200/55 font-light leading-relaxed">
            {subheading}
          </p>

          {/* Tap hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-pink-300/40 font-light"
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400/60"
            />
            <span>Tap a card to reveal</span>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, idx) => {
            const isFlipped = flippedIds.includes(card.id);

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.85,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ perspective: "900px" }}
                className="relative h-[220px] sm:h-[240px]"
              >
                <motion.button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  whileHover={!isFlipped ? { y: -5, scale: 1.02 } : { scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full cursor-pointer"
                  aria-label={`Playful word card ${card.id}`}
                >
                  {/* FRONT FACE */}
                  <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute inset-0 rounded-2xl border border-pink-400/20 bg-gradient-to-b from-[#150c20]/90 via-[#0f0818]/90 to-[#130a1e]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-500/5 rounded-2xl" />

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="rounded-full border border-pink-400/25 bg-pink-950/40 px-3 py-1 text-[10px] tracking-wider uppercase text-pink-300/70 font-light">
                        #{String(card.id).padStart(2, "0")}
                      </span>
                      <motion.span
                        animate={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.4 }}
                        className="text-2xl sm:text-3xl drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]"
                      >
                        {card.emoji}
                      </motion.span>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
                      <p className="font-serif text-xl sm:text-2xl font-light italic text-pink-100/90 leading-snug drop-shadow-[0_2px_16px_rgba(244,63,94,0.3)]">
                        &ldquo;{card.phrase}&rdquo;
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-pink-300/45 font-light">
                      <motion.span
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.3 }}
                        className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400/50"
                      />
                      <span>tap to reveal the feeling</span>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    className="absolute inset-0 rounded-2xl border border-pink-400/50 bg-gradient-to-b from-[#1e1030] via-[#160b28] to-[#1c1030] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_-10px_rgba(244,63,94,0.3),0_0_35px_rgba(244,63,94,0.12)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/8 via-transparent to-rose-400/8 rounded-2xl" />

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="rounded-full border border-pink-400/40 bg-pink-500/20 px-3 py-1 text-[10px] tracking-wider uppercase text-pink-200 font-medium">
                        #{String(card.id).padStart(2, "0")}
                      </span>
                      <AnimatePresence>
                        {isFlipped && (
                          <motion.span
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: [0, 1.3, 1], rotate: 0 }}
                            transition={{ duration: 0.45, ease: "backOut" }}
                            className="text-xl sm:text-2xl"
                          >
                            💌
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
                      <p className="font-serif text-sm sm:text-base font-light italic leading-relaxed text-rose-50 drop-shadow-[0_2px_12px_rgba(244,63,94,0.3)]">
                        &ldquo;{card.message}&rdquo;
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[10px] text-pink-300/45 font-light">
                      <span className="uppercase tracking-widest">tap to flip back</span>
                      <span className="text-rose-400/60">❤</span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
