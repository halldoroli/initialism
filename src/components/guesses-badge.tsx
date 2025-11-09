import { Heart, HeartCrack } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type GuessesBadgeProps = {
  guessesLeft: number;
};

export function GuessesBadge({ guessesLeft }: GuessesBadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge className="text-md bg-red-500 px-3 font-mono text-white">
          {guessesLeft < 2 ? <HeartCrack /> : <Heart />}
          {guessesLeft}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {guessesLeft === 1
            ? "Last guess!"
            : `${guessesLeft} guesses remaining`}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
