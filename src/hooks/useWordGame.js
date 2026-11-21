import { useState } from "react";
import { languages } from "../../data/languages";
import { getRandomTargetWord } from "../utils/gameUtils";

const MAX_WRONG_GUESSES = languages.length - 1;

export default function useWordGame() {
  const [targetWord, setTargetWord] = useState(getRandomTargetWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    letter => !targetWord.includes(letter),
  ).length;

  const latestGuess = guessedLetters.at(-1);
  const lastGuessWasWrong =
    latestGuess !== undefined && !targetWord.includes(latestGuess);

  const isLost = wrongGuessCount >= MAX_WRONG_GUESSES;
  const isWon = Array.from(targetWord).every(letter =>
    guessedLetters.includes(letter),
  );
  const isGameOver = isLost || isWon;

  function guessLetter(letter) {
    setGuessedLetters(previousGuesses =>
      previousGuesses.includes(letter)
        ? previousGuesses
        : [...previousGuesses, letter],
    );
  }

  function resetGame() {
    setTargetWord(getRandomTargetWord());
    setGuessedLetters([]);
  }

  return {
    targetWord,
    guessedLetters,
    wrongGuessCount,
    latestGuess,
    lastGuessWasWrong,
    remainingAttempts: MAX_WRONG_GUESSES - wrongGuessCount,
    isLost,
    isWon,
    isGameOver,
    guessLetter,
    resetGame,
  };
}
