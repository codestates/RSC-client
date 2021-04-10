import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './LandingPresentWeather.css'

const LandingPresentWeather = () => {
    
    const [weatherData, setWeatherData] = useState(null)
    const [date, setDate] = useState(null)
   
    const getDate = new Date();
   
    let getMonth = String(getDate.getMonth() + 1);
    if (getMonth.length === 1) {
        getMonth = 0 + getMonth;
    }
   
    let getDayNumber = String(getDate.getDate());
    if (getDayNumber.length === 1) {
        getDayNumber = 0 + getDayNumber;
    }
    
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const getWeekNumber = getDate.getDay()
    const getDay = week[getWeekNumber]
    const hour = getDate.getHours();
    const min = getDate.getMinutes();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        try{
            const getWeatherData = await axios('https://localhost:3002')
            console.log("🚀 ~ file: Landing.js ~ line 13 ~ getPresentWeatherSeoul ~ getWeatherData", getWeatherData)
            // airQualityIndex: 4
            // feelsLike: 15.73
            // humidity: 24
            // temp: 17.32
            // tempMax: 18
            // tempMin: 16
            // weather: "구름조금"
            // weatherIcon: "03d"
            // windDeg: 270
            // windSpeed: 4.12
            // yesterdayTemp: 16.38
            setWeatherData(getWeatherData.data)
            setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`)
            // setWeatherIcon(getWeatherData.weatherIcon)
        } catch(err) {
            console.error(err)
        }
    },[])
    
    
    return weatherData && date?(
        <div className="LandingPresentWeather_container">
            {/* <div className="LandingPresentWeather_date">04.10(토) 15:30</div> */}
            <div className="LandingPresentWeather_date">{date}</div>
            <div className="LandingPresentWeather_weather_box">
                <div className="LandingPresentWeather_div_weather_icon">
                    <img className="LandingPresentWeather_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                    {/* <img className="LandingPresentWeather_weather_icon" src={weatherIcon}
                    alt="date" /> */}
                </div>
                <div className="LandingPresentWeather_weather_description">
                    {weatherData.weatherDescription}
                </div>
            </div>
            <div className="LandingPresentWeather_temp_box">
                <div className="LandingPresentWeather_temp">
                    온도: 1 
                </div>
                <div className="LandingPresentWeather_temp_celsius_icon">
                    &#8451;
                </div>
                <div className="LandingPresentWeather_feel_like">
                    체감(1&#8451;)	
                </div>
                {/*  */}
                {/* 어제보다 기온 높을 때 */}
                 {parseInt(weatherData.tempDifferenceYesterday) < 0 ?(
                    <div className="LandingPresentWeather_yesterday_temp">
                        어제보다 {parseInt(weatherData.tempDifferenceYesterday)}도 높아요
                    </div>
                ):(
                    null
                )}

                {/* 어제보다 기온 낮을 때 */}
                 {parseInt(weatherData.tempDifferenceYesterday) > 0 ?(
                    <div className="LandingPresentWeather_yesterday_temp">
                        어제보다 {parseInt(weatherData.tempDifferenceYesterday)}도 낮아요
                    </div>
                ):(
                    null
                )}

                {/* 기온 똑같을 때 */}
                  {parseInt(weatherData.tempDifferenceYesterday) === 0 ?(
                    <div className="LandingPresentWeather_yesterday_temp">
                        어제와 평균 온도가 같습니다
                    </div>
                ):(
                    null
                )}
                {/*  */}
            </div>
            <hr className="LandingPresentWeather_hr"></hr>
            <div className="LandingPresentWeather_max_min_box">
                <div className="LandingPresentWeather_max">
                    최고 온도: {weatherData.tempMax}&#8451;
                </div>
                <div className="LandingPresentWeather_min">
                    최저 온도: {weatherData.tempMin}&#8451;
                </div>
            </div>
            <div className="LandingPresentWeather_humidity_box">
                <div className="LandingPresentWeather_humidity">
                    습도
                </div>
                <div className="LandingPresentWeather_humidity_value">    
                    {weatherData.humidity}%
                </div>
            </div>
            <div className="LandingPresentWeather_wind_box">
            <div className="LandingPresentWeather_wind">
                바람
            </div>
            <div className="LandingPresentWeather_wind_speeed">
                속도 {weatherData.windSpeed} m/s
            </div>
            <div className="LandingPresentWeather_wind_line">
                        |
            </div>
            <div className="LandingPresentWeather_wind_deg">
                풍향 {weatherData.windDeg}&#176;
            </div>
            </div>
        </div>
    ):(
        <div>
            loading...
        </div>
    );
};

export default LandingPresentWeather;