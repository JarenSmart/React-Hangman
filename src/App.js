import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hangman from "./components/Hangman";

function App() {
  return (
    <div>
      <Header />
      <div className="main-game">
        <Hangman />
      </div>
    </div>
  );
}

export default App;
