import React from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";

//지역 이름과 실시간 날씨(온도, 날씨아이콘)을 불러옴

const LocationListEntry = ({ data, username }) => {
  // ! 날씨 버튼 누르면 로그인 페이지 이동
  const history = useHistory();
  const handleLocationClick1 = () => {
    history.push("/login");
  };
  const handleLocationClick2 = () => {
    history.push("/content");
  };

  return !username ? (
    <div className="locationbuttons">
      <button className="locationbutton" onClick={handleLocationClick1}>
        <div className="locationbuttonName">{data.location}</div>
        <div className="locationbuttonTemp">{data.currentTemp}</div>
        <img
          className="locationbuttonIcon"
          alt="weatherIcon"
          src={`http://openweathermap.org/img/wn/${data.currentWeatherIcon}@2x.png`}
        />
      </button>
    </div>
  ) : (
    <div className="locationbuttons">
      <button className="locationbutton" onClick={handleLocationClick2}>
        <div className="locationbuttonName">{data.location}</div>
        <p className="locationbuttonTemp">{data.currentTemp}</p>
        <img
          className="locationbuttonIcon"
          alt="weatherIcon"
          src={`http://openweathermap.org/img/wn/${data.currentWeatherIcon}@2x.png`}
        />
      </button>
    </div>
  );
};

export default LocationListEntry;
