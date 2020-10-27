import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hangman from "./components/Hangman";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import MessageModal from "./components/MessageModal";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <Header />
      <div className="main-game">
        <Hangman />
        <WrongLetters />
        <Word />
      </div>
    </div>
  );
}

export default App;
