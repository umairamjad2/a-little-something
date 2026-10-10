"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { FloatingItem } from "@/data/birthday";
import { triggerRomanticConfetti } from "./BirthdayReveal/Confetti";
import { BirthdayReveal } from "./BirthdayReveal/BirthdayReveal";
import { FinalSurprise } from "./Final/FinalSurprise";
import { ConnectedToYou } from "./ConnectedToYou";
import { OneMoreThing } from "./OneMoreThing";
import { LoveLetter } from "./Letter/LoveLetter";
import { MemoriesSection } from "./Memories/MemoriesSection";
import { OpeningSection } from "./Opening/OpeningSection";
import { RomanticQuote } from "./Quote/RomanticQuote";
import { StoryTimeline } from "./Story/StoryTimeline";
import { ToMyMiss } from "./ToMyMiss";
import { SecretOpening } from "./SecretOpening/SecretOpening";
import { WaitMoment } from "./WaitMoment/WaitMoment";
import { ReasonsILoveYou } from "./ReasonsILoveYou/ReasonsILoveYou";
import { PlayfulWords } from "./PlayfulWords/PlayfulWords";
import { DoYouRemember } from "./DoYouRemember/DoYouRemember";
import { ThingsYouDontKnow } from "./ThingsYouDontKnow/ThingsYouDontKnow";
import { OurFuture } from "./OurFuture/OurFuture";
import { ChooseYourGift } from "./ChooseYourGift/ChooseYourGift";
import { HiddenMessage } from "./HiddenMessage/HiddenMessage";
import { ClosingEnding } from "./Ending/ClosingEnding";
import { HowMuchYouMean } from "./HowMuchYouMean";

function createFloatingItems(countHearts: number, countParticles: number): FloatingItem[] {
  const items: FloatingItem[] = [];
  for (let i = 0; i < countHearts; i++)
    items.push({ id: i, type: "heart", x: Math.floor(Math.random() * 92) + 4, size: Math.floor(Math.random() * 12) + 12, duration: Math.floor(Math.random() * 10) + 14, delay: Math.random() * 6, opacity: Math.random() * 0.35 + 0.15, sway: (Math.random() - 0.5) * 40 });
  for (let i = countHearts; i < countHearts + countParticles; i++)
    items.push({ id: i, type: "particle", x: Math.floor(Math.random() * 96) + 2, size: Math.floor(Math.random() * 3) + 2, duration: Math.floor(Math.random() * 8) + 10, delay: Math.random() * 5, opacity: Math.random() * 0.4 + 0.2, sway: (Math.random() - 0.5) * 25 });
  return items;
}

export function BirthdayPage() {
  const [openingItems, setOpeningItems] = useState<FloatingItem[]>([]);
  const [revealItems, setRevealItems] = useState<FloatingItem[]>([]);
  const [isOpenClicked, setIsOpenClicked] = useState(false);

  const revealRef = useRef<HTMLElement>(null);
  const waitMomentRef = useRef<HTMLElement>(null);
  const reasonsRef = useRef<HTMLElement>(null);

  const isRevealInView = useInView(revealRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpeningItems(createFloatingItems(12, 18));
      setRevealItems(createFloatingItems(14, 20));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRevealInView) triggerRomanticConfetti();
  }, [isRevealInView]);

  const scrollToReveal = () => revealRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToWaitMoment = () => waitMomentRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToReasons = () => reasonsRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleOpenClick = () => {
    setIsOpenClicked(true);
    triggerRomanticConfetti();
    setTimeout(scrollToReveal, 250);
    setTimeout(() => setIsOpenClicked(false), 2800);
  };

  return (
    <div className="relative flex w-full min-h-screen flex-col bg-[#070509] overflow-x-hidden">
      <SecretOpening onContinue={scrollToWaitMoment} />
      <WaitMoment onContinue={scrollToReasons} ref={waitMomentRef} />
      <ReasonsILoveYou sectionRef={reasonsRef} />
      <PlayfulWords />
      <OpeningSection items={openingItems} isOpenClicked={isOpenClicked} onOpen={handleOpenClick} onScrollToReveal={scrollToReveal} />
      <BirthdayReveal sectionRef={revealRef} items={revealItems} onCelebrate={triggerRomanticConfetti} />
      <RomanticQuote />
      <DoYouRemember />
      <MemoriesSection />
      <LoveLetter />
      <ThingsYouDontKnow />
      <StoryTimeline />
      <ToMyMiss />
      <OurFuture />
      <ChooseYourGift />
      <HiddenMessage />
      <FinalSurprise />
      <ConnectedToYou />
      <OneMoreThing />
      <HowMuchYouMean />
      <ClosingEnding />
    </div>
  );
}
