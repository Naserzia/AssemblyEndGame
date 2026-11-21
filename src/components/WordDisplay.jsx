import clsx from "clsx";

export default function WordDisplay({
  targetWord,
  guessedLetters,
  remainingAttempts,
  latestGuess,
  isLost,
}) {
  const wordLetters = Array.from(targetWord);

  const displayedLetters = wordLetters.map((letter, index) => {
    const wasGuessed = guessedLetters.includes(letter);
    const shouldRevealLetter = wasGuessed || isLost;

    return (
      <span
        key={index}
        className={clsx("word-letter", {
          "revealed-letter": isLost && !wasGuessed,
        })}
      >
        {shouldRevealLetter ? letter : ""}
      </span>
    );
  });

  return (
    <>
      <section className="display-word">{displayedLetters}</section>
      <section className="sr-only" aria-live="polite" role="status">
        {latestGuess && (
          <p>
            {targetWord.includes(latestGuess)
              ? `Correct! The letter ${latestGuess} is in the word.`
              : `Sorry, the letter ${latestGuess} is not in the word.`}
            You have {remainingAttempts}{" "}
            {remainingAttempts === 1 ? "attempt" : "attempts"} left.
          </p>
        )}
        <p>
          Current Word:{" "}
          {wordLetters
            .map(letter =>
              guessedLetters.includes(letter) || isLost ? letter : "blank",
            )
            .join(" ")}
        </p>
      </section>
    </>
  );
}
