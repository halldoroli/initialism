import { Archive, ChevronLeft, Info } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="font-mono text-xl">{title}</h1>
        {title !== "initialism" && (
          <Button
            variant="outline"
            size="sm"
            className="rounded-full font-mono"
            asChild
          >
            <Link href="/game">
              <ChevronLeft />
              back
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
              className="rounded-full font-mono"
              asChild
            >
              <Link href="/archive">
                <Archive />
                archive
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full font-mono"
              asChild
            >
              <Link href="/instructions">
                <Info />
                instructions
              </Link>
            </Button>
          </>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
