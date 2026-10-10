"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

type Chapter = typeof birthdayContent.story[number];

export function TimelineItem({
  chapter,
  index,
  isLast,
}: {
  chapter: Chapter;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const isHeart = chapter.icon === "❤";

  return (
    <div ref={ref} className="relative flex gap-6 sm:gap-10">

      {/* ── Left column: dot + line ── */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-10 sm:w-14">

        {/* Pulsing ring */}
        <motion.div
          animate={isInView
            ? { scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }
            : { scale: 1, opacity: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          className="absolute top-[3px] h-5 w-5 rounded-full bg-rose-500/30"
        />

        {/* Icon dot */}
        <motion.div
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-5 w-5 items-center justify-center"
        >
          {isHeart ? (
            <span className="text-xs text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]">❤</span>
          ) : (
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-rose-400 via-rose-500 to-pink-600 border-2 border-rose-300/60 shadow-[0_0_14px_rgba(244,63,94,0.7)]" />
          )}
        </motion.div>

        {/* Connecting line to next item */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="mt-3 flex-1 w-[1px] bg-gradient-to-b from-rose-400/60 via-rose-500/30 to-transparent min-h-[60px]"
          />
        )}
      </div>

      {/* ── Right column: chapter content ── */}
      <div className="pb-16 sm:pb-20 flex-1 min-w-0">

        {/* Chapter label + date */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 flex flex-wrap items-center gap-3"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light text-rose-400/70">
            {chapter.chapter}
          </span>
          <span className="h-[1px] w-5 bg-rose-400/25" />
          <span className="text-[10px] sm:text-xs italic text-rose-300/45 font-light">
            {chapter.date}
          </span>
        </motion.div>

        {/* Chapter title */}
        <motion.h3
          initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
          animate={isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 16, filter: "blur(5px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-snug bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/80 bg-clip-text text-transparent mb-5"
        >
          {chapter.title}
        </motion.h3>

        {/* Narrative card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-2xl border border-rose-500/15 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-black/30 hover:border-rose-400/30 transition-all duration-500"
        >
          {/* Hover sheen */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/6 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Lead sentence — italic large */}
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-rose-100/90 mb-4"
          >
            {chapter.lead}
          </motion.p>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
            className="text-sm sm:text-base font-light leading-relaxed text-rose-200/65"
          >
            {chapter.body}
          </motion.p>

          {/* Bottom accent */}
          <div className="mt-6 flex items-center gap-2">
            <span className="h-[1px] w-8 bg-gradient-to-r from-rose-400/40 to-transparent" />
            <span className="text-rose-400/30 text-[10px]">{chapter.icon}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
