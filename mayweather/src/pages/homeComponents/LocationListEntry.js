import React from "react";

//지역 이름과 실시간 날씨(온도, 날씨아이콘)을 불러옴

const LocationListEntry = ({ location, onClick }) => {
    return (
        // <div className="location">
        <button className="location" onClick={onClick}>
            <div style={{ flex: 7 }}>
                <div className="name">{location.location}</div>
                <p className="temperature">{location.currentTemp}</p>
                {/* <p className="weathericon"> <img src=`http://openweathermap.org/img/wn/${location.currentWeatherIcon}@2x.png` /></p> */}
                <img src={`http://openweathermap.org/img/wn/${location.currentWeatherIcon}@2x.png`} />
            </div>
        </button>
        // </div>
    )
}

export default LocationListEntry;