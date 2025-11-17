import { AbbreviationType } from "@/types/abbreviation-type";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Badge } from "./ui/badge";

type AbbreviationTypeBadgeProps = {
  type: AbbreviationType;
};

export function AbbreviationTypeBadge({ type }: AbbreviationTypeBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          className={`text-md px-3 text-white ${
            type === "initialism" ? "bg-primary" : "bg-muted-foreground"
          }`}
        >
          {type}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {type === "initialism"
            ? "Each letter is pronounced separately"
            : "Pronounced as a word"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
