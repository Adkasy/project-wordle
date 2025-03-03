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
  const [numOfGuess, setNumOfGuess] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleNewGuess(newGuess) {
    if (newGuess === answer) {
      setIsCorrect(true);
    }

    setArrOfGuess([...arrOfGuess, newGuess]);
    setNumOfGuess((prev) => prev + 1);
  }

  return (
    <>
      <GuessResult
        arrOfGuess={arrOfGuess}
        theAnswer={answer}
        numOfGuess={numOfGuess}
      />

      <GuessInput
        handleNewGuess={handleNewGuess}
        numOfGuess={numOfGuess}
        isCorrect={isCorrect}
      />
    </>
  );
}

export default Game;
