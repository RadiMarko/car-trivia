export default function Footer(props) {
    
    let message = "";
    
    if(props.gameStarted && props.array.length < 59) {
        message = (
            <>
                Previous answer: <strong>{props.lastCorrectAnswer}</strong>
            </>
        );
    } else if(!props.gameStarted) {
        message = "RadiMarko";
    }
    
    return (
        <div className="footer">
            <p style={{marginTop: "2rem"}}>{message}</p>
        </div>
    )
}