interface LetterBoxesProps {
  answer: string;
  guess: string;
  correctLetters: number[];
}

export default function LetterBoxes({
  answer,
  guess,
  correctLetters,
}: LetterBoxesProps) {
  let guessPointer = 0;

  const words = answer.split(" ");

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {words.map((word, wi) => (
        <div key={wi} className="flex gap-1 sm:gap-2">
          {word.split("").map((char, localIndex) => {
            const globalIndex =
              answer
                .split(" ")
                .slice(0, wi)
                .reduce((acc, w) => acc + w.length + 1, 0) + localIndex;

            const isCorrect = correctLetters.includes(globalIndex);

            const displayChar = isCorrect ? char : guess[guessPointer] || "";

            if (!isCorrect) {
              guessPointer++;
            }

            return (
              <div
                key={globalIndex}
                className={`flex h-6 w-6 items-center justify-center border-2 font-sans transition-all duration-[500ms] ease-in-out sm:h-10 sm:w-10 ${
                  isCorrect
                    ? "bg-success border-success text-white"
                    : "bg-muted"
                }`}
              >
                {displayChar}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
