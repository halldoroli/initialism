import { Info } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { Button } from "./ui/button";

export default function InstructionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full">
          <Info />
          <span className="hidden sm:inline">instructions</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Badge variant="secondary" className="mr-3 px-2.5 py-1.5">
              <Info />
            </Badge>
            Instructions
          </DialogTitle>
          <DialogDescription>
            Try to guess the hidden initialism (or sometimes an acronym)!
          </DialogDescription>
        </DialogHeader>
        <div className="text-muted-foreground flex flex-col gap-4 pt-8 pb-8 text-sm">
          <p>
            Type your guess, then press the Submit button or when you are ready.
          </p>
          <p>
            If a letter is correct and in the right spot, its box will turn
            green.
          </p>
          <p>
            You have six tries to reveal all the letters, get them all right to
            win!
          </p>
        </div>
        <DialogFooter className="text-xs">
          <div>
            by <Link href="https://holi.is/">holi.is</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
