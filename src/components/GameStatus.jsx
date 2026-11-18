import clsx from "clsx";
import { getFarewellText } from "../utils/utils";
import { languages } from "../../data/languages";

export default function GameStatus({
  isGameLost,
  isGameWon,
  isGameOver,
  isLastGuessWrong,
  wrongGuessCount,
}) {
  function renderGameStatus() {
    if (!isGameOver && isLastGuessWrong) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isGameLost) {
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
        "game-lost": isGameLost,
        "game-won": isGameWon,
        farewell: !isGameOver && isLastGuessWrong,
      })}
    >
      {renderGameStatus()}
    </section>
  );
}
