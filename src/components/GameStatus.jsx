import clsx from "clsx";
import { getFarewellMessage } from "../utils/gameUtils";
import { languages } from "../../data/languages";

export default function GameStatus({
  isLost,
  isWon,
  isGameOver,
  lastGuessWasWrong,
  wrongGuessCount,
}) {
  function renderStatusMessage() {
    if (!isGameOver && lastGuessWasWrong) {
      return (
        <p className="farewell-message">
          {getFarewellMessage(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }
    if (isWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }
  return (
    <section
      aria-live="polite"
      role="status"
      className={clsx("game-status", {
        "game-lost": isLost,
        "game-won": isWon,
        farewell: !isGameOver && lastGuessWasWrong,
      })}
    >
      {renderStatusMessage()}
    </section>
  );
}
