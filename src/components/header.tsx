import { Archive, Info } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="font-mono text-xl">initialism</h1>
      <div className="flex items-center gap-1">
        <Button variant="outline" size="sm" className="rounded-full font-mono" asChild>
          <Link href="/archive"><Archive />archive</Link>
        </Button>
        <Button variant="outline" size="sm" className="rounded-full font-mono" asChild>
          <Link href="/instructions"><Info />instructions</Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}