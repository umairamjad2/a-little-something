"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const floatingDetails = [
  { left: "15%", top: "20%", delay: 0.2, duration: 6.4, symbol: "✦", size: "text-xs" },
  { left: "82%", top: "18%", delay: 1.3, duration: 7.1, symbol: "♥", size: "text-sm" },
  { left: "91%", top: "60%", delay: 0.7, duration: 5.8, symbol: "·", size: "text-xl" },
  { left: "9%", top: "70%", delay: 1.8, duration: 7.5, symbol: "♥", size: "text-xs" },
  { left: "69%", top: "82%", delay: 0.4, duration: 6.2, symbol: "✦", size: "text-sm" },
  { left: "31%", top: "88%", delay: 2.1, duration: 6.8, symbol: "·", size: "text-xl" },
] as const;

export const WaitMoment = forwardRef<HTMLElement, { onContinue: () => void }>(function WaitMoment({ onContinue }, ref) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handlePromise = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    window.setTimeout(onContinue, 850);
  };

  return (
    <section
      ref={ref}
      id="wait-moment-section"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/10 blur-[115px] sm:h-[600px] sm:w-[600px] sm:blur-[160px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#070509_95%)]" />
        {floatingDetails.map((detail, index) => (
          <motion.span
            key={index}
            className={`absolute ${detail.size} text-rose-300/55 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]`}
            style={{ left: detail.left, top: detail.top }}
            animate={{ opacity: [0.12, 0.72, 0.12], y: [0, -16, 0], rotate: [-5, 5, -5] }}
            transition={{ delay: detail.delay, duration: detail.duration, repeat: Infinity, ease: "easeInOut" }}
          >
            {detail.symbol}
          </motion.span>
        ))}
      </div>

      <motion.div
        animate={isLeaving ? { opacity: 0, scale: 1.12, filter: "blur(9px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex w-full max-w-xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl font-light tracking-tight text-transparent bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/90 bg-clip-text drop-shadow-[0_4px_30px_rgba(244,63,94,0.25)] sm:text-7xl"
        >
          Wait...
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg font-light tracking-wide text-rose-200/80 sm:mt-8 sm:text-2xl"
        >
          Before you continue...
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center sm:mt-11"
        >
          <motion.p
            animate={{ scale: [1, 1.03, 1, 1.02, 1] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif text-2xl font-light italic leading-relaxed text-rose-100/95 sm:text-4xl"
          >
            Promise you&apos;ll smile? <span className="not-italic">❤️</span>
          </motion.p>
          <motion.button
            type="button"
            onClick={handlePromise}
            disabled={isLeaving}
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px 6px rgba(244, 63, 94, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-rose-300/35 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 text-base font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] disabled:pointer-events-none sm:px-10 sm:py-4 sm:text-lg"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
            <span className="relative">I promise ❤️</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});
