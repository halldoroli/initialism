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
    <div className="font-bold">
      {rows.map((row, i) => (
        <div key={i} className="mb-2 flex justify-center">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`m-1 flex h-10 items-center justify-center rounded-xs bg-gray-500 text-white sm:h-12 dark:bg-gray-700 ${
                key === "Enter"
                  ? "w-10 bg-green-900 sm:w-12"
                  : key === "Backspace"
                    ? "w-10 bg-red-900 sm:w-12"
                    : "w-8 sm:w-10"
              }`}
            >
              {key === "Enter" ? (
                <ArrowRight size="20" />
              ) : key === "Backspace" ? (
                <X size="20" />
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
