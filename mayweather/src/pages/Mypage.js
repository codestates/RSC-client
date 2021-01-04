import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Logout from "./Logout";
import "../App.css";

/*
1. location변경 버튼 클릭시 모달창으로 열리면서
2. 화면에선택한 지역을 변경,
3. 기존 지역과 변경된 지역 값을 보냄
*/

// function MyLocation({ value, handle })

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

  // handleChangeMyLocation() { //지역 변경에 대한 내 요청
  //     axios
  //         .post("https://mayweather24.com/mypage")
  //         .then((res) => console.log(res))
  //         .catch((err) => console.log(err));
  // }

  // handleMyLocationOnClick1 = () {
  //     this.handleChangeMyLocation();
  // }

  // handleMyLocationOnClick2 = () {
  //     this.handleChangeMyLocation();
  // }

  componentDidMount() {
    axios
      .get("https://mayweather24.com/content", null, { withCredentials: true })
      .then((res) => console.log(res))
      .then((res) => res.data)
      .then((data) => {
        // console.log("***mypage data >>>>", data);
        // if ()
        this.setState({
          userId: data.userId,
          username: data.username,
          email: data.email,
          location1: data.location, //지역1만 어떻게 받아지는지 확인 후 지역2 추가!
        });
      });
  }

  render() {
    return (
      <div>
        <nav>
          <ul className="mypage_navbar">
            <li className="mypage_tohome">
              <Link to="./" className="home">
                Home
              </Link>
            </li>
            <li className="mypage_logout">
              <button onClick={this.handleLogoutOnClick}>Logout</button>
              <Logout open={this.state.isModalOpen}></Logout>
            </li>
          </ul>
        </nav>

        <center>
          <h1>Mypage</h1>
          <br />

          {this.state.isModalOpen ? (
            <div>
              <Logout open={this.state.isModalOpen}></Logout>
            </div>
          ) : (
            <></>
          )}

          <div className="mypage_userinfo">
            <div>ID {/*this.state.userId*/}</div>
            <div>사용자명 {/*this.state.username*/}</div>
            <div>이메일 {/*this.state.email*/}</div>
            <div>
              내가 선택한 지역 1 {/*this.state.location1*/}
              <button onClick={this.handleMyLocationOnClick1}>변경</button>
            </div>
            <div>
              내가 선택한 지역 2 {/*this.state.location1*/}
              <button onClick={this.handleMyLocationOnClick2}>변경</button>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Mypage;
