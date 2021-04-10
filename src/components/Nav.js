import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className="nav_container">
            <div className="nav_logo">
                MayWeather
            </div>
            <div className="nav_sign_in">
                Sign in
            </div>
            <div className="nav_sign_up">
                Sign up
            </div>
        </div>
    );
};

export default Nav;