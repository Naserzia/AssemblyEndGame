import clsx from "clsx";

export default function WordDisplay({
  currentGuess,
  userGuess,
  numGuessesLeft,
  lastGuess,
  isGameLost
}) {
  const wordArray = Array.from(currentGuess);
  const revealMissingWordIfLost = isGameLost;

  const displayArray = wordArray.map((letter, index) => (
    <span
      key={index}
      className={clsx("current-letter", {
        "missed-letter": revealMissingWordIfLost && !userGuess.includes(letter),
      })}
    >
      {userGuess.includes(letter) || revealMissingWordIfLost ? letter : ""}
    </span>
  ));

  return (
    <>





      <section className="display-word">{displayArray}</section>





      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentGuess.includes(lastGuess)
            ? `Correct! The letter ${lastGuess} is in the word.`
            : `Sorry, the letter ${lastGuess} is not in the word.`}
          You have {numGuessesLeft} attempt left.
        </p>
        <p>
          Current Word:{" "}
          {currentGuess
            .split("")
            .map(letter => (userGuess.includes(letter) ? letter : "blank"))}
        </p>
      </section>
    </>
  );
}
