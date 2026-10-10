"use client";

import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

// Peaceful floating hearts with slow, gentle movement
const TRANQUIL_HEARTS = [
  { id: 1, left: "12%", delay: 0.2, duration: 8.5, symbol: "❤", size: "text-sm", opacity: 0.35 },
  { id: 2, left: "26%", delay: 2.1, duration: 9.8, symbol: "✦", size: "text-xs", opacity: 0.25 },
  { id: 3, left: "45%", delay: 1.2, duration: 11.0, symbol: "❤", size: "text-base", opacity: 0.4 },
  { id: 4, left: "62%", delay: 3.0, duration: 9.0, symbol: "✧", size: "text-xs", opacity: 0.3 },
  { id: 5, left: "78%", delay: 0.8, duration: 10.2, symbol: "❤", size: "text-sm", opacity: 0.35 },
  { id: 6, left: "88%", delay: 2.5, duration: 8.8, symbol: "✦", size: "text-xs", opacity: 0.25 },
  { id: 7, left: "18%", delay: 4.0, duration: 10.5, symbol: "✧", size: "text-xs", opacity: 0.3 },
  { id: 8, left: "70%", delay: 4.5, duration: 9.4, symbol: "❤", size: "text-xs", opacity: 0.35 },
];

export function ClosingEnding() {
  const { heading, message, signoff, senderName } = birthdayContent.ending;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const mainContainer = document.querySelector(".snap-y");
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="closing-ending-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#050407] px-4 sm:px-6 py-20 sm:py-32 select-none"
    >
      {/* ── Soft, Peaceful Ambient Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[750px] h-[380px] sm:h-[750px] rounded-full bg-rose-600/7 blur-[170px]"
        />
        <motion.div
          animate={{ scale: [1.06, 1, 1.06], opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[580px] h-[260px] rounded-full bg-amber-500/5 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050407_98%)]" />

        {/* ── Floating Tranquil Hearts & Dust Motes ── */}
        {TRANQUIL_HEARTS.map((h) => (
          <motion.span
            key={h.id}
            style={{ left: h.left, bottom: "5%" }}
            className={`absolute ${h.size} text-rose-300 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]`}
            animate={{
              y: [0, -320, -580],
              opacity: [0, h.opacity, 0],
              scale: [0.8, 1.15, 0.9],
              x: [0, (h.id % 2 === 0 ? 1 : -1) * 25, 0],
            }}
            transition={{
              delay: h.delay,
              duration: h.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {h.symbol}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* ── Sacred Heart Accent ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.16, 1, 1.1, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-rose-500/10 border border-rose-300/30 shadow-[0_0_25px_rgba(244,63,94,0.3)] text-xl sm:text-2xl"
          >
            ❤️
          </motion.div>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-rose-400/30" />
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-rose-300/60 font-light">
              Always &amp; Forever
            </span>
            <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-rose-400/30" />
          </div>
        </motion.div>

        {/* ── Main Heading: "Happy Birthday, My Love. ❤️" ── */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light italic tracking-tight bg-gradient-to-b from-white via-rose-100 to-rose-200/90 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)] leading-tight mb-8 sm:mb-10"
        >
          {heading}
        </motion.h2>

        {/* ── Final Personal Message ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl px-4 sm:px-6 mb-12 sm:mb-16"
        >
          <p className="font-serif text-lg sm:text-2xl md:text-2xl font-light italic leading-relaxed sm:leading-[2] text-rose-100/80 drop-shadow-[0_2px_15px_rgba(244,63,94,0.15)]">
            &ldquo;{message}&rdquo;
          </p>
        </motion.div>

        {/* ── Signature Block ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-2 mb-16 sm:mb-20"
        >
          <p className="font-serif text-sm sm:text-base font-light italic text-rose-300/70 tracking-widest uppercase text-xs">
            {signoff}
          </p>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic text-rose-200 drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]">
            {senderName}
          </p>
        </motion.div>

        {/* ── Subtle Replay / Back to Beginning ── */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-300/40 hover:text-rose-200 transition-colors duration-500 font-light cursor-pointer border border-rose-400/15 rounded-full px-5 py-2.5 bg-white/[0.015]"
        >
          <span>↑</span>
          <span>Return to beginning</span>
        </motion.button>
      </div>
    </section>
  );
}
