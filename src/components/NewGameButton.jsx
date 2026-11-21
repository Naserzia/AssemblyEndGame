export default function NewGameButton({ isGameOver, onResetGame }) {
  return (
    isGameOver && (
      <button className="new-game" onClick={onResetGame}>
        New Game
      </button>
    )
  );
}
