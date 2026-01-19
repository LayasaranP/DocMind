"use client";

import React, { useState } from "react";
import Flashcard from "@/components/features/FlashCard";
import { BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCards";

const FlashcardPage = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  
  const cards = [
    { front: 'What is quantum entanglement?', back: 'A phenomenon where particles become correlated such that the state of one cannot be described independently of others.' },
    { front: 'Define machine learning', back: 'A subset of AI that enables systems to learn and improve from experience without explicit programming.' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Flashcards</h1>
        <div className="text-gray-400">
          Card {currentCard + 1} of {cards.length}
        </div>
      </div>

      <div className="flex justify-center">
        <div
          onClick={() => setFlipped(!flipped)}
          className="relative w-full max-w-2xl h-96 cursor-pointer perspective-1000"
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full preserve-3d"
          >
            {/* Front */}
            <GlassCard className={`
              absolute inset-0 p-12 flex items-center justify-center
              backface-hidden
              ${flipped ? 'invisible' : 'visible'}
            `}>
              <div className="text-center space-y-4">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto" />
                <p className="text-2xl text-white font-medium">{cards[currentCard].front}</p>
                <p className="text-sm text-gray-500">Click to reveal answer</p>
              </div>
            </GlassCard>

            {/* Back */}
            <GlassCard className={`
              absolute inset-0 p-12 flex items-center justify-center
              backface-hidden rotate-y-180
              ${!flipped ? 'invisible' : 'visible'}
            `}>
              <div className="text-center space-y-4">
                <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
                <p className="text-xl text-gray-200 leading-relaxed">{cards[currentCard].back}</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button variant="secondary" onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}>
          Previous
        </Button>
        <Button onClick={() => setCurrentCard(Math.min(cards.length - 1, currentCard + 1))}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FlashcardPage;