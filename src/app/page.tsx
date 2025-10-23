import { ThemeToggle } from "@/components/theme-toggle";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-8">
      <Title />
      <div className="flex items-center gap-1">
        <Button variant="outline" className="rounded-full font-mono" asChild>
          <Link href="/game">
            <ChevronRightIcon />
            play
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
