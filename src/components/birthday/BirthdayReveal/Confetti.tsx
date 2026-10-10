"use client";

import confetti from "canvas-confetti";

export function triggerRomanticConfetti() {
  confetti({ particleCount: 65, spread: 85, origin: { y: 0.6 }, colors: ["#ff4d6d", "#ff758f", "#ffb3c1", "#ffe5ec", "#ffd166", "#f72585"], disableForReducedMotion: true });
  setTimeout(() => {
    confetti({ particleCount: 45, angle: 60, spread: 60, origin: { x: 0.15, y: 0.65 }, colors: ["#ff4d6d", "#ff758f", "#ffd166", "#ffffff"] });
    confetti({ particleCount: 45, angle: 120, spread: 60, origin: { x: 0.85, y: 0.65 }, colors: ["#ff4d6d", "#ff758f", "#ffd166", "#ffffff"] });
  }, 350);
}
