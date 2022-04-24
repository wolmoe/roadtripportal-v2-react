const HomeCard = (props) => {
    return (
        <article className="home-card" id={props.cardId}>
            <a href={props.linkUrl} className="button home-card-btn">{props.text} &gt;</a>
        </article>
    )
}

export default HomeCard