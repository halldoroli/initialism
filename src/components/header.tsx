import { Archive, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import InstructionsDialog from "./instructions-dialog";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl">{title}</h1>
        {title !== "initialism" && (
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/game">
              <ChevronLeft />
              <span className="hidden sm:inline">back</span>
            </Link>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-1">
        {title === "initialism" && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
              hidden
            >
              <Link href="/archive">
                <Archive />
                <span className="hidden sm:inline">archive</span>
              </Link>
            </Button>
            <InstructionsDialog />
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
