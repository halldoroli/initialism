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
        <div key={wi} className="flex gap-2">
          {word.split("").map((char, localIndex) => {
            // Calculate global index for this character
            const globalIndex =
              answer
                .split(" ")
                .slice(0, wi)
                .reduce((acc, w) => acc + w.length + 1, 0) + localIndex;

            const isCorrect = correctLetters.includes(globalIndex);

            const displayChar = isCorrect
              ? char
              : guess[guessPointer] || "";

            if (!isCorrect) {
              guessPointer++;
            }

            return (
              <div
                key={globalIndex}
                className={`w-10 h-10 flex items-center justify-center border-2 font-sans transition-all duration-[500ms] ease-in-out
                  ${
                    isCorrect
                      ? "bg-green-600 border-green-200 text-white dark:bg-green-800 dark:border-green-400"
                      : "border-gray-400 bg-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
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
