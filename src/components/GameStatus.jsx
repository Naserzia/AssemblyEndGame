import clsx from "clsx";

export default function GameStatus({ isGameLost, isGameWon }) {
  return (
    <section
      className={clsx("game-status", {
        "game-lost": isGameLost,
        "game-won": isGameWon,
      })}
    >
      {isGameWon && (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )}
      {isGameLost && (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )}
    </section>
  );
}
