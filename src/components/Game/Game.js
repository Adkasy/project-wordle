import React, { useState } from "react";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [arrOfGuess, setArrOfGuess] = useState([]);

  function handleNewGuess(newGuess) {
    setArrOfGuess([...arrOfGuess, newGuess]);
  }

  return (
    <>
      <GuessResult arrOfGuess={arrOfGuess} />
      <GuessInput handleNewGuess={handleNewGuess} />
    </>
  );
}

export default Game;
