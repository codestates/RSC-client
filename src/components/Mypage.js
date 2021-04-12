import React, { useEffect } from 'react';
// import Nav from './Nav';
import './Mypage.css';
import NavContainer from '../container/NavContainer';

const MyPage = ({
            email,
            userName,
            password,
            myLocationName,
            myLocationName2,
            setEmailAction,
            setUserNameAction,
            setPasswordAction,
            getMyLocationNameAction,
            getMyLocationNameAction2,
}) => {
  useEffect(() => {

  },[])

  // const handleChange

  return email?(
    <div className="mypage_container">
      <NavContainer />
      <div className="mypage_profile_title">개인 정보</div>
      <div className="mypage_profile_box">
        <div className="mypage_profile_ID_box">
            <div className="mypage_profile_ID_title">ID</div>
            {/* <div className="mypage_profile_ID_value">test@test.com</div> */}
            <div className="mypage_profile_ID_value">{email}</div>
        </div>
        <div className="mypage_profile_PW_box">
            <div className="mypage_profile_PW_title">비밀번호</div>
            <div className="mypage_profile_PW_value">비밀번호 암호화</div>
            <div className="mypage_profile_PW_change_btn">&#62;	</div>
        </div>
        <div className="mypage_profile_name_box">
            <div className="mypage_profile_name_title">이름</div>
            {/* <div className="mypage_profile_name_value">test</div> */}
            <div className="mypage_profile_name_value">{userName}</div>
            <div className="mypage_profile_name_change_btn">&#62;	</div>
        </div>
        {/* 지역 1*/}
        <div className="mypage_profile_location_1_box">
            <div className="mypage_profile_location_1_title">나의 지역 1</div>
            {/* <div className="mypage_profile_location_1_value">서울</div> */}
            <div className="mypage_profile_location_1_value">{myLocationName}</div>
            <div className="mypage_profile_location_1_change_btn">&#62;	</div>
        </div>
        {/* 지역 2*/}
        <div className="mypage_profile_location_2_box">
            <div className="mypage_profile_location_2_title">나의 지역 2</div>
            {myLocationName2?(
            <div className="mypage_profile_location_2_value">{myLocationName2}</div>
            ):(
              <div className="mypage_profile_location_2_value">즐겨찾는 지역 추가하기</div>
            )}
            <div className="mypage_profile_location_2_change_btn">&#62;	</div>
        </div>
        {/* 반려견 이름 2*/}
        <div className="mypage_profile_pet_name_box">
            <div className="mypage_profile_pet_name_title">반려견 이름</div>
            <div className="mypage_profile_pet_name_value">업데이트 예정</div>
            <div className="mypage_profile_pet_name_change_btn">&#62;	</div>
        </div>
        {/* 품종 2*/}
        <div className="mypage_profile_pet_breed_box">
            <div className="mypage_profile_pet_breed_title">반려견종</div>
            <div className="mypage_profile_pet_breed_value">업데이트 예정</div>
            <div className="mypage_profile_pet_breed_change_btn">&#62;	</div>
        </div>
        {/* 반려견 나이 2*/}
        <div className="mypage_profile_pet_age_box">
            <div className="mypage_profile_pet_age_title">반려견 나이</div>
            <div className="mypage_profile_pet_age_value">업데이트 예정</div>
            <div className="mypage_profile_pet_age_change_btn">&#62;	</div>
        </div>
      </div>
    </div>
  ):(
    <div>
      개인 정보를 불러오는 중입니다...
    </div>
  )
};

export default MyPage;
