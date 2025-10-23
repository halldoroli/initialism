"use client";

import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";

const initialism = "TT";
const answer = "test test";
const MAX_GUESSES = 6;

export default function Game() {
  const { guess, correctLetters, guessesLeft, gameOver, winner } = useGameState(answer, MAX_GUESSES);

  return (
    <main className="flex flex-col pt-16 gap-16 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-sans font-bold">{initialism}</h1>
        <p className="font-sans">guesses left: {guessesLeft}</p>
      </div>
      <LetterBoxes answer={answer.toUpperCase()} guess={guess} correctLetters={correctLetters} />
    </main>
  );
}
