"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", size: 3, delay: 0.2, duration: 5.8 },
  { left: "78%", top: "14%", size: 4, delay: 1.1, duration: 7.2 },
  { left: "90%", top: "54%", size: 2, delay: 0.5, duration: 6.4 },
  { left: "8%", top: "69%", size: 3, delay: 1.8, duration: 7.8 },
  { left: "68%", top: "82%", size: 3, delay: 0.9, duration: 5.4 },
  { left: "32%", top: "88%", size: 2, delay: 2.3, duration: 6.7 },
] as const;

export function SecretOpening({ onContinue }: { onContinue: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      id="secret-opening-section"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/12 blur-[110px] sm:h-[620px] sm:w-[620px] sm:blur-[150px]" />
        <div className="absolute left-1/2 top-[16%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-pink-500/8 blur-[100px] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#070509_95%)]" />
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-rose-100/70 shadow-[0_0_12px_3px_rgba(253,164,175,0.35)]"
            style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
            animate={{ opacity: [0.15, 0.75, 0.15], y: [0, -14, 0], scale: [0.85, 1.15, 0.85] }}
            transition={{ delay: particle.delay, duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex items-center gap-3 text-rose-300/60"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-rose-400/40" />
          <span className="text-xs font-light uppercase tracking-[0.32em]">Just for you</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-rose-400/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(7px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl font-light tracking-tight text-transparent bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/90 bg-clip-text drop-shadow-[0_4px_30px_rgba(244,63,94,0.25)] sm:text-7xl"
        >
          Hey...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-sm text-lg font-light leading-relaxed tracking-wide text-rose-200/85 sm:mt-8 sm:text-2xl"
        >
          I need you to do something for me.
        </motion.p>

        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.button
              key="question"
              type="button"
              onClick={() => setIsRevealed(true)}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px 6px rgba(244, 63, 94, 0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-rose-300/35 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 text-base font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] sm:mt-12 sm:px-10 sm:py-4 sm:text-lg"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
              <span className="relative">What? 👀</span>
            </motion.button>
          ) : (
            <motion.div
              key="continue"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-center sm:mt-12"
            >
              <motion.p
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-serif text-3xl font-light italic text-rose-100/95 sm:text-4xl"
              >
                Keep going...
              </motion.p>
              <motion.button
                type="button"
                onClick={onContinue}
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px 6px rgba(244, 63, 94, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="group relative mt-7 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-rose-300/35 bg-rose-950/65 px-7 py-3 text-sm font-medium tracking-wide text-rose-100 shadow-[0_8px_30px_rgba(225,29,72,0.2)] backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] sm:px-8 sm:text-base"
              >
                <span>Continue</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
