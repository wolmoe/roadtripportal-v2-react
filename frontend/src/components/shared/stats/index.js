import './index.css'
import Stat from './stat'

const Stats = (props) => {
    return (
        <section className={"flex-section" + (` ${props.styleName}` || "")}>
            <Stat figure={props.stats.routes || 0} caption={props.stats.routes === 1 ? "Route" : "Routen"} />
            <Stat figure={props.stats.countries || 0} caption={props.stats.countries === 1 ? "Land" : "Länder"} />
            <Stat figure={props.stats.kms || 0} caption={"Kilometer"} />
        </section>

    )
}

export default Stats