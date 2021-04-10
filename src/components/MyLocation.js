import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import Nav from './Nav';
import Sidebar from './Sidebar';
import SearchLocation from './SearchLocation';
import './MyLocation.css'

const MyLocation = ({
           airQualityInde,
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
            getAirQualityIndexAction,
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
    
    useEffect(() => {
        setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`)
    },[])
    return (
        <div className="my_location_container">
            <Nav />
            <Sidebar />
            <div className="my_location_title">
                나의 지역
            </div>
            <div className="my_location_box">
                {/* //! 1번 째 칸 */}
                <div className="my_location_data_1">
                    <div className="my_location_data_1_date">{date}</div>
                    <div className="my_location_data_1_weather_box">
                        <div className="my_location_data_1_div_weather_icon">
                            <img className="my_location_data_1_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                            {/* <img className="my_location_data_1_weather_icon" src={weatherIcon}
                            alt="date" /> */}
                        </div>
                        <div className="my_location_data_1_weather_description">
                        {weatherDescription}
                        </div>
                    </div>
                    <div className="my_location_data_1_temp_box">
                        <div className="my_location_data_1_temp">
                            온도: {temp}
                        </div>
                        <div className="my_location_data_1_temp_celsius_icon">
                            &#8451;
                        </div>
                        <div className="my_location_data_1_feel_like">
                            체감({feelLike}&#8451;)	
                        </div>
                        {/*  */}
                        {/* 어제보다 기온 높을 때 */}
                        {parseInt(tempDifferenceYesterday) < 0 ?(
                            <div className="my_location_data_1_yesterday_temp">
                                어제보다 {Math.abs(parseInt(tempDifferenceYesterday))}도 높아요
                            </div>
                            ):(
                                null
                        )}
                        {/* 어제보다 기온 낮을 때 */}
                        {parseInt(tempDifferenceYesterday) > 0 ?(
                            <div className="my_location_data_1_yesterday_temp">
                                어제보다 {parseInt(tempDifferenceYesterday)}도 낮아요
                            </div>
                        ):(
                            null
                        )}
                        {/* 기온 똑같을 때 */}
                        {parseInt(tempDifferenceYesterday) === 0 ?(
                            <div className="my_location_data_1_yesterday_temp">
                                어제와 평균 온도가 같습니다
                            </div>
                        ):(
                            null
                        )}
                        {/*  */}
                    </div>
                    <hr className="my_location_data_1_hr"></hr>
                    <div className="my_location_data_1_max_min_box">
                        <div className="my_location_data_1_max">
                            최고 온도: {tempMax}&#8451;
                        </div>
                        <div className="my_location_data_1_min">
                            최저 온도: {tempMin}&#8451;
                        </div>
                    </div>
                    <div className="my_location_data_1_humidity_box">
                        <div className="my_location_data_1_humidity">
                            습도
                        </div>
                        <div className="my_location_data_1_humidity_value">    
                            {humidity}%
                        </div>
                    </div>
                    <div className="my_location_data_1_wind_box">
                        <div className="my_location_data_1_wind">
                            바람
                        </div>
                        <div className="my_location_data_1_wind_speeed">
                            속도 {windSpeed} m/s
                        </div>
                        <div className="my_location_data_1_wind_line">
                                    |
                        </div>
                        <div className="my_location_data_1_wind_deg">
                            풍향 {windDeg}&#176;
                        </div>
                    </div>
                </div>
                {/* //! 2번 째 칸 */}
                <div className="my_location_data_2">
                    {/* <div className="my_location_data_2_date">{date}</div> */}
                    <div className="my_location_data_2_weather_box">
                        <div className="my_location_data_2_div_weather_icon">
                            <img className="my_location_data_2_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                            {/* <img className="my_location_data_2_weather_icon" src={weatherIcon}
                            alt="date" /> */}
                        </div>
                        <div className="my_location_data_2_weather_description">
                        {weatherDescription}
                        </div>
                    </div>
                    <div className="my_location_data_2_temp_box">
                        <div className="my_location_data_2_temp">
                            온도: {temp}
                        </div>
                        <div className="my_location_data_2_temp_celsius_icon">
                            &#8451;
                        </div>
                        <div className="my_location_data_2_feel_like">
                            체감({feelLike}&#8451;)	
                        </div>
                        {/*  */}
                        {/* 어제보다 기온 높을 때 */}
                        {parseInt(tempDifferenceYesterday) < 0 ?(
                            <div className="my_location_data_2_yesterday_temp">
                                어제보다 {Math.abs(parseInt(tempDifferenceYesterday))}도 높아요
                            </div>
                            ):(
                                null
                        )}
                        {/* 어제보다 기온 낮을 때 */}
                        {parseInt(tempDifferenceYesterday) > 0 ?(
                            <div className="my_location_data_2_yesterday_temp">
                                어제보다 {parseInt(tempDifferenceYesterday)}도 낮아요
                            </div>
                        ):(
                            null
                        )}
                        {/* 기온 똑같을 때 */}
                        {parseInt(tempDifferenceYesterday) === 0 ?(
                            <div className="my_location_data_2_yesterday_temp">
                                어제와 평균 온도가 같습니다
                            </div>
                        ):(
                            null
                        )}
                        {/*  */}
                    </div>
                    <hr className="my_location_data_2_hr"></hr>
                    <div className="my_location_data_2_max_min_box">
                        <div className="my_location_data_2_max">
                            최고 온도: {tempMax}&#8451;
                        </div>
                        <div className="my_location_data_2_min">
                            최저 온도: {tempMin}&#8451;
                        </div>
                    </div>
                    <div className="my_location_data_2_humidity_box">
                        <div className="my_location_data_2_humidity">
                            습도
                        </div>
                        <div className="my_location_data_2_humidity_value">    
                            {humidity}%
                        </div>
                    </div>
                    <div className="my_location_data_2_wind_box">
                        <div className="my_location_data_2_wind">
                            바람
                        </div>
                        <div className="my_location_data_2_wind_speeed">
                            속도 {windSpeed} m/s
                        </div>
                        <div className="my_location_data_2_wind_line">
                                    |
                        </div>
                        <div className="my_location_data_2_wind_deg">
                            풍향 {windDeg}&#176;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MyLocation);