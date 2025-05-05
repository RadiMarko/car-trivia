import { useState } from 'react'

export default function Input(props) {
    
    // STATE FOR STRING TYPED BY USER
    const [inputValue, setInputValue] = useState("");
    
    function handleChange(e) {
        setInputValue(e.target.value);
    }
    
    function handleClick() {
        // Sending input value to App.jsx parent
        props.onSubmit(inputValue);
        
        // Clearing input after submitting
        setInputValue("");
    }
    
    function handleSkipClick(event) {
        event.target.blur(); // Line to prevent bug when pressing enter or space after clicking skip button
        handleClick();
    }
    
    function handleKeyPress(e) {
        if (e.key === "Enter" && inputValue.trim().length > 0) {
            handleClick();
        }
    }
    
    return (
        <div className="input-section">
            <button className={props.gameStarted ? "skip-button-on" : "button-off"}
                    onClick={handleSkipClick}
            >SKIP</button>
            <input className="input-field"
                   value={inputValue}
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
                   maxLength={18}
                   placeholder="Type car brand name"></input>
            <button style={{fontSize: "1.1rem"}}
                    className={props.gameStarted ? "button-on" : "button-off"}
                    onClick={handleClick}
                    disabled={inputValue.trim().length === 0}>
                    ENTER
            </button>
        </div>
    )
}