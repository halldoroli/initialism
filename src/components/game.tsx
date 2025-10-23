"use client";

import { useState, useEffect } from "react";
import LetterBoxes from "./letter-boxes";

const initialism = "FAPHA";
const answer = "Fellow of the American Public Health Association";

export default function Game() {
  const MAX_GUESSES = 6;
  const answerWithoutSpaces = answer.replace(/\s/g, "");
  const answerLength = answerWithoutSpaces.length;
  const [correctLetters, setCorrectLetters] = useState<number[]>([1]);
  const [guess, setGuess] = useState("");
  const [guessesLeft, setGuesses] = useState(MAX_GUESSES);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      if (/^[a-zA-Z]$/.test(e.key) && guess.length + correctLetters.length < answerLength) {
        setGuess((prev) => prev + e.key.toUpperCase());
      }

      if (e.key === "Backspace") {
        setGuess((prev) => prev.slice(0, -1));
      }

      if (e.key === "Enter" && guess.length + correctLetters.length === answerLength) {
        // submitGuess();
        console.log("mjes")
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guess, gameOver, answerLength, correctLetters]);

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
