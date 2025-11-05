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
          className={`text-md px-3 font-mono text-white ${
            type === "initialism" ? "bg-slate-700" : "bg-zinc-700"
          }`}
        >
          {type}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-mono">
          {type === "initialism"
            ? "Each letter is pronounced separately"
            : "Pronounced as a word"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
