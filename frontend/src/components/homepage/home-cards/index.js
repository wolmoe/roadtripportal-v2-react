import './index.css'
import HomeCard from './home-card'

const HomeCards = () => {

    const data = [
        {
            cardId: "home-card-routes",
            linkUrl: "/roadtrips",
            text: "Routen"
        },
        {
            cardId: "home-card-plan",
            linkUrl: "/#",
            text: "Roadtrip planen"
        },
        {
            cardId: "home-card-otr",
            linkUrl: "/#",
            text: "Unterwegs"
        },
        {
            cardId: "home-card-shop",
            linkUrl: "/#",
            text: "Shop"
        },
    ]

    return (
        <section className="home-section flex-section">
            {data.map(card => (
                <HomeCard
                    key={card.cardId}
                    cardId={card.cardId}
                    linkUrl={card.linkUrl}
                    text={card.text}
                />
            ))}
        </section>
    )
}

export default HomeCards