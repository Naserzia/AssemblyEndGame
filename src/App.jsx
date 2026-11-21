import "./App.css";
import { languages } from "../data/languages";
import { getRandomWord } from "./utils/utils";

import React from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import LanguageBadges from "./components/LanguageBadges";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Button from "./components/Button";
import Confetti from "react-confetti";

function App() {
  const [currentGuess, setCurrentGuess] = React.useState(() => getRandomWord());
  const [userGuess, setUserGuess] = React.useState([]);

  const numGuessesLeft = languages.length - 1;

  const wrongGuessCount = userGuess.filter(
    letter => !currentGuess.toLowerCase().includes(letter.toLowerCase()),
  ).length;

  const lastGuess = userGuess[userGuess.length - 1];
  const isLastGuessWrong =
    lastGuess && !currentGuess.toLowerCase().includes(lastGuess.toLowerCase());

  const isGameLost = wrongGuessCount === numGuessesLeft;
  const isGameWon = [...currentGuess.toLowerCase()].every(letter =>
    userGuess.includes(letter),
  );
  const isGameOver = isGameLost || isGameWon;

  function resetGame() {
    setCurrentGuess(getRandomWord());
    setUserGuess([]);
  }

  return (
    <div className="container">
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
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
        <WordDisplay
          currentGuess={currentGuess}
          userGuess={userGuess}
          numGuessesLeft={numGuessesLeft}
          lastGuess={lastGuess}
          isGameLost={isGameLost}
        />
        <Keyboard
          currentGuess={currentGuess}
          userGuess={userGuess}
          setUserGuess={setUserGuess}
          isGameOver={isGameOver}
        />
        <Button isGameOver={isGameOver} resetGame={resetGame} />
      </main>
    </div>
  );
}

export default App;
