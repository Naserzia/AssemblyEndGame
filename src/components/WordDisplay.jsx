export default function WordDisplay(props) {
  const wordArray = Array.from(props.currentGuess);

  const displayArray = wordArray.map((letter, index) => (
    <span key={index} className="current-letter">
      {props.userGuess.includes(letter) ? letter : ""}
    </span>
  ));

  return <section className="display-word">{displayArray}</section>;
}
