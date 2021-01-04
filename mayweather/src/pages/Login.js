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
      errorMessage: "",
      errorMessage_0: "",
      visitorLocation: "",
      isMember: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleLogin_0 = this.handleLogin_0.bind(this);
  }

  handleInputValue = (key) => (e) => {
    // if (this.state.visitorLocation !== e.target.value) {
    // this.setState({ [key]: e.target.value });
    // this.props.handle_a(e.target.value);
    // }
    this.setState({ [key]: e.target.value });
    this.props.handleVisitorLocation(e.target.value);
  };

  handleLogin = () => {
    // 회원로그인
    const { userId, password } = this.state;
    const { handleResponseSuccess } = this.props;
    if (!this.state.userId || !this.state.password) {
      this.setState({ errorMessage: "ID와 비밀번호를 다시 확인해주세요" });
      return;
    } else {
      axios
        .post(
          "https://mayweather24.com/login",
          {
            userId: userId,
            password: password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("post login res >>>", res);
          this.setState({
            isMember: true,
          });
          this.props.handleisMember(this.state.isMember);
          handleResponseSuccess();
        });
    }
  };
  handleLogin_0 = () => {
    // 비회원로그인
    const { handleResponseSuccess } = this.props;
    if (!this.state.visitorLocation) {
      this.setState({ errorMessage_0: "지역을 선택바랍니다." });
      return;
    } else {
      axios
        .post(
          "https://mayweather24.com/login",
          {
            location: this.state.visitorLocation,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("post login res >>>", res);
          this.setState({
            isMember: false,
          });
          this.props.handleisMember(this.state.isMember);
          handleResponseSuccess();
        });
    }
  };

  render() {
    return (
      <div className="login">
        <div>
          <nav className="login_navbar">
            <ul>
              <li>MayWeather24</li>
              <li>
                <Link to="./" className="login_tohome">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <center>
              <h1>Login Page</h1>
            </center>
          </div>
          <div className="loginpage">
            <div className="login_member">
              <h3>회원 로그인</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="idbox">
                  <span>회원 ID</span>&nbsp;
                  <input
                    type="text"
                    placeholder="ID를 입력하세요"
                    onChange={this.handleInputValue("userId")}
                  ></input>
                </div>
                <div className="pwbox">
                  <span>비밀번호</span>&nbsp;
                  <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={this.handleInputValue("password")}
                  ></input>
                </div>
                <br />
                <button
                  className="loginbtn"
                  type="submit"
                  onClick={this.handleLogin}
                >
                  로그인
                </button>
                {<div>{this.state.errorMessage}</div>}
              </form>
              <br />
              <div>
                <Link to="./signup">아직 회원이 아니신가요?</Link>
                <br />
                {/* <Link to="/">비회원으로 로그인하기</Link> */}
              </div>
            </div>
            <div className="login_nonmember">
              <h3>비회원 로그인</h3>
              <br />
              <div>
                보고싶은 도시&nbsp;
                <select onChange={this.handleInputValue("visitorLocation")}>
                  <option value="">도시선택</option>
                  <option value="seoul">서울</option>
                  <option value="incheon">인천</option>
                  <option value="daegu">대구</option>
                  <option value="gwangju">광주</option>
                  <option value="busan">부산</option>
                </select>
                <br />
                <br />
                <br />
                {/* <Link to="./content"> */}
                {/* <button
                  onClick={this.props.handleVisitorLocation.bind(
                    this.state.visitorLocation
                  )}
                >
                  로그인
                </button> */}
                <button type="submit" onClick={this.handleLogin_0}>
                  로그인
                </button>
                {<div>{this.state.errorMessage_0}</div>}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
