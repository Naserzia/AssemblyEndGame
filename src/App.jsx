import "./App.css";
import Confetti from "react-confetti";
import useWordGame from "./hooks/useWordGame";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import LanguageBadges from "./components/LanguageBadges";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import NewGameButton from "./components/NewGameButton";

function App() {
  const {
    targetWord,
    guessedLetters,
    wrongGuessCount,
    latestGuess,
    lastGuessWasWrong,
    remainingAttempts,
    isLost,
    isWon,
    isGameOver,
    guessLetter,
    resetGame,
  } = useWordGame();

  return (
    <div className="container">
      {isWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <main>
        <GameStatus
          isLost={isLost}
          isWon={isWon}
          isGameOver={isGameOver}
          wrongGuessCount={wrongGuessCount}
          lastGuessWasWrong={lastGuessWasWrong}
        />
        <LanguageBadges wrongGuessCount={wrongGuessCount} />
        <WordDisplay
          targetWord={targetWord}
          guessedLetters={guessedLetters}
          remainingAttempts={remainingAttempts}
          latestGuess={latestGuess}
          isLost={isLost}
        />
        <Keyboard
          targetWord={targetWord}
          guessedLetters={guessedLetters}
          onGuessLetter={guessLetter}
          isGameOver={isGameOver}
        />
        <NewGameButton
          isGameOver={isGameOver}
          onResetGame={resetGame}
        />
      </main>
    </div>
  );
}

export default App;
