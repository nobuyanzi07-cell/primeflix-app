function ScoreDial({ score }) {
    const percentage = (score / 10) * 100;

    return (
        <div
            className="score-dial"
            style={{ "--score": `${percentage}%` }}
        >
            <div className="score-content">
                <span className="score-value">{score.toFixed(1)}</span>
                <small className="score-max">/10</small>
            </div>
        </div>
    );
}

export default ScoreDial;