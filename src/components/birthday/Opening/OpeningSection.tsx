"use client";

import { motion } from "framer-motion";
import type { FloatingItem } from "@/data/birthday";
import { birthdayContent } from "@/data/birthday";
import { FloatingHearts } from "../BirthdayReveal/FloatingHearts";
import { OpeningButton } from "./OpeningButton";

type OpeningSectionProps = { items: FloatingItem[]; isOpenClicked: boolean; onOpen: () => void; onScrollToReveal: () => void };

export function OpeningSection({ items, isOpenClicked, onOpen, onScrollToReveal }: OpeningSectionProps) {
  return <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#070509] px-4 sm:px-6 pb-20 pt-12 select-none" id="opening-section">
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] md:w-[720px] h-[340px] sm:h-[560px] md:h-[720px] rounded-full bg-rose-600/10 blur-[90px] sm:blur-[140px] animate-pulse-slow" /><div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] rounded-full bg-pink-500/8 blur-[100px] pointer-events-none" /><div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[220px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070509_95%)]" /></div>
    <FloatingHearts items={items} variant="opening" />
    <div className="relative z-20 mx-auto flex w-full max-w-2xl flex-col items-center justify-center text-center">
      <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="mb-6 flex items-center justify-center gap-3"><span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" /><span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">{birthdayContent.opening.eyebrow}</span><span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" /></motion.div>
      <motion.h1 initial={{ opacity: 0, y: 22, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] sm:leading-[1.18] tracking-tight bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/85 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.22)]">{birthdayContent.opening.heading}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="mt-6 sm:mt-8 max-w-md text-base sm:text-lg md:text-xl font-light tracking-wide text-rose-200/80 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">{birthdayContent.opening.supportingText}</motion.p>
      <OpeningButton isOpenClicked={isOpenClicked} onOpen={onOpen} />
    </div>
    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-30" onClick={onScrollToReveal} role="button" aria-label="Scroll to birthday reveal"><span className="text-xs uppercase tracking-[0.25em] text-rose-300/50 font-light">Scroll</span><motion.svg animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-400/50"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></motion.svg></motion.div>
  </section>;
}
