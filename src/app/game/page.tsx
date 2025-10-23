import Game from "@/components/game";
import { Header } from "@/components/header";

export default function GamePage() {
  return (
    <div className="flex flex-col items-center px-4 pt-8">
      <div className="flex w-full max-w-3xl flex-col gap-6">
        <Header title="initialism" />
        <Game />
      </div>
    </div>
  );
}
