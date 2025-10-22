"use client";

import React, { useState } from "react";
import UnderlinedInput from "./underlined-input";

const initialism = "FBI";
const text = "Federal Bureau of Investigation";



export default function Game() {
  const [guess, setGuess] = useState("tests asd");

  return (
    <div>
      <UnderlinedInput value={guess} length={10} />
    </div>
  )
}