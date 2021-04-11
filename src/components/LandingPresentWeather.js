import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import './LandingPresentWeather.css'

const LandingPresentWeather = ({
            cityName,
            feelLike,
            humidity,
            temp,
            tempMax,
            tempMin,
            weatherDescription,
            weatherIcon,
            windDeg,
            windSpeed,
            tempDifferenceYesterday,
            getCityNameAction,
            getFeelLikeTempAction,
            getHumidityAction,
            getTempAction,
            getTempMaxAction,
            getTempMinAction,
            getWeatherAction,
            getWeatherIconAction,
            getWindDegAction,
            getWindSpeedAction,
            getTempDifferenceYesterdayAction,
            history
}) => {
    console.log("🚀 ~ file: LandingPresentWeather.js ~ line 33 ~ cityName", cityName)
    
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
            console.log("🚀 ~ file: LandingPresentWeather.js ~ line 60 ~ useEffect ~ getWeatherData", getWeatherData.data)
            //     airQualityIndex: 5
            //     feelLike: 9.33
            //     humidity: 53
            //     temp: 9.33
            //     tempDifferenceYesterday: 0.7699999999999996
            //     tempMax: 10
            //     tempMin: 9
            //     weatherDescription: "맑음"
            //     weatherIcon: "01n"
            //     windDeg: 210
            //     windSpeed: 0.51
            getCityNameAction(getWeatherData.data.cityName)
            getFeelLikeTempAction(getWeatherData.data.feelLike)
            getHumidityAction(getWeatherData.data.humidity)
            getTempAction(getWeatherData.data.temp)
            getTempMaxAction(getWeatherData.data.tempMax)
            getTempMinAction(getWeatherData.data.tempMin)
            getWeatherAction(getWeatherData.data.weatherDescription)
            getWeatherIconAction(`'http://openweathermap.org/img/wn/${getWeatherData.data.weatherIcon}@2x.png`)
            getWindDegAction(getWeatherData.data.windDeg)
            getWindSpeedAction(getWeatherData.data.windSpeed)
            getTempDifferenceYesterdayAction(getWeatherData.data.tempDifferenceYesterday)

            setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`)
        } catch(err) {
            console.error(err)
        }
    },[])
    
    
    return temp && date?(
        <div className="LandingPresentWeather_container">
            {/* <div className="LandingPresentWeather_date">04.10(토) 15:30</div> */}
            <div className="LandingPresentWeather_date">{date}</div>
            <div className="LandingPresentWeather_weather_box">
                <div className="LandingPresentWeather_city">
                    {cityName}
                </div>
                <div className="LandingPresentWeather_div_weather_icon">
                    <img className="LandingPresentWeather_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                    {/* <img className="LandingPresentWeather_weather_icon" src={weatherIcon}
                    alt="date" /> */}
                </div>
                <div className="LandingPresentWeather_weather_description">
                    {weatherDescription}
                </div>
            </div>
            <div className="LandingPresentWeather_temp_box">
                <div className="LandingPresentWeather_temp">
                    온도: {temp}
                </div>
                <div className="LandingPresentWeather_temp_celsius_icon">
                    &#8451;
                </div>
                <div className="LandingPresentWeather_feel_like">
                    체감({feelLike}&#8451;)	
                </div>
                {/*  */}
                {/* 어제보다 기온 높을 때 */}
                 {parseInt(tempDifferenceYesterday) < 0 ?(
                    <div className="LandingPresentWeather_yesterday_temp">
                        어제보다 {Math.abs(parseInt(tempDifferenceYesterday))}도 높아요
                    </div>
                ):(
                    null
                )}

                {/* 어제보다 기온 낮을 때 */}
                 {parseInt(tempDifferenceYesterday) > 0 ?(
                    <div className="LandingPresentWeather_yesterday_temp">
                        어제보다 {parseInt(tempDifferenceYesterday)}도 낮아요
                    </div>
                ):(
                    null
                )}

                {/* 기온 똑같을 때 */}
                  {parseInt(tempDifferenceYesterday) === 0 ?(
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
                    최고 온도: {tempMax}&#8451;
                </div>
                <div className="LandingPresentWeather_min">
                    최저 온도: {tempMin}&#8451;
                </div>
            </div>
            <div className="LandingPresentWeather_humidity_box">
                <div className="LandingPresentWeather_humidity">
                    습도
                </div>
                <div className="LandingPresentWeather_humidity_value">    
                    {humidity}%
                </div>
            </div>
            <div className="LandingPresentWeather_wind_box">
            <div className="LandingPresentWeather_wind">
                바람
            </div>
            <div className="LandingPresentWeather_wind_speeed">
                속도 {windSpeed} m/s
            </div>
            <div className="LandingPresentWeather_wind_line">
                        |
            </div>
            <div className="LandingPresentWeather_wind_deg">
                풍향 {windDeg}&#176;
            </div>
            </div>
        </div>
    ):(
        <div>
            loading...
        </div>
    );
};

export default withRouter(LandingPresentWeather);