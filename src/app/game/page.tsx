import Game from "@/components/game";
import { Header } from "@/components/header";

export default function GamePage() {
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="flex h-screen w-full max-w-3xl flex-col">
        <Header title="initialism" />
        <Game />
      </div>
    </div>
  );
}
