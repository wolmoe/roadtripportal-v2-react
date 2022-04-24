import './index.css'
import SocialIcons from './social-icons'

const Social = (props) => {
    return (
        <section className={"social-section" + (` ${props.styleName}` || "")}>
            <h2>Hier findest du uns</h2>
            <div className="flex-section">
                <SocialIcons />
            </div>
        </section>
    )
}

export default Social