import React, { use, useEffect } from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResult({ arrOfGuess, theAnswer, numOfGuess }) {
  return (
    <>
      <div className="guess-results">
        {/* {arrOfGuess.map((guessWord, rowIndex) => (
          <Guess guessWord={guessWord} key={rowIndex} />
        ))} */}

        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess
            guessWord={arrOfGuess[num]}
            key={num}
            theAnswer={theAnswer}
            numOfGuess={numOfGuess}
          />
        ))}
      </div>
    </>
  );
}

export default GuessResult;
