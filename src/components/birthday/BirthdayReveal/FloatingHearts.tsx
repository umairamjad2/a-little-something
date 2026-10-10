"use client";

import { motion } from "framer-motion";
import type { FloatingItem } from "@/data/birthday";

type FloatingHeartsProps = { items: FloatingItem[]; variant: "opening" | "reveal" };

export function FloatingHearts({ items, variant }: FloatingHeartsProps) {
  const isOpening = variant === "opening";
  return <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">{items.map((item) => <motion.div key={`${variant}-${item.id}`} initial={{ opacity: 0, y: "105vh", x: `${item.x}vw` }} animate={{ opacity: [0, item.opacity, item.opacity * (isOpening ? 0.8 : 0.9), 0], y: "-10vh", x: [`${item.x}vw`, `calc(${item.x}vw + ${item.sway}px)`, `calc(${item.x}vw - ${item.sway * (isOpening ? 0.5 : 0.6)}px)`, `calc(${item.x}vw + ${item.sway}px)`] }} transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", left: 0, top: 0 }}>
    {item.type === "heart" ? <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor" className={isOpening ? "text-rose-400/40 drop-shadow-[0_0_8px_rgba(244,63,94,0.35)]" : "text-rose-400/45 drop-shadow-[0_0_10px_rgba(244,63,94,0.45)]"}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg> : <div style={{ width: item.size, height: item.size }} className={isOpening ? "rounded-full bg-rose-200/60 shadow-[0_0_10px_2px_rgba(254,205,211,0.5)]" : "rounded-full bg-amber-200/50 shadow-[0_0_12px_2px_rgba(253,230,138,0.5)]"} />}
  </motion.div>)}</div>;
}
