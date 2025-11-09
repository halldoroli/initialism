"use client";

import { Statistics } from "@/types/statistics";

interface StatisticsCardProps {
  statistics: Statistics;
}

export function StatisticsCard({ statistics }: StatisticsCardProps) {
  const { gamesPlayed, gamesWon, guessDistribution } = statistics;

  const maxGuesses = Math.max(...guessDistribution, 1);
  const winPercentage =
    gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;

  return (
    <>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Games played</span>
        <span className="font-mono">{gamesPlayed}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Win percentage</span>
        <span className="font-mono">{winPercentage}%</span>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-muted-foreground text-sm">Guess distribution</p>
        {guessDistribution.map((count, index) => {
          const widthPercent = (count / maxGuesses) * 100;
          return (
            <div key={index} className="flex items-center space-x-2 font-mono">
              <span className="text-muted-foreground w-4 text-xs">
                {index + 1}
              </span>
              <div className="bg-muted h-4 flex-1 overflow-hidden rounded">
                <div
                  className="bg-success h-4 rounded"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
              <span className="w-6 text-right text-xs">{count}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
