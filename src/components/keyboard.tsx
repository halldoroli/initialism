import { ArrowRight, X } from "lucide-react";
import React from "react";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

const Keyboard = ({ onKeyPress }: KeyboardProps) => {
  const rows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
  ];

  return (
    <div className="font-mono">
      {rows.map((row, i) => (
        <div key={i} className="mb-3 flex justify-center gap-1 sm:gap-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`flex h-10 items-center justify-center rounded-xs bg-gray-500 text-white sm:h-12 dark:bg-gray-700 ${
                key === "Enter"
                  ? "w-10 bg-green-600 sm:w-12 dark:bg-green-800"
                  : key === "Backspace"
                    ? "w-10 bg-red-700 sm:w-12 dark:bg-red-900"
                    : "w-8 sm:w-10"
              }`}
            >
              {key === "Enter" ? (
                <ArrowRight size="16" />
              ) : key === "Backspace" ? (
                <X size="16" />
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
