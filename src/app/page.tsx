import { ThemeToggle } from "@/components/theme-toggle";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 h-full items-center justify-center">
      <Title />
      <div className="flex space-x-2">
        <Button variant="outline">
          <Link href="game" className="flex items-center">
            <ChevronRightIcon />
            Play
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
