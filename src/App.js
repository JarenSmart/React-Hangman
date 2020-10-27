import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hangman from "./components/Hangman";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import MessageModal from "./components/MessageModal";
import Notification from "./components/Notification";
import wordsList from "./components/WordsList";

let selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

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
