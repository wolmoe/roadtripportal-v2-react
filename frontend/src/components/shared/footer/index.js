import './index.css'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container flex-section">
                <div className="footer-text">
                    &copy; {year} Roadtripportal.com
                </div>
                <div className="footer-menu">
                    <a href="/impressum">Impressum</a>
                    <a href="/datenschutz">Datenschutz</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer