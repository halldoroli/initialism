import React from "react";

interface UnderlinedInputProps {
  value: string;
  length: number;
}

export default function UnderlinedInput({
  value,
  length,
}: UnderlinedInputProps) {
  const letters = value.toLowerCase().padEnd(length, " ").split("");

  return (
    <div className="flex justify-center gap-2">
      {letters.map((char, idx) => (
        <div
          key={idx}
          className="w-10 border-b-2 border-black text-center font-mono text-lg"
        >
          {char !== " " ? char : ""}
        </div>
      ))}
    </div>
  );
}
