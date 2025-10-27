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
        <span className="text-slate-400">Games played</span>
        <span>{gamesPlayed}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-400">Win percentage</span>
        <span>{winPercentage}%</span>
      </div>

      <div className="mt-4 space-y-2">
        <h4 className="text-sm text-slate-400">Guess distribution</h4>
        {guessDistribution.map((count, index) => {
          const widthPercent = (count / maxGuesses) * 100;
          return (
            <div key={index} className="flex items-center space-x-2">
              <span className="w-4 text-xs">{index + 1}</span>
              <div className="h-4 flex-1 overflow-hidden rounded bg-slate-700">
                <div
                  className="h-4 rounded bg-green-600"
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
