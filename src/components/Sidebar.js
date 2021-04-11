import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <Link to="/my-location">
                <div className="sidebar_category_weather">
                    나의 지역 날씨
                </div>
            </Link>
            <Link to="/fine-dust">
                <div className="sidebar_category_fine_dust">
                    미세먼지
                </div>
            </Link>
            <Link>
                <div className="sidebar_category_dog_sensing_temperatuer">
                    반려견 체감 온도
                </div>
            </Link>
            <Link>
                <div className="sidebar_category_find_dog_friend">
                    반려견 산책 친구 찾기
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;