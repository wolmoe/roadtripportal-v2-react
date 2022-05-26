import './index.css'

const RoadtripCard = (props) => {
    console.log(props)
    return (
        <article class="card">
            <div class="card-header">
                {/* Wenn kein Bild, nimm das Standardbild - später fixen
                <img src={props.roadtrip.images.length
                    ? `${props.roadtrip.images[0].url}`
                    : "/img/roadtripportal-hero-image-car-on-beach-road.jpg"}
                    alt="" class="card-image" crossorigin /> */}
                <img src={props.roadtrip.images[0].url} class="card-image" />
            </div>
            <div class="card-body">
                <h2>{props.roadtrip.title}</h2>
                <div class="card-meta">
                    <span>{props.roadtrip.author.username}</span>
                    <div>
                        <span>{props.roadtrip.countries.length === 1
                            ? "Land:"
                            : "Länder:"}
                        </span>
                        {props.roadtrip.countries.map(country => (
                            <span class="cat-country">{country}</span>
                        ))}
                    </div>
                    <ul>
                        <li>Start: {props.roadtrip.startCity}</li>
                        <li>Ziel: {props.roadtrip.endCity}</li>
                        <li>Dauer: {props.roadtrip.days.toLocaleString()} Tage</li>
                        <li>Strecke: {props.roadtrip.distance.toLocaleString()} km</li>
                    </ul>
                </div>
                <a class="button btn-secondary btn-card" href={`/roadtrips/${props.roadtrip._id}`}>Weiterlesen</a>
            </div>
        </article>
    )
}

export default RoadtripCard