"use client";

import Keyboard from "./keyboard";
import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";
import { GuessesBadge } from "./guesses-badge";
import GameOverDialog from "./game-over-dialog";

const gameId = "1";
const initialism = "FBI";
const answer = "Federal Bureau of Investigation";

export default function Game() {
  const {
    guess,
    correctLetters,
    guessesLeft,
    gameOver,
    winner,
    handleKeyInput,
  } = useGameState(answer, gameId);

  return (
    <div className="flex flex-col items-center justify-center">
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
        <Keyboard onKeyPress={handleKeyInput} disabled={gameOver} />
        <GameOverDialog
          gameOver={gameOver}
          winner={winner}
          initialism={initialism}
          answer={answer}
        />
      </div>
    </div>
  );
}
