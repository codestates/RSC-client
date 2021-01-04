import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import userimg from "../userimg.jpg";
import "../App.css";


class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      userId: "",
      email: "",
      location1: "",
      location2: "",
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleLogoutOnClick = () => {
    this.openModal();
    this.props.handleLogout();
  };

  handleChangeMyLocation() { //지역 변경에 대한 내 요청
    return axios
      .post("https://mayweather24.com/mypage")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  handleGetUserInfo = () => {
    return axios
      .get("https://mayweather24.com/content", null, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(res => res.data)
      .then(res => {
        if (res.location.length < 8) {
          this.setState({
            userId: res.userId,
            username: res.username,
            email: res.email,
            location1: res.location,
          })
        } else {
          let arr = res.location.split("");
          arr.splice(arr.indexOf(","), 1);
          let newstr = arr.join("");
          let newarr = newstr.split(" ");
          this.setState({
            userId: res.userId,
            username: res.username,
            email: res.email,
            location1: newarr[0],
            location2: newarr[1],
          })
        }
      })
  }

  // handleMyLocationOnClick1 = () {
  //   console.log()
  // }

  //   this.handleChangeMyLocation();
  // }


  componentDidMount() {
    this.handleGetUserInfo();
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="mypage_navbar">
            <li>MayWeather24</li>
            <li className="mypage_tohome">
              <Link to="./" className="home">Home</Link>
            </li>
            <li className="mypage_logout">
              <button onClick={this.handleLogoutOnClick}>Logout</button>
              <Logout open={this.state.isModalOpen}></Logout>
            </li>
          </ul>
        </nav>

        <div>
        <center>
          <h1>Mypage</h1>
          <br />
        {/* </center> */}
          {this.state.isModalOpen ? (
            <div>
              <Logout open={this.state.isModalOpen}></Logout>
            </div>
          ) : (
              <></>
            )}
          <div className="mypage_userinfobox">
            <img src={userimg} alt="Userimg" className="userimg" />
            <div className="mypage_userinfo">
              <dl className="userinfo_content">
                <dt>사용자 ID</dt>
                <dd>eunwo.o_c</dd>
                <dt>사용자명</dt>
                <dd>차은우</dd>
                <dt>사용자 이메일</dt>
                <dd>eunwoo@mayweather24.com</dd>
                <dt>선택지역 1</dt>
                <dd>서울</dd>
                <button onClick={this.handleMyLocationOnClick1}>변경</button><br />
                <dt>선택지역 2</dt>
                <dd>대구</dd>
                <button onClick={() => {alert("현재는 내가 선택한 지역1만 변경가능합니다.");}}>변경</button>
              </dl>
            {/* <div>ID {this.state.userId}</div>
            <div>사용자명 {this.state.username}</div>
            <div>이메일 {this.state.email}</div>
            <div>
              내가 선택한 지역 1 {this.state.location1}
              <button onClick={this.handleMyLocationOnClick1}>변경</button>
            </div>
            <div>
              내가 선택한 지역 2 {this.state.location2}
              <button onClick={() => {alert("현재는 내가 선택한 지역1만 변경가능합니다.");}}>변경</button>
            </div> */}
            </div>
          </div>
          </center>
          </div>
      </div>
    );
  }
}

export default Mypage;
