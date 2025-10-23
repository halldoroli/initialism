"use client";

import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";

const initialism = "TT";
const answer = "test test";
const MAX_GUESSES = 6;

export default function Game() {
  const { guess, correctLetters, guessesLeft, gameOver, winner } = useGameState(
    answer,
    MAX_GUESSES,
  );

  return (
    <div className="flex flex-col items-center justify-center gap-16 pt-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-sans text-4xl font-bold">{initialism}</h1>
        <p className="font-sans">guesses left: {guessesLeft}</p>
      </div>
      <LetterBoxes
        answer={answer.toUpperCase()}
        guess={guess}
        correctLetters={correctLetters}
      />
    </div>
  );
}
