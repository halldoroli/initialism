import {
  clearGameState,
  loadGameState,
  saveGameState,
} from "@/app/utils/storage";
import { useState, useEffect, useCallback } from "react";

const MAX_GUESSES = 6;

export default function useGameState(answer: string, gameId: string) {
  const answerLength = answer.replace(/\s/g, "").length;

  const [correctLetters, setCorrectLetters] = useState<number[]>([]);
  const [guess, setGuess] = useState("");
  const [guessesLeft, setGuesses] = useState(MAX_GUESSES);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const saved = loadGameState(gameId);
    if (saved) {
      setCorrectLetters(saved.correctLetters);
      setGuesses(saved.guessesLeft);
      setGameOver(saved.gameOver);
      setWinner(saved.winner);
    } else {
      clearGameState();
    }
  }, [gameId]);

  useEffect(() => {
    const state = {
      gameId,
      correctLetters,
      guessesLeft,
      gameOver,
      winner,
    };
    saveGameState(state);
  }, [gameId, correctLetters, guessesLeft, gameOver, winner]);

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

  const handleKeyInput = useCallback(
    (key: string) => {
      if (gameOver) return;

      if (
        /^[a-zA-Z]$/.test(key) &&
        guess.length + correctLetters.length < answerLength
      ) {
        setGuess((prev) => prev + key.toUpperCase());
      }

      if (key === "Backspace") {
        setGuess((prev) => prev.slice(0, -1));
      }

      if (
        key === "Enter" &&
        guess.length + correctLetters.length === answerLength
      ) {
        submitGuess();
      }
    },
    [gameOver, guess, correctLetters, answerLength, submitGuess],
  );

  useEffect(() => {
    if (gameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => handleKeyInput(e.key);
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver, handleKeyInput]);

  return {
    guess,
    correctLetters,
    guessesLeft,
    gameOver,
    winner,
    handleKeyInput,
  };
}
