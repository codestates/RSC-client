import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import NavContainer from '../container/NavContainer';
import Sidebar from './Sidebar';
import SearchLocation from './SearchLocation';
import './MyLocation.css'
import SearchLocationContainer from '../container/SearchLocationContainer';
import SignInContainer from '../container/SignInContainer';

const MyLocation = ({
            isLoggedIn,
            //1
            myLocationName,
            myLocationFeelLike,
            myLocationHumidity,
            myLocationTemp,
            myLocationTempMax,
            myLocationTempMin,
            myLocationWeatherDescription,
            myLocationWeatherIcon,
            myLocationWindeDeg,
            myLocationWindSpeed,
            myLocationTempDifferenceYesterday,
            //2 
            myLocationName2,
            myLocationFeelLike2,
            myLocationHumidity2,
            myLocationTemp2,
            myLocationTempMax2,
            myLocationTempMin2,
            myLocationWeatherDescription2,
            myLocationWeatherIcon2,
            myLocationWindeDeg2,
            myLocationWindSpeed2,
            myLocationTempDifferenceYesterday2,
            //1
            getMyLocationNameAction,
            getMyLocationFeelLikeTempAction,
            getMyLocationHumidityAction,
            getMyLocationTempAction,
            getMyLocationTempMaxAction,
            getMyLocationTempMinAction,
            getMyLocationWeatherAction,
            getMyLocationWeatherIconAction,
            getMyLocationWindDegAction,
            getMyLocationWindSpeedAction,
            getMyLocationTempDifferenceYesterdayAction,
            //2
            getMyLocationNameAction2,
            getMyLocationFeelLikeTempAction2,
            getMyLocationHumidityAction2,
            getMyLocationTempAction2,
            getMyLocationTempMaxAction2,
            getMyLocationTempMinAction2,
            getMyLocationWeatherAction2,
            getMyLocationWeatherIconAction2,
            getMyLocationWindDegAction2,
            getMyLocationWindSpeedAction2,
            getMyLocationTempDifferenceYesterdayAction2,
            cityName1,
            cityName2,
            getCityName1Action,
            getCityName2Action,
            history
}) => {
    console.log("🚀 ~ file: MyLocation.js ~ line 62 ~ myLocationName2", myLocationName2)
    console.log("🚀 ~ file: MyLocation.js ~ line 62 ~ myLocationName", myLocationName)
    const [date, setDate] = useState(null)    
    const [isClickedAddBtn, setIsClickedAddBtn] = useState(false);

    const handleOnIsClickedAddBtn = () => {
        setIsClickedAddBtn(!isClickedAddBtn)
    }

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
    useEffect(async () => {
        try{
            const getWeatherData = await axios('https://localhost:3002/my-location',{
                withCredentials: true
            })
            console.log("🚀 ~ file: MyLocation.js ~ line 95 ~ useEffect ~ getWeatherData", getWeatherData)
            // console.log("🚀 ~ file: MyLocation.js ~ line 67 ~ useEffect ~ getWeatherData", getWeatherData)
            const {
                cityName1,
                cityName2,
                feelLike1,
                feelLike2,
                humidity1,
                humidity2,
                temp1,
                temp2,
                tempDifferenceYesterday1,
                tempDifferenceYesterday2,
                tempMax1,
                tempMax2,
                tempMin1,
                tempMin2,
                weatherDescription1,
                weatherDescription2,
                weatherIcon1,
                weatherIcon2,
                windDeg1,
                windDeg2,
                windSpeed1,
                windSpeed2,
            } = getWeatherData.data;
            
            // //! 지역 2개 선택 유저
            if (cityName2) {
                // 1
                getMyLocationNameAction(cityName1)
                getMyLocationFeelLikeTempAction(feelLike1)
                getMyLocationHumidityAction(humidity1)
                getMyLocationTempAction(temp1)
                getMyLocationTempMaxAction(tempMax1)
                getMyLocationTempMinAction(tempMin1)
                getMyLocationWeatherAction(weatherDescription1)
                getMyLocationWeatherIconAction(weatherIcon1)
                getMyLocationWindDegAction(windDeg1)
                getMyLocationWindSpeedAction(windSpeed1)
                getMyLocationTempDifferenceYesterdayAction(tempDifferenceYesterday1)
                // 2
                getMyLocationNameAction2(cityName2)
                getMyLocationFeelLikeTempAction2(feelLike2)
                getMyLocationHumidityAction2(humidity2)
                getMyLocationTempAction2(temp2)
                getMyLocationTempMaxAction2(tempMax2)
                getMyLocationTempMinAction2(tempMin2)
                getMyLocationWeatherAction2(weatherDescription2)
                getMyLocationWeatherIconAction2(weatherIcon2)
                getMyLocationWindDegAction2(windDeg2)
                getMyLocationWindSpeedAction2(windSpeed2)
                getMyLocationTempDifferenceYesterdayAction2(tempDifferenceYesterday2)
            } else {
                getMyLocationNameAction(cityName1)
                getMyLocationFeelLikeTempAction(feelLike1)
                getMyLocationHumidityAction(humidity1)
                getMyLocationTempAction(temp1)
                getMyLocationTempMaxAction(tempMax1)
                getMyLocationTempMinAction(tempMin1)
                getMyLocationWeatherAction(weatherDescription1)
                getMyLocationWeatherIconAction(weatherIcon1)
                getMyLocationWindDegAction(windDeg1)
                getMyLocationWindSpeedAction(windSpeed1)
                getMyLocationTempDifferenceYesterdayAction(tempDifferenceYesterday1)
            }

            setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`)
        } catch(err) {
            console.error(err)
        }
    },[cityName2])

    return isLoggedIn && myLocationName ?(
        <div className="my_location_container">
            <NavContainer />
            <Sidebar />
            <div className="my_location_title">
                나의 지역
            </div>
            <div className="my_location_box">
                {/* //! 1번 째 칸 */}
                <div className="my_location_data_1">
                    <div className="my_location_data_1_date">{date}</div>
                    <div className="my_location_data_1_weather_box">
                        <div className="LandingPresentWeather_city">
                            {myLocationName}
                        </div>
                        <div className="my_location_data_1_div_weather_icon">
                            <img className="my_location_data_1_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                            {/* <img className="my_location_data_1_weather_icon" src={weatherIcon}
                            alt="date" /> */}
                        </div>
                        <div className="my_location_data_1_weather_description">
                        {myLocationWeatherDescription}
                        </div>
                    </div>
                    <div className="my_location_data_1_temp_box">
                        <div className="my_location_data_1_temp">
                            온도: {myLocationTemp}
                        </div>
                        <div className="my_location_data_1_temp_celsius_icon">
                            &#8451;
                        </div>
                        <div className="my_location_data_1_feel_like">
                            체감({myLocationFeelLike}&#8451;)	
                        </div>
                        {/*  */}
                        {/* 어제보다 기온 높을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday) < 0 ?(
                            <div className="my_location_data_1_yesterday_temp">
                                어제보다 {Math.abs(parseInt(myLocationTempDifferenceYesterday))}도 높아요
                            </div>
                            ):(
                                null
                        )}
                        {/* 어제보다 기온 낮을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday) > 0 ?(
                            <div className="my_location_data_1_yesterday_temp">
                                어제보다 {parseInt(myLocationTempDifferenceYesterday)}도 낮아요
                            </div>
                        ):(
                            null
                        )}
                        {/* 기온 똑같을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday) === 0 ?(
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
                            최고 온도: {myLocationTempMax}&#8451;
                        </div>
                        <div className="my_location_data_1_min">
                            최저 온도: {myLocationTempMin}&#8451;
                        </div>
                    </div>
                    <div className="my_location_data_1_humidity_box">
                        <div className="my_location_data_1_humidity">
                            습도
                        </div>
                        <div className="my_location_data_1_humidity_value">    
                            {myLocationHumidity}%
                        </div>
                    </div>
                    <div className="my_location_data_1_wind_box">
                        <div className="my_location_data_1_wind">
                            바람
                        </div>
                        <div className="my_location_data_1_wind_speeed">
                            속도 {myLocationWindSpeed} m/s
                        </div>
                        <div className="my_location_data_1_wind_line">
                                    |
                        </div>
                        <div className="my_location_data_1_wind_deg">
                            풍향 {myLocationWindeDeg}&#176;
                        </div>
                    </div>
                </div>
                {/* //! 2번 째 칸 */}
                {myLocationName2? (
                <div className="my_location_data_2">
                    {/* <div className="my_location_data_2_date">{date}</div> */}
                    <div className="my_location_data_2_weather_box">
                        <div className="LandingPresentWeather_city">
                            {myLocationName2}
                        </div>
                        <div className="my_location_data_2_div_weather_icon">
                            <img className="my_location_data_2_weather_icon" src='http://openweathermap.org/img/wn/01n@2x.png' alt="date" /> 
                            {/* <img className="my_location_data_2_weather_icon" src={weatherIcon}
                            alt="date" /> */}
                        </div>
                        <div className="my_location_data_2_weather_description">
                        {myLocationWeatherDescription2}
                        </div>
                    </div>
                    <div className="my_location_data_2_temp_box">
                        <div className="my_location_data_2_temp">
                            온도: {myLocationTemp2}
                        </div>
                        <div className="my_location_data_2_temp_celsius_icon">
                            &#8451;
                        </div>
                        <div className="my_location_data_2_feel_like">
                            체감({myLocationFeelLike2}&#8451;)	
                        </div>
                        {/*  */}
                        {/* 어제보다 기온 높을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday2) < 0 ?(
                            <div className="my_location_data_2_yesterday_temp">
                                어제보다 {Math.abs(parseInt(myLocationTempDifferenceYesterday2))}도 높아요
                            </div>
                            ):(
                                null
                        )}
                        {/* 어제보다 기온 낮을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday2) > 0 ?(
                            <div className="my_location_data_2_yesterday_temp">
                                어제보다 {parseInt(myLocationTempDifferenceYesterday2)}도 낮아요
                            </div>
                        ):(
                            null
                        )}
                        {/* 기온 똑같을 때 */}
                        {parseInt(myLocationTempDifferenceYesterday2) === 0 ?(
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
                            최고 온도: {myLocationTempMax2}&#8451;
                        </div>
                        <div className="my_location_data_2_min">
                            최저 온도: {myLocationTempMin2}&#8451;
                        </div>
                    </div>
                    <div className="my_location_data_2_humidity_box">
                        <div className="my_location_data_2_humidity">
                            습도
                        </div>
                        <div className="my_location_data_2_humidity_value">    
                            {myLocationHumidity2}%
                        </div>
                    </div>
                    <div className="my_location_data_2_wind_box">
                        <div className="my_location_data_2_wind">
                            바람
                        </div>
                        <div className="my_location_data_2_wind_speeed">
                            속도 {myLocationWindSpeed2} m/s
                        </div>
                        <div className="my_location_data_2_wind_line">
                                    |
                        </div>
                        <div className="my_location_data_2_wind_deg">
                            풍향 {myLocationWindeDeg2}&#176;
                        </div>
                    </div>
                </div>
                ):(
                    <div className="my_location_empty_box">
                        <div className="my_location_add_message" onClick={handleOnIsClickedAddBtn}>
                            즐겨찾기 지역 추가하기
                        </div>    
                        {isClickedAddBtn?
                        (
                            <div className="my_location_search_location_input">
                                <SearchLocationContainer />
                            </div>    
                        ):(
                            null
                        )}
                    </div>
                )}
            </div>
        </div>
        ):(
        <div className="my_location_container">
            <NavContainer />
            <Sidebar />
                {isLoggedIn?(
                <div className="my_location_guest_message">
                    날씨 정보를 가져오고 있습니다...
                </div>
                ):(
                <div className="my_location_guest_message">
                    로그인 시 이용 가능합니다.
                </div>
                )}
                {isLoggedIn?(
                    null
                ):(
                    <SignInContainer />
                )}
        </div>
    );
};

export default withRouter(MyLocation);