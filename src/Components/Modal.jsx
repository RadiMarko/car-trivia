export default function Modal(props) {
    
    let scorePercentage = Math.round((props.score / props.array.length) * 1000) / 10;

    const starArray = [
        <span style={{fontSize:"400%", color:"yellow"}}>★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★★</span>,
        <span style={{fontSize:"400%", color:"yellow"}}>★★★★★</span>
    ]

    function getStars(score) {
        if (score >= 50) {
            return starArray[4];
        } else if (score >= 40) {
            return starArray[3];
        } else if (score >= 30) {
            return starArray[2];
        } else if (score >= 20) {
            return starArray[1];
        } else if (score < 20) {
            return starArray[0];
        }
    }
    
    return (
        <div className={props.modalDisplayed ? "modal-on" : "modal-off"}>
            <h2>Final score: {props.score}/{props.array.length} logos ({scorePercentage}%)</h2>
            <h2 style={{marginTop: "0"}}>{getStars(props.score)}</h2>
            <button className="button-on" onClick={() => {props.toggleModal(); props.reset()}}>CLOSE</button>
        </div>
    )
}