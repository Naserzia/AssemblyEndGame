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

  const lastGuess = userGuess[userGuess.length - 1];
  const isLastGuessWrong =
    lastGuess && !currentGuess.toLowerCase().includes(lastGuess.toLowerCase());

  const isGameLost = wrongGuessCount === languages.length - 1;
  const isGameWon = [...currentGuess.toLowerCase()].every(letter =>
    userGuess.includes(letter),
  );
  const isGameOver = isGameLost || isGameWon;

  return (
    <div className="container">
      <Header />
      <main>
        <GameStatus
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          isGameOver={isGameOver}
          wrongGuessCount={wrongGuessCount}
          isLastGuessWrong={isLastGuessWrong}
        />
        <LanguageBadges wrongGuessCount={wrongGuessCount} />
        <WordDisplay currentGuess={currentGuess} userGuess={userGuess} />
        <Keyboard
          currentGuess={currentGuess}
          userGuess={userGuess}
          setUserGuess={setUserGuess}
          isGameOver={isGameOver}
        />
        <Button isGameOver={isGameOver} />
      </main>
    </div>
  );
}

export default App;
