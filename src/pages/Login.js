import axios from "axios";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      errorMessage: null,
      visitorLocation: "",
      isMember: true,
    };
    this.GITHUB_LOGIN_URL =
      // "https://github.com/login/oauth/authorize?client_id=6867d50bdac21ac39bf3";
      "https://github.com/login/oauth/authorize?client_id=d46efc606830ce6cb42e";
  }

  //! 소셜로그인 깃허브로 어사인
  socialLoginHandler() {
    window.location.assign(this.GITHUB_LOGIN_URL); // 로그인 할 때 마다 authorizationCode가 매번 다르게 나옴.
  }

  // ! 추가 : 로그인 시 회원/비회원 선택
  handleIsMember = () => {
    this.setState({ isMember: !this.state.isMember });
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
    console.log(this.state.visitorLocation);
  };
  // ! 회원 로그인
  handleLogin = async (e) => {
    e.preventDefault();
    const { userId, password } = this.state;
    // 아이디 입력 안했을 시
    if (this.state.userId === "") {
      this.setState({ errorMessageForID: "ID를 입력해 주세요" });
    } else {
      this.setState({ errorMessageForID: null });
    }
    // 비밀번호 입력 안했을 시
    if (this.state.password === "") {
      this.setState({ errorMessageForPW: "비밀번호를 입력해 주세요" });
    } else {
      this.setState({ errorMessageForPW: null });
    }
    // 모두 입력 시
    if (this.state.userId !== "" && this.state.password !== "") {
      this.setState({ errorMessageForID: null });
      this.setState({ errorMessageForPW: null });
      const succeedLogin = await axios.post(
        "https://mayweather24.com/login",
        {
          userId: userId,
          password: password,
        },
        { withCredentials: true }
      );
      // 로그인 성공 시
      if (succeedLogin) {
        this.props.handleResponseSuccess();
      }
    }
  };

  //! 비회원 로그인 함수
  handleNonmemberLogin = async (e) => {
    const succeedLogin = await axios.post(
      "https://mayweather24.com/login",
      {
        location: e.target.value,
      },
      { withCredentials: true }
    );
    console.log(
      "🚀 ~ file: Login.js ~ line 79 ~ Login ~ handleNonmemberLogin= ~ succeedLogin.data.nonMember1",
      succeedLogin.data.nonMember1
    );
    // 로그인 성공 시
    if (succeedLogin.data.nonMember1) {
      this.props.handleResponseSuccess2(succeedLogin.data.nonMember1); // ! -> App.js에 정의된 함수
    }
  };

  render() {
    const { isMember } = this.state;
    const { handleIsMember } = this;
    return isMember ? (
      // ! 회원 로그인
      // 1.로그인 페이지
      <div className="loginpage">
        {/* 2. 버튼 */}
        <div className="btnMemberOrNonmember">
          <ul>
            <li className="firstLi">
              <button className="loginBtn_isMember">회원 로그인</button>
            </li>
            <li className="secondLi">
              <button className="loginBtn_isMember" onClick={handleIsMember}>
                비회원 로그인
              </button>
            </li>
          </ul>
        </div>
        {/* 3. 로그인 네모 칸 */}
        <div className="login_box">
          <div className="login_box_isMember">회원 로그인</div>
          <form onSubmit={this.handleLogin}>
            <input
              className="login_input"
              type="text"
              placeholder="ID를 입력하세요"
              onChange={this.handleInputValue("userId")}
            ></input>
            {<div className="errorMsg">{this.state.errorMessageForID}</div>}
            <div>
              <input
                className="login_input"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={this.handleInputValue("password")}
              ></input>
              {<div className="errorMsg">{this.state.errorMessageForPW}</div>}
            </div>
            <button
              className="loginBtn"
              type="submit"
              onClick={this.handleLogin}
            >
              로그인
            </button>
            <button
              className="loginBtn"
              // type="submit"
              // onClick={this.props.socialLoginHandler}
            >
              {/* 시간 되면 깃허브 아이콘 넣기, 사이즈 줄이기 */}
              소셜로그인
            </button>
          </form>
          <br />
          <div>
            {/* 밑줄 제거 */}
            <Link
              to="./signup"
              style={{ textDecoration: "none", color: "#0066CC" }}
            >
              <div className="login_box_isNotMember">
                아직 회원이 아니신가요?
              </div>
            </Link>
            <br />
          </div>
        </div>
      </div>
    ) : (
      // ! 비회원 로그인
      // 1. 로그인 페이지
      <div className="loginpage">
        {/* 2. 버튼 */}
        <div className="btnMemberOrNonmember">
          <ul>
            <li className="firstLi">
              <button className="loginBtn_isMember" onClick={handleIsMember}>
                회원 로그인
              </button>
            </li>
            <li className="secondLi">
              <button className="loginBtn_isMember">비회원 로그인</button>
            </li>
          </ul>
        </div>
        {/* 3. 로그인 네모 칸 */}
        <div className="login_box">
          <div className="login_box_isMember">비회원 로그인</div>
          <span className="whichCity">도시 선택</span>

          <select
            name="location"
            defaultValue={"DEFAULT"}
            onChange={this.handleNonmemberLogin}
          >
            <option value="DEFAULT" disabled>
              Select Location...
            </option>

            <option value="seoul">Seoul</option>
            <option value="incheon">Incheon</option>
            <option value="daegu">Daegu</option>
            <option value="gwangju">Gwangju</option>
            <option value="busan">Busan</option>
          </select>

          <Link to="./content">{/* <button>날씨 보기</button> */}</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
