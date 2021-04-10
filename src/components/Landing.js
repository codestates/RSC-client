import React from 'react';
import SearchLocation from './SearchLocation';
import Nav from './Nav';
import Sidebar from './Sidebar';
import LandingPresentWeatherContainer from '../container/LandingPresentWeatherContainer';

const Landing = () => {
    return (
        <div>
            <Nav />
            <Sidebar />
            <SearchLocation />
            <LandingPresentWeatherContainer />
        </div>
    );
};

export default Landing;