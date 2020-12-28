import axios from "axios";
import React from "react";
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      errorMessage: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  //http://13.209.245.44/ or http://54.180.36.82:5000
  handleLogin = () => {
    const { userId, password } = this.state;
    const { handleResponseSuccess } = this.props;
    if (this.state.userId === "" || this.state.password === "") {
      this.setState({ errorMessage: "ID와 비밀번호를 다시 확인해주세요" });
      return;
    } else {
      axios
        .post("http://54.180.36.82:5000/login", {
          userId: userId,
          password: password,
        })
        .then((res) => {
          console.log("res >>>", res);
          handleResponseSuccess();
        });
    }
  };
  render() {
    return (
      <div>
        <center>
          <h1>로그인</h1>
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
            <div>
              <Link to="/signup">아직 회원이 아니신가요?</Link>
            </div>
            <button
              className="loginbtn"
              type="submit"
              onClick={this.handleLogin}
            >
              로그인
            </button>
            {<div>{this.state.errorMessage}</div>}
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);
