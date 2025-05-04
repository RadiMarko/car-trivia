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
    
    return (
        <div class="input-section">
            <input className="input-field" value={inputValue} onChange={handleChange} maxLength={18} placeholder="Type car brand name"></input>
            <button className={props.gameStarted ? "button-on" : "button-off"} onClick={handleClick}>ENTER</button>
        </div>
    )
}