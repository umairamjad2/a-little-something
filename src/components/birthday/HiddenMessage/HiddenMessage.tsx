"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import { triggerRomanticConfetti } from "../BirthdayReveal/Confetti";

export function HiddenMessage() {
  const [clickedIds, setClickedIds] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const {
    heading,
    hint,
    successHeading,
    clue,
    hearts,
    sequence,
    secretMessage,
  } = birthdayContent.hiddenMessage;

  const handleHeartClick = (id: string) => {
    if (isUnlocked || isWrong) return;

    // Check if this id matches the next expected id in the sequence
    const expectedId = sequence[clickedIds.length];

    if (id === expectedId) {
      const nextClicked = [...clickedIds, id];
      setClickedIds(nextClicked);

      // Check if puzzle is solved
      if (nextClicked.length === sequence.length) {
        setIsUnlocked(true);
        triggerRomanticConfetti();
      }
    } else {
      // Wrong heart clicked — gentle shake & soft reset
      setIsWrong(true);
      setTimeout(() => {
        setClickedIds([]);
        setIsWrong(false);
      }, 600);
    }
  };

  const handleReset = () => {
    setClickedIds([]);
    setIsUnlocked(false);
    setIsWrong(false);
  };

  return (
    <section
      id="hidden-message-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[700px] h-[380px] sm:h-[700px] rounded-full bg-rose-600/10 blur-[150px]"
        />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[250px] rounded-full bg-pink-500/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#070509_96%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex flex-col items-center px-4"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              Secret Keepsake
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
            {isUnlocked ? successHeading : heading}
          </h2>

          <p className="mt-3 max-w-md text-sm sm:text-base text-rose-200/60 font-light leading-relaxed">
            {isUnlocked
              ? "The lock has opened. Here is what was hidden inside..."
              : `${hint} (${clue})`}
          </p>
        </motion.div>

        {/* Puzzle / Secret Message Display */}
        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              /* ── PUZZLE INTERACTION ── */
              <motion.div
                key="puzzle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center w-full gap-8"
              >
                {/* Progress Slots Indicator */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {sequence.map((seqId, i) => {
                    const isFilled = i < clickedIds.length;
                    const letter = hearts.find((h) => h.id === seqId)?.letter;

                    return (
                      <motion.div
                        key={seqId}
                        animate={{
                          scale: isFilled ? [1, 1.2, 1] : 1,
                          borderColor: isFilled
                            ? "rgba(244, 63, 94, 0.8)"
                            : "rgba(244, 63, 94, 0.2)",
                        }}
                        transition={{ duration: 0.3 }}
                        className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-2xl border font-serif text-lg sm:text-xl font-medium transition-all duration-300 ${
                          isFilled
                            ? "bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                            : "bg-white/[0.03] text-rose-300/30"
                        }`}
                      >
                        {isFilled ? letter : "•"}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Heart Buttons Row */}
                <motion.div
                  animate={isWrong ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 w-full max-w-lg"
                >
                  {hearts.map((h, index) => {
                    const isSelected = clickedIds.includes(h.id);

                    return (
                      <motion.button
                        key={h.id}
                        type="button"
                        onClick={() => handleHeartClick(h.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + index * 0.1,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -4,
                          boxShadow: "0 0 30px 6px rgba(244,63,94,0.4)",
                        }}
                        whileTap={{ scale: 0.92 }}
                        className={`group relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-xl ${
                          isSelected
                            ? "border-rose-400 bg-gradient-to-b from-rose-900/60 to-rose-950/80 shadow-[0_0_25px_rgba(244,63,94,0.5)]"
                            : "border-rose-400/25 bg-gradient-to-b from-[#180f24] via-[#120a1b] to-[#1a0f27] hover:border-rose-400/50"
                        }`}
                      >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                        {/* Heart symbol */}
                        <motion.span
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            delay: index * 0.25,
                            ease: "easeInOut",
                          }}
                          className="text-3xl sm:text-4xl drop-shadow-[0_2px_12px_rgba(244,63,94,0.4)]"
                        >
                          {h.symbol}
                        </motion.span>

                        {/* Letter & Number */}
                        <span className="font-serif text-xl sm:text-2xl font-medium text-rose-100 group-hover:text-white transition-colors duration-200">
                          {h.letter}
                        </span>

                        <span className="text-[10px] uppercase tracking-widest text-rose-300/50 font-light">
                          {h.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Subtitle helper */}
                <p className="text-xs tracking-wider uppercase text-rose-300/40 font-light">
                  {isWrong
                    ? "Almost! Let's try once more 💕"
                    : "Tap in sequence to unlock"}
                </p>
              </motion.div>
            ) : (
              /* ── REVEALED SECRET MESSAGE ── */
              <motion.div
                key="secret"
                initial={{ opacity: 0, scale: 0.9, y: 35, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-lg"
              >
                {/* Floating ambient hearts */}
                <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 flex gap-4 text-xl">
                  {[0, 0.2, 0.4].map((d, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        opacity: [0, 1, 0],
                        y: [0, -30],
                        scale: [0.8, 1.3, 1],
                      }}
                      transition={{
                        delay: d,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                    >
                      ❤
                    </motion.span>
                  ))}
                </div>

                {/* Secret Keepsake Card */}
                <div className="relative overflow-hidden rounded-3xl border border-rose-400/40 bg-gradient-to-b from-[#1b0f27] via-[#120a1c] to-[#180e24] p-7 sm:p-10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(244,63,94,0.25)] backdrop-blur-xl">
                  {/* Wax Seal / Key Emblem */}
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: [0, 1.2, 1], rotate: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 border border-rose-300/50 shadow-lg shadow-rose-950/70"
                  >
                    <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                      🔑
                    </span>
                  </motion.div>

                  {/* Eyebrow */}
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-300/70 font-light mb-2">
                    {secretMessage.eyebrow}
                  </p>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-light italic text-rose-50 drop-shadow-[0_2px_15px_rgba(244,63,94,0.3)] mb-5">
                    {secretMessage.title}
                  </h3>

                  {/* Secret Body Text */}
                  <div className="relative rounded-2xl border border-rose-400/20 bg-white/[0.02] p-6 sm:p-7 mb-6">
                    <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-100/90 text-center">
                      &ldquo;{secretMessage.body}&rdquo;
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="flex flex-col items-center mb-6">
                    <p className="font-serif text-lg sm:text-xl font-normal italic text-rose-200 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                      {secretMessage.signature}
                    </p>
                  </div>

                  {/* Lock again button */}
                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-950/40 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-rose-200/80 hover:text-white hover:border-rose-400/60 hover:bg-rose-900/40 transition-all duration-300 cursor-pointer"
                  >
                    <span>🔒</span>
                    <span>Lock message again</span>
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
