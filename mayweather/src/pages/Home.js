import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import map from "../mapofkr.svg";
import LocationListEntry from "./homeComponents/LocationListEntry";

function Home({ locations }) {
    const history = useHistory();
    const handleLocationClick = () => {
        history.push("login")
    }
    console.log("locations >>>", locations)
    return (
        <div>
            <h1>Welcome to MayWeather Service</h1>
            <img src={map} alt="Map" />
            <div>
                {locations.map((location) => {
                    return (
                        <LocationListEntry key={location.id} location={location} onClick={handleLocationClick} />
                        // <Link to="/Login">{location.location}</Link>
                    )
                })}
            </div>
        </div>
    );
}

export default withRouter(Home);
