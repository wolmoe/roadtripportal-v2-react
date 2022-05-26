import './index.css'
import RoadtripCard from '../shared/roadtrip-card'

const Roadtrips = (props) => {
    return (
        <>
            {/* <div id="cluster-map"></div> */}
            <main className="container">
                {/* 
                Suchfunktion von der Hauptseite - später reparieren

                <% if(searchTerm === null) { %> 
                <h1>Alle Roadtrips</h1>
                <% } else { %> 
                <h1>Roadtrips in: <%= searchTerm %> </h1>
                <% } %>

                <% if(roadtrips.length === 0) { %>
                <h3>Keine Routen gefunden</h3>
                <form action="/roadtrips" method="GET">
                    <input type="text" name="search" id="search" placeholder="Neue Suche...">
                    <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></button>
                </form>    
                <% } %> */}

                <a className="button btn-primary" href="/roadtrips/new">Roadtrip hinzufügen</a>

                <section className="roadtrips-container">
                    {props.roadtrips.map(roadtrip => (
                        <RoadtripCard
                            roadtrip={roadtrip}
                        />
                    ))}
                </section>
            </main>

            {/* <script src='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js' crossorigin></script>
            <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-language/v1.0.0/mapbox-gl-language.js' crossorigin></script>
            <script>
                const mapToken = '<%- process.env.MAPBOX_TOKEN %>';
                const mapData = {features: []};
                const roadtrips = <%- JSON.stringify(roadtrips) %>;
                for(let roadtrip of roadtrips) {
                    mapData.features.push(roadtrip.clusterMapData);
        }
            </script>
            <script src="/js/clusterMap.js"></script> */}

        </>
    )
}

export default Roadtrips