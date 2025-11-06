import type { Category } from "@/types/category";

export const categoryIcons: Record<Category, string> = {
  Organizations: "🏛️",
  Companies: "🏢",
  Tech: "💻",
  Science: "🧬",
  Education: "🎓",
  Business: "📈",
  Entertainment: "🎭",
  Slang: "💬",
  Sports: "🏅",
  Geography: "🌍",
  Units: "📏",
  Common: "⭐",
};

export const categoryDescriptions: Record<Category, string> = {
  Organizations: "Government or non-profit agencies and organizations",
  Companies: "Business brands or companies",
  Tech: "Technology, computing, or software terms",
  Science: "Scientific, medical, or research-related terms",
  Education: "Academic or educational terms",
  Business: "Finance, economy, or corporate terms",
  Entertainment: "Media, TV, music, or gaming",
  Slang: "Internet slang or informal abbreviations",
  Sports: "Sports-related terms or organizations",
  Geography: "Countries, cities, or geographical regions",
  Units: "Measurements, time, or units",
  Common: "General abbreviations or phrases",
};
