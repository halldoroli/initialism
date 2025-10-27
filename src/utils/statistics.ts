import type { Statistics } from "@/types/statistics";

const STATS_KEY = "gameStatistics";

export function loadStatistics(): Statistics {
  if (typeof window === "undefined") {
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      guessDistribution: [0, 0, 0, 0, 0, 0],
    };
  }

  try {
    const data = localStorage.getItem(STATS_KEY);
    if (!data) throw new Error("No data");
    return JSON.parse(data) as Statistics;
  } catch {
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      guessDistribution: [0, 0, 0, 0, 0, 0],
    };
  }
}

export function updateStatistics(winner: boolean, guessesUsed: number) {
  if (typeof window === "undefined") return;

  const stats = loadStatistics();

  const newStats: Statistics = {
    gamesPlayed: stats.gamesPlayed + 1,
    gamesWon: winner ? stats.gamesWon + 1 : stats.gamesWon,
    guessDistribution: [...stats.guessDistribution],
  };

  if (winner) {
    newStats.guessDistribution[guessesUsed - 1] += 1;
  }

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(newStats));
  } catch {
    console.warn("Failed to save statistics");
  }
}
