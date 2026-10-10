"use client";

import { birthdayContent } from "@/data/birthday";
import { MemoryCard } from "./MemoryCard";

export function MemoryGrid() {
  return (
    <div className="w-full flex flex-col">
      {birthdayContent.memories.map((memory, index) => (
        <MemoryCard key={memory.id} memory={memory} index={index} />
      ))}
    </div>
  );
}
