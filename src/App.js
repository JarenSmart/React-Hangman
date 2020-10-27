import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleKeydown = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // somethingElseHere
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            // somethingElseHere
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <div>
      <Header />
      <div className="main-game">
        <Hangman />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </div>
  );
}

export default App;
