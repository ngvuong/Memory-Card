export default function ScoreBoard({ level, score, bestScore }) {
  console.log(score);
  return (
    <div className="score-board">
      <div>
        <span>Score: {score}</span>
        <span> Best Score: {bestScore}</span>
      </div>
      <span>Level {level}</span>
    </div>
  );
}
