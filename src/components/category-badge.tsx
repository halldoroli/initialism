import { Category } from "@/types/category";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";
import {
  categoryDescriptions,
  categoryIcons,
  categoryStyles,
} from "@/lib/categories";

type CategoryBadgeProps = {
  category: Category;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          className={`text-md flex items-center gap-1 px-3 font-mono ${
            categoryStyles[category]
          }`}
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
