import { Heart, HeartCrack } from "lucide-react";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type GuessesBadgeProps = {
  guessesLeft: number;
};

export function GuessesBadge({ guessesLeft }: GuessesBadgeProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Badge className="text-md cursor-pointer bg-red-500 px-3 text-white">
          {guessesLeft < 2 ? <HeartCrack /> : <Heart />}
          {guessesLeft}
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <p>
          {guessesLeft === 1
            ? "Last guess!"
            : `${guessesLeft} guesses remaining`}
        </p>
      </PopoverContent>
    </Popover>
  );
}
