import { GameState } from "../types/game-state";

const STORAGE_KEY = "gameState";

export function loadGameState(gameId: string): GameState | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const parsed: GameState = JSON.parse(data);
    if (parsed.gameId === gameId) return parsed;
  } catch {
    console.warn("Failed to load game state");
  }
  return null;
}

export function saveGameState(state: GameState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    console.warn("Failed to save game state");
  }
}

export function clearGameState() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    console.warn("Failed to clear game state");
  }
}
