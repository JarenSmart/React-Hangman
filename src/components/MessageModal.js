import React from "react";

const MessageModal = () => {
  return (
    <div className="modal-container" id="modal-container">
      <div className="modal">
        <h2 id="final-message"></h2>
        <h3 id="final-message-reveal-word"></h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  );
};

export default MessageModal;
