"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

const floatingLetterParticles = [
  { id: 1, left: "8%", delay: 0.1, duration: 5.0, symbol: "❤", size: "text-sm" },
  { id: 2, left: "22%", delay: 0.9, duration: 5.8, symbol: "✦", size: "text-xs" },
  { id: 3, left: "78%", delay: 0.4, duration: 5.2, symbol: "❤", size: "text-xs" },
  { id: 4, left: "92%", delay: 1.3, duration: 6.0, symbol: "✦", size: "text-sm" },
  { id: 5, left: "14%", delay: 2.0, duration: 6.5, symbol: "✧", size: "text-xs" },
  { id: 6, left: "86%", delay: 1.7, duration: 5.4, symbol: "❤", size: "text-base" },
  { id: 7, left: "4%", delay: 0.7, duration: 6.2, symbol: "✦", size: "text-xs" },
  { id: 8, left: "96%", delay: 2.4, duration: 4.8, symbol: "❤", size: "text-xs" },
];

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const { tagline, salutation, paragraphs, closing, signature } = birthdayContent.letter;

  return (
    <section
      id="letter-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient romantic lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[620px] rounded-full bg-rose-600/10 blur-[150px]"
        />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] h-[250px] rounded-full bg-pink-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#070509_96%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* Section title header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex flex-col items-center text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              Words From The Heart
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
            A Letter For You
          </h2>
        </motion.div>

        {/* Envelope & Letter Container */}
        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* ── CLOSED ENVELOPE STATE ── */
              <motion.div
                key="envelope-closed"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -20,
                  filter: "blur(6px)",
                  transition: { duration: 0.5 },
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md sm:max-w-lg"
              >
                {/* Envelope outer card */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-rose-400/30 bg-gradient-to-b from-[#180f24] via-[#120a1c] to-[#1a0f26] p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(244,63,94,0.18)] backdrop-blur-xl flex flex-col items-center text-center">
                  {/* Decorative envelope fold lines */}
                  <div className="pointer-events-none absolute inset-0 opacity-25">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <line x1="0" y1="0" x2="50" y2="45" stroke="#f43f5e" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="100" y1="0" x2="50" y2="45" stroke="#f43f5e" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="0" y1="100" x2="50" y2="55" stroke="#f43f5e" strokeWidth="0.5" />
                      <line x1="100" y1="100" x2="50" y2="55" stroke="#f43f5e" strokeWidth="0.5" />
                    </svg>
                  </div>

                  {/* Wax Seal Badge with Pulsing 💌 */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 mb-6 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 border-2 border-rose-300/50 shadow-[0_0_30px_rgba(244,63,94,0.5),0_10px_20px_rgba(0,0,0,0.6)]"
                  >
                    <span className="text-3xl sm:text-4xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
                      💌
                    </span>
                  </motion.div>

                  {/* Envelope Tagline */}
                  <h3 className="relative z-10 font-serif text-2xl sm:text-3xl font-light italic text-rose-100 tracking-wide drop-shadow-[0_2px_15px_rgba(244,63,94,0.3)]">
                    &ldquo;{tagline}&rdquo;
                  </h3>

                  <p className="relative z-10 mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-rose-300/60 font-light">
                    Sealed with love &amp; care
                  </p>

                  {/* Open Button */}
                  <motion.button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: "0 0 35px 8px rgba(244,63,94,0.45)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative z-10 mt-8 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-rose-300/40 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] cursor-pointer"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                    <span className="relative z-10 tracking-wide flex items-center gap-2">
                      Open Letter 💌
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* ── REVEALED LETTER STATE ── */
              <motion.div
                key="letter-opened"
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl sm:max-w-2xl"
              >
                {/* Floating ambient particles / hearts */}
                <div className="pointer-events-none absolute -inset-10 z-20 overflow-visible">
                  {floatingLetterParticles.map((p) => (
                    <motion.span
                      key={p.id}
                      style={{ left: p.left, bottom: "10%" }}
                      className={`absolute ${p.size} text-rose-300/60 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]`}
                      animate={{
                        y: [0, -180, -320],
                        opacity: [0, 0.85, 0],
                        scale: [0.8, 1.2, 0.9],
                        x: [0, (p.id % 2 === 0 ? 1 : -1) * 20, 0],
                      }}
                      transition={{
                        delay: p.delay,
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {p.symbol}
                    </motion.span>
                  ))}
                </div>

                {/* The Revealed Letter Card */}
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#180f24] via-[#120a1a] to-[#160d21] p-6 sm:p-12 border border-rose-400/35 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(244,63,94,0.2)] backdrop-blur-xl">
                  {/* Parchment inner frame */}
                  <div className="relative rounded-xl sm:rounded-2xl border border-rose-400/20 p-6 sm:p-10 bg-white/[0.02]">
                    {/* Top wax seal emblem */}
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute -top-5 sm:-top-6 right-6 sm:right-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 border border-rose-300/50 shadow-lg shadow-rose-950/70"
                    >
                      <span className="text-base sm:text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
                        💌
                      </span>
                    </motion.div>

                    {/* Salutation */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="mb-6 sm:mb-8"
                    >
                      <p className="font-serif text-2xl sm:text-3xl font-normal italic text-rose-200 tracking-wide">
                        {salutation}
                      </p>
                    </motion.div>

                    {/* Staggered Paragraphs */}
                    <div className="space-y-5 sm:space-y-6 font-serif text-base sm:text-lg md:text-xl font-light italic leading-relaxed sm:leading-[1.8] text-rose-100/90">
                      {paragraphs.map((p, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.45 + idx * 0.2,
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          {p}
                        </motion.p>
                      ))}
                    </div>

                    {/* Closing & Signature */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + paragraphs.length * 0.2,
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="mt-8 sm:mt-12 flex flex-col items-end text-right"
                    >
                      <p className="font-serif text-sm sm:text-base font-light text-rose-300/80">
                        {closing}
                      </p>
                      <p className="mt-1 font-serif text-xl sm:text-2xl font-normal italic text-rose-200 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                        {signature}
                      </p>
                    </motion.div>
                  </div>

                  {/* Seal again / close button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="mt-6 flex justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-xs uppercase tracking-[0.25em] text-rose-300/40 hover:text-rose-300/75 transition-colors duration-300 font-light cursor-pointer"
                    >
                      ✉ Seal Letter Again
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
