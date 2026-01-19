"use client";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCards";

export default function Flashcard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <GlassCard
      className="p-12 text-center cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? back : front}
    </GlassCard>
  );
}
