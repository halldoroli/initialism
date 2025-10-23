import { useState, useEffect, useCallback } from "react";

export default function useGameState(answer: string, MAX_GUESSES: number) {
  const answerLength = answer.replace(/\s/g, "").length;
  const [correctLetters, setCorrectLetters] = useState<number[]>([]);
  const [guess, setGuess] = useState("");
  const [guessesLeft, setGuesses] = useState(MAX_GUESSES);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const submitGuess = useCallback(() => {
    const answerChars = answer.split("");
    const newCorrect = [...correctLetters];
    let guessPointer = 0;

    for (let i = 0; i < answerChars.length; i++) {
      const char = answerChars[i];

      if (char === " ") continue;
      if (newCorrect.includes(i)) continue;

      const guessChar = guess[guessPointer];
      if (guessChar && guessChar.toUpperCase() === char.toUpperCase()) {
        newCorrect.push(i);
      }

      guessPointer++;
    }

    setCorrectLetters(newCorrect);
    setGuesses((prev) => prev - 1);
    setGuess("");

    const allCorrect = answerChars.every(
      (char, i) => char === " " || newCorrect.includes(i),
    );
    if (allCorrect) {
      setGameOver(true);
      setWinner(true);
      return;
    }

    if (guessesLeft - 1 <= 0) {
      setGameOver(true);
    }
  }, [answer, guess, correctLetters, guessesLeft]);

  useEffect(() => {
    if (gameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        /^[a-zA-Z]$/.test(e.key) &&
        guess.length + correctLetters.length < answerLength
      ) {
        setGuess((prev) => prev + e.key.toUpperCase());
      }

      if (e.key === "Backspace") {
        setGuess((prev) => prev.slice(0, -1));
      }

      if (
        e.key === "Enter" &&
        guess.length + correctLetters.length === answerLength
      ) {
        submitGuess();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guess, correctLetters, answerLength, gameOver, winner, submitGuess]);

  return { guess, correctLetters, guessesLeft, gameOver };
}
