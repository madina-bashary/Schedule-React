
export default function Card (props) {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.img} alt="There is a photo of place where you want to visit!" />
            </div>
            <div className="content">
                <h3 className="location">{props.location}</h3>
                <a src={props.mapLink} className="map--link">View on Google Maps</a>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}