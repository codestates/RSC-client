import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import map from "../mapofkr.svg";
import LocationListEntry from "./homeComponents/LocationListEntry";
import "../App.css";

function Home({ locations }) {
  const history = useHistory();
  const handleLocationClick = () => {
    history.push("/login");
  };
  return (
    <div className="homepage">
      <center>
        <div id="hometitle">Welcome to MayWeather24</div>
        <div><img src={map} alt="Map" className="mapimg" /></div>
      </center>
      <div className="buttons">
        {locations.map((location) => {
          return (
            <LocationListEntry
              key={location.id}
              location={location}
              onClick={handleLocationClick}
            />
          );
        })}
      </div>
    </div>
  );
}
export default withRouter(Home);
