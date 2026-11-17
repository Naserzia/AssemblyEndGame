export default function Button({ isGameOver }) {
  return isGameOver && <button className="new-game">New Game</button>;
}
