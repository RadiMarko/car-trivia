export default function LogoDisplay(props) {
    return (
        <div className="logo-display">
            <img className="logo-image" src={props.displayedLogo} alt="The logo of a card brand." />
        </div>
    )
}