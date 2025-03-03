import React, { useState } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

function Guess({ guessWord, theAnswer, numOfGuess }) {
  let resultClass;
  let isShowBannerWin = false;
  let isShowBannerLose = false;

  // For Showing Guess Result
  if (guessWord) {
    resultClass = checkGuess(guessWord, theAnswer);
  } else {
    resultClass = [];
  }

  // For Showing Win Banner
  if (guessWord === theAnswer) {
    isShowBannerWin = true;
  }

  // For Showing Lose Banner
  if (numOfGuess === 6 && guessWord !== theAnswer) {
    isShowBannerLose = true;
  }

  return (
    <>
      <p className="guess">
        {range(5).map((num) => {
          return (
            <span
              key={num}
              className={`cell ${resultClass[num]?.status || ""}`}
            >
              {guessWord ? guessWord[num] : ""}
            </span>
          );
        })}
      </p>

      <Banner
        numOfGuess={numOfGuess}
        theAnswer={theAnswer}
        isShowBannerWin={isShowBannerWin}
        isShowBannerLose={isShowBannerLose}
      />
    </>
  );
}

export default Guess;
