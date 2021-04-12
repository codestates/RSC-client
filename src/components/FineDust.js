import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import './FineDust.css'
import NavContainer from '../container/NavContainer';
import Sidebar from './Sidebar';
import SearchLocationContainer from '../container/SearchLocationContainer';

const FineDust = ({
            cityName,
            airQualityIndex,
            CO,
            NO,
            NO2,
            O3,
            SO2,
            PM2_5,
            PM10,
            NH3,
            getCityNameAction,
            getAirQualityIndexAction,
            getCOAction,
            getNOAction,
            getNO2Action,
            getO3Action,
            getSO2Action,
            getPM2_5Action,
            getPM10Action,
            getNH3Action,
            history
}) => {
            console.log("🚀 ~ file: FineDust.js ~ line 30 ~ NO", NO)
            console.log("🚀 ~ file: FineDust.js ~ line 30 ~ CO", CO)
            console.log("🚀 ~ file: FineDust.js ~ line 30 ~ airQualityIndex", airQualityIndex)
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
            const getAirPollutionData = await axios('https://localhost:3002/fine-dust')
            console.log("🚀 ~ file: FineDust.js ~ line 60 ~ useEffect ~ getAirPollutionData", getAirPollutionData.data)
            //     airQualityIndex: 5
            //     co: 961.3, CO 농도 ( 일산화탄소 ), μg / m 3
            //     nh3: 7.85, NH 3 농도 ( 암모니아 ), μg / m 3
            //     no: 73.31, NO 농도 ( 일산화 질소 ), μg / m 3
            //     no2: 115.16, NO 2 농도 ( 이산화질소 ), μg / m 3
            //     o3: 0, O 3 농도 ( 오존 ), μg / m 3
            //     pm2_5: 71.97, PM 2.5 농도 ( 미립자 물질 ), μg / m 3
            //     pm10: 83.44, PM 10 농도 ( 거친 입자상 물질 ), μg / m 3
            //     so2: 33.85 SO 2 농도 ( 이산화황 ), μg / m 3

            getCityNameAction(getAirPollutionData.data.cityName)
            getAirQualityIndexAction(getAirPollutionData.data.airQualityIndex)
            getCOAction(getAirPollutionData.data.co)
            getNOAction(getAirPollutionData.data.no)
            getNO2Action(getAirPollutionData.data.no2)
            getO3Action(getAirPollutionData.data.o3)
            getSO2Action(getAirPollutionData.data.so2)
            getPM2_5Action(getAirPollutionData.data.pm2_5)
            getPM10Action(getAirPollutionData.data.pm10)
            getNH3Action(getAirPollutionData.data.nh3)

            setDate(`${getMonth}.${getDayNumber}(${getDay}) ${hour}:${min}`)

        } catch(err) {
            console.error(err)
        }
    },[])
    
    
    return airQualityIndex && date?(
        <div>
            <NavContainer />
            <Sidebar />
            <div className="fine_dust_search_location_input">
                <SearchLocationContainer />        
            </div>
        <div className="fine_dust_container">
            {/* <div className="fine_dust_date">04.10(토) 15:30</div> */}
            <div className="fine_dust_date">{date}</div>
            <div className="fine_dust_city">
                    {cityName}
            </div>
            <div className="fine_dust_aqi">
                    대기질 지수: {airQualityIndex}
            </div>
            <hr className="fine_dust_hr"></hr>
            <div className="fine_dust_CO_box">
                <div className="fine_dust_CO_sign">
                    일산화탄소(CO)
                </div>               
                <div className="fine_dust_CO_value">
                    {CO}
                </div>
            </div>
            <div className="fine_dust_humidity_box">
                <div className="fine_dust_CO_sign">
                    암모니아(NH3)
                </div>               
                <div className="fine_dust_CO_value">
                    {NH3}
                </div>
            </div>
            <div className="fine_dust_wind_box">
                <div className="fine_dust_CO_sign">
                    일산화질소(NO)
                </div>               
                <div className="fine_dust_CO_value">
                    {NO}
                </div>
            </div>
            <div className="box">
                <div className="fine_dust_CO_sign">
                    이산화질소
                </div>               
                <div className="fine_dust_CO_value">
                    {NO2}
                </div>
            </div>
            <div className="box2">
                <div className="fine_dust_CO_sign">
                    오존
                </div>               
                <div className="fine_dust_CO_value">
                    {O3}
                </div>
            </div>
            <div className="box3">
                <div className="fine_dust_CO_sign">
                    미립자 물질(PM2_5)
                </div>               
                <div className="fine_dust_CO_value">
                    {PM2_5}
                </div>
            </div>
            <div className="box4">
                <div className="fine_dust_CO_sign">
                    거친 입자상 물질(PM10)
                </div>               
                <div className="fine_dust_CO_value">
                    {PM10}
                </div>
            </div>
            <div className="box5">
                <div className="fine_dust_CO_sign">
                    이산화항(SO2)
                </div>               
                <div className="fine_dust_CO_value">
                    {SO2}
                </div>
            </div>
        </div>
        </div>
    ):(
        <div>
            <NavContainer />
            <Sidebar />
            <SearchLocationContainer />  
            <div className="fine_dust_loading">
                대기질 정보를 가져오는 중입니다...
            </div>
        </div>
    );
};

export default withRouter(FineDust);