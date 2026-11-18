import clsx from "clsx";

export default function Keyboard(props) {
  function handleButton(letter) {
    props.setUserGuess(previousState =>
      previousState.includes(letter)
        ? previousState
        : [...previousState, letter],
    );
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElement = alphabet.split("").map(keypad => {
    const isGuessed = props.userGuess.includes(keypad);
    const isCorrect = props.currentGuess.includes(keypad);

    return (
      <button
        key={keypad}
        disabled={props.isGameOver}
        className={clsx("btn-key", {
          "btn-true": isGuessed && isCorrect,
          "btn-false": isGuessed && !isCorrect,
          "btn-disabled": props.isGameOver,
        })}
        aria-disabled={props.isGameOver}
        aria-label={`Letter ${keypad}`}
        onClick={() => handleButton(keypad)}
      >
        {keypad}
      </button>
    );
  });

  return <section className="keyboard">{keyboardElement}</section>;
}
