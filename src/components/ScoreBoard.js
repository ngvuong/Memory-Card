export default function ScoreBoard({ level, score, bestScore }) {
  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
      <h2>Best: {bestScore}</h2>
      <h2>Level {level}</h2>
    </div>
  );
}
