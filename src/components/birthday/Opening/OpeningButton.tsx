"use client";

import { AnimatePresence, motion } from "framer-motion";

export function OpeningButton({ isOpenClicked, onOpen }: { isOpenClicked: boolean; onOpen: () => void }) {
  return <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }} className="mt-10 sm:mt-12 relative flex flex-col items-center">
    <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-r from-rose-600/35 via-pink-600/25 to-rose-500/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    <motion.button id="open-birthday-btn" type="button" onClick={onOpen} whileHover={{ scale: 1.05, boxShadow: "0 0 35px 6px rgba(244, 63, 94, 0.45)" }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 22 }} className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-11 sm:py-4 rounded-full text-base sm:text-lg font-medium text-white transition-all duration-300 cursor-pointer overflow-hidden border border-rose-300/35 shadow-[0_8px_30px_rgba(225,29,72,0.35)] bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070509]">
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" aria-hidden="true" /><span className="relative z-10 tracking-wide font-normal">Open</span><motion.span animate={{ scale: [1, 1.22, 1, 1.15, 1] }} transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }} className="relative z-10 inline-block text-lg sm:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">❤️</motion.span>
    </motion.button>
    <AnimatePresence>{isOpenClicked && <motion.div initial={{ opacity: 0, y: 8, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.95 }} transition={{ duration: 0.35, ease: "easeOut" }} className="absolute top-full mt-4 flex items-center gap-2 rounded-full px-4 py-1.5 bg-rose-950/70 border border-rose-500/30 text-xs sm:text-sm text-rose-200/90 backdrop-blur-md shadow-lg shadow-black/50"><span className="inline-block animate-pulse">✨</span><span>Unwrapping with all my love...</span></motion.div>}</AnimatePresence>
  </motion.div>;
}
