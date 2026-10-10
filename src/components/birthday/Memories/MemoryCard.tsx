"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

type Memory = typeof birthdayContent.memories[number];

export function MemoryCard({ memory, index }: { memory: Memory; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.35 });
  const isEven = index % 2 === 0;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.06, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isEven ? 30 : -30 },
    visible: { opacity: 1, x: 0 },
  };

  const hasValidImage = Boolean(memory.imageUrl) && !imageError;

  return (
    <div
      ref={cardRef}
      className="relative flex w-full items-center justify-center px-4 sm:px-8 py-14 sm:py-20"
    >
      {/* Per-card ambient glow (hardware accelerated) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.12)_0%,transparent_70%)]" />
      </div>

      <div
        className={`relative z-10 w-full max-w-5xl flex flex-col ${
          isEven ? "sm:flex-row" : "sm:flex-row-reverse"
        } items-center gap-8 sm:gap-14`}
      >
        {/* ── Image Panel ── */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full sm:w-[55%] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 shadow-[0_30px_80px_rgba(0,0,0,0.65)] border border-rose-500/20"
        >
          {/* Gradient placeholder & backdrop */}
          <div className={`absolute inset-0 bg-gradient-to-br ${memory.placeholderHue}`} />

          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(244,63,94,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Photo placeholder icon (shown when no image or while loading) */}
          {(!hasValidImage || !imageLoaded) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15 border border-rose-400/25 shadow-[0_0_30px_rgba(244,63,94,0.2)]"
              >
                <svg
                  className="h-7 w-7 text-rose-300/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </motion.div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-300/40 font-light">
                {memory.imageUrl ? "Loading photo..." : "Your photo here"}
              </span>
            </div>
          )}

          {/* Real image rendering */}
          {hasValidImage && (
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`h-full w-full object-cover transition-opacity duration-300 ease-out group-hover:scale-105 will-change-transform ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Cinematic ambient shadows and romantic vignette over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070509]/75 via-transparent to-[#070509]/25 pointer-events-none" />
              <div className="absolute inset-0 bg-rose-950/10 mix-blend-color pointer-events-none" />
            </div>
          )}

          {/* Date / Moment Tag Pill */}
          {memory.date && (
            <div className="absolute top-3.5 left-3.5 z-10 rounded-full border border-rose-300/30 bg-[#070509]/70 px-3 py-1 backdrop-blur-md shadow-lg">
              <span className="text-[11px] font-mono text-rose-200 tracking-wider">
                {memory.date}
              </span>
            </div>
          )}

          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-rose-500/20 pointer-events-none" />
        </motion.div>

        {/* ── Text Panel ── */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-5 sm:w-[45%] text-center sm:text-left"
        >
          {/* Counter */}
          <span className="text-[11px] uppercase tracking-[0.35em] text-rose-400/50 font-light">
            {String(index + 1).padStart(2, "0")}&nbsp;/&nbsp;
            {String(birthdayContent.memories.length).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug bg-gradient-to-b from-rose-50 via-rose-100 to-rose-300/80 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(244,63,94,0.25)]">
            {memory.title}
          </h3>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="h-[1px] w-10 bg-gradient-to-r from-rose-400/60 to-transparent" />
            <span className="text-rose-400/50 text-xs">❤</span>
          </div>

          {/* Caption */}
          <p className="font-serif text-base sm:text-lg font-light italic leading-relaxed text-rose-200/75">
            {memory.caption}
          </p>

          {/* Date */}
          {memory.date && (
            <span className="text-xs text-rose-300/40 font-light tracking-widest uppercase">
              {memory.date}
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
}
