import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Smile, Star } from "lucide-react";
import { StatisticsCard } from "./statistics-card";
import { Statistics } from "@/types/statistics";
import { NextGameTimer } from "./next-game-timer";

type GameOverDialogProps = {
  gameOver: boolean;
  winner: boolean;
  initialism: string;
  answer: string;
  statistics: Statistics;
};

export default function GameOverDialog({
  gameOver,
  winner,
  initialism,
  answer,
  statistics,
}: GameOverDialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        setOpen(true);
      }, 2000);
    } else {
      setOpen(false);
    }
  }, [gameOver]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="font-mono">
        <DialogHeader>
          <DialogTitle>
            <Badge
              variant="secondary"
              className={`${winner && "bg-yellow-500"} mr-3 px-2.5 py-1.5`}
            >
              {winner ? <Star /> : <Smile />}
            </Badge>
            {winner ? "You got it!" : "So close!"}
          </DialogTitle>
          <DialogDescription>
            {!winner && `${initialism} stands for ${answer}`}
          </DialogDescription>
        </DialogHeader>
        <StatisticsCard statistics={statistics} />
        <DialogFooter className="text-xs">
          <NextGameTimer />
          <div>
            by <Link href="https://holi.is/">holi.is</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
