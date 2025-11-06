import { Category } from "@/types/category";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";
import {
  Building,
  Banknote,
  Laptop,
  Dna,
  GraduationCap,
  BarChart,
  Drama,
  MessageCircle,
  Medal,
  Globe,
  Ruler,
  Star,
} from "lucide-react";
import { JSX } from "react";

export const categoryIcons: Record<Category, JSX.Element> = {
  Organizations: <Banknote />,
  Companies: <Building />,
  Tech: <Laptop />,
  Science: <Dna />,
  Education: <GraduationCap />,
  Business: <BarChart />,
  Entertainment: <Drama />,
  Slang: <MessageCircle />,
  Sports: <Medal />,
  Geography: <Globe />,
  Units: <Ruler />,
  Common: <Star />,
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

type CategoryBadgeProps = {
  category: Category;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          className={`text-md flex items-center gap-1 px-3 font-mono bg-blue-800 text-white`}
        >
          {categoryIcons[category]}
          {category}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-mono">{categoryDescriptions[category]}</p>
      </TooltipContent>
    </Tooltip>
  );
}
