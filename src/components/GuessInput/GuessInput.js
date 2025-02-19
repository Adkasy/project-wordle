import React, { useState } from "react";

function GuessInput({ handleNewGuess }) {
  const [input, setInput] = useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();

          let inputToUpperCase = input.toUpperCase();
          console.log({ answer: inputToUpperCase });

          handleNewGuess(inputToUpperCase);
          setInput("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
