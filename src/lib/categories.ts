import type { Category } from "@/types/category";

export const categoryStyles: Record<Category, string> = {
  Organizations: "bg-blue-700 text-white",
  Companies: "bg-indigo-600 text-white",
  Tech: "bg-sky-600 text-white",
  Science: "bg-green-600 text-white",
  Education: "bg-yellow-600 text-black",
  Business: "bg-emerald-600 text-white",
  Entertainment: "bg-pink-600 text-white",
  Slang: "bg-purple-600 text-white",
  Sports: "bg-orange-600 text-white",
  Geography: "bg-teal-600 text-white",
  Units: "bg-gray-700 text-white",
  Common: "bg-zinc-700 text-white",
};

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
