"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { birthdayContent } from "@/data/birthday";
import { GiftBox } from "./GiftBox";

const BURST_HEARTS = [
  { id: 1, left: "15%", delay: 0.1, duration: 3.5, size: "text-2xl", symbol: "❤️" },
  { id: 2, left: "28%", delay: 0.4, duration: 4.2, size: "text-xl", symbol: "💖" },
  { id: 3, left: "42%", delay: 0.2, duration: 3.8, size: "text-3xl", symbol: "💕" },
  { id: 4, left: "58%", delay: 0.5, duration: 4.5, size: "text-2xl", symbol: "❤️" },
  { id: 5, left: "72%", delay: 0.3, duration: 3.6, size: "text-xl", symbol: "💖" },
  { id: 6, left: "85%", delay: 0.6, duration: 4.0, size: "text-3xl", symbol: "✨" },
  { id: 7, left: "20%", delay: 1.0, duration: 4.8, size: "text-lg", symbol: "✦" },
  { id: 8, left: "80%", delay: 0.9, duration: 4.2, size: "text-xl", symbol: "❤️" },
];

export function FinalSurprise() {
  const [opened, setOpened] = useState(false);
  const [showBurstGlow, setShowBurstGlow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { introWait, introForgot, boxBadge, buttonLabel, card } =
    birthdayContent.finalSurprise;

  const triggerGrandConfetti = () => {
    // Stage 1: Massive center blast
    confetti({
      particleCount: 120,
      spread: 110,
      origin: { y: 0.55 },
      colors: ["#ff4d6d", "#ff758f", "#ffd166", "#ffffff", "#f72585", "#ffb703"],
      disableForReducedMotion: true,
    });

    // Stage 2: Left and right angled bursts
    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 75,
        origin: { x: 0.1, y: 0.6 },
        colors: ["#ff4d6d", "#ffd166", "#ffffff", "#ff758f"],
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 75,
        origin: { x: 0.9, y: 0.6 },
        colors: ["#ff4d6d", "#ffd166", "#ffffff", "#ff758f"],
      });
    }, 250);

    // Stage 3: Gold stardust finale shower
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.4 },
        colors: ["#ffd166", "#ffb703", "#fff3b0", "#ffffff"],
        shapes: ["star"],
      });
    }, 550);
  };

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);
    setShowBurstGlow(true);
    triggerGrandConfetti();

    setTimeout(() => {
      setShowBurstGlow(false);
    }, 1200);

    setTimeout(() => {
      setShowMessage(true);
    }, 600);
  };

  const handleReset = () => {
    setOpened(false);
    setShowMessage(false);
    setShowBurstGlow(false);
  };

  return (
    <section
      id="final-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-12 sm:py-16 select-none"
    >
      {/* ── Giant Ambient Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: opened ? [1, 1.25, 1.1] : [1, 1.08, 1],
            opacity: opened ? [0.4, 0.7, 0.5] : [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[750px] h-[380px] sm:h-[750px] rounded-full bg-rose-600/10 blur-[160px]"
        />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[550px] h-[260px] rounded-full bg-amber-500/6 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070509_96%)]" />
      </div>

      {/* ── Massive Glow Burst on Open ── */}
      <AnimatePresence>
        {showBurstGlow && (
          <motion.div
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 3.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-amber-200 via-rose-400 to-pink-500 blur-3xl"
          />
        )}
      </AnimatePresence>

      {/* ── Floating Hearts Geyser (Active when opened) ── */}
      {opened && (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          {BURST_HEARTS.map((h) => (
            <motion.span
              key={h.id}
              style={{ left: h.left, bottom: "25%" }}
              className={`absolute ${h.size} text-rose-300/80 drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]`}
              animate={{
                y: [0, -260, -500],
                opacity: [0, 1, 0],
                scale: [0.6, 1.3, 0.8],
                x: [0, (h.id % 2 === 0 ? 1 : -1) * 30, 0],
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
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!showMessage ? (
            /* ── CLOSED / OPENING GIFT BOX STATE ── */
            <motion.div
              key="box-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88, filter: "blur(8px)", transition: { duration: 0.45 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* Suspense Header */}
              <div className="mb-6 sm:mb-8 flex flex-col items-center px-4">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                  className="font-serif text-xl sm:text-2xl font-light italic text-rose-300/60 tracking-wider mb-2"
                >
                  {introWait}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2 }}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.35)]"
                >
                  &ldquo;{introForgot}&rdquo;
                </motion.h2>

                <div className="mt-3 flex items-center justify-center gap-3">
                  <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-rose-400/40" />
                  <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-rose-300/70 font-light">
                    {boxBadge}
                  </span>
                  <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-rose-400/40" />
                </div>
              </div>

              {/* Large Gift Box */}
              <div className="mb-7">
                <GiftBox opened={opened} onOpen={handleOpen} />
              </div>

              {/* Open Button */}
              {!opened && (
                <motion.button
                  id="open-gift-btn"
                  type="button"
                  onClick={handleOpen}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 45px 10px rgba(244,63,94,0.5)",
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-rose-300/40 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-9 py-3.5 sm:px-11 sm:py-4 text-base sm:text-lg font-medium text-white shadow-[0_10px_40px_rgba(225,29,72,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <span className="relative z-10 tracking-wide">{buttonLabel}</span>
                  <motion.span
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 text-lg"
                  >
                    ✨
                  </motion.span>
                </motion.button>
              )}
            </motion.div>
          ) : (
            /* ── REVEALED GIFT MESSAGE CARD (NEVER CROPPED) ── */
            <motion.div
              key="card-view"
              initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg"
            >
              {/* Luxury Keepsake Card */}
              <div className="relative overflow-hidden rounded-3xl border border-rose-400/40 bg-gradient-to-b from-[#1b0f27] via-[#120a1c] to-[#180e24] p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_45px_rgba(244,63,94,0.25)] backdrop-blur-2xl">
                {/* Golden ambient halo */}
                <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-400/15 blur-[50px]" />

                {/* Opened Gift Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: [0, 1.25, 1], rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto mb-3 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 border-2 border-rose-300/50 shadow-[0_0_30px_rgba(244,63,94,0.6)]"
                >
                  <span className="text-2xl sm:text-3xl drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
                    🎁
                  </span>
                </motion.div>

                {/* Eyebrow */}
                <p className="text-[11px] uppercase tracking-[0.3em] text-rose-300/70 font-light mb-2">
                  {card.eyebrow}
                </p>

                {/* Card Title */}
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-tight bg-gradient-to-b from-white via-rose-100 to-rose-200 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(244,63,94,0.35)] mb-4">
                  {card.heading}
                </h3>

                {/* Message Body */}
                <div className="relative rounded-2xl border border-rose-400/20 bg-white/[0.025] p-5 sm:p-6 mb-5">
                  <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-100/90 text-center">
                    &ldquo;{card.message}&rdquo;
                  </p>
                </div>

                {/* Signature */}
                <div className="flex flex-col items-center mb-5">
                  <p className="font-serif text-lg sm:text-xl font-normal italic text-rose-200 drop-shadow-[0_0_12px_rgba(244,63,94,0.45)]">
                    {card.signature}
                  </p>
                </div>

                {/* Replay Option */}
                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-950/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-rose-200/80 hover:text-white hover:border-rose-400/60 hover:bg-rose-900/40 transition-all duration-300 cursor-pointer"
                >
                  <span>🎁</span>
                  <span>Close &amp; Replay</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
