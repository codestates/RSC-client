import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './Nav.css'
import axios from 'axios'

const Nav = ({
    isLoggedIn,
    setEmailAction,
    setUserNameAction,
    changeLoggedInStateAction,
    history
}) => {

    const handleScroll = () => {
        window.scrollTo(0,0)
    }
    
    const handleGoHome = () => {
        handleScroll()
        history.push('/')
    }

    const handleLogout = async () => {
        const logout = await axios.post(
            'https://localhost:3002/logout',
            null,
            {
            withCredentials: true
            })
        console.log("🚀 ~ file: Nav.js ~ line 15 ~ handleLogout ~ logout", logout)
        if (logout.data.message === "Logout completed") {
            changeLoggedInStateAction()
            setEmailAction(null)
            setUserNameAction(null)
            handleScroll()
            history.push('/')
        }
    }
    return (
        <div className="nav_container">
            <Link to="/">
                <div className="nav_logo" onClick={handleScroll}>
                    MayWeather
                </div>
            </Link>
            {isLoggedIn?(
                <div className="nav_sign_box">
                    <Link to="/mypage">    
                        <div className="nav_mypage">
                            mypage
                        </div>
                    </Link>
                        <div className="nav_logout" onClick={handleLogout}>
                            log out
                        </div>
                </div>
            ):(
                <div className="nav_sign_box">
                    <Link to="/sign-in">    
                        <div className="nav_sign_in">
                            Sign in
                        </div>
                    </Link>
                    <Link to="/sign-up">
                        <div className="nav_sign_up">
                            Sign up
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default withRouter(Nav);