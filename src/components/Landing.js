import React, { useEffect } from 'react';
import LandingPresentWeather from './LandingPresentWeather';
import LandingSearchLocation from './LandingSearchLocation';
import Nav from './Nav';
import Sidebar from './Sidebar';
import axios from 'axios'

const Landing = () => {
    
    // useEffect(() => {
    //     const getPresentWeatherSeoul = async() => {
    //         const getWeatherData = await axios('https://localhost:3002')
    //         console.log("🚀 ~ file: Landing.js ~ line 13 ~ getPresentWeatherSeoul ~ getWeatherData", getWeatherData)
    //         // airQualityIndex: 4
    //         // feelsLike: 6.19
    //         // humidity: 53
    //         // temp: 8.36
    //         // tempMax: 10
    //         // tempMin: 7
    //         // weather: "Clear"
    //         // weatherIcon: "01n"
    //     }        
    //     getPresentWeatherSeoul()
    // },[])

    return (
        <div>
            <Nav />
            <Sidebar />
            <LandingSearchLocation />
            <LandingPresentWeather />
        </div>
    );
};

export default Landing;