"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import { triggerRomanticConfetti } from "../BirthdayReveal/Confetti";

type GiftId = typeof birthdayContent.chooseYourGift.options[number]["id"];

export function ChooseYourGift() {
  const [selectedId, setSelectedId] = useState<GiftId | null>(null);
  const { heading, subheading, options } = birthdayContent.chooseYourGift;

  const selectedGift = options.find((opt) => opt.id === selectedId);

  const handleSelect = (id: GiftId) => {
    setSelectedId(id);
    triggerRomanticConfetti();
  };

  const handleReset = () => {
    setSelectedId(null);
  };

  return (
    <section
      id="choose-gift-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[680px] h-[360px] sm:h-[680px] rounded-full bg-rose-600/10 blur-[150px]"
        />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[520px] h-[260px] rounded-full bg-pink-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#070509_96%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 flex flex-col items-center px-4"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              Birthday Surprise
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

        {/* Choice state / Revealed gift state */}
        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!selectedGift ? (
              /* ── 3 GIFT BUTTONS ── */
              <motion.div
                key="gift-buttons"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.92, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg"
              >
                {options.map((opt, idx) => (
                  <motion.button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(opt.id)}
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + idx * 0.1,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      boxShadow: "0 0 35px 8px rgba(244,63,94,0.4)",
                    }}
                    whileTap={{ scale: 0.94 }}
                    className="group relative flex flex-1 w-full sm:w-auto flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-rose-400/30 bg-gradient-to-b from-[#180f24] via-[#120a1b] to-[#1a0f27] px-8 py-7 sm:py-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.85),0_0_20px_rgba(244,63,94,0.1)] backdrop-blur-xl transition-colors duration-300 hover:border-rose-400/60 cursor-pointer"
                  >
                    {/* Hover light beam */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                    {/* Animated Gift Box Icon */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                      className="text-4xl sm:text-5xl drop-shadow-[0_4px_15px_rgba(244,63,94,0.35)]"
                    >
                      🎁
                    </motion.div>

                    {/* Button Label */}
                    <span className="relative z-10 font-serif text-xl sm:text-2xl font-medium tracking-wide text-rose-100 group-hover:text-white transition-colors duration-200">
                      {opt.label}
                    </span>

                    <span className="text-[11px] uppercase tracking-widest text-rose-300/50 font-light">
                      Tap to open
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              /* ── REVEALED GIFT MESSAGE ── */
              <motion.div
                key="revealed-gift"
                initial={{ opacity: 0, scale: 0.88, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-lg"
              >
                {/* Floating mini hearts above opened gift */}
                <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 flex gap-3 text-lg">
                  {[0, 0.15, 0.3].map((d, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.5 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -35],
                        scale: [0.8, 1.3, 1],
                      }}
                      transition={{
                        delay: d,
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                    >
                      ❤
                    </motion.span>
                  ))}
                </div>

                {/* Gift card box */}
                <div className="relative overflow-hidden rounded-3xl border border-rose-400/40 bg-gradient-to-b from-[#1b0f27] via-[#120a1c] to-[#180e24] p-7 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(244,63,94,0.22)] backdrop-blur-xl">
                  {/* Subtle inner glow */}
                  <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-rose-500/15 blur-[40px]" />

                  {/* Chosen Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/15 px-4 py-1.5 text-xs uppercase tracking-widest text-rose-200">
                    <span>You Chose</span>
                    <span className="font-semibold text-white">{selectedGift.label}</span>
                  </div>

                  {/* Big emoji emblem */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: [0, 1.25, 1], rotate: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="my-3 text-5xl sm:text-6xl drop-shadow-[0_4px_25px_rgba(244,63,94,0.5)]"
                  >
                    {selectedGift.emoji}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-light italic text-rose-50 drop-shadow-[0_2px_15px_rgba(244,63,94,0.3)] mb-4">
                    {selectedGift.title}
                  </h3>

                  {/* Message */}
                  <div className="relative rounded-2xl border border-rose-400/20 bg-white/[0.02] p-5 sm:p-6 mb-6">
                    <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-100/90">
                      &ldquo;{selectedGift.message}&rdquo;
                    </p>
                  </div>

                  {/* Reset/Change Choice Button */}
                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-950/40 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-rose-200/80 hover:text-white hover:border-rose-400/60 hover:bg-rose-900/40 transition-all duration-300 cursor-pointer"
                  >
                    <span>🔄</span>
                    <span>Change your choice</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
