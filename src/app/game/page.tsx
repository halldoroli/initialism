import Game from "@/components/game";
import { Header } from "@/components/header";

export default function GamePage() {
  return (
    <div className="flex flex-col items-center pt-8 px-4">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        <Header title="initialism" />
        <Game />
      </div>
    </div>
  )
}
