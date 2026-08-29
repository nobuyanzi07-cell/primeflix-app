function ScoreDial({ score }) {
  const safeScore = typeof score === "number" ? score : 0;
  const percentage = (safeScore / 10) * 100;

  return (
    <div className="score-dial" style={{ "--score": `${percentage}%` }}>
      <div className="score-content">
        <span className="score-value">{safeScore.toFixed(1)}</span>
        <small className="score-max">/10</small>
      </div>
    </div>
  );
}

export default ScoreDial;