export default function Star(props) {

	let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

    return (
        <img src={starIcon} onClick={props.handleClick} className="star--icon" />
    )
}