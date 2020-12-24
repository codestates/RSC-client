import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      email: "",
      username: "",
      location: "",
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
      this.state.userId === "" ||
      this.state.password === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.location === ""
    ) {
      return this.setState({
        errorMessage: "비어 있는 값이 있습니다. 확인 바랍니다.",
      });
    } else {
      this.setState({
        errorMessage: "",
      });
      axios
        .post("http://localhost:4000/signup", {
          userId: this.state.userId,
          password: this.state.password,
          email: this.state.email,
          username: this.state.username,
          location: this.state.location,
        })
        .then(() => this.props.history.push("/login"))
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <div>
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
          <input
            type="text"
            placeholder="Favorite_Location"
            onChange={this.WriteUserInfo("location")}
          ></input>
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
