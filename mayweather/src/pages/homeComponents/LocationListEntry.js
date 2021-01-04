import React from "react";
import "../../App.css";


const LocationListEntry = ({ location, onClick }) => {
  return (
    <button className="locationbuttons" onClick={onClick}>
      <div>
        <div className="locationname">{location.location}</div>
        <p className="temperature">{location.currentTemp}°C</p>
        <img
          src={`http://openweathermap.org/img/wn/${location.currentWeatherIcon}@2x.png`}
          alt="" className="weathericon"
        />
      </div>
    </button>
  );
};

export default LocationListEntry;
