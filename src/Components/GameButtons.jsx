export default function GameButtons(props) {
    return (
        <div className="game-buttons">
            <button 
                className={props.gameStarted ? "button-off" : "button-on"}
                onClick={() => {props.startGame(); props.pickRandomIndex();}}
                style={{width: "8rem", height: "3rem", fontSize: "1.1rem" }}
            >START
            </button>
            <button
                className={props.gameStarted ? "button-on" : "button-off"}
                onClick={() => {props.reset();}}
                style={{width: "8rem", height: "3rem", fontSize: "1.1rem" }}
            >RESET
            </button>
        </div>
    )
}