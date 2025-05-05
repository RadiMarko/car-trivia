export default function Modal(props) {
    return (
        <div className={props.modalDisplayed ? "modal-on" : "modal-off"}>
            <h2>Score</h2>
            <h2 style={{marginTop: "0"}}>Stars</h2>
            <button className="button-on" onClick={props.toggleModal}>CLOSE</button>
        </div>
    )
}