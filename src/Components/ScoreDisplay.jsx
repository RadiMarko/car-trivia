export default function ScoreDisplay(props) {
    
    return (
        <div>
            <p className={props.scoreClass}>Current score: {props.scoreCounter}</p>
            <h2 style={{marginTop: "0"}}>Remaining logos: {props.array.length}</h2>
        </div>
    )
}