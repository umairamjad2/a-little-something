"use client";

import { motion } from "framer-motion";
import { MemoryGrid } from "./MemoryGrid";

export function MemoriesSection() {
  return (
    <section
      id="memories-section"
      className="relative w-full flex-shrink-0 bg-[#070509] select-none"
    >
      {/* Global ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-rose-600/7 blur-[150px]" />
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[300px] rounded-full bg-amber-500/5 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070509_90%)]" />
      </div>

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-28 pb-4 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-400/40" />
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-rose-300/70 font-light">
              Treasured Moments
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-400/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-rose-100 via-rose-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(244,63,94,0.3)]">
            Our Memories ❤️
          </h2>
          <p className="mt-1 max-w-sm text-sm sm:text-base text-rose-200/60 font-light leading-relaxed">
            Every picture holds a feeling that never fades.
          </p>
        </motion.div>
      </div>

      {/* Cinematic cards — each one scroll-animated */}
      <div className="relative z-10">
        <MemoryGrid />
      </div>

      {/* Bottom fade out to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070509] to-transparent z-20" />
    </section>
  );
}
