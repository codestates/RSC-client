import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import './SearchLocation.css'
import axios from 'axios'

const SearchLocation = ({ history }) => {
    const [cityId, setCityId] = useState(null)    

    const handleInputValue = (key) => (e) => {
        if (key === "city" && e.target.value !== undefined) {
            if(e.target.value === '서울') {
                setCityId(1835847)
            } else if (e.target.value === '인천') {
                setCityId(1843561)    
            } else if (e.target.value === '대전') {
                setCityId(1835224)
            } else if (e.target.value === '대구') {
                setCityId(1835327)
            } else if (e.target.value === '울산') {
                setCityId(1833742)
            } else if (e.target.value === '부산') {
                setCityId(1838519)
            } else if (e.target.value === '광주') {
                setCityId(1841808)
            } else if (e.target.value === '경기도') {
                setCityId(1841610)
            } else if(e.target.value === '강원도') {
                setCityId(1843125)
            } else if (e.target.value === '충청남도') {
                setCityId(1845105)
            } else if (e.target.value === '충청북도') {
                setCityId(1845106)
            } else if (e.target.value === '전라남도') {
                setCityId(1845788)
            } else if (e.target.value === '전라북도') {
                setCityId(1845789)
            } else if (e.target.value === '경상남도') {
                setCityId(1902028)
            } else if (e.target.value === '경상북도') {
                setCityId(1841597)
            } else if (e.target.value === '제주도') {
                setCityId(1846265)
            } else {
                setCityId(null)
            }
          }
      };

        

    const handleOnClickSearchBtn = async () => {
        const getWeatherData = await axios.post(
            'https://localhost:3002/weather',
            {
                cityId
            }
        )
        console.log("🚀 ~ file: SearchLocation.js ~ line 21 ~ handleOnClickSearchBtn ~ getWeatherData", getWeatherData)
        history.push('/weather')
    }

    return (
        <div className="searchLocation_container">
            <div className="searchLocation_input_box">                
                {/* <input className="searchLocation_input" placeholder="시로 조회하세요"
                onChange={handleInputValue('city')}>
                </input> */}
        
          <input className="searchLocation_input" list="choices" placeholder="시, 도로 조회하세요" onChange={handleInputValue('city')}/>
            <datalist id="choices" >
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="대전">대전</option>
              <option value="대구">대구</option>
              <option value="울산">울산</option>
              <option value="부산">부산</option>
              <option value="광주">광주</option>
              <option value="경기도">경기도</option>
              <option value="강원도">강원도</option>
              <option value="충청남도">충청남도</option>
              <option value="충청북도">충청북도</option>
              <option value="전라남도">전라남도</option>
              <option value="전라북도">전라북도</option>
              <option value="경상남도">경상남도</option>
              <option value="경상북도">경상북도</option>
              <option value="제주도">제주도</option>
            </datalist>
        
                <button className="searchLocation_btn" onClick={handleOnClickSearchBtn}>검색</button>
            </div>
        </div>
    );
};

export default withRouter(SearchLocation);