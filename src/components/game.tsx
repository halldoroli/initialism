"use client";

import Keyboard from "./keyboard";
import LetterBoxes from "./letter-boxes";
import useGameState from "@/hooks/useGameState";
import { GuessesBadge } from "./guesses-badge";
import GameOverDialog from "./game-over-dialog";
import { Confetti } from "./ui/confetti";
import { loadStatistics } from "@/utils/statistics";
import { AbbreviationTypeBadge } from "./abbreviation-type-badge";
import { CategoryBadge } from "./category-badge";
import { getTodaysEntry } from "@/lib/daily-entry";

export default function Game() {
  const { gameId, abbreviation, answer, abbreviationType, category } =
    getTodaysEntry();

  const {
    guess,
    correctLetters,
    guessesLeft,
    gameOver,
    winner,
    handleKeyInput,
  } = useGameState(answer, gameId);

  const statistics = loadStatistics();

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="font-mono text-4xl font-bold">{abbreviation}</h1>
        <div className="flex gap-2">
          <GuessesBadge guessesLeft={guessesLeft} />
          <AbbreviationTypeBadge type={abbreviationType} />
          <CategoryBadge category={category} />
        </div>
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
        initialism={abbreviation}
        answer={answer}
        statistics={statistics}
      />
      {gameOver && winner && (
        <Confetti className="pointer-events-none absolute top-0 left-0 z-0 size-full" />
      )}
    </div>
  );
}
