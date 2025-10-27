export interface GameState {
  gameId: string;
  correctLetters: number[];
  guessesLeft: number;
  gameOver: boolean;
  winner: boolean;
}
