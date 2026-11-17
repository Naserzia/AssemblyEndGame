import "./App.css";
import { languages } from "../data/languages";

import React from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import LanguageBadges from "./components/LanguageBadges";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";

function App() {
  const [currentGuess, setCurrentGuess] = React.useState("react");
  const [userGuess, setUserGuess] = React.useState([]);

  const wrongGuessCount = userGuess.filter(
    letter => !currentGuess.toLowerCase().includes(letter.toLowerCase()),
  ).length;
  const isGameLost = wrongGuessCount === languages.length - 1;
  const isGameWon = [...currentGuess.toLowerCase()].every(letter =>
    userGuess.includes(letter),
  );
  const isGameOver = isGameLost || isGameWon;

  console.log(isGameOver);
  return (
    <div className="container">
      <Header />
      <main>
        <GameStatus isGameLost={isGameLost} isGameWon={isGameWon} />
        <LanguageBadges wrongGuessCount={wrongGuessCount} />
        <WordDisplay currentGuess={currentGuess} userGuess={userGuess} />
        <Keyboard
          currentGuess={currentGuess}
          userGuess={userGuess}
          setUserGuess={setUserGuess}
        />
        <Button isGameOver={isGameOver} />
      </main>
    </div>
  );
}

export default App;
