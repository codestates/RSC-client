import React, { useEffect, useState } from "react";
// import Nav from './Nav';
import "./Mypage.css";
import NavContainer from "../container/NavContainer";
import axios from "axios";
import { useStore } from "react-redux";

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
  //! 값 바뀌면 리렌더링
  useEffect(() => {}, [userName, myLocationName, myLocationName2]);

  //! 비밀번호 관련
  const [isClickedPasswordBtn, setIsClickedPasswordBtn] = useState(false);
  const [prevPassword, setPrevPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newConfirmPassword, setNewConfirmPassword] = useState(null);
  // error message
  const [prevPasswordErrorMessage, setPrevPasswordErrorMessage] = useState(
    null
  );
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState(null);
  const [
    newPasswordConfirmErrorMessage,
    setNewPasswordConfirmErrorMessage,
  ] = useState(null);
  const hadleOnClickPwBtn = () => {
    setIsClickedPasswordBtn(!isClickedPasswordBtn);
  };
  const handleChangePassword = async (e) => {
    if (newPassword === newConfirmPassword) {
      setNewPasswordConfirmErrorMessage(null);
      const changePassword = await axios.post(
        "https://localhost:3002/mypage/password",
        {
          email,
          prevPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log(
        "🚀 ~ file: Mypage.js ~ line 49 ~ handleChangePassword ~ changePassword",
        changePassword
      );
    } else if (newConfirmPassword.length < 8) {
      setNewPasswordConfirmErrorMessage("8~15자리 사이로 입력해야 합니다");
    } else {
      setNewPasswordConfirmErrorMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  // ! 이름 변경 관련
  const [isClickedNameBtn, setIsClickedNameBtn] = useState(false);
  const [newName, setNewName] = useState(null);
  const handleOnClickNameBtn = () => {
    setIsClickedNameBtn(!isClickedNameBtn);
  };
  const handleChangeName = async () => {
    const changeName = await axios.post(
      "https://localhost:3002/mypage/username",
      {
        newName,
      },
      {
        withCredentials: true,
      }
    );
    const userInfo = await axios("https://localhost:3002/user-info", {
      withCredentials: true,
    });
    setUserNameAction(userInfo.data.name);
    handleOnClickNameBtn();
  };

  //! 지역 1 관련
  const [isClickedLocationOneBtn, setIsClickedLocationOneBtn] = useState(false);
  const [newLocation, setNewLocation] = useState(null);
  const handleOnClickLocationOneBtn = () => {
    setIsClickedLocationOneBtn(!isClickedLocationOneBtn);
  };
  const handleChangeLocation = async () => {
    const changeLocation = await axios.post(
      "https://localhost:3002/mypage/location1",
      {
        prevLocation: myLocationName,
        newLocation,
      },
      {
        withCredentials: true,
      }
    );
    const userInfo = await axios("https://localhost:3002/user-info", {
      withCredentials: true,
    });
    getMyLocationNameAction(userInfo.data.cityName1);
    handleOnClickLocationOneBtn();
  };

  //! 지역2 관련
  const [isClickedLocationTwoBtn, setIsClickedLocationTwoBtn] = useState(false);
  const handleOnClickLocationTwoBtn = () => {
    setIsClickedLocationTwoBtn(!isClickedLocationTwoBtn);
  };
  const handleChangeLocation2 = async () => {
    const changeLocation = await axios.post(
      "https://localhost:3002/mypage/location2",
      {
        prevLocation: myLocationName2,
        newLocation,
      },
      {
        withCredentials: true,
      }
    );
    const userInfo = await axios("https://localhost:3002/user-info", {
      withCredentials: true,
    });
    console.log(
      "🚀 ~ file: Mypage.js ~ line 132 ~ handleChangeLocation2 ~ userInfo",
      userInfo
    );
    getMyLocationNameAction2(userInfo.data.cityName2);
    handleOnClickLocationTwoBtn();
  };
  //! 지역2 제거하기
  const handleRemoveLocation2 = async () => {
    const removeLocation2 = await axios.delete(
      "https://localhost:3002/mypage/location2",
      {
        data: {
          location2: myLocationName2,
        },
        withCredentials: true,
      }
    );
    // console.log(
    //   "🚀 ~ file: Mypage.js ~ line 149 ~ handleRemoveLocation2 ~ removeLocation2",
    //   removeLocation2
    // );
    if (removeLocation2.data.message === "OK") {
      getMyLocationNameAction2(null);
      handleOnClickLocationTwoBtn();
    }
  };

  //!  공통
  const handleInputValue = (key) => (e) => {
    // prevPassword
    if (key === "prevPassword") {
      if (e.target.value.length < 8) {
        setPrevPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
      } else {
        setPrevPasswordErrorMessage(null);
        setPrevPassword(e.target.value);
      }
    }
    // newPassword
    else if (key === "newPassword") {
      if (e.target.value.length < 8) {
        setNewPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
      } else {
        setNewPasswordErrorMessage(null);
        setNewPassword(e.target.value);
      }
    }
    // confirm
    else if (key === "newConfirmPassword") {
      setNewConfirmPassword(e.target.value);
    }
    // 이름
    else if (key === "userName") {
      setNewName(e.target.value);
    }
    // 지역
    else if (key === "newLocation" && e.target.value !== undefined) {
      if (e.target.value === "서울") {
        setNewLocation("서울");
      } else if (e.target.value === "인천") {
        setNewLocation("인천");
      } else if (e.target.value === "대전") {
        setNewLocation("대전");
      } else if (e.target.value === "대구") {
        setNewLocation("대구");
      } else if (e.target.value === "울산") {
        setNewLocation("울산");
      } else if (e.target.value === "부산") {
        setNewLocation("부산");
      } else if (e.target.value === "광주") {
        setNewLocation("광주");
      } else if (e.target.value === "경기도") {
        setNewLocation("경기도");
      } else if (e.target.value === "강원도") {
        setNewLocation("강원도");
      } else if (e.target.value === "충청남도") {
        setNewLocation("충청남도");
      } else if (e.target.value === "충청북도") {
        setNewLocation("충청북도");
      } else if (e.target.value === "전라남도") {
        setNewLocation("전라남도");
      } else if (e.target.value === "전라북도") {
        setNewLocation("전라북도");
      } else if (e.target.value === "경상남도") {
        setNewLocation("경상남도");
      } else if (e.target.value === "경상북도") {
        setNewLocation("경상북도");
      } else if (e.target.value === "제주도") {
        setNewLocation("제주도");
      } else {
        setNewLocation(null);
      }
    }
  };

  return email ? (
    <div className="mypage_container">
      <NavContainer />
      <div className="mypage_profile_title">개인 정보</div>
      <div className="mypage_profile_box">
        <div className="mypage_profile_ID_box">
          <div className="mypage_profile_ID_title">ID</div>
          {/* <div className="mypage_profile_ID_value">test@test.com</div> */}
          <div className="mypage_profile_ID_value">{email}</div>
        </div>
        <div className="mypage_profile_PW_box" onClick={hadleOnClickPwBtn}>
          <div className="mypage_profile_PW_title">비밀번호</div>
          <div className="mypage_profile_PW_value">비밀번호 암호화</div>
          <div className="mypage_profile_PW_change_btn">&#62; </div>
        </div>
        <div className="mypage_profile_name_box" onClick={handleOnClickNameBtn}>
          <div className="mypage_profile_name_title">이름</div>
          {/* <div className="mypage_profile_name_value">test</div> */}
          <div className="mypage_profile_name_value">{userName}</div>
          <div className="mypage_profile_name_change_btn">&#62; </div>
        </div>
        {/* 지역 1*/}
        <div
          className="mypage_profile_location_1_box"
          onClick={handleOnClickLocationOneBtn}
        >
          <div className="mypage_profile_location_1_title">나의 지역 1</div>
          {/* <div className="mypage_profile_location_1_value">서울</div> */}
          <div className="mypage_profile_location_1_value">
            {myLocationName}
          </div>
          <div className="mypage_profile_location_1_change_btn">&#62; </div>
        </div>
        {/* 지역 2*/}
        <div
          className="mypage_profile_location_2_box"
          onClick={handleOnClickLocationTwoBtn}
        >
          <div className="mypage_profile_location_2_title">나의 지역 2</div>
          {myLocationName2 ? (
            <div className="mypage_profile_location_2_value">
              {myLocationName2}
            </div>
          ) : (
            <div className="mypage_profile_location_2_value">
              즐겨찾는 지역 추가하기
            </div>
          )}
          <div className="mypage_profile_location_2_change_btn">&#62; </div>
        </div>
        {/* 반려견 이름 2*/}
        <div className="mypage_profile_pet_name_box">
          <div className="mypage_profile_pet_name_title">반려견 이름</div>
          <div className="mypage_profile_pet_name_value">업데이트 예정</div>
          <div className="mypage_profile_pet_name_change_btn">&#62; </div>
        </div>
        {/* 품종 2*/}
        <div className="mypage_profile_pet_breed_box">
          <div className="mypage_profile_pet_breed_title">반려견종</div>
          <div className="mypage_profile_pet_breed_value">업데이트 예정</div>
          <div className="mypage_profile_pet_breed_change_btn">&#62; </div>
        </div>
        {/* 반려견 나이 2*/}
        <div className="mypage_profile_pet_age_box">
          <div className="mypage_profile_pet_age_title">반려견 나이</div>
          <div className="mypage_profile_pet_age_value">업데이트 예정</div>
          <div className="mypage_profile_pet_age_change_btn">&#62; </div>
        </div>
      </div>
      {/* 변경 모달 */}
      {/* 비밀번호 */}
      {isClickedPasswordBtn ? (
        <div className="mypage_profile_modal_password">
          {/* prev */}
          <div>이전 비밀번호</div>
          <input onChange={handleInputValue("prevPassword")}></input>
          {prevPasswordErrorMessage}
          {/* new */}
          <div>변경할 비밀번호</div>
          <input onChange={handleInputValue("newPassword")}></input>
          {newPasswordErrorMessage}
          {/* confirm */}
          <div>변경할 비밀번호 확인</div>
          <input onChange={handleInputValue("newConfirmPassword")}></input>
          <button onClick={handleChangePassword}>비밀번호 변경</button>
          {newPasswordConfirmErrorMessage}
        </div>
      ) : null}
      {/* 이름 */}
      {isClickedNameBtn ? (
        <div className="mypage_profile_modal_name">
          <div>현재 이름</div>
          <div>{userName}</div>
          <div>변경할 이름</div>
          <input onChange={handleInputValue("userName")}></input>
          <button onClick={handleChangeName}>이름 변경</button>
        </div>
      ) : null}
      {/* 지역 1 */}
      {isClickedLocationOneBtn ? (
        <div className="mypage_profile_modal_location_one">
          <div>현재 지역 1</div>
          <div>{myLocationName}</div>
          <div>변경할 지역</div>
          <input
            className="mypage_profile_modal_location_one_input"
            list="choices"
            placeholder="시, 도로 조회하세요"
            onChange={handleInputValue("newLocation")}
          />
          <datalist id="choices">
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
          <button onClick={handleChangeLocation}>지역 변경하기</button>
        </div>
      ) : null}
      {/* 지역 2 */}
      {isClickedLocationTwoBtn ? (
        <div className="mypage_profile_modal_location_two">
          <div>현재 지역 2</div>
          {myLocationName2 ? (
            <div>
              <div>{myLocationName2}</div>
              <div>변경할 지역</div>
              <div onClick={handleRemoveLocation2}>지역 삭제하기</div>
            </div>
          ) : (
            <div>
              <div>없음</div>
              <div>추가할 지역</div>
            </div>
          )}

          <input
            className="mypage_profile_modal_location_two_input"
            list="choices"
            placeholder="시, 도로 조회하세요"
            onChange={handleInputValue("newLocation")}
          />
          <datalist id="choices">
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
          <button onClick={handleChangeLocation2}>지역 변경하기</button>
        </div>
      ) : null}
    </div>
  ) : (
    <div>개인 정보를 불러오는 중입니다...</div>
  );
};

export default MyPage;
