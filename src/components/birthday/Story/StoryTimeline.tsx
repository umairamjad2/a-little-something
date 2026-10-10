"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { birthdayContent } from "@/data/birthday";
import { TimelineItem } from "./TimelineItem";

export function StoryTimeline() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section
      id="story-section"
      className="relative w-full flex-shrink-0 bg-[#070509] select-none"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[360px] sm:w-[640px] h-[360px] sm:h-[640px] rounded-full bg-rose-600/7 blur-[150px]" />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[520px] h-[280px] rounded-full bg-amber-500/5 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#070509_95%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col px-6 pt-20 sm:pt-28 pb-24 sm:pb-32">

        {/* ── Section Header ── */}
        <div ref={headerRef} className="mb-16 sm:mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
                The Beginning of Us
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
              Our Story ❤️
            </h2>

            {/* Cinematic sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 font-serif text-base sm:text-lg font-light italic text-rose-200/60 max-w-sm leading-relaxed"
            >
              A love story told in chapters. Each one more precious than the last.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Timeline Chapters ── */}
        <div className="flex flex-col">
          {birthdayContent.story.map((chapter, index) => (
            <TimelineItem
              key={index}
              chapter={chapter}
              index={index}
              isLast={index === birthdayContent.story.length - 1}
            />
          ))}
        </div>

        {/* ── Closing flourish ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-col items-center gap-3 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1, 1.15, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]"
          >
            ❤️
          </motion.div>
          <p className="font-serif text-sm sm:text-base font-light italic text-rose-300/50">
            To be continued...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
