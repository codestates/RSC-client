import React from 'react';
import SearchLocation from './SearchLocation';
import Nav from './Nav';
import Sidebar from './Sidebar';
import LandingPresentWeatherContainer from '../container/LandingPresentWeatherContainer';
import NavContainer from '../container/NavContainer';

const Landing = () => {
    return (
        <div>
            <NavContainer />
            <Sidebar />
            <SearchLocation />
            <LandingPresentWeatherContainer />
        </div>
    );
};

export default Landing;