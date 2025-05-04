export default function Footer(props) {
    
    const message = props.gameStarted ? "" : "RadiMarko";
    
    return (
        <div className="footer">
            <p style={{marginTop: "2rem"}}>{message}</p>
        </div>
    )
}