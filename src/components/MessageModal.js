import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const MessageModal = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "You win!😃 Do you want to play again?";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lost") {
    finalMessage = "Sorry, you lose. Do you want to play again?";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="modal-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="modal">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default MessageModal;
