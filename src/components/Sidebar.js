import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_category_weather">
                날씨
            </div>
            <div className="sidebar_category_fine_dust">
                미세먼지
            </div>
            <div className="sidebar_category_dog_sensing_temperatuer">
                반려견 체감 온도
            </div>
            <div className="sidebar_category_find_dog_friend">
                반려견 산책 친구 찾기
            </div>
        </div>
    );
};

export default Sidebar;