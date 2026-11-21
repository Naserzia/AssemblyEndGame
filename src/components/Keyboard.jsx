import clsx from "clsx";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export default function Keyboard({
  targetWord,
  guessedLetters,
  onGuessLetter,
  isGameOver,
}) {
  const keyboardKeys = ALPHABET.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = targetWord.includes(letter);

    return (
      <button
        key={letter}
        disabled={isGameOver}
        className={clsx("btn-key", {
          "btn-true": isGuessed && isCorrect,
          "btn-false": isGuessed && !isCorrect,
          "btn-disabled": isGameOver,
        })}
        aria-label={`Letter ${letter}`}
        onClick={() => onGuessLetter(letter)}
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard">{keyboardKeys}</section>;
}
