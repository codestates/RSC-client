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
      visitorLocation: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    // if (this.state.visitorLocation !== e.target.value) {
    this.setState({ [key]: e.target.value });
    this.props.handle_a(e.target.value);
    // }
  };

  handleLogin = () => {
    const { userId, password } = this.state;
    const { handleResponseSuccess } = this.props;
    if (this.state.userId === "" || this.state.password === "") {
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
          console.log(res);
          return res;
        })
        .then((res) => {
          // handleResponseSuccess();
          axios
            .get("https://mayweather24.com/content", null, {
              withCredential: true,
            })
            .then((res) => console.log(res));
        });
    }
  };
  render() {
    return (
      <div>
        <div>
          <center>
            <h1>로그인하기</h1>
          </center>
        </div>
        <div className="loginpage">
          <div className="login_member">
            <h3>회원 로그인</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                {/* <span>ID</span> */}
                <input
                  type="text"
                  placeholder="ID를 입력하세요"
                  onChange={this.handleInputValue("userId")}
                ></input>
              </div>
              <div>
                {/* <span>비밀번호</span> */}
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
              <Link to="./content">
                <button>날씨 보기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
