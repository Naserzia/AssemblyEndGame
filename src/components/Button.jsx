export default function Button({ isGameOver, resetGame }) {
  return (
    isGameOver && (
      <button className="new-game" onClick={() => resetGame()}>
        New Game
      </button>
    )
  );
}
