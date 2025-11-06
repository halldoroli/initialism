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
  organizations: <Banknote />,
  companies: <Building />,
  tech: <Laptop />,
  science: <Dna />,
  education: <GraduationCap />,
  business: <BarChart />,
  entertainment: <Drama />,
  slang: <MessageCircle />,
  sports: <Medal />,
  geography: <Globe />,
  units: <Ruler />,
  common: <Star />,
};

export const categoryDescriptions: Record<Category, string> = {
  organizations: "Government or non-profit agencies and organizations",
  companies: "Business brands or companies",
  tech: "Technology, computing, or software terms",
  science: "Scientific, medical, or research-related terms",
  education: "Academic or educational terms",
  business: "Finance, economy, or corporate terms",
  entertainment: "Media, TV, music, or gaming",
  slang: "Internet slang or informal abbreviations",
  sports: "Sports-related terms or organizations",
  geography: "Countries, cities, or geographical regions",
  units: "Measurements, time, or units",
  common: "General abbreviations or phrases",
};

type CategoryBadgeProps = {
  category: Category;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          className={`text-md flex items-center gap-1 bg-blue-800 px-3 font-mono text-white`}
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
