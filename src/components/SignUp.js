/* eslint react/prop-types: 0 */


import React, {useState} from 'react';
import Nav from './Nav';
import { Link, withRouter } from "react-router-dom";
import './SignUp.css'
import axios from 'axios'

const SignUp = ({history}) => {
    const [isClickSignUpnBtn, setIsClickSignUpBtn] = useState(false)
    
    const [usernameInputValue, setUsernameInputValue] = useState(null);
    const [emailInputValue, setEmailInputValue] = useState(null);
    const [passwordInputValue, setPasswordInputValue] = useState(null);

    const [usernameErrorMessage, setUsernameErrorMessage] = useState("이름을 입력해 주세요.");
    const [emailErrorMessage, setEmailErrorMessage] = useState("올바른 이메일 형식이 아닙니다");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("8~15자리 사이로 입력해야 합니다");
    const [locationErrorMessage, setLocationErrorMessage] = useState("한 개의 지역은 필수로 선택해야 합니다");
    
    const [city1, setCity1] = useState(null)    
    const [city2, setCity2] = useState(null)    

    const handleInputValue = (key) => (e) => {
        if (key === "username" && e.target.value !== undefined) {
            setUsernameErrorMessage(null);
            setUsernameInputValue(e.target.value)
            console.log('usernameInputValue값은?', usernameInputValue)
          }
        else if (key === "email") {
          const emailValue = e.target.value.split("@");
          if (emailValue.length !== 2) {
            setEmailErrorMessage("올바른 이메일 형식이 아닙니다");
          } else {
            setEmailErrorMessage(null);
            setEmailInputValue(e.target.value);
            console.log("emailInputValue값은?", emailInputValue);
          }
        } else if (key === "password") {
          if (e.target.value.length < 8) {
            console.log('e.target.value',e.target.value)
            setPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
          } else {
            console.log('e.target.value',e.target.value)
            setPasswordErrorMessage(null);
            setPasswordInputValue(e.target.value);
            console.log("passwordInputValue값은?", passwordInputValue);
          }
        }  else if (key === "city1" && e.target.value !== undefined) {
          setLocationErrorMessage(null)
          if(e.target.value === '서울') {
              setCity1('서울')
          } else if (e.target.value === '인천') {
              setCity1('인천')
          } else if (e.target.value === '대전') {
              setCity1('대전')
          } else if (e.target.value === '대구') {
              setCity1('대구')
          } else if (e.target.value === '울산') {
              setCity1('울산')
          } else if (e.target.value === '부산') {
              setCity1('부산')
          } else if (e.target.value === '광주') {
              setCity1('광주')
          } else if (e.target.value === '경기도') {
              setCity1('경기도')
          } else if(e.target.value === '강원도') {
              setCity1('강원도')
          } else if (e.target.value === '충청남도') {
              setCity1('충청남도')
          } else if (e.target.value === '충청북도') {
              setCity1('충청북도')
          } else if (e.target.value === '전라남도') {
              setCity1('전라남도')
          } else if (e.target.value === '전라북도') {
              setCity1('전라북도')
          } else if (e.target.value === '경상남도') {
              setCity1('경상남도')
          } else if (e.target.value === '경상북도') {
              setCity1('경상북도')
          } else if (e.target.value === '제주도') {
              setCity1('제주도')
          } else {
              setCity1(null)   
          }
        } else if (key === "city2" && e.target.value !== undefined) {
            setLocationErrorMessage(null)
            if(e.target.value === '서울') {
                setCity2('서울')
            } else if (e.target.value === '인천') {
                setCity2('인천')
            } else if (e.target.value === '대전') {
                setCity2('대전')
            } else if (e.target.value === '대구') {
                setCity2('대구')
            } else if (e.target.value === '울산') {
                setCity2('울산')
            } else if (e.target.value === '부산') {
                setCity2('부산')
            } else if (e.target.value === '광주') {
                setCity2('광주')
            } else if (e.target.value === '경기도') {
                setCity2('경기도')
            } else if(e.target.value === '강원도') {
                setCity2('강원도')
            } else if (e.target.value === '충청남도') {
                setCity2('충청남도')
            } else if (e.target.value === '충청북도') {
                setCity2('충청북도')
            } else if (e.target.value === '전라남도') {
                setCity2('전라남도')
            } else if (e.target.value === '전라북도') {
                setCity2('전라북도')
            } else if (e.target.value === '경상남도') {
                setCity2('경상남도')
            } else if (e.target.value === '경상북도') {
                setCity2('경상북도')
            } else if (e.target.value === '제주도') {
                setCity2('제주도')
            } else {
                setCity2(null)
            }
        }
      };

      const handleOnClickSignUpBtn = async () => {
        try{
            setIsClickSignUpBtn(true)
       
        if (usernameErrorMessage === null && emailErrorMessage === null && passwordErrorMessage === null && city1 !== null ) {
          const signUp = await axios.post(
              "https://localhost:3002/sign-up",
              {
                  name: usernameInputValue,
                  email: emailInputValue,
                  password: passwordInputValue,
                  city1,
                  city2
              },
              {
                  withCredentials: true,
              }
          );
          console.log("🚀 ~ file: SignUp.js ~ line 59 ~ handleOnClickSignUpBtn ~ signUp", signUp)
          
          if(signUp) {
            window.alert('회원가입이 완료 되었습니다.')      
            history.push('/sign-in')
          } 
        } 
    } catch(err) {
      console.error(err)
      window.alert('이미 존재하는 아이디입니다.')   
    }
  }

    return (
    <div className="sign_up_container">
      <Nav />
      <div className="sign_up_container_title">Sign up</div>
      <div className="sign_up_box_notice">*표시는 필수입력입니다.</div>
      {/*//! 회원가입 박스 */}
      <div className="sign_up_box">
      {/*//! 이름 */}
        <div className="sign_up_box_name_sign">이름 *</div>
        <div className="sign_up_box_name">
            <input className="sign_up_box_input_name" placeholder="User name" onChange={handleInputValue('username')}></input>
        </div>
        <div className="sign_up_box_name_error_message">
            {isClickSignUpnBtn? usernameErrorMessage : null}
        </div>
        {/*//! 아이디 */}
        <div className="sign_up_box_id_sign">아이디 *</div>
        <div className="sign_up_box_id">
            <input className="sign_up_box_input_id" placeholder="Email" onChange={handleInputValue('email')}></input>
        </div>
        <div className="sign_up_box_id_error_message">
            {isClickSignUpnBtn? emailErrorMessage : null}
        </div>
        {/*//! 비밀번호 */}
        <div className="sign_up_box_password_sign">비밀번호 *</div>
        <div className="sign_up_box_password">
        <input className="sign_up_box_input_password" placeholder="Password" onChange={handleInputValue('password')}></input>
        </div>
        <div className="sign_up_box_password_error_message">
            {isClickSignUpnBtn? passwordErrorMessage : null}
        </div>
        {/* 임시 띄어씌기 용 */}
        <div></div>
        {/*//! 지역 1*/}
        <div className="sign_up_box_location_sign">지역 1 *</div>
        <div className="sign_up_box_location">
          <input className="sign_up_box_input_location_1" list="choices" placeholder="시, 도로 조회하세요" onChange={handleInputValue('city1')}/>
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
        </div>
        <div className="sign_up_box_pet_error_message">
            {isClickSignUpnBtn? locationErrorMessage : null}
        </div>
        <div>
        </div>
          {/*//! 지역 2*/}
        <div className="sign_up_box_location_sign">지역 2</div>
        <div className="sign_up_box_location">
          <input className="sign_up_box_input_location_2" list="choices" placeholder="시, 도로 조회하세요" onChange={handleInputValue('city2')}/>
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
        </div>        
        {/* 회원가입 버튼 */}
        <div className="sign_up_box_create_btn_div">
            <button className="sign_up_box_create_btn" onClick={handleOnClickSignUpBtn}>회원가입</button>
        </div>
        <div className="sign_up_box_hr"></div>
        <div className="sign_up_box_already_have">
            <Link to="/sign-in">
            <div className="sign_up_box_already_have_text">이미 아이디가 있으신가요?</div>
            </Link>
        </div>
    </div>
</div>
    )
};

export default withRouter(SignUp);