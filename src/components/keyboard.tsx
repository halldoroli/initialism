import { ArrowRight, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  disabled: boolean;
}

const Keyboard = ({ onKeyPress, disabled }: KeyboardProps) => {
  const rows: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  return (
    <div className="font-mono">
      {rows.map((row, i) => (
        <div key={i} className="mb-3 flex justify-center gap-1 sm:gap-2">
          {row.map((key) => (
            <Button
              key={key}
              onClick={() => onKeyPress(key)}
              disabled={disabled}
              className={`flex h-10 sm:h-12 ${
                key === "Enter"
                  ? "bg-primary hover:bg-primary/80 w-10 sm:w-12 text-white"
                  : key === "Backspace"
                    ? "bg-destructive hover:bg-destructive/80 w-10 sm:w-12 text-white"
                    : "w-8 sm:w-10"
              }`}
              variant="secondary"
            >
              {key === "Enter" ? (
                <ArrowRight size="16" />
              ) : key === "Backspace" ? (
                <X size="16" />
              ) : (
                key
              )}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
