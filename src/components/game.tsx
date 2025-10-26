"use client";

import Keyboard from "./keyboard";
import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";
import { GuessesBadge } from "./guesses-badge";

const initialism = "FBI";
const answer = "Federal Bureau of Investigation";
const MAX_GUESSES = 6;

export default function Game() {
  const {
    guess,
    correctLetters,
    guessesLeft,
    gameOver,
    winner,
    handleKeyInput,
  } = useGameState(answer, MAX_GUESSES);

  return (
    <div className="flex flex-col items-center justify-center">
      {gameOver && winner && (
        <h1 className="scroll-m-20 pt-16 text-center font-sans text-4xl font-extrabold tracking-tight">
          You got it!
        </h1>
      )}
      {gameOver && !winner && (
        <h1 className="scroll-m-20 pt-16 text-center font-sans text-4xl font-extrabold tracking-tight">
          So close! {initialism} stands for {answer}
        </h1>
      )}
      <div className="flex flex-col gap-16 pt-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-mono text-4xl font-bold">{initialism}</h1>
          <GuessesBadge guessesLeft={guessesLeft} />
        </div>
        <LetterBoxes
          answer={answer.toUpperCase()}
          guess={guess}
          correctLetters={correctLetters}
        />
        <Keyboard onKeyPress={handleKeyInput} />
      </div>
    </div>
  );
}
