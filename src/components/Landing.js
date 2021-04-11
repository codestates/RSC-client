import React from 'react';
import SearchLocation from './SearchLocation';
import Nav from './Nav';
import Sidebar from './Sidebar';
import LandingPresentWeatherContainer from '../container/LandingPresentWeatherContainer';
import SearchLocationContainer from '../container/SearchLocationContainer';
import NavContainer from '../container/NavContainer';

const Landing = () => {
    return (
        <div>
            <NavContainer />
            <Sidebar />
            <SearchLocationContainer />
            <LandingPresentWeatherContainer />
        </div>
    );
};

export default Landing;