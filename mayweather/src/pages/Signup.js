import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import "./signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      email: "",
      username: "",
      location1: "",
      location2: "",
      errorMessage:
        "비어 있는 값이 있습니다. 혹은 중복된 도시가 선택되었습니다. 확인 바랍니다.",
    };
    this.WriteUserInfo = this.WriteUserInfo.bind(this);
    this.handlerSignup = this.handlerSignup.bind(this);
  }
  WriteUserInfo = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleErrorMessage = () => {
    <div>{alert(`${this.state.errorMessage}`)}</div>;
  };
  handlerSignup_0 = () => {
    this.handlerSignup();
  };
  handlerSignup() {
    if (
      this.state.userId === "" || // 아이디값이 비어있을때
      this.state.password === "" || // 비밀번호값이 비어있을때
      this.state.email === "" || // 이메일이 비어있을때
      this.state.username === "" || // 유저이름이 비어있을때 // 지역1이 비어있을 때
      (this.state.location1 === "" && this.state.location2 === "") || // 도시 둘다 선택안했을 때
      this.state.location1 === this.state.location2 // 도시 값이 둘다 같을 때
    ) {
      this.handleErrorMessage();
    } else {
      this.setState({
        errorMessage: "",
      });
      if (this.state.location1 !== "" && this.state.location2 === "") {
        // 도시1만 값이 있을 때
        axios
          .post(
            "https://mayweather24.com/signup",
            {
              userId: this.state.userId,
              password: this.state.password,
              email: this.state.email,
              username: this.state.username,
              location: `${this.state.location1}`,
            },
            { withCredentials: true }
          )
          .then(() => this.props.history.push("/login"))
          .catch((err) => console.log(err));
      } else if (this.state.location1 === "" && this.state.location2 !== "") {
        // 도시2만 값이 있을 때
        axios
          .post(
            "https://mayweather24.com/signup",
            {
              userId: this.state.userId,
              password: this.state.password,
              email: this.state.email,
              username: this.state.username,
              location: `${this.state.location2}`,
            },
            { withCredentials: true }
          )
          .then(() => this.props.history.push("/login"))
          .catch((err) => console.log(err));
      } else {
        // 둘다 값이 있을 때
        axios
          .post(
            "https://mayweather24.com/signup",
            {
              userId: this.state.userId,
              password: this.state.password,
              email: this.state.email,
              username: this.state.username,
              location: `${this.state.location1},${this.state.location2}`,
            },
            { withCredentials: true }
          )
          .then(() => this.props.history.push("/login"))
          .catch((err) => console.log(err));
      }
    }
  }
  render() {
    return (
      <div >
        <nav>
          <ul>
            <li>MayWeather24</li>
            <li>
              <Link to="./" className="login_tohome">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <div className="signupbox">
          <div className="signup">
            <h2 className="pg_title">회원가입</h2>
            <div>모든 항목을 작성해야 합니다.</div><br />
            <div>
              <input
                className="inputbox"
                type="text"
                placeholder="userId"
                onChange={this.WriteUserInfo("userId")}
              ></input>
            </div>
            <br></br>
            <div>
              <input
                className="inputbox"
                type="password"
                placeholder="password"
                onChange={this.WriteUserInfo("password")}
              ></input>
            </div>
            <br></br>
            <div>
              <input
                className="inputbox"
                type="email"
                placeholder="email"
                onChange={this.WriteUserInfo("email")}
              ></input>
            </div>
            <br></br>
            <div>
              <input
                className="inputbox"
                type="text"
                placeholder="username"
                onChange={this.WriteUserInfo("username")}
              ></input>
            </div>
            <br></br>
            <div>
              <span className="signupfont">첫번째 좋아하는 도시 : </span>
              <select
                value={this.state.value}
                onChange={this.WriteUserInfo("location1")}
              >
                {/* <optgroup label="도시를 선택하세요!"></optgroup> */}
                <option value="">선택안함</option>
                <option value="seoul">서울</option>
                <option value="incheon">인천</option>
                <option value="daegu">대구</option>
                <option value="gwangju">광주</option>
                <option value="busan">부산</option>
              </select>
            </div>
            <br></br>
            <div>
              <span className="signupfont">두번째 좋아하는 도시 : </span>
              <select
                value={this.state.value}
                onChange={this.WriteUserInfo("location2")}
              >
                {/* <optgroup label="도시를 선택하세요!"></optgroup> */}
                <option value="">선택안함</option>
                <option value="seoul">서울</option>
                <option value="incheon">인천</option>
                <option value="daegu">대구</option>
                <option value="gwangju">광주</option>
                <option value="busan">부산</option>
              </select>
            </div>
            <br></br>
            <div>
              <button className="signupbtn" onClick={this.handlerSignup_0}>
                회원가입
            </button>
            </div>
            <br></br>
            <Link to="/login" className="signupfont_0">
              이미 아이디가 있으신가요?
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
