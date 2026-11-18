export default function WordDisplay({ currentGuess, userGuess }) {
  const wordArray = Array.from(currentGuess);

  const displayArray = wordArray.map((letter, index) => (
    <span key={index} className="current-letter">
      {currentGuess.includes(letter) ? letter : ""}
    </span>
  ));

  return (
    <>
      <section className="display-word">{displayArray}</section>
      <section className="sr-only" aria-live="polite" role="status">
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
