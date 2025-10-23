"use client";

import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";

const initialism = "FBI";
const answer = "Federal Bureau of Investigation";
const MAX_GUESSES = 6;

export default function Game() {
  const { guess, correctLetters, guessesLeft, gameOver, winner } = useGameState(
    answer,
    MAX_GUESSES,
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {gameOver && winner && (
        <h1 className="scroll-m-20 text-center text-4xl font-sans font-extrabold tracking-tight pt-16">You got it!</h1>
      )}
      {gameOver && !winner && (
        <h1 className="scroll-m-20 text-center text-4xl font-sans font-extrabold tracking-tight pt-16">So close! {initialism} stands for {answer}</h1>
      )}
      <div className="flex flex-col gap-16 pt-16">
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
    </div>
  );
}
