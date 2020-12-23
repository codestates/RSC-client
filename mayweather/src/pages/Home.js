import React from "react";
import map from "../mapofkr.svg"
// import LocationListEntry from "./homeComponents/LocationListEntry";

const Home = ({ locations, handleLocationClick }) => {
    return (
        <div>
            <h1>Welcome to MayWeather Service</h1>
            {/* {locations.map((location) => {
                return (
                    <LocationListEntry locationlist={location} handleClick={handleClick} />
                )
            })} */}
            {/* <div>
                {this.state.locations.map(i => (
                    <p>{i.place}</p>
                ))}
            </div> */}
            <img src={map} alt="Map" />
        </div>
    )
}

export default Home;