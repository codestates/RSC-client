import React from "react";
import { withRouter } from "react-router-dom";
import map from "../mapofkr.svg";
import LocationListEntry from "./homeComponents/LocationListEntry";
import "../App.css";

const Home = ({ currentWeather, username }) => {
  return !username ? (
    <div className="home">
      <div className="home_title">Welcome to MayWeather Service</div>
      <img src={map} alt="Map" className="map" />
      <div>
        {currentWeather.map((data) => {
          return <LocationListEntry key={data.id} data={data} />;
        })}
      </div>
    </div>
  ) : (
    <div className="home">
      <div className="home_title">Hi, {username}</div>
      <img src={map} alt="Map" className="map" />
      <div>
        {currentWeather.map((data) => {
          return (
            <LocationListEntry key={data.id} data={data} username={username} />
          );
        })}
      </div>
    </div>
  );
};
export default withRouter(Home);
