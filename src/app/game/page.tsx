import Game from "@/components/game";
import { Header } from "@/components/header";

export default function GamePage() {
  return (
    <div className="flex flex-col items-center pt-30">
      <div className="w-full max-w-[60%]">
        <Header />
        <Game />
      </div>
    </div>
  )
}
