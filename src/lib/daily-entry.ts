import { entries } from "./entries";
import type { Entry } from "@/types/entry";

export function getTodaysEntry(): Entry {
  const startDate = new Date("2025-11-05");
  const today = new Date();

  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const index = diffDays % entries.length;

  return entries[index];
}
