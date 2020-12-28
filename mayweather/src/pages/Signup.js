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
      errorMessage: "",
    };
    this.WriteUserInfo = this.WriteUserInfo.bind(this);
    this.handlerSignup = this.handlerSignup.bind(this);
  }
  WriteUserInfo = (key) => (e) => {
    this.setState({ [key]: e.target.value });
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
      return this.setState({
        errorMessage:
          "비어 있는 값이 있습니다. 혹은 중복된 도시가 선택되었습니다. 확인 바랍니다.",
      });
    } else {
      this.setState({
        errorMessage: "",
      });
      if (this.state.location1 !== "" && this.state.location2 === "") {
        // 도시1만 값이 있을 때
        axios
          .post(
            "http://13.209.245.44/signup",
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
            "http://13.209.245.44/signup",
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
            "http://13.209.245.44/signup",
            {
              userId: this.state.userId,
              password: this.state.password,
              email: this.state.email,
              username: this.state.username,
              location: `${this.state.location1}, ${this.state.location2}`,
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
      <div className="signup">
        <h1>회원가입</h1>
        <h2>모든 항목을 적어야 합니다.</h2>
        <div>
          <input
            type="text"
            placeholder="userId"
            onChange={this.WriteUserInfo("userId")}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={this.WriteUserInfo("password")}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            onChange={this.WriteUserInfo("email")}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={this.WriteUserInfo("username")}
          ></input>
        </div>
        <div>
          <span>첫번째 좋아하는 도시 : </span>
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
        <div>
          <span>두번째 좋아하는 도시 : </span>
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

        <div>
          <button onClick={this.handlerSignup}>회원가입</button>
        </div>
        <Link to="/login">이미 아이디가 있으신가요?</Link>
        {this.errorMessage !== "" ? (
          <div>{this.state.errorMessage}</div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default withRouter(Signup);
