import './index.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Navbar from '../shared/navbar';
import Hero from './hero';
import Stats from '../shared/stats';
import Search from '../shared/search'
import HomeCards from './home-cards';
import Social from '../shared/social';
import Footer from '../shared/footer';
import LatestPosts from '../shared/latest-posts';

const Homepage = (props) => {

    const typedContainer = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedContainer.current, {
            strings: props.countries,
            loop: true,
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 1500
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, [props.countries]);

    return (
        <>
            <Navbar currentUser={props.currentUser} />
            <main>
                <Hero />
                <div className="container" id="post-hero">
                    <Stats
                        styleName={"home-section"}
                        stats={props.stats}
                    />
                    <section className="home-search">
                        <label htmlFor="search" className="home-search-label">Suche Roadtrips in <span ref={typedContainer}></span></label>
                        <div className="home-search-bar">
                            <Search />
                        </div>
                    </section>
                    <HomeCards />
                    <Social styleName={"home-section"} />
                    <LatestPosts />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Homepage