import React from "react";
import { range } from "../../utils";

function GuessResult({ arrOfGuess }) {
  return (
    <>
      <div className="guess-results">
        {/* {arrOfGuess.map((perArr, index) => {
          return (
            <p className="guess" key={index}>
              {perArr.split("").map((char, index) => {
                return <span className="cell">{char}</span>;
              })}
            </p>
          );
        })} */}

        {range(0, 6, 1).map(() => {
          return (
            <p className="guess">
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResult;
