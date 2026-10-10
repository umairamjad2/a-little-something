"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayContent } from "@/data/birthday";
import { triggerRomanticConfetti } from "../BirthdayReveal/Confetti";

type ButtonId = typeof birthdayContent.doYouRemember.buttons[number]["id"];

export function DoYouRemember() {
  const [chosen, setChosen] = useState<ButtonId | null>(null);
  const { question, buttons } = birthdayContent.doYouRemember;
  const response = chosen ? buttons.find((b) => b.id === chosen)!.response : null;

  const handleSelect = (id: ButtonId) => {
    setChosen(id);
    triggerRomanticConfetti();
  };

  const reset = () => setChosen(null);

  return (
    <section
      id="do-you-remember-section"
      className="relative flex min-h-[75vh] sm:min-h-screen w-full flex-col items-center justify-center bg-[#070509] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] rounded-full bg-rose-600/10 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#070509_98%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center gap-10">

        <AnimatePresence mode="wait">
          {!chosen ? (
            /* ── Question state ── */
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.96, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-10"
            >
              {/* Decorative accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-rose-300/40"
              >
                <span className="h-[1px] w-8 bg-rose-400/25" />
                <motion.span
                  animate={{ scale: [1, 1.3, 1, 1.2, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-rose-400/60 text-sm"
                >
                  ❤
                </motion.span>
                <span className="h-[1px] w-8 bg-rose-400/25" />
              </motion.div>

              {/* Question */}
              <motion.p
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic leading-relaxed text-rose-50/95 drop-shadow-[0_2px_20px_rgba(244,63,94,0.15)]"
              >
                {question}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                {buttons.map((btn, i) => (
                  <motion.button
                    key={btn.id}
                    type="button"
                    onClick={() => handleSelect(btn.id)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: "0 0 35px 6px rgba(244,63,94,0.45)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-rose-300/35 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-medium text-white shadow-[0_8px_30px_rgba(225,29,72,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509] cursor-pointer"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    <span className="relative z-10 tracking-wide">{btn.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            /* ── Response state ── */
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-7"
            >
              {/* Big emoji */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]"
              >
                {response!.emoji}
              </motion.div>

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/80 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(244,63,94,0.3)]"
              >
                {response!.heading}
              </motion.h3>

              {/* Message card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl border border-rose-500/20 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-md px-7 py-7 sm:px-10 sm:py-8 shadow-xl shadow-black/40 max-w-md"
              >
                {/* Wax seal */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-pink-800 border border-rose-300/40 shadow-lg shadow-rose-950/60">
                  <span className="text-sm drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">💌</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/8 via-transparent to-transparent pointer-events-none" />
                <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-100/85 text-center mt-2">
                  {response!.message}
                </p>

                {/* Hearts row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 flex justify-center gap-2"
                >
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.span
                      key={i}
                      animate={{ scale: [1, 1.3, 1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
                      className="text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)] text-sm"
                    >
                      ❤
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Reset button */}
              <motion.button
                type="button"
                onClick={reset}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-1 text-xs uppercase tracking-[0.25em] text-rose-300/40 hover:text-rose-300/70 transition-colors duration-300 font-light cursor-pointer"
              >
                ↩ ask me again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
