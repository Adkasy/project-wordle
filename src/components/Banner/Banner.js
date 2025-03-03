import React from "react";

function Banner({ theAnswer, numOfGuess, isShowBannerWin, isShowBannerLose }) {
  return (
    <div>
      {isShowBannerWin && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numOfGuess} guesses</strong>.
          </p>
        </div>
      )}

      {isShowBannerLose && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{theAnswer}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Banner;
