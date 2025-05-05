export default function GameButtons(props) {

    function handleClick(event) {
        event.target.blur(); // Line to prevent bug when pressing enter or space after clicking start button
        props.startGame();
        props.pickRandomIndex();

    }
    
    return (
        
        <div className="game-buttons">
            <button 
                className={props.gameStarted ? "button-off" : "button-on"}
                onClick={handleClick}
                style={{width: "8rem", height: "3rem", fontSize: "1.1rem" }}
            >START
            </button>
            <button
                className={props.gameStarted ? "reset-button-on" : "button-off"}
                onClick={() => {props.reset();}}
                style={{width: "8rem", height: "3rem", fontSize: "1.1rem" }}
            >RESET
            </button>
        </div>
    )
}