import './index.css'

const Navbar = (props) => {
    const toggleNavbar = () => {
        const navbar = document.querySelector('.navbar');
        const topNav = document.querySelectorAll('.top-nav');
        const mainNav = document.getElementById('js-menu');
        const hamBars = document.querySelectorAll('.ham-bar')
        mainNav.classList.toggle('active');
        navbar.classList.toggle('nav-bg');
        topNav.forEach(el => el.classList.toggle('nav-open'));
        hamBars.forEach(el => el.classList.toggle('open'));
    }


    return (
        <nav className="navbar">
            <button className="mobile-menu top-nav" onClick={toggleNavbar}>
                <div className="ham-bar bar-one"></div>
                <div className="ham-bar bar-two"></div>
                <div className="ham-bar bar-three"></div>
            </button>
            <a className="logo top-nav" href="/">Roadtripportal.com</a>
            <ul className="main-nav" id="js-menu">
                <li><a href="/roadtrips" className="nav-links">Routen</a></li>
                <li><a href="#" className="nav-links">Roadtrip planen</a></li>
                <li><a href="#" className="nav-links">Unterwegs</a></li>
                <li><a href="#" className="nav-links">Über uns</a></li>
                <li><a href="/dashboard" className="nav-links">Meine Roadtrips</a></li>
                <li><a href="#" className="nav-links">Shop</a></li>
                <li><a href={!props.currentUser ? "/login" : "/logout"} className="nav-links">
                    {!props.currentUser ? 'Anmelden' : 'Abmelden'}
                </a>
                </li>
                <li><a href="#" className="nav-links" id="nav-search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path className="search-icon"
                            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                    </svg>
                </a></li>
            </ul>
        </nav>
    )
}

export default Navbar