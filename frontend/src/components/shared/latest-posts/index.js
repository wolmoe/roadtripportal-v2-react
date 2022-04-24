import './index.css'

const LatestPosts = (props) => {
    return (
        <section className="home-section">
            <h2>Neuste Routen</h2>
            <div className="flex-section">
                {/* neuste drei Beiträge als div loopen */}
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="placeholder"></div>
            </div>
        </section>
    )
}

export default LatestPosts