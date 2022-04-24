const Stat = (props) => {
    return (
        <article className="stat">
            <span className="stat-figure">{props.figure.toLocaleString()}</span>
            <span className="stat-caption">{props.caption}</span>
        </article>
    )
}

export default Stat