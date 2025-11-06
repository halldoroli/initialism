import Game from "@/components/game";
import { Header } from "@/components/header";

export default function GamePage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex w-full max-w-3xl h-screen flex-col">
        <Header title="initialism" />
        <Game />
      </div>
    </div>
  );
}
