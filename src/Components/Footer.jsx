export default function Footer(props) {
    
    let message = "";
    
    if(props.gameStarted && props.array.length < 59) {
        message = `Previous answer: ${props.lastCorrectAnswer}`;
    } else if(!props.gameStarted) {
        message = "RadiMarko";
    }
    
    return (
        <div className="footer">
            <p style={{marginTop: "2rem"}}>{message}</p>
            <button onClick={props.test}>TEST</button>
        </div>
    )
}