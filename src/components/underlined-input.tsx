import React from "react";

interface UnderlinedInputProps {
  value: string;
  length: number;
}

export default function UnderlinedInput({ value, length }: UnderlinedInputProps) {
  const letters = value.toLowerCase().padEnd(length, " ").split("");

  return (
    <div className="flex gap-2 justify-center">
      {letters.map((char, idx) => (
        <div
          key={idx}
          className="w-10 border-b-2 border-black text-lg text-center font-mono"
        >
          {char !== " " ? char : ""}
        </div>
      ))}
    </div>
  );
}
