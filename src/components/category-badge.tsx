import { Category } from "@/types/category";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";
import {
  Building,
  GraduationCap,
  Drama,
  Globe,
  Ruler,
  Star,
  Building2,
  Cable,
  Microscope,
  BriefcaseBusiness,
  MessageCircleMore,
  Volleyball,
} from "lucide-react";
import { JSX } from "react";

export const categoryIcons: Record<Category, JSX.Element> = {
  organizations: <Building />,
  companies: <Building2 />,
  tech: <Cable />,
  science: <Microscope />,
  education: <GraduationCap />,
  business: <BriefcaseBusiness />,
  entertainment: <Drama />,
  slang: <MessageCircleMore />,
  sports: <Volleyball />,
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
          className={`text-md bg-accent-foreground flex items-center gap-1 px-3`}
        >
          {categoryIcons[category]}
          {category}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{categoryDescriptions[category]}</p>
      </TooltipContent>
    </Tooltip>
  );
}
