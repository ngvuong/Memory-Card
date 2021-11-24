export default function ScoreBoard({ level, score, bestScore }) {
  console.log(score);
  return (
    <div className="score-board">
      Score: {score}
      Best Score: {bestScore}
      Level {level}
    </div>
  );
}
