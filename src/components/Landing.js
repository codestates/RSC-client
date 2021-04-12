import React from 'react';
import SearchLocation from './SearchLocation';
import Nav from './Nav';
import Sidebar from './Sidebar';
import LandingPresentWeatherContainer from '../container/LandingPresentWeatherContainer';
import SearchLocationContainer from '../container/SearchLocationContainer';
import NavContainer from '../container/NavContainer';
import './Landing.css'

const Landing = () => {
    return (
        <div>
            <NavContainer />
            <Sidebar />
            <div className="landing_search_location_input">
                <SearchLocationContainer />
            </div>
            <LandingPresentWeatherContainer />
        </div>
    );
};

export default Landing;