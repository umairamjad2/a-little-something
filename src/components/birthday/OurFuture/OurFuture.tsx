"use client";

import { motion } from "framer-motion";
import { birthdayContent } from "@/data/birthday";

// Static starlight positions for the night sky (seeded coordinates so SSR matches hydration)
const STARS = [
  { top: "6%", left: "12%", size: 2, delay: 0.2, duration: 3.2 },
  { top: "10%", left: "78%", size: 3, delay: 0.8, duration: 4.1 },
  { top: "14%", left: "34%", size: 1.5, delay: 1.5, duration: 2.8 },
  { top: "18%", left: "92%", size: 2, delay: 0.4, duration: 3.6 },
  { top: "24%", left: "8%", size: 2.5, delay: 2.1, duration: 4.5 },
  { top: "28%", left: "54%", size: 1.5, delay: 1.1, duration: 3.0 },
  { top: "33%", left: "88%", size: 2, delay: 0.6, duration: 3.9 },
  { top: "38%", left: "22%", size: 3, delay: 1.8, duration: 4.3 },
  { top: "44%", left: "68%", size: 1.5, delay: 0.3, duration: 2.9 },
  { top: "50%", left: "4%", size: 2, delay: 2.4, duration: 3.7 },
  { top: "55%", left: "42%", size: 2.5, delay: 1.2, duration: 4.0 },
  { top: "62%", left: "82%", size: 1.5, delay: 0.9, duration: 3.1 },
  { top: "68%", left: "16%", size: 2, delay: 1.6, duration: 3.8 },
  { top: "74%", left: "62%", size: 3, delay: 0.5, duration: 4.6 },
  { top: "80%", left: "94%", size: 1.5, delay: 2.0, duration: 2.7 },
  { top: "86%", left: "30%", size: 2, delay: 1.4, duration: 3.4 },
  { top: "92%", left: "74%", size: 2.5, delay: 0.7, duration: 4.2 },
  { top: "96%", left: "10%", size: 1.5, delay: 1.9, duration: 3.3 },
];

export function OurFuture() {
  const { eyebrow, heading, subheading, cards } = birthdayContent.ourFuture;

  return (
    <section
      id="our-future-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#050713] via-[#070b1f] to-[#050713] px-4 sm:px-6 py-16 sm:py-24 select-none"
    >
      {/* ── Night Sky & Starlight Backdrop ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Deep celestial nebula glows */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[720px] h-[380px] sm:h-[720px] rounded-full bg-indigo-600/12 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.08, 1, 1.08], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[300px] sm:h-[500px] rounded-full bg-purple-600/10 blur-[150px]"
        />
        <div className="absolute top-[45%] left-[20%] w-[260px] h-[260px] rounded-full bg-sky-500/8 blur-[130px]" />

        {/* Twinkling Stars */}
        {STARS.map((star, i) => (
          <motion.div
            key={i}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.15, 0.95, 0.15],
              scale: [0.75, 1.35, 0.75],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]"
          />
        ))}

        {/* Shooting star animation */}
        <motion.div
          initial={{ x: "-100%", y: "-100%", opacity: 0 }}
          animate={{
            x: ["0%", "300%"],
            y: ["0%", "300%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 9,
            ease: "easeOut",
          }}
          className="absolute top-[8%] left-[15%] h-[2px] w-28 bg-gradient-to-r from-transparent via-white to-transparent -rotate-45"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#050713_96%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 flex flex-col items-center text-center px-4"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-indigo-400/50" />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-indigo-200/80 font-light flex items-center gap-1.5">
              <span>✦</span> {eyebrow}
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-indigo-400/50" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-sky-100 via-indigo-100 to-rose-200 bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(99,102,241,0.4)] leading-tight max-w-2xl">
            &ldquo;{heading}&rdquo;
          </h2>

          <p className="mt-4 max-w-md text-sm sm:text-base text-indigo-200/60 font-light leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* ── Night Sky Cards Grid (Progressive scroll reveal) ── */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
          {cards.map((card, index) => {
            const isLast = index === cards.length - 1;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-indigo-400/20 bg-gradient-to-b from-[#0c1230]/85 via-[#070b1f]/90 to-[#0e1436]/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(99,102,241,0.1)] transition-all duration-500 hover:border-indigo-300/45 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(129,140,248,0.22)] ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Internal celestial radial glow on hover */}
                <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-indigo-500/10 blur-[50px] group-hover:bg-indigo-400/20 transition-all duration-500" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-purple-500/10 blur-[50px] group-hover:bg-purple-400/20 transition-all duration-500" />

                {/* Starlight badge & index */}
                <div className="relative z-10 mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-300/50">
                    {card.tag}
                  </span>
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xs text-indigo-300/70 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]"
                  >
                    ✦
                  </motion.span>
                </div>

                {/* Card Title */}
                <div className="relative z-10 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-sky-50 group-hover:text-white transition-colors duration-300 drop-shadow-[0_2px_12px_rgba(99,102,241,0.3)]">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="relative z-10 font-serif text-sm sm:text-base font-light italic leading-relaxed text-indigo-200/70 group-hover:text-indigo-100/90 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Bottom starlight accent line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-indigo-400/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-indigo-300/40 font-light">
                    Our Tomorrow
                  </span>
                  <span className="text-sm text-indigo-300/60 group-hover:scale-125 transition-transform duration-300">
                    ✨
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
