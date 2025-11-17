import { AbbreviationType } from "@/types/abbreviation-type";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type AbbreviationTypeBadgeProps = {
  type: AbbreviationType;
};

export function AbbreviationTypeBadge({ type }: AbbreviationTypeBadgeProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Badge
          className={`text-md cursor-pointer px-3 text-white ${
            type === "initialism" ? "bg-primary" : "bg-muted-foreground"
          }`}
        >
          {type}
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <p>
          {type === "initialism"
            ? "Each letter is pronounced separately"
            : "Pronounced as a word"}
        </p>
      </PopoverContent>
    </Popover>
  );
}
