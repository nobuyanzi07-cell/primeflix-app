function ScoreDial({score}){
const percentage =(score/10)*100
<div className="score-dial">
    <span className="score-value">{score.toFixed(1)}</span>
    <small className="score-max">/10</small>
</div>

}
export default ScoreDial